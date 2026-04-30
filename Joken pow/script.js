const resultsBox = document.querySelector(".results")
const optionImage = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const cpuResult = document.querySelector(".cpu-choice img")
const userResult = document.querySelector(".user-choice img")

const computerImg = ['src/pedra.png', 'src/papel.png', 'src/tesoura.png']

/* 
    R - 0 - rock
    P - 1 -  paper
    S - 2 -Scissor

*/
const winner = {
    RR: "Draw",
    RP: "Loser",
    RS: "Winner",
    PP: "Draw",
    PR: "Winner",
    PS: "Loser",
    SS: "Draw",
    SP: "Winner",
    SR: "Loser"
}

function HandleOptionClick(event) {
    const clickImage = (event.currentTarget)
    const clickIndex = Array.from(optionImage).indexOf(clickImage)

    cpuResult.src = userResult.src = computerImg[0]
    container.classList.add("start")
    resultsBox.classList.remove("hovertext")
    resultText.textContent = "..."

    setTimeout(() => {
        container.classList.remove("start")
        resultsBox.classList.add("hovertext")

        const randomNumber = Math.floor(Math.random() * computerImg.length)
        cpuResult.src = computerImg[randomNumber]
        userResult.src = computerImg[clickIndex]
        
        const userValue = ['R', 'P', 'S'] [clickIndex]
        const cpuValue = ['R', 'P', 'S'] [randomNumber]
        const user_cpu_result = userValue + cpuValue
        const finalResult = winner[user_cpu_result]

        resultText.textContent = userValue === cpuValue ? 'Draw' : finalResult
    }, 2000)
}

optionImage.forEach(img => {
    img.addEventListener("click", HandleOptionClick)
})

