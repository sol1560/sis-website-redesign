/* ==========================================================================
   SIS Group of Schools: shared behaviour (v2)
   Load at the end of <body>, after the page markup (and after assets/data.js if the page uses it):
     <script src="assets/data.js"></script>
     <script src="assets/sis.js"></script>
     <script> page script: uses window.SIS and window.SIS_DATA </script>
   Safe on every page: every lookup is guarded, and a missing element simply skips that feature.

   PUBLIC API (window.SIS)
   SIS.$(selector, root?)                  -> first match or null
   SIS.$$(selector, root?)                 -> array of matches
   SIS.reduce                              -> true when the user prefers reduced motion
   SIS.esc(string)                         -> HTML-escaped string (use when rendering SIS_DATA into innerHTML)
   SIS.param(name)                         -> URL query value or null, e.g. SIS.param('c') on campus.html?c=surabaya
   SIS.observeReveal(root?)                -> starts the scroll reveal for .reveal elements in root (call after injecting HTML)
   SIS.toast(message, { duration? })       -> shows the #toast pill (created if missing). Default duration 2600 ms
   SIS.drawer.open() / SIS.drawer.close()  -> mobile menu (#drawer + .menu-btn)
   SIS.dialog.open(elOrSelector, opener?)  -> opens a .dialog; focus trap, Escape and scrim click close it; focus returns to opener
   SIS.dialog.close(elOrSelector?)         -> closes the given dialog, or the open one
   SIS.validateForm(formEl, rules, options?) -> form controller (see below)
   SIS.rules                               -> ready-made tests: required, email, phone, minLength(n), futureDate, checked

   NAV STATE
   <body data-page="news"> marks every [data-nav="news"] link in the header nav and drawer with aria-current="page".
   Keys used in chrome.html: home, about, academics, schools, news, admissions, stories, scholarships, careers, contact.

   DIALOG TRIGGERS
   <button data-dialog-open="#d-video">…</button> opens #d-video. Inside a dialog, [data-dialog-close] closes it.
   The dialog element fires "sis:dialog-open" and "sis:dialog-close" events.
   Video embeds: <iframe class="dialog-media" data-src="https://www.youtube-nocookie.com/embed/ID" title="…" allow="autoplay; encrypted-media" allowfullscreen></iframe>
   loads on open and is blanked on close. Only one dialog is open at a time.

   FORM VALIDATION
   const form = SIS.validateForm(document.querySelector('#contact-form'), {
     name:    { test: SIS.rules.minLength(2), label: 'Full name' },
     email:   { test: SIS.rules.email,        label: 'Email' },
     phone:   { test: SIS.rules.phone,        label: 'Phone or WhatsApp' },
     campus:  { test: SIS.rules.required,     label: 'Campus', message: 'Choose a campus.' },
     consent: { test: SIS.rules.checked,      label: 'Consent' }
   }, {
     success: '#contact-success',          // element shown after submit (class .show added, focused). Optional.
     loadingText: 'Sending…',              // submit label while loading. Optional.
     onSubmit(values, form) { … },         // may return a Promise; default waits ~1 s (prototype, sends nothing).
     onSuccess(values, form) { … },        // after onSubmit resolves, before the success element is shown.
     onInvalid(badNames, form) { … }       // after a failed submit.
   });
   form.validate() -> bool · form.validateField(name) -> bool · form.values() -> object · form.reset(clear = true)

   A rule is either a function (value, formEl) => boolean, or { test, label, message }.
   Fields are found by [data-field="<name>"] wrappers holding one input/select/textarea (see sis.css section 9).
   Optional values: tests receive '' for empty fields; wrap with SIS.rules.optional(test) to allow empty.
   The error text lives in the field's .err span; "message" overrides it. The summary lists "label" and links to the input.
   Blur validates fields that have a value; typing re-validates a field already marked invalid; selects validate on change.
   A button with [data-form-again] inside the success element resets the form and returns focus to the first field.
   ========================================================================== */
