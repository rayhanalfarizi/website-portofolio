// =========================
// Efek Bunga Pinggir Layar
// =========================
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // Tentukan sisi kiri atau kanan
  const side = Math.random() < 0.5 ? "left" : "right";

  const range = 120; // jarak minimal dari tepi
  const spread = 120; // variasi posisi
  const offset = Math.random() * spread;

  if (side === "left") {
    flower.style.left = (range + offset) + "px";
  } else {
    flower.style.left = (window.innerWidth - range - offset) + "px";
  }

  // Durasi animasi dan ukuran bunga
  const duration = 5 + Math.random() * 4; // 5-9 detik
  const size = 8 + Math.random() * 12; // 8-20px

  flower.style.animationDuration = duration + "s";
  flower.style.width = size + "px";
  flower.style.height = size + "px";

  // Tambahkan ke body
  document.body.appendChild(flower);

  // Hapus bunga setelah animasi selesai
  setTimeout(() => flower.remove(), duration * 1000);
}

// Jalankan setiap 350ms
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
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.style.display = "block"; // flex jika ingin layout flex
  }

  // Update menu aktif
  links.forEach(link => link.classList.remove("active"));
  const activeLink = document.getElementById("link-" + id);
  if (activeLink) activeLink.classList.add("active");

  // Scroll ke atas dengan smooth
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Inisialisasi: tampilkan beranda
showSection("home");


// =========================
// Baca Selengkapnya Artikel
// =========================
function toggleArticle(el) {
  const card = el.parentElement;
  const shortText = card.querySelector(".short");
  const fullText = card.querySelector(".full");

  if (fullText.style.display === "none" || fullText.style.display === "") {
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
// Modal CV + Tombol Download
// =========================
function openCV() {
  const cvModal = document.getElementById("cvModal");
  const downloadBtn = document.getElementById("downloadCV");

  if (cvModal && downloadBtn) {
    cvModal.style.display = "flex";

    // Nama file CV
    const cvFile = "CV_Rayhan_Alfarizi.jpeg";
    downloadBtn.href = cvFile;
    downloadBtn.setAttribute("download", "CV_Rayhan_Alfarizi.jpeg");
  }
}

function closeCV() {
  const cvModal = document.getElementById("cvModal");
  if (cvModal) cvModal.style.display = "none";
}


// =========================
// Responsivitas Canvas Efek Bunga
// =========================
window.addEventListener("resize", () => {
  // Jika ingin menyesuaikan posisi bunga saat resize
  // Bisa diimplementasikan di sini
});

// =========================
// Inisialisasi untuk Artikel dan Section
// =========================
document.addEventListener("DOMContentLoaded", () => {
  // Semua artikel sembunyikan bagian full text
  document.querySelectorAll(".full").forEach(el => el.style.display = "none");

  // Tampilkan section home sebagai default
  showSection("home");
});
