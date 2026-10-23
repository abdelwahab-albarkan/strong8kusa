import os
import sys

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"
sys.path.append(os.path.join(BASE_DIR, "research-data"))
from base_templates import get_head, get_header, get_footer
from page_generator_core import write_page

# ==============================================================================
# 2. PRICING & SUBSCRIPTION PAGE (/pricing/)
# Keywords: iptv subscription (Vol: 5,400), iptv subscription usa, iptv buy,
# cheap iptv subscription, best iptv subscription 2026
# ==============================================================================
def gen_pricing_page():
    schema = """
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://strong8kusa.com/pricing/#webpage",
        "url": "https://strong8kusa.com/pricing/",
        "name": "IPTV Subscription USA: 4K Plans & Pricing 2026 | Strong 8K USA",
        "isPartOf": { "@id": "https://strong8kusa.com/#website" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://strong8kusa.com/pricing/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://strong8kusa.com/pricing/" }
        ]
      },
      {
        "@type": "Product",
        "name": "Strong 8K USA Annual Subscription",
        "description": "12-month 4K Ultra HD IPTV subscription for US viewers with 1 to 5 multi-screen options.",
        "offers": {
          "@type": "Offer",
          "price": "79.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://strong8kusa.com/pricing/"
        }
      }
    ]
  }
  </script>
"""
    head = get_head(
        title="IPTV Subscription USA: 4K Plans & Pricing 2026 | Strong 8K USA",
        description="Explore affordable US IPTV subscriptions from $8.33/month. 1 to 5 simultaneous connections, 25,000+ live HD/4K channels, instant activation & money-back guarantee.",
        canonical_path="/pricing/",
        schema_json=schema
    )
    header = get_header(active_nav="pricing")
    footer = get_footer()

    body = f"""{head}
{header}
  <section class="section hero-section" style="padding: 4rem 0 2rem;">
    <div class="container" style="text-align: center; max-width: 820px;">
      <div class="section-eyebrow">US Subscription Plans</div>
      <h1>Simple, Transparent <span class="hero-gradient-text">IPTV Pricing</span> for American Viewers</h1>
      <p class="hero-lead">
        No hidden equipment surcharges, no broadcast television fees, and no long-term contracts. Pick your duration and simultaneous screen count below for instant provisioning.
      </p>
    </div>
  </section>

  <!-- Pricing Grid Section -->
  <section class="section" style="padding-top: 1rem;">
    <div class="container">
      <div class="pricing-controls">
        <div class="screen-toggle-group">
          <button class="screen-btn active" data-screens="1">1 Screen</button>
          <button class="screen-btn" data-screens="2">2 Screens</button>
          <button class="screen-btn" data-screens="3">3 Screens</button>
          <button class="screen-btn" data-screens="4">4 Screens</button>
          <button class="screen-btn" data-screens="5">5 Screens</button>
        </div>
        <div class="duration-toggle-group">
          <span>Select Your Screen Capacity</span>
          <span class="save-pill">Annual Plan Saves 45%</span>
        </div>
      </div>

      <div class="pricing-grid">
        <!-- 1 Month -->
        <div class="card pricing-card">
          <div class="plan-header">
            <h3 class="plan-name">1 Month Pass</h3>
            <p class="plan-desc">Short-term testing or travel pass</p>
          </div>
          <div class="plan-price-wrap">
            <span class="plan-currency">$</span>
            <span class="plan-amount" id="price-1m">14.99</span>
            <span class="plan-period">/ month</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <strong class="plan-conn-count">1 Connection</strong>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>25,000+ Live Channels</span>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>60FPS Live US Sports</span>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>Instant Automated Activation</span>
            </div>
          </div>
          <a href="/order/?plan=1m&screens=1&amount=14.99" class="btn btn-secondary btn-order-plan" data-period="1m">Select 1-Month</a>
        </div>

        <!-- 3 Months -->
        <div class="card pricing-card">
          <div class="plan-header">
            <h3 class="plan-name">3 Months Plan</h3>
            <p class="plan-desc">Great for seasonal sports fans</p>
          </div>
          <div class="plan-price-wrap">
            <span class="plan-currency">$</span>
            <span class="plan-amount" id="price-3m">34.99</span>
            <span class="plan-period" id="price-3m-monthly">/ $11.66 mo</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <strong class="plan-conn-count">1 Connection</strong>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>25,000+ Live Channels</span>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>Anti-Freeze 9.3 Engine</span>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>7-Day Refund Guarantee</span>
            </div>
          </div>
          <a href="/order/?plan=3m&screens=1&amount=34.99" class="btn btn-secondary btn-order-plan" data-period="3m">Select 3-Month</a>
        </div>

        <!-- 6 Months -->
        <div class="card pricing-card">
          <div class="plan-header">
            <h3 class="plan-name">6 Months Plan</h3>
            <p class="plan-desc">Most economical mid-term plan</p>
          </div>
          <div class="plan-price-wrap">
            <span class="plan-currency">$</span>
            <span class="plan-amount" id="price-6m">49.99</span>
            <span class="plan-period" id="price-6m-monthly">/ $8.33 mo</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <strong class="plan-conn-count">1 Connection</strong>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>25,000+ Live Channels</span>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>Dedicated US Proxies</span>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>120,000+ Movies &amp; Series</span>
            </div>
          </div>
          <a href="/order/?plan=6m&screens=1&amount=49.99" class="btn btn-secondary btn-order-plan" data-period="6m">Select 6-Month</a>
        </div>

        <!-- 12 Months (Best Value) -->
        <div class="card pricing-card featured">
          <div class="pricing-badge">&#9733; Recommended Value</div>
          <div class="plan-header">
            <h3 class="plan-name">12 Months (Best Value)</h3>
            <p class="plan-desc">Complete annual cord-cutting package</p>
          </div>
          <div class="plan-price-wrap">
            <span class="plan-currency">$</span>
            <span class="plan-amount" id="price-12m">79.99</span>
            <span class="plan-period" id="price-12m-monthly">/ $6.66 mo</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <strong class="plan-conn-count">1 Connection</strong>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>4K Ultra HD &amp; 60FPS Sports</span>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>Zero Blackouts on NFL, NBA, MLB</span>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>Priority Customer Support</span>
            </div>
            <div class="plan-feature-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>Full 7-Day Money-Back Guarantee</span>
            </div>
          </div>
          <a href="/order/?plan=12m&screens=1&amount=79.99" class="btn btn-primary btn-order-plan" data-period="12m">Select 12-Month</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Details Content -->
  <section class="section section-alt">
    <div class="container" style="max-width: 900px;">
      <h2>Understanding Multi-Connection Subscriptions</h2>
      <p>
        Most American families stream on multiple screens at once &mdash; parents watching live news in the living room while kids stream movies in the bedroom. With Strong 8K USA, you can upgrade your plan to support up to <strong>5 simultaneous connections</strong>. Unlike cable companies that charge an extra $12 per month for every additional TV box, our multi-device plans offer affordable incremental add-ons.
      </p>

      <h3 style="margin-top: 2rem;">How Multi-Screen IP Allocation Works</h3>
      <p>
        Your simultaneous connection count allows distinct devices in your household to connect concurrently. You can run one connection on your <a href="/devices/firestick/" style="color: var(--accent-cyan); text-decoration: underline;">Amazon Firestick</a>, another on your <a href="/devices/android-tv-box/" style="color: var(--accent-cyan); text-decoration: underline;">Nvidia Shield TV</a>, and a third on your smartphone simultaneously without stream termination or login collision.
      </p>

      <h3 style="margin-top: 2rem;">Supported Payment Methods</h3>
      <p>
        To ensure maximum security and privacy, we support major credit cards (Visa, MasterCard, American Express), encrypted crypto transactions (Bitcoin, USDT, Ethereum), and PayPal invoices. All payment traffic is processed through 256-bit SSL encrypted merchant gateways.
      </p>
    </div>
  </section>
{footer}
"""
    write_page("pricing/index.html", body)

