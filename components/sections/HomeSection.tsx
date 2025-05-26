"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  FolderOpen,
  Briefcase,
  Phone,
  ShoppingCart,
  Rocket,
  MapPin,
  Clock,
  Award,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Database,
} from "lucide-react"
import Image from "next/image"

interface HomeSectionProps {
  setActiveSection: (section: string) => void
  addToCart: (item: string) => void
}

export default function HomeSection({ setActiveSection, addToCart }: HomeSectionProps) {
  const productCards = [
    {
      title: "Skills Inventory",
      icon: Brain,
      description: "Premium Python, SQL & ML",
      badge: "🔥 Hot Selling!",
      action: () => setActiveSection("products"),
      gradient: "from-purple-400 to-purple-600",
    },
    {
      title: "Project Portfolio",
      icon: FolderOpen,
      description: "3 Featured Projects",
      badge: "⭐ Bestseller",
      action: () => setActiveSection("billing"),
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Data Analytics",
      icon: TrendingUp,
      description: "Advanced Insights & Reports",
      badge: "📊 Premium",
      action: () => setActiveSection("products"),
      gradient: "from-green-400 to-green-600",
    },
    {
      title: "Work Experience",
      icon: Briefcase,
      description: "Columbia Shipmanagement",
      badge: "🚀 Fresh Stock",
      action: () => setActiveSection("inventory"),
      gradient: "from-orange-400 to-orange-600",
    },
    {
      title: "Database Solutions",
      icon: Database,
      description: "PostgreSQL & System Design",
      badge: "🗄️ Enterprise",
      action: () => setActiveSection("billing"),
      gradient: "from-indigo-400 to-indigo-600",
    },
    {
      title: "Contact Support",
      icon: Phone,
      description: "Live Chat Available",
      badge: "💬 24/7 Support",
      action: () => setActiveSection("support"),
      gradient: "from-pink-400 to-pink-600",
    },
  ]

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <div className="text-center space-y-12 py-16">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <Image
            src="/images/madhurima-portfolio.png"
            alt="Madhurima Dutta"
            width={240}
            height={240}
            className="relative rounded-full border-4 border-yellow-400 shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-3 -right-3 bg-green-500 text-white p-3 rounded-full shadow-lg">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div className="absolute -top-3 -left-3 bg-yellow-400 text-gray-800 p-2 rounded-full animate-spin-slow">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-yellow-600 to-orange-600 bg-clip-text text-transparent leading-tight">
              Delivering Data Insights
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-yellow-600 dark:text-yellow-400 flex items-center justify-center gap-3">
              in 10 Minutes or Less!
              <span className="animate-bounce">⚡</span>
            </h2>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-200 dark:border-yellow-600">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi! I'm <span className="font-bold text-yellow-600 dark:text-yellow-400">Madhurima Dutta</span>, your data
              delivery expert. Ready to serve fresh insights with the speed of Blinkit!
              <span className="inline-block ml-2 text-2xl">🛵📊</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <Badge className="bg-yellow-400 text-gray-800 px-6 py-3 text-lg hover:scale-105 transition-transform cursor-pointer">
            <MapPin className="h-5 w-5 mr-2" />
            Mumbai, India
          </Badge>
          <Badge className="bg-green-500 text-white px-6 py-3 text-lg hover:scale-105 transition-transform cursor-pointer">
            <Clock className="h-5 w-5 mr-2" />
            Available 24/7
          </Badge>
          <Badge className="bg-blue-500 text-white px-6 py-3 text-lg hover:scale-105 transition-transform cursor-pointer">
            <Award className="h-5 w-5 mr-2" />
            1+ Years Experience
          </Badge>
        </div>
      </div>

      {/* Product Cards */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-bold text-gray-800 dark:text-white">Featured Services</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Premium data solutions delivered at lightning speed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCards.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2"
              onClick={item.action}
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

                <CardHeader className="relative p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">{item.badge}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </CardHeader>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium group-hover:scale-105 transition-transform"
                  onClick={(e) => {
                    e.stopPropagation()
                    addToCart(item.title)
                  }}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-3xl p-12 text-center space-y-8 shadow-2xl">
        <h3 className="text-3xl font-bold text-gray-800">Portfolio Highlights</h3>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-800">3+</div>
            <div className="text-gray-700 font-medium">Live Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-800">95%+</div>
            <div className="text-gray-700 font-medium">Accuracy Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-800">8+</div>
            <div className="text-gray-700 font-medium">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-800">24/7</div>
            <div className="text-gray-700 font-medium">Availability</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Ready to Start Your Data Order?</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get premium data insights delivered faster than your favorite snacks! Experience the Blinkit speed in
            analytics.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg group"
            onClick={() => setActiveSection("billing")}
          >
            <Rocket className="h-6 w-6 mr-2 group-hover:animate-bounce" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-gray-800 px-8 py-4 text-lg"
            onClick={() => setActiveSection("support")}
          >
            <Phone className="h-6 w-6 mr-2" />
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  )
}
