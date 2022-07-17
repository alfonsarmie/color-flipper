const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnColor = document.getElementById('btn');
const titleColor = document.querySelector('.color')


btnColor.addEventListener("click", () => {

    let bgcolor = ['#'];

    for (let i = 0; i < 6; i++){

        const nHex = Math.floor(Math.random() * hex.length);
        const colorPicked = hex[nHex];

        bgcolor.push(colorPicked);
    }

    //Disclaimer: this reduce function could be else replaced by arr.join('')
    const color = bgcolor.reduce((acc,el) => acc + el); 

    const background = document.querySelector("body");
    background.style.backgroundColor = color; 

    titleColor.innerHTML = color;

})