"use client"

import { useState, useEffect } from "react"
import MainPage from "./_components/Main"
import { FeaturesSectionDemo } from "./_components/Feauture"
import CTA from "./_components/CTA"
import PricingPage from "./_components/Pricing"
import Footer from "./_components/Footer"

export default function LandingPage() {
  const [, setIsScrolled] = useState(false)
  const [, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <MainPage />
        <FeaturesSectionDemo />
        <PricingPage />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}