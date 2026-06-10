/**
 * Canonical list of all 46 courses on The Cert Hub.
 *
 * Must stay in sync with EXPECTED_COURSES in scripts/verify-baseline.py.
 *
 * The `id` is the folder name (used in URLs).
 * The `slug` is for display.
 */

export const COURSES = [
  { id: "01-Scrum-Master",                          slug: "Scrum Master",                   icon: "🏃", category: "Project Management" },
  { id: "02-PMP",                                   slug: "PMP",                            icon: "🧭", category: "Project Management" },
  { id: "03-AWS-Cloud-Practitioner",                slug: "AWS Cloud Practitioner",         icon: "☁️", category: "Cloud, AI & Cybersecurity" },
  { id: "04-AWS-Solutions-Architect-Associate",     slug: "AWS Solutions Architect Assoc",  icon: "🏗️", category: "Cloud, AI & Cybersecurity" },
  { id: "07-AWS-AI-Practitioner",                   slug: "AWS AI Practitioner",            icon: "🤖", category: "Generative & Agentic AI" },
  { id: "05-Azure-Fundamentals",                    slug: "Azure Fundamentals",             icon: "🌥️", category: "Cloud, AI & Cybersecurity" },
  { id: "06-Azure-Administrator",                   slug: "Azure Administrator",            icon: "🛠️", category: "Cloud, AI & Cybersecurity" },
  { id: "08-Azure-AI-Engineer",                     slug: "Azure AI Engineer",              icon: "🧠", category: "Generative & Agentic AI" },
  { id: "09-CompTIA-Security-Plus",                 slug: "CompTIA Security+",              icon: "🛡️", category: "Cloud, AI & Cybersecurity" },
  { id: "11-ASCM-CPIM",                             slug: "ASCM CPIM",                      icon: "🏭", category: "Supply Chain & Operations" },
  { id: "10-ASCM-CSCP",                             slug: "ASCM CSCP",                      icon: "📦", category: "Supply Chain & Operations" },
  { id: "12-ASCM-CLTD",                             slug: "ASCM CLTD",                      icon: "🚛", category: "Supply Chain & Operations" },
  { id: "13-ISM-CPSM",                              slug: "ISM CPSM",                       icon: "🤝", category: "Supply Chain & Operations" },
  { id: "14-AI-Marketing-Foundations",              slug: "AI Digital Marketing Foundations",       icon: "📣", category: "AI Digital Marketing" },
  { id: "15-AI-Marketing-Practitioner",             slug: "AI Digital Marketing Practitioner",      icon: "🎯", category: "AI Digital Marketing" },
  { id: "16-AI-Marketing-Strategist",               slug: "AI Digital Marketing Strategist",        icon: "📈", category: "AI Digital Marketing" },
  { id: "17-AI-Marketing-Entrepreneur",             slug: "AI Digital Marketing Entrepreneur",      icon: "💼", category: "AI Digital Marketing" },
  { id: "18-AI-Marketing-Capstone-Portfolio",       slug: "AI Digital Marketing Capstone Portfolio", icon: "🏆", category: "AI Digital Marketing" },
  { id: "19-Bitcoin-Cryptocurrency",                slug: "Bitcoin & Cryptocurrency",       icon: "₿",  category: "Bitcoin & E-Commerce" },
  { id: "20-E-Commerce",                            slug: "E-Commerce",                     icon: "🛒", category: "Bitcoin & E-Commerce" },
  // IT Systems Administration track
  { id: "21-CompTIA-A-Plus",                        slug: "CompTIA A+ (Core 1 + Core 2)",   icon: "🛠️", category: "IT Systems Administration" },
  { id: "22-CompTIA-Network-Plus",                  slug: "CompTIA Network+",               icon: "🌐", category: "IT Systems Administration" },
  { id: "23-CompTIA-Linux-Plus",                    slug: "CompTIA Linux+",                 icon: "🐧", category: "IT Systems Administration" },
  { id: "24-CompTIA-Server-Plus",                   slug: "CompTIA Server+",                icon: "🗄️", category: "IT Systems Administration" },
  { id: "25-Windows-Server-Hybrid-Admin",           slug: "Windows Server Hybrid Admin",    icon: "🪟", category: "IT Systems Administration" },
  { id: "26-Microsoft-Endpoint-Admin",              slug: "Microsoft Endpoint Administrator", icon: "💻", category: "IT Systems Administration" },
  { id: "27-Microsoft-Identity-Access-Admin",       slug: "Microsoft Identity & Access Admin", icon: "🪪", category: "IT Systems Administration" },
  // Generative & Agentic AI track
  { id: "28-Claude-Architect",                      slug: "Claude Architect",               icon: "🧬", category: "Generative & Agentic AI" },
  { id: "29-Prompt-Engineering-Specialist",         slug: "Prompt Engineering Specialist",  icon: "✍️", category: "Generative & Agentic AI" },
  { id: "30-Generative-AI-Engineer",                slug: "Generative AI Engineer",         icon: "⚡", category: "Generative & Agentic AI" },
  { id: "31-AWS-ML-Specialty",                      slug: "AWS ML Specialty (MLS-C01)",     icon: "🔬", category: "Generative & Agentic AI" },
  { id: "32-Google-AI-Pro",                         slug: "Google AI Pro",                  icon: "💎", category: "Generative & Agentic AI" },
  // Animation & Motion Design track (7-course ladder, foundation → advanced)
  { id: "33-Animation-Foundations",                 slug: "Animation Foundations",          icon: "🎬", category: "Animation & Motion Design" },
  { id: "34-2D-Digital-Animation",                  slug: "2D Digital Animation",           icon: "✏️", category: "Animation & Motion Design" },
  { id: "35-Motion-Graphics-UI-Animation",          slug: "Motion Graphics & UI Animation", icon: "🎞️", category: "Animation & Motion Design" },
  { id: "36-3D-Animation-Blender",                  slug: "3D Animation with Blender",      icon: "🧊", category: "Animation & Motion Design" },
  { id: "37-Advanced-Character-Animation",          slug: "Advanced Character Animation",   icon: "🎭", category: "Animation & Motion Design" },
  { id: "38-VFX-Compositing",                       slug: "VFX & Compositing",              icon: "✨", category: "Animation & Motion Design" },
  { id: "39-Game-UI-Animation",                     slug: "Game & UI Animation",            icon: "🕹️", category: "Animation & Motion Design" },
  // DevOps & Cloud-Native track
  { id: "40-CKA-Kubernetes",                        slug: "Certified Kubernetes Administrator (CKA)", icon: "⎈", category: "DevOps & Cloud-Native" },
  // Spoken Language Mastery track
  { id: "41-English-Language",  slug: "English Language Mastery",  icon: "🇬🇧", category: "Spoken Language Mastery" },
  { id: "42-Urdu-Language",     slug: "Urdu Language Mastery",     icon: "🇵🇰", category: "Spoken Language Mastery" },
  { id: "43-Persian-Language",  slug: "Persian Language Mastery",  icon: "🇮🇷", category: "Spoken Language Mastery" },
  { id: "44-Arabic-Language",   slug: "Arabic Language Mastery",   icon: "🇸🇦", category: "Spoken Language Mastery" },
  { id: "45-French-Language",   slug: "French Language Mastery",   icon: "🇫🇷", category: "Spoken Language Mastery" },
  // Quran & Islamic Studies track
  { id: "46-Quran-Recitation-Learning-Memorization", slug: "Quran Recitation, Learning & Memorization", icon: "📖", category: "Quran & Islamic Studies" },
];

export const COURSE_IDS = COURSES.map(c => c.id);

/**
 * Detect the course id from a URL path, e.g.
 *   "/01-Scrum-Master/Module-01-Agile-Mindset/Reading/" → "01-Scrum-Master"
 *   "/Resources/Books-and-Links/" → null (not a course)
 *
 * @param {string} pathname
 * @returns {string|null}
 */
export function courseIdFromPath(pathname) {
  const m = pathname.match(/^\/(?:Certification-Prep\/)?(\d{2}-[A-Za-z0-9-]+)\//);
  if (!m) return null;
  return COURSE_IDS.includes(m[1]) ? m[1] : null;
}

/**
 * @param {string} courseId
 * @returns {object|null}
 */
export function getCourse(courseId) {
  return COURSES.find(c => c.id === courseId) || null;
}
