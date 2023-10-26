var cantidadEmpleados = prompt("Ingrese la cantidad de empleados que desea agregar:");
        cantidadEmpleados = parseInt(cantidadEmpleados, 10);

        if (!isNaN(cantidadEmpleados) && cantidadEmpleados > 0) {
            var empleados = [];
            var formulario = document.getElementById("miFormulario");

            formulario.addEventListener("submit", function(event) {
                event.preventDefault();
                
                var nombre = document.getElementById("nombre").value;
                var salarioMensual = parseFloat(document.getElementById("salario").value);
                var antiguedad = parseFloat(document.getElementById("antiguedad").value);
                var bonificacion = 250;
                var horasExtras = parseFloat(document.getElementById("horas").value);

                if (isNaN(salarioMensual) || isNaN(bonificacion) || isNaN(horasExtras)) {
                    alert("Por favor, ingrese valores numéricos válidos.");
                    return;
                }

                var igss = salarioMensual * 0.0483;
                var salarioTotal = salarioMensual - igss + bonificacion;
                var boleto = calculoboleto(salarioTotal);

                empleados.push({
                    nombre: nombre,
                    salarioTotal: salarioTotal,
                    antiguedad: antiguedad,
                    boleto:boleto,
                    horas:horasExtras
                });

                document.getElementById("nombre").value="";
                document.getElementById("salario").value="";
                document.getElementById("horas").value="";
                document.getElementById("antiguedad").value="";

                

                if (empleados.length === cantidadEmpleados) {
                    
                    actualizarTabla();
                    document.getElementById("reloadButton").disabled=true;
                    document.getElementById("nombre").disabled=true;
                    document.getElementById("salario").disabled=true;
                    document.getElementById("horas").disabled=true;
                    document.getElementById("antiguedad").disabled=true;
                    
                    

                }
            });

           

            function calculoboleto(salario) {
              if(500 > salario){
                    return 0;     
              }else if(500 < salario && salario < 1000){
                    return 10;
              }
              else if(1000 < salario && salario < 3000){
                    return 15;
              }else if(3000 < salario && salario < 6000){
                    return 50;
              }else if(6000 < salario && salario < 9000){
                    return 75;
              }else if(9000 < salario && salario < 12000){
                return 100;
              }else{
                return 150;
              }   
            }

            var Sumadesalarios = 0;
            var SumadeHoras=0;

            function actualizarTabla() {
                var tablaEmpleados = document.getElementById("tablaresultados");
                tablaEmpleados.innerHTML = ""; // Limpiar la tabla
                var tablaResutados =document.getElementById("tablaresultados2");
                tablaResutados.innerHTML="";

    
                for (var i = 0; i < empleados.length; i++) {
                   

                    Sumadesalarios += empleados[i].salarioTotal;
                    SumadeHoras += empleados[i].horas;
                    



                    var fila = tablaEmpleados.insertRow();
                    var Contador =fila.insertCell(0);
                    var celdaNombre = fila.insertCell(1);
                    var celdaSalario = fila.insertCell(2);  // PRIMERA TABLA
                    var celdaBoleto = fila.insertCell(3);
                    var celdaHoras = fila.insertCell(4);
                    var celdaantiguedad = fila.insertCell(5);

                    
                    Contador.innerHTML = i+1;
                    celdaNombre.innerHTML = empleados[i].nombre;
                    celdaSalario.innerHTML = "Q."+empleados[i].salarioTotal.toFixed(2);
                    celdaBoleto.innerHTML = "Q."+empleados[i].boleto;
                    celdaHoras.innerHTML = empleados[i].horas+" h";
                    celdaantiguedad.innerHTML= empleados[i].antiguedad+" años";
                    

                }


                var tb2fila =tablaResutados.insertRow();
                var celdapromedio = tb2fila.insertCell(0);  // SEGUNDA TABLA
                var celdahorastodas =tb2fila.insertCell(1);

                celdapromedio.innerHTML="Q."+(Sumadesalarios/empleados.length).toFixed(2);
                celdahorastodas.innerHTML=SumadeHoras +" h";
                



            }


        } else {
            alert("Ingrese un número válido mayor que cero para la cantidad de empleados.");
            location.reload();

            
        }
