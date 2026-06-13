/*
 * Page 3 — the results / explanation page.
 * Reads the marked cell indices from sessionStorage, shows the count (RESULT)
 * in place of "###", and rebuilds the same 3 x 5 grid with the data label and
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

    var explanation = document.createElement("p");
    explanation.className = "explanation";
    explanation.textContent = cell.explanation;

    var caption = document.createElement("div");
    caption.className = "caption results";
    caption.innerHTML = cell.label.join("<br>");

    el.appendChild(explanation);
    el.appendChild(caption);

    if (markedSet.has(index)) {
      var badge = document.createElement("img");
      badge.className = "selected-badge";
      badge.src = "../img/Selected.svg";
      badge.alt = "Označili jste toto pole";
      el.appendChild(badge);
    }

    grid.appendChild(el);
  });

  // Clear state when restarting so RESULT and marks are forgotten.
  document.getElementById("restart").addEventListener("click", function () {
    sessionStorage.removeItem(STORAGE_KEY);
  });
})();
