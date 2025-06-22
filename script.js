// Voice Popup Toggle
document.getElementById('voice-btn').onclick = () => {
    document.getElementById('voice-popup').style.display = 'flex';
  };
  document.getElementById('close-voice').onclick = () => {
    document.getElementById('voice-popup').style.display = 'none';
  };
  
  // Animated Timer
  let timeLeft = 30;
  const timerEl = document.getElementById('timer');
  const countdown = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.innerHTML = `<i class="far fa-clock"></i> ${timeLeft}s left`;
    } else {
      clearInterval(countdown);
      timerEl.innerHTML = "⏰ Auction Over";
    }
  }, 1000);
  
  // Place Bid Logic with Effects
  let currentBid = 400;
  document.getElementById('placeBidBtn').onclick = () => {
    const input = document.getElementById('bidInput').value;
    const credits = parseInt(input) * 100;
    if (!isNaN(credits) && credits > currentBid) {
      currentBid = credits;
      document.getElementById('currentBid').textContent = `${credits} Credits`;
      animateBid();
      simulateEEG();
      triggerConfetti();
    } else {
      alert('Enter valid seconds higher than current bid!');
    }
  };
  
  // Visual EEG Focus Simulation
  function simulateEEG() {
    const neuroStatus = document.getElementById('neuroStatus');
    neuroStatus.textContent = 'EEG Focus: 🔥 Peak Concentration!';
    setTimeout(() => {
      neuroStatus.textContent = 'EEG Focus: Awaiting signal...';
    }, 3000);
  }
  
  // Visual Pulse on Bid
  function animateBid() {
    const bidEl = document.getElementById('currentBid');
    bidEl.style.transition = 'transform 0.3s';
    bidEl.style.transform = 'scale(1.2)';
    setTimeout(() => bidEl.style.transform = 'scale(1)', 300);
  }
  
  // Confetti on Success
  function triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }