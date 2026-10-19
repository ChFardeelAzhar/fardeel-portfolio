"""
Generate high-fidelity SVG mockups for all 16 portfolio projects.
Each SVG uses an exact 12:10 aspect ratio (1200x1000) matching the reference site's preview cards.
"""

import os

out_dir = "public/images/projects"
os.makedirs(out_dir, exist_ok=True)

# 1. Compose Auto Shimmer
svg_shimmer = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#090514"/>
    </radialGradient>
    <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#6366f1" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#312e81" stop-opacity="0.3"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>

  <rect width="1200" height="1000" fill="url(#bg)"/>
  <circle cx="600" cy="500" r="350" fill="#4338ca" opacity="0.25" filter="url(#glow)"/>

  <!-- Left: Skeleton Mode -->
  <g transform="translate(180, 160)">
    <rect width="380" height="680" rx="44" fill="#0f0c24" stroke="#4338ca" stroke-width="4"/>
    <!-- Speaker / Dynamic island -->
    <rect x="130" y="20" width="120" height="24" rx="12" fill="#000"/>
    
    <!-- Shimmer Skeleton Items -->
    <rect x="40" y="80" width="180" height="22" rx="11" fill="url(#shimmer)"/>
    
    <!-- Big banner skeleton -->
    <rect x="40" y="125" width="300" height="160" rx="20" fill="url(#shimmer)"/>
    
    <!-- Row skeletons -->
    <circle cx="70" cy="340" r="30" fill="url(#shimmer)"/>
    <rect x="120" y="325" width="200" height="16" rx="8" fill="url(#shimmer)"/>
    <rect x="120" y="350" width="130" height="12" rx="6" fill="url(#shimmer)"/>

    <circle cx="70" cy="430" r="30" fill="url(#shimmer)"/>
    <rect x="120" y="415" width="200" height="16" rx="8" fill="url(#shimmer)"/>
    <rect x="120" y="440" width="130" height="12" rx="6" fill="url(#shimmer)"/>

    <circle cx="70" cy="520" r="30" fill="url(#shimmer)"/>
    <rect x="120" y="505" width="200" height="16" rx="8" fill="url(#shimmer)"/>
    <rect x="120" y="530" width="130" height="12" rx="6" fill="url(#shimmer)"/>

    <!-- Bottom label -->
    <rect x="90" y="605" width="200" height="34" rx="17" fill="#4f46e5" opacity="0.3"/>
    <text x="190" y="628" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">LOADING (AUTO-SHIMMER)</text>
  </g>

  <!-- Right: Loaded UI Mode -->
  <g transform="translate(640, 160)">
    <rect width="380" height="680" rx="44" fill="#131127" stroke="#6366f1" stroke-width="4"/>
    <rect x="130" y="20" width="120" height="24" rx="12" fill="#000"/>

    <text x="40" y="98" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="bold">Explore Feeds</text>
    
    <!-- Banner with live image colors -->
    <rect x="40" y="125" width="300" height="160" rx="20" fill="#4f46e5"/>
    <text x="65" y="190" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="bold">Jetpack Compose</text>
    <text x="65" y="220" fill="#c7d2fe" font-family="system-ui, sans-serif" font-size="14">Auto skeleton generator active</text>

    <!-- Row 1 -->
    <circle cx="70" cy="340" r="30" fill="#ec4899"/>
    <text x="120" y="335" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="600">Material 3 Cards</text>
    <text x="120" y="358" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">Measured from live layout</text>

    <!-- Row 2 -->
    <circle cx="70" cy="430" r="30" fill="#10b981"/>
    <text x="120" y="425" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="600">Zero Boilerplate</text>
    <text x="120" y="448" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">No manual skeleton XML</text>

    <!-- Row 3 -->
    <circle cx="70" cy="520" r="30" fill="#f59e0b"/>
    <text x="120" y="515" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="600">JitPack Distributed</text>
    <text x="120" y="538" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">46+ GitHub Stars</text>

    <rect x="90" y="605" width="200" height="34" rx="17" fill="#10b981" opacity="0.2"/>
    <text x="190" y="628" fill="#34d399" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">CONTENT LOADED</text>
  </g>
</svg>'''

# 2. Android Crash Fix Agent
svg_crash_agent = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg2" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#042f2e"/>
      <stop offset="100%" stop-color="#021414"/>
    </radialGradient>
    <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>

  <rect width="1200" height="1000" fill="url(#bg2)"/>
  <circle cx="600" cy="500" r="350" fill="#0d9488" opacity="0.2" filter="url(#glow2)"/>

  <!-- Left: Multi-Agent Pipeline Box -->
  <g transform="translate(140, 160)">
    <rect width="480" height="680" rx="24" fill="#071b1a" stroke="#0d9488" stroke-width="2"/>
    <rect x="30" y="30" width="420" height="40" rx="10" fill="#115e59" opacity="0.3"/>
    <text x="45" y="56" fill="#2dd4bf" font-family="monospace" font-size="16" font-weight="bold">⚡ CrewAI Ticket-to-PR Pipeline</text>

    <!-- Step 1 -->
    <rect x="30" y="95" width="420" height="85" rx="12" fill="#0a2a28" stroke="#14b8a6" stroke-width="1.5"/>
    <text x="50" y="130" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">1. Crash Intake &amp; Analysis</text>
    <text x="50" y="155" fill="#99f6e4" font-family="monospace" font-size="12">NullPointerException in CheckoutFragment.kt:84</text>

    <!-- Step 2 -->
    <rect x="30" y="200" width="420" height="85" rx="12" fill="#0a2a28" stroke="#14b8a6" stroke-width="1.5"/>
    <text x="50" y="235" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">2. Antigravity CLI Bridge</text>
    <text x="50" y="260" fill="#99f6e4" font-family="monospace" font-size="12">agy plan &amp; code_edit --safe-lifecycle-only</text>

    <!-- Step 3 -->
    <rect x="30" y="305" width="420" height="85" rx="12" fill="#0a2a28" stroke="#14b8a6" stroke-width="1.5"/>
    <text x="50" y="340" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">3. Gradle Build &amp; Test</text>
    <text x="50" y="365" fill="#99f6e4" font-family="monospace" font-size="12">./gradlew testDebugUnitTest [PASSED]</text>

    <!-- Step 4 -->
    <rect x="30" y="410" width="420" height="85" rx="12" fill="#0a2a28" stroke="#14b8a6" stroke-width="1.5"/>
    <text x="50" y="445" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">4. ADB Device Reproduction</text>
    <text x="50" y="470" fill="#99f6e4" font-family="monospace" font-size="12">emulator-5554 activity launched &amp; verified</text>

    <!-- Step 5: Final output -->
    <rect x="30" y="515" width="420" height="120" rx="12" fill="#042f2e" stroke="#2dd4bf" stroke-width="2"/>
    <text x="50" y="550" fill="#ffffff" font-family="system-ui, sans-serif" font-size="17" font-weight="bold">Review-Ready PR Generated 🚀</text>
    <text x="50" y="580" fill="#5eead4" font-family="monospace" font-size="13">fix(checkout): guard null cart session state</text>
    <text x="50" y="605" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">+12 -3 lines | emulator screenshot attached</text>
  </g>

  <!-- Right: Emulator Preview Screen -->
  <g transform="translate(680, 160)">
    <rect width="380" height="680" rx="44" fill="#071b1a" stroke="#2dd4bf" stroke-width="4"/>
    <rect x="130" y="20" width="120" height="24" rx="12" fill="#000"/>

    <rect x="30" y="80" width="320" height="40" rx="8" fill="#134e4a"/>
    <text x="50" y="106" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">Android Test Device</text>

    <!-- Success check screen -->
    <circle cx="190" cy="280" r="60" fill="#14b8a6" opacity="0.2"/>
    <circle cx="190" cy="280" r="45" fill="#0d9488"/>
    <path d="M175 280 L185 292 L205 268" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>

    <text x="190" y="380" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Bug Reproduced &amp; Fixed</text>
    <text x="190" y="415" fill="#99f6e4" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">No crash observed on rerun</text>

    <!-- Log box -->
    <rect x="35" y="460" width="310" height="180" rx="14" fill="#041f1e" stroke="#134e4a"/>
    <text x="50" y="490" fill="#2dd4bf" font-family="monospace" font-size="11">D/ActivityTaskManager: START</text>
    <text x="50" y="515" fill="#2dd4bf" font-family="monospace" font-size="11">I/CheckoutFragment: Cart loaded (3)</text>
    <text x="50" y="540" fill="#2dd4bf" font-family="monospace" font-size="11">I/PaymentProcessor: State OK</text>
    <text x="50" y="565" fill="#34d399" font-family="monospace" font-size="11">V/TestStatus: 0 errors, exit 0</text>
    <text x="50" y="605" fill="#a7f3d0" font-family="monospace" font-size="12" font-weight="bold">ADB QA Passed ✓</text>
  </g>
</svg>'''

