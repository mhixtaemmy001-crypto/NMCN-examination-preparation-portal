// Official Emblem of Adamawa State College of Nursing and Midwifery, P.M.B 2044, Yola
// Motto: IN THE LIGHT OF KNOWLEDGE AND UNDERSTANDING

const ASCONS_YOLA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 560" width="500" height="560">
  <rect width="500" height="560" fill="#ffffff" rx="24"/>
  <defs>
    <!-- Top outer arc for ADAMAWA STATE COLLEGE OF NURSING AND MIDWIFERY (clockwise) -->
    <path id="collegeNameArc" d="M 96,348 A 192,192 0 1,1 404,348" fill="none" />
    <!-- Bottom inner arc for P.M.B 2044, YOLA (counter-clockwise) -->
    <path id="pmbArc" d="M 118,368 A 196,196 0 0,0 382,368" fill="none" />
    <!-- Bottom motto line 1: IN THE LIGHT OF -->
    <path id="mottoInnerArc" d="M 90,455 A 255,255 0 0,0 410,455" fill="none" />
    <!-- Bottom motto line 2: KNOWLEDGE AND UNDERSTANDING -->
    <path id="mottoOuterArc" d="M 28,452 A 285,285 0 0,0 472,452" fill="none" />
  </defs>

  <!-- Outer Seal Ring -->
  <circle cx="250" cy="235" r="222" fill="#ffffff" stroke="#181838" stroke-width="5.5" />
  <circle cx="250" cy="235" r="215" fill="none" stroke="#181838" stroke-width="1.5" />

  <!-- Inner Seal Ring -->
  <circle cx="250" cy="235" r="156" fill="#ffffff" stroke="#181838" stroke-width="4.5" />

  <!-- Circular Text: ADAMAWA STATE COLLEGE OF NURSING AND MIDWIFERY -->
  <text fill="#1e1b4b" font-family="Arial, Helvetica, sans-serif" font-size="25.5" font-weight="900" letter-spacing="1.2">
    <textPath href="#collegeNameArc" startOffset="50%" text-anchor="middle">
      ADAMAWA STATE COLLEGE OF NURSING AND MIDWIFERY
    </textPath>
  </text>

  <!-- Left and Right Separator Dots -->
  <circle cx="107" cy="360" r="10.5" fill="#27245e" />
  <circle cx="393" cy="360" r="10.5" fill="#27245e" />

  <!-- Bottom Ring Text: P.M.B 2044, YOLA -->
  <text fill="#1e1b4b" font-family="Arial, Helvetica, sans-serif" font-size="26.5" font-weight="900" letter-spacing="1.5">
    <textPath href="#pmbArc" startOffset="50%" text-anchor="middle">
      P.M.B 2044, YOLA
    </textPath>
  </text>

  <!-- Central Emblem: Open Book of Knowledge (Top Center) -->
  <g transform="translate(0, 4)">
    <!-- Outer Dark Book Cover -->
    <path d="M 164,126 L 164,218 L 243,218 Q 250,223 257,218 L 336,218 L 336,126 L 325,126 L 325,208 L 175,208 L 175,126 Z" fill="#ffffff" stroke="#181838" stroke-width="4.5" stroke-linejoin="round" />
    <!-- Left Page Stack -->
    <path d="M 173,120 L 173,205 Q 212,197 250,210 L 250,118 Q 212,102 173,120 Z" fill="#ffffff" stroke="#181838" stroke-width="4" stroke-linejoin="round" />
    <!-- Right Page Stack -->
    <path d="M 327,120 L 327,205 Q 288,197 250,210 L 250,118 Q 288,102 327,120 Z" fill="#ffffff" stroke="#181838" stroke-width="4" stroke-linejoin="round" />
    <!-- Inner Open Left Page -->
    <path d="M 182,115 L 182,196 Q 215,186 250,202 L 250,116 Q 215,100 182,115 Z" fill="#ffffff" stroke="#181838" stroke-width="3.5" stroke-linejoin="round" />
    <!-- Inner Open Right Page -->
    <path d="M 318,115 L 318,196 Q 285,186 250,202 L 250,116 Q 285,100 318,115 Z" fill="#ffffff" stroke="#181838" stroke-width="3.5" stroke-linejoin="round" />

    <!-- Dashed Text Lines on Left Page -->
    <g stroke="#27245e" stroke-width="2.2" stroke-dasharray="9,4" fill="none">
      <path d="M 192,126 Q 218,118 242,126" />
      <path d="M 192,138 Q 218,130 242,138" />
      <path d="M 192,150 Q 218,142 242,150" />
      <path d="M 192,162 Q 218,154 242,162" />
      <path d="M 192,174 Q 218,166 242,174" />
      <path d="M 192,186 Q 218,178 242,186" />
    </g>
    <!-- Dashed Text Lines on Right Page -->
    <g stroke="#27245e" stroke-width="2.2" stroke-dasharray="9,4" fill="none">
      <path d="M 258,126 Q 282,118 308,126" />
      <path d="M 258,138 Q 282,130 308,138" />
      <path d="M 258,150 Q 282,142 308,150" />
      <path d="M 258,162 Q 282,154 308,162" />
      <path d="M 258,174 Q 282,166 308,174" />
      <path d="M 258,186 Q 282,178 308,186" />
    </g>
  </g>

  <!-- Central Emblem: Florence Nightingale Nursing Lamp (Below Book) -->
  <g transform="translate(0, 4)">
    <!-- Flame at Left Spout Tip -->
    <path d="M 106,192 C 97,183 100,168 106,158 C 112,168 115,183 106,192 Z" fill="#ffffff" stroke="#181838" stroke-width="2.8" />
    <!-- Spout Rim Collar -->
    <path d="M 98,197 L 116,197 L 114,205 L 102,205 Z" fill="#ffffff" stroke="#181838" stroke-width="2.5" />

    <!-- Lamp Body & Long Left Spout & Right Loop Handle -->
    <path d="M 102,205
             Q 138,265 182,306
             Q 212,332 248,334
             Q 290,334 322,316
             C 348,302 350,270 318,266
             L 212,266
             Q 162,248 114,205 Z"
          fill="#ffffff" stroke="#181838" stroke-width="2.8" stroke-linejoin="round" />

    <!-- Inner Handle Cutout on Right -->
    <path d="M 304,276 C 326,276 326,298 302,305 L 292,305 L 302,276 Z" fill="#ffffff" stroke="#181838" stroke-width="2.5" stroke-linejoin="round" />

    <!-- Lamp Dome Lid & Finial Knob -->
    <path d="M 214,266 Q 258,236 302,266 Z" fill="#ffffff" stroke="#181838" stroke-width="2.5" />
    <rect x="251" y="239" width="16" height="11" rx="4" fill="#ffffff" stroke="#181838" stroke-width="2.5" />

    <!-- Deep Indigo/Navy Pedestal Base of Lamp -->
    <path d="M 222,333 L 274,333 L 306,360 L 190,360 Z" fill="#2c256b" stroke="#181838" stroke-width="2.8" stroke-linejoin="round" />
  </g>

  <!-- Curved Motto Below Seal: IN THE LIGHT OF -->
  <text fill="#1e1b4b" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="900" letter-spacing="1.4">
    <textPath href="#mottoInnerArc" startOffset="50%" text-anchor="middle">
      IN THE LIGHT OF
    </textPath>
  </text>

  <!-- Curved Motto Below Seal: KNOWLEDGE AND UNDERSTANDING -->
  <text fill="#1e1b4b" font-family="Arial, Helvetica, sans-serif" font-size="25.5" font-weight="900" letter-spacing="1.1">
    <textPath href="#mottoOuterArc" startOffset="50%" text-anchor="middle">
      KNOWLEDGE AND UNDERSTANDING
    </textPath>
  </text>
</svg>`;

export const NMCN_COLLEGE_LOGO_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(ASCONS_YOLA_SVG)}`;
