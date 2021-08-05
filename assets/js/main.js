
//cursor
// After update OptimizedHTML5
let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

document.addEventListener('DOMContentLoaded', () => {

    // Custom JS

    const body = document.querySelector('body')

    cx = window.innerWidth / 2
    cy = window.innerHeight / 2

    body.addEventListener('mousemove', e => {

        clientX = e.pageX
        clientY = e.pageY

        request = requestAnimationFrame(updateMe)

        mouseCoords(e)
        cursor.classList.remove('hidden')
        follower.classList.remove('hidden')

    })

    function updateMe() {

        dx     = clientX - cx
        dy     = clientY - cy
        tiltx  = dy / cy
        tilty  = dx / cx
        radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
        degree = radius * 12

    }



    const cursor   = document.getElementById('cursor'),
        follower = document.getElementById('aura'),
        links    = document.getElementsByTagName('a')

    mouseX = 0, mouseY = 0, posX = 0, posY = 0

    function mouseCoords(e) {

        mouseX = e.pageX
        mouseY = e.pageY

    }

    gsap.to({}, .01, {

        repeat: -1,

        onRepeat: () => {

            posX += (mouseX - posX) / 5
            posY += (mouseY - posY) / 5

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })

            gsap.set(follower, {
                css: {
                    left: posX - 24,
                    top: posY - 24
                }
            })

        }

    })

    for(let i = 0; i < links.length; i++) {

        links[i].addEventListener('mouseover', () => {
            cursor.classList.add('active')
            follower.classList.add('active')
        })

        links[i].addEventListener('mouseout', () => {
            cursor.classList.remove('active')
            follower.classList.remove('active')
        })

    }

    body.addEventListener('mouseout', () => {
        cursor.classList.add('hidden')
        follower.classList.add('hidden')
    })

})


if ($(window).width() < 501){
    var lazyLoadInstance = new LazyLoad({
        threshold: 500
    })
} else {
    var lazyLoadInstance = new LazyLoad({
        threshold: 1000
    })
}



document.querySelector('#hero .button').classList.add('canvasHidden');
document.querySelector('#hero h1').classList.add('canvasHidden');
let prel= document.querySelector('.preloader');
let anim1 = document.querySelector('.title_preloud');


setTimeout(()=>{
    anim1.classList.add('animtitle');
}, 1000)

window.onload = function () {
    document.body.classList.add('loaded_hiding');

    window.setTimeout(function () {
        prel.classList.add('opacity1');
    }, 3000);
    window.setTimeout(function () {

        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');

        animateCanvas()

    }, 6000);
}






const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");
let a= 0;
const frameCount = 250;
const currentFrame = index =>  (`assets/i/canvas_img/alpha_${index.toString().padStart(5, '0')}.jpg`)
const preloadImages = () => {

    for (let i = 0; i <= 100; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }

};
const preloadImages1 = () => {
    for (let y = 101; y <= 200; y++) {
        const img = new Image();
        img.src = currentFrame(y);
    }

};
const img = new Image()
img.src = currentFrame(1);
canvas.width=1920;
canvas.height=1080;
img.onload=function(){
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

function animateCanvas(){
    preloadImages1()
    setTimeout(()=>{
        canvas.classList.remove('canvasHidden');
        canvas.classList.add('canvasShow');

        setInterval(()=>{
            document.querySelector('#hero h1').classList.remove('canvasHidden')
            a++;
            if(a <= 250){
                requestAnimationFrame(()=>{updateImage(a+1)})

                if(a==2){

                    document.querySelector('#hero h1').classList.add('canvasShow')
                }
                if(a==80){
                    document.querySelector('#hero .button').classList.remove('canvasHidden')
                    document.querySelector('#hero .button').classList.add('canvasShow')
                }

            }

        },30)

    },0)
}

preloadImages()


let collection = document.querySelectorAll('.text_color');
let titleTrigger = document.querySelector('.block_4 .title-block')
let textTrigger = document.querySelector('.block_5 .text_block')

function animateText(block, text){
    window.addEventListener('scroll', ()=>{
        if(block.classList.contains('animated')){
            setTimeout(()=>{
                text.classList.add('animation1')
            }, 2000)
        }
    })
}

animateText(titleTrigger, collection[5]);
animateText(textTrigger, collection[6]);

window.addEventListener('scroll', ()=>{
if(titleTrigger.classList.contains('animated')){
    setTimeout(()=>{
		collection[5].classList.add('animation1')
	}, 2000)
}
if(textTrigger.classList.contains){

}
})