# 3. CricScore
svg_cricscore = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg3" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#021f17"/>
    </radialGradient>
    <filter id="glow3" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>

  <rect width="1200" height="1000" fill="url(#bg3)"/>
  <circle cx="600" cy="500" r="350" fill="#10b981" opacity="0.2" filter="url(#glow3)"/>

  <!-- Phone Frame in Center -->
  <g transform="translate(390, 140)">
    <rect width="420" height="740" rx="46" fill="#052e24" stroke="#10b981" stroke-width="4"/>
    <rect x="150" y="20" width="120" height="24" rx="12" fill="#000"/>

    <!-- App Header -->
    <rect x="30" y="70" width="360" height="50" rx="12" fill="#047857"/>
    <text x="50" y="102" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="bold">CricScore Live</text>
    <rect x="300" y="80" width="70" height="28" rx="14" fill="#065f46"/>
    <circle cx="316" cy="94" r="5" fill="#34d399"/>
    <text x="328" y="99" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">OFFLINE</text>

    <!-- Match Card -->
    <rect x="30" y="140" width="360" height="200" rx="20" fill="#022c22" stroke="#059669" stroke-width="1.5"/>
    <text x="50" y="180" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">T20 TOURNAMENT FINAL</text>
    
    <text x="50" y="225" fill="#ffffff" font-family="system-ui, sans-serif" font-size="26" font-weight="black">PAK</text>
    <text x="140" y="225" fill="#34d399" font-family="system-ui, sans-serif" font-size="28" font-weight="bold">186/4</text>
    <text x="250" y="225" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="16">(20.0)</text>

    <text x="50" y="275" fill="#ffffff" font-family="system-ui, sans-serif" font-size="26" font-weight="black">ENG</text>
    <text x="140" y="275" fill="#facc15" font-family="system-ui, sans-serif" font-size="28" font-weight="bold">142/6</text>
    <text x="250" y="275" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="16">(16.2)</text>

    <text x="50" y="315" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="13">Need 45 runs from 22 balls</text>

    <!-- Recent Balls Row -->
    <rect x="30" y="360" width="360" height="70" rx="14" fill="#064e3b" opacity="0.6"/>
    <text x="50" y="402" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">This Over:</text>
    <circle cx="160" cy="395" r="16" fill="#10b981"/><text x="160" y="400" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">1</text>
    <circle cx="200" cy="395" r="16" fill="#3b82f6"/><text x="200" y="400" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">4</text>
    <circle cx="240" cy="395" r="16" fill="#6366f1"/><text x="240" y="400" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">6</text>
    <circle cx="280" cy="395" r="16" fill="#ef4444"/><text x="280" y="400" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">W</text>
    <circle cx="320" cy="395" r="16" fill="#64748b"/><text x="320" y="400" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">0</text>
    <circle cx="360" cy="395" r="16" fill="#10b981"/><text x="360" y="400" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">2</text>

    <!-- Action Buttons -->
    <g transform="translate(30, 455)">
      <rect x="0" y="0" width="110" height="70" rx="14" fill="#047857"/><text x="55" y="42" fill="#fff" font-size="22" font-weight="bold" text-anchor="middle">+1</text>
      <rect x="125" y="0" width="110" height="70" rx="14" fill="#047857"/><text x="180" y="42" fill="#fff" font-size="22" font-weight="bold" text-anchor="middle">+4</text>
      <rect x="250" y="0" width="110" height="70" rx="14" fill="#047857"/><text x="305" y="42" fill="#fff" font-size="22" font-weight="bold" text-anchor="middle">+6</text>
      
      <rect x="0" y="85" width="110" height="70" rx="14" fill="#b91c1c"/><text x="55" y="128" fill="#fff" font-size="20" font-weight="bold" text-anchor="middle">OUT</text>
      <rect x="125" y="85" width="110" height="70" rx="14" fill="#065f46"/><text x="180" y="128" fill="#fff" font-size="18" font-weight="bold" text-anchor="middle">WIDE</text>
      <rect x="250" y="85" width="110" height="70" rx="14" fill="#065f46"/><text x="305" y="128" fill="#fff" font-size="18" font-weight="bold" text-anchor="middle">NO BALL</text>
    </g>

    <!-- Google Play Badge -->
    <rect x="60" y="650" width="300" height="44" rx="22" fill="#000" stroke="#059669" stroke-width="1.5"/>
    <text x="210" y="677" fill="#fff" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">✓ Google Play Store Verified</text>
  </g>
</svg>'''

# 4. AutoLocale
svg_autolocale = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg4" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#431407"/>
      <stop offset="100%" stop-color="#1c0702"/>
    </radialGradient>
    <filter id="glow4" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>

  <rect width="1200" height="1000" fill="url(#bg4)"/>
  <circle cx="600" cy="500" r="350" fill="#ea580c" opacity="0.2" filter="url(#glow4)"/>

  <!-- Left: Kotlin Source Code -->
  <g transform="translate(140, 160)">
    <rect width="440" height="680" rx="24" fill="#200d06" stroke="#ea580c" stroke-width="2"/>
    <rect x="30" y="30" width="380" height="35" rx="8" fill="#7c2d12" opacity="0.4"/>
    <text x="45" y="54" fill="#fdba74" font-family="monospace" font-size="14" font-weight="bold">📄 HomeScreen.kt (Compose UI)</text>

    <!-- Code Block -->
    <rect x="30" y="85" width="380" height="540" rx="14" fill="#140703" stroke="#431407"/>
    <text x="50" y="130" fill="#94a3b8" font-family="monospace" font-size="14">// Before: Hardcoded string</text>
    <text x="50" y="160" fill="#f87171" font-family="monospace" font-size="14">- Text("Welcome to our app")</text>

    <text x="50" y="220" fill="#4ade80" font-family="monospace" font-size="14">// After: AutoLocale transform</text>
    <text x="50" y="250" fill="#4ade80" font-family="monospace" font-size="13">+ Text(stringResource(</text>
    <text x="70" y="275" fill="#4ade80" font-family="monospace" font-size="13">    R.string.al_welcome</text>
    <text x="50" y="300" fill="#4ade80" font-family="monospace" font-size="13">  ))</text>

    <text x="50" y="360" fill="#ea580c" font-family="monospace" font-size="14">AutoLocale Gradle Plugin:</text>
    <text x="50" y="390" fill="#fdba74" font-family="monospace" font-size="12">✓ AST Code Inspection</text>
    <text x="50" y="415" fill="#fdba74" font-family="monospace" font-size="12">✓ Safe In-Place Code Transformation</text>
    <text x="50" y="440" fill="#fdba74" font-family="monospace" font-size="12">✓ Key Collision Protection</text>
    <text x="50" y="465" fill="#fdba74" font-family="monospace" font-size="12">✓ 0 Resource Drift</text>

    <rect x="50" y="520" width="340" height="50" rx="12" fill="#ea580c" opacity="0.3"/>
    <text x="220" y="552" fill="#fed7aa" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Gradle: ./gradlew autoLocale</text>
  </g>

  <!-- Right: Generated XML strings across languages -->
  <g transform="translate(620, 160)">
    <rect width="440" height="680" rx="24" fill="#200d06" stroke="#f97316" stroke-width="2"/>
    <rect x="30" y="30" width="380" height="35" rx="8" fill="#7c2d12" opacity="0.4"/>
    <text x="45" y="54" fill="#fdba74" font-family="monospace" font-size="14" font-weight="bold">🌍 Auto-Generated strings.xml</text>

    <!-- English -->
    <rect x="30" y="85" width="380" height="110" rx="14" fill="#140703" stroke="#431407"/>
    <text x="50" y="115" fill="#ea580c" font-family="monospace" font-size="13">values/strings.xml</text>
    <text x="50" y="145" fill="#ffffff" font-family="monospace" font-size="13">&lt;string name="al_welcome"&gt;</text>
    <text x="70" y="170" fill="#fdba74" font-family="monospace" font-size="13">Welcome to our app&lt;/string&gt;</text>

    <!-- Arabic -->
    <rect x="30" y="215" width="380" height="110" rx="14" fill="#140703" stroke="#431407"/>
    <text x="50" y="245" fill="#ea580c" font-family="monospace" font-size="13">values-ar/strings.xml</text>
    <text x="50" y="275" fill="#ffffff" font-family="monospace" font-size="13">&lt;string name="al_welcome"&gt;</text>
    <text x="70" y="300" fill="#fdba74" font-family="monospace" font-size="13">مرحباً بك في تطبيقنا&lt;/string&gt;</text>

    <!-- French -->
    <rect x="30" y="345" width="380" height="110" rx="14" fill="#140703" stroke="#431407"/>
    <text x="50" y="375" fill="#ea580c" font-family="monospace" font-size="13">values-fr/strings.xml</text>
    <text x="50" y="405" fill="#ffffff" font-family="monospace" font-size="13">&lt;string name="al_welcome"&gt;</text>
    <text x="70" y="430" fill="#fdba74" font-family="monospace" font-size="13">Bienvenue dans notre app&lt;/string&gt;</text>

    <!-- Urdu -->
    <rect x="30" y="475" width="380" height="110" rx="14" fill="#140703" stroke="#431407"/>
    <text x="50" y="505" fill="#ea580c" font-family="monospace" font-size="13">values-ur/strings.xml</text>
    <text x="50" y="535" fill="#ffffff" font-family="monospace" font-size="13">&lt;string name="al_welcome"&gt;</text>
    <text x="70" y="560" fill="#fdba74" font-family="monospace" font-size="13">ہمارے ایپ میں خوش آمدید&lt;/string&gt;</text>

    <text x="220" y="625" fill="#fed7aa" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Runtime Jetpack Compose Provider Included ✓</text>
  </g>
</svg>'''