# ==============================================================================
# 3. FREE TRIAL PAGE (/free-trial/)
# Keywords: iptv free trial, free try iptv, best iptv free trial usa,
# 24 hour iptv trial, test iptv service
# ==============================================================================
def gen_free_trial_page():
    schema = """
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://strong8kusa.com/free-trial/#webpage",
        "url": "https://strong8kusa.com/free-trial/",
        "name": "Instant 24-Hour IPTV Free Trial USA | Strong 8K USA",
        "isPartOf": { "@id": "https://strong8kusa.com/#website" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://strong8kusa.com/free-trial/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
          { "@type": "ListItem", "position": 2, "name": "Free Trial", "item": "https://strong8kusa.com/free-trial/" }
        ]
      }
    ]
  }
  </script>
"""
    head = get_head(
        title="Instant 24-Hour IPTV Free Trial USA | Test 4K Streams | Strong 8K USA",
        description="Request an instant 24-hour IPTV free trial in the USA. Zero credit card required. Test 25,000+ live channels, sports & VOD on Firestick, Android, or Smart TV.",
        canonical_path="/free-trial/",
        schema_json=schema
    )
    header = get_header(active_nav="free-trial")
    footer = get_footer()

    body = f"""{head}
{header}
  <section class="section hero-section" style="padding: 4rem 0 2rem;">
    <div class="container" style="text-align: center; max-width: 800px;">
      <div class="section-eyebrow">&#9733; 100% Risk-Free Test</div>
      <h1>Request Your Instant <span class="hero-gradient-text">24-Hour Free Trial</span></h1>
      <p class="hero-lead">
        Experience our ultra-low latency US streaming network before paying a dime. Zero credit card required, instant automated provisioning, and access to all 25,000+ live 4K channels and sports.
      </p>
    </div>
  </section>

  <section class="section" style="padding-top: 1rem;">
    <div class="container" style="max-width: 720px;">
      <div class="card" style="padding: 2.5rem;">
        <h2 style="font-size: 1.5rem; text-align: center; margin-bottom: 0.5rem;">Instant Trial Account Generator</h2>
        <p style="text-align: center; margin-bottom: 2rem; font-size: 0.95rem;">
          Enter your email address and primary streaming device to generate your instant M3U URL and Xtream Codes API credentials.
        </p>

        <form id="trial-request-form">
          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Your Email Address (For Credentials Delivery)</label>
            <input type="email" required placeholder="you@example.com" style="width: 100%; padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background: var(--bg-card-solid); color: var(--text-primary); font-family: var(--font-body); font-size: 1rem;">
          </div>

          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Primary Streaming Device</label>
            <select style="width: 100%; padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background: var(--bg-card-solid); color: var(--text-primary); font-family: var(--font-body); font-size: 1rem;">
              <option value="firestick">Amazon Fire TV Stick / Cube</option>
              <option value="android-tv">Android TV / Nvidia Shield / onn. 4K Pro</option>
              <option value="smart-tv">Samsung or LG Smart TV</option>
              <option value="apple-tv">Apple TV 4K</option>
              <option value="mobile">Android / iPhone / iPad</option>
              <option value="pc">Windows PC / Mac</option>
            </select>
          </div>

          <button type="submit" class="btn btn-trial btn-lg" style="width: 100%;">Generate 24-Hour Trial Account</button>
        </form>

        <!-- Simulated Instant Output Box -->
        <div id="trial-result-box" style="display: none; margin-top: 2rem; padding: 1.5rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3);">
          <h3 style="color: var(--accent-green); font-size: 1.15rem; margin-bottom: 0.5rem;">&#10004; Your 24-Hour Test Credentials Are Ready!</h3>
          <p style="font-size: 0.9rem; margin-bottom: 1rem;">
            These credentials are valid for the next 24 hours. Copy and paste them into your media player (e.g. TiviMate, IPTV Smarters):
          </p>
          <div style="background: var(--bg-primary); padding: 1rem; border-radius: 6px; font-family: monospace; font-size: 0.85rem; line-height: 1.7; color: var(--accent-cyan);">
            <strong>Server URL:</strong> http://line.strong8kusa.com:80<br>
            <strong>Username:</strong> trial_usa_8k_test<br>
            <strong>Password:</strong> stream2026usa<br>
            <strong>M3U Playlist:</strong> http://line.strong8kusa.com:80/get.php?username=trial_usa_8k_test&amp;password=stream2026usa&amp;type=m3u_plus
          </div>
          <div style="margin-top: 1.25rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <a href="/devices/firestick/" class="btn btn-secondary btn-sm">Firestick Setup Guide</a>
            <a href="/apps/tivimate/" class="btn btn-secondary btn-sm">TiviMate Setup Guide</a>
          </div>
        </div>
      </div>

      <div style="margin-top: 3rem; text-align: center;">
        <h3 style="font-size: 1.25rem;">Why We Recommend Testing Before Buying</h3>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7;">
          In the US streaming market, many unverified providers make misleading claims about uptime and channel counts. We actively encourage every customer to run a 24-hour test during their normal evening peak hours (8 PM &ndash; 11 PM) to personally verify stream stability, EPG guide accuracy, and sports feeds.
        </p>
      </div>
    </div>
  </section>
{footer}
"""
    write_page("free-trial/index.html", body)

