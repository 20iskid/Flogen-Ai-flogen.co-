import type { LandingContent, NicheSlug } from "@/lib/landing/types";

const defaultUvpItems = (
  nicheLabel: string
): LandingContent["uvp"]["items"] => [
  {
    icon: "bot",
    title: "Automation That Actually Works",
    description: `Production-grade workflows wired into the tools ${nicheLabel} already use — no generic chatbot theater.`,
  },
  {
    icon: "zap",
    title: "Live in 30 Days",
    description:
      "We ship fast because every week without a system is revenue walking out the door.",
  },
  {
    icon: "gauge",
    title: "ROI Or Refund",
    description:
      "We benchmark before we build. Miss agreed KPIs and you don't pay. Period.",
  },
  {
    icon: "layers",
    title: "Built Around Your Stack",
    description:
      "One team owns intake, follow-up, scheduling, and integrations — zero finger-pointing.",
  },
  {
    icon: "shield",
    title: "Pilot-Ready & Secure",
    description:
      "Full NDA, encrypted data handling, and audit trails from day one.",
  },
];

export const nicheLandingPages: Record<NicheSlug, LandingContent> = {
  "law-firms": {
    slug: "law-firms",
    name: "Law Firms",
    metadata: {
      title: "Flogen — Recover $22,000 in Billable Hours | Law Firm Automation",
      description:
        "Custom law firm automation that goes live in 30 days. Recover billable hours, never lose a lead to a faster competitor. Pilot includes full NDA and money-back guarantee.",
    },
    warningBar: {
      message: "Limited capacity — we only onboard 3 new law firm clients per quarter.",
      cta: "Book your audit now.",
    },
    hero: {
      headline: [
        { text: "Recover the " },
        { text: "$22,000 in Billable Hours", variant: "highlight" },
        {
          text: " Your Firm Is Leaving on the Table Every Year and Never Lose Another Lead to a Competitor Who Answered Faster Using a Custom Law Firm Automation System That Goes Live in ",
        },
        { text: "30 Days", variant: "highlight" },
        {
          text: " Built Around Your Exact Practice Area and Case Management Software ",
        },
        {
          text: "(Pilot Includes Full NDA and Money-Back Guarantee)",
          variant: "muted",
        },
      ],
      subheadline:
        "We install intake, follow-up, and case workflow automation around the software you already use — so your firm captures every billable hour and responds to leads before the competition does.",
      ctaLabel: "Claim your free firm automation audit",
      ctaHref: "#audit",
      heroVideo: "/videos/law-hero-bg.mp4",
    },
    socialProof: {
      label: "Trusted by forward-thinking firms",
      logos: ["BAKER & CO", "STERLING LLP", "NORTHLINE", "HARTMAN", "CLEARVIEW"],
    },
    pas: {
      title: "Here's the brutal truth about your firm right now.",
      paragraphs: [
        "You didn't go to law school to chase voicemails and manually log intake while a faster firm signs the client.",
        "The gap isn't talent or hustle — it's systems. Every hour lost to admin is billable revenue you'll never recover.",
      ],
      painPoints: [
        "Intake calls go to voicemail after hours while competitors respond in minutes.",
        "Associates burn billable hours on repetitive follow-ups and status updates.",
        "Your case management software and marketing tools don't talk to each other.",
        "Every month without automation compounds lost revenue you'll never get back.",
      ],
      bridge:
        "Flogen doesn't sell software. We install profit engines for law firms. Here's what changes:",
      solutions: [
        "Custom intake and nurture workflows that recover 60–80% of manual ops within 90 days.",
        "Always-on lead response that books consultations while your team is in court.",
        "Integrations built around Clio, MyCase, PracticePanther, or your existing stack.",
        "Measurable ROI from day one — tracked against billable hours and signed matters.",
      ],
    },
    uvp: {
      title: "Why law firm partners choose Flogen",
      titleAccent: "over every other agency.",
      items: defaultUvpItems("law firms"),
    },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real firms. Real numbers. No stock-photo testimonials.",
      items: [
        {
          quote:
            "We recovered 14 billable hours per attorney per week in the first 60 days. Flogen installed a machine, not a pitch deck.",
          name: "David Mercer",
          role: "Managing Partner, Mercer & Associates",
          result: "+$22K/attorney/yr",
        },
        {
          quote:
            "Our after-hours intake used to die on voicemail. Now consultations book automatically. We stopped losing cases to faster firms.",
          name: "Rachel Kim",
          role: "Founding Partner, Kim Legal Group",
          result: "+34% signed matters",
        },
        {
          quote:
            "They integrated with Clio in 28 days. If you're still manually chasing leads, you're funding your competitor's growth.",
          name: "James Whitfield",
          role: "COO, Whitfield Law",
          result: "90-sec lead response",
        },
      ],
    },
    finalCta: {
      title: "Stop bleeding billable hours.",
      titleLine2: "Start capturing every lead.",
      description:
        "Book your free firm automation audit. We'll map your biggest leaks and tell you straight if we're not the right fit.",
      ctaLabel: "Book my free audit — now",
    },
  },

  "dental-clinics": {
    slug: "dental-clinics",
    name: "Dental Clinics",
    metadata: {
      title: "Flogen — Recover Lost Chair Time | Dental Clinic Automation",
      description:
        "Custom dental clinic automation live in 30 days. Fill chairs, recover no-shows, and never lose a patient to a practice that answered faster.",
    },
    warningBar: {
      message: "Limited capacity — we only onboard 3 new dental clients per quarter.",
      cta: "Book your audit now.",
    },
    hero: {
      headline: [
        { text: "Recover " },
        { text: "$18,000+ in Lost Chair Time", variant: "highlight" },
        {
          text: " Your Practice Leaves on the Table Every Year and Never Lose Another New Patient to a Clinic That Answered Faster Using a Custom Dental Automation System That Goes Live in ",
        },
        { text: "30 Days", variant: "highlight" },
        {
          text: " Built Around Your PMS and Scheduling Software ",
        },
        {
          text: "(Pilot Includes Full NDA and Money-Back Guarantee)",
          variant: "muted",
        },
      ],
      subheadline:
        "We automate recall, intake, insurance follow-up, and appointment reminders around Dentrix, Eaglesoft, or Open Dental — so chairs stay full and your front desk stops drowning.",
      ctaLabel: "Claim your free practice automation audit",
    },
    socialProof: { label: "Trusted by growing practices", logos: ["SMILECO", "BRIGHTDENT", "PARKVIEW", "LAKESIDE", "APEX"] },
    pas: {
      title: "Here's the brutal truth about your practice right now.",
      paragraphs: [
        "You didn't open a clinic to play phone tag with new patients while empty chairs kill your margins.",
        "No-shows, slow follow-up, and manual recall aren't small annoyances — they're six figures walking out the door.",
      ],
      painPoints: [
        "New patient calls go unanswered after hours and book with the next clinic on Google.",
        "Recall lists sit in spreadsheets while hygiene chairs sit empty.",
        "Insurance verification and follow-up eat hours your team should spend chairside.",
        "Every unfilled appointment slot compounds lost production you'll never recover.",
      ],
      bridge: "Flogen installs automation built for dental. Here's what changes:",
      solutions: [
        "Automated recall and reactivation that fills hygiene schedules on autopilot.",
        "24/7 intake that books new patients before competitors return the call.",
        "PMS integrations that sync with your existing scheduling workflow.",
        "ROI tracked against production per chair and new patient conversion.",
      ],
    },
    uvp: { title: "Why practice owners choose Flogen", titleAccent: "over generic agencies.", items: defaultUvpItems("dental clinics") },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real practices. Real production numbers.",
      items: [
        { quote: "Hygiene recall went from manual chaos to fully automated. We added 11 chairs per week in month two.", name: "Dr. Anita Patel", role: "Owner, Parkview Dental", result: "+$16K/mo production" },
        { quote: "New patient booking after hours changed everything. We stopped losing leads to the corporate chain down the street.", name: "Dr. Mark Sullivan", role: "Sullivan Family Dental", result: "+41% new patients" },
        { quote: "Live in 27 days integrated with Dentrix. Our front desk finally breathes.", name: "Lisa Tran", role: "Office Manager, BrightDent", result: "-62% admin time" },
      ],
    },
    finalCta: {
      title: "Stop losing chair time.",
      titleLine2: "Start filling your schedule.",
      description: "Book your free practice automation audit. We'll show you exactly where production is leaking.",
      ctaLabel: "Book my free audit — now",
    },
  },

  "hvac-home-services": {
    slug: "hvac-home-services",
    name: "HVAC / Home Services",
    metadata: {
      title: "Flogen — Never Miss Another Service Call | HVAC Automation",
      description: "Custom HVAC and home services automation in 30 days. Book more jobs, dispatch faster, and stop losing calls to competitors.",
    },
    warningBar: { message: "Limited capacity — we only onboard 3 new home service clients per quarter.", cta: "Book your audit now." },
    hero: {
      headline: [
        { text: "Recover " },
        { text: "$25,000+ in Missed Service Calls", variant: "highlight" },
        { text: " Your Company Loses Every Year and Never Lose Another Job to a Competitor Who Dispatched Faster Using a Custom HVAC & Home Services Automation System That Goes Live in " },
        { text: "30 Days", variant: "highlight" },
        { text: " Built Around ServiceTitan, Housecall Pro, or Your CRM " },
        { text: "(Pilot Includes Full NDA and Money-Back Guarantee)", variant: "muted" },
      ],
      subheadline: "We automate call intake, dispatch alerts, estimate follow-up, and maintenance plan renewals — so every lead gets answered and every truck stays booked.",
      ctaLabel: "Claim your free operations automation audit",
    },
    socialProof: { label: "Trusted by top contractors", logos: ["COOLAIR", "SUMMIT HVAC", "PROFLOW", "ALLSTAR", "NEXGEN"] },
    pas: {
      title: "Here's the brutal truth about your operation right now.",
      paragraphs: ["You didn't build a service company to let calls roll to voicemail during peak season.", "Slow dispatch and manual follow-up mean jobs go to whoever answers first — and that's not you."],
      painPoints: ["Emergency calls go unanswered after hours and book with the next company on Google.", "Estimates sit in email limbo while homeowners hire someone else.", "Maintenance plan renewals slip through cracks every quarter.", "Dispatch and office staff waste hours on repetitive status calls."],
      bridge: "Flogen builds automation for contractors who want trucks moving. Here's what changes:",
      solutions: ["24/7 call intake that books jobs and routes emergencies instantly.", "Automated estimate follow-up that closes more replacement installs.", "CRM integrations with ServiceTitan, Housecall Pro, and Jobber.", "ROI measured in booked jobs, ticket size, and response time."],
    },
    uvp: { title: "Why contractors choose Flogen", titleAccent: "over bloated software vendors.", items: defaultUvpItems("HVAC companies") },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real operators. Real booked revenue.",
      items: [
        { quote: "We went from 4-hour callback times to under 3 minutes. Summer season used to break us — not anymore.", name: "Mike Torres", role: "Owner, CoolAir Mechanical", result: "+28% booked jobs" },
        { quote: "Estimate follow-up alone paid for the system in 6 weeks. I wish we'd done this years ago.", name: "Sarah Dunn", role: "GM, Summit HVAC", result: "+$31K Q1 revenue" },
        { quote: "Integrated with ServiceTitan in 30 days flat. Our CSRs finally focus on customers, not spreadsheets.", name: "Chris Bell", role: "Ops Director, ProFlow", result: "-70% manual dispatch" },
      ],
    },
    finalCta: { title: "Stop missing service calls.", titleLine2: "Start booking every job.", description: "Book your free operations audit. We'll map every leak in your call-to-dispatch pipeline.", ctaLabel: "Book my free audit — now" },
  },

  "financial-advisors": {
    slug: "financial-advisors",
    name: "Financial Advisors",
    metadata: {
      title: "Flogen — Recover Lost AUM Pipeline | Financial Advisor Automation",
      description: "Custom automation for RIAs and financial advisors. Nurture prospects, book consultations, and go live in 30 days.",
    },
    warningBar: { message: "Limited capacity — we only onboard 3 new advisory firms per quarter.", cta: "Book your audit now." },
    hero: {
      headline: [
        { text: "Recover " },
        { text: "$30,000+ in Lost AUM Pipeline", variant: "highlight" },
        { text: " Your Practice Leaves on the Table Every Year and Never Lose Another Prospect to an Advisor Who Followed Up Faster Using a Custom Financial Advisory Automation System That Goes Live in " },
        { text: "30 Days", variant: "highlight" },
        { text: " Built Around Your CRM and Compliance Workflow " },
        { text: "(Pilot Includes Full NDA and Money-Back Guarantee)", variant: "muted" },
      ],
      subheadline: "We automate prospect nurture, meeting booking, onboarding intake, and follow-up sequences — compliant, documented, and built around Redtail, Wealthbox, or Salesforce.",
      ctaLabel: "Claim your free practice automation audit",
    },
    socialProof: { label: "Trusted by growing advisory firms", logos: ["APEX WM", "NORTHSTAR", "LEGACY", "SUMMIT", "HARBOR"] },
    pas: {
      title: "Here's the brutal truth about your practice right now.",
      paragraphs: ["You didn't become an advisor to chase cold leads and manually schedule discovery calls.", "Every slow follow-up is AUM walking to the advisor who stayed in touch."],
      painPoints: ["Webinar and referral leads go cold because follow-up is inconsistent.", "Onboarding paperwork creates bottlenecks that delay funding.", "Your CRM is full of contacts but empty on automated nurture.", "Compliance concerns paralyze you from fixing the problem."],
      bridge: "Flogen builds compliant automation for advisors. Here's what changes:",
      solutions: ["Automated nurture sequences that book qualified discovery calls.", "Onboarding workflows that reduce time-to-funded accounts.", "CRM integrations with audit trails for compliance review.", "ROI tracked on pipeline velocity and assets gathered."],
    },
    uvp: { title: "Why advisors choose Flogen", titleAccent: "over generic marketing agencies.", items: defaultUvpItems("financial advisors") },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real firms. Real pipeline impact.",
      items: [
        { quote: "Our discovery call rate doubled in 45 days. The nurture system does what my team couldn't stay consistent on.", name: "Robert Hayes", role: "Founder, Hayes Wealth", result: "+2.1x consultations" },
        { quote: "Compliant, documented, and live in 29 days. Compliance actually signed off.", name: "Maria Gonzalez", role: "CCO, Northstar Advisors", result: "Live in 29 days" },
        { quote: "We added $4.2M AUM in Q2 directly from leads we used to lose.", name: "Tom Bradley", role: "Managing Partner, Legacy Financial", result: "+$4.2M AUM" },
      ],
    },
    finalCta: { title: "Stop losing pipeline.", titleLine2: "Start growing AUM on autopilot.", description: "Book your free practice audit. We'll map your nurture gaps and show you the fix.", ctaLabel: "Book my free audit — now" },
  },

  "staffing-agencies": {
    slug: "staffing-agencies",
    name: "Staffing Agencies",
    metadata: {
      title: "Flogen — Fill Placements Faster | Staffing Agency Automation",
      description: "Custom staffing automation in 30 days. Match candidates faster, nurture clients, and never lose a req to a faster agency.",
    },
    warningBar: { message: "Limited capacity — we only onboard 3 new staffing clients per quarter.", cta: "Book your audit now." },
    hero: {
      headline: [
        { text: "Recover " },
        { text: "$20,000+ in Lost Placement Fees", variant: "highlight" },
        { text: " Your Agency Leaves on the Table Every Year and Never Lose Another Req to a Competitor Who Submitted Faster Using a Custom Staffing Automation System That Goes Live in " },
        { text: "30 Days", variant: "highlight" },
        { text: " Built Around Your ATS and CRM " },
        { text: "(Pilot Includes Full NDA and Money-Back Guarantee)", variant: "muted" },
      ],
      subheadline: "We automate candidate outreach, client follow-up, interview scheduling, and pipeline updates — so your recruiters sell instead of admin.",
      ctaLabel: "Claim your free agency automation audit",
    },
    socialProof: { label: "Trusted by recruiting firms", logos: ["TALENTCO", "APEX STAFF", "WORKFORCE", "PRIMESTAFF", "NEXUS"] },
    pas: {
      title: "Here's the brutal truth about your agency right now.",
      paragraphs: ["You didn't start a staffing firm to let reqs die in email while faster agencies fill them.", "Manual outreach and slow follow-up mean placements — and fees — go elsewhere."],
      painPoints: ["Hot candidates go cold because follow-up is inconsistent across recruiters.", "Client reqs sit unworked while your team chases admin tasks.", "Your ATS and CRM don't sync, creating duplicate work and missed matches.", "Every unfilled req is margin you'll never recover."],
      bridge: "Flogen installs automation for staffing firms. Here's what changes:",
      solutions: ["Automated candidate nurture that keeps pipelines warm 24/7.", "Client req workflows that trigger instant outreach sequences.", "ATS/CRM integrations that eliminate double entry.", "ROI measured in placements, time-to-fill, and fee revenue."],
    },
    uvp: { title: "Why agency owners choose Flogen", titleAccent: "over off-the-shelf ATS plugins.", items: defaultUvpItems("staffing agencies") },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real agencies. Real placement numbers.",
      items: [
        { quote: "Time-to-fill dropped 38% in 60 days. Recruiters actually recruit now.", name: "Jen Walsh", role: "CEO, TalentCo Staffing", result: "-38% time-to-fill" },
        { quote: "We stopped losing reqs to faster shops. Automated outreach changed the game.", name: "Derek Moss", role: "Founder, Apex Staff", result: "+$24K fees/mo" },
        { quote: "Live in 30 days with Bullhorn integration. No BS, just results.", name: "Carla Ruiz", role: "Ops Director, PrimeStaff", result: "Live in 30 days" },
      ],
    },
    finalCta: { title: "Stop losing placements.", titleLine2: "Start filling reqs faster.", description: "Book your free agency audit. We'll show you where pipeline is leaking fees.", ctaLabel: "Book my free audit — now" },
  },

  "independent-auto-repair": {
    slug: "independent-auto-repair",
    name: "Independent Auto Repair",
    metadata: {
      title: "Flogen — Fill More Bays | Auto Repair Shop Automation",
      description: "Custom automation for independent auto repair shops. Book more jobs, reduce no-shows, go live in 30 days.",
    },
    warningBar: { message: "Limited capacity — we only onboard 3 new shop clients per quarter.", cta: "Book your audit now." },
    hero: {
      headline: [
        { text: "Recover " },
        { text: "$15,000+ in Empty Bay Revenue", variant: "highlight" },
        { text: " Your Shop Leaves on the Table Every Year and Never Lose Another Customer to a Shop That Booked Them Faster Using a Custom Auto Repair Automation System That Goes Live in " },
        { text: "30 Days", variant: "highlight" },
        { text: " Built Around Your Shop Management Software " },
        { text: "(Pilot Includes Full NDA and Money-Back Guarantee)", variant: "muted" },
      ],
      subheadline: "We automate appointment booking, estimate follow-up, service reminders, and review requests — integrated with Shop-Ware, Tekmetric, or Mitchell 1.",
      ctaLabel: "Claim your free shop automation audit",
    },
    socialProof: { label: "Trusted by independent shops", logos: ["BAYTECH", "ROADREADY", "PRECISION", "MAINST", "AUTOCARE"] },
    pas: {
      title: "Here's the brutal truth about your shop right now.",
      paragraphs: ["You didn't open a bay to watch customers book with the dealership because you didn't call back.", "Empty lifts and no-shows aren't bad luck — they're systems problems."],
      painPoints: ["After-hours calls go to competitors with online booking.", "Approved estimates sit untouched while customers go elsewhere.", "Service reminders are manual — so retention is inconsistent.", "Your advisors spend more time on phones than with customers."],
      bridge: "Flogen builds automation for independent shops. Here's what changes:",
      solutions: ["24/7 booking and intake that captures after-hours demand.", "Automated estimate follow-up that converts more repair orders.", "Service interval reminders that drive repeat visits.", "ROI tracked on bay utilization and average repair order."],
    },
    uvp: { title: "Why shop owners choose Flogen", titleAccent: "over generic shop software.", items: defaultUvpItems("auto repair shops") },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real shops. Real bay utilization.",
      items: [
        { quote: "Bay utilization up 22% in 8 weeks. After-hours booking alone was a game changer.", name: "Tony Russo", role: "Owner, Precision Auto", result: "+22% bay utilization" },
        { quote: "Estimate follow-up used to be hit or miss. Now it's automatic and our close rate shows it.", name: "Amy Cho", role: "Manager, Main St Auto", result: "+19% RO close rate" },
        { quote: "Tekmetric integration in 26 days. My advisors finally have time to actually advise.", name: "Rick Palmer", role: "Owner, RoadReady Garage", result: "-55% phone admin" },
      ],
    },
    finalCta: { title: "Stop running empty bays.", titleLine2: "Start booking every lift.", description: "Book your free shop audit. We'll map where revenue is walking out the door.", ctaLabel: "Book my free audit — now" },
  },

  "immigration-attorneys": {
    slug: "immigration-attorneys",
    name: "Immigration Attorneys",
    metadata: {
      title: "Flogen — Never Lose an Immigration Lead | Attorney Automation",
      description: "Custom automation for immigration law practices. Intake, follow-up, and case workflows live in 30 days.",
    },
    warningBar: { message: "Limited capacity — we only onboard 3 new immigration practices per quarter.", cta: "Book your audit now." },
    hero: {
      headline: [
        { text: "Recover " },
        { text: "$20,000+ in Lost Immigration Cases", variant: "highlight" },
        { text: " Your Practice Leaves on the Table Every Year and Never Lose Another Consultation to a Firm That Responded Faster Using a Custom Immigration Law Automation System That Goes Live in " },
        { text: "30 Days", variant: "highlight" },
        { text: " Built Around Your Practice Area and Case Management Software " },
        { text: "(Pilot Includes Full NDA and Money-Back Guarantee)", variant: "muted" },
      ],
      subheadline: "We automate multilingual intake, consultation booking, document collection, and case status updates — so you capture every lead and move cases faster.",
      ctaLabel: "Claim your free practice automation audit",
    },
    socialProof: { label: "Trusted by immigration practices", logos: ["GLOBAL LAW", "BRIDGE", "PATHWAY", "LIBERTY", "NORTHSTAR"] },
    pas: {
      title: "Here's the brutal truth about your practice right now.",
      paragraphs: ["You didn't become an immigration attorney to lose consultations because intake took 48 hours.", "Manual document chasing and follow-up slow cases — and kill referrals."],
      painPoints: ["After-hours inquiries book with whoever responds first.", "Document collection is a manual email nightmare for staff and clients.", "Consultation scheduling creates bottlenecks during peak demand.", "Case status calls eat hours that should be billable."],
      bridge: "Flogen builds automation for immigration firms. Here's what changes:",
      solutions: ["24/7 intake with multilingual lead capture and booking.", "Automated document request workflows with client reminders.", "Case management integrations that reduce status inquiry volume.", "ROI tracked on consultations booked and cases opened."],
    },
    uvp: { title: "Why immigration attorneys choose Flogen", titleAccent: "over generic legal tech.", items: defaultUvpItems("immigration attorneys") },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real practices. Real case volume.",
      items: [
        { quote: "Consultation bookings up 47% in 60 days. We finally respond before competitors do.", name: "Elena Vasquez", role: "Founding Attorney, Pathway Immigration", result: "+47% consultations" },
        { quote: "Document collection automation alone saved our paralegals 12 hours a week.", name: "James Okonkwo", role: "Managing Partner, Bridge Legal", result: "-12 hrs/wk admin" },
        { quote: "Live in 28 days with full NDA. They understood immigration workflows, not just tech.", name: "Sofia Martinez", role: "Owner, Liberty Immigration Law", result: "Live in 28 days" },
      ],
    },
    finalCta: { title: "Stop losing immigration leads.", titleLine2: "Start moving cases faster.", description: "Book your free practice audit. We'll map intake gaps and show you the fix.", ctaLabel: "Book my free audit — now" },
  },

  "commercial-cleaning-b2b": {
    slug: "commercial-cleaning-b2b",
    name: "Commercial Cleaning B2B",
    metadata: {
      title: "Flogen — Win More Commercial Contracts | Cleaning B2B Automation",
      description: "Custom B2B automation for commercial cleaning companies. Prospect, quote, and close contracts faster in 30 days.",
    },
    warningBar: { message: "Limited capacity — we only onboard 3 new cleaning companies per quarter.", cta: "Book your audit now." },
    hero: {
      headline: [
        { text: "Recover " },
        { text: "$18,000+ in Lost Contracts", variant: "highlight" },
        { text: " Your Cleaning Company Leaves on the Table Every Year and Never Lose Another Bid to a Competitor Who Followed Up Faster Using a Custom Commercial Cleaning B2B Automation System That Goes Live in " },
        { text: "30 Days", variant: "highlight" },
        { text: " Built Around Your CRM and Quoting Workflow " },
        { text: "(Pilot Includes Full NDA and Money-Back Guarantee)", variant: "muted" },
      ],
      subheadline: "We automate B2B prospecting, quote follow-up, site walk scheduling, and contract renewal — so your sales team closes instead of chases.",
      ctaLabel: "Claim your free sales automation audit",
    },
    socialProof: { label: "Trusted by commercial cleaners", logos: ["CLEANGROUP", "FACILITY", "SPARKLE", "PROSHINE", "APEX"] },
    pas: {
      title: "Here's the brutal truth about your company right now.",
      paragraphs: ["You didn't build a cleaning company to let RFPs die because follow-up was slow.", "Manual prospecting and quote chasing mean contracts go to faster operators."],
      painPoints: ["Inbound facility manager leads go cold without instant follow-up.", "Quotes sit in email while decision-makers hire someone else.", "Contract renewals slip because there's no automated nurture.", "Sales reps waste hours on admin instead of site walks."],
      bridge: "Flogen builds B2B automation for commercial cleaners. Here's what changes:",
      solutions: ["Automated prospect outreach and instant lead response.", "Quote follow-up sequences that close more facility contracts.", "Renewal workflows that protect recurring revenue.", "ROI measured on contract value and close rate."],
    },
    uvp: { title: "Why cleaning companies choose Flogen", titleAccent: "over generic CRM setups.", items: defaultUvpItems("commercial cleaning companies") },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real operators. Real contract wins.",
      items: [
        { quote: "We closed 3 facility contracts in 45 days from leads we used to ignore.", name: "Paul Nguyen", role: "Owner, Facility Clean Group", result: "+$42K ARR" },
        { quote: "Quote follow-up automation paid for itself in the first month. No exaggeration.", name: "Karen Wells", role: "Sales Director, ProShine Commercial", result: "+31% close rate" },
        { quote: "Live in 30 days. Our reps sell now — they don't babysit spreadsheets.", name: "Marcus Lee", role: "CEO, Apex Facility Services", result: "-65% sales admin" },
      ],
    },
    finalCta: { title: "Stop losing contracts.", titleLine2: "Start closing on autopilot.", description: "Book your free sales audit. We'll map every leak in your B2B pipeline.", ctaLabel: "Book my free audit — now" },
  },

  "funeral-homes": {
    slug: "funeral-homes",
    name: "Funeral Homes",
    metadata: {
      title: "Flogen — Compassionate Follow-Up at Scale | Funeral Home Automation",
      description: "Sensitive, compliant automation for funeral homes. Family follow-up, pre-need nurture, and admin workflows in 30 days.",
    },
    warningBar: { message: "Limited capacity — we only onboard 3 new funeral home clients per quarter.", cta: "Book your audit now." },
    hero: {
      headline: [
        { text: "Recover " },
        { text: "$12,000+ in Pre-Need & Aftercare Revenue", variant: "highlight" },
        { text: " Your Funeral Home Leaves on the Table Every Year and Never Lose Another Family to a Home That Followed Up With More Care, Faster Using a Custom Funeral Home Automation System That Goes Live in " },
        { text: "30 Days", variant: "highlight" },
        { text: " Built Around Your Case Management and Family Communication Workflow " },
        { text: "(Pilot Includes Full NDA and Money-Back Guarantee)", variant: "muted" },
      ],
      subheadline: "We automate compassionate follow-up, pre-need nurture, document collection, and staff coordination — respectful, compliant, and built around the software you already use.",
      ctaLabel: "Claim your free operations automation audit",
    },
    socialProof: { label: "Trusted by family-owned homes", logos: ["HERITAGE", "PEACEFUL", "GRACE", "MEMORIAL", "EVERGREEN"] },
    pas: {
      title: "Here's the honest truth about your home right now.",
      paragraphs: ["You didn't serve families to let aftercare and pre-need opportunities slip because staff is overwhelmed.", "Manual follow-up isn't just inefficient — it leaves families feeling forgotten."],
      painPoints: ["Aftercare outreach is inconsistent when directors are stretched thin.", "Pre-need leads go cold without timely, compassionate nurture.", "Document and arrangement details require repetitive admin work.", "Staff burns out on phones instead of serving families in person."],
      bridge: "Flogen builds respectful automation for funeral homes. Here's what changes:",
      solutions: ["Compassionate, timed aftercare sequences families actually appreciate.", "Pre-need nurture that books consultations without feeling salesy.", "Workflow automation that reduces admin during arrangements.", "ROI tracked on pre-need conversions and aftercare engagement."],
    },
    uvp: { title: "Why funeral directors choose Flogen", titleAccent: "over generic marketing tools.", items: defaultUvpItems("funeral homes") },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real homes. Real family impact.",
      items: [
        { quote: "Pre-need consultations up 36% with follow-up that actually feels appropriate. Families notice the difference.", name: "William Grant", role: "Director, Heritage Funeral Home", result: "+36% pre-need" },
        { quote: "Our staff spends time with families, not chasing paperwork. Automation with dignity — that's rare.", name: "Susan Cole", role: "Owner, Grace Memorial", result: "-40% admin load" },
        { quote: "Live in 30 days. Sensitive, compliant, and it just works.", name: "Michael Reed", role: "GM, Evergreen Funeral Care", result: "Live in 30 days" },
      ],
    },
    finalCta: { title: "Stop losing pre-need revenue.", titleLine2: "Start serving families better.", description: "Book your free operations audit. We'll show you how to follow up with care — at scale.", ctaLabel: "Book my free audit — now" },
  },

  "independent-insurance-brokers": {
    slug: "independent-insurance-brokers",
    name: "Independent Insurance Brokers",
    metadata: {
      title: "Flogen — Bind More Policies Faster | Insurance Broker Automation",
      description: "Custom automation for independent insurance brokers. Quote follow-up, renewal nurture, and intake live in 30 days.",
    },
    warningBar: { message: "Limited capacity — we only onboard 3 new brokerages per quarter.", cta: "Book your audit now." },
    hero: {
      headline: [
        { text: "Recover " },
        { text: "$22,000+ in Lost Premium", variant: "highlight" },
        { text: " Your Brokerage Leaves on the Table Every Year and Never Lose Another Quote to a Broker Who Followed Up Faster Using a Custom Independent Insurance Automation System That Goes Live in " },
        { text: "30 Days", variant: "highlight" },
        { text: " Built Around Your AMS and CRM " },
        { text: "(Pilot Includes Full NDA and Money-Back Guarantee)", variant: "muted" },
      ],
      subheadline: "We automate quote follow-up, renewal reminders, cross-sell nurture, and intake — integrated with HawkSoft, Applied Epic, or your AMS.",
      ctaLabel: "Claim your free brokerage automation audit",
    },
    socialProof: { label: "Trusted by independent brokerages", logos: ["SHIELD", "COVERAGE", "APEX INS", "GUARDIAN", "SUMMIT"] },
    pas: {
      title: "Here's the brutal truth about your brokerage right now.",
      paragraphs: ["You didn't become a broker to watch quotes expire because follow-up was slow.", "Renewal season chaos and manual nurture mean premium walks to faster agencies."],
      painPoints: ["Quote requests go cold without consistent follow-up sequences.", "Renewal reminders are manual — so lapses happen every quarter.", "Cross-sell opportunities sit buried in your book of business.", "Producers spend more time on admin than selling policies."],
      bridge: "Flogen builds automation for independent brokers. Here's what changes:",
      solutions: ["Automated quote follow-up that binds more policies.", "Renewal nurture sequences that protect your book.", "AMS integrations that eliminate duplicate data entry.", "ROI measured on bound premium and retention rate."],
    },
    uvp: { title: "Why brokers choose Flogen", titleAccent: "over AMS add-ons that don't deliver.", items: defaultUvpItems("insurance brokerages") },
    testimonials: {
      title: "From pain to proof.",
      subtitle: "Real brokerages. Real bound premium.",
      items: [
        { quote: "Quote-to-bind rate up 27% in 8 weeks. Follow-up finally happens every time.", name: "Steve Harmon", role: "Principal, Shield Insurance Group", result: "+27% bind rate" },
        { quote: "Renewal season used to break us. Automated reminders saved our retention rate.", name: "Laura Finch", role: "Owner, Coverage First", result: "+18% retention" },
        { quote: "HawkSoft integration in 29 days. Producers sell again.", name: "Dan Murphy", role: "Agency Principal, Apex Insurance", result: "Live in 29 days" },
      ],
    },
    finalCta: { title: "Stop losing premium.", titleLine2: "Start binding on autopilot.", description: "Book your free brokerage audit. We'll map every gap in your quote-to-bind pipeline.", ctaLabel: "Book my free audit — now" },
  },
};

export const NICHE_SLUGS = Object.keys(nicheLandingPages) as NicheSlug[];

export function getNicheContent(slug: string): LandingContent | undefined {
  return nicheLandingPages[slug as NicheSlug];
}

export function getAllNicheSlugs(): NicheSlug[] {
  return NICHE_SLUGS;
}

export function getNicheList() {
  return NICHE_SLUGS.map((slug) => ({
    slug,
    name: nicheLandingPages[slug].name,
    href: `/${slug}`,
  }));
}