(function () {
  'use strict';
  var doc = document, root = doc.documentElement, body = doc.body;
  if (body) body.classList.remove('no-js');

  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var reduce = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var FOCUSABLE = 'a[href], area[href], button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function param(name) {
    try { return new URLSearchParams(location.search).get(name); } catch (e) { return null; }
  }
  function resolve(el) { return typeof el === 'string' ? $(el) : el; }
  function focusables(container) {
    return $$(FOCUSABLE, container).filter(function (el) { return el.offsetParent !== null || el === doc.activeElement; });
  }
  function trapTab(e, container) {
    if (e.key !== 'Tab') return;
    var f = focusables(container);
    if (!f.length) { e.preventDefault(); return; }
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* scroll lock shared by drawer and dialogs */
  var locks = 0;
  function lock() { if (locks++ === 0 && body) body.style.overflow = 'hidden'; }
  function unlock() { if (locks > 0 && --locks === 0 && body) body.style.overflow = ''; }

  /* ---------- petal pattern (same data URI as the sis.css fallback) ---------- */
  var petal = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'><g fill='none' stroke='white' stroke-width='3'><g transform='translate(40 40)'><ellipse cx='0' cy='-16' rx='8' ry='16'/><ellipse cx='0' cy='-16' rx='8' ry='16' transform='rotate(90)'/><ellipse cx='0' cy='-16' rx='8' ry='16' transform='rotate(180)'/><ellipse cx='0' cy='-16' rx='8' ry='16' transform='rotate(270)'/></g><g transform='translate(105 100) rotate(45)'><ellipse cx='0' cy='-14' rx='7' ry='14'/><ellipse cx='0' cy='-14' rx='7' ry='14' transform='rotate(90)'/><ellipse cx='0' cy='-14' rx='7' ry='14' transform='rotate(180)'/><ellipse cx='0' cy='-14' rx='7' ry='14' transform='rotate(270)'/></g></g></svg>";
  root.style.setProperty('--petal-pattern', 'url("data:image/svg+xml,' + encodeURIComponent(petal) + '")');

  /* ---------- header nav active state ---------- */
  var page = body && body.getAttribute('data-page');
  if (page) {
    $$('.nav [data-nav], .drawer [data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === page) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  /* ---------- reveal ---------- */
  var revIO = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); revIO.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  function observeReveal(r) {
    $$('.reveal:not(.in)', r || doc).forEach(function (el) {
      if (reduce || !revIO) el.classList.add('in'); else revIO.observe(el);
    });
  }
  observeReveal();

  /* ---------- toast ---------- */
  var toastT;
  function toast(msg, opts) {
    var t = $('#toast');
    if (!t && body) {
      t = doc.createElement('div');
      t.className = 'toast'; t.id = 'toast'; t.setAttribute('role', 'status'); t.setAttribute('aria-live', 'polite');
      t.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg><span></span>';
      body.appendChild(t);
    }
    if (!t) return;
    var span = $('span', t) || t;
    span.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.classList.remove('show'); }, (opts && opts.duration) || 2600);
  }

  /* ---------- drawer ---------- */
  var drawerEl = $('#drawer'), menuBtn = $('.menu-btn');
  var drawer = {
    open: function () {
      if (!drawerEl || drawerEl.classList.contains('open')) return;
      drawerEl.hidden = false; drawerEl.classList.remove('closing'); drawerEl.classList.add('open');
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function () { drawerEl.classList.add('visible'); });
      var c = $('[data-close]', drawerEl) || focusables(drawerEl)[0];
      if (c) c.focus();
      lock();
    },
    close: function (returnFocus) {
      if (!drawerEl || !drawerEl.classList.contains('open') || drawerEl.classList.contains('closing')) return;
      drawerEl.classList.add('closing'); drawerEl.classList.remove('visible');
      setTimeout(function () { drawerEl.classList.remove('open', 'closing'); drawerEl.hidden = true; }, reduce ? 0 : 240);
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
      unlock();
      if (returnFocus !== false && menuBtn) menuBtn.focus();
    }
  };
  if (drawerEl) {
    if (menuBtn) menuBtn.addEventListener('click', drawer.open);
    $$('[data-close], .drawer-scrim', drawerEl).forEach(function (b) { b.addEventListener('click', function () { drawer.close(); }); });
    $$('nav a, .btn', drawerEl).forEach(function (a) { a.addEventListener('click', function () { drawer.close(false); }); });
    drawerEl.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); drawer.close(); }
      trapTab(e, drawerEl);
    });
  }

  /* ---------- dialog ---------- */
  var current = null, opener = null;
  function openDialog(el, from) {
    el = resolve(el);
    if (!el || el === current) return;
    if (current) closeDialog(current, false);
    opener = from || doc.activeElement;
    current = el;
    el.hidden = false; el.classList.remove('closing'); el.classList.add('open');
    $$('iframe[data-src]', el).forEach(function (f) { f.src = f.getAttribute('data-src'); });
    requestAnimationFrame(function () { el.classList.add('visible'); });
    lock();
    var target = $('[data-autofocus]', el) || $('.dialog-close', el) || focusables(el)[0];
    if (!target) { var p = $('.dialog-panel', el) || el; p.setAttribute('tabindex', '-1'); target = p; }
    target.focus({ preventScroll: true });
    el.dispatchEvent(new CustomEvent('sis:dialog-open', { bubbles: true }));
  }
  function closeDialog(el, restore) {
    el = resolve(el) || current;
    if (!el || !el.classList.contains('open')) return;
    el.classList.add('closing'); el.classList.remove('visible');
    var done = function () {
      el.classList.remove('open', 'closing'); el.hidden = true;
      /* stop embedded video/audio when the dialog closes */
      $$('iframe[data-src]', el).forEach(function (f) { f.src = 'about:blank'; });
      $$('video, audio', el).forEach(function (m) { try { m.pause(); } catch (e) {} });
    };
    setTimeout(done, reduce ? 0 : 160);
    if (el === current) current = null;
    unlock();
    if (restore !== false && opener && opener.focus) opener.focus();
    el.dispatchEvent(new CustomEvent('sis:dialog-close', { bubbles: true }));
  }
  var dialog = { open: openDialog, close: closeDialog };
  doc.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-dialog-open]');
    if (t) { e.preventDefault(); openDialog(t.getAttribute('data-dialog-open'), t); return; }
    var c = e.target.closest && e.target.closest('[data-dialog-close], .dialog-scrim');
    if (c) { var d = c.closest('.dialog'); if (d) closeDialog(d); }
  });
  doc.addEventListener('keydown', function (e) {
    if (!current) return;
    if (e.key === 'Escape') { e.preventDefault(); closeDialog(current); return; }
    trapTab(e, $('.dialog-panel', current) || current);
  });

  /* ---------- form validation ---------- */
  var rules = {
    required: function (v) { return String(v).trim().length > 0; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim()); },
    phone: function (v) { return String(v).replace(/\D/g, '').length >= 8; },
    minLength: function (n) { return function (v) { return String(v).trim().length >= n; }; },
    futureDate: function (v) { if (!v) return false; var d = new Date(v + 'T00:00'), t = new Date(); t.setHours(0, 0, 0, 0); return d > t; },
    checked: function (v) { return v === true || v === 'on'; },
    optional: function (test) { return function (v, f) { return String(v).trim() === '' || test(v, f); }; }
  };

  function validateForm(form, ruleMap, options) {
    form = resolve(form);
    if (!form) return null;
    var o = options || {};
    var names = Object.keys(ruleMap || {});
    var cfg = {};
    names.forEach(function (n) {
      var r = ruleMap[n];
      cfg[n] = typeof r === 'function' ? { test: r } : (r || {});
    });
    var submitBtn = $('[type="submit"]', form);
    var labelEl = submitBtn && $('[data-label]', submitBtn);
    var labelText = labelEl ? labelEl.textContent : '';
    var successEl = resolve(o.success) || null;

    var summary = $('.err-summary', form);
    if (!summary) {
      summary = doc.createElement('div');
      summary.className = 'err-summary'; summary.tabIndex = -1; summary.setAttribute('role', 'alert');
      summary.innerHTML = '<b>Please check these details:</b><ul></ul>';
      form.insertBefore(summary, form.firstElementChild);
    }
    var summaryList = $('ul', summary) || summary.appendChild(doc.createElement('ul'));

    function wrapOf(n) { return $('[data-field="' + n + '"]', form); }
    function inputOf(n) { var w = wrapOf(n); return w ? $('input, select, textarea', w) : form.elements[n] || null; }
    function valueOf(el) {
      if (!el) return '';
      if (el.type === 'checkbox') return el.checked;
      if (el.type === 'radio') { var c = $('input[name="' + el.name + '"]:checked', form); return c ? c.value : ''; }
      return el.value;
    }
    function labelOf(n) {
      if (cfg[n].label) return cfg[n].label;
      var el = inputOf(n), l = el && el.id ? $('label[for="' + el.id + '"]', form) : null;
      return l ? l.textContent.replace(/\*\s*$/, '').trim() : n;
    }
    function validateField(n) {
      if (!cfg[n]) return true;
      var w = wrapOf(n), el = inputOf(n);
      if (!el || (w && (w.hidden || w.style.display === 'none' || w.closest('[hidden]')))) return true;
      var ok = !!cfg[n].test(valueOf(el), form);
      if (w) {
        w.classList.toggle('invalid', !ok);
        if (cfg[n].message) { var m = $('.err span', w) || $('.err', w); if (m) m.textContent = cfg[n].message; }
      }
      el.setAttribute('aria-invalid', ok ? 'false' : 'true');
      return ok;
    }
    function validate() {
      return names.filter(function (n) { return !validateField(n); }).length === 0;
    }
    function values() {
      var out = {};
      $$('input, select, textarea', form).forEach(function (el) {
        if (!el.name || el.disabled) return;
        if (el.type === 'checkbox') out[el.name] = el.checked;
        else if (el.type === 'radio') { if (el.checked) out[el.name] = el.value; }
        else out[el.name] = el.value;
      });
      return out;
    }
    function setLoading(on) {
      if (!submitBtn) return;
      submitBtn.disabled = on;
      submitBtn.classList.toggle('loading', on);
      submitBtn.setAttribute('aria-busy', on ? 'true' : 'false');
      if (labelEl) labelEl.textContent = on ? (o.loadingText || 'Sending…') : labelText;
    }
    function reset(clear) {
      if (successEl) successEl.classList.remove('show');
      form.style.display = '';
      if (clear !== false) {
        form.reset();
        $$('[data-field]', form).forEach(function (w) { w.classList.remove('invalid'); });
        $$('[aria-invalid]', form).forEach(function (el) { el.removeAttribute('aria-invalid'); });
        summary.classList.remove('show');
      }
      setLoading(false);
    }

    names.forEach(function (n) {
      var el = inputOf(n);
      if (!el) return;
      el.addEventListener('blur', function () { var v = valueOf(el); if (v !== '' && v !== false) validateField(n); });
      el.addEventListener('input', function () { var w = wrapOf(n); if (w && w.classList.contains('invalid')) validateField(n); });
      if (el.tagName === 'SELECT' || el.type === 'checkbox' || el.type === 'radio') el.addEventListener('change', function () { validateField(n); });
    });

    summary.addEventListener('click', function (e) {
      var a = e.target.closest('a'); if (!a) return;
      e.preventDefault();
      var t = $(a.getAttribute('href'));
      if (t) t.focus();
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (submitBtn && submitBtn.disabled) return;
      var bad = names.filter(function (n) { return !validateField(n); });
      if (bad.length) {
        summaryList.innerHTML = bad.map(function (n) {
          var el = inputOf(n), href = el && el.id ? '#' + el.id : '#';
          return '<li><a href="' + esc(href) + '">' + esc(labelOf(n)) + '</a></li>';
        }).join('');
        summary.classList.add('show');
        summary.focus();
        if (o.onInvalid) o.onInvalid(bad, form);
        return;
      }
      summary.classList.remove('show');
      var data = values();
      setLoading(true);
      var p = o.onSubmit ? o.onSubmit(data, form) : new Promise(function (res) { setTimeout(res, reduce ? 300 : 1100); });
      Promise.resolve(p).then(function () {
        setLoading(false);
        if (o.onSuccess) o.onSuccess(data, form);
        if (successEl) {
          form.style.display = 'none';
          successEl.classList.add('show');
          successEl.focus();
        } else {
          toast(o.successText || 'Thank you, we have your message');
        }
      }, function (err) {
        setLoading(false);
        toast((err && err.message) || 'Something went wrong. Please try again.');
      });
    });

    if (successEl) {
      $$('[data-form-again]', successEl).forEach(function (b) {
        b.addEventListener('click', function () {
          reset(true);
          var first = names.length ? inputOf(names[0]) : $('input, select, textarea', form);
          if (first) first.focus();
        });
      });
    }

    return { form: form, validate: validate, validateField: validateField, values: values, reset: reset };
  }

  window.SIS = {
    $: $, $$: $$, reduce: reduce, esc: esc, param: param,
    observeReveal: observeReveal,
    toast: toast,
    drawer: drawer,
    dialog: dialog,
    validateForm: validateForm,
    rules: rules
  };
  /* convenience globals matching index.html's inline script */
  if (!window.observeReveal) window.observeReveal = observeReveal;
})();
