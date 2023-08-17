function ocultarMostrarImagen()
{
    const slider = document.getElementsByClassName('carousel-item');

    for(const i in slider)
    {
        document.getElementById(`imagen-${i}`).style.display = 'none';

        if(slider[i].classList.contains('active'))
        {
            document.getElementById(`imagen-${i}`).style.display = 'block';
        }
    }
}

function mostrar(){
    document.getElementById('img').style.display = 'block';
}

function ocultar(){
    document.getElementById('img').style.display = 'none';

}

