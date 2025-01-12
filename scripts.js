

const humberger = document.querySelector('#humberger');
const navmenu = document.querySelector('#navmenu')

humberger.addEventListener('click' , function(){
    humberger.classList.toggle('humberger-active')
    navmenu.classList.toggle('hidden')
})

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
    
};
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector("#typing");
    const text = "Hello . . . ,saya !!";
    let index = 0;
  
    function type() {
      if (index < text.length) {
        textElement.innerHTML += text[index];
        index++;
        setTimeout(type, 120); // Waktu jeda antara karakter
      } else {
        setTimeout(() => {
          index = 0;
          textElement.innerHTML = ""; // Kosongkan teks sebelum mulai ulang
          type();
        }, 1000); // Waktu jeda sebelum mengulang
      }
    }
  
    type();
  });
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
  // Pilih semua elemen dengan class 'section' (atau ganti dengan selector yang sesuai)
  const sections = document.querySelectorAll('.section');

  // Fungsi untuk menambahkan animasi saat elemen muncul
  function handleScrollAnimation(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Tambahkan class animasi pada section yang muncul
        entry.target.classList.add('animate__fadeIn'); // Misalnya gunakan animate.css atau class animasi custom
        observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi selesai
      }
    });
  }

  // Menggunakan IntersectionObserver untuk mendeteksi saat section masuk ke viewport
  const observer = new IntersectionObserver(handleScrollAnimation, {
    threshold: 0.5 // Batasan berapa banyak elemen yang harus terlihat sebelum animasi terjadi
  });

  // Observe setiap section
  sections.forEach(section => {
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
  
    function handleScrollAnimation(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Tambahkan class animasi saat section muncul
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }
  
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  