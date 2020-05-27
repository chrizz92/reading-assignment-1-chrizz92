$(document).ready(function () {

	if (window.location.href.includes("index.html")) {
		document.getElementById('nb-button').addEventListener('click', function () {
			let mail = document.getElementById('nb-email').value;
			let firstname = document.getElementById('nb-firstname').value;
			let lastname = document.getElementById('nb-lastname').value;
			let salutation = document.getElementById('nb-male').value;
			if (document.getElementById('nb-female').checked) {
				salutation = document.getElementById('nb-female').value;
			}

			if (RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$").test(mail) && RegExp("[A-Za-z -]{2,20}$").test(firstname) && RegExp("[A-Za-z -]{2,30}$").test(lastname)) {
				//&& RegExp("[A-Za-z -]{2,20}$").test(firstname) && RegExp("[A-Za-z -]{2,30}$").test(lastname)
				alert(mail + "\n" + salutation + "\n" + firstname + "\n" + lastname);
				sendSubscribtion(mail, salutation, firstname, lastname);
			}	
		}
			, false);
	} else if (window.location.href.includes("unsubscribe.html")) {
		document.getElementById('nb-unsub-button').addEventListener('click', function () {
			let mail = document.getElementById('nb-unsub-email').value;
			if (RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$").test(mail)) {
				sendUnsubscribtion(mail);
			}
		}
			, false);
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
		$('#leistung-4-pro').click(function () { sendToFormular(4, 3) });
		//document.getElementById('leistung-4-pro').addEventListener('click', function () { sendToFormular(4, 3); }, false);
	}
	else if (window.location.href.includes("kontakt.html")) {
		document.getElementById('kontakt-submit').addEventListener('click', function () { sendContactForm() }, false);
	}
	else {

    }

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

	//Anmeldung zum Newsletter
	function sendSubscribtion(mail, salutation, firstname, lastname) {
		var xhr = new XMLHttpRequest();
		var url = " http://localhost:3000/newsletter";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 201) {
				alert("Vielen Dank! Die Anmeldung war erfolgreich.");
			} 
			if (xhr.readyState === 4 && xhr.status === 500) {
				alert("Sie sind bereits zu unserem Newsletter angemeldet!");
			}
		};
		var data = "{" + "\"" + "id" + "\"" + ":" + "\"" + mail + "\"" + "," + "\"" + "salutation" + "\"" + ":" + "\"" + salutation + "\"" + "," + "\"" + "firstname" + "\"" + ":" + "\"" + firstname + "\"" + "," + "\"" + "lastname" + "\"" + ":" + "\"" + lastname + "\"" + "}";
		alert(data);
		xhr.send(data);
		alert("Anmeldung wird gesendet.")
	}

	//Abmeldung vom Newsletter
	function sendUnsubscribtion(mailadress) {
		var xhr = new XMLHttpRequest();
		var url = "http://localhost:3000/newsletter/" + mailadress;
		xhr.open("DELETE", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				alert("Sie wurden erfolgreich abgemeldet.");
			}
			if (xhr.readyState === 4 && xhr.status === 404) {
				alert("Fehler! Diese E-Mail-Adresse ist nicht bekannt.")
            }
		};
		xhr.send();
		alert("Abmeldung wird gesendet.")
	}

});






























