// class Typing {
//     constructor({
//         el,
//         interval,
//         delay
//     }) {
//         this.el = document.querySelector(el);
//         this.interval = interval || 500
//         this.delay = delay == undefined ? 1000 : delay
//         this.text = this.el.innerHTML.trim()
//         this.el.innerHTML = ""
//         setTimeout(() => this.write(), this.delay);
//     }
//     write(i = 0) {
//         this.el.innerHTML += this.text[i]
//         i++
//         if (i < this.text.length) {
//             setTimeout(() => this.write(i), this.interval);
//         }
//     }
// }
// new Typing({
//     el: ".header__content h1",
//     interval: 300,
//     delay: 1000
// })
// new Typing({
//     el: ".header__content p",
//     interval: 200,
//     delay: 500
// })
// new Typing({
//     el: ".info__scroll-desc",
//     interval: 100,
//     delay: 0
// })



// const title = document.querySelector('.header__content h1');
// let text = title.innerHTML
// title.innerHTML = ''
// function write(i = 0) {
//     title.innerHTML += text[i]
//     i++
//     if (i < text.length) {
//         setTimeout(() => {
//             write(i)
//         }, 100)
//     }
//     ;
// }
// write()
const myDiv = document.querySelector('.header__content');
myDiv.style.transition = `ease 2 s`
class Rand {
    constructor({
        div,
        transition,
        header
    }) {
        this.div = document.querySelector(div);
        this.header = document.querySelector(header) || null;
        this.transition = transition || `4s`
        this.div.style.transition = `ease ${transition}`;
        this.div.style.cursor = `crosshair`
        // this.div.addEventListener("mouseenter", () => {
        //     this.div.style.marginLeft = `${this.randomLeft()}px`;
        //     this.div.style.marginTop = `${this.randomTop()}px`;

        // });
        this.div.onmouseenter = () => {
            this.div.style.marginLeft = `${this.randomLeft()}px`;
            this.div.style.marginTop = `${this.randomTop()}px`;

        }
    }
    randomLeft() {
        //    this.div.style.marginLeft = `100px` 
        // this.transition = transition || `4s`
        return Math.floor(Math.random() * (window.outerWidth - 30 - this.div.clientWidth * 2) + this.div.clientWidth)

    }
    randomTop() {
        // this.transition = transition || `4s`
        return Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight * 3) + this.div.clientHeight)

    }
}
new Rand({
    div: '.header__content',
    header: `.header__nav`,
    transition: `2s`,
})
new Rand({
    div: '.info',
    header: `.footer`,
    transition: `3s`,
})

console.log(window);

// console.log(this.div.clientWidth);
// console.log(Math.round(Math.random() * (window.innerWidth - this.div.clientWidth) + this.div.clientWidth));
// console.log(window.outerWidth - this.div.clientWidth);