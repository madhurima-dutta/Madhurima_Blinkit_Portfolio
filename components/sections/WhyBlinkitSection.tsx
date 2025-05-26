"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Code, TrendingUp, MapPinIcon, Rocket } from "lucide-react"
import Image from "next/image"

interface WhyBlinkitSectionProps {
  setActiveSection: (section: string) => void
}

export default function WhyBlinkitSection({ setActiveSection }: WhyBlinkitSectionProps) {
  const reasons = [
    {
      title: "📦 Fast Culture = Fast Data",
      description:
        "Just like Blinkit delivers groceries in minutes, I deliver data insights with lightning speed. No waiting around for reports!",
      icon: Zap,
    },
    {
      title: "⚙️ Engineering-Led = Data-Driven",
      description:
        "Blinkit's engineering excellence mirrors my approach to data - systematic, scalable, and solution-oriented.",
      icon: Code,
    },
    {
      title: "🌍 Impact @ Scale",
      description:
        "From serving millions of customers to analyzing massive datasets - I thrive in high-impact, scalable environments.",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Why Blinkit? 🚀</h2>
        <p className="text-gray-600 dark:text-gray-300">Delivery Zone Justification</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-lg transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="mx-auto bg-yellow-100 dark:bg-yellow-900 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <reason.icon className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <CardTitle className="text-lg dark:text-white">{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Delivery Coverage Map */}
      <Card className="bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-600 dark:to-orange-600">
        <CardHeader>
          <CardTitle className="text-center text-gray-800">
            <MapPinIcon className="h-6 w-6 inline mr-2" />
            Current Delivery Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="relative">
            <Image
              src="/images/blinkit-competition.png"
              alt="Delivery Coverage"
              width={400}
              height={200}
              className="mx-auto rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow">
              <p className="text-sm font-bold text-gray-800">📍 Currently delivering from Mumbai</p>
            </div>
          </div>
          <p className="text-gray-800 font-medium">Ready to expand delivery zones for the right opportunity!</p>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center space-y-6 bg-gray-800 dark:bg-gray-900 text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-bold">Ready to Start My Trial Delivery? 🚀</h3>
        <p className="text-gray-300">Experience the Blinkit speed in data analytics!</p>
        <Button
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3"
          onClick={() => setActiveSection("support")}
        >
          <Rocket className="h-5 w-5 mr-2" />
          Start Trial
        </Button>
      </div>
    </div>
  )
}
