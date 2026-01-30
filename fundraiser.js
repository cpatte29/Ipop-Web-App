// Fundraiser page functionality

// Get fundraiser slug from URL
function getFundraiserSlug() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load fundraiser data from localStorage
function loadFundraiserData(slug) {
    const fundraisers = JSON.parse(localStorage.getItem('ipop_fundraisers') || '[]');
    return fundraisers.find(f => f.slug === slug);
}

// Generate slug from organization name
function generateSlug(orgName) {
    return orgName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .substring(0, 50);
}

// Calculate progress (mock calculation for now)
function calculateProgress(fundraiser) {
    // In a real implementation, this would come from actual order data
    // For now, we'll use a simple mock based on when it was created
    const now = Date.now();
    const created = new Date(fundraiser.createdAt).getTime();
    const daysSince = (now - created) / (1000 * 60 * 60 * 24);

    // Mock progress: random between 0-30% for demo
    const mockProgress = Math.min(Math.floor(Math.random() * 30), 100);
    const raised = Math.floor((mockProgress / 100) * fundraiser.goal);

    return {
        raised: raised,
        percentage: mockProgress,
        supporters: Math.floor(mockProgress * 0.5) // Mock supporter count
    };
}

// Calculate days remaining until end date
function getDaysRemaining(endDate) {
    if (!endDate) return null;
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
}

