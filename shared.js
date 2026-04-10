/* ═══════════════════════════════════════════════════════════
   PRISMA SHARED UTILITIES — مختبرات بريزما الطبية
   Single source of truth for shared JavaScript logic
   Version: 1.0.0 — 2026-03-29
   ═══════════════════════════════════════════════════════════ */

'use strict';

// ===== CONFIGURATION =====
const PRISMA_CONFIG = Object.freeze({
    phone: '+966920031642',
    phoneDisplay: '920031642',
    whatsappNumber: '966920031642',
    websiteUrl: 'https://www.prismalaboratory.com',
    brandName: 'مختبرات بريزما الطبية',
    brandNameEn: 'Prisma Laboratory',
});

// ===== SAFE LOCALSTORAGE =====
const SafeStorage = {
    get(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (raw === null) return fallback !== undefined ? fallback : null;
            return JSON.parse(raw);
        } catch (e) {
            console.warn('[Prisma] localStorage read error for key:', key, e);
            return fallback !== undefined ? fallback : null;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.warn('[Prisma] localStorage write error for key:', key, e);
            // Quota exceeded — try clearing old data
            if (e.name === 'QuotaExceededError') {
                console.warn('[Prisma] Storage quota exceeded');
            }
            return false;
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('[Prisma] localStorage remove error:', e);
        }
    }
};

// ===== INPUT SANITIZER =====
function sanitizeInput(str) {
    if (typeof str !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ===== WHATSAPP LINK BUILDER =====
function buildWaLink(message) {
    const msg = encodeURIComponent(message || 'مرحباً، أبي أحجز موعد');
    return 'https://wa.me/' + PRISMA_CONFIG.whatsappNumber + '?text=' + msg;
}

// ===== PHONE VALIDATION (Saudi) =====
function validateSaudiPhone(mobile) {
    const cleaned = mobile.replace(/[\s\-\(\)\+]/g, '');
    return /^(00966|966)?0?5\d{8}$/.test(cleaned);
}

function normalizeSaudiPhone(mobile) {
    let num = mobile.replace(/[\s\-\(\)\+]/g, '');
    if (num.startsWith('00966')) num = num.slice(5);
    else if (num.startsWith('966')) num = num.slice(3);
    if (num.startsWith('5')) num = '0' + num;
    return num; // always 05XXXXXXXX
}

// ===== UTM & GCLID CAPTURE (Campaign Tracking) =====
(function captureCampaignParams() {
    try {
        const params = new URLSearchParams(window.location.search);

        // Capture GCLID (Google Ads)
        const gclid = params.get('gclid');
        if (gclid) sessionStorage.setItem('prisma_gclid', gclid);

        // Capture all UTM parameters
        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        const utmData = {};
        let hasUtm = false;
        utmKeys.forEach(function(key) {
            const val = params.get(key);
            if (val) {
                utmData[key] = val;
                hasUtm = true;
            }
        });
        if (hasUtm) {
            sessionStorage.setItem('prisma_utm', JSON.stringify(utmData));
        }

        // Capture platform-specific click IDs
        const clickIds = {
            'fbclid': 'prisma_fbclid',     // Meta (Instagram/Facebook)
            'sclid': 'prisma_sclid',        // Snapchat
            'ttclid': 'prisma_ttclid',      // TikTok
            'twclid': 'prisma_twclid'       // Twitter/X
        };
        Object.keys(clickIds).forEach(function(paramName) {
            const val = params.get(paramName);
            if (val) sessionStorage.setItem(clickIds[paramName], val);
        });
    } catch (e) { /* silent */ }
})();

// ===== EVENT TRACKING (GTM dataLayer) =====
window.dataLayer = window.dataLayer || [];

function prismaTrackEvent(eventName, eventParams) {
    try {
        var data = { event: eventName };
        if (eventParams) {
            Object.keys(eventParams).forEach(function(key) {
                data[key] = eventParams[key];
            });
        }
        // Add UTM data if available
        var utmRaw = sessionStorage.getItem('prisma_utm');
        if (utmRaw) {
            var utm = JSON.parse(utmRaw);
            Object.keys(utm).forEach(function(key) {
                data[key] = utm[key];
            });
        }
        // Add GCLID if available
        var gclid = sessionStorage.getItem('prisma_gclid');
        if (gclid) data.gclid = gclid;

        window.dataLayer.push(data);
    } catch (e) {
        console.warn('[Prisma] Tracking error:', e);
    }
}

// ===== BUTTON CLICK TRACKING =====
(function initButtonTracking() {
    document.addEventListener('click', function(e) {
        var target = e.target.closest('a, button');
        if (!target) return;

        var href = target.getAttribute('href') || '';
        var pageName = document.title || window.location.pathname;

        // Track WhatsApp clicks
        if (target.classList.contains('wa-btn') ||
            target.classList.contains('t-card-wa-btn') ||
            target.classList.contains('modal-wa-btn') ||
            href.includes('wa.me')) {

            var packageName = '';
            // Try to find package name from card context
            var card = target.closest('.pkg-card, .t-card, .modal-box');
            if (card) {
                var nameEl = card.querySelector('.img-name, .t-card-name, .modal-pkg-name');
                if (nameEl) packageName = nameEl.textContent.trim();
            }

            prismaTrackEvent('whatsapp_click', {
                button_location: pageName,
                package_name: packageName,
                button_type: 'whatsapp'
            });
        }

        // Track Phone Call clicks
        if (target.classList.contains('call-btn') ||
            target.classList.contains('t-card-call-btn') ||
            target.classList.contains('modal-call-btn') ||
            href.startsWith('tel:')) {

            var pkgName = '';
            var cardEl = target.closest('.pkg-card, .t-card, .modal-box');
            if (cardEl) {
                var nameElement = cardEl.querySelector('.img-name, .t-card-name, .modal-pkg-name');
                if (nameElement) pkgName = nameElement.textContent.trim();
            }

            prismaTrackEvent('phone_click', {
                button_location: pageName,
                package_name: pkgName,
                button_type: 'phone_call'
            });
        }

        // Track CTA / Booking buttons
        if (target.classList.contains('btn-mag') ||
            target.classList.contains('hdr-cta') ||
            target.classList.contains('form-submit')) {

            prismaTrackEvent('cta_click', {
                button_location: pageName,
                button_text: target.textContent.trim().substring(0, 50),
                button_type: 'cta'
            });
        }

        // Track Hero buttons
        if (target.classList.contains('btn-cyn') ||
            target.classList.contains('btn-home-visit')) {

            prismaTrackEvent('hero_button_click', {
                button_location: pageName,
                button_text: target.textContent.trim().substring(0, 50),
                button_type: 'hero'
            });
        }
    });
})();

// ===== FORM SUBMISSION TRACKING =====
document.addEventListener('submit', function(e) {
    var form = e.target;
    prismaTrackEvent('form_submit', {
        form_location: document.title || window.location.pathname,
        form_id: form.id || 'unknown'
    });
});

// ===== CONSOLE SECURITY WARNING =====
if (typeof console !== 'undefined' && console.log) {
    console.log(
        '%c⚠️ هذه أداة مطوّرين — لا تلصق أي كود هنا',
        'font-size:20px;color:red;font-weight:bold;font-family:Tajawal,sans-serif;'
    );
    console.log(
        '%cإذا طلب منك أحد لصق كود هنا فهو يحاول اختراق حسابك',
        'font-size:14px;color:#ff6600;font-family:Tajawal,sans-serif;'
    );
}