# 5. Flagship E-Commerce
svg_ecommerce = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg5" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#172554"/>
      <stop offset="100%" stop-color="#080e1e"/>
    </radialGradient>
    <filter id="glow5" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>

  <rect width="1200" height="1000" fill="url(#bg5)"/>
  <circle cx="600" cy="500" r="350" fill="#2563eb" opacity="0.2" filter="url(#glow5)"/>

  <!-- Center Phone Frame -->
  <g transform="translate(390, 140)">
    <rect width="420" height="740" rx="46" fill="#0b1736" stroke="#3b82f6" stroke-width="4"/>
    <rect x="150" y="20" width="120" height="24" rx="12" fill="#000"/>

    <!-- App Bar -->
    <rect x="30" y="70" width="360" height="50" rx="12" fill="#1d4ed8"/>
    <text x="50" y="102" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="bold">SuperApp Mall</text>
    <circle cx="350" cy="95" r="16" fill="#3b82f6"/>
    <text x="350" y="101" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">3</text>

    <!-- 4 Verticals Grid -->
    <g transform="translate(30, 140)">
      <rect x="0" y="0" width="170" height="110" rx="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="20" y="45" fill="#93c5fd" font-size="14" font-weight="bold">GROCERY</text>
      <text x="20" y="80" fill="#ffffff" font-size="16" font-weight="bold">Fresh &amp; Fast</text>

      <rect x="190" y="0" width="170" height="110" rx="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="210" y="45" fill="#f472b6" font-size="14" font-weight="bold">BEAUTY</text>
      <text x="210" y="80" fill="#ffffff" font-size="16" font-weight="bold">Skin &amp; Care</text>

      <rect x="0" y="130" width="170" height="110" rx="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="20" y="175" fill="#34d399" font-size="14" font-weight="bold">PHARMACY</text>
      <text x="20" y="210" fill="#ffffff" font-size="16" font-weight="bold">Prescriptions</text>

      <rect x="190" y="130" width="170" height="110" rx="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="210" y="175" fill="#fb923c" font-size="14" font-weight="bold">FOOD</text>
      <text x="210" y="210" fill="#ffffff" font-size="16" font-weight="bold">Restaurants</text>
    </g>

    <!-- Architecture Metrics Banner -->
    <rect x="30" y="410" width="360" height="180" rx="18" fill="#172554" stroke="#2563eb"/>
    <text x="50" y="445" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">PRODUCTION METRICS</text>
    <text x="50" y="480" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="black">5,000,000+ Downloads</text>
    <text x="50" y="515" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="14">4.4★ Rating on Play Store</text>
    <text x="50" y="555" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="13">25+ Clean Architecture Feature Modules</text>

    <!-- Apollo GraphQL & Tech Pills -->
    <rect x="30" y="615" width="360" height="50" rx="14" fill="#0f172a" stroke="#334155"/>
    <text x="210" y="646" fill="#93c5fd" font-family="monospace" font-size="13" text-anchor="middle">Apollo GraphQL · Hilt · RudderStack</text>
  </g>