# ==============================================================================
# 4. ORDER PAGE (/order/) — Transactional (noindex, follow)
# ==============================================================================
def gen_order_page():
    head = get_head(
        title="Complete Your Order | Strong 8K USA",
        description="Secure checkout for your Strong 8K USA subscription. Instant automated activation and 7-day money-back guarantee.",
        canonical_path="/order/",
        noindex=True
    )
    header = get_header(active_nav="pricing")
    footer = get_footer()

    body = f"""{head}
{header}
  <section class="section hero-section" style="padding: 4rem 0 2rem;">
    <div class="container" style="text-align: center; max-width: 700px;">
      <div class="section-eyebrow">Encrypted Checkout</div>
      <h1>Complete Your <span class="hero-gradient-text">Subscription Order</span></h1>
      <p class="hero-lead">
        Instant automated activation. You will receive your M3U playlist URL, Xtream Codes credentials, and setup instructions via email within 5 minutes.
      </p>
    </div>
  </section>

  <section class="section" style="padding-top: 1rem;">
    <div class="container" style="max-width: 650px;">
      <div class="card" style="padding: 2.5rem;">
        <h2 style="font-size: 1.4rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">Order Summary</h2>
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 1rem;">
          <span style="font-weight: 600;">Selected Plan:</span>
          <span id="order-plan-name" style="color: var(--accent-cyan); font-weight: 700;">12 Months (Best Value)</span>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 1rem;">
          <span style="font-weight: 600;">Connections:</span>
          <span id="order-screen-count">1 Simultaneous Screen</span>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; font-size: 1.35rem; font-weight: 800; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
          <span>Total Amount:</span>
          <span id="order-total-amount" style="color: var(--accent-green);">$79.99 USD</span>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Your Email Address (For Credentials)</label>
          <input type="email" required placeholder="name@example.com" style="width: 100%; padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background: var(--bg-card-solid); color: var(--text-primary); font-family: var(--font-body); font-size: 1rem;">
        </div>

        <div style="margin-bottom: 2rem;">
          <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Preferred Payment Method</label>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.85rem; border: 1px solid var(--border-subtle); border-radius: 6px; cursor: pointer; background: var(--bg-card-solid);">
              <input type="radio" name="payment" value="card" checked>
              <strong>Credit / Debit Card (Visa, MasterCard, Amex)</strong>
            </label>
            <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.85rem; border: 1px solid var(--border-subtle); border-radius: 6px; cursor: pointer; background: var(--bg-card-solid);">
              <input type="radio" name="payment" value="crypto">
              <strong>Cryptocurrency (Bitcoin, USDT, ETH) &mdash; 5% Extra Discount</strong>
            </label>
            <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.85rem; border: 1px solid var(--border-subtle); border-radius: 6px; cursor: pointer; background: var(--bg-card-solid);">
              <input type="radio" name="payment" value="paypal">
              <strong>PayPal Invoice (Direct Email Link)</strong>
            </label>
          </div>
        </div>

        <button type="button" class="btn btn-primary btn-lg" style="width: 100%;" onclick="alert('Demo Checkout: In production, this redirects to the secure payment processor with 256-bit encryption.');">Proceed to Secure Checkout</button>

        <p style="margin-top: 1.25rem; text-align: center; font-size: 0.8rem; color: var(--text-muted);">
          &#128274; 256-bit TLS encrypted transaction &bull; 7-day money-back guarantee &bull; 24/7 support
        </p>
      </div>
    </div>
  </section>
{footer}
"""
    write_page("order/index.html", body)

