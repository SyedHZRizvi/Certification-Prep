/**
 * Three-tier role hierarchy + permission matrix for The Cert Hub.
 *
 *   Super-user        — owner (`syed@transcrypts.com`, hardcoded in superusers.js)
 *   Administrator     — trusted team member; can manage students but not other admins or supers
 *   Student           — paying user; can only access their entitled courses
 *
 * The hardcoded super-user is the ONLY way to create or modify another super-user
 * (and even then, only by editing functions/lib/superusers.js + redeploying).
 * The /api/admin/users endpoint will refuse to set role: "superuser".
 */

export const ROLES = {
  SUPERUSER: "superuser",
  ADMINISTRATOR: "administrator",
  STUDENT: "student",
};

export const ROLE_ORDER = {
  [ROLES.SUPERUSER]: 3,
  [ROLES.ADMINISTRATOR]: 2,
  [ROLES.STUDENT]: 1,
};

/**
 * Permission matrix. Each row = action; each column = role that can perform it.
 *
 * Used by the admin API to authorize requests AND by the Manage-Users UI to
 * render/hide buttons appropriately.
 */
export const PERMISSIONS = {
  // Course access
  access_any_course:           [ROLES.SUPERUSER, ROLES.ADMINISTRATOR],
  access_entitled_courses:     [ROLES.SUPERUSER, ROLES.ADMINISTRATOR, ROLES.STUDENT],

  // Admin panel
  open_admin_panel:            [ROLES.SUPERUSER, ROLES.ADMINISTRATOR],

  // User management — what actions a role can perform on OTHER users
  create_student:              [ROLES.SUPERUSER, ROLES.ADMINISTRATOR],
  create_administrator:        [ROLES.SUPERUSER],
  delete_student:              [ROLES.SUPERUSER, ROLES.ADMINISTRATOR],
  delete_administrator:        [ROLES.SUPERUSER],
  reset_student_password:      [ROLES.SUPERUSER, ROLES.ADMINISTRATOR],
  reset_admin_password:        [ROLES.SUPERUSER],
  disable_student:             [ROLES.SUPERUSER, ROLES.ADMINISTRATOR],
  disable_administrator:       [ROLES.SUPERUSER],
  modify_student_courses:      [ROLES.SUPERUSER, ROLES.ADMINISTRATOR],
  modify_admin_courses:        [ROLES.SUPERUSER],

  // Self
  change_own_password:         [ROLES.SUPERUSER, ROLES.ADMINISTRATOR, ROLES.STUDENT],
};

/**
 * Check if a role can perform an action.
 */
export function can(role, action) {
  const allowed = PERMISSIONS[action];
  if (!allowed) return false;
  return allowed.includes(role);
}

/**
 * Check if `actorRole` can perform an action on a `targetRole`.
 *
 * Rule: actor's privilege must be strictly higher than target's.
 *   - Super-user can act on administrator and student
 *   - Administrator can act on student only (NOT other administrators or super-user)
 *   - Student cannot act on anyone but themselves
 *
 * Special case: nobody (including the super-user via API) can modify the
 * hardcoded super-user. That check is enforced in kv.js with isSuperUser().
 */
export function canActOn(actorRole, targetRole) {
  return (ROLE_ORDER[actorRole] || 0) > (ROLE_ORDER[targetRole] || 0);
}

/**
 * Privilege matrix for display in the UI. Each row describes a capability.
 * Used by Manage-Users/index.html to render an at-a-glance reference table.
 */
export const PRIVILEGE_MATRIX = [
  { capability: "Access ANY course content",       superuser: "✅", administrator: "✅", student: "Only entitled courses" },
  { capability: "Open the Manage Users admin panel", superuser: "✅", administrator: "✅", student: "❌" },
  { capability: "Create student accounts",          superuser: "✅", administrator: "✅", student: "❌" },
  { capability: "Create administrator accounts",    superuser: "✅", administrator: "❌", student: "❌" },
  { capability: "Delete student accounts",          superuser: "✅", administrator: "✅", student: "❌" },
  { capability: "Delete administrator accounts",    superuser: "✅", administrator: "❌", student: "❌" },
  { capability: "Reset a student's password",       superuser: "✅", administrator: "✅", student: "❌" },
  { capability: "Reset an administrator's password", superuser: "✅", administrator: "❌", student: "❌" },
  { capability: "Disable / re-enable a student account", superuser: "✅", administrator: "✅", student: "❌" },
  { capability: "Disable / re-enable an administrator account", superuser: "✅", administrator: "❌", student: "❌" },
  { capability: "Add or remove courses from a student", superuser: "✅", administrator: "✅", student: "❌" },
  { capability: "Add or remove courses from an administrator", superuser: "✅", administrator: "❌", student: "❌" },
  { capability: "Change own password",              superuser: "✅", administrator: "✅", student: "✅" },
  { capability: "Promote anyone to super-user",     superuser: "❌ (hardcoded in superusers.js — requires code deploy)", administrator: "❌", student: "❌" },
];
