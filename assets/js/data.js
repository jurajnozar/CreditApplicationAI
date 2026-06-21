/*
 * Single source of truth for the 9 credit-report cells.
 * Used by both page2 (quiz grid with icons) and page3 (results grid with
 * data labels + red risk explanations) so the grids stay perfectly aligned.
 *
 * Order = grid order, left -> right, top -> bottom.
 * Each cell:
 *   icon        - filename in ../img used on page 2
 *   label       - one or more caption lines. Each line is { k, v } where the
 *                 field name `k` is shown in black and the value `v` in blue
 *                 (matching the wireframe's two-colour captions).
 *   explanation - the red risk explanation shown on page 3.
 */
const CELLS = [
  {
    icon: "address.png",
    label: [{ k: "adresa", v: "Ústecký kraj" }],
    explanation: "Ústecký kraj patří mezi nejrizikovější regiony České republiky.",
  },
  {
    icon: "owners.png",
    label: [{ k: "majitelé", v: "5, rodinná firma" }],
    explanation:
      "Příliš mnoho majitelů může vést k nejasnému vedení. Příbuzenské vztahy můžou ovlivnit chod firmy.",
  },
  {
    icon: "founded.png",
    label: [{ k: "založeno", v: "17.2.2025" }],
    explanation:
      "Nová firma. Nemusí být etablovaná na trhu. Nebezpečí podvodu. Nesplňuje metodiku.",
  },
  {
    icon: "secondary-sectors.png",
    label: [{ k: "vedlejší sektory", v: "finanční poradenství, malo-obchod" }],
    explanation:
      "Příliš mnoho oborů není vhodné pro malou firmu. Tříští to pozornost majitelů.",
  },
  {
    icon: "wages.png",
    label: [
      { k: "mzdy 2024", v: "1,2 mio. Kč" },
      { k: "mzdy 2025", v: "280 tis. Kč" },
    ],
    explanation:
      "Významný pokles mzdových nákladů. Je možné, že propustili zaměstnance, nebo nevyplácejí mzdy.",
  },
  {
    icon: "profit-2024.png",
    label: [{ k: "zisk 2024", v: "276 tis. Kč" }],
    explanation:
      "Firma v tomto roce ještě neexistovala – jedná se o falešné výkazy.",
  },
  {
    icon: "profit-2025.png",
    label: [{ k: "zisk 2025", v: "552 tis. Kč" }],
    explanation:
      "Zisk je přesně dvounásobek minulého roku – to je velice nepravděpodobné.",
  },
  {
    icon: "existing-loan-1.png",
    label: [{ k: "existující úvěr", v: "Leasing BMW x7, 347 tis. Kč" }],
    explanation:
      "Luxusní vůz neodpovídá velikosti firmy. Malá výše úvěru k pořizovací ceně je podezřelá.",
  },
  {
    icon: "requested-loan-2.png",
    label: [
      { k: "požadovaný úvěr", v: "Splátkový, 10M Kč, 15 let, stavební materiál" },
    ],
    explanation:
      "Klient nemá na splátky, nevhodný typ úvěru pro daný účel, splatnost překračuje ekonomickou životnost aktiva.",
  },
];

// sessionStorage key shared between page 2 and page 3.
const STORAGE_KEY = "markedCells";

// Build a caption: black field name (k) + blue value (v), one line per entry.
function captionHTML(label) {
  return label
    .map(function (line) {
      return (
        '<span class="cap-k">' +
        line.k +
        '</span> <span class="cap-v">' +
        line.v +
        "</span>"
      );
    })
    .join("<br>");
}