</svg>'''

# 6. Coffee Shop Desktop POS (DESKTOP / LAPTOP PRESENTATION!)
svg_pos = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg6" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#3b2210"/>
      <stop offset="100%" stop-color="#140a03"/>
    </radialGradient>
    <filter id="glow6" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>

  <rect width="1200" height="1000" fill="url(#bg6)"/>
  <circle cx="600" cy="500" r="350" fill="#b45309" opacity="0.2" filter="url(#glow6)"/>

  <!-- Desktop Monitor Frame -->
  <g transform="translate(150, 160)">
    <!-- Monitor Bezel -->
    <rect width="900" height="580" rx="20" fill="#1f1813" stroke="#78350f" stroke-width="4"/>
    <circle cx="450" cy="20" r="4" fill="#451a03"/>

    <!-- Screen Canvas -->
    <g transform="translate(20, 35)">
      <rect width="860" height="525" rx="8" fill="#140f0c"/>

      <!-- Left Column: Menu Items Grid (2/3 width) -->
      <g transform="translate(20, 20)">
        <text x="0" y="24" fill="#fde68a" font-family="system-ui, sans-serif" font-size="22" font-weight="bold">Brew &amp; Espresso Bar</text>
        <text x="380" y="24" fill="#a8a29e" font-family="system-ui, sans-serif" font-size="14">Station: Counter 1 (Offline Sync)</text>

        <!-- Categories Row -->
        <rect x="0" y="45" width="90" height="32" rx="8" fill="#b45309"/>
        <text x="45" y="66" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">Coffee</text>

        <rect x="100" y="45" width="90" height="32" rx="8" fill="#292524"/>
        <text x="145" y="66" fill="#a8a29e" font-size="13" font-weight="bold" text-anchor="middle">Tea</text>

        <rect x="200" y="45" width="90" height="32" rx="8" fill="#292524"/>
        <text x="245" y="66" fill="#a8a29e" font-size="13" font-weight="bold" text-anchor="middle">Pastry</text>

        <rect x="300" y="45" width="100" height="32" rx="8" fill="#292524"/>
        <text x="350" y="66" fill="#a8a29e" font-size="13" font-weight="bold" text-anchor="middle">Cold Brew</text>

        <!-- 6 Item Cards -->
        <g transform="translate(0, 95)">
          <rect x="0" y="0" width="165" height="100" rx="12" fill="#231b15" stroke="#44342a"/>
          <text x="15" y="35" fill="#ffffff" font-size="16" font-weight="bold">Cortado</text>
          <text x="15" y="60" fill="#a8a29e" font-size="12">Double shot, milk</text>
          <text x="15" y="85" fill="#f59e0b" font-size="16" font-weight="bold">$4.25</text>

          <rect x="180" y="0" width="165" height="100" rx="12" fill="#231b15" stroke="#44342a"/>
          <text x="195" y="35" fill="#ffffff" font-size="16" font-weight="bold">Flat White</text>
          <text x="195" y="60" fill="#a8a29e" font-size="12">Microfoam texture</text>
          <text x="195" y="85" fill="#f59e0b" font-size="16" font-weight="bold">$4.75</text>

          <rect x="360" y="0" width="165" height="100" rx="12" fill="#231b15" stroke="#44342a"/>
          <text x="375" y="35" fill="#ffffff" font-size="16" font-weight="bold">Cold Brew</text>
          <text x="375" y="60" fill="#a8a29e" font-size="12">18hr steep</text>
          <text x="375" y="85" fill="#f59e0b" font-size="16" font-weight="bold">$5.00</text>

          <rect x="0" y="115" width="165" height="100" rx="12" fill="#231b15" stroke="#44342a"/>
          <text x="15" y="150" fill="#ffffff" font-size="16" font-weight="bold">Matcha Latte</text>
          <text x="15" y="175" fill="#a8a29e" font-size="12">Ceremonial grade</text>
          <text x="15" y="200" fill="#f59e0b" font-size="16" font-weight="bold">$5.50</text>

          <rect x="180" y="115" width="165" height="100" rx="12" fill="#231b15" stroke="#44342a"/>
          <text x="195" y="150" fill="#ffffff" font-size="16" font-weight="bold">Iced Americano</text>
          <text x="195" y="175" fill="#a8a29e" font-size="12">Triple shot over ice</text>
          <text x="195" y="200" fill="#f59e0b" font-size="16" font-weight="bold">$3.75</text>

          <rect x="360" y="115" width="165" height="100" rx="12" fill="#231b15" stroke="#44342a"/>
          <text x="375" y="150" fill="#ffffff" font-size="16" font-weight="bold">Butter Croissant</text>
          <text x="375" y="175" fill="#a8a29e" font-size="12">Freshly baked</text>
          <text x="375" y="200" fill="#f59e0b" font-size="16" font-weight="bold">$3.50</text>
        </g>
      </g>

      <!-- Right Column: Active Ticket / Order Drawer -->
      <g transform="translate(565, 20)">
        <rect width="275" height="485" rx="12" fill="#1c1613" stroke="#573a27"/>
        <text x="20" y="35" fill="#ffffff" font-size="18" font-weight="bold">Current Order #142</text>
        <text x="20" y="58" fill="#a8a29e" font-size="12">Table 04 · Dine In</text>

        <!-- Order Items -->
        <g transform="translate(20, 80)">
          <text x="0" y="15" fill="#ffffff" font-size="14">1x Cortado (Oat Milk)</text>
          <text x="200" y="15" fill="#fde68a" font-size="14">$4.75</text>

          <text x="0" y="45" fill="#ffffff" font-size="14">1x Cold Brew (Vanilla)</text>
          <text x="200" y="45" fill="#fde68a" font-size="14">$5.75</text>

          <text x="0" y="75" fill="#ffffff" font-size="14">2x Butter Croissant</text>
          <text x="200" y="75" fill="#fde68a" font-size="14">$7.00</text>

          <line x1="0" y1="120" x2="235" y2="120" stroke="#44342a"/>

          <text x="0" y="150" fill="#a8a29e" font-size="13">Subtotal</text>
          <text x="200" y="150" fill="#ffffff" font-size="13">$17.50</text>

          <text x="0" y="175" fill="#a8a29e" font-size="13">Tax (8%)</text>
          <text x="200" y="175" fill="#ffffff" font-size="13">$1.40</text>

          <text x="0" y="215" fill="#ffffff" font-size="18" font-weight="bold">Total Due</text>
          <text x="180" y="215" fill="#10b981" font-size="20" font-weight="black">$18.90</text>
        </g>

        <!-- Pay Button -->
        <rect x="20" y="415" width="235" height="48" rx="12" fill="#10b981"/>
        <text x="137" y="445" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">Charge $18.90 💳</text>
      </g>
    </g>
  </g>

  <!-- Monitor Stand Base -->
  <path d="M540 740 L520 810 L680 810 L660 740 Z" fill="#292524"/>
  <rect x="470" y="810" width="260" height="16" rx="8" fill="#1c1917" stroke="#44403c"/>
</svg>'''

# 7. KinHealth
svg_kinhealth = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg7" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#0e3a47"/>
      <stop offset="100%" stop-color="#041217"/>
    </radialGradient>
    <filter id="glow7" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg7)"/>
  <circle cx="600" cy="500" r="350" fill="#06b6d4" opacity="0.2" filter="url(#glow7)"/>
  <g transform="translate(390, 140)">
    <rect width="420" height="740" rx="46" fill="#062028" stroke="#0891b2" stroke-width="4"/>
    <rect x="150" y="20" width="120" height="24" rx="12" fill="#000"/>
    <rect x="30" y="70" width="360" height="50" rx="12" fill="#0e7490"/>
    <text x="50" y="102" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="bold">KinHealth AI</text>
    <rect x="30" y="140" width="360" height="160" rx="18" fill="#083344" stroke="#06b6d4"/>
    <text x="50" y="175" fill="#a5f3fc" font-size="14" font-weight="bold">HEALTH STATUS OVERVIEW</text>
    <text x="50" y="215" fill="#ffffff" font-size="28" font-weight="bold">72 BPM</text>
    <text x="180" y="215" fill="#67e8f9" font-size="15">Resting Heart Rate</text>
    <text x="50" y="260" fill="#cffafe" font-size="13">AI Consultation Ready · Last check today 08:30 AM</text>
    <rect x="30" y="320" width="360" height="200" rx="18" fill="#083344" stroke="#0891b2"/>
    <text x="50" y="355" fill="#67e8f9" font-size="14" font-weight="bold">AI MEDICAL DOCUMENT READER</text>
    <text x="50" y="390" fill="#ffffff" font-size="16" font-weight="600">Blood Chemistry Panel (PDF)</text>
    <text x="50" y="420" fill="#94a3b8" font-size="13">Parsed 14 biomarkers via on-device LLM.</text>
    <rect x="50" y="450" width="320" height="40" rx="8" fill="#0e7490"/>
    <text x="210" y="475" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">View AI Diagnostic Summary ↗</text>
    <rect x="30" y="540" width="360" height="140" rx="18" fill="#042028" stroke="#155e75"/>
    <text x="50" y="580" fill="#fff" font-size="16" font-weight="bold">Upcoming Doctor Appointment</text>
    <text x="50" y="610" fill="#67e8f9" font-size="13">Dr. Sarah Jenkins · Tomorrow at 10:00 AM</text>
    <text x="50" y="645" fill="#94a3b8" font-size="12">Telemetry auto-synced with clinic portal</text>
  </g>
