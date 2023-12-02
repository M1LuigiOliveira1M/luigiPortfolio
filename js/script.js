function writingLetters(){
    function letters(element){
        const wrtText = element.innerHTML.split('')
        element.innerHTML = ''
        wrtText.forEach((letter, i) => {
            setTimeout(()=>{
                element.innerHTML += letter
            }, 70 * i)
        })
    }   
    const myName = document.querySelector(".typingText")
    letters(myName)
}

writingLetters()

function byMe(){


    const sectionProjects = document.querySelectorAll('.menu_projects .projects .li_img_project')
    const liProjects = document.querySelectorAll('.menu_projects ul .button_carousel')
    
    sectionProjects[0].classList.add('active')
    liProjects[0].classList.add('active')
    
    function slideShow(index){
        sectionProjects.forEach((div)=>{
            div.classList.remove('active')
        })
        liProjects.forEach((button)=>{
            button.classList.remove('active')
        })
        sectionProjects[index].classList.add('active')
        liProjects[index].classList.add('active')
    }

    liProjects.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
            
        })
    })
}

byMe()