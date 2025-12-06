 
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    
    scrub: true,
  // markers: true,
  }
});

tl.to("#women", {
  top: "100%",
  left: "4%",
  duration:1,
},'web');
tl.to("#orange",{
    top:"150%",
    left: "22%",
    duration:1,
}, 'web');
tl.to("#webclip",{ 
    width: "15%",
    top:"170%",
    right: "10%"
}, 'orange');

var t2=gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
  
    scrub: true,
  // markers: true,
  }
});

t2.to("#resume",{ 
    width:"20%",
    left: "42%",
    top: "240%",
})
t2.to("#women",{ 
    width:"18%",
    top: "225%",
    left: "40%",
})