// Render fundraiser page
function renderFundraiserPage(fundraiser) {
    const container = document.getElementById('fundraiser-content');
    const progress = calculateProgress(fundraiser);
    const shareUrl = window.location.href;
    const daysRemaining = getDaysRemaining(fundraiser.endDate);

    // Update page title
    document.getElementById('page-title').textContent = `Support ${fundraiser.orgName} | iPOP Gourmet Popcorn`;

    container.innerHTML = `
        <!-- Hero Section -->
        <section class="fundraiser-hero">
            <div class="container">
                <div class="fundraiser-content">
                    ${fundraiser.image ? `
                        <div style="margin-bottom: 2rem;">
                            <img src="${fundraiser.image}" alt="${fundraiser.orgName}"
                                 style="max-width: 300px; max-height: 300px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                        </div>
                    ` : ''}
                    <div class="org-badge">${fundraiser.orgType}</div>
                    <h1 class="fundraiser-title">${fundraiser.orgName}</h1>
                    ${fundraiser.description ? `
                        <p class="fundraiser-description">${fundraiser.description}</p>
                    ` : ''}
                    ${daysRemaining !== null ? `
                        <div style="margin-top: 2rem; font-size: 1.8rem;">
                            <span style="background: rgba(255,255,255,0.2); padding: 1rem 2rem; border-radius: 100px;">
                                ⏰ ${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'} remaining
                            </span>
                        </div>
                    ` : ''}
                </div>
            </div>
        </section>

        <!-- Progress Section -->
        <section class="progress-section">
            <div class="container">
                <div class="progress-card">
                    <div class="progress-stats">
                        <div class="stat">
                            <div class="stat-value">$${progress.raised.toLocaleString()}</div>
                            <div class="stat-label">Raised</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">$${fundraiser.goal.toLocaleString()}</div>
                            <div class="stat-label">Goal</div>
                        </div>
                        ${daysRemaining !== null ? `
                            <div class="stat">
                                <div class="stat-value">${daysRemaining}</div>
                                <div class="stat-label">${daysRemaining === 1 ? 'Day Left' : 'Days Left'}</div>
                            </div>
                        ` : ''}
                    </div>

                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${progress.percentage}%">
                            ${progress.percentage > 10 ? `<span class="progress-percentage">${progress.percentage}%</span>` : ''}
                        </div>
                    </div>

                    <p class="progress-text">
                        ${progress.supporters} supporters have contributed so far
                    </p>
                    ${fundraiser.endDate ? `
                        <p class="progress-text" style="margin-top: 1rem;">
                            Fundraiser ends on ${new Date(fundraiser.endDate).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    ` : ''}
                </div>
            </div>
        </section>

        <!-- Support CTA Section -->
        <section class="support-section">
            <div class="container">
                <div class="support-cta">
                    <h2 class="support-title">Support This Fundraiser</h2>
                    <p class="support-subtitle">
                        Every purchase helps ${fundraiser.orgName} reach their goal.
                        Choose from our delicious gourmet popcorn flavors and make a difference!
                    </p>

                    <a href="shop.html?fundraiser=${fundraiser.slug}" class="btn btn-primary btn-lg" style="font-size: 2rem; padding: 2rem 4rem;">
                        Shop Gourmet Popcorn
                    </a>

                    <div class="support-benefits">
                        <div class="benefit">
                            <div class="benefit-icon">🍿</div>
                            <div class="benefit-text">12 Delicious Flavors</div>
                        </div>
                        <div class="benefit">
                            <div class="benefit-icon">💰</div>
                            <div class="benefit-text">50% Profit to Fundraiser</div>
                        </div>
                        <div class="benefit">
                            <div class="benefit-icon">📦</div>
                            <div class="benefit-text">Fresh & Fast Delivery</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Share Section -->
        <section class="share-section">
            <div class="container">
                <div class="share-content">
                    <h2 class="share-title">Help Spread the Word!</h2>
                    <p class="share-text">
                        Share this fundraiser with friends, family, and colleagues to help us reach our goal faster.
                    </p>

                    <div class="share-link-container">
                        <input
                            type="text"
                            class="share-link-input"
                            value="${shareUrl}"
                            readonly
                            id="share-url-input"
                        >
                        <button class="copy-btn" onclick="copyShareLink()">Copy Link</button>
                    </div>

                    <div class="share-buttons">
                        <a href="mailto:?subject=Support ${encodeURIComponent(fundraiser.orgName)}&body=Help us reach our fundraising goal! ${encodeURIComponent(shareUrl)}" class="share-button">
                            📧 Email
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}" target="_blank" rel="noopener" class="share-button">
                            📘 Facebook
                        </a>
                        <a href="https://twitter.com/intent/tweet?text=Support ${encodeURIComponent(fundraiser.orgName)} by buying delicious gourmet popcorn!&url=${encodeURIComponent(shareUrl)}" target="_blank" rel="noopener" class="share-button">
                            🐦 Twitter
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Render error state
function renderErrorState() {
    const container = document.getElementById('fundraiser-content');

    container.innerHTML = `
        <div class="error-state">
            <div class="container">
                <div class="error-icon">❓</div>
                <h1 class="error-title">Fundraiser Not Found</h1>
                <p class="error-text">
                    We couldn't find the fundraiser you're looking for. It may have ended or the link might be incorrect.
                </p>
                <a href="start-fundraiser.html" class="btn btn-primary btn-lg">Start Your Own Fundraiser</a>
                <br><br>
                <a href="shop.html" class="btn btn-secondary btn-lg">Shop Popcorn Anyway</a>
            </div>
        </div>
    `;
}

// Copy share link to clipboard
function copyShareLink() {
    const input = document.getElementById('share-url-input');
    const button = document.querySelector('.copy-btn');

    input.select();
    document.execCommand('copy');

    button.textContent = '✓ Copied!';
    button.classList.add('copied');

    setTimeout(() => {
        button.textContent = 'Copy Link';
        button.classList.remove('copied');
    }, 2000);
}

// Save fundraiser data
function saveFundraiser(fundraiserData) {
    const fundraisers = JSON.parse(localStorage.getItem('ipop_fundraisers') || '[]');
    fundraisers.push(fundraiserData);
    localStorage.setItem('ipop_fundraisers', JSON.stringify(fundraisers));
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    const slug = getFundraiserSlug();

    if (!slug) {
        renderErrorState();
        return;
    }

    const fundraiser = loadFundraiserData(slug);

    if (!fundraiser) {
        renderErrorState();
        return;
    }

    renderFundraiserPage(fundraiser);
});

// Export functions for use in other files
window.fundraiserUtils = {
    generateSlug,
    saveFundraiser,
    loadFundraiserData
};
