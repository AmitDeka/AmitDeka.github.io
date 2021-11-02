gsap.registerPlugin(ScrollTrigger);

// Navbar 
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('show-menu')
});
navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
});


// Navlink click hides mobile navMenu
const navLink = document.querySelectorAll(".nav-link")

function linkA(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', linkA));

// Skills Accordion Menu
const skillsContent = document.getElementsByClassName('skills-content'),
    skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close'
    }

    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// Scroll Header
function scrollHeader(){
    const nav = document.getElementById("header")
    if(this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener('scroll', scrollHeader)

// Scroll to Top 
function scrollTop(){
    const scrollTop = document.getElementById("scrollUp")

    if(this.scrollY >= 200) scrollTop.classList.add("scrollUp-show");
    else scrollTop.classList.remove("scrollUp-show");
}
window.addEventListener('scroll', scrollTop);


// qualification tabs 
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

// animation 
gsap.from(".socialIcon", {
    x:-50,
    opacity: 0,
    duration: 1,
    delay: .5,
    ease: Expo.easeIn
})

gsap.from(".aboutContent", {
    y: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".aboutContainer",
        start: "top 30%",
        end: "bottom 0%",
        toggleActions: "play reverse restart reverse"
    }
});

gsap.from(".skillsContent1", {
    y: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".skillsContainer",
        start: "top 80%",
        end: "bottom 0%",
        toggleActions: "play reverse restart reverse"
    }
});

gsap.from(".skillsContent2", {
    y: 100,
    opacity: 0,
    duration: 2.2,
    scrollTrigger: {
        trigger: ".skillsContainer",
        start: "top 70%",
        end: "bottom 0%",
        toggleActions: "play reverse restart reverse"
    }
});

gsap.from(".skillsContent3", {
    y: 100,
    opacity: 0,
    duration: 2.3,
    scrollTrigger: {
        trigger: ".skillsContainer",
        start: "top 50%",
        end: "bottom 0%",
        toggleActions: "play reverse restart reverse"
    }
});

gsap.from(".skillsContent4", {
    y: 100,
    opacity: 0,
    duration: 2.4,
    scrollTrigger: {
        trigger: ".skillsContainer",
        start: "top 40%",
        end: "bottom 0%",
        toggleActions: "play reverse restart reverse"
    }
});

gsap.from(".skillsContent5", {
    y: 100,
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
        trigger: ".skillsContainer",
        start: "top 20%",
        end: "bottom 0%",
        toggleActions: "play reverse restart reverse"
    }
});