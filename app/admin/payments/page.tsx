"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { isAdmin } from "@/lib/auth"
import { DollarSign, Users, TrendingUp, Search, Eye, Download } from "lucide-react"

// Mock data - replace with real API calls
const mockPayments = [
  {
    id: "pay_1234",
    amount: 2999,
    currency: "usd",
    status: "succeeded",
    customer: "student@university.edu",
    plan: "Pro",
    date: "2024-01-15",
    tutor: "tutor@university.edu",
  },
  {
    id: "pay_5678",
    amount: 1999,
    currency: "usd",
    status: "succeeded",
    customer: "jane@college.edu",
    plan: "Ultimate",
    date: "2024-01-14",
    tutor: "math_tutor@university.edu",
  },
]

export default function AdminPaymentsPage() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [payments, setPayments] = useState(mockPayments)

  useEffect(() => {
    // In a real app, you'd check authentication here
    // For now, we'll simulate admin check
    const userEmail = "admin@timewiseai.com" // This would come from your auth system
    setIsAuthorized(isAdmin(userEmail))
  }, [])

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-96">
          <CardHeader className="text-center">
            <CardTitle className="text-red-600">Access Denied</CardTitle>
            <CardDescription>You don't have permission to view this page.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const filteredPayments = payments.filter(
    (payment) =>
      payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.plan.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0)
  const successfulPayments = payments.filter((p) => p.status === "succeeded").length

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Dashboard</h1>
          <p className="text-gray-600">Monitor and manage all platform payments</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalRevenue / 100).toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Successful Payments</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{successfulPayments}</div>
              <p className="text-xs text-muted-foreground">98.5% success rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>View and manage all payment transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by email, payment ID, or plan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>

            {/* Payments Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Payment ID</th>
                    <th className="text-left py-3 px-4 font-medium">Customer</th>
                    <th className="text-left py-3 px-4 font-medium">Plan</th>
                    <th className="text-left py-3 px-4 font-medium">Amount</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Date</th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.map((payment) => (
                    <tr key={payment.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono text-sm">{payment.id}</td>
                      <td className="py-3 px-4">{payment.customer}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline">{payment.plan}</Badge>
                      </td>
                      <td className="py-3 px-4 font-medium">${(payment.amount / 100).toFixed(2)}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={payment.status === "succeeded" ? "default" : "destructive"}
                          className={payment.status === "succeeded" ? "bg-green-100 text-green-800" : ""}
                        >
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">{payment.date}</td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredPayments.length === 0 && (
              <div className="text-center py-8 text-gray-500">No payments found matching your search criteria.</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
