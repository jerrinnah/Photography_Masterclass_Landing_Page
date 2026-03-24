// ═══ DATA ═══
const MODULES = [
  {
    part: "PART ONE",
    partTitle: "FOUNDATIONS",
    tag: "BEGINNER",
    chapters: [
      {
        num: "01",
        title: "Understanding Photography",
        lessons: "4 Lessons + 4 Exercises",
        topics: [
          "What photography really is: drawing with light (and why technique is vocabulary, creativity is poetry)",
          "The Nigerian photography lineage: from J.D. Okhai Ojeikere to the new generation",
          "Why the demand for quality photography in Nigeria has never been higher",
          "The photographer mindset: curiosity, patience, resilience, and problem-solving under pressure",
          "Real example: Seeing the Rembrandt portrait hiding in Balogun Market",
          "Real example: The wedding that went wrong in Ikeja, and how adaptability saved the day",
          "Exercise: Seeing Like a Photographer (one full day, no camera, just your eyes)",
          "Exercise: The Constraint Challenge (shoot 20 beautiful photos in the worst conditions you can find)",
        ],
      },
      {
        num: "02",
        title: "Camera Types and Equipment",
        lessons: "5 Lessons + 2 Exercises",
        topics: [
          "Smartphone vs DSLR vs Mirrorless: honest advice on what you actually need",
          "The Lagos food blogger who built 50K followers with just an iPhone SE",
          "DSLR to Mirrorless: real comparison from a Port Harcourt wedding photographer",
          "Essential equipment priority table with real Nigerian Naira price ranges",
          "Where to buy in Nigeria: Computer Village survival guide, online sellers, international shipping",
          "How to test used cameras: the 8-step checklist that prevents costly mistakes",
          "The Computer Village lesson: how one buyer overpaid N50,000 by skipping verification",
          "Exercise: Equipment Audit and Wish List (prevent impulse buying forever)",
        ],
      },
      {
        num: "03",
        title: "The Exposure Triangle",
        lessons: "6 Lessons + 5 Exercises",
        topics: [
          "Aperture decoded: f-stops, depth of field, and why smaller numbers mean bigger openings",
          "Shutter speed mastery: freezing the Eyo Festival vs capturing light trails on Third Mainland Bridge",
          "ISO explained: the volume knob analogy and finding your camera\u2019s noise limits",
          "How the three work together: the Owambe reception scenario (adjusting in 5 seconds flat)",
          "Shooting modes: Manual, Aperture Priority, Shutter Priority, and when to use each",
          "Real example: Aso-Ebi portrait at f/1.8 vs family group shot at f/11",
          "Real example: The church ceremony in Enugu where flash was banned",
          "Exercise: The Aperture Experiment (5 f-stops, one subject, side-by-side comparison)",
          "Exercise: Shutter Speed Mastery including the panning technique",
          "Exercise: Find Your Camera\u2019s ISO Limit (your personal noise reference card)",
          "Exercise: The Exposure Triangle Challenge (5 equivalent exposures, all different looks)",
          "Exercise: The 7-Day Mode Challenge (Aperture Priority, Shutter Priority, Manual)",
        ],
      },
    ],
  },
  {
    part: "PART ONE (continued)",
    partTitle: "FOUNDATIONS",
    tag: "BEGINNER \u2013 INTERMEDIATE",
    chapters: [
      {
        num: "04",
        title: "Composition and Visual Storytelling",
        lessons: "7 Lessons + 7 Exercises",
        topics: [
          "Rule of Thirds: placing the fisherman at Bar Beach for maximum impact",
          "Leading Lines: the railway line in Agege and the hotel staircase in V.I.",
          "Framing within the frame: the doorway portrait in old Benin City",
          "Symmetry and patterns: the Abuja mosque at dawn, and breaking the pattern with one red umbrella",
          "Depth and layers: the Lekki Conservation Centre walkway (foreground, midground, background)",
          "Negative space: the lone boat on the Lagos Lagoon (the 80/20 rule)",
          "Breaking the rules: the centred masquerade portrait that the rule of thirds would have ruined",
          "Exercise: Rule of Thirds Discipline (30 photos in 48 hours, grid always on)",
          "Exercise: Leading Lines Hunt (15 different types in one hour)",
          "Exercise: The Frame Challenge (10 portraits, 10 different environmental frames)",
          "Exercise: Pattern and Break (find the repetition, then disrupt it)",
          "Exercise: The Three-Layer Composition (10 images with distinct foreground/mid/background)",
          "Exercise: The 80/20 Rule (subject occupies 20%, negative space owns the rest)",
          "Exercise: Rules Made, Rules Broken (6 shots of one scene: 3 following rules, 3 breaking them)",
        ],
      },
      {
        num: "05",
        title: "Understanding Light",
        lessons: "9 Lessons + 8 Exercises",
        topics: [
          "Light direction: front, side, back, top, bottom and what each does to a face",
          "Hard light vs soft light: the window light bridal portrait that rivals studio setups",
          "Colour temperature and Kelvin: handling mixed lighting at corporate events",
          "Golden Hour mastery: the Tarkwa Bay shoreline portrait session at 5:30pm",
          "Taming harsh midday sun: 5 professional solutions including the noon wedding ceremony fix",
          "Speedlight bounce flash: turning any event hall into a studio (the birthday party in Ajah)",
          "Studio strobes and modifiers: the two-light product setup for under N200,000",
          "DIY light modifiers: white paper, foam board, and black card as professional tools",
          "Reading and observing light: the habit that separates good from great",
          "Exercise: Light Direction Study (one light source, 5 positions, one face)",
          "Exercise: Hard vs Soft Comparison (same object, direct sun vs diffused)",
          "Exercise: Colour Temperature Experiment (5 white balance settings, same scene)",
          "Exercise: Golden Hour vs Midday Comparison (same location, three different times)",
          "Exercise: Taming Harsh Light (5 techniques tested on one willing subject at noon)",
          "Exercise: Flash Bouncing Mastery (direct vs ceiling vs wall vs card vs ambient)",
          "Exercise: DIY Light Modifier Test (homemade diffuser, reflector, and flag)",
          "Exercise: The Light Journal (same scene, same time, 7 days, observing how light changes)",
        ],
      },
    ],
  },
  {
    part: "PART TWO",
    partTitle: "BUILDING YOUR CRAFT",
    tag: "INTERMEDIATE",
    chapters: [
      {
        num: "06",
        title: "Lenses and Their Creative Applications",
        lessons: "5 Lessons + 3 Exercises",
        topics: [
          "Focal length decoded: ultra-wide to super telephoto with a practical comparison table",
          "Perspective compression: the Lagos skyline trick (same subject, 24mm vs 200mm)",
          "Prime vs Zoom: the 50mm wedding challenge that produced her strongest gallery",
          "The Nigerian photographer\u2019s lens priority guide (budget starter to working professional)",
          "Real example: why portrait photographers prefer 85mm and real estate shooters need 16mm",
          "Exercise: Focal Length Comparison (same subject at multiple focal lengths, observing face and background changes)",
          "Exercise: One Lens, One Week (the constraint that builds your compositional instincts)",
          "Exercise: Lens Research Assignment (dream kit of 3 lenses with Nigerian pricing and alternatives)",
        ],
      },
      {
        num: "07",
        title: "Post-Processing and Editing",
        lessons: "6 Lessons + 4 Exercises",
        topics: [
          "RAW vs JPEG: the overexposed wedding ceremony that RAW saved and JPEG could not",
          "Lightroom, Photoshop, and free alternatives (Darktable, GIMP, Snapseed, RawTherapee)",
          "The 9-step professional editing workflow from import to export",
          "Batch processing a Nigerian wedding: 350 images edited in 6\u20138 hours, not 35",
          "Developing your signature editing style: the Abuja photographer who found hers on her living room floor",
          "Common editing mistakes: plastic skin, radioactive colours, and uncalibrated monitors",
          "Exercise: RAW vs JPEG Side by Side (10 challenging images, push the recovery limits)",
          "Exercise: The Full Workflow Practice (50 images, timed, repeat weekly for one month)",
          "Exercise: Style Exploration (one portrait, five completely different edits, find your instinct)",
          "Exercise: The Over-Edit Correction (push every slider to extremes, then pull back to natural)",
        ],
      },
    ],
  },
  {
    part: "PART TWO (continued) + PART THREE",
    partTitle: "GENRE MASTERY + ADVANCED TECHNIQUES",
    tag: "INTERMEDIATE \u2013 ADVANCED",
    chapters: [
      {
        num: "08",
        title: "Genre Mastery",
        lessons: "7 Lessons + 5 Exercises",
        topics: [
          "Portrait photography: directing uncomfortable subjects (the law firm headshot technique)",
          "Lighting dark skin beautifully: expose for the skin, soft light, HSL channel awareness",
          "Wedding photography: the Nigerian wedding shot list, handling the money spray, 14-hour survival",
          "Product photography: the N5,000 foam board setup that produces N50,000 results",
          "Real estate photography: shooting the Lekki apartment (preparation, wide-angle technique, blending)",
          "Street and documentary: the Oshodi commuter story (observe, anticipate, capture)",
          "Exercise: Portrait Direction Drill (50 portraits, 50 different verbal directions)",
          "Exercise: The Simulated Wedding Challenge (mock wedding with friends, full workflow)",
          "Exercise: Product Photography Challenge (5 objects, 3 angles each, plus styled lifestyle)",
          "Exercise: Photograph Your Own Space (real estate listing of one room in your home)",
          "Exercise: The Street Photography Walk (100 frames in 60 minutes, select best 5)",
        ],
      },
      {
        num: "09",
        title: "Advanced Lighting Techniques",
        lessons: "6 Lessons + 5 Exercises",
        topics: [
          "Two-light portrait setup: the corporate headshot that a bank booked for 30 executives",
          "Three and four-light setups: the fashion editorial with beauty dish, rim light, and blue gel",
          "Off-camera flash on a budget: the N50,000 OCF kit for the V.I. night pre-wedding shoot",
          "High-Speed Sync: the dramatic outdoor portrait trick at Tafawa Balewa Square at noon",
          "Colour gels: the two-gel album cover portrait (red + blue for under N1,000)",
          "Exercise: Two-Light Experimentation (5 key-to-fill ratios from 1:1 to 8:1)",
          "Exercise: Build Up the Lights (dark room, add one light at a time, photograph each stage)",
          "Exercise: Your First Off-Camera Flash Session (5 positions x 3 modifiers = 15 combinations)",
          "Exercise: HSS Practice (ambient vs flash at -1 and -2 stops in bright sun)",
          "Exercise: Gel Experimentation (single gels, then complementary colour pairs)",
        ],
      },
      {
        num: "10",
        title: "Advanced Composition and Creative Vision",
        lessons: "5 Lessons + 4 Exercises",
        topics: [
          "Visual weight and balance: the woman in red against a grey wall (deliberate imbalance)",
          "Colour theory: complementary, analogous, and monochromatic palettes for photographers",
          "Storytelling through sequences: the Mile 12 Market four-shot documentary framework",
          "Developing a signature style: the photographer who printed 500 images on her floor",
          "Exercise: Visual Weight Experiments (5 compositions exploring colour, focus, texture, and human figure weight)",
          "Exercise: Colour Story Shoot (3 portrait sessions: complementary, analogous, monochromatic)",
          "Exercise: The Four-Shot Story (wide, medium, close-up, reaction across 5 different subjects)",
          "Exercise: Style Audit (collect your 50 best images, find your unconscious patterns)",
        ],
      },
      {
        num: "11",
        title: "Advanced Post-Processing",
        lessons: "6 Lessons + 5 Exercises",
        topics: [
          "Colour grading mastery: the cinematic teal-and-orange grade (and why it works on melanin-rich skin)",
          "Tone curve channel manipulation: red, green, and blue curves for three distinct moods",
          "Frequency separation: the beauty retouching workflow for a skincare brand",
          "Dodge and burn: sculpting light on flat portraits to create studio-quality dimension",
          "Compositing: the Lagos lagoon concept image (woman walking on water at golden hour)",
          "Workflow optimization: presets, keyboard shortcuts, batch processing, smart culling, outsourcing",
          "Exercise: Tone Curve Channel Mastery (3 colour grades using only R/G/B curves)",
          "Exercise: Frequency Separation Practice (low-freq blending + high-freq clone stamp, repeat 5x)",
          "Exercise: Dodge and Burn on Five Faces (15 minutes per face, before/after for each)",
          "Exercise: Simple Composite (cut out subject, place in new scene, match light and colour)",
          "Exercise: Workflow Time Trial (50 images timed, then repeat with presets, compare speeds)",
        ],
      },
    ],
  },
  {
    part: "PART FOUR",
    partTitle: "THE BUSINESS OF PHOTOGRAPHY",
    tag: "ALL LEVELS",
    chapters: [
      {
        num: "12",
        title: "Building Your Photography Business in Nigeria",
        lessons: "6 Lessons + 5 Exercises",
        topics: [
          "Registering your business: CAC, business bank account, professional email, invoice templates",
          "The credibility difference: why Photographer B gets the corporate contract every time",
          "Cost-based pricing framework: equipment depreciation, time, transport, electricity, and hidden costs",
          "The wedding pricing breakdown: why N300K seems profitable but N150K is a loss",
          "Complete pricing table in Naira across portraits, weddings, events, product, and real estate",
          "Contracts and deposits: the bride who cancelled 2 weeks before and the N175,000 that was protected",
          "Building a portfolio: the photographer who cut 200 images to 35 and doubled her bookings",
          "Marketing: the referral engine (N1,500 in prints, 60% of new clients from word of mouth)",
          "Exercise: Business Foundation Checklist (CAC, bank account, email, invoice, pricing sheet in 30 days)",
          "Exercise: Calculate Your Actual Costs (the spreadsheet that reveals if you are really profitable)",
          "Exercise: Draft Your Contract (one-page template covering all essential clauses)",
          "Exercise: The Brutal Portfolio Cull (reduce to 30 images, get 3 honest reviews, replace the weakest 5)",
          "Exercise: 30-Day Marketing Sprint (daily Instagram, X engagement, and collaboration outreach)",
        ],
      },
      {
        num: "13",
        title: "Scaling Your Photography Income",
        lessons: "4 Lessons + 3 Exercises",
        topics: [
          "Multiple revenue streams: education, stock photography, print sales, equipment rental, brand deals",
          "The weekend workshop model: N445,000/month from one day of teaching plus mentorship upsell",
          "Scaling from solo shooter to studio: hiring second shooters, outsourcing editing, building a team",
          "Financial management: the 30/20/50 rule for photographer income",
          "Exercise: Design Your First Workshop (curriculum, pricing, costs, projected profit at 5/10/15 students)",
          "Exercise: Revenue Stream Brainstorm (list 10 streams, rank by income, time, and scalability)",
          "Exercise: Financial Health Check (3-month review, calculate real profit, build a monthly budget)",
        ],
      },
      {
        num: "14",
        title: "Your Digital Presence and Personal Brand",
        lessons: "3 Lessons + 2 Exercises",
        topics: [
          "Your website: the redesign principle that doubled one photographer\u2019s inquiry rate",
          "Social media strategy: Instagram for visual portfolio, X for personality, TikTok for process",
          "Content strategy: portfolio highlights, process content, educational, personal, testimonials",
          "Exercise: Website Audit or Plan (sketch layout, write about page, select 20 portfolio images)",
          "Exercise: Content Calendar (one week planned, executed, tracked, and refined by data)",
        ],
      },
      {
        num: "15",
        title: "Ethics, Legal Considerations, and Professional Standards",
        lessons: "4 Lessons + 3 Exercises",
        topics: [
          "Copyright and image rights under Nigerian law (and the unauthorised billboard scenario)",
          "Model releases: when you need them and when you do not",
          "Respecting subjects and communities: the line between documentary and exploitation",
          "Professional conduct: handling the unhappy bride with calm, empathetic communication",
          "Exercise: Usage Rights Review (add image licensing clauses to your contract)",
          "Exercise: Ethics Self-Assessment (review your portfolio through a consent and dignity lens)",
          "Exercise: Client Communication Templates (5 email templates for every stage of the booking)",
        ],
      },
      {
        num: "16",
        title: "The Road Ahead",
        lessons: "Your Final Assignment",
        topics: [
          "Why the learning never stops (and why that is the best part)",
          "The Nigerian creative economy inflection point and your position in it",
          "Final Exercise: The 90-Day Photography Business Plan (skills, pricing, marketing, revenue, measurable goal)",
        ],
      },
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Chidera O.",
    location: "Lagos",
    text: "I went from charging N30K for weddings to N250K in 4 months. Jay did not just teach photography. He taught me how to run a business.",
  },
  {
    name: "Emeka A.",
    location: "Abuja",
    text: "The lighting module alone is worth 10x the price. I finally understand flash and my event photos look completely different now.",
  },
  {
    name: "Blessing I.",
    location: "PH",
    text: "I started with just my phone. The composition and light modules helped me build a portfolio that landed my first 3 paying clients.",
  },
  {
    name: "Tunde M.",
    location: "Ibadan",
    text: "The business module changed everything. I had the skills but was broke. Now I have contracts, deposits, and actual profit margins.",
  },
];

const FAQ_DATA = [
  {
    q: "I am a complete beginner. Is this for me?",
    a: "Absolutely. Part One starts from zero: what photography is, understanding your camera, the exposure triangle. By Part Four, you are registering a business, writing contracts, and pricing in Naira. The course is designed to take you from wherever you are to wherever you want to go.",
  },
  {
    q: "What camera do I need?",
    a: "Whatever you have, even a smartphone. Chapter 2 covers every camera type honestly, and the exercises are designed to work with any device. When you are ready to invest, the course includes a full Nigerian equipment buying guide with prices and where to buy.",
  },
  {
    q: "How is this different from free YouTube tutorials?",
    a: "YouTube teaches scattered techniques. This is a structured 16-chapter system that builds skill on top of skill, with 60+ real Nigerian examples, 45+ hands-on exercises, business templates, and pricing frameworks. It is the difference between random tips and a complete education.",
  },
  {
    q: "How long do I have access?",
    a: "Lifetime. Once you enrol, the course is yours forever. Watch at your own pace, rewatch as many times as you need, and access all future updates at no extra cost.",
  },
  {
    q: "Can I really make money from photography in Nigeria?",
    a: "Chapter 12 and 13 prove it with real numbers. The course includes actual pricing tables, cost breakdowns, revenue projections, and multiple income stream strategies all built for the Nigerian market.",
  },
  {
    q: "Is the pricing in Naira?",
    a: "Yes. \u20A615,000 flat. Payment via Paystack, Flutterwave, or bank transfer. No dollar conversions, no hidden fees, no recurring charges.",
  },
  {
    q: "Is there a community or support?",
    a: "Yes. You get access to our private community of students where you can share work, get feedback, and ask questions. You are not learning alone.",
  },
];

const DIFF_DATA = [
  [
    "100% Nigerian",
    "Every example is from Nigeria. Balogun Market, Oshodi, Third Mainland Bridge, Computer Village. Pricing in Naira. Equipment guides for Lagos. Business registration through CAC. This was not adapted for Nigeria. It was born here.",
  ],
  [
    "Beginner to Business Owner",
    "Part One teaches you what a camera is. Part Four teaches you how to register a business, write contracts, price your work, and build multiple revenue streams. One course. Complete transformation.",
  ],
  [
    "60+ Real-World Examples",
    "Not abstract theory. Real scenarios: the wedding where NEPA took the light, the church that banned flash, the Computer Village buyer who overpaid N50K, the N5,000 product setup that delivers N50K results.",
  ],
  [
    "45+ Practice Exercises",
    "Every section ends with a hands-on assignment. The Aperture Experiment. The Street Photography Walk. The Brutal Portfolio Cull. The 90-Day Business Plan. You learn by doing, not just watching.",
  ],
  [
    "From Someone Who Did It",
    "From dispatch rider to photographer, cinematographer, and production specialist. Not someone who read about photography. Someone who has shot in the worst Nigerian conditions and delivered every time.",
  ],
  [
    "Priced to Change Lives",
    "At \u20A615,000, this costs less than two tanks of fuel. The same knowledge that took years and hundreds of thousands of Naira in mistakes. Priced for impact, not extraction.",
  ],
];

const JOURNEY_DATA = [
  {
    part: "PART ONE",
    title: "Foundations",
    chs: "Chapters 1\u20135",
    desc: "Camera mastery, exposure triangle, composition, and light",
    color: "#2D6A4F",
  },
  {
    part: "PART TWO",
    title: "Building Your Craft",
    chs: "Chapters 6\u20137",
    desc: "Lenses, post-processing, editing workflow, and style",
    color: "#40916C",
  },
  {
    part: "PART THREE",
    title: "Advanced Techniques",
    chs: "Chapters 8\u201311",
    desc: "Genre mastery, advanced lighting, composition, and retouching",
    color: "#C8A24E",
  },
  {
    part: "PART FOUR",
    title: "The Business",
    chs: "Chapters 12\u201316",
    desc: "Pricing, contracts, marketing, scaling, ethics, and your 90-day plan",
    color: "#B8860B",
  },
];

const PRICE_FEATURES = [
  "Complete 16-chapter course (24,000+ words)",
  "60+ real-world Nigerian examples with breakdowns",
  "45+ hands-on practice exercises",
  "Downloadable contract and invoice templates",
  "Pricing guide with actual Naira figures",
  "Equipment buying guide for Nigerian market",
  "Private community access",
  "All future updates included free",
];

const STATS_DATA = [
  ["16", "Chapters"],
  ["4", "Structured Parts"],
  ["60+", "Real Examples"],
  ["45+", "Exercises"],
  ["24K+", "Words"],
  ["Lifetime", "Access"],
  ["\u20A615K", "One Payment"],
];

// ═══ BRANDS DATA ═══
// Replace these with your actual brand names. If you have logo image files, swap the icon div for an <img> tag.
const BRANDS = [
  { name: "GTBank", color: "#E44311" },
  { name: "Pepsi", color: "#004B93" },
  { name: "Access Bank", color: "#F37021" },
  { name: "Jumia", color: "#F68B1E" },
  { name: "Konga", color: "#ED1C24" },
  { name: "MTN", color: "#FFCC00" },
  { name: "UBA", color: "#C8102E" },
  { name: "Globacom", color: "#009639" },
];

// ═══ SVG ICONS ═══
const starSVG =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="#C8A24E"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
const checkSVG =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A24E" stroke-width="2.5" style="flex-shrink:0;margin-top:2px"><path d="M20 6L9 17l-5-5"/></svg>';
const chevSVG =
  '<svg class="ch-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>';
const lessonIcon =
  '<svg class="topic-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A24E" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>';
const exerciseIcon =
  '<svg class="topic-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#40916C" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>';
const exampleIcon =
  '<svg class="topic-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8860B" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/></svg>';
const plusSVG =
  '<svg class="faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';

// ═══ RENDER FUNCTIONS ═══
function renderBrands() {
  const el = document.getElementById("brandLogos");
  el.innerHTML = BRANDS.map(
    (b) =>
      `<div class="brand-item"><div class="brand-icon" style="background:${
        b.color
      }">${b.name.charAt(0)}</div><span class="brand-name">${
        b.name
      }</span></div>`
  ).join("");
}

function renderStats() {
  const el = document.getElementById("statsGrid");
  el.innerHTML = STATS_DATA.map(
    ([v, l]) =>
      `<div class="stat-item"><div class="stat-val">${v}</div><div class="stat-label">${l}</div></div>`
  ).join("");
}

function renderModules() {
  const container = document.getElementById("modulesContainer");
  let html = "";
  MODULES.forEach((mod, mi) => {
    html += `<div class="module-group">`;
    html += `<div class="part-header"><div class="part-label">${mod.part}</div><div class="part-line"></div><div class="part-title">${mod.partTitle}</div><div class="part-line"></div><div class="part-tag">${mod.tag}</div></div>`;
    mod.chapters.forEach((ch) => {
      const isFirst = ch.num === "01";
      html += `<div class="ch-card${isFirst ? " open" : ""}" data-ch="${
        ch.num
      }">`;
      html += `<div class="ch-header"><span class="ch-num">${ch.num}</span><div class="ch-info"><div class="ch-title">${ch.title}</div><div class="ch-lessons">${ch.lessons}</div></div>${chevSVG}</div>`;
      html += `<div class="ch-body"><div class="ch-topics">`;
      ch.topics.forEach((t, ti) => {
        const isEx = t.startsWith("Exercise:");
        const isRe = t.startsWith("Real example:");
        const icon = isEx ? exerciseIcon : isRe ? exampleIcon : lessonIcon;
        const cls = isEx ? " exercise" : isRe ? " example" : "";
        html += `<div class="topic-row">${icon}<span class="topic-text${cls}">${t}</span></div>`;
      });
      html += `</div></div></div>`;
    });
    html += `</div>`;
  });
  container.innerHTML = html;
}

function renderDifferent() {
  const el = document.getElementById("diffGrid");
  el.innerHTML = DIFF_DATA.map(
    ([t, d]) =>
      `<div class="diff-card"><div class="diff-accent"></div><h3>${t}</h3><p>${d}</p></div>`
  ).join("");
}

function renderJourney() {
  const el = document.getElementById("journeyGrid");
  el.innerHTML = JOURNEY_DATA.map(
    (j) =>
      `<div class="journey-card" style="border-top:3px solid ${j.color}"><div class="j-part" style="color:${j.color}">${j.part}</div><h3>${j.title}</h3><div class="j-chs">${j.chs}</div><p>${j.desc}</p></div>`
  ).join("");
}

function renderTestimonials() {
  const el = document.getElementById("testGrid");
  el.innerHTML = TESTIMONIALS.map(
    (t) =>
      `<div class="tcard"><div class="stars">${starSVG.repeat(
        5
      )}</div><p class="t-text">\u201C${
        t.text
      }\u201D</p><div><span class="t-name">${
        t.name
      }</span><span class="t-loc">${t.location}</span></div></div>`
  ).join("");
}

function renderPricing() {
  const el = document.getElementById("priceFeatures");
  el.innerHTML = PRICE_FEATURES.map(
    (f) => `<div class="pf-item">${checkSVG}<span>${f}</span></div>`
  ).join("");
}

function renderFAQ() {
  const el = document.getElementById("faqContainer");
  el.innerHTML = FAQ_DATA.map(
    (f, i) =>
      `<div class="faq-item" data-faq="${i}"><div class="faq-q"><h3>${f.q}</h3>${plusSVG}</div><div class="faq-a"><p>${f.a}</p></div></div>`
  ).join("");
}

// ═══ INTERACTIVITY ═══
function setupChapterToggles() {
  document.querySelectorAll(".ch-card").forEach((card) => {
    card.addEventListener("click", () => {
      const wasOpen = card.classList.contains("open");
      document
        .querySelectorAll(".ch-card.open")
        .forEach((c) => c.classList.remove("open"));
      if (!wasOpen) card.classList.add("open");
    });
  });
}

function setupFAQToggles() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      document
        .querySelectorAll(".faq-item.open")
        .forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document
    .querySelectorAll(".anim-section")
    .forEach((section) => observer.observe(section));
}

