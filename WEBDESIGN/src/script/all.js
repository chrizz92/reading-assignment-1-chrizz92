$(document).ready(function () {

	if (window.location.href.includes("index.html")) {
		document.getElementById('nb-button').addEventListener('click', function () { sendToFormular(1, 1); }, false);
	}
	else if (window.location.href.includes("leistungen.html")) {
		document.getElementById('leistung-1-basic').addEventListener('click', function () { sendToFormular(1, 1); }, false);
		document.getElementById('leistung-1-adv').addEventListener('click', function () { sendToFormular(1, 2); }, false);
		document.getElementById('leistung-1-pro').addEventListener('click', function () { sendToFormular(1, 3); }, false);
		document.getElementById('leistung-2-basic').addEventListener('click', function () { sendToFormular(2, 1); }, false);
		document.getElementById('leistung-2-adv').addEventListener('click', function () { sendToFormular(2, 2); }, false);
		document.getElementById('leistung-2-pro').addEventListener('click', function () { sendToFormular(2, 3); }, false);
		document.getElementById('leistung-3-basic').addEventListener('click', function () { sendToFormular(3, 1); }, false);
		document.getElementById('leistung-3-adv').addEventListener('click', function () { sendToFormular(3, 2); }, false);
		document.getElementById('leistung-3-pro').addEventListener('click', function () { sendToFormular(3, 3); }, false);
		document.getElementById('leistung-4-basic').addEventListener('click', function () { sendToFormular(4, 1); }, false);
		document.getElementById('leistung-4-adv').addEventListener('click', function () { sendToFormular(4, 2); }, false);
		$('#leistung-4-pro').click(function () { sendForm(4,3) });
		//document.getElementById('leistung-4-pro').addEventListener('click', function () { sendToFormular(4, 3); }, false);
	}
	else if (window.location.href.includes("kontakt.html")) {
		document.getElementById('kontakt-submit').addEventListener('click', function () { sendForm() }, false);
	}
	/*else if (window.location.href.includes("impressum.html")) {
	    
	}
	else {
	
	}
	*/

	function sendToFormular(number, type) {
		alert("starte sendToFormular");
		leistung = "";
		edition = "";

		switch (number) {
			case 1:
				leistung = "Ich interessiere mich für Leistung 1";
				break;
			case 2:
				leistung = "Ich interessiere mich für Leistung 2";
				break;
			case 3:
				leistung = "Ich interessiere mich für Leistung 3";
				break;
			case 4:
				leistung = "Ich interessiere mich für Leistung 4";
				break;
			default:
				alert("Leider gab es einen Fehler bei der Bearbeitung Ihrer Anfrage. Bitte nehmen sie telefonisch mit uns Kontakt auf.");
		}

		switch (type) {
			case 1:
				edition = "Ich bitte um Zusendung eines Angebots für die BASIC-Variante";
				break;
			case 2:
				edition = "Ich bitte um Zusendung eines Angebots für die ADVANCED-Variante";
				break;
			case 3:
				edition = "Ich bitte um Zusendung eines Angebots für die PROFESSIONAL-Variante";
				break;
			default:
				alert("Leider gab es einen Fehler bei der Bearbeitung Ihrer Anfrage. Bitte nehmen sie telefonisch mit uns Kontakt auf.");
		}

		alert(leistung + "\n" + edition);
	}

	function sendForm(leistung, edition) {
		alert("Funktion sendForm()\n"+leistung + "\n" + edition);		
	}
});


//window.onload = function () {}


























