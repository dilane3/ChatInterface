let screen = document.querySelector(".container-fluid");
let columnInterface = [...document.querySelectorAll(".column")];
let interfaceScrollable = [...document.querySelectorAll(".scroll-view")];
let messagesInterface = document.querySelector(".messages");
let contactsList = document.querySelector(".contacts-list");

screen.style.height = `${window.innerHeight}px`;
screen.style.width = `${window.innerWidth}px`;

columnInterface.forEach(column => {
  column.style.height = `${window.innerHeight}px`;
});

messagesInterface.style.height = `${window.innerHeight -150}px`;
contactsList.style.height = `${window.innerHeight - 80}px`;

window.onresize = function() {
  screen.style.height = `${window.innerHeight}px`;
  screen.style.width = `${window.innerWidth}px`;

  columnInterface.forEach(column => {
    column.style.height = `${window.innerHeight}px`;
  });

  contactsList.style.height = `${window.innerHeight - 80}px`;
  messagesInterface.style.height = `${window.innerHeight - 150}px`;
}
