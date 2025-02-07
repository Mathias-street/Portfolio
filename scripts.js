
/**To make cool scroll animations, used this resource below to make it
    https://www.youtube.com/watch?v=T33NN_pPeNI
 **/
const observer = new IntersectionObserver(( entries ) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(hiddenElement => observer.observe(hiddenElement));