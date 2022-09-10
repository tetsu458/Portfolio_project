let swapButton =  document.getElementById("swap");
let spellButton = document.getElementById("spell");

const randomNum = num => {
    return Math.floor(Math.random() * num)
}

const createRGB = () => {
    return `rgb(${randomNum(364)}, ${randomNum(364)}, ${randomNum(364)})`
}


spellButton.addEventListener('click', () => {
    document.getElementsByClassName("first")[0].style.backgroundColor = createRGB();
    document.getElementsByClassName("second")[0].style.backgroundColor = createRGB();
    document.getElementsByClassName("third")[0].style.backgroundColor = createRGB();
})


// image swapper
let pfpSource = ["./gallery/espada.png", "./gallery/bubble_tea_guy.png", "./gallery/purple_guy.png", "./gallery/vampire.png"]
let index = 1;

const swapPfp = () => {
    if(index === pfpSource.length){
        index = 0;
    }
    document.getElementById("pfp-pic").src = pfpSource[index];
    index++;
} 

swapButton.addEventListener("click", swapPfp);