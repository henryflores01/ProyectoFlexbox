function clickme( )
{
    var movil = document.getElementsByClassName( "movil" );
    var header = document.getElementsByClassName( "header" );  
    console.log( movil, header );

    movil.style.display = header.style.display == 'flex' ? 'none' : 'flex';
}