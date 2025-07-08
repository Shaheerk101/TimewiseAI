"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Crown, Zap } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function SubscribePage() {
  const searchParams = useSearchParams()
  const selectedPlan = searchParams.get("plan") || "pro"
  const [currentPlan, setCurrentPlan] = useState(selectedPlan)

  const plans = [
    {
      id: "free",
      name: "Free",
      price: 0,
      description: "Perfect for trying out the platform",
      features: [
        "Basic AI assistance",
        "Syllabus upload",
        "Basic calendar",
        "Community access",
        "Limited tutoring sessions",
      ],
      buttonText: "Get Started Free",
      popular: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: 9.99,
      description: "For serious students",
      features: [
        "Unlimited AI queries",
        "Advanced scheduling",
        "Priority tutor matching",
        "Study analytics",
        "Calendar export",
        "All free features",
      ],
      buttonText: "Upgrade to Pro",
      popular: true,
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: 19.99,
      description: "For academic excellence",
      features: [
        "Personal study coach",
        "Advanced AI features",
        "Custom study plans",
        "Priority support",
        "Advanced analytics",
        "All pro features",
      ],
      buttonText: "Go Ultimate",
      popular: false,
    },
  ]

  const handleSubscribe = (planId: string) => {
    // Here you would integrate with Stripe or your payment processor
    console.log(`Subscribing to ${planId} plan`)
    // Redirect to payment processing
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the plan that best fits your academic needs. Upgrade or downgrade anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.popular ? "border-2 border-blue-300 shadow-lg" : "border border-gray-200"
                } ${currentPlan === plan.id ? "ring-2 ring-blue-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {plan.id === "ultimate" && <Crown className="h-5 w-5 text-purple-500 mr-2" />}
                    {plan.id === "pro" && <Zap className="h-5 w-5 text-blue-500 mr-2" />}
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ${plan.price}
                    {plan.price > 0 && <span className="text-lg text-gray-500">/month</span>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleSubscribe(plan.id)}
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                        : plan.id === "ultimate"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          : "bg-gray-600 hover:bg-gray-700"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-gray-600 text-sm">
                  Our Free plan gives you access to basic features forever. You can upgrade when you're ready.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">How does billing work?</h3>
                <p className="text-gray-600 text-sm">
                  You're billed monthly on the date you subscribe. You can cancel anytime and won't be charged again.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600 text-sm">
                  We accept all major credit cards, debit cards, and PayPal through our secure payment processor.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
