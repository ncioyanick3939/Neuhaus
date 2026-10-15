(function(){
  var C = CONFIG;
  document.querySelectorAll('[data-c]').forEach(function(el){
    var k = el.getAttribute('data-c');
    if (k === 'year') el.textContent = new Date().getFullYear();
    else if (C[k] != null) el.textContent = C[k];
  });
  document.querySelectorAll('[data-phone]').forEach(function(a){
    var n = C[a.getAttribute('data-phone')];
    a.textContent = n; a.href = 'tel:' + n.replace(/[^\d+]/g, '');
  });
  document.querySelectorAll('[data-email]').forEach(function(a){
    a.textContent = C.email; a.href = 'mailto:' + C.email;
  });
  document.querySelectorAll('[data-ig]').forEach(function(a){ a.href = C.instagram; });

  var b = document.body, open = document.querySelector('.menu-btn'), nav = document.getElementById('hauptmenue');
  function setMenu(v){ b.classList.toggle('menu-open', v); open.setAttribute('aria-expanded', v ? 'true' : 'false'); }
  open.addEventListener('click', function(){ setMenu(true); });
  nav.querySelector('.menu-close').addEventListener('click', function(){ setMenu(false); open.focus(); });
  nav.addEventListener('click', function(e){ if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setMenu(false); });

  var f = document.getElementById('offerform'), t = document.getElementById('thanks');
  if (f) f.addEventListener('submit', function(e){ e.preventDefault(); t.hidden = false; f.reset(); });
})();
