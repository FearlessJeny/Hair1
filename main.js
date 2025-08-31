const menu = document.querySelector('.menu')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', function () {
    menu.classList.toggle('show_menu')
});



document.addEventListener("DOMContentLoaded", function () {

  

    new Splide('.MySplide', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 7,
        arrow: false,
        pagination: false,
        autoScroll: {
            speed: .7
        }
    }).mount({ AutoScroll: window.splide.Extensions.AutoScroll });


    new Splide('.photo_gallery_slide', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        gap: '0.8rem',
        arrow: false,
        perPage: 5,
        pagination: false,
        autoScroll: {
            speed: .7
        },
        breakpoints: {
            1200: {
                perPage: 4
            },
            900: {
                perPage: 3
            },
            768: {
                perPage: 2
            },
            500: {
                perPage: 1.5,
                gap: '10px'
            }
        } 
        })
        .mount({ AutoScroll: window.splide.Extensions.AutoScroll });

    new Splide('.testimonials_splide', { 
        type: 'loop',
        drag: 'free',
        focus: 'center',
        gap: '2rem',
        arrow: false,
        perPage: 2,
        pagination: false,
        autoScroll: {
            speed: 0.7
        },
        breakpoints: {
            1200: {
                gap: '1rem'
            },
            900: {
                perPage: 1.5
            },
            500: {
                perPage: 1
            }
        }
    })
        .mount({ AutoScroll: window.splide.Extensions.AutoScroll });
});

const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', function(){
    var scroll = this.window.scrollY;
    if(scroll > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
})




document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');

    // Определяем язык по URL
    const currentLang = location.pathname.includes('he') ? 'he' : 'ru';

    // Установка значения select, если он существует
    if (langSelect) {
        langSelect.value = currentLang;

        langSelect.addEventListener('change', () => {
            const selectLang = langSelect.value;
            if (selectLang === 'he') {
                window.location.href = 'hebr.html';
            } else {
                window.location.href = 'index.html';
            }
        });
    }

    // Автоматическое перенаправление на иврит, если браузер he и мы на главной
    if (!localStorage.getItem('langAutoRedirect')) {
        const isHebrewBrowser = navigator.language.startsWith('he', 'il');
        const isRootPage =
            location.pathname === '/Master/' ||
            location.pathname.endsWith('index.html');

        if (isHebrewBrowser && isRootPage) {
            localStorage.setItem('langAutoRedirect', 'true');
            window.location.href = 'hebr.html';
        }
    }
});
