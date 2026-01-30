// Gallery filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-content');
const items = [...document.querySelectorAll('.gallery-item')];
let currentIndex = 0;

function showImage(index) {
  const img = items[index].querySelector('img');
  if (img) lightboxImg.src = img.src;
}

items.forEach((item, i) => {
  item.addEventListener('click', () => {
    currentIndex = i;
    showImage(currentIndex);
    lightbox.classList.add('active');
  });
});

document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.classList.remove('active'));
document.querySelector('.lightbox-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showImage(currentIndex);
});
document.querySelector('.lightbox-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showImage(currentIndex);
});
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('active'); });

// Smooth scroll for nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});
