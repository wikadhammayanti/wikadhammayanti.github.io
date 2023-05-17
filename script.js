let prevScrollpos = window.pageYOffset;
$(window).scroll(function() {
    let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $('.header').removeClass('hide');
        } else {
            $('.header').addClass('hide');
        }
    prevScrollpos = currentScrollPos;
});



let btnSubmit = document.querySelector('.submit');
// var modal = document.querySelector('.modal-container');

if(btnSubmit){
    btnSubmit.addEventListener('click', function(){
        // modal.classList.add('show');

        const next = document.querySelector('.next');
        next.setAttribute('value', 
        'https://wikadhammayanti.netlify.app/contact.html');
    });
}

// let certificate = document.querySelectorAll('.certificate-content1');

//     certificate.forEach((certificate, index) => {
//         certificate.dataset.aos = 'fade-down';
//         certificate.dataset.aosDuration = 1500;
//         certificate.dataset.aosDelay = index * 300;
//     }
// )





AOS.init({
    once: true
});