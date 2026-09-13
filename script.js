// ===== تبديل الوضع الليلي / النهاري =====
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// ===== استرجاع الوضع عند التحميل =====
(function () {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else {
    // احترام تفضيل نظام المستخدم
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
})();

// ===== فتح / إغلاق القائمة الجانبية =====
function toggleMenu() {
  document.getElementById('sideMenu').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}

// ===== إغلاق القائمة بمفتاح Escape =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('sideMenu').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
  }
});