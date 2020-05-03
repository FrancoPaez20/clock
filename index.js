(function(){

	let actualizarHora = function(){
	
		var fecha = new Date(),
		horas = fecha.getHours(),
		minutos = fecha.getMinutes(),
		segundos = fecha.getSeconds();

		let pHoras = document.getElementById('horas'),
		pMinutos = document.getElementById('minutos'),
		pSegundos = document.getElementById('segundos');
	
		if (horas < 10){

			horas = '0' + horas;
		}
	
		if (minutos < 10){

			minutos = "0" + minutos;
		}

		if (segundos < 10){

			segundos = "0" + segundos;
		}

		pHoras.textContent = horas;
		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
	};

	actualizarHora();
	let intervalo = setInterval(actualizarHora, 1000);
}())