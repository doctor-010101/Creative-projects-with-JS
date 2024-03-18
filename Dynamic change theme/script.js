let $ = document;
let colorBtns = $.querySelectorAll('.btn');
let themeCssVariables = $.querySelector(':root');

colorBtns.forEach(colorBtn => {
    colorBtn.addEventListener('click', event => {
        let mainColorTheme = event.target.dataset.color
        themeCssVariables.style.setProperty('--theme-color', mainColorTheme)
    })
})

