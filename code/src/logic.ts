type Words = Record<string, string>;

export const words: Words = {
  "autonomiczny": "autonome",
  "autonomiczna": "autonome",

  "ambitny": "ambitieux",
  "ambitna": "ambitieuse",

  "gadatliwy": "bavard",
  "gadatliwa": "bavarde",

  "kapryśny": "capricieux",
  "kapryśna": "capricieuse",

  "sumienny": "consciencieux",
  "sumienna": "consciencieuse",

  "kreatywny": "créatif",
  "kreatywna": "créative",

  "ciekawski": "curieux",
  "ciekawska": "curieuse",

  "delikatny": "délicat",
  "delikatna": "délicate",

  "dyskretny": "discret",
  "dyskretna": "discrète",

  "dynamiczny": "dynamique",
  "dynamiczna": "dynamique",

  "skuteczny": "efficace",
  "skuteczna": "efficace",

  "energiczny": "énergique",
  "energiczna": "énergique",

  "szczery": "franc",
  "szczera": "franche",

  "beztroski": "insouciant",
  "beztroska": "insouciante",

  "niecierpliwy": "impatient",
  "niecierpliwa": "impatiente",

  "powolny": "lent",
  "powolna": "lente",

  "nieuczciwy": "malhonnête",
  "nieuczciwa": "malhonnête",

  "podejrzliwy": "méfiant",
  "podejrzliwa": "méfiante",

  "skrupulatny": "méticuleux",
  "skrupulatna": "méticuleuse",

  "zmotywowany": "motivé",
  "zmotywowana": "motivées",

  "optymistyczny": "optimiste",
  "optymistyczna": "optimiste",

  "zorganizowany": "organisé",
  "zorganizowana": "organisée",

  "marudny": "plaintif",
  "marudna": "plaintive",

  "punktualny": "ponctuel",
  "punktualna": "ponctuelle",

  "pomocny": "serviable",
  "pomocna": "serviable",

  "uśmiechnięty": "souriant",
  "uśmiechnięta": "souriante",

  "nieśmiały": "timide",
  "nieśmiała": "timide",

  "tolerancyjny": "tolérant",
  "tolerancyjna": "tolérante"
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