// ═══ REGISTRATION FORM HANDLER ═══
function handleRegistration() {
  // Clear previous errors
  document
    .querySelectorAll(".reg-field")
    .forEach((f) => f.classList.remove("error"));

  const firstName = document.getElementById("regFirst").value.trim();
  const lastName = document.getElementById("regLast").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const level = document.getElementById("regLevel").value;

  let hasError = false;

  // Validate
  if (!firstName) {
    showFieldError("regFirst", "Enter your first name");
    hasError = true;
  }
  if (!lastName) {
    showFieldError("regLast", "Enter your last name");
    hasError = true;
  }
  if (!email || !email.includes("@") || !email.includes(".")) {
    showFieldError("regEmail", "Enter a valid email address");
    hasError = true;
  }
  if (!phone || phone.length < 10) {
    showFieldError("regPhone", "Enter a valid phone number");
    hasError = true;
  }
  if (!level) {
    showFieldError("regLevel", "Select your level");
    hasError = true;
  }

  if (hasError) return;

  // Disable button and show loading
  const btn = document.getElementById("regSubmitBtn");
  const originalText = btn.innerHTML;
  btn.innerHTML = "Submitting...";
  btn.style.opacity = "0.6";
  btn.style.pointerEvents = "none";

  // Collect data
  const registrationData = {
    firstName,
    lastName,
    email,
    phone,
    level,
    timestamp: new Date().toISOString(),
    source: "masterclass_landing_page",
  };

  // ═══ IMPORTANT: Replace this section with your actual backend/form handler ═══
  // Option 1: Google Sheets via Google Forms or Sheety API
  // Option 2: Formspree (formspree.io) - paste your endpoint below
  // Option 3: EmailJS to send data to your email
  // Option 4: Your own backend API
  //
  // Example with Formspree:
  // fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(registrationData)
  // }).then(response => { ... })
  //
  // For now, we simulate success and store to localStorage as backup:

  // Store locally as backup//
  // const existing = JSON.parse(localStorage.getItem('masterclass_registrations') || '[]');
  // existing.push(registrationData);
  // localStorage.setItem('masterclass_registrations', JSON.stringify(existing));

  fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    body: JSON.stringify(registrationData),
  });

  // Log to console (you can see all registrations in browser dev tools)
  console.log("New registration:", registrationData);
  console.log("All registrations:", existing);

  // Simulate network delay then show success
  setTimeout(() => {
    // Hide form fields and button
    document.querySelector(".reg-fields").style.display = "none";
    document.querySelector(".reg-form-header").style.display = "none";
    btn.style.display = "none";
    document.querySelector(".reg-note").style.display = "none";

    // Show success message
    document.getElementById("regSuccess").style.display = "block";

    // Optional: redirect to payment page after 2 seconds
    // setTimeout(() => { window.open('https://selar.co/your-masterclass', '_blank'); }, 2000);
  }, 1200);
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId).closest(".reg-field");
  field.classList.add("error");

  // Add error message if not exists
  let errEl = field.querySelector(".field-error");
  if (!errEl) {
    errEl = document.createElement("span");
    errEl.className = "field-error";
    field.appendChild(errEl);
  }
  errEl.textContent = message;
  errEl.style.display = "block";
}

// Clear error on input
document.addEventListener("input", (e) => {
  if (e.target.closest(".reg-field")) {
    e.target.closest(".reg-field").classList.remove("error");
    const err = e.target.closest(".reg-field").querySelector(".field-error");
    if (err) err.style.display = "none";
  }
});

// ═══ INIT ═══
document.addEventListener("DOMContentLoaded", () => {
  renderBrands();
  renderStats();
  renderModules();
  renderDifferent();
  renderJourney();
  renderTestimonials();
  renderPricing();
  renderFAQ();
  setupChapterToggles();
  setupFAQToggles();
  setupScrollAnimations();
});
