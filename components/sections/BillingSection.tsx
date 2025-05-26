"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Github, ExternalLink, Car, TrendingUp, Building } from "lucide-react"

interface BillingSectionProps {
  addToCart: (item: string) => void
}

export default function BillingSection({ addToCart }: BillingSectionProps) {
  const filters = ["All", "Power BI", "SQL", "Python", "Machine Learning", "Dashboards"]

  const projects = [
    {
      title: "Advanced Vehicle Valuation System",
      description: "KNN model with R² score of 0.0207",
      skills: ["Python", "ML", "Streamlit"],
      developmentTime: "2 weeks",
      impact: "91% Accuracy",
      price: "₹Premium",
      priceColor: "bg-green-100 text-green-800",
      github: "https://github.com/madhurima-dutta/Car_Price_Predictor",
      demo: "https://car-price-prediction-deployment.streamlit.app/",
      icon: Car,
      emoji: "🚗",
    },
    {
      title: "Risk Assessment Tech Companies",
      description: "Stock analysis with predictive modeling",
      skills: ["Python", "Time Series", "Monte Carlo"],
      developmentTime: "3 weeks",
      impact: "95% Accuracy",
      price: "₹Enterprise",
      priceColor: "bg-blue-100 text-blue-800",
      github: "https://github.com/madhurima-dutta/Stock_Market_Analysis_and_Prediction",
      demo: null,
      icon: TrendingUp,
      emoji: "📈",
    },
    {
      title: "Inventory Management System",
      description: "Complete backend system with 10+ tables",
      skills: ["PostgreSQL", "Database Design"],
      developmentTime: "4 weeks",
      impact: "40% Efficiency",
      price: "₹Business",
      priceColor: "bg-purple-100 text-purple-800",
      github: "https://github.com/madhurima-dutta/Inventory-Management-System",
      demo: null,
      icon: Building,
      emoji: "🏭",
    },
  ]

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-2">
          Billing Summary
          <span className="text-2xl">🧾</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300">Your order details and project invoices</p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => (
          <Badge
            key={filter}
            variant="outline"
            className="cursor-pointer hover:bg-yellow-400 hover:text-gray-800 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-yellow-400 dark:hover:text-gray-800 px-4 py-2"
          >
            🔽 {filter}
          </Badge>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="border border-gray-200 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-400 transition-colors bg-white dark:bg-gray-800 shadow-sm"
          >
            <CardContent className="p-6">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-2xl animate-pulse">{project.emoji}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
                <Badge className={`${project.priceColor} font-medium px-3 py-1`}>{project.price}</Badge>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                {/* Skills Used */}
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Skills Used (Quantity)</p>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Development Time */}
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Development Time</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{project.developmentTime}</p>
                </div>

                {/* Impact/Results */}
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Impact/Results</p>
                  <p className="font-semibold text-green-600 dark:text-green-400">{project.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium"
                    onClick={() => addToCart(project.title)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Reorder Project
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>

                    {project.demo && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 dark:border-yellow-600">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📦</span>
            <h3 className="text-lg font-semibold dark:text-white">Order Summary</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Total Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">8+</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Technologies</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">95%+</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Success Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">💎</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Priceless Value</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
