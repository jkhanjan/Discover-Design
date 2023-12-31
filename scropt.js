function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
}
// locomotive()
function loadingAnim() {
    ;

    gsap.from("#logo", {
        opacity: 0,
        x: -100,
        duration: 1.2
    })
    gsap.from(".page1-header h1", {
        y: 220,
    })

}
if (window.outerWidth && window.outerWidth > 480) {
    loadingAnim()
}

function loading(){
    gsap.to("#loader",{
        opacity:0,
        delay:1,
        duration:3
    })
}
loading()


function scrollAnim() {
    gsap.to("#page1-img", {
        x: 200,
        y: 100,
        scale: 0.5,
        duration: 2,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "body",
            start: "60% 50%",
            end: "60% 40%",
            // markers:true,
            scrub: 2,
        }
    })

    gsap.fromTo(".page1-header h1", { y: 0 }, {
        y: -200,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page1",
            scroller: 'body',
            start: "30% 25%",
            end: "30% 10%",
            // markers:true,
            scrub: true,
        }
    })
    gsap.to(".page1-header h1", { y: 0 })


    gsap.from(".page2-header h1", {
        y: 250,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page1",
            scroller: 'body',
            start: "bottom 40%",
            end: "bottom 15%",
            // markers:true,    
            scrub: true,
            // pin:true,    
        }
    })

    gsap.fromTo(".page2-header h1", { y: 0 }, {
        y: -220,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page2-content",
            scroller: 'body',
            start: "40% 75%",
            end: "40% 55%",
            // markers:true,
            scrub: true,
            // pin:true,    
        }
    })
    gsap.to(".page2-header h1", { y: 250 })


    gsap.from("#page2-img img", {
        scale: 0.4,
        duration: 1,
        delay: 0.2,
        
        scrollTrigger: {
            trigger: "#page1",
            // markers:true,
            start: 'bottom 40%',
            end: 'bottom 35%',
            scrub: true,
            // markers:true
        },
    })
    gsap.fromTo("#page2-img img", { scale: 1 }, {
        scale: 0.4,
        duration: 2.5,
        y: -100,
        scrollTrigger: {
            trigger: "#page2",
            // markers: true,
            start: '70% 70%',
            end: '70% 65%',
            scrub: true,
            // markers:true
        },
    })
    gsap.to("#page2-img img", { scale: 0.5 })


    gsap.from("#page3-img img", {
        scale: 0.5,
        duration: 1.5,
        delay: 1,
        scrollTrigger: {
            trigger: "#page2",
            // markers:true,
            start: 'bottom 35%',
            end: 'bottom 10%',
            scrub: true,
            // markers:true
        },
    })

    gsap.from(".page3-header h1", {
        y: 250,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page2 ",
            scroller: 'body',
            start: "bottom 35%",
            end: "bottom 10%",
            // markers:true,    
            scrub: true,
            // pin:true,    
        }
    })

    gsap.fromTo(".page3-header h1", { y: 0 }, {
        y: -250,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page3-content",
            scroller: 'body',
            start: "center 80%",
            end: "center 60%",
            // markers:true,
            scrub: true,
            // pin:true,    
        }
    })
    gsap.to(".page3-header h1", { y: 250 })


}
if (window.outerWidth && window.outerWidth > 400) {
    scrollAnim()
}

function pinAnim() {
    
    gsap.to("#page5",{
        scrollTrigger:{
            trigger:"#page5",
            scroller:'body',
            // markers:true,
            start:'70% 75%',
            end:'70% -38%',
            pin:true,
        }
    })
    gsap.to("#page6",{
        scrollTrigger:{
            trigger:"#page6",
            scroller:'body',
            // markers:true,
            start:'17% 100%',
            end:'17% 5%',
            pin:true,
        }
    })


    gsap.from(".page6-header h1",{
        transform:'translateY(25vh)',
        scrollTrigger:{
            trigger:"#page6",
            scroller:'body',
            // markers:true,
            start:"40% 45%",
            end:"40% 25%",
            scrub:1
        }
    })
    gsap.from(".page6-para p",{
        transform:'translateY(-10vh)',
        opacity:0,
        scrollTrigger:{
            trigger:"#page6",
            scroller:'body',
            // markers:true,
            start:"20% 60%",
            end:"20% 40%",
            scrub:2
        }
    })
    
    gsap.from(".page7-para h2",{
        transform:'translateY(20vh)',
        scrollTrigger:{
            trigger:"#page7",
            scroller:'body',
            // markers:true,
            start:"10% 90%",
            end:"10% 70%",
            scrub:2,
            stagger:true
        }
    })

    gsap.from(".page8-div-para p",{
        transform:'translateY(20vh)',
        scrollTrigger:{
            trigger:"#page8",
            scroller:'body',
            // markers:true,
            start:"100% 30%",
            end:"100% 10%",
            scrub:2,

        }
    })

    gsap.from(".page8-para h1",{
        transform:'translateY(30vh)',
        scrollTrigger:{
            trigger:"#page8",
            scroller:'body',
            // markers:true,
            start:"10% 55%",
            end:"10% 35%",
            scrub:2,

        }
    })
    gsap.from(".page9-header h1",{
        transform:'translateY(30vh)',
        scrollTrigger:{
            trigger:"#page9",
            scroller:'body',
            // markers:true,
            start:"70% 55%",
            end:"70% 35%",
            scrub:2,

        }
    })
    gsap.from(".page9-para3 h1",{
        transform:'translateY(30vh)',
        scrollTrigger:{
            trigger:"#page9",
            scroller:'body',
            // markers:true,
            start:"110% 15%",
            end:"110% 5%",
            scrub:2,

        }
    })


}
if (window.outerWidth && window.outerWidth > 400) {
    pinAnim()
}

function sliderAnim(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
      });
}
sliderAnim()

function lastAnim(){
    gsap.to(".page9-para4",{
        width:'100%'
    })
    gsap.fromTo(".page9-para4",{width:"100%"},{
        width:'70%',
        pin:true,
        scrollTrigger:{
            trigger:"#page9",
            scroller:'body',
            // markers:true,
            start:"220% 61%",
            end:"220% -10%",
            scrub:2,
            pin:true
        }
    })
    gsap.to(".page9-para4-content",{
        transform:'translatey(0vh)'
    })
    gsap.fromTo(".page9-para4-content",{transform:'translatey(0vh)'},{
        transform:'translatey(-90vh)',
        pin:true,
        scrollTrigger:{
            trigger:"#page9",
            scroller:'body',
            // markers:true,
            start:"218% 59%",
            end:"218% 34%",
            scrub:2,
            // pin:true
        }
    })
    gsap.to(".page9-para4-content1",{
        transform:'translatex(-90vh)',
        scrollTrigger:{
            trigger:"#page9",
            scroller:'body',
            // markers:true,
            start:"222% 60.5%",
            end:"222% 35.5%",
            scrub:2,
            // pin:true
        }
    })
    gsap.to(".page10-line",{
        width:'20%',
        scrollTrigger:{
            trigger:"#page10",
            scroller:'body',
            // markers:true,
            start:"2% 60.5%",
            end:"2% 35.5%",
            scrub:2,
            // pin:true
        }
    })

}
if (window.outerWidth && window.outerWidth > 400) {
    lastAnim()
}