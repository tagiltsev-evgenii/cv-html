window.onload = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let currentSection = 0;
let isScroll = true;

const sections = document.querySelectorAll('section');
const content = document.querySelector('main');
const jobSection = document.querySelector('.experience');
const navigation = document.querySelector('.navigation');

if (window.innerWidth > 580) {

    document.body.setAttribute('style', 'overflow: hidden;');

    window.addEventListener('mousewheel', function (event) {
        if (!isScroll) return;
        let value_last = currentSection;

        if (event.deltaY > 0) {
            if (currentSection < sections.length - 1) currentSection++;
        } else {
            if (currentSection > 0) currentSection--;
        }

        scrollContent(value_last, currentSection);
    });

    jobSection.addEventListener('mouseover', function () {
        isScroll = false;
    });

    jobSection.addEventListener('mouseout', function () {
        isScroll = true;
    });
}
else {
    navigation.setAttribute('style', 'display: none;');
}

function scrollContent(value_last, value) {
    let element = navigation.querySelectorAll('li');
    element[value_last].classList.toggle('active');
    element[value].classList.toggle('active');

    content.setAttribute('style', '\
    -webkit-transform: translateY(-'+ value * 100 + 'vh);\
    -ms-transform: translateY(-'+ value * 100 + 'vh);\
    -o-transform: translateY(-'+ value * 100 + 'vh);\
    transform: translateY(-'+ value * 100 + 'vh);');
}

function manualScrollContent(value) {
    if (window.innerWidth < 580) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    else {
        scrollContent(currentSection, value);
        currentSection = value;
    }
}

