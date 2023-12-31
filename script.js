const resizableDraggable = document.getElementById("resizable-draggable");

let isDragging = false;
let initialX;
let initialY;

resizableDraggable.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("draggable")) {
    isDragging = true;
    initialX = e.clientX - resizableDraggable.getBoundingClientRect().left;
    initialY = e.clientY - resizableDraggable.getBoundingClientRect().top;
    resizableDraggable.style.cursor = "grabbing";
  }
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  resizableDraggable.style.left = e.clientX - initialX + "px";
  resizableDraggable.style.top = e.clientY - initialY + "px";
});

window.addEventListener("mouseup", () => {
  isDragging = false;
  resizableDraggable.style.cursor = "grab";
});
