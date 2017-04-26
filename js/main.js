function mostrarMensaje(str){
			var str = document.getElementsByClassName("mensaje").length;
							console.log(str);
			var etiq = " ";
				if(str == 1){
					etiq = alert("Es muy poco");
					}
			if (str > 2 && (str< 4)){
				etiq = alert("No está mal");
			}
			if (str >= 4 ){
				etiq = alert("Son muchos!");
			}
			return etiq;
		}
		mostrarMensaje();