</svg>'''

# 8. VU Quiz Assistant
svg_vu_quiz = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg8" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#311042"/>
      <stop offset="100%" stop-color="#120419"/>
    </radialGradient>
    <filter id="glow8" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg8)"/>
  <circle cx="600" cy="500" r="350" fill="#9333ea" opacity="0.2" filter="url(#glow8)"/>
  <g transform="translate(140, 160)">
    <rect width="920" height="680" rx="24" fill="#1b0826" stroke="#9333ea" stroke-width="2"/>
    <rect x="30" y="30" width="860" height="40" rx="8" fill="#581c87" opacity="0.4"/>
    <text x="50" y="56" fill="#f3e8ff" font-family="monospace" font-size="16" font-weight="bold">VU Learning Assistant — LangGraph State Machine &amp; Next.js 16 Web Dashboard</text>
    
    <!-- Flow boxes -->
    <g transform="translate(30, 95)">
      <rect x="0" y="0" width="200" height="140" rx="14" fill="#2e1065" stroke="#a855f7"/>
      <text x="20" y="35" fill="#e9d5ff" font-size="14" font-weight="bold">1. Portal Manager</text>
      <text x="20" y="65" fill="#c084fc" font-size="12">Playwright login</text>
      <text x="20" y="90" fill="#94a3b8" font-size="11">vulms.vu.edu.pk</text>
      <text x="20" y="115" fill="#34d399" font-size="11">Auth Session OK</text>

      <rect x="220" y="0" width="200" height="140" rx="14" fill="#2e1065" stroke="#a855f7"/>
      <text x="240" y="35" fill="#e9d5ff" font-size="14" font-weight="bold">2. Quiz Scraper</text>
      <text x="240" y="65" fill="#c084fc" font-size="12">Iterate courses (6)</text>
      <text x="240" y="90" fill="#94a3b8" font-size="11">Extract deadlines</text>
      <text x="240" y="115" fill="#34d399" font-size="11">Markdown output</text>

      <rect x="440" y="0" width="200" height="140" rx="14" fill="#2e1065" stroke="#a855f7"/>
      <text x="460" y="35" fill="#e9d5ff" font-size="14" font-weight="bold">3. Quiz Analyzer</text>
      <text x="460" y="65" fill="#c084fc" font-size="12">Categorize tasks</text>
      <text x="460" y="90" fill="#94a3b8" font-size="11">Pending / Upcoming</text>
      <text x="460" y="115" fill="#34d399" font-size="11">2 Quizzes Active</text>

      <rect x="660" y="0" width="200" height="140" rx="14" fill="#2e1065" stroke="#a855f7"/>
      <text x="680" y="35" fill="#e9d5ff" font-size="14" font-weight="bold">4. Email Notifier</text>
      <text x="680" y="65" fill="#c084fc" font-size="12">Resend HTTP API</text>
      <text x="680" y="90" fill="#94a3b8" font-size="11">HTML Report Digest</text>
      <text x="680" y="115" fill="#34d399" font-size="11">Delivered to Inbox</text>
    </g>

    <!-- Lower Dashboard area -->
    <rect x="30" y="270" width="860" height="370" rx="16" fill="#13051c" stroke="#3b0764"/>
    <text x="55" y="310" fill="#ffffff" font-size="18" font-weight="bold">Connected Student Dashboard (Next.js 16 + Supabase)</text>
    
    <rect x="55" y="335" width="370" height="120" rx="12" fill="#240c33"/>
    <text x="75" y="370" fill="#d8b4fe" font-size="14" font-weight="bold">CS504 — Software Engineering</text>
    <text x="75" y="395" fill="#ffffff" font-size="16">Quiz #2 (10 Marks) · Due Tonight</text>
    <text x="75" y="425" fill="#facc15" font-size="12">Deadline: 11:59 PM (Auto-Alert Sent)</text>

    <rect x="455" y="335" width="370" height="120" rx="12" fill="#240c33"/>
    <text x="475" y="370" fill="#d8b4fe" font-size="14" font-weight="bold">CS601 — Data Communication</text>
    <text x="475" y="395" fill="#ffffff" font-size="16">Quiz #1 · Completed</text>
    <text x="475" y="425" fill="#4ade80" font-size="12">Score: 9/10 Archived in Markdown</text>

    <rect x="55" y="480" width="770" height="130" rx="12" fill="#0e0314" stroke="#3b0764"/>
    <text x="75" y="515" fill="#c084fc" font-family="monospace" font-size="12">AGENT LOG: [LangGraph Execution Stream]</text>
    <text x="75" y="540" fill="#a855f7" font-family="monospace" font-size="12">→ Thread #1948 checkpoint resumed from SQLite storage</text>
    <text x="75" y="565" fill="#a855f7" font-family="monospace" font-size="12">→ Playwright navigated to vulms.vu.edu.pk/StudentQuizzes</text>
    <text x="75" y="590" fill="#34d399" font-family="monospace" font-size="12">✓ 6 Courses verified | 0 missing deadlines</text>
  </g>
</svg>'''

# 9. n8n Job Hunter
svg_n8n = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg9" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#4c1d24"/>
      <stop offset="100%" stop-color="#190609"/>
    </radialGradient>
    <filter id="glow9" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg9)"/>
  <circle cx="600" cy="500" r="350" fill="#f43f5e" opacity="0.2" filter="url(#glow9)"/>
  <g transform="translate(140, 160)">
    <rect width="920" height="680" rx="24" fill="#20070c" stroke="#f43f5e" stroke-width="2"/>
    <rect x="30" y="30" width="860" height="40" rx="8" fill="#881337" opacity="0.4"/>
    <text x="50" y="56" fill="#ffe4e6" font-family="monospace" font-size="16" font-weight="bold">n8n Workflow Automation Canvas — Android Developer Job Hunter</text>

    <!-- n8n Node Chain -->
    <g transform="translate(50, 120)">
      <!-- Node 1: Schedule -->
      <rect x="0" y="40" width="160" height="100" rx="14" fill="#ff6d5a" stroke="#ffffff" stroke-width="2"/>
      <text x="80" y="80" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">9:00 AM</text>
      <text x="80" y="105" fill="#ffe4e6" font-size="12" text-anchor="middle">Cron Schedule</text>

      <line x1="160" y1="90" x2="220" y2="90" stroke="#f43f5e" stroke-width="3"/>

      <!-- Node 2: SerpAPI -->
      <rect x="220" y="40" width="160" height="100" rx="14" fill="#2b0d14" stroke="#f43f5e" stroke-width="2"/>
      <text x="300" y="80" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">SerpAPI</text>
      <text x="300" y="105" fill="#fca5a5" font-size="12" text-anchor="middle">Android &amp; Compose</text>

      <line x1="380" y1="90" x2="440" y2="90" stroke="#f43f5e" stroke-width="3"/>

      <!-- Node 3: OpenRouter LLM -->
      <rect x="440" y="40" width="160" height="100" rx="14" fill="#2b0d14" stroke="#f43f5e" stroke-width="2"/>
      <text x="520" y="80" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">OpenRouter AI</text>
      <text x="520" y="105" fill="#fca5a5" font-size="12" text-anchor="middle">Score &amp; Match %</text>

      <line x1="600" y1="90" x2="660" y2="90" stroke="#f43f5e" stroke-width="3"/>

      <!-- Node 4: Filter -->
      <rect x="660" y="40" width="160" height="100" rx="14" fill="#2b0d14" stroke="#f43f5e" stroke-width="2"/>
      <text x="740" y="80" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">Match &gt; 70%</text>
      <text x="740" y="105" fill="#fca5a5" font-size="12" text-anchor="middle">High Confidence</text>
    </g>

    <!-- Branching to Gmail & Sheets -->
    <g transform="translate(100, 310)">
      <rect x="0" y="0" width="340" height="160" rx="16" fill="#150407" stroke="#4c0519"/>
      <text x="25" y="40" fill="#fb7185" font-size="16" font-weight="bold">Gmail Notification Dispatch</text>
      <text x="25" y="70" fill="#ffffff" font-size="14">Subject: 🎯 3 High-Match Android Roles</text>
      <text x="25" y="95" fill="#fda4af" font-size="12">Custom tailored cover letters attached</text>
      <text x="25" y="125" fill="#34d399" font-size="12 font-weight-bold">Status: Instant Email Sent ✓</text>

      <rect x="380" y="0" width="340" height="160" rx="16" fill="#150407" stroke="#4c0519"/>
      <text x="405" y="40" fill="#fb7185" font-size="16" font-weight="bold">Google Sheets Tracking</text>
      <text x="405" y="70" fill="#ffffff" font-size="14">Logged: Role, Company, Link, Match %</text>
      <text x="405" y="95" fill="#fda4af" font-size="12">Daily summary compiled at 7 PM</text>
      <text x="405" y="125" fill="#34d399" font-size="12 font-weight-bold">Status: Synchronized ✓</text>
    </g>

    <!-- JSON Workflow pill -->
    <rect x="260" y="530" width="400" height="50" rx="25" fill="#f43f5e" opacity="0.3"/>
    <text x="460" y="562" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">35 KB Production n8n Workflow JSON</text>
  </g>
