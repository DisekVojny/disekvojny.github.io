type Words = Record<string, string>;

export const words: Words = {
    "samolot": "l'avion",
    "samochod": "la voiture",
    "lodz": "le bateau",
    "helokopter": "l'helicoptere",
    "metro": "le metro",
    "ciezarowka": "le camion",
    "pociag": "le train",
    "autobus": "l'autobus",
    "prom": "le ferry",
    "motorowka": "le bateau a moteur",
    "rower": "le velo",
    "tramwaj": "le tramway",
    "motor": "la moto",
    "skuter": "le scooter",
    "taksowka": "le taxi",
    "ekologiczny": "ecologique",
    "zanieczyszczajacy": "pollutant",
    "niebezpieczny": "dangereux",
    "bezpieczny": "sur",
    "wygodny": "commode",
    "niewygodny": "incommode",
    "szybki": "rapide",
    "wolny": "lent",
    "drogi": "cher",
    "tani": "bon marche",
    "glosny": "bruyant",
    "cichy": "silencieux",
    "Placisz karta czy gotowka?": "vous payez en especes ou par carte",
    "o której przyjeżdża pociąg?": "a quelle heure arrive le train",
    "czy jest zniżka dla studentów?": "il y a des reductions pour les etudiants",
    "czy chce pan miejsce przy oknie czy przy korytarzu": "vous voulez une place pres de la fenetre ou cote couloir",
    "co sobie pan życzy": "que desirez-vous",
    "z którego peronu odjeżdża pociąg": "de quel quai part le train"
};

export let usedWords = {...words}

export function applyChanges(selected: Set<string>){
    if(selected.size == 0) return;
    usedWords = {...words}
    usedWords = Object.fromEntries(Object.entries(usedWords).filter(([key, _]) => selected.has(key)));
}

export function getPair(): [string, string]{
    const keys = Object.keys(usedWords);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return [randomKey, usedWords[randomKey]];
}