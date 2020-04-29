/*///////////////////////////////////////
                  NESS
///////////////////////////////////////*/

const section       = document.getElementsByClassName('ness-section')[0],
      html          = document.getElementsByTagName('html')[0],
      element_list  = []
let   clientY,
      counter       = 0,
      slide_counter = 0,
      active_item   = 0,
      slides        = section.querySelectorAll('.ness-slide')

/*///////////////////////////////////////
              Next slide
///////////////////////////////////////*/

function next_slide () {
    window.scrollTo({
        top: slides[counter].offsetTop,
        behavior: 'smooth'
    })
}

/*///////////////////////////////////////
              Slide change
///////////////////////////////////////*/

function scroll (deltaY) {
    if (deltaY < 0) {
        if (counter > 0) {
            --counter
        }
    } else {
        if (counter + 1 < slides.length) {
            ++counter
        }
    }
    next_slide()
}

/*///////////////////////////////////////
              Load init
///////////////////////////////////////*/

window.addEventListener('load', () => {
    next_slide()
})

/*///////////////////////////////////////
               Resize fix
///////////////////////////////////////*/

window.addEventListener('resize', e => {
    next_slide()
})

/*///////////////////////////////////////
              Scroll Slides
///////////////////////////////////////*/

section.addEventListener('wheel', e => {
    if (section.classList.contains('ness-disabled') && html.classList.contains('ness-disabled')) {
        stop && e.preventDefault()
    } else {
        scroll(e.deltaY)
        section.classList.add('ness-disabled') 
        html.classList.add('ness-disabled')
        setTimeout(() => {
            section.classList.remove('ness-disabled')  
            html.classList.remove('ness-disabled')  
        }, 350)
    }
})

/*///////////////////////////////////////
              Mobile Slides
///////////////////////////////////////*/

section.addEventListener('touchstart', e => {
    e.preventDefault()
    clientY = e.touches[0].clientY
})

section.addEventListener('touchend', e => {
    let deltaY = -(e.changedTouches[0].clientY - clientY)
    scroll(deltaY)
})