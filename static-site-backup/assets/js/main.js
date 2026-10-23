/**
 * Strong 4K USA — Main Interactive Engine
 * Lightweight, Vanilla JavaScript for Performance & UX
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initPricingSwitcher();
  initSavingsCalculator();
  initFaqAccordions();
  initMobileNav();
  initTrialForm();
});

/* 1. Theme Toggle (Dark / Light Mode) */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'light') {
    // Sun icon
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
  } else {
    // Moon icon
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
  }
}

/* 2. Interactive Multi-Connection Pricing Switcher */
const PRICING_RATES = {
  1: { 1: 14.99, 3: 34.99, 6: 49.99, 12: 79.99 },
  2: { 1: 24.99, 3: 54.99, 6: 79.99, 12: 129.99 },
  3: { 1: 32.99, 3: 74.99, 6: 109.99, 12: 169.99 },
  4: { 1: 39.99, 3: 89.99, 6: 134.99, 12: 209.99 },
  5: { 1: 46.99, 3: 104.99, 6: 159.99, 12: 249.99 }
};

let currentConnections = 1;

function initPricingSwitcher() {
  const screenBtns = document.querySelectorAll('.screen-btn');
  if (!screenBtns.length) return;

  screenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      screenBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentConnections = parseInt(e.currentTarget.getAttribute('data-screens') || '1', 10);
      updatePricingDisplay();
    });
  });

  updatePricingDisplay();
}

function updatePricingDisplay() {
  const rates = PRICING_RATES[currentConnections] || PRICING_RATES[1];
  
  // 1 Month
  const p1 = document.getElementById('price-1m');
  if (p1) p1.textContent = rates[1].toFixed(2);
  
  // 3 Months
  const p3 = document.getElementById('price-3m');
  if (p3) p3.textContent = rates[3].toFixed(2);
  const p3mo = document.getElementById('price-3m-monthly');
  if (p3mo) p3mo.textContent = `$${(rates[3] / 3).toFixed(2)}/mo`;

  // 6 Months
  const p6 = document.getElementById('price-6m');
  if (p6) p6.textContent = rates[6].toFixed(2);
  const p6mo = document.getElementById('price-6m-monthly');
  if (p6mo) p6mo.textContent = `$${(rates[6] / 6).toFixed(2)}/mo`;

  // 12 Months
  const p12 = document.getElementById('price-12m');
  if (p12) p12.textContent = rates[12].toFixed(2);
  const p12mo = document.getElementById('price-12m-monthly');
  if (p12mo) p12mo.textContent = `$${(rates[12] / 12).toFixed(2)}/mo`;

  // Connection labels
  document.querySelectorAll('.plan-conn-count').forEach(el => {
    el.textContent = `${currentConnections} Simultaneous Connection${currentConnections > 1 ? 's' : ''}`;
  });

  // Update order URLs
  document.querySelectorAll('.btn-order-plan').forEach(btn => {
    const period = btn.getAttribute('data-period') || '12m';
    const months = period === '1m' ? 1 : period === '3m' ? 3 : period === '6m' ? 6 : 12;
    const price = rates[months];
    btn.setAttribute('href', `/order/?plan=${period}&screens=${currentConnections}&amount=${price}`);
  });
}

/* 3. Interactive Cable Savings Calculator */
function initSavingsCalculator() {
  const slider = document.getElementById('cable-slider');
  const billDisplay = document.getElementById('current-bill-display');
  const savingsDisplay = document.getElementById('annual-savings-display');
  
  if (!slider || !billDisplay || !savingsDisplay) return;

  function updateSavings() {
    const currentMonthly = parseFloat(slider.value);
    billDisplay.textContent = `$${currentMonthly.toFixed(0)}`;
    
    // Average annual Strong 4K USA 12m plan is $79.99 ($6.66/mo)
    const annualCableCost = currentMonthly * 12;
    const annualIptvCost = 79.99;
    const netAnnualSavings = Math.max(0, annualCableCost - annualIptvCost);
    
    savingsDisplay.textContent = `$${netAnnualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  }

  slider.addEventListener('input', updateSavings);
  updateSavings();
}

/* 4. FAQ Accordion Toggle */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* 5. Mobile Navigation Drawer */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('nav-open');
  });
}

/* 6. Instant 24h Free Trial Form Handler */
function initTrialForm() {
  const form = document.getElementById('trial-request-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const emailInput = form.querySelector('input[type="email"]');
    const resultBox = document.getElementById('trial-result-box');
    
    if (!emailInput || !emailInput.value) return;

    btn.disabled = true;
    btn.textContent = 'Generating 24-Hour Test Account...';

    setTimeout(() => {
      btn.textContent = 'Credentials Generated!';
      btn.disabled = false;
      if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  });
}
