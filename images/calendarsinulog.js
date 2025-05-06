
const cell = document.getElementById("day-cell");
const label = document.getElementById("label");
const cell1 = document.getElementById("day-cell1");
const label1 = document.getElementById("label1");
const cell2 = document.getElementById("day-cell2");
const label2 = document.getElementById("label2");
const cell3 = document.getElementById("day-cell3");
const label3 = document.getElementById("label3");
const cell4 = document.getElementById("day-cell4");
const label4 = document.getElementById("label4");
const cell5 = document.getElementById("day-cell5");
const label5 = document.getElementById("label5");
const cell6 = document.getElementById("day-cell6");
const label6 = document.getElementById("label6");
const cell7 = document.getElementById("day-cell7");
const label7 = document.getElementById("label7");
const cell8 = document.getElementById("day-cell8");
const label8 = document.getElementById("label8");

  // Helper function
function attachHoverEvents(cell, label) {
cell.addEventListener("mouseenter", function () {
label.style.display = "block";
});
cell.addEventListener("mouseleave", function () {
label.style.display = "none";
});
}

attachHoverEvents(cell, label);
attachHoverEvents(cell1, label1);
attachHoverEvents(cell2, label2);
attachHoverEvents(cell3, label3);
attachHoverEvents(cell4, label4);
attachHoverEvents(cell5, label5);
attachHoverEvents(cell6, label6);
attachHoverEvents(cell7, label7);
attachHoverEvents(cell8, label8);
