/**
 * Canonical list of all 20 courses on The Cert Hub.
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
  { id: "07-AWS-AI-Practitioner",                   slug: "AWS AI Practitioner",            icon: "🤖", category: "Cloud, AI & Cybersecurity" },
  { id: "05-Azure-Fundamentals",                    slug: "Azure Fundamentals",             icon: "🌥️", category: "Cloud, AI & Cybersecurity" },
  { id: "06-Azure-Administrator",                   slug: "Azure Administrator",            icon: "🛠️", category: "Cloud, AI & Cybersecurity" },
  { id: "08-Azure-AI-Engineer",                     slug: "Azure AI Engineer",              icon: "🧠", category: "Cloud, AI & Cybersecurity" },
  { id: "09-CompTIA-Security-Plus",                 slug: "CompTIA Security+",              icon: "🛡️", category: "Cloud, AI & Cybersecurity" },
  { id: "11-ASCM-CPIM",                             slug: "ASCM CPIM",                      icon: "🏭", category: "Supply Chain & Operations" },
  { id: "10-ASCM-CSCP",                             slug: "ASCM CSCP",                      icon: "📦", category: "Supply Chain & Operations" },
  { id: "12-ASCM-CLTD",                             slug: "ASCM CLTD",                      icon: "🚛", category: "Supply Chain & Operations" },
  { id: "13-ISM-CPSM",                              slug: "ISM CPSM",                       icon: "🤝", category: "Supply Chain & Operations" },
  { id: "14-AI-Marketing-Foundations",              slug: "AI Marketing Foundations",       icon: "📣", category: "AI-Based Digital Marketing" },
  { id: "15-AI-Marketing-Practitioner",             slug: "AI Marketing Practitioner",      icon: "🎯", category: "AI-Based Digital Marketing" },
  { id: "16-AI-Marketing-Strategist",               slug: "AI Marketing Strategist",        icon: "📈", category: "AI-Based Digital Marketing" },
  { id: "17-AI-Marketing-Entrepreneur",             slug: "AI Marketing Entrepreneur",      icon: "💼", category: "AI-Based Digital Marketing" },
  { id: "18-AI-Marketing-Capstone-Portfolio",       slug: "AI Marketing Capstone Portfolio", icon: "🏆", category: "AI-Based Digital Marketing" },
  { id: "19-Bitcoin-Cryptocurrency",                slug: "Bitcoin & Cryptocurrency",       icon: "₿",  category: "Bitcoin & E-Commerce" },
  { id: "20-E-Commerce",                            slug: "E-Commerce",                     icon: "🛒", category: "Bitcoin & E-Commerce" },
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
