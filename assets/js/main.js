// on load progress
let id;
AOS.init({
    disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    },
});

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++;
    }
    return;
}
async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");

    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
    await waitForMs(500);
}

function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const carouselText = [{
        text: "Garapati",
        color: "var(--first-color)"
    },
    {
        text: "Pavan",
        color: "var(--first-color)"
    },
];

function updateFontColor(eleRef, color) {
    $(eleRef).css("color", color);
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while (i < carouselList.length) {
        updateFontColor(eleRef, carouselList[i].color);
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(500);
        await deleteSentence(eleRef);
        await waitForMs(300);
        i++;
    }
}

async function startTyping() {
    await typeSentence("Hi, I am ", "#type__title");
    await carousel(carouselText, "#featured__title");
    await deleteSentence("#type__title");
    await waitForMs(500);
    startTyping();
}

startTyping();











// const cursor = document.querySelector(".moving__cursor");
// var timeout;
// // follow cursor on mouse move

// document.addEventListener("mousemove", (e) => {
//     let x = e.clientX;
//     let y = e.clientY;
//     cursor.style.top = y + "px";
//     cursor.style.left = x + "px";
//     cursor.style.display = "block";

//     function mouseStopped() {
//         cursor.style.display = "none";
//     }
//     clearTimeout(timeout);
//     timeout = setTimeout(mouseStopped, 2000);
// });

// document.addEventListener("touchmove", function(e) {
//     let x = e.touches[0].clientX;
//     let y = e.touches[0].clientY;
//     cursor.style.top = y + "px";
//     cursor.style.left = x + "px";
//     cursor.style.display = "block";

//     function mouseStopped() {
//         cursor.style.display = "none";
//     }
//     clearTimeout(timeout);
//     timeout = setTimeout(mouseStopped, 2000);
// });

// // cursor effects on mouse out
// document.addEventListener("mouseout", () => {
//     cursor.style.display = "none";
// });




// setTimeout(() => {
//   $(".onloading").fadeOut();
//   $(".footer,.header,.main").fadeIn();
// }, 1000);

// document.onreadystatechange = () => {
//   if (document.readyState == "interactive") {
//     var elem = document.getElementById("onload-fill");
//     var width = 5;
//     id = setInterval(frame, 50);
//     function frame() {
//       if (width >= 100) {
//         // clearInterval(id);
//         width = 0;
//         // id = setInterval(frame, 30);
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
//   if (document.readyState === "complete") {
//     clearInterval(id);
//     $(".onloading").fadeOut();
//     $(".header").fadeIn();
//     $(".footer").fadeIn();
//     $(".main").fadeIn();

//     if (window.location.hash) {
//       const ele = document.querySelector(window.location.hash);
//       setTimeout(() => {
//         ele.scrollIntoView();
//       }, 100);
//     }
//   }
// };

const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// skills

const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

// qualification

const tabs = document.querySelectorAll(".qualification [data-target]"),
    tabContents = document.querySelectorAll(".qualification [data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });

        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });

        tab.classList.add("qualification__active");
    });
});


// projects

const projectTabs = document.querySelectorAll(".projects__tabs [data-target]"),
    projectTabContents = document.querySelectorAll(".projects__sections [data-content]");

    projectTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        projectTabContents.forEach((tabContent) => {
            tabContent.classList.remove("projects__active");
            tabContent.querySelectorAll(".project-container").forEach((container)=>{
                container.classList.remove("active");
            });
        });

        target.classList.add("projects__active");

        target.querySelectorAll(".project-container").forEach((container)=>{
            container.classList.add("active");
        });

        projectTabs.forEach((tab) => {
            tab.classList.remove("projects__active");
        });

        tab.classList.add("projects__active");
    });
});

// services modal

// const modalViews = document.querySelectorAll(".services__modal"),
//     modalBtns = document.querySelectorAll(".services__button"),
//     modalCloses = document.querySelectorAll(".services__modal-close");

// let modal = function(modalClick) {
//     modalViews[modalClick].classList.add("active-modal");
// };

// modalBtns.forEach((modalBtn, i) => {
//     modalBtn.addEventListener("click", () => {
//         modal(i);
//     });
// });

// modalViews.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         btn.classList.remove("active-modal");
//     });
// });

// modalCloses.forEach((modalClose) => {
//     modalClose.addEventListener("click", () => {
//         modalViews.forEach((modalView) => {
//             modalView.classList.remove("active-modal");
//         });
//     });
// });

// Experiences modal

