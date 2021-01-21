// fichier javascript principale

let contactInterface = document.querySelector(".contacts");
let conversationInterface = document.querySelector(".conversation");
let contactMenu = document.querySelector(".js-icone-contact-menu");
let backConversation = document.querySelector(".js-icone-conversation-back");
let contacts = [...document.querySelectorAll(".contact")];

contacts.forEach(contact => {
  contact.addEventListener("click", function () {
    if (window.innerWidth <= 575) {
      contactInterface.classList.add("d-none");
      conversationInterface.classList.remove("d-none");
    }
  });
})

backConversation.addEventListener('click', function() {
  contactInterface.classList.remove("d-none");
  conversationInterface.classList.add("d-none");
});