</svg>'''

# 10. Insight Sparks
svg_sparks = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg10" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0a0720"/>
    </radialGradient>
    <filter id="glow10" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg10)"/>
  <circle cx="600" cy="500" r="350" fill="#4f46e5" opacity="0.2" filter="url(#glow10)"/>
  <g transform="translate(140, 160)">
    <rect width="920" height="680" rx="24" fill="#0f0c29" stroke="#4f46e5" stroke-width="2"/>
    <rect x="30" y="30" width="860" height="40" rx="8" fill="#312e81" opacity="0.4"/>
    <text x="50" y="56" fill="#c7d2fe" font-family="monospace" font-size="16" font-weight="bold">Insight Sparks — LangGraph Content Generation Pipeline</text>

    <!-- 7 Agent Flow -->
    <g transform="translate(30, 100)">
      <rect x="0" y="0" width="260" height="110" rx="14" fill="#1e1b4b" stroke="#6366f1"/>
      <text x="20" y="35" fill="#fff" font-size="15" font-weight="bold">1. Trend &amp; Topic Scout</text>
      <text x="20" y="65" fill="#a5b4fc" font-size="12">Finds viral physics scenarios</text>
      <text x="20" y="88" fill="#34d399" font-size="11">SQLite Checkpoint Active</text>

      <rect x="300" y="0" width="260" height="110" rx="14" fill="#1e1b4b" stroke="#6366f1"/>
      <text x="320" y="35" fill="#fff" font-size="15" font-weight="bold">2. Storyboard Architect</text>
      <text x="320" y="65" fill="#a5b4fc" font-size="12">Pacing, camera cues &amp; text</text>
      <text x="320" y="88" fill="#34d399" font-size="11">JSON Scene Output</text>

      <rect x="600" y="0" width="260" height="110" rx="14" fill="#1e1b4b" stroke="#6366f1"/>
      <text x="620" y="35" fill="#fff" font-size="15" font-weight="bold">3. Narration Generator</text>
      <text x="620" y="65" fill="#a5b4fc" font-size="12">Hook optimization (&lt;60s)</text>
      <text x="620" y="88" fill="#34d399" font-size="11">Voiceover Script Ready</text>
    </g>

    <!-- Pipeline monitor -->
    <rect x="30" y="240" width="860" height="400" rx="16" fill="#09061c" stroke="#312e81"/>
    <text x="55" y="280" fill="#ffffff" font-size="18" font-weight="bold">Autonomous Pipeline Execution Status</text>
    
    <rect x="55" y="310" width="370" height="130" rx="12" fill="#17133d"/>
    <text x="75" y="345" fill="#818cf8" font-size="14" font-weight="bold">Active Channel: Insight Sparks</text>
    <text x="75" y="375" fill="#ffffff" font-size="16">Shorts Generation: Running</text>
    <text x="75" y="405" fill="#34d399" font-size="13">Thread ID: 2026-08-23-EP14</text>

    <rect x="455" y="310" width="370" height="130" rx="12" fill="#17133d"/>
    <text x="475" y="345" fill="#818cf8" font-size="14" font-weight="bold">Repository Storage Layer</text>
    <text x="475" y="375" fill="#ffffff" font-size="16">SQLite State Persistence</text>
    <text x="475" y="405" fill="#a5b4fc" font-size="13">Zero Redundant LLM Calls</text>

    <text x="55" y="490" fill="#a5b4fc" font-family="monospace" font-size="13">&gt; LangGraph graph/topology.py compiled successfully</text>
    <text x="55" y="520" fill="#a5b4fc" font-family="monospace" font-size="13">&gt; State schema validated with 7 discrete agent stages</text>
    <text x="55" y="550" fill="#a5b4fc" font-family="monospace" font-size="13">&gt; Fallback cadence timers set via config/cadence.json</text>
  </g>
</svg>'''

# 11. Job Hunt Crew
svg_crew = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg11" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#14532d"/>
      <stop offset="100%" stop-color="#052010"/>
    </radialGradient>
    <filter id="glow11" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg11)"/>
  <circle cx="600" cy="500" r="350" fill="#16a34a" opacity="0.2" filter="url(#glow11)"/>
  <g transform="translate(140, 160)">
    <rect width="920" height="680" rx="24" fill="#082815" stroke="#16a34a" stroke-width="2"/>
    <rect x="30" y="30" width="860" height="40" rx="8" fill="#14532d" opacity="0.5"/>
    <text x="50" y="56" fill="#dcfce7" font-family="monospace" font-size="16" font-weight="bold">CrewAI Multi-Agent Job Hunter — Autonomous Collaboration</text>
    
    <g transform="translate(40, 100)">
      <rect x="0" y="0" width="250" height="180" rx="16" fill="#0f381e" stroke="#22c55e"/>
      <circle cx="45" cy="45" r="20" fill="#16a34a"/>
      <text x="75" y="50" fill="#fff" font-size="16" font-weight="bold">Agent 1</text>
      <text x="25" y="95" fill="#86efac" font-size="14" font-weight="bold">Profile Researcher</text>
      <text x="25" y="125" fill="#cbd5e1" font-size="12">Parses candidate skills,</text>
      <text x="25" y="145" fill="#cbd5e1" font-size="12">experience &amp; portfolio links</text>

      <rect x="295" y="0" width="250" height="180" rx="16" fill="#0f381e" stroke="#22c55e"/>
      <circle cx="340" cy="45" r="20" fill="#16a34a"/>
      <text x="370" y="50" fill="#fff" font-size="16" font-weight="bold">Agent 2</text>
      <text x="320" y="95" fill="#86efac" font-size="14" font-weight="bold">Job Match Scorer</text>
      <text x="320" y="125" fill="#cbd5e1" font-size="12">Evaluates requirements</text>
      <text x="320" y="145" fill="#cbd5e1" font-size="12">against Kotlin &amp; Compose</text>

      <rect x="590" y="0" width="250" height="180" rx="16" fill="#0f381e" stroke="#22c55e"/>
      <circle cx="635" cy="45" r="20" fill="#16a34a"/>
      <text x="665" y="50" fill="#fff" font-size="16" font-weight="bold">Agent 3</text>
      <text x="615" y="95" fill="#86efac" font-size="14" font-weight="bold">Cover Writer</text>
      <text x="615" y="125" fill="#cbd5e1" font-size="12">Synthesizes tailored briefs</text>
      <text x="615" y="145" fill="#cbd5e1" font-size="12">with structured outputs</text>
    </g>

    <!-- Terminal Output -->
    <rect x="40" y="320" width="840" height="300" rx="16" fill="#03160a" stroke="#15803d"/>
    <text x="65" y="360" fill="#4ade80" font-family="monospace" font-size="13">$ crewai run</text>
    <text x="65" y="390" fill="#86efac" font-family="monospace" font-size="13">[Profile Researcher] Ingested candidate CV (Android + AI Automation)</text>
    <text x="65" y="420" fill="#86efac" font-family="monospace" font-size="13">[Job Match Scorer] Found 8 target roles (Berlin, London, Remote)</text>
    <text x="65" y="450" fill="#86efac" font-family="monospace" font-size="13">[Job Match Scorer] Highest match: 94% (Senior Android Engineer)</text>
    <text x="65" y="480" fill="#86efac" font-family="monospace" font-size="13">[Cover Writer] Output written to output/report.md</text>
    <text x="65" y="520" fill="#22c55e" font-family="monospace" font-size="14" font-weight="bold">✓ Crew completed task execution successfully</text>
  </g>
</svg>'''

# 12. Expense Tracker
svg_expense = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg12" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#090d14"/>
    </radialGradient>
    <filter id="glow12" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg12)"/>
  <circle cx="600" cy="500" r="350" fill="#38bdf8" opacity="0.2" filter="url(#glow12)"/>
  <g transform="translate(390, 140)">
    <rect width="420" height="740" rx="46" fill="#0f172a" stroke="#0284c7" stroke-width="4"/>
    <rect x="150" y="20" width="120" height="24" rx="12" fill="#000"/>
    
    <text x="40" y="95" fill="#fff" font-size="20" font-weight="bold">Expense Tracker</text>
    <text x="40" y="120" fill="#94a3b8" font-size="13">Monthly Budget Overview</text>

    <!-- Card -->
    <rect x="30" y="140" width="360" height="140" rx="18" fill="#0369a1"/>
    <text x="50" y="175" fill="#bae6fd" font-size="13" font-weight="bold">TOTAL SPENT (OCTOBER)</text>
    <text x="50" y="220" fill="#ffffff" font-size="32" font-weight="black">$1,428.50</text>
    <text x="50" y="255" fill="#e0f2fe" font-size="13">Room Database Offline Persistence</text>

    <!-- Category list -->
    <g transform="translate(30, 310)">
      <rect x="0" y="0" width="360" height="75" rx="14" fill="#1e293b"/>
      <circle cx="38" cy="38" r="20" fill="#f43f5e"/>
      <text x="75" y="35" fill="#fff" font-size="16" font-weight="bold">Groceries &amp; Food</text>
      <text x="75" y="55" fill="#94a3b8" font-size="12">14 transactions</text>
      <text x="320" y="44" fill="#fff" font-size="16" font-weight="bold" text-anchor="end">-$520.00</text>

      <rect x="0" y="90" width="360" height="75" rx="14" fill="#1e293b"/>
      <circle cx="38" cy="128" r="20" fill="#3b82f6"/>
      <text x="75" y="125" fill="#fff" font-size="16" font-weight="bold">Housing &amp; Utilities</text>
      <text x="75" y="145" fill="#94a3b8" font-size="12">3 transactions</text>
      <text x="320" y="134" fill="#fff" font-size="16" font-weight="bold" text-anchor="end">-$650.00</text>

      <rect x="0" y="180" width="360" height="75" rx="14" fill="#1e293b"/>
      <circle cx="38" cy="218" r="20" fill="#10b981"/>
      <text x="75" y="215" fill="#fff" font-size="16" font-weight="bold">Entertainment</text>
      <text x="75" y="235" fill="#94a3b8" font-size="12">8 transactions</text>
      <text x="320" y="224" fill="#fff" font-size="16" font-weight="bold" text-anchor="end">-$148.50</text>
    </g>

    <rect x="30" y="600" width="360" height="50" rx="16" fill="#0284c7"/>
    <text x="210" y="632" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">+ Add New Expense</text>
  </g>
</svg>'''

