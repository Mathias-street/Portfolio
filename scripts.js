
/**To make cool scroll animations, used this resource below to make it
    https://www.youtube.com/watch?v=T33NN_pPeNI
 **/
const observer = new IntersectionObserver(( entries ) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(hiddenElement => observer.observe(hiddenElement));

//for the header of the website
const observer1 = new IntersectionObserver(( entries ) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideDownShow')
        }
    });
});

const slideDownElements = document.querySelectorAll('.slideDownHidden');
slideDownElements.forEach(slideDownElement => observer1.observe(slideDownElement));



const observer2 = new IntersectionObserver(( entries ) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('projectShow')
            entry.target.classList.add('experienceShow')
        } else {
            entry.target.classList.remove('projectShow')
            entry.target.classList.remove('experienceShow')
        }
    })
})


const slideInRightElements = document.querySelectorAll('.project, .experience');
slideInRightElements.forEach(slideInRightElement => observer2.observe(slideInRightElement));

