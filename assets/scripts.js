gsap.registerPlugin(ScrollTrigger);

let leftSlide = document.querySelectorAll('.gsap__left_slide');

gsap.from('.container-header__logo', {
    x: -20,
    delay: 0.5,
    opacity: 0
})

const menuItems = document.querySelector('.wp-block-navigation__container')

gsap.from(menuItems.children, {
    opacity: 0,
    x: 0,
    zIndex: 999,
    duration: 1,
    delay: 0.75,
    stagger: {
        amount: 1
    }
})

gsap.from(leftSlide, {
    x: -624,
    duration: 1,
    zIndex: 1,
    ease: "power1",
    stagger: {
        each: 0.2,
        from: "edges"
    }
})

gsap.from('.modal', {
    opacity: 0,
    duration: 4
})

gsap.from('.gsap__imgs__hero', {
    scale: 0.5,
    duration: 1,
    ease: "power1"
})

const segments = document.querySelector('.wp-block-blocks-agd-tabs-segments')

gsap.utils.toArray(segments).forEach(triggerSegments => {
    gsap.from(segments.children, {
        opacity: 0,
        ease: "power1",
        scrollTrigger: {
            trigger: triggerSegments,
            scrub: true,
            start: "top 90%",
            end: "bottom 60%"
        },
        stagger: {
            amount: 1
        }
    })
})

gsap.utils.toArray('.scroll-trigger__imgs img').forEach(triggerImgs => {
    gsap.from(triggerImgs, {
        scale: 0.8,
        ease: "power1",
        scrollTrigger: {
            trigger: triggerImgs,
            scrub: true,
            start: "top 90%",
            end: "bottom 60%"
        }
    })
})

gsap.utils.toArray('.scroll-trigger__left__slider').forEach(triggerLeft => {
    gsap.from(triggerLeft, {
        opacity: 0,
        x: -624,
        ease: "power1",
        scrollTrigger: {
            trigger: triggerLeft,
            scrub: true,
            start: "top 90%",
            end: "bottom 60%"
        }
    })
})

gsap.utils.toArray('.scroll-trigger__right__slider').forEach(triggerRight => {
    gsap.from(triggerRight, {
        opacity: 0,
        x: 624,
        ease: "power1",
        scrollTrigger: {
            trigger: triggerRight,
            scrub: true,
            start: "top 90%",
            end: "bottom 60%"
        }
    })
})

gsap.utils.toArray('.animation-illustration').forEach(animateIllustration => {
    gsap.to(animateIllustration, {
        y: 8,
        duration: 3,
        repeat: -1,
        yoyo:true,
        ease: "linear"
    })
})

gsap.utils.toArray('.scroll-trigger__icons').forEach(triggerIcons => {
    gsap.from(triggerIcons, {
        opacity: 0,
        ease: "power1",
        scrollTrigger: {
            trigger: triggerIcons,
            scrub: true,
            start: "top 90%",
            end: "top 60%"
        }
    })
})

gsap.utils.toArray('.scroll-trigger__texts').forEach(triggerTexts => {
    gsap.from(triggerTexts, {
        yPercent: 100,
        ease: "power1",
        scrollTrigger: {
            trigger: triggerTexts,
            scrub: true,
            start: "top 90%",
            end: "top 70%"
        }
    })
})

gsap.utils.toArray('.scroll-trigger__title__center').forEach(triggerTitle => {
    gsap.from(triggerTitle, {
        yPercent: 100,
        ease: "power1",
        scrollTrigger: {
            trigger: triggerTitle,
            scrub: true,
            start: "top 90%",
            end: "top 70%"
        }
    })
})

