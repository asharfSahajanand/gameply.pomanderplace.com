// ================= SAFE LOCAL STORAGE =================
const safeLocalStorage = {
  getItem: function(key) {
    try { return localStorage.getItem(key); } catch(e) { return null; }
  },
  setItem: function(key, value) {
    try { localStorage.setItem(key, value); } catch(e) {}
  }
};

// ================= COIN SYSTEM =================
if (typeof window.getCoins === 'undefined') {
  window.getCoins = function() {
    return parseInt(safeLocalStorage.getItem('coins') || '0');
  };

  window.addCoins = function(amount) {
    const newTotal = window.getCoins() + amount;
    safeLocalStorage.setItem('coins', newTotal);
    const coinEl = document.getElementById('coin');
    if (coinEl) coinEl.textContent = newTotal;
    return newTotal;
  };

  window.showToast = function({title, msg}) {
    try {
      const container = document.getElementById('toast-container') || document.body;
      const toast = document.createElement('div');
      toast.className = 'toast-item';
      toast.innerHTML = `
        <div>
          <p style="font-weight:600;">${title}</p>
          <p style="opacity:0.85">${msg}</p>
        </div>`;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    } catch(e) {}
  };
}

console.log('✅ Error handler loaded');


// ================= AUTO RELOAD LOGIC =================
const MAX_RELOADS = 1;
const RELOAD_KEY = "reload_count_v1";

function isChunkError(err, event) {
  const msg =
    err?.message ||
    event?.message ||
    err?.toString() ||
    "";

  return (
    msg.includes("ChunkLoadError") ||
    msg.includes("Loading chunk") ||
    msg.includes("CSS chunk load failed") ||
    msg.includes("_next/static") ||
    msg.includes("failed")
  );
}

function safeReload() {
  let count = 0;

  try {
    count = parseInt(sessionStorage.getItem(RELOAD_KEY) || "0");
  } catch (e) {}

  if (count >= MAX_RELOADS) {
    console.warn("❌ Reload limit reached");
    return;
  }

  try {
    sessionStorage.setItem(RELOAD_KEY, count + 1);
  } catch (e) {}

  console.warn(`🔁 Reloading... attempt ${count + 1}`);

  setTimeout(() => {
    location.reload();
  }, 500);
}


// ================= ERROR LISTENERS =================

// Script load failure (IMPORTANT for Next.js chunks)
window.addEventListener("error", function (e) {
  // detect script fail
  if (e.target && e.target.tagName === "SCRIPT") {
    console.warn("🔥 Script load failed");
    safeReload();
    return;
  }

  // detect chunk error
  if (isChunkError(e.error, e)) {
    console.warn("🔥 Chunk error detected");
    safeReload();
  }
}, true); // 👈 capture mode important


// Promise errors
window.addEventListener("unhandledrejection", function (e) {
  if (isChunkError(e.reason, e)) {
    console.warn("🔥 Promise chunk error");
    safeReload();
  }
});


// ================= RESET LOGIC =================

// only reset when NOT reload
window.addEventListener("load", () => {
  const nav = performance.getEntriesByType("navigation")[0];

  if (nav && nav.type !== "reload") {
    sessionStorage.removeItem(RELOAD_KEY);
  }
});

