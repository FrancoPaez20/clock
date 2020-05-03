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

const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.dot');

document.addEventListener('mousemove', e => {

	cursor.setAttribute('style', 'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;')
	dot.setAttribute('style', 'top: ' + (e.pageY - 2) + 'px; left: ' + (e.pageX - 2) + 'px;')
})