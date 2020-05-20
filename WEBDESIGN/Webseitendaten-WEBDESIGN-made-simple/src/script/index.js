$(document).ready(function () {
    $('#nb-button').click(function () {
        let mail = $('#nb-email').val();
        if (mail.includes("@"){
            let xhr = new XMLHttpRequest();
            let json = JSON.stringify({
                id: mail
            });

            xhr.open("POST", 'http://localhost:3000/newsletter', false)
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.send(json);
        }     
    });

    
});

