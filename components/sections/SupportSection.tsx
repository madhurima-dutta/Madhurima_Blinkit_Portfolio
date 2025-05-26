"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/ContactForm"
import ResumeDownloadButton from "@/components/ResumeDownloadButton"
import {
  Phone,
  Linkedin,
  Package,
  CheckCircle,
  Brain,
  Truck,
  Calendar,
  Headphones,
  MessageCircle,
  Mail,
} from "lucide-react"
import Image from "next/image"

export default function SupportSection() {
  const contactOptions = [
    {
      title: "Email Support",
      value: "madhurimadutta2001@gmail.com",
      icon: Mail,
      action: "mailto:madhurimadutta2001@gmail.com",
      badge: "📧 Instant Response",
    },
    {
      title: "Phone Support",
      value: "+91-8481016734",
      icon: Phone,
      action: "tel:+918481016734",
      badge: "📱 Quick Call",
    },
    {
      title: "LinkedIn Connect",
      value: "madhu-rima-dutta",
      icon: Linkedin,
      action: "https://www.linkedin.com/in/madhu-rima-dutta/",
      badge: "💼 Professional",
    },
  ]

  const resumeSteps = [
    { status: "Resume Received", completed: true, icon: CheckCircle },
    { status: "Analyzing with ATS", completed: true, icon: Brain },
    { status: "Delivered to Hiring Manager", completed: false, icon: Truck },
    { status: "Interview Scheduled", completed: false, icon: Calendar },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Live Order Support 📞</h2>
        <p className="text-gray-600 dark:text-gray-300">Hi, I'm your delivery agent. Let's connect!</p>
      </div>

      {/* Status Card */}
      <Card className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-600">
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="relative">
              <Image
                src="/images/madhurima-portfolio.png"
                alt="Madhurima"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg dark:text-white">Madhurima Dutta</h3>
              <p className="text-green-600 dark:text-green-400 font-medium">
                🟢 Online - Accepting Interview Slots Now
              </p>
              <Badge className="bg-yellow-400 text-gray-800 mt-2">
                <Headphones className="h-4 w-4 mr-1" />
                Ready for Delivery
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Options */}
      <div className="grid md:grid-cols-3 gap-6">
        {contactOptions.map((contact, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow cursor-pointer group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          >
            <CardHeader className="text-center">
              <div className="mx-auto bg-yellow-100 dark:bg-yellow-900 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                <contact.icon className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs">
                {contact.badge}
              </Badge>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <h4 className="font-bold dark:text-white">{contact.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{contact.value}</p>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800"
                onClick={() => window.open(contact.action, "_blank")}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Connect Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Live Resume Tracker */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-blue-600" />
            <span className="dark:text-white">Live Resume Tracker</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {resumeSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className={`p-2 rounded-full ${
                    step.completed
                      ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
                  }`}
                >
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p
                    className={`font-medium ${
                      step.completed ? "text-green-600 dark:text-green-400" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {step.status} {step.completed ? "✅" : "⏳"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center space-y-6 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-600 dark:to-orange-600 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-800">Want Data Delivered To You? 📊</h3>
        <p className="text-gray-700">Let's discuss how I can add value to your team!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <ResumeDownloadButton />
          <Button
            size="lg"
            variant="outline"
            className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Schedule Interview
          </Button>
        </div>
      </div>
    </div>
  )
}
