const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

let SlidesCount = mainSlide.querySelectorAll('div').length

let ActiveSlideIndex = 0

sidebar.style.top = `-${(SlidesCount - 1) * 100}vh`

upBtn.addEventListener('click',()=>{
    ChangeSlide('up')
})
downBtn.addEventListener('click',()=>{
    ChangeSlide('down')
})


function ChangeSlide(direction){
    if (direction === 'up'){
        ActiveSlideIndex++
        if (ActiveSlideIndex === SlidesCount)
        {
            ActiveSlideIndex = 0
        }
    }else if (direction === 'down'){
        ActiveSlideIndex--
        if (ActiveSlideIndex < 0)
        {
            ActiveSlideIndex = SlidesCount - 1
        }
    }
    const height = container.clientHeight

    mainSlide.style.transform =`translateY(-${ActiveSlideIndex * height}px)`

    sidebar.style.transform =`translateY(${ActiveSlideIndex * height}px)`

}

