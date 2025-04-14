// Scroll Section Active Link

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
let navbar = document.querySelector('.navbar');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    navbar.classList.remove('active');
};


//  Scroll Reveal

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:100,
});

ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container,  .contact form',{origin:'buttom'});
ScrollReveal().reveal('.home-content h1, .about-img, .portfolio-box',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

// Typed JS

const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Data Science Eng','Machine Learning Developer'],
    typeSpeed:60,
    backSpeed:60,
    backDelay:1000,
    loop:true,
});


// Backend Contact Form

document.getElementById("contactform").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    let submitButton = document.querySelector('.subbtn');
    submitButton.value = "Sending...";

    let formData = {
        name: document.querySelector('input[placeholder="Full Name"]').value,
        email: document.querySelector('input[placeholder="Email Address"]').value,
        phone: document.querySelector('input[placeholder="Mobile number"]').value,
        subject: document.querySelector('input[placeholder="Email Subject"]').value,
        message: document.querySelector('textarea').value,
    };

    try {
        let response = await fetch("https://pranav-portfolio-xt0l.onrender.com/api/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        let result = await response.json();
        alert(result.success || result.error);
        submitButton.value = "Send Message";

    } catch (error) {
        alert("Something went wrong! Try again later.");
        submitButton.value = "Send Message";
    }
});
