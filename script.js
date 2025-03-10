document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.add('click-animation');


            button.addEventListener('animationend', function() {
                button.classList.remove('click-animation');
            }, { once: true });
        });
    });
});






document.getElementById('dark-mode').addEventListener('click', function() {


    document.body.style.backgroundColor = 'black';


});


document.getElementById('light-mode').addEventListener('click', function() {


    document.body.style.backgroundColor = 'white';


});


document.getElementById('original-mode').addEventListener('click', function() {


    document.body.style.backgroundColor = '#EDC7B7';


});
