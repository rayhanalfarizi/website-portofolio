// =========================
// Efek Bunga Pinggir Layar
// =========================
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    const side = Math.random() < 0.5 ? "left" : "right";
    const range = 120;
    const spread = 120;
    const offset = Math.random() * spread;

    if (side === "left") {
        flower.style.left = (range + offset) + "px";
    } else {
        flower.style.left = (window.innerWidth - range - offset) + "px";
    }

    const duration = 5 + Math.random() * 4;
    const size = 8 + Math.random() * 12;

    flower.style.animationDuration = duration + "s";
    flower.style.width = size + "px";
    flower.style.height = size + "px";

    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), duration * 1000);
}

setInterval(createFlower, 350);

// =========================
// Navigasi Section
// =========================
function showSection(id) {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");

    // Sembunyikan semua section
    sections.forEach(sec => {
        sec.style.display = "none";
    });

    // Tampilkan section yang dipilih
    document.getElementById(id).style.display = "flex";

    // Update menu aktif
    links.forEach(link => link.classList.remove("active"));
    document.getElementById("link-" + id).classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================
// Baca Selengkapnya Artikel
// =========================
function toggleArticle(el) {
    const card = el.parentElement;
    const shortText = card.querySelector(".short");
    const fullText = card.querySelector(".full");

    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        el.textContent = "Tutup";
    } else {
        fullText.style.display = "none";
        shortText.style.display = "block";
        el.textContent = "Baca Selengkapnya";
    }
}

// =========================
// Modal CV + Download Otomatis
// =========================
function openCV() {
    document.getElementById("cvModal").style.display = "flex";

    // Nama file CV yang akan di-download
    const cvFile = "CV_Rayhan_Alfarizi.jpeg";

    // Set ke tombol download
    document.getElementById("downloadCV").href = cvFile;
}

function closeCV() {
    document.getElementById("cvModal").style.display = "none";
}
