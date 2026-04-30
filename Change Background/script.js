const color_choose = document.querySelector('.color-choose')
const image_bg = document.querySelector('.image-bg')
const body_html = document.body


function changeColor(color) {
    body_html.style.backgroundImage = 'none'
    body_html.style.backgroundColor = color
}

function randomColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    changeColor(`rgb(${red}, ${green}, ${blue})`)
}

function applyColorType() {
    const color_text = document.querySelector('.input-color').value

    changeColor(color_text)
}

function chooseImage(image){
    const reader = new FileReader()
    
    reader.readAsDataURL(image)

    reader.onload = (event) =>{
        const urlImage = event.target.result

        body_html.style.backgroundImage = `url('${urlImage}')`

        if(image_bg)
            image_bg.value = ""
    }
}

window.onload = () => {
    randomColor()
}