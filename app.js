const navItems = document.querySelectorAll('.nav-items');
const button = document.querySelectorAll('.center-nav-button-2');


navItems.forEach(item => {
  const dropdown = item.querySelector('.dropdown-menu');

  item.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });
});
button.forEach(item => {
  const dropdown = item.querySelector('.dropdown-menu-2');

  item.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });
});

window.addEventListener('scroll', () => {
  const header1 = document.getElementById('header');
  const header2 = document.getElementById('header2');

  if (window.scrollY > 200) {
    header1.classList.add('hidden');
    header2.classList.add('active');
  } else {
    header1.classList.remove('hidden');
    header2.classList.remove('active');
  }
});

const hamburgers = document.querySelectorAll('.hamburger');

    const offcanvas = document.querySelector('.off-canvas-menu');
const close =document.getElementById('close')
    hamburgers.forEach(hamburger => {
hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      offcanvas.classList.toggle('open');
    });});
 close.addEventListener('click', () => {
      hamburgers.forEach(hamburger =>{
        hamburger.classList.remove('active');
      })
      offcanvas.classList.remove('open');
    });

    // Optional: close when clicking outside
    document.addEventListener('click', (e) => {
      if (!offcanvas.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        offcanvas.classList.remove('open');
      }
    });

    const scrollToTopBtn=document.getElementById('scrollToTop');
    window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
scrollToTopBtn.addEventListener("click", () => {
  const startPosition = window.scrollY;
  const duration = 1000; // time in milliseconds (make bigger for slower)
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    window.scrollTo(0, startPosition * (1 - ease));

    if (elapsed < duration) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
});