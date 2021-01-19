let screen = document.querySelector(".container-fluid");
let columnInterface = [...document.querySelectorAll(".column")];
let interfaceScrollable = [...document.querySelectorAll(".scroll-view")];

screen.style.height = `${window.innerHeight}px`;
screen.style.width = `${window.innerWidth}px`;

columnInterface.forEach(column => {
  column.style.height = `${window.innerHeight}px`;
});

interfaceScrollable.forEach(interface => {
  interface.style.height = `${window.innerHeight - 80}px`;
});

window.onresize = function() {
  screen.style.height = `${window.innerHeight}px`;
  screen.style.width = `${window.innerWidth}px`;

  columnInterface.forEach(column => {
    column.style.height = `${window.innerHeight}px`;
  });

  interfaceScrollable.forEach(interface => {
    interface.style.height = `${window.innerHeight - 80}px`;
  });
}