const expModalViews = document.querySelectorAll(".exp__modal"),
    expModalBtns = document.querySelectorAll(".view__icon"),
    expModalCloses = document.querySelectorAll(".exp__modal-close");

let expModal = function(modalClick) {
    expModalViews[modalClick].classList.add("exp-active-modal");
};

expModalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        expModal(i);
    });
});

expModalViews.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.remove("exp-active-modal");
    });
});

expModalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        expModalViews.forEach((modalView) => {
            modalView.classList.remove("exp-active-modal");
        });
    });
});

// // portfolio swiper

// let swiperPortfolio = new Swiper(".mySwiper", {
//     cssMode: true,
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//     },
// });



// // testimonial

// var swiperTestimonial = new Swiper(".mySwiper-test", {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48,

//     pagination: {
//         el: ".swiper-pagination-test",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     breakpoints: {
//         568: {
//             slidesPerView: 2,
//         },
//     },
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
// });

// scroll sections active link
const sections = document.querySelectorAll("section[id");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

// change background header
function scrollHeader() {
    const nav = document.getElementById("header");

    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// show scroll top

var lastScrollTop = 0;

window.addEventListener("scroll", () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDown = document.getElementById("scroll-down");
    const scrollUp = document.getElementById("scroll-up");

    if (st > lastScrollTop) {
        scrollUp.classList.remove("show-scroll");

        if (st >= 560) scrollDown.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    } else {
        scrollDown.classList.remove("show-scroll");
        if (st >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    }

    lastScrollTop = st <= 0 ? 0 : st;
});
// window.addEventListener("scroll", scrollDown);

// change theme code

const themeButton = document.getElementById("theme-button");

// previosuly selected topic if(user slected)

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

let presenTheme = "";
// obtain current theme
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
    presenTheme = selectedTheme;

    document.body.classList[selectedTheme === "light-theme" ? "remove" : "add"](
        "dark-theme"
    );
    themeButton.classList[selectedIcon === "uil-sun" ? "remove" : "add"](
        "uil-moon"
    );
} else {
    document.body.classList[!selectedTheme ? "add" : "remove"]("dark-theme");
    themeButton.classList[!selectedIcon ? "add" : "remove"]("uil-sun");
}

themeButton.addEventListener("click", () => {
    if (presenTheme === "light-theme") {
        localStorage.clear();
    } else {
        localStorage.setItem("selected-theme", "light-theme");
        localStorage.setItem("selected-icon", "uil-moon");
    }

    document.body.classList.toggle("dark-theme");
    themeButton.classList.toggle("uil-sun");
});

// send mail

// async function sendMessage(e) {
//     e.preventDefault();
//     let errorMessage = "",
//         successMessage = "",
//         errorHtml = document.getElementById("err-msg"),
//         sendBtn = document.querySelector(".send-btn"),
//         successHtml = document.getElementById("suc-msg"),
//         sendingHtml = document.getElementById("sending-text"),
//         sendiconHtml = document.getElementById("send-message-icon"),
//         msgIcon = "uil-message",
//         spinnerIcon = "uil-spinner-alt",
//         sendingText = "Sending....",
//         sendText = "Send Message";

//     errorHtml.classList.remove("show");
//     successHtml.classList.remove("show");
//     sendingHtml.innerText = sendingText;
//     sendiconHtml.classList.remove(msgIcon);
//     sendiconHtml.classList.add(spinnerIcon);

//     var form = document.getElementById("contact-form");
//     var inputs = form.elements;
//     const name = inputs["name"].value.trim();
//     const email = inputs["email"].value.trim();
//     const phone = inputs["phone"].value.trim();
//     const message = inputs["message"].value.trim();
//     let object = {
//         name,
//         email,
//         phone,
//         message,
//     };

//     for (let item in object) {
//         let value = object[item];
//         if (value === "") {
//             errorMessage = item.charAt(0).toUpperCase() + item.slice(1) + " required";
//             break;
//         }
//     }

//     if (errorMessage) {
//         ifError(errorMessage);
//         return;
//     } else {
//         if (!validatephonenumber(phone)) {
//             errorMessage = "Invalid mobile number";
//             ifError(errorMessage);
//             return;
//         }
//     }

//     object = {
//         smtpusername: "pavankumargarapaati04@gmail.com",
//         smtpfromname: "Garapati Pavan Kumar",
//         to: email,
//         toname: name,
//         subject: "Reply from Garapati Pavan Kumar",
//         message: "<h3>Thanks for spending your valuable time by going through my portfolio . Thank you for contacting me 😊 ! I will reach you out soon 😉 ! Any emergency you can contact me at +91995990740 </h3>",
//         adminemail: "pavankumargarapaati04@gmail.com",
//         adminsubject: "Message from your portfolio",
//         adminmessage: `
//       <h3>Someone contacted you ! Details are</h3>
//       <h5>Name : ${name}</h5>
//       <h5>Email : ${email}</h5>
//       <h5>Contact : ${phone}</h5>
//       <h5>Message : </h5>
//       <p>${message}</p>

