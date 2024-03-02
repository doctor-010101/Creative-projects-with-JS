let $ = document

// Selection of elements

let leftEye = $.querySelector('.lefteye')
let rightEye = $.querySelector('.righteye')
let userInput = $.querySelector('#userInput')
let passInput = $.querySelector('#passInput')

// Variables

let leftEyeTop = 75
let leftEyeLeft = 110
let leftEyePaddingLeft = 0
let leftEyePaddingTop = 0

let rightEyeTop = 75
let rightEyeLeft = 174
let rightEyePaddingLeft = 0
let rightEyePaddingTop = 0

// Functions

const userInputFocus = () => {

    eyePosition = setInterval(() => {

        if (leftEyePaddingTop === 10) {
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'

        rightEye.style.paddingTop = rightEyePaddingTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        leftEyePaddingTop++
        leftEyeLeft--

        rightEyePaddingTop++
        rightEyeLeft--

    }, 10)
}

const userInputBlur = () => {

    eyePosition = setInterval(() => {

        if (leftEyePaddingTop === 0) {
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'

        rightEye.style.paddingTop = rightEyePaddingTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        leftEyePaddingTop--
        leftEyeLeft++

        rightEyePaddingTop--
        rightEyeLeft++

    }, 10)
}

const userInputKeydown = (event) => {

    if (leftEyePaddingLeft > 20) {
        if (event.keyCode === 8) {
            leftEyePaddingLeft--
            rightEyePaddingLeft--
        } else {

            return false
        }
    }

    if (event.keyCode === 8) {
        leftEyePaddingLeft--
        rightEyePaddingLeft--
    } else {
        leftEyePaddingLeft++
        rightEyePaddingLeft++
    }

    leftEye.style.paddingLeft = leftEyePaddingLeft + 'px'
    rightEye.style.paddingLeft = rightEyePaddingLeft + 'px'
}

const passInputFocus = () => {

    // leftEye.style.paddingLeft = 0
    // rightEye.style.paddingLeft = 0

    let eyePosition = setInterval(() => {

        if (leftEyeTop === 60) {
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'

        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        leftEyeTop--
        leftEyeLeft++

        rightEyeTop--
        rightEyeLeft--

    }, 10);
}

const passInputBlur = () => {

    let eyePosition = setInterval(() => {

        if (leftEyeTop === 75) {
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'

        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        leftEyeTop++
        leftEyeLeft--

        rightEyeTop++
        rightEyeLeft++

    }, 10);
}

// Set events

userInput.addEventListener('focus', userInputFocus)
userInput.addEventListener('blur', userInputBlur)
userInput.addEventListener('keydown', userInputKeydown)
passInput.addEventListener('focus', passInputFocus)
passInput.addEventListener('blur', passInputBlur)

