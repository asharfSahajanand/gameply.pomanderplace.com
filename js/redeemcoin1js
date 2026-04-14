let adLoading = false;
let adResetTimer = null;
let pendingGameUrl = null;

/* ---------------- SAFE LOCALSTORAGE HELPERS ---------------- */
function safeGetItem(key) {
  try { return localStorage.getItem(key); }
  catch (e) { console.warn("LocalStorage getItem blocked:", e); return null; }
}

function safeSetItem(key, value) {
  try { localStorage.setItem(key, value); }
  catch (e) { console.warn("LocalStorage setItem blocked:", e); }
}

/* ---------------- PAGE LOAD: INIT COINS ---------------- */
document.addEventListener("DOMContentLoaded", function () {
  const userCoins = parseInt(safeGetItem("coins")) || 0;
  const coinEl = document.getElementById("coin");
  if (coinEl) coinEl.textContent = userCoins;
});

/* ---------------- ADD COINS ---------------- */
function addCoins(amount) {
  let coins = parseInt(safeGetItem("coins")) || 0;
  coins += amount;
  safeSetItem("coins", coins);
  const coinEl = document.getElementById("coin");
  if (coinEl) coinEl.textContent = coins;
}

/* ---------------- RESET AD STATE ---------------- */
function resetAdState() {
  adLoading = false;
  if (adResetTimer) { clearTimeout(adResetTimer); adResetTimer = null; }
}

/* ---------------- ERROR TOAST ---------------- */
function ErrorToast() {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast-message";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `❌ Ad not available, try again later`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 5000);
}

function showToastError(msg) {
  let toast = document.getElementById("toast");
  if (toast) toast.remove();
  toast = document.createElement("div");
  toast.id = "toast";
  toast.className = "toast-message";
  toast.innerHTML = `❌ ${msg}`;
  toast.style.background = '#ef4444';
  toast.style.color = 'white';
  document.body.appendChild(toast);
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4000);
}

/* ---------------- GAME SECTION CLICK ---------------- */
document.querySelectorAll(".game_section2").forEach((section) => {
  section.addEventListener("click", function (e) {
    e.preventDefault();
    const userCoins = parseInt(safeGetItem("coins")) || 0;
    const requiredCoins = 10;
    pendingGameUrl = this.querySelector("a").href;

    if (userCoins < requiredCoins) {
      showOopsPopup();
    } else {
      const updatedCoins = userCoins - requiredCoins;
      safeSetItem("coins", updatedCoins);
      const coinEl = document.getElementById("coin");
      if (coinEl) coinEl.textContent = updatedCoins;
      window.location.href = pendingGameUrl;
    }
  });
});

/* ================================================================
   OOPS POPUP
   - Close  → sirf band karo
   - Skip   → coins kato, game pe redirect
   - Claim  → 100 coins do, seedha game pe redirect
================================================================ */
function showOopsPopup() {
  const existing = document.getElementById("oopsPopup");
  if (existing) existing.remove();

  const popupHTML = `
    <div id="oopsPopup" class="popup" style="display:flex" data-clarity-mask="true">
      <div class="popup-data">
        <img class="oops-img"
          src="https://gameplay.pomanderplace.com/assets/icons/coin-earn.png"
          style="width:100px;height:50px;filter:drop-shadow(0 2px 4px rgba(255,215,0,0.4));"
          alt="Coins" />
        <p class="main-text">You don't have enough coins to join this contest.</p>
        <p class="sub-text">Claim your free reward coins!</p>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:20px;">
          <button id="oopsCloseBtn" class="simple-btn"
            style="flex:1;background:#6b7280;color:white;border:none;padding:12px;border-radius:8px;font-size:16px;cursor:pointer;">
            Close
          </button>
          <button id="oopsSkipBtn" class="simple-btn"
            style="flex:1;background:#3b82f6;color:white;border:none;padding:12px;border-radius:8px;font-size:16px;cursor:pointer;">
            Skip
          </button>
          <button id="oopsClaimBtn" class="simple-btn"
            style="flex:1;background:#10b981;color:white;border:none;padding:12px;border-radius:8px;font-size:16px;cursor:pointer;">
            Claim
          </button>
        </div>
        <span class="ad-tag" style="display:block;margin-top:10px;color:#ef4444;">Ad</span>
      </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", popupHTML);

  /* --- Close --- */
  document.getElementById("oopsCloseBtn").addEventListener("click", () => {
    closeOopsPopup();
  });

  /* --- Skip: coins kato aur game pe jao --- */
  document.getElementById("oopsSkipBtn").addEventListener("click", () => {
    const coins = parseInt(safeGetItem("coins")) || 0;
    if (coins >= 10) {
      safeSetItem("coins", coins - 10);
      const coinEl = document.getElementById("coin");
      if (coinEl) coinEl.textContent = coins - 10;
    }
    closeOopsPopup();
    if (pendingGameUrl) {
      setTimeout(() => window.location.href = pendingGameUrl, 300);
    }
  });

  /* --- Claim: 100 coins add karo, seedha redirect --- */
  document.getElementById("oopsClaimBtn").addEventListener("click", () => {
    const btn      = document.getElementById("oopsClaimBtn");
    const closeBtn = document.getElementById("oopsCloseBtn");
    const skipBtn  = document.getElementById("oopsSkipBtn");

    btn.textContent        = "Claiming... ✨";
    btn.disabled           = true;
    closeBtn.disabled      = true;
    skipBtn.disabled       = true;
    closeBtn.style.opacity = "0.5";
    skipBtn.style.opacity  = "0.5";

    setTimeout(() => {
      addCoins(100);        // 100 coins add karo
      closeOopsPopup();     // popup band karo
      if (pendingGameUrl) {
        window.location.href = pendingGameUrl;  // seedha game pe jao
      }
    }, 600);
  });
}

function closeOopsPopup() {
  const popup = document.getElementById("oopsPopup");
  if (popup) popup.remove();
}