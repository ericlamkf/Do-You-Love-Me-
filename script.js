const NObutton = document.getElementById("NObutton")
const YESbutton = document.getElementById("YESbutton")
let title = document.getElementById("title")
let gif = document.getElementById("gif")
let word_blur = document.getElementById("word-blur")
let count = 0
const grow = "20px"
let isYES = false

YESbutton.addEventListener("click", () => {
    title.innerHTML = "I Love You too❤️"
    title.style.color = "red";
    gif.src = "YES.gif"
    word_blur.innerHTML = "Thank You Baby😍"
    word_blur.style.left = "80px"
    gif.style.height = "440px"

    YESbutton.style.opacity = "0"
    YESbutton.disabled = true
    YESbutton.style.cursor = "default"
    NObutton.style.opacity = "0"
    NObutton.disabled = true
    NObutton.style.cursor = "default"

    title.addEventListener("mouseenter", () => {
        title.style.color = "rgb(127, 21, 21)"
        title.style.transform = "scale(1.2)"
    })

    title.addEventListener("mouseleave", () => {
        title.style.color = "red"
        title.style.transform = "scale(1)"
    })

    title.addEventListener("click", () => {
        title.style.transform = "rotate(180deg)"

        setTimeout(() => {
            location.reload()
        }, 500)
    })
})


NObutton.addEventListener("click", () => {
    title.style.color = "white";
    title.style.fontSize = "40px"
    count++
    if (count == 0) {
        gif.src = "cry.gif"
        title.innerHTML = "You don't love me ?😢"
    }
    else if (count == 1) {
        gif.src = "cry2.gif"
        title.innerHTML = "I'm so sad🥲"
    }
    else if (count == 2) {
        gif.src = "cry3.gif"
        title.innerHTML = "You're so bad uwu"
        count = -1
    }
    word_blur.innerHTML = "Don't choose NO plssss"
    word_blur.style.left = "30px"

    gif.style.width = "450px"
    let currentHeightNO = parseInt(window.getComputedStyle(NObutton).height)
    NObutton.style.height = (currentHeightNO - parseInt(grow)) + "px"
    let currentWidthNO = parseInt(window.getComputedStyle(NObutton).width)
    NObutton.style.width = (currentWidthNO - parseInt(grow) - 80) + "px"
    let NOfont = parseInt(window.getComputedStyle(NObutton).fontSize)
    NObutton.style.fontSize = (NOfont - 5) + "px"

    let currentHeight = parseInt(window.getComputedStyle(YESbutton).height)
    YESbutton.style.height = (currentHeight + parseInt(grow)) + "px"
    let currentWidth = parseInt(window.getComputedStyle(YESbutton).width)
    YESbutton.style.width = (currentWidth + parseInt(grow)) + "px"
})