/*let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close_btn');

menuBtn.addEventListener('click', function(){
    menu.classList.add('active');
})
closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
})*/

/*=============== SHOW MENU =============== time: 15.01*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /*===MENU SHOW ====*/
      /* Validate if constant exists */
      if(navToggle){
        navToggle.addEventListener('click', () =>{
                  navMenu.classList.add('show-menu')
        })
      }

      /*===MENU SHOW ====*/
      /* Validate if constant exists */
      if(navClose){
        navClose.addEventListener('click', () =>{
                  navMenu.classList.remove('show-menu')
        })
      }



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link,we remove the show-menu //
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))







/*===== SCROLL SECTIONS ACTIVE LINK =====*/
/*const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}*/

/*===== SCROLL REVEAL ANIMATION =====*/
/*const sr = ScrollReveal({
    origin: 'top',
    distance: '150px',
    duration: 2000,
    reset: true
})*/



/*======= ABOUT ======*/
/*menuIcon.addEventListener("click",()=>{
    navigationPreloadManager.classList.add("navigate");
})

xBtn.addEventListener("click",()=>{
    navigation.classList.remove("navigate");
})

window.addEventListener("scroll", ()=>{
    const about = document.querySelector(".about");


if(window.pageYOffset >= 200){
    about.classList.add("change");
}else {
   about.classList.remove("change");
}

console.log(window.pageYOffset);
})*/



//--===== BUBBLE =====--//
function createBubble(){
    const section = document.querySelector('section')
    const createElement = document.createElement('span')
    var size = Math.random() * 60;

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    },4000)
}
setInterval(createBubble, 50)
//--===== BUBBLE =====--//



//---======  TYPING TEXT =====----//
   // JavaScript for the typing animation
   const typingText = document.getElementById("typing-text");
   const sentences = [
       "<h1> Branding.</h1>",
       "<p> Marketing.</p>",
       "<p> Web-development.</p>",
       "<p> UI/UX.</p>",
       "<p> Animation.</p>"
   ];

   let sentenceIndex = 0;
   let charIndex = 0;

   function typeSentence() {
       const sentence = sentences[sentenceIndex];
       if (charIndex < sentence.length) {
           typingText.innerHTML += sentence.charAt(charIndex);
           charIndex++;
           setTimeout(typeSentence, 200); // Adjust typing speed (in milliseconds)
       } else {
           sentenceIndex++;
           charIndex = 0;
           setTimeout(() => {
               typingText.innerHTML = ""; // Clear the text
               if (sentenceIndex < sentences.length) {
                   setTimeout(typeSentence, 1500); // Wait before starting the next sentence
               } else {
                   // Restart the animation
                   sentenceIndex = 0;
                   setTimeout(typeSentence, 1000); // Wait before starting the first sentence again
               }
           }, 1500); // Wait before moving to the next sentence
       }
   }

   // Start the animation
   typeSentence();












/*const typingText = document.getElementById('typing-text');
const sentences = [
    "<h1> Branding.</h1>",
    "<p> Marketing.</p>",
    "<p> Web-development.</p>",
    "</p> UI/UX.</p>",
    "<p> Animation.</p>"
];

function typeSentences() {
    sentences.forEach((sentence, index) => {
        setTimeout(() => {
            typingText.textContent = sentence;
            if (index === sentences.length - 1) {
                setTimeout(() => {
                    typingText.textContent = "";
                    typeSentences();
                }, 1500); // Wait before restarting the animation
            }
        }, index * 4000); // 4 seconds for each sentence
    });
}

typeSentences();*/
//---======  TYPING TEXT =====----//





//----===== SHINING BLUE CURSOR ====---//
let cursor = document.querySelector('#cursor');
let body = document.querySelector('body');
document.onmousemove = function(e){
    // move cursor
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';

    //animate background
    body.style.backgroundPositionX = e.pageX/-4 + 'px';
    body.style.backgroundPositionY = e.pageY/-4 + 'px';

    // add elements to body
    let element = document.createElement('div');
    element.className = 'element';
    body.prepend(element);

    //move elements randomly across x and y axis
    element.style.left = cursor.getBoundingClientRect().x + 'px';
    element.style.top = cursor.getBoundingClientRect().y - 20 + 'px';

    setTimeout(function(){
        let text = document.querySelectorAll('.element')[0],
        directionX = Math.random() < .5 ? -1 : 1,
        directionY = Math.random() < .5 ? -1 : 1

        text.style.left = parseInt(text.style.left) - (directionX 
            * (Math.random() * 250)) + 'px';
        text.style.top = parseInt(text.style.top) - (directionY 
            * (Math.random() * 250)) + 'px';
        text.style.opacity = 0;
        text.style.transform = 'scale(0.25)';
        text.innerHTML = randomText();

        //remove element
        setTimeout(function(){
            element.remove()
        },1000)

    },10)  
}

//add random text or numbers 
function randomText(){
    var text = ("abdchjkgglmbnjhyceruvwx12345678").split
    ("");
    letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}
//----===== SHINING BLUE CURSOR ====---//



//---=== CLOCK ===---//
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');



setInterval(()=>{
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})

//---=== CLOCK ===---//








