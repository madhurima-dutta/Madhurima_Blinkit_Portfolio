"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, Plus, Truck, ShoppingCart } from "lucide-react"

interface ProductsSectionProps {
  addToCart: (item: string) => void
}

export default function ProductsSection({ addToCart }: ProductsSectionProps) {
  const skills = [
    { name: "Python", level: 95, badge: "🔥 Hot Selling!", rating: 5, projects: 8 },
    { name: "SQL", level: 90, badge: "⭐ Bestseller", rating: 5, projects: 12 },
    { name: "Power BI", level: 88, badge: "📊 Premium", rating: 5, projects: 6 },
    { name: "Machine Learning", level: 85, badge: "🧠 AI Powered", rating: 4, projects: 5 },
    { name: "Data Visualization", level: 92, badge: "🎨 Creative", rating: 5, projects: 10 },
    { name: "Statistics", level: 94, badge: "📈 Analytics Pro", rating: 5, projects: 15 },
  ]

  const comboPacks = [
    {
      name: "Data Science Combo",
      skills: ["Python", "Pandas", "Machine Learning"],
      discount: "20% OFF",
      badge: "🔥 Bestseller Combo!",
    },
    {
      name: "Analytics Pro Pack",
      skills: ["SQL", "Power BI", "Statistics"],
      discount: "25% OFF",
      badge: "⚡ Fastest Delivery!",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Featured Products 🛍️</h2>
        <p className="text-gray-600 dark:text-gray-300">Premium skills with fastest delivery!</p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-400 dark:border-gray-700 dark:hover:border-yellow-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg dark:text-white">{skill.name}</CardTitle>
                <Badge className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs">
                  {skill.badge}
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < skill.rating ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Rated {skill.rating}⭐ by {skill.projects} Projects
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="dark:text-gray-300">Proficiency Level</span>
                  <span className="font-bold dark:text-white">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Used in {skill.projects} projects</span>
                <Badge variant="outline" className="text-green-600 dark:text-green-400 dark:border-green-600">
                  <Truck className="h-3 w-3 mr-1" />
                  Fast Delivery
                </Badge>
              </div>

              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800"
                onClick={() => addToCart(skill.name)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add to Skill Pack
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Combo Packs */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Combo Packs 🎁</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {comboPacks.map((combo, index) => (
            <Card
              key={index}
              className="border-2 border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-900/20"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="dark:text-white">{combo.name}</CardTitle>
                  <Badge className="bg-red-500 text-white">{combo.discount}</Badge>
                </div>
                <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 w-fit">
                  {combo.badge}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {combo.skills.map((skill) => (
                      <Badge key={skill} className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => addToCart(combo.name)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Order Combo Pack
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
