/*
 * Page 3 — the results / explanation page.
 * Reads the marked cell indices from sessionStorage, shows the count (RESULT)
 * in place of "###", and rebuilds the same 3 x 3 grid with the data label and
 * the red risk explanation. Cells the user marked on page 2 get the
 * Selected.svg badge in the bottom-right corner.
 * "Od začátku" clears the stored state and returns to the first page.
 */
(function () {
  var marked = [];
  try {
    marked = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    marked = [];
  }
  var markedSet = new Set(marked);

  // RESULT = number of marked cells.
  document.getElementById("result").textContent = String(markedSet.size);

  var grid = document.getElementById("grid");

  CELLS.forEach(function (cell, index) {
    var el = document.createElement("div");
    el.className = "cell";

    // the page-2 figure, faint, sits behind the text
    var bg = document.createElement("img");
    bg.className = "bg-icon";
    bg.src = "../img/" + cell.icon;
    bg.alt = "";

    var explanation = document.createElement("p");
    explanation.className = "explanation";
    explanation.textContent = cell.explanation;

    var caption = document.createElement("div");
    caption.className = "caption results";
    caption.innerHTML = captionHTML(cell.label);

    el.appendChild(bg);
    el.appendChild(explanation);
    el.appendChild(caption);

    // every cell is a risk: a green check where the user marked it,
    // a red risk mark (same corner/size) where they missed it
    var badge = document.createElement("img");
    badge.className = "selected-badge";
    if (markedSet.has(index)) {
      badge.src = "../img/Selected.svg";
      badge.alt = "Označili jste toto pole";
    } else {
      badge.src = "../img/Risk-marked2.svg";
      badge.alt = "Toto pole jste neoznačili – přitom je rizikové";
    }
    el.appendChild(badge);

    grid.appendChild(el);
  });

  // Clear state when restarting so RESULT and marks are forgotten.
  document.getElementById("restart").addEventListener("click", function () {
    sessionStorage.removeItem(STORAGE_KEY);
  });
})();