# ==============================================================================
# 5. CONTACT PAGE (/contact/)
# ==============================================================================
def gen_contact_page():
    head = get_head(
        title="Contact Support: 24/7 USA Streaming Assistance | Strong 8K USA",
        description="Contact Strong 8K USA customer service for instant activation, connection troubleshooting, trial setup, and billing support. Available 24/7 via WhatsApp and Email.",
        canonical_path="/contact/"
    )
    header = get_header(active_nav="contact")
    footer = get_footer()

    body = f"""{head}
{header}
  <section class="section hero-section" style="padding: 4rem 0 2rem;">
    <div class="container" style="text-align: center; max-width: 750px;">
      <div class="section-eyebrow">Customer Care</div>
      <h1>24/7 Dedicated <span class="hero-gradient-text">Customer Support</span></h1>
      <p class="hero-lead">
        Have questions about setting up your Firestick, configuring TiviMate, or choosing the right connection plan? Our US technical team is on standby 24/7.
      </p>
    </div>
  </section>

  <section class="section" style="padding-top: 1rem;">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 960px; margin: 0 auto;">
        <div class="card" style="text-align: center; padding: 2.5rem;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); color: var(--accent-green); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          </div>
          <h3>Instant WhatsApp Help</h3>
          <p style="font-size: 0.95rem; margin-bottom: 1.5rem;">
            Fastest for immediate activation, device setup assistance, and credential regeneration. Average response under 3 minutes.
          </p>
          <a href="https://wa.me/212625218443?text=Hello%20Strong%204K%20USA%20Support" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Chat on WhatsApp</a>
        </div>

        <div class="card" style="text-align: center; padding: 2.5rem;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(0, 210, 255, 0.15); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <h3>Email Support Desk</h3>
          <p style="font-size: 0.95rem; margin-bottom: 1.5rem;">
            Best for billing inquiries, reseller applications, and detailed network diagnostics. Replied within 2 hours.
          </p>
          <a href="mailto:support@streamb4.com" class="btn btn-secondary btn-sm">support@streamb4.com</a>
        </div>
      </div>
    </div>
  </section>
{footer}
"""
    write_page("contact/index.html", body)

