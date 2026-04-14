/* Reward Modal Functions - Load before redeemcoin.js */

window.showRewardModal = function() {
  // Remove existing modal
  const existing = document.getElementById('rewardModal');
  if (existing) existing.remove();

  // Increment coins first
  let coins = parseInt(localStorage.getItem('coins') || '0');
  coins += 100;
  localStorage.setItem('coins', coins);

  // Create modal HTML
  const modalHTML = `
    <div id="rewardModal" class="reward-modal-overlay" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.8);z-index:10001;display:flex;align-items:center;justify-content:center;padding:20px;">
      <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:40px 30px;border-radius:24px;text-align:center;max-width:380px;box-shadow:0 25px 50px rgba(102,126,234,0.4);transform:scale(1);animation:modalPop 0.4s cubic-bezier(0.34,1.56,0.64,1);">
        <div style="font-size:52px;margin-bottom:20px;">✨</div>
        <h2 style="font-size:32px;font-weight:700;margin:0 0 12px 0;letter-spacing:-0.5px;">Reward Claimed!</h2>
        <p style="font-size:22px;margin:0 0 25px 0;opacity:0.95;">You earned <strong style="color:#ffd700;">100 Coins</strong></p>
        <div style="display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:800;color:#ffd700;gap:12px;margin-bottom:32px;text-shadow:0 2px 4px rgba(0,0,0,0.3);">
          <img src="assets/icons/coin.png" style="width:44px;height:44px;filter:drop-shadow(0 2px 4px rgba(255,215,0,0.4));" alt="">
          <span>100</span>
        </div>
        <button id="modalCloseBtn" style="background:linear-gradient(135deg,#f093fb 0%,#f5576c 100%);color:white;border:none;padding:16px 40px;border-radius:16px;font-size:20px;font-weight:600;cursor:pointer;box-shadow:0 10px 30px rgba(245,87,108,0.4);transition:all 0.3s ease;letter-spacing:0.5px;">→ Play Game Now</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Add animations (only once)
  if (!document.getElementById('rewardModalStyles')) {
    const style = document.createElement('style');
    style.id = 'rewardModalStyles';
    style.textContent = `
      @keyframes modalPop {
        0% { opacity: 0; transform: scale(0.7) translateY(30px); }
        60% { transform: scale(1.05); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      @keyframes modalExit {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.7) translateY(-20px); }
      }
    `;
    document.head.appendChild(style);
  }

  // Close button handler
  document.getElementById('modalCloseBtn').onclick = () => {
    window.closeRewardModal(true);
  };

  // Update coin display
  setTimeout(() => {
    const coinEl = document.getElementById('coin');
    if (coinEl) coinEl.textContent = coins;
  }, 150);
};

window.closeRewardModal = function(redirect = false) {
  const modal = document.getElementById('rewardModal');
  if (modal) {
    modal.style.animation = 'modalExit 0.3s ease-out';
    setTimeout(() => {
      modal.remove();
      if (redirect && window.pendingGameUrl) {
        window.location.href = window.pendingGameUrl;
      }
    }, 300);
  }
};
