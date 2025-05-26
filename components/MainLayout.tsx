"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { ThemeProvider } from "@/components/ThemeProvider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HomeSection from "@/components/sections/HomeSection"
import InventorySection from "@/components/sections/InventorySection"
import BillingSection from "@/components/sections/BillingSection"
import ProductsSection from "@/components/sections/ProductsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import WhyBlinkitSection from "@/components/sections/WhyBlinkitSection"
import SupportSection from "@/components/sections/SupportSection"
import Image from "next/image"

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false)
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const addToCart = (item: string) => {
    setCartItems((prev) => [...prev, item])
  }

  const clearCart = () => {
    setCartItems([])
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <Image
              src="/images/blinkit-delivery.png"
              alt="Delivery Animation"
              width={200}
              height={200}
              className="animate-bounce"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Delivering Resume...</h2>
            <Progress value={progress} className="w-80 h-3" />
            <p className="text-gray-700">{progress}% Complete</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} cartItems={cartItems} />

        <main className="container mx-auto px-4 py-8">
          {activeSection === "home" && <HomeSection setActiveSection={setActiveSection} addToCart={addToCart} />}
          {activeSection === "inventory" && <InventorySection addToCart={addToCart} />}
          {activeSection === "billing" && <BillingSection addToCart={addToCart} />}
          {activeSection === "products" && <ProductsSection addToCart={addToCart} />}
          {activeSection === "projects" && <ProjectsSection addToCart={addToCart} />}
          {activeSection === "why-blinkit" && <WhyBlinkitSection setActiveSection={setActiveSection} />}
          {activeSection === "support" && <SupportSection />}
        </main>

        {/* Cart Notification */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-yellow-400 dark:bg-yellow-500 text-gray-800 p-4 rounded-lg shadow-lg animate-bounce">
            <div className="flex items-center space-x-2">
              <span className="font-medium">{cartItems.length} items in cart</span>
              <button
                onClick={clearCart}
                className="bg-white px-2 py-1 rounded text-xs hover:bg-gray-100 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </ThemeProvider>
  )
}