# ==============================================================================
# 6. OWNERSHIP DISCLOSURE (/ownership-disclosure/) — Crucial for E-E-A-T
# ==============================================================================
def gen_ownership_disclosure_page():
    head = get_head(
        title="FTC Ownership & Editorial Disclosure | Strong 8K USA",
        description="Read the Strong 8K USA FTC ownership, affiliate, and editorial transparency statement. Complete clarity on how we operate, test, and recommend services.",
        canonical_path="/ownership-disclosure/"
    )
    header = get_header()
    footer = get_footer()

    body = f"""{head}
{header}
  <section class="section" style="padding: 4rem 0;">
    <div class="container" style="max-width: 820px;">
      <div class="section-eyebrow">Consumer Transparency</div>
      <h1>FTC Ownership &amp; Editorial Disclosure</h1>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;">Last Updated: October 22, 2026</p>

      <div class="card-solid" style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. Clear Declaration of Ownership</h2>
        <p>
          The Federal Trade Commission (FTC) requires online publishers to clearly and conspicuously disclose when they have a financial relationship or direct commercial ownership interest in the services, products, or subscriptions reviewed or sold on their website.
        </p>
        <p>
          Strong 8K USA (<code>strong8kusa.com</code>) operates our own dedicated streaming proxy edge infrastructure and provisioning system. When you purchase a subscription or sign up for a trial through this site, you are transacting directly with our operational platform.
        </p>
      </div>

      <div class="card-solid" style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Testing Methodology &amp; Claim Substantiation</h2>
        <p>
          Unlike generic review websites that copy promotional channel lists from third-party resellers, all metrics stated on our website &mdash; including channel counts, 4K bitrate streaming capabilities, and server uptime &mdash; reflect our active operational telemetry across our North American proxy edge nodes.
        </p>
        <p>
          We do not guarantee 100% buffer-free streaming under all circumstances because end-user streaming quality depends heavily on local home Wi-Fi signal strength, router buffer bloat, and internet service provider (ISP) peak-hour throttling policies. We actively encourage every customer to utilize our <a href="/free-trial/" style="color: var(--accent-cyan); text-decoration: underline;">unconditional 24-hour free trial</a> to verify performance on their own local network.
        </p>
      </div>

      <div class="card-solid">
        <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">3. Affiliate Links &amp; Third-Party Mentions</h2>
        <p>
          Any third-party hardware (e.g. Amazon Fire TV Stick, Nvidia Shield TV Pro, Walmart onn. 4K Pro) or software applications (e.g. TiviMate, IPTV Smarters) referenced on this website are the registered trademarks of their respective owners. Strong 8K USA is an independent advisory and is not officially affiliated with Amazon, Google, Nvidia, or Apple.
        </p>
      </div>
    </div>
  </section>
{footer}
"""
    write_page("ownership-disclosure/index.html", body)

