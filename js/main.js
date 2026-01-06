
// Preloader :

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.createElement('div');
    loader.className = 'initial-loader';
    loader.innerHTML = '<div class="code-animation">&lt;code&gt; Welcome to my Portfolio &lt;/code&gt;</div>';
    document.body.appendChild(loader);
  
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }, 4000);
});

// Toggle background active:

const slideNavigator = name => {
    let slides = document.querySelectorAll('.bg-slider');
    slides.forEach(slide => {
        slide.classList.remove('active');
        if (slide.classList.contains(name)) {
            slide.classList.add('active')
        }
    });
}

// Switch background: 

window.addEventListener('load', () => {
    const slideBtnList = document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            slideBtnList.forEach(el => {
                el.classList.remove('active')
            });
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });

});

// Animation sur texte :

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent="",
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        },i*80);
    });
    nextWord.style.opacity= "1";
    Array.from(nextWord.children).forEach((letter,i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in"
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);

// Activate Section: 

const sectionNavigator = name => {
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section-show');
        if (section.classList.contains(name)) {
            section.classList.add('section-show');
            header.classList.add('active')
        }
    });
};

// Navigate to Sections: 

window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(nav => {
        nav.addEventListener('click', function(e) {
            e.preventDefault();
            navList.forEach(el => {
                el.classList.remove('active')
            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
});

// Reset header to initial State: 

const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
};

// Initial navigation: 

const initNavigation = ()=> {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'about') {
            el.classList.add('active')
        }
    });
    sectionNavigator('about');
};

// toggle Menu: 
const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active')

 }
