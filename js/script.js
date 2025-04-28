document.addEventListener('DOMContentLoaded', () => {
    
    //Registrams el plugin
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    //variables de botones
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    let menuOpen = false;

    //Animacion para container3
    gsap.fromTo(".container2 h3",
        { //Posiciones iniciales
            x: -800,
            opacity: 0
        },
        { //Posiciones finales
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".container2 h3",
                start: "top 90%",
                end: "top 10%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    //Animacion para container4
    gsap.fromTo(".container3 h3",
        { //Posiciones iniciales
            x: -800,
            opacity: 0
        },
        { //Posiciones finales
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".container3 h3",
                start: "top 90%",
                end: "top 10%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    //Animacion para container4
    gsap.fromTo(".container4 h3",
        { //Posiciones iniciales
            x: -800,
            opacity: 0
        },
        { //Posiciones finales
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".container4 h3",
                start: "top 90%",
                end: "top 10%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    //Animacion para container4
    gsap.fromTo(".container7 h3",
        { //Posiciones iniciales
            x: -800,
            opacity: 0
        },
        { //Posiciones finales
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".container7 h3",
                start: "top 90%",
                end: "top 10%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // Animacion de menu lateral
    const menuTween = gsap.to(sideMenu, { //Propiedades de la animacion
        x: 300,
        duration: 0.5,
        pause: true,
        ease: "power2.out"
    });

    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen //Invirtiendo valor logico

        if(menuOpen){
            menuTween.play();
        }else{
            menuTween.reverse();
        }
    });

    //Scroll a secciones de mi Index
    document.querySelectorAll('#sideMenu button') .forEach(btn =>{
        btn.addEventListener('click', () =>{
            const target = document.querySelector(btn.dataset.target);

        if(target){
            gsap.to(window, {
                scrollTo: {
                    y: target,
                    offsetY: 0,
                },
                duration: 1,
                ease: "power2.inOut"

            });
            menuTween.reverse();
            menuOpen = false;
        }
        });
    });
});