/**
 * Interactive logic for Black & White Electrical (Paul Badenhorst)
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof SITE_CONFIG === 'undefined') {
    console.warn('SITE_CONFIG not loaded; using default attributes.');
    return;
  }

  // 1. Bind Global Contact & Business Data to DOM
  bindConfigData();

  // 2. Initialize Interactive Problem Selector
  initProblemSelector();

  // 3. Render Suburbs Cloud & Regions
  renderSuburbs();

  // 4. Update Current Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/**
 * Automatically populates all data-bind elements with values from SITE_CONFIG
 */
function bindConfigData() {
  const { contact, businessName, ownerName, tagline } = SITE_CONFIG;

  // Business Name
  document.querySelectorAll('[data-bind="business-name"]').forEach(el => {
    el.textContent = businessName;
  });

  // Owner Name
  document.querySelectorAll('[data-bind="owner-name"]').forEach(el => {
    el.textContent = ownerName;
  });

  // Tagline
  document.querySelectorAll('[data-bind="tagline"]').forEach(el => {
    el.textContent = tagline;
  });

  // Phone display
  document.querySelectorAll('[data-bind="phone-display"]').forEach(el => {
    el.textContent = contact.phoneDisplay;
  });

  // Phone call links
  document.querySelectorAll('[data-bind="phone-call"]').forEach(el => {
    el.setAttribute('href', `tel:${contact.phoneTel}`);
  });

  // WhatsApp links
  const defaultWhatsAppUrl = `https://api.whatsapp.com/send?phone=${contact.whatsappNumber}&text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;
  document.querySelectorAll('[data-bind="whatsapp-link"]').forEach(el => {
    el.setAttribute('href', defaultWhatsAppUrl);
  });

  // Email
  document.querySelectorAll('[data-bind="email"]').forEach(el => {
    el.textContent = contact.email;
    el.setAttribute('href', `mailto:${contact.email}`);
  });

  // Address
  document.querySelectorAll('[data-bind="address"]').forEach(el => {
    el.textContent = contact.address;
  });

  // Hours
  document.querySelectorAll('[data-bind="hours"]').forEach(el => {
    el.textContent = contact.hours;
  });
}

/**
 * Initializes the Problem Selector interactive card
 */
function initProblemSelector() {
  const container = document.getElementById('problem-pills-container');
  if (!container || !SITE_CONFIG.problems || SITE_CONFIG.problems.length === 0) return;

  container.innerHTML = '';
  let activeIndex = 0;

  const badgeEl = document.getElementById('problem-badge');
  const headlineEl = document.getElementById('problem-headline');
  const descEl = document.getElementById('problem-desc');
  const adviceEl = document.getElementById('problem-advice');
  const whatsappActionEl = document.getElementById('problem-action-whatsapp');

  function updateActiveProblem(index) {
    activeIndex = index;
    const problem = SITE_CONFIG.problems[index];

    // Update pill styles & ARIA attributes
    const buttons = container.querySelectorAll('button');
    buttons.forEach((btn, i) => {
      const isSelected = i === index;
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      btn.setAttribute('tabindex', isSelected ? '0' : '-1');

      if (isSelected) {
        btn.className = 'px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold bg-amber-500 text-black shadow-sm border border-amber-500 transition-all min-h-[44px]';
      } else {
        btn.className = 'px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all min-h-[44px]';
      }
    });

    // Update Card Content
    if (badgeEl) badgeEl.textContent = problem.badge;
    if (headlineEl) headlineEl.textContent = problem.headline;
    if (descEl) descEl.textContent = problem.description;
    if (adviceEl) adviceEl.textContent = problem.advice;

    if (whatsappActionEl) {
      const encodedMsg = encodeURIComponent(problem.whatsappText);
      whatsappActionEl.setAttribute('href', `https://api.whatsapp.com/send?phone=${SITE_CONFIG.contact.whatsappNumber}&text=${encodedMsg}`);
      whatsappActionEl.className = 'inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-4 py-2.5 rounded-lg text-sm shrink-0 shadow-sm transition-colors min-h-[44px]';
      whatsappActionEl.innerHTML = `
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        <span>WhatsApp: "${problem.label}"</span>
      `;
    }
  }

  // Create accessible tab buttons
  SITE_CONFIG.problems.forEach((prob, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.role = 'tab';
    btn.id = `problem-tab-${prob.id}`;
    btn.textContent = prob.label;
    btn.setAttribute('aria-controls', 'problem-card');
    btn.setAttribute('aria-label', `Select problem: ${prob.label}`);
    btn.addEventListener('click', () => updateActiveProblem(idx));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        const nextIdx = (idx + 1) % SITE_CONFIG.problems.length;
        updateActiveProblem(nextIdx);
        container.querySelectorAll('button')[nextIdx].focus();
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (idx - 1 + SITE_CONFIG.problems.length) % SITE_CONFIG.problems.length;
        updateActiveProblem(prevIdx);
        container.querySelectorAll('button')[prevIdx].focus();
      }
    });
    container.appendChild(btn);
  });

  // Set initial state
  updateActiveProblem(0);
}

/**
 * Renders the suburbs list as high-visibility tags
 */
function renderSuburbs() {
  const container = document.getElementById('suburbs-container');
  if (!container || !SITE_CONFIG.serviceAreas) return;

  container.innerHTML = '';
  SITE_CONFIG.serviceAreas.forEach(area => {
    const tag = document.createElement('span');
    const isBase = area === "Pretoria North";
    tag.className = isBase 
      ? 'inline-flex items-center gap-1.5 bg-slate-900 text-amber-300 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm'
      : 'inline-block bg-white text-slate-800 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm hover:border-amber-400 hover:text-amber-900 transition-colors';
    
    if (isBase) {
      tag.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true"></span> ${area} (Base)`;
    } else {
      tag.textContent = area;
    }
    container.appendChild(tag);
  });
}
