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

  var MAXMB = 10;
  document.querySelectorAll('form[data-form]').forEach(function(f){
    var t = f.querySelector('.status'), btn = f.querySelector('button[type=submit]');
    function say(msg, bad){ t.hidden = false; t.textContent = msg; t.classList.toggle('bad', !!bad); }
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var size = 0; f.querySelectorAll('input[type=file]').forEach(function(i){ for (var k = 0; k < i.files.length; k++) size += i.files[k].size; });
      if (size > MAXMB * 1024 * 1024) { say('Die Dateien sind zusammen grösser als ' + MAXMB + ' MB. Bitte kleiner machen oder weniger Dateien wählen.', true); return; }
      if (!C.formAction) { say('Testmodus: Es wird noch nichts versendet. Die Formular-Adresse fehlt in config.js.'); return; }
      var fd = new FormData(f);
      fd.append('_subject', f.getAttribute('data-subject') || 'Anfrage von der Website');
      fd.append('_captcha', 'false');
      btn.disabled = true; say('Wird gesendet …');
      fetch(C.formAction, { method: 'POST', body: fd, headers: { Accept: 'application/json' } })
        .then(function(r){ if (!r.ok) throw new Error(r.status); f.reset(); say(f.getAttribute('data-thanks')); })
        .catch(function(){ say('Das Senden hat nicht geklappt. Bitte versuchen Sie es nochmal oder rufen Sie uns an.', true); })
        .then(function(){ btn.disabled = false; });
    });
  });
  var sel = document.getElementById('stelle');
  if (sel) { var q = new URLSearchParams(location.search).get('stelle'); if (q) for (var j = 0; j < sel.options.length; j++) if (sel.options[j].text === q) sel.selectedIndex = j; }
})();