# 13. Weather App
svg_weather = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg13" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#082f49"/>
    </radialGradient>
    <filter id="glow13" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg13)"/>
  <circle cx="600" cy="500" r="350" fill="#38bdf8" opacity="0.3" filter="url(#glow13)"/>
  <g transform="translate(390, 140)">
    <rect width="420" height="740" rx="46" fill="#075985" stroke="#38bdf8" stroke-width="4"/>
    <rect x="150" y="20" width="120" height="24" rx="12" fill="#000"/>
    
    <text x="210" y="100" fill="#ffffff" font-size="24" font-weight="bold" text-anchor="middle">Lahore, PK</text>
    <text x="210" y="125" fill="#bae6fd" font-size="14" text-anchor="middle">Sunday, 18 October</text>

    <!-- Sun graphic & Temp -->
    <circle cx="210" cy="220" r="45" fill="#facc15"/>
    <text x="210" y="325" fill="#ffffff" font-size="64" font-weight="black" text-anchor="middle">28°C</text>
    <text x="210" y="360" fill="#e0f2fe" font-size="18" text-anchor="middle">Mostly Sunny · H: 31° L: 19°</text>

    <!-- Hourly pill row -->
    <g transform="translate(30, 390)">
      <rect x="0" y="0" width="70" height="100" rx="16" fill="#0369a1"/>
      <text x="35" y="30" fill="#bae6fd" font-size="12" text-anchor="middle">Now</text>
      <circle cx="35" cy="55" r="10" fill="#facc15"/>
      <text x="35" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">28°</text>

      <rect x="95" y="0" width="70" height="100" rx="16" fill="#0369a1"/>
      <text x="130" y="30" fill="#bae6fd" font-size="12" text-anchor="middle">2 PM</text>
      <circle cx="130" cy="55" r="10" fill="#facc15"/>
      <text x="130" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">30°</text>

      <rect x="190" y="0" width="70" height="100" rx="16" fill="#0369a1"/>
      <text x="225" y="30" fill="#bae6fd" font-size="12" text-anchor="middle">4 PM</text>
      <circle cx="225" cy="55" r="10" fill="#facc15"/>
      <text x="225" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">29°</text>

      <rect x="285" y="0" width="70" height="100" rx="16" fill="#0369a1"/>
      <text x="320" y="30" fill="#bae6fd" font-size="12" text-anchor="middle">6 PM</text>
      <circle cx="320" cy="55" r="10" fill="#fdba74"/>
      <text x="320" y="85" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">24°</text>
    </g>

    <!-- Details card -->
    <rect x="30" y="520" width="360" height="150" rx="18" fill="#0284c7" opacity="0.4"/>
    <text x="50" y="560" fill="#e0f2fe" font-size="14">Humidity: 48%</text>
    <text x="220" y="560" fill="#e0f2fe" font-size="14">Wind: 12 km/h NW</text>
    <text x="50" y="600" fill="#e0f2fe" font-size="14">UV Index: 4 (Moderate)</text>
    <text x="220" y="600" fill="#e0f2fe" font-size="14">Visibility: 10 km</text>
    <text x="50" y="640" fill="#ffffff" font-size="13" font-weight="bold">Retrofit 2 + OpenWeather API + StateFlow</text>
  </g>
</svg>'''

# 14. Todo App
svg_todo = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg14" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#312e81"/>
      <stop offset="100%" stop-color="#0f0c29"/>
    </radialGradient>
    <filter id="glow14" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg14)"/>
  <circle cx="600" cy="500" r="350" fill="#6366f1" opacity="0.2" filter="url(#glow14)"/>
  <g transform="translate(390, 140)">
    <rect width="420" height="740" rx="46" fill="#131034" stroke="#6366f1" stroke-width="4"/>
    <rect x="150" y="20" width="120" height="24" rx="12" fill="#000"/>
    
    <text x="40" y="95" fill="#fff" font-size="22" font-weight="bold">My Tasks</text>
    <text x="40" y="120" fill="#a5b4fc" font-size="13">Firebase Realtime Sync Active</text>

    <!-- Search box -->
    <rect x="30" y="140" width="360" height="45" rx="12" fill="#1e1b4b" stroke="#4338ca"/>
    <text x="50" y="168" fill="#94a3b8" font-size="14">🔍 Search tasks...</text>

    <!-- Task Items -->
    <g transform="translate(30, 210)">
      <rect x="0" y="0" width="360" height="70" rx="14" fill="#1e1b4b"/>
      <circle cx="35" cy="35" r="14" fill="#10b981"/>
      <path d="M28 35 L33 40 L41 30" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <text x="65" y="32" fill="#94a3b8" font-size="15" text-decoration="line-through">Submit Clean Architecture PR</text>
      <text x="65" y="52" fill="#34d399" font-size="11">Completed</text>

      <rect x="0" y="85" width="360" height="70" rx="14" fill="#1e1b4b"/>
      <circle cx="35" cy="120" r="14" fill="none" stroke="#6366f1" stroke-width="2"/>
      <text x="65" y="118" fill="#fff" font-size="15" font-weight="600">Review AutoLocale Gradle Plugin</text>
      <rect x="300" y="105" width="45" height="22" rx="6" fill="#ef4444"/>
      <text x="322" y="120" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">HIGH</text>

      <rect x="0" y="170" width="360" height="70" rx="14" fill="#1e1b4b"/>
      <circle cx="35" cy="205" r="14" fill="none" stroke="#6366f1" stroke-width="2"/>
      <text x="65" y="203" fill="#fff" font-size="15" font-weight="600">Prepare Jetpack Compose Demo</text>
      <rect x="290" y="190" width="55" height="22" rx="6" fill="#eab308"/>
      <text x="317" y="205" fill="#000" font-size="10" font-weight="bold" text-anchor="middle">MEDIUM</text>

      <rect x="0" y="255" width="360" height="70" rx="14" fill="#1e1b4b"/>
      <circle cx="35" cy="290" r="14" fill="none" stroke="#6366f1" stroke-width="2"/>
      <text x="65" y="288" fill="#fff" font-size="15" font-weight="600">Test CricScore Offline Room DB</text>
      <rect x="305" y="275" width="40" height="22" rx="6" fill="#3b82f6"/>
      <text x="325" y="290" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">LOW</text>
    </g>

    <rect x="30" y="600" width="360" height="50" rx="16" fill="#4f46e5"/>
    <text x="210" y="632" fill="#fff" font-size="15" font-weight="bold" text-anchor="middle">+ Create New Task</text>
  </g>
</svg>'''

