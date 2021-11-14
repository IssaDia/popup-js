const buttons = document.querySelectorAll(".button");
const popup = document.querySelector(".popup");
const popup_message = document.querySelector(".popup_message");
const close = document.querySelector(".close");
console.log(close);

for(let i = 0;i<buttons.length;i++) {

    buttons[i].addEventListener("click", function () {
      popup.classList.remove("hide");
      let message = this.getAttribute("data-message");
      console.log(message);
      popup_message.innerText = message;

    });
}

close.addEventListener("click", function(){
    popup.classList.add("hide");
})


