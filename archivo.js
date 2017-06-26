function ContarItemsSeleccionados()
		{
			console.log("Funciones.js cargado correctamente");
    //cuento el número de items seleccionados
    var seleccionados = [];
    var listaIzq = document.getElementById("autosIzquierda").options;
    var listaDer = document.getElementById("autosDerecha").options;

    for(var i = 0; i < listaIzq.length; i++){
    	if(listaIzq[i].selected)
    		seleccionados.push(listaIzq[i]);        
    };  
    for(var j=0; j < seleccionados.length; j++){
    	listaDer.add(seleccionados[j]);
    }
}