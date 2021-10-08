// domande
alert(`creiamo una password insicura`)
const user_name = prompt(`come ti chiami?`);
const last_name = prompt(`qualè il tuo cognome`);
const best_color = prompt(`quel'è il tuo colore preferito?`);
// verifica
console.log(`Ecco la tua password` + user_name + last_name + best_color);
// inserimento in html
document.getElementById(`password`).innerHTML = `Ecco la tua password insicura: ` + user_name + last_name + best_color