# 15. Medicine Taxculator
svg_tax = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg15" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#14532d"/>
      <stop offset="100%" stop-color="#052010"/>
    </radialGradient>
    <filter id="glow15" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg15)"/>
  <circle cx="600" cy="500" r="350" fill="#15803d" opacity="0.2" filter="url(#glow15)"/>
  <g transform="translate(390, 140)">
    <rect width="420" height="740" rx="46" fill="#072212" stroke="#15803d" stroke-width="4"/>
    <rect x="150" y="20" width="120" height="24" rx="12" fill="#000"/>
    
    <text x="40" y="95" fill="#fff" font-size="20" font-weight="bold">Medicine Taxculator</text>
    <text x="40" y="120" fill="#86efac" font-size="13">Pharmacy Retail &amp; Tax Pricing</text>

    <!-- Calculator Inputs -->
    <g transform="translate(30, 140)">
      <rect x="0" y="0" width="360" height="70" rx="12" fill="#0f381e"/>
      <text x="20" y="25" fill="#86efac" font-size="12">TRADE PRICE (TP)</text>
      <text x="20" y="55" fill="#ffffff" font-size="20" font-weight="bold">PKR 450.00</text>

      <rect x="0" y="85" width="360" height="70" rx="12" fill="#0f381e"/>
      <text x="20" y="110" fill="#86efac" font-size="12">PHARMACY MARGIN (15%)</text>
      <text x="20" y="140" fill="#ffffff" font-size="20" font-weight="bold">+ PKR 67.50</text>

      <rect x="0" y="170" width="360" height="70" rx="12" fill="#0f381e"/>
      <text x="20" y="195" fill="#86efac" font-size="12">GENERAL SALES TAX (GST 18%)</text>
      <text x="20" y="225" fill="#ffffff" font-size="20" font-weight="bold">+ PKR 93.15</text>
    </g>

    <!-- Calculation Result Card -->
    <rect x="30" y="410" width="360" height="150" rx="18" fill="#15803d"/>
    <text x="50" y="445" fill="#dcfce7" font-size="14" font-weight="bold">RECOMMENDED RETAIL PRICE (MRP)</text>
    <text x="50" y="495" fill="#ffffff" font-size="34" font-weight="black">PKR 610.65</text>
    <text x="50" y="535" fill="#bbf7d0" font-size="13">Net Pharmacy Profit: PKR 67.50 / pack</text>

    <rect x="30" y="590" width="360" height="50" rx="14" fill="#0f381e" stroke="#16a34a"/>
    <text x="210" y="622" fill="#86efac" font-size="14" font-weight="bold" text-anchor="middle">Save to Inventory Batch ✓</text>
  </g>
</svg>'''

# 16. 100 Logic Problems (IDE CODE EDITOR PRESENTATION!)
svg_logic = '''<svg width="1200" height="1000" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg16" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1e1e2e"/>
      <stop offset="100%" stop-color="#0d0d15"/>
    </radialGradient>
    <filter id="glow16" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
    </filter>
  </defs>
  <rect width="1200" height="1000" fill="url(#bg16)"/>
  <circle cx="600" cy="500" r="350" fill="#7c3aed" opacity="0.2" filter="url(#glow16)"/>
  
  <!-- IDE Editor Window Frame -->
  <g transform="translate(140, 160)">
    <rect width="920" height="680" rx="20" fill="#181825" stroke="#45475a" stroke-width="2"/>
    
    <!-- Window Bar -->
    <rect width="920" height="45" rx="20" fill="#11111b"/>
    <circle cx="30" cy="22" r="7" fill="#f38ba8"/>
    <circle cx="50" cy="22" r="7" fill="#f9e2af"/>
    <circle cx="70" cy="22" r="7" fill="#a6e3a1"/>
    <text x="460" y="28" fill="#cdd6f4" font-family="monospace" font-size="14" text-anchor="middle">100_Logic_Problems / 05_LogicAlgorithms / MaxSubarray.kt</text>

    <!-- Editor Body -->
    <g transform="translate(30, 75)">
      <!-- Line Numbers -->
      <text x="0" y="30" fill="#585b70" font-family="monospace" font-size="14">01</text>
      <text x="0" y="60" fill="#585b70" font-family="monospace" font-size="14">02</text>
      <text x="0" y="90" fill="#585b70" font-family="monospace" font-size="14">03</text>
      <text x="0" y="120" fill="#585b70" font-family="monospace" font-size="14">04</text>
      <text x="0" y="150" fill="#585b70" font-family="monospace" font-size="14">05</text>
      <text x="0" y="180" fill="#585b70" font-family="monospace" font-size="14">06</text>
      <text x="0" y="210" fill="#585b70" font-family="monospace" font-size="14">07</text>
      <text x="0" y="240" fill="#585b70" font-family="monospace" font-size="14">08</text>
      <text x="0" y="270" fill="#585b70" font-family="monospace" font-size="14">09</text>
      <text x="0" y="300" fill="#585b70" font-family="monospace" font-size="14">10</text>
      <text x="0" y="330" fill="#585b70" font-family="monospace" font-size="14">11</text>
      <text x="0" y="360" fill="#585b70" font-family="monospace" font-size="14">12</text>

      <!-- Kotlin Code -->
      <g transform="translate(45, 0)">
        <text x="0" y="30" fill="#cba6f7" font-family="monospace" font-size="15">package</text>
        <text x="75" y="30" fill="#cdd6f4" font-family="monospace" font-size="15">com.fardeel.logic.algorithms</text>

        <text x="0" y="90" fill="#cba6f7" font-family="monospace" font-size="15">fun</text>
        <text x="35" y="90" fill="#89b4fa" font-family="monospace" font-size="15">maxSubArraySum</text>
        <text x="170" y="90" fill="#cdd6f4" font-family="monospace" font-size="15">(nums: IntArray): Int {</text>

        <text x="25" y="120" fill="#cba6f7" font-family="monospace" font-size="15">var</text>
        <text x="60" y="120" fill="#cdd6f4" font-family="monospace" font-size="15">maxSoFar = nums[0]</text>

        <text x="25" y="150" fill="#cba6f7" font-family="monospace" font-size="15">var</text>
        <text x="60" y="150" fill="#cdd6f4" font-family="monospace" font-size="15">currentMax = nums[0]</text>

        <text x="25" y="210" fill="#cba6f7" font-family="monospace" font-size="15">for</text>
        <text x="60" y="210" fill="#cdd6f4" font-family="monospace" font-size="15">(i in 1 until nums.size) {</text>

        <text x="50" y="240" fill="#cdd6f4" font-family="monospace" font-size="15">currentMax = maxOf(nums[i], currentMax + nums[i])</text>
        <text x="50" y="270" fill="#cdd6f4" font-family="monospace" font-size="15">maxSoFar = maxOf(maxSoFar, currentMax)</text>

        <text x="25" y="300" fill="#cdd6f4" font-family="monospace" font-size="15">}</text>

        <text x="25" y="340" fill="#cba6f7" font-family="monospace" font-size="15">return</text>
        <text x="85" y="340" fill="#cdd6f4" font-family="monospace" font-size="15">maxSoFar</text>

        <text x="0" y="370" fill="#cdd6f4" font-family="monospace" font-size="15">}</text>
      </g>
    </g>

    <!-- Test Suite Output Bar -->
    <rect x="30" y="480" width="860" height="160" rx="14" fill="#11111b" stroke="#313244"/>
    <text x="50" y="515" fill="#a6e3a1" font-family="monospace" font-size="14" font-weight="bold">✓ 100/100 Unit Tests Passing (Kotlin 2.0)</text>
    <text x="50" y="545" fill="#9399b2" font-family="monospace" font-size="12">Modules: MathLogic (20), StringsCharacters (18), ArraysLists (22), LoopsConditions (15), Algorithms (15), ObjectMapSet (10)</text>
    <text x="50" y="575" fill="#89dceb" font-family="monospace" font-size="12">Benchmark: Kadane's Algorithm running in O(n) time, O(1) space complexity.</text>
    <text x="50" y="605" fill="#cba6f7" font-family="monospace" font-size="12">GitHub: https://github.com/ChFardeelAzhar/100-Logic-Problems</text>
  </g>
</svg>'''

mockups = {
    "compose-auto-shimmer.svg": svg_shimmer,
    "android-crash-fix-agent.svg": svg_crash_agent,
    "cricscore.svg": svg_cricscore,
    "autolocale-android.svg": svg_autolocale,
    "flagship-ecommerce.svg": svg_ecommerce,
    "coffee-shop-pos.svg": svg_pos,
    "kinhealth.svg": svg_kinhealth,
    "vu-quiz-assistant.svg": svg_vu_quiz,
    "android-job-hunter-n8n.svg": svg_n8n,
    "insight-sparks.svg": svg_sparks,
    "job-hunt-crew.svg": svg_crew,
    "expense-tracker.svg": svg_expense,
    "weather-app.svg": svg_weather,
    "todo-app.svg": svg_todo,
    "medicine-taxculator.svg": svg_tax,
    "100-logic-problems.svg": svg_logic,
}

for filename, content in mockups.items():
    filepath = os.path.join(out_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"Generated {filepath} ({len(content)} bytes)")

print("Successfully generated all 16 mockups!")
