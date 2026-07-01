// =========================
// DARK MODE TOGGLE
// =========================

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // icon berubah
    if (document.body.classList.contains("dark-mode")) {
        darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// =========================
// TYPING EFFECT
// =========================

const typingText = document.getElementById("typing");

const words = [
    "Operator Sekolah",
    "Pembina Pramuka",
    "Pengembang Aplikasi Sekolah",
    "Lulusan S1 Ekonomi"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(type, speed);
}

type();


// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();

});


// =========================
// SMOOTH SCROLL NAV (OPTIONAL ENHANCE)
// =========================

const links = document.querySelectorAll(".nav-menu a");

links.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

function sendWhatsApp(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const nomor = document.getElementById("nomor").value;
    const email = document.getElementById("email").value;
    const subjek = document.getElementById("subjek").value;
    const pesan = document.getElementById("pesan").value;

    const nomorWA = "6287781546647"; // ganti jika perlu

    const text = 
`📩 *PESAN WEBSITE*
----------------------
👤 Nama   : ${nama}
📧 Nomor  : ${nomor}
📧 Email  : ${email}
📌 Subjek : ${subjek || "-"}
💬 Pesan  :
${pesan}

----------------------
📍 Dikirim dari website portofolio`;

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}