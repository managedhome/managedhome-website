/* ============================================================
   ManagedHome — main app logic
   localStorage-backed auth, applications, hires
   ============================================================ */

const STORE = {
  USER: 'mh_user',
  APPLICATIONS: 'mh_applications',
  HIRES: 'mh_hires',
  SAVED: 'mh_saved',
  MESSAGES: 'mh_messages',
};

const MH = {
  /* ---------- storage helpers ---------- */
  get(key, fallback = null) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)); },

  /* ---------- auth ---------- */
  user() { return MH.get(STORE.USER); },
  signIn(user) { MH.set(STORE.USER, user); },
  signOut() { localStorage.removeItem(STORE.USER); window.location.href = 'index.html'; },

  /* ---------- saved professionals ---------- */
  saved() { return MH.get(STORE.SAVED, []); },
  toggleSaved(proId) {
    const list = MH.saved();
    const idx = list.indexOf(proId);
    if (idx >= 0) list.splice(idx, 1); else list.push(proId);
    MH.set(STORE.SAVED, list);
    return idx < 0; // true if newly saved
  },
  isSaved(proId) { return MH.saved().includes(proId); },

  /* ---------- hires ---------- */
  hires() { return MH.get(STORE.HIRES, []); },
  addHire(record) {
    const list = MH.hires();
    list.push({ ...record, id: 'h' + Date.now(), status: 'pending', createdAt: new Date().toISOString() });
    MH.set(STORE.HIRES, list);
  },
  updateHire(id, patch) {
    const list = MH.hires().map(h => h.id === id ? { ...h, ...patch } : h);
    MH.set(STORE.HIRES, list);
  },

  /* ---------- pro applications ---------- */
  applications() { return MH.get(STORE.APPLICATIONS, []); },
  addApplication(app) {
    const list = MH.applications();
    list.push({ ...app, id: 'a' + Date.now(), status: 'submitted', createdAt: new Date().toISOString() });
    MH.set(STORE.APPLICATIONS, list);
  },

  /* ---------- messages ---------- */
  messages() { return MH.get(STORE.MESSAGES, []); },
  addMessage(m) {
    const list = MH.messages();
    list.push({ ...m, id: 'm' + Date.now(), createdAt: new Date().toISOString() });
    MH.set(STORE.MESSAGES, list);
  },

  /* ---------- toast ---------- */
  toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    requestAnimationFrame(() => el.classList.add('show'));
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 2800);
  },

  /* ---------- pro lookup ---------- */
  pro(id) { return (window.MH_PROS || []).find(p => p.id === id); },
  trade(id) {
    const t = (window.MH_TRADES || []).find(t => t.id === id);
    return t ? t.label : id;
  },
};

window.MH = MH;

/* ---------- Mobile nav toggle ---------- */
document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-toggle')) {
    document.querySelector('.nav-links')?.classList.toggle('open');
  }
});

/* ---------- Header auth-aware buttons ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const u = MH.user();
  document.querySelectorAll('[data-auth-show]').forEach(el => {
    const show = el.dataset.authShow;
    if (show === 'in' && !u)  el.style.display = 'none';
    if (show === 'out' && u)  el.style.display = 'none';
    if (show === 'pro' && (!u || u.role !== 'pro')) el.style.display = 'none';
    if (show === 'homeowner' && (!u || u.role !== 'homeowner')) el.style.display = 'none';
  });
  // Greet user where slot exists
  document.querySelectorAll('[data-user-name]').forEach(el => {
    if (u) el.textContent = u.name || u.email;
  });
});

/* ---------- helpers used by pages ---------- */
function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;',
  }[c]));
}
window.escapeHtml = escapeHtml;
