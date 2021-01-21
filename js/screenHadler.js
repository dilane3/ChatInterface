let screen = document.querySelector(".container-fluid");
let columnInterface = [...document.querySelectorAll(".column")];
let messagesInterface = document.querySelector(".messages");
let contactsList = document.querySelector(".contacts-list");
let conversation = document.querySelector(".conversation");
let screenWidth = window.innerWidth;

screen.style.height = `${window.innerHeight}px`;
screen.style.width = `${window.innerWidth}px`;

columnInterface.forEach(column => {
  column.style.height = `${window.innerHeight}px`;
});

messagesInterface.style.height = `${window.innerHeight - 150}px`;

if (screenWidth < 768) {
  contactsList.style.height = `${window.innerHeight - 150}px`;
} else {
  contactsList.style.height = `${window.innerHeight - 80}px`;
}


window.onresize = function () {
  screenWidth = window.innerWidth;

  screen.style.height = `${window.innerHeight}px`;
  screen.style.width = `${window.innerWidth}px`;

  columnInterface.forEach(column => {
    column.style.height = `${window.innerHeight}px`;
  });

  if (screenWidth < 768) {
    contactsList.style.height = `${window.innerHeight - 150}px`;
  } else {
    contactsList.style.height = `${window.innerHeight - 80}px`;
  }
  messagesInterface.style.height = `${window.innerHeight - 150}px`;
}

