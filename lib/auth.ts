// Simple admin authentication - replace with proper auth system
export function isAdmin(email?: string): boolean {
  // Replace with your actual admin email
  const adminEmails = [
    "admin@timewiseai.com",
    "your-email@example.com", // Replace with your actual email
  ]

  return adminEmails.includes(email || "")
}

export function requireAdmin(email?: string) {
  if (!isAdmin(email)) {
    throw new Error("Unauthorized: Admin access required")
  }
}
