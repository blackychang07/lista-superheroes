superheroe_array = [];

function submit()
{
    var superheroe_1 = document.getElementById("superheroe_1").value;
    var superheroe_2 = document.getElementById("superheroe_2").value;
    var superheroe_3 = document.getElementById("superheroe_3").value;
    var superheroe_4 = document.getElementById("superheroe_4").value;

    superheroe_array.push(superheroe_1);
    superheroe_array.push(superheroe_2);
    superheroe_array.push(superheroe_3);
    superheroe_array.push(superheroe_4);

    console.log(superheroe_array);

    document.getElementById("ver_nombre").innerHTML = superheroe_array;
    document.getElementById("boton_enviar").style.display ="none";
    document.getElementById("boton_ordenar").style.display = "inline-block";

}

function sorting()
{
    superheroe_array.sort();
    console.log(superheroe_array);
    document.getElementById("ver_nombre").innerHTML = superheroe_array;
    
}
