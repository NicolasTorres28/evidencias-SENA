
document.addEventListener('DOMContentLoaded', function(){ 
    
    if(document.getElementById("boton")){
        document.getElementById("boton").onclick = function() {
            var animal = document.getElementById("animal").value;
            var nombre = document.getElementById("nombre").value;
            var accion = document.getElementById("accion").value;
            var lugar = document.getElementById("lugar").value;
            var nombre2 = document.getElementById("nombre2").value;
            var accion2 = document.getElementById("accion2").value;
            var lugar2 = document.getElementById("lugar2").value;
            var exclamacion = document.getElementById("exclamacion").value;
            var accion3 = document.getElementById("accion3").value;

            document.getElementById("mostrarMensaje").innerHTML = "Una vez estaba un@ "+animal+" llamado "+ nombre + " que estaba "+accion+" en el "+lugar+" hasta que llego "+nombre2+" que como fue pa que "+accion2+" en el "+lugar2+ " entonces "+nombre+ " le dijo "+exclamacion + " mas bien llegue a "+accion3 +" "

        }
    }
    

}, false);

