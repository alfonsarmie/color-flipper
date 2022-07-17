const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btnColor = document.querySelector("#btn");
const nameBackground = document.querySelector(".color")


btnColor.addEventListener("click", () => {

    const randomColor = Math.floor(Math.random() * colors.length);

    const background = document.querySelector("body");
    background.style.background = colors[randomColor];
    
    nameBackground.innerHTML = colors[randomColor];

});



