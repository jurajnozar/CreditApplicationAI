/*
 * Page 2 — the interactive quiz grid.
 * Builds the 3 x 5 grid from CELLS (data.js). Clicking a cell toggles the
 * Risk-marked.svg overlay. "Vyhodnotit" stores the marked cell indices in
 * sessionStorage and moves to the results page.
 */
(function () {
  var grid = document.getElementById("grid");

  CELLS.forEach(function (cell, index) {
    var el = document.createElement("div");
    el.className = "cell";
    el.dataset.index = index;

    var icon = document.createElement("img");
    icon.className = "icon";
    icon.src = "../img/" + cell.icon;
    icon.alt = "";

    var caption = document.createElement("div");
    caption.className = "caption";
    caption.innerHTML = cell.label.join("<br>");

    var overlay = document.createElement("img");
    overlay.className = "risk-overlay";
    overlay.src = "../img/Risk-marked.svg";
    overlay.alt = "Označeno jako rizikové";

    el.appendChild(icon);
    el.appendChild(caption);
    el.appendChild(overlay);

    el.addEventListener("click", function () {
      el.classList.toggle("marked");
    });

    grid.appendChild(el);
  });

  document.getElementById("evaluate").addEventListener("click", function () {
    var marked = [];
    grid.querySelectorAll(".cell.marked").forEach(function (el) {
      marked.push(Number(el.dataset.index));
    });
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(marked));
    window.location.href = "page3.html";
  });
})();
