// Program Afiliasi Hostinger - Interactive Logic
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initCommissionCalculator();
  initFaqAccordion();
  initBackToTop();
  initSmoothScroll();
});

/**
 * 1. Sticky Header & Scroll Spy
 */
function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Drawer Navigation
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('closeMobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });
}

/**
 * 3. Interactive Commission Calculator
 */
function initCommissionCalculator() {
  const rangeInput = document.getElementById('referralRange');
  const referralCountDisplay = document.getElementById('referralCount');
  const tierDisplay = document.getElementById('commissionTier');
  const monthlyEarningsDisplay = document.getElementById('monthlyEarnings');
  const yearlyEarningsDisplay = document.getElementById('yearlyEarnings');
  const planButtons = document.querySelectorAll('.calc-plan-btn');

  if (!rangeInput || !referralCountDisplay || !monthlyEarningsDisplay) return;

  // Default average sale price in IDR
  let selectedPlanPrice = 450000; // Web Hosting average order value

  planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      planButtons.forEach(b => {
        b.classList.remove('bg-[#673de6]', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-[#18181a]', 'border-gray-200');
      });
      btn.classList.add('bg-[#673de6]', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-[#18181a]', 'border-gray-200');
      
      selectedPlanPrice = parseInt(btn.dataset.price, 10) || 450000;
      updateCalculation();
    });
  });

  function getCommissionTier(referrals) {
    if (referrals >= 25) return 0.60; // 60%
    if (referrals >= 10) return 0.50; // 50%
    return 0.40; // 40% base
  }

  function formatIDR(amount) {
    return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
  }

  function updateCalculation() {
    const referrals = parseInt(rangeInput.value, 10);
    const tier = getCommissionTier(referrals);
    const tierPercent = Math.round(tier * 100);

    referralCountDisplay.textContent = `${referrals} Penjualan`;
    if (tierDisplay) {
      tierDisplay.textContent = `${tierPercent}%`;
    }

    const monthlyEarnings = referrals * selectedPlanPrice * tier;
    const yearlyEarnings = monthlyEarnings * 12;

    monthlyEarningsDisplay.textContent = formatIDR(monthlyEarnings);
    if (yearlyEarningsDisplay) {
      yearlyEarningsDisplay.textContent = formatIDR(yearlyEarnings);
    }

    // Dynamic track background fill
    const min = rangeInput.min || 1;
    const max = rangeInput.max || 100;
    const percent = ((referrals - min) / (max - min)) * 100;
    rangeInput.style.background = `linear-gradient(to right, #673de6 0%, #673de6 ${percent}%, #e4dcfa ${percent}%, #e4dcfa 100%)`;
  }

  rangeInput.addEventListener('input', updateCalculation);
  updateCalculation();
}

/**
 * 4. Interactive FAQ Accordion
 */
function initFaqAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (!accordionItems.length) return;

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isExpanded = item.getAttribute('aria-expanded') === 'true';

      // Close all other items for a clean single-open accordion feel
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.setAttribute('aria-expanded', 'false');
          const otherHeader = otherItem.querySelector('.accordion-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      header.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    });

    // Keyboard navigation (Enter / Space)
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });
}

/**
 * 5. Back to Top Button
 */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 6. Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