//       `,
//     };
//     sendBtn.disabled = true;

//     //   if no errors
//     await $.ajax({
//         type: "post",
//         url: "https://webwizard.in/mail.php",
//         data: object,

//         success: function(response) {
//             ifNoError("Your message sent successfully ! Thanking you - WebWizard 🥰");
//             console.log(response);
//         },
//         error: function(error) {
//             ifError(error.statusText);
//             console.log(error);
//         },
//     });

//     function ifError(errorMessage) {
//         //   if error remove icon
//         errorHtml.classList.add("show");
//         errorHtml.innerHTML = errorMessage;
//         sendingHtml.innerText = sendText;
//         sendiconHtml.classList.remove(spinnerIcon);
//         sendiconHtml.classList.add(msgIcon);
//         sendBtn.disabled = false;
//     }

//     function ifNoError(successMessage) {
//         //   if error remove icon
//         successHtml.classList.add("show");
//         successHtml.innerHTML = successMessage;
//         sendingHtml.innerText = sendText;
//         sendiconHtml.classList.remove(spinnerIcon);
//         sendiconHtml.classList.add(msgIcon);
//         sendBtn.disabled = false;
//         form.reset();
//     }
// }

function validatephonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
        return true;
    } else {
        return false;
    }
}

// forchanging theme
const colorThemeButton = document.getElementsByClassName("theme__button")[0],
    themeContent = document.getElementsByClassName("theme__content")[0];

colorThemeButton.addEventListener("click", () => {
    themeContent.classList.toggle("active");
});

const theme__colors = document.querySelectorAll(".theme__color");

theme__colors.forEach((theme) => {
    theme.addEventListener("click", () => {
        document.documentElement.style.setProperty("--hue-color", theme.id);
        document
            .querySelector(".waves .wave")
            .style.setProperty("--hue-color", theme.id);
        let url = `url(/assets/img/waves/wave_${theme.id}.png)`;
        $(".waves .wave").css("background", url);

        themeContent.classList.toggle("active");
    });
});



// // moving cursor animation
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext('2d');

// // for intro motion
// let mouseMoved = false;

// const pointer = {
//     x: .5 * window.innerWidth,
//     y: .5 * window.innerHeight,
// }
// const params = {
//     pointsNumber: 40,
//     widthFactor: .3,
//     mouseThreshold: .6,
//     spring: .4,
//     friction: .5
// };

// const trail = new Array(params.pointsNumber);
// for (let i = 0; i < params.pointsNumber; i++) {
//     trail[i] = {
//         x: pointer.x,
//         y: pointer.y,
//         dx: 0,
//         dy: 0,
//     }
// }

// window.addEventListener("click", e => {
//     updateMousePosition(e.pageX, e.pageY);
// });
// window.addEventListener("mousemove", e => {
//     mouseMoved = true;
//     updateMousePosition(e.pageX, e.pageY);
// });
// window.addEventListener("touchmove", e => {
//     mouseMoved = true;
//     updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
// });

// function updateMousePosition(eX, eY) {
//     pointer.x = eX;
//     pointer.y = eY;
// }

// setupCanvas();
// update(0);
// window.addEventListener("resize", setupCanvas);


// function update(t) {

//     // for intro motion
//     if (!mouseMoved) {
//         pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
//         pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
//     }

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     trail.forEach((p, pIdx) => {
//         const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
//         const spring = pIdx === 0 ? .4 * params.spring : params.spring;
//         p.dx += (prev.x - p.x) * spring;
//         p.dy += (prev.y - p.y) * spring;
//         p.dx *= params.friction;
//         p.dy *= params.friction;
//         p.x += p.dx;
//         p.y += p.dy;
//     });

//     ctx.lineCap = "round";
// 	 ctx.beginPath();
//     ctx.moveTo(trail[0].x, trail[0].y);

//     for (let i = 1; i < trail.length - 1; i++) {
//         const xc = .5 * (trail[i].x + trail[i + 1].x);
//         const yc = .5 * (trail[i].y + trail[i + 1].y);
//         ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
//         ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
//         ctx.stroke();
//     }
//     ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
//     ctx.stroke();
    
//     window.requestAnimationFrame(update);
// }

// function setupCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }