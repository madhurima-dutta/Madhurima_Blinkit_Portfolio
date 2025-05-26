"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ShoppingCart, Car, TrendingUp, Building } from "lucide-react"

interface ProjectsSectionProps {
  addToCart: (item: string) => void
}

export default function ProjectsSection({ addToCart }: ProjectsSectionProps) {
  const projects = [
    {
      title: "🚗 Advanced Vehicle Valuation System",
      description:
        "Predicted selling prices of cars using 8 ML regression models with KNN delivering best results (R² score: 0.0207)",
      technologies: ["Python", "Machine Learning", "Streamlit", "KNN", "Data Analysis"],
      liveUrl: "https://car-price-prediction-deployment.streamlit.app/",
      githubUrl: "https://github.com/madhurima-dutta/Car_Price_Predictor",
      icon: Car,
      badge: "🔥 Live Demo",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "📈 Risk Assessment of Top Indian Tech Companies",
      description:
        "Time series analysis on closing stock prices with 95% accuracy in predicting maximum losses via Monte Carlo Simulation",
      technologies: ["Python", "Time Series", "Monte Carlo", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/madhurima-dutta/Stock_Market_Analysis_and_Prediction",
      icon: TrendingUp,
      badge: "📊 Analytics",
      color: "from-green-400 to-green-600",
    },
    {
      title: "🏭 Inventory Management System",
      description:
        "PostgreSQL-based system with 10+ normalized tables for managing products, customers, transactions, and invoices",
      technologies: ["PostgreSQL", "Database Design", "SQL", "Normalization"],
      githubUrl: "https://github.com/madhurima-dutta/Inventory-Management-System",
      icon: Building,
      badge: "🗄️ Database",
      color: "from-purple-400 to-purple-600",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">🚀 Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300">Interactive demos and live applications</p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-yellow-400 dark:border-gray-700 dark:hover:border-yellow-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden"
          >
            {/* Project Header with Gradient */}
            <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full animate-pulse">
                    <project.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <Badge className="bg-white/20 text-white mt-2">{project.badge}</Badge>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-800"
                    onClick={() => addToCart(project.title)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>

                  <Button
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>

                  {project.liveUrl && (
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Stats */}
      <Card className="bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-600 dark:to-orange-600 text-gray-800">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold">3+</h3>
              <p className="text-sm">Featured Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">8+</h3>
              <p className="text-sm">Technologies Used</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">95%+</h3>
              <p className="text-sm">Accuracy Achieved</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
