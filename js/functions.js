
function calcular()
{
    var cantidad=document.getElementById("cantidad").value;
    var select=document.getElementById("categoria");
    var select_activa=select.options[select.selectedIndex].value;
    var result=0;

    if (cantidad>0)
        {
            switch(select_activa=parseInt(select_activa))
            {
            case 1:
                subtotal=parseInt(cantidad)*200;
                descuento=subtotal*80/100;
                result=subtotal-descuento
                break;
            case 2:
                subtotal=parseInt(cantidad)*200;
                descuento=subtotal*50/100;
                result=subtotal-descuento
                break;
            case 3:
                subtotal=parseInt(cantidad)*200;
                descuento=subtotal*15/100;
                result=subtotal-descuento
                break;
            }
            document.getElementById("error").innerHTML="";
            document.getElementById("total").innerHTML=result;
        }
    else
        {
            document.getElementById("total").innerHTML="";
            document.getElementById("error").innerHTML="Por favor ingresar cantidad correcta";
        }
    
}

function borrar()
{
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("correo").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("total").innerHTML="";
    document.getElementById("error").innerHTML="";
}

