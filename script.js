function animation()
{
    gsap.to(".imageContainer",{
        ease: Expo.easeInOut,
        width:"100%",
        duration : 2 ,
        stagger:2,
    })

    gsap.to(".text h1",{
        ease: Expo.easeInOut,
        top:0,
        stagger:2
    })

    gsap.to(".text h1",{
        delay:2,
        ease: Expo.easeInOut,
        stagger:2,
        top:"-100%",
    })
}

animation();


//step 1 he karun bgh
/* gsap.to("#one",{
    width:"100%",
    ease: Expo.easeInOut,
    duration:3
})*/