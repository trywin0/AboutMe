const mainDiv = document.querySelector(".main");
const loadingDiv = document.querySelector(".loading");
const loadingText = document.querySelector(".loading-text")

mainDiv.style.display = "none"

const loadingTime = 2000;

setTimeout(() =>{

mainDiv.style.display="block"
loadingDiv.style.display="none"
mainDiv.className+=" puff-in-center"

}, loadingTime);

const updateInterval = 300;

const updateLoops = loadingTime/updateInterval

for(let i = 0; i < updateLoops; i++){
    const amountOfDots = i%3+1
    setTimeout(() =>{
        const fixedText = loadingText.innerText.replace(/\./g, "")
        loadingText.innerText = fixedText+".".repeat(amountOfDots)
    }, updateInterval*i)
}