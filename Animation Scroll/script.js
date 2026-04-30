const elements = document.querySelectorAll('.hidden')

//Observe some itens on screen and tell some info like when visible
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } 
        else{
            entry.target.classList.remove('show')

        }
    })
})

elements.forEach((element) => {myObserver.observe(element)})