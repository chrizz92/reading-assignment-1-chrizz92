/**
 * 
 */

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function test() {
    console.log("Vor der sleep-Funktion");
    await Sleep(5000); // Pausiert die Funktion für 3 Sekunden
    console.log("Nach der Sleep Funktion");
}

test();




