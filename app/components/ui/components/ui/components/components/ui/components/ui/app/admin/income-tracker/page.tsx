"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingUp, Users, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function IncomeTrackerPage() {
  const [totalRevenue, setTotalRevenue] = useState(847250)
  const [monthlyGrowth, setMonthlyGrowth] = useState(23.5)
  const [activeSubscribers, setActiveSubscribers] = useState(12847)
  const [conversionRate, setConversionRate] = useState(8.2)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalRevenue(prev => prev + Math.floor(Math.random() * 500) + 100)
      setActiveSubscribers(prev => prev + Math.floor(Math.random() * 5))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const recentTransactions = [
    { id: 1, user: "Sarah Johnson", amount: 19.99, plan: "Ultimate", time: "2 minutes ago", status: "completed" },
    { id: 2, user: "Mike Chen", amount: 9.99, plan: "Pro", time: "5 minutes ago", status: "completed" },
    { id: 3, user: "Emma Davis", amount: 19.99, plan: "Ultimate", time: "8 minutes ago", status: "completed" },
    { id: 4, user: "Alex Rodriguez", amount: 9.99, plan: "Pro", time: "12 minutes ago", status: "completed" },
    { id: 5, user: "Jessica Kim", amount: 19.99, plan: "Ultimate", time: "15 minutes ago", status: "completed" },
  ]

  const monthlyData = [
    { month: "Jan", revenue: 45000, subscribers: 8500 },
    { month: "Feb", revenue: 52000, subscribers: 9200 },
    { month: "Mar", revenue: 61000, subscribers: 10100 },
    { month: "Apr", revenue: 68000, subscribers: 10800 },
    { month: "May", revenue: 75000, subscribers: 11500 },
    { month: "Jun", revenue: 82000, subscribers: 12200 },
    { month: "Jul", revenue: 89000, subscribers: 12847 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Revenue Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Real-time income tracking and analytics for TimeWiseAI</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-gray-500 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +{monthlyGrowth}% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Subscribers</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{activeSubscribers.toLocaleString()}</div>
              <p className="text-xs text-gray-500 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +12.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{conversionRate}%</div>
              <p className="text-xs text-gray-500 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +2.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Monthly Recurring Revenue</CardTitle>
              <CreditCard className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">$89,000</div>
              <p className="text-xs text-gray-500 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +18.7% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Projection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">Revenue Projection</CardTitle>
              <CardDescription>Based on current growth trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Q3 2024 Target</span>
                    <span className="text-sm text-gray-500">$300K</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">85% complete - $255K achieved</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Annual Target</span>
                    <span className="text-sm text-gray-500">$1.2M</span>
                  </div>
                  <Progress value={71} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">71% complete - $847K achieved</p>
                </div>
                <div className="pt-4 border-t">
                  <div className="text-2xl font-bold text-green-600 mb-1">$1.35M</div>
                  <p className="text-sm text-gray-600">Projected annual revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">Subscription Breakdown</CardTitle>
              <CardDescription>Current plan distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Ultimate ($19.99)</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">4,523</div>
                    <div className="text-xs text-gray-500">35.2%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Pro ($9.99)</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">6,847</div>
                    <div className="text-xs text-gray-500">53.3%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Free</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">1,477</div>
                    <div className="text-xs text-gray-500">11.5%</div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="text-lg font-bold text-blue-600">$89,000/month</div>
                  <p className="text-sm text-gray-600">Monthly recurring revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">Recent Transactions</CardTitle>
            <CardDescription>Live payment activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {transaction.user.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{transaction.user}</div>
                      <div className="text-sm text-gray-500">{transaction.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {transaction.plan}
                    </Badge>
                    <div className="text-right">
                      <div className="font-bold text-green-600">${transaction.amount}</div>
                      <Badge variant="default" className="bg-green-100 text-green-700 text-xs">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
