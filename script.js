//alert("hola Diegote");

//EJECUCION POR EVENTO ONCLICK

function registrarse(){

    document.getElementById("error_nombre").innerHTML = ""

    document.getElementById("error_apellido").innerHTML = ""

    document.getElementById("error_dni").innerHTML = ""

    document.getElementById("error_email").innerHTML = ""

    document.getElementById("error_telefono").innerHTML = ""

    //declaracion e inicializacion por que ya le estamos dando un valor
    var nombre = document.form_registrarse.nombre.value
    //DECLARACION
    var apellido
    //INICIALIZACION
    apellido = document.form_registrarse.apellido.value
    
    //declaracion = inicializacion por id .value
    var dni = document.getElementById("dni_id").value

    var email = document.getElementById("email_id").value

    var telefono = document.getElementById("telefono_id").value
    
    var seguro = document.getElementById("seguro_id").value
    
    var password = document.getElementById("password_id").value

    console.log(nombre,apellido,dni,email,telefono,seguro,precio,password);

    if(nombre == ""){

        document.getElementById("error_nombre").innerHTML = "Campo obligatorio";

    } else if (apellido == ""){

        document.getElementById("error_apellido").innerHTML = "Campo obligatorio";

    } else if (dni == ""){ 

        document.getElementById("error_dni").innerHTML = "Campo obligatorio";

    }
    
    else if (email == ""){

     document.getElementById("error_email").innerHTML = "Campo obligatorio";
    
    } else if (telefono == ""){

        document.getElementById("error_telefono").innerHTML = "Campo obligatorio";

    }

}

function cambiarSeguro(){

    var seguro = document.getElementById("seguro_id").value
    console.log(seguro);
    
    switch(seguro){
        case "basico":
        document.getElementById("precio").innerHTML = "$500"
        break;
        
        case "intermedio":
        document.getElementById("precio").innerHTML = "$1000"
        break;
       
        case "premium":
        document.getElementById("precio").innerHTML = "$1500"
        break;
    }


}

cambiarSeguro()
