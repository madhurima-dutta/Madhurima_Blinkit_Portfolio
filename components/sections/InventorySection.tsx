"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Clock, Timer, MapPin, CheckCircle } from "lucide-react"

interface InventorySectionProps {
  addToCart: (item: string) => void
}

export default function InventorySection({ addToCart }: InventorySectionProps) {
  const experience = [
    {
      role: "Assistant Data Analyst",
      company: "Columbia Shipmanagement",
      duration: "Nov 2024 - Present",
      location: "Mumbai, India",
      achievements: [
        "40% reduction in manual labor through Python automation",
        "50% increase in data accuracy with SQL integration",
        "35% faster report generation for 80+ clients",
      ],
      badge: "🚀 Current Role",
    },
    {
      role: "Data Scientist Intern",
      company: "Evoastra Ventures",
      duration: "Sept 2024 - Oct 2024",
      location: "India",
      achievements: [
        "91.01% F1-score achievement with ML pipeline",
        "Predictive modeling for term deposit subscriptions",
        "Marketing insights optimization through data visualization",
      ],
      badge: "🎯 High Impact",
    },
    {
      role: "Subject Matter Expert",
      company: "Chegg",
      duration: "Jul 2022 - Jul 2024",
      location: "India",
      achievements: [
        "250+ Advanced Mathematics problems solved",
        "Expert explanations using LaTeX and Mathtype",
        "Enhanced conceptual clarity through visualizations",
      ],
      badge: "📚 Expert Level",
    },
  ]

  const quickFacts = [
    {
      title: "Delivery Time",
      value: "24 hrs/day",
      icon: Clock,
      color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    },
    {
      title: "Experience",
      value: "1+ years in tech",
      icon: Timer,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    },
    {
      title: "Service Area",
      value: "Mumbai 🏙️",
      icon: MapPin,
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Inventory 📦</h2>
        <p className="text-gray-600 dark:text-gray-300">Premium verified products in stock!</p>
      </div>

      {/* Education */}
      <Card className="border-2 border-green-400 dark:border-green-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-green-600" />
              <span className="dark:text-white">Education Inventory</span>
            </CardTitle>
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
              ✅ Premium Verified
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 className="font-bold text-lg dark:text-white">Master of Science in Mathematics</h4>
              <p className="text-gray-600 dark:text-gray-300">Indian Institute of Technology Jodhpur</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">June 2022 - June 2024</p>
              <Badge className="mt-2 bg-yellow-400 text-gray-800">CGPA: 8.49</Badge>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-bold text-lg dark:text-white">Bachelor of Science (Honours) in Mathematics</h4>
              <p className="text-gray-600 dark:text-gray-300">Acharya Prafulla Chandra College</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">June 2018 - June 2021</p>
              <Badge className="mt-2 bg-blue-400 text-white">CGPA: 9.61</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Facts */}
      <div className="grid md:grid-cols-3 gap-6">
        {quickFacts.map((fact, index) => (
          <Card key={index} className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${fact.color}`}>
                <fact.icon className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-lg dark:text-white">{fact.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{fact.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Experience Timeline */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <span className="dark:text-white">Work Experience</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-yellow-400 pl-6 pb-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-lg dark:text-white">{exp.role}</h4>
                      <Badge className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs">
                        {exp.badge}
                      </Badge>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.duration} • {exp.location}
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
