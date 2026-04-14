let adLoading = false;
let adResetTimer = null;
let pendingGameUrl = null; // Store game URL for delayed redirect after success

/* ---------------- SAFE LOCALSTORAGE HELPERS ---------------- */
function safeGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn("LocalStorage getItem blocked:", e);
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("LocalStorage setItem blocked:", e);
  }
}

/* ---------------- PAGE LOAD: INIT COINS ---------------- */
document.addEventListener("DOMContentLoaded", function () {
  const userCoins = parseInt(safeGetItem("coins")) || 0;
  const coinEl = document.getElementById("coin");
  if (coinEl) coinEl.textContent = userCoins;
});

/* ---------------- EARN COINS BUTTON (DISABLED - using popup in index.html) ---------------- */
// document.getElementById("earnCoinBtn").addEventListener("click", function () {
//   if (adLoading) return;
// 
//   const earnBtn = document.getElementById("earnCoinBtn");
//   const originalText = earnBtn.innerHTML;
// 
//   // Show loading state
//   earnBtn.innerHTML = "Loading Ad... ⏳";
//   earnBtn.disabled = true;
//   adLoading = true;
// 
//   let adTimeout = setTimeout(() => {
//     earnBtn.innerHTML = originalText;
//     earnBtn.disabled = false;
//     ErrorToast();
//     resetAdState();
//   }, 7000);
// 
//   initializeAds(9389057744, (rewardedAd) => {
//     if (rewardedAd) {
//       clearTimeout(adTimeout);
//       rewardedAd.show((result) => {
//         if (result && result.status === "viewed") {
//           addCoins(10);
//           showToast();
//         } else {
//           console.log("Ad skipped or closed early.");
//         }
// 
//         earnBtn.innerHTML = originalText;
//         earnBtn.disabled = false;
//         resetAdState();
//       });
//     } else {
//       clearTimeout(adTimeout);
//       earnBtn.innerHTML = originalText;
//       earnBtn.disabled = false;
//       resetAdState();
//     }
//   });
// });

/* ---------------- AD INITIALIZER ---------------- */
function initializeAds(adSlot, callback) {
  adLoading = true;
  window.adsbygoogle = window.adsbygoogle || [];

  adsbygoogle.push({
    params: {
      google_ad_loaded_callback: callback,
      google_ad_slot: adSlot,
      google_ad_format: "rewarded",
    },
  });
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
      document.getElementById("coin").textContent = updatedCoins;
      window.location.href = pendingGameUrl;
    }
  });
});

/* ---------------- TOAST ---------------- */
// Legacy toast (replaced by successPopup)
function showToast() {
  // Legacy toast removed
}

function ErrorToast() {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast-message";
    toast.innerHTML = `
     ❌ Ad not available, try again later
    `;
    document.body.appendChild(toast);
  }

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

/* ---------------- ADD COINS ---------------- */
function addCoins(amount) {
  let coins = parseInt(safeGetItem("coins")) || 0;
  coins += amount;
  safeSetItem("coins", coins);
  document.getElementById("coin").textContent = coins;
}

/* ---------------- RESET AD STATE ---------------- */
function resetAdState() {
  adLoading = false;
  if (adResetTimer) {
    clearTimeout(adResetTimer);
    adResetTimer = null;
  }
}

/* ---------------- OOPS POPUP ---------------- */
function showOopsPopup() {
  const existingPopup = document.getElementById("oopsPopup");
  if (existingPopup) existingPopup.remove();

  const popupHTML = `
    <div id="oopsPopup" class="popup" style="display:flex" data-clarity-mask="true">
      <div class="popup-data">
        <img class="oops-img" src="https://gameplay.pomanderplace.com/assets/icons/coin-earn.png" alt="Oops!" />
        <p class="main-text">You don't have enough coins to join this contest.</p>
        <p class="sub-text">Watch reward ad to earn coins</p>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:20px;">
          <button id="closeBtn" class="simple-btn" style="flex:1;background:#6b7280;color:white;border:none;padding:12px;border-radius:8px;font-size:16px;">Close</button>
          <button id="skipBtn" class="simple-btn" style="flex:1;background:#3b82f6;color:white;border:none;padding:12px;border-radius:8px;font-size:16px;">Skip</button>
          <button id="claimBtn" class="simple-btn" style="flex:1;background:#10b981;color:white;border:none;padding:12px;border-radius:8px;font-size:16px;">Claim</button>
        </div>
        <span class="ad-tag" style="display:block;margin-top:10px;color:#ef4444;">Ad</span>
      </div>
    </div>
  `;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = popupHTML;
  document.body.appendChild(wrapper.firstElementChild);

  console.log("Popup opened:"); // Debug log for Clarity

  const closeBtn = document.getElementById("closeBtn");
  const skipBtn = document.getElementById("skipBtn");
  const claimBtn = document.getElementById("claimBtn");

  /* Close handler */
  closeBtn.addEventListener("click", function () {
    closeOopsPopup();
  });

  /* Skip handler */
  skipBtn.addEventListener("click", function () {
    const userCoins = parseInt(safeGetItem("coins")) || 0;
    if (userCoins >= 10) {
      const updatedCoins = userCoins - 10;
      safeSetItem("coins", updatedCoins);
      const coinEl = document.getElementById("coin");
      if (coinEl) coinEl.textContent = updatedCoins;
    }
    closeOopsPopup();
    if (pendingGameUrl) {
      setTimeout(() => window.location.href = pendingGameUrl, 300);
    }
  });

  /* Claim handler → RewardAd with callbacks */
  claimBtn.addEventListener("click", function () {
    // Show loading state, don't close yet
    claimBtn.textContent = 'Watching ad... ⏳';
    claimBtn.disabled = true;
    closeBtn.disabled = true;
    skipBtn.disabled = true;
    closeBtn.style.opacity = '0.5';
    skipBtn.style.opacity = '0.5';

    // Call RewardAd with success/fail callbacks
    if (typeof RewardAd === 'function') {
      // Temporarily override RewardAd to handle callbacks (since it's external)
      const originalRewardAd = window.RewardAd;
      window.onAdSuccess = () => {
        addCoins(100);
        showRewardModal();
        closeOopsPopup();
      };
      window.onAdFail = () => {
        // Reset popup
        claimBtn.textContent = 'Claim';
        claimBtn.disabled = false;
        closeBtn.disabled = false;
        skipBtn.disabled = false;
        closeBtn.style.opacity = '1';
        skipBtn.style.opacity = '1';
        showToastError('Ad failed, try again');
      };
      RewardAd();
    } else {
      showToastError('RewardAd not ready');
      claimBtn.textContent = 'Claim';
      claimBtn.disabled = false;
    }
  });
}

function closeOopsPopup() {
  const popup = document.getElementById("oopsPopup");
  if (popup) popup.remove();
}

// New: Success popup after ad completion


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