# ==============================================================================
# 7. TERMS & REFUND POLICY (/terms/)
# ==============================================================================
def gen_terms_page():
    head = get_head(
        title="Terms of Service & 7-Day Refund Policy | Strong 8K USA",
        description="Review the Strong 8K USA Terms of Service, user agreement, streaming policies, and 7-day money-back guarantee.",
        canonical_path="/terms/"
    )
    header = get_header()
    footer = get_footer()

    body = f"""{head}
{header}
  <section class="section" style="padding: 4rem 0;">
    <div class="container" style="max-width: 820px;">
      <div class="section-eyebrow">Legal Terms</div>
      <h1>Terms of Service &amp; Refund Policy</h1>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;">Effective Date: October 22, 2026</p>

      <div class="card-solid" style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. 7-Day Money-Back Guarantee</h2>
        <p>
          We provide a full <strong>7-Day Money-Back Guarantee</strong> on all new subscription plans. If you encounter ongoing streaming errors, channel outages, or device incompatibility within your first 7 days of activation that our 24/7 technical team cannot resolve, simply contact <a href="/contact/" style="color: var(--accent-cyan); text-decoration: underline;">customer support</a> for a prompt 100% refund.
        </p>
      </div>

      <div class="card-solid" style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Simultaneous Connection Limits</h2>
        <p>
          Subscribers are strictly bound by the screen limit purchased on their plan (1 to 5 connections). Attempting to stream concurrently from more devices than permitted under your active plan will result in automated temporary stream throttling. Sharing account credentials publicly or reselling consumer lines will result in permanent account termination.
        </p>
      </div>

      <div class="card-solid">
        <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">3. Fair Use &amp; Network Integrity</h2>
        <p>
          Our network operates with automated load-balancing to preserve 60FPS high-bitrate delivery for all subscribers. Automated continuous restreaming or scraping of our M3U feeds is strictly prohibited.
        </p>
      </div>
    </div>
  </section>
{footer}
"""
    write_page("terms/index.html", body)

# ==============================================================================
# 8. PRIVACY POLICY (/privacy/)
# ==============================================================================
def gen_privacy_page():
    head = get_head(
        title="Privacy Policy | Strong 8K USA",
        description="Learn how Strong 8K USA protects your data, ensures anonymous browsing, and maintains strict privacy standards.",
        canonical_path="/privacy/"
    )
    header = get_header()
    footer = get_footer()

    body = f"""{head}
{header}
  <section class="section" style="padding: 4rem 0;">
    <div class="container" style="max-width: 820px;">
      <div class="section-eyebrow">Data Protection</div>
      <h1>Privacy Policy</h1>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;">Last Updated: October 22, 2026</p>

      <div class="card-solid" style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. Information We Collect</h2>
        <p>
          We collect only the minimal information strictly required to provision and maintain your streaming account: your email address for credentials delivery and order reference numbers.
        </p>
        <p>
          We <strong>never</strong> log or store customer viewing history, specific channels watched, media player search queries, or personal financial card details. All payment processing is handled through PCI-DSS compliant third-party gateways.
        </p>
      </div>

      <div class="card-solid" style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Zero Data Selling Commitment</h2>
        <p>
          Strong 8K USA does not sell, lease, rent, or trade customer contact details to third-party advertisers, data brokers, or marketing firms under any circumstances.
        </p>
      </div>
    </div>
  </section>
{footer}
"""
    write_page("privacy/index.html", body)

# ==============================================================================
# 9. CUSTOM 404 PAGE (/404.html)
# ==============================================================================
def gen_404_page():
    head = get_head(
        title="Page Not Found (404) | Strong 8K USA",
        description="The requested page could not be found. Explore our 4K IPTV subscription plans, Firestick guides, or 24h free trial.",
        canonical_path="/404.html",
        noindex=True
    )
    header = get_header()
    footer = get_footer()

    body = f"""{head}
{header}
  <section class="section hero-section" style="padding: 6rem 0; text-align: center;">
    <div class="container" style="max-width: 650px;">
      <div class="section-eyebrow">&#9888; 404 Error</div>
      <h1 style="font-size: 4rem; line-height: 1; margin-bottom: 1rem;">404</h1>
      <h2>Page Not Found</h2>
      <p class="hero-lead" style="margin-bottom: 2.5rem;">
        The page you are looking for may have been moved, renamed, or is temporarily unavailable. Explore our core streaming resources below:
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="/" class="btn btn-primary">Return to Homepage</a>
        <a href="/pricing/" class="btn btn-secondary">View 4K Plans</a>
        <a href="/free-trial/" class="btn btn-trial">Instant Free Trial</a>
      </div>
    </div>
  </section>
{footer}
"""
    write_page("404.html", body)

# Execute core pages
gen_pricing_page()
gen_free_trial_page()
gen_order_page()
gen_contact_page()
gen_ownership_disclosure_page()
gen_terms_page()
gen_privacy_page()
gen_404_page()

print("All Core Pages Generated Successfully.")
