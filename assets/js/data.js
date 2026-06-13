/*
 * Single source of truth for the 15 credit-report cells.
 * Used by both page2 (quiz grid with icons) and page3 (results grid with
 * data labels + red risk explanations) so the grids stay perfectly aligned.
 *
 * Order = grid order, left -> right, top -> bottom.
 * Each cell:
 *   icon        - filename in ../img used on page 2
 *   label       - the credit-report data line(s) shown as a blue caption.
 *                 May contain a second line; lines are kept as an array.
 *   explanation - the red risk explanation shown on page 3.
 */
const CELLS = [
  {
    icon: "icon-01.png",
    label: ["adresa Ústecký kraj"],
    explanation: "Ústecký kraj patří mezi nejrizikovější regiony České republiky.",
  },
  {
    icon: "icon-02.png",
    label: ["majitelé 5, rodinná firma"],
    explanation:
      "Příliš mnoho majitelů může vést k nejasnému vedení. Příbuzenské vztahy můžou ovlivnit chod firmy.",
  },
  {
    icon: "icon-03.png",
    label: ["založeno 17.2.2025"],
    explanation:
      "Nová firma. Nemusí být etablovaná na trhu. Nebezpečí podvodu. Nesplňuje metodiku.",
  },
  {
    icon: "icon-04.png",
    label: ["sektor Stavebnictví"],
    explanation:
      "Název firmy nesouhlasí s hlavním oborem. Je možné, že se jedná o účelovou firmu.",
  },
  {
    icon: "icon-05.png",
    label: ["vedlejší sektory finanční poradenství, malo-obchod"],
    explanation:
      "Příliš mnoho oborů není vhodné pro malou firmu. Tříští to pozornost majitelů.",
  },
  {
    icon: "icon-06.png",
    label: ["mzdy 2024 1,2 mio. Kč", "mzdy 2025 280 tis. Kč"],
    explanation:
      "Významný pokles mzdových nákladů. Je možné, že propustili zaměstnance, nebo nevyplácejí mzdy.",
  },
  {
    icon: "icon-07.png",
    label: ["zisk 2024 276 tis. Kč"],
    explanation:
      "Firma v tomto roce ještě neexistovala – jedná se o falešné výkazy.",
  },
  {
    icon: "icon-08.png",
    label: ["zisk 2025 552 tis. Kč"],
    explanation:
      "Zisk je přesně dvounásobek minulého roku – to je velice nepravděpodobné.",
  },
  {
    icon: "icon-09.png",
    label: ["rozvaha/úvěry 2025 856 mio. Kč"],
    explanation:
      "Objem úvěrů neodpovídá, součtu úvěrů níže. Klient nepřiznal vše.",
  },
  {
    icon: "icon-10.png",
    label: ["hlavní banka Unicredit"],
    explanation:
      "Pro nás se jedná o neznámého klienta. Proč si nežádá o úvěr u své banky?",
  },
  {
    icon: "icon-11.png",
    label: ["existující úvěr Leasing BMW x7, 347 tis. Kč"],
    explanation:
      "Luxusní vůz neodpovídá velikosti firmy. Malá výše úvěru k pořizovací ceně je podezřelá.",
  },
  {
    icon: "icon-12.png",
    label: ["existující úvěr Kreditní karta, 50 tis. Kč"],
    explanation:
      "Minimální výše úvěru – může být účelový. Jenom jedna karta pro 5 majitelů.",
  },
  {
    icon: "icon-13.png",
    label: ["požadovaný úvěr Měnový limit, 1 mio. Kč"],
    explanation:
      "Není jasné, na co klient potřebuje tento typ úvěru. Podezření na spekulaci na trhu – nefinancujeme.",
  },
  {
    icon: "icon-14.png",
    label: ["požadovaný úvěr Splátkový, 10M Kč, 15 let, stavební materiál"],
    explanation:
      "Klient nemá na splátky, nevhodný typ úvěru pro daný účel, splatnost překračuje ekonomickou životnost aktiva.",
  },
  {
    icon: "icon-15.png",
    label: ["budoucí výnos z klienta 8 %"],
    explanation:
      "Příliš nízký výnos z neznámého a malého klienta. Nesplňuje cíle banky.",
  },
];

// sessionStorage key shared between page 2 and page 3.
const STORAGE_KEY = "markedCells";
