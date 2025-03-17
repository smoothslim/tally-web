"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Download, ChevronDown, Star } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("multiplication")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const moduleColors = {
    addition: "#E85F79",
    subtraction: "#FDC92D",
    division: "#47DF57",
    multiplication: "#4BB0E4",
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-O5gZZ6WUBo80pZ6Cn5hzpwYgjF02xh.png"
              alt="Tally Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-bold text-2xl bg-gradient-to-r from-[#FFC84D] to-[#FF823D] text-transparent bg-clip-text">
              Tally
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="font-medium hover:text-[#4BB0E4] transition-colors">
              Features
            </Link>
            <Link href="#about" className="font-medium hover:text-[#4BB0E4] transition-colors">
              About
            </Link>
            <Link href="#modules" className="font-medium hover:text-[#4BB0E4] transition-colors">
              Modules
            </Link>
            <Link
              href="#download"
              className="bg-gradient-to-r from-[#FFC84D] to-[#FF823D] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow flex items-center gap-2"
            >
              <Download size={16} />
              Download
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white py-4 px-4 shadow-lg"
          >
            <nav className="flex flex-col gap-4">
              <Link
                href="#features"
                className="font-medium hover:text-[#4BB0E4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#about"
                className="font-medium hover:text-[#4BB0E4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#modules"
                className="font-medium hover:text-[#4BB0E4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Modules
              </Link>
              <Link
                href="#download"
                className="bg-gradient-to-r from-[#FFC84D] to-[#FF823D] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow text-center flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download size={16} />
                Download
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex-1 overflow-hidden bg-gradient-to-r from-[#FFC84D] to-[#FF823D] text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-6">
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium text-white">Math Learning Made Fun</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Master Math with <br />
                  <span className="text-white drop-shadow-md">Tally</span>
                </h1>
                <p className="text-lg text-white/90 max-w-md">
                  Start with multiplication tables and memory games. Soon expand to addition, subtraction, and division.
                  Perfect for children and young adults.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#download"
                    className="bg-white text-[#FF823D] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow text-center flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Download Now
                  </Link>
                  <Link
                    href="#learn-more"
                    className="border border-white/50 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors text-center flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ChevronDown size={16} />
                  </Link>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} fill="white" className="text-white" />
                    ))}
                  </div>
                  <span className="text-sm text-white/90">
                    <span className="font-bold">4.9</span> App Store Rating
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image with App Preview */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative order-1 md:order-2"
            >
              <div className="relative z-10 flex justify-center">
                <div className="relative w-[280px] md:w-[320px]">
                  {/* Floating Math Icons */}
                  <motion.div
                    className="absolute -top-10 -left-10 z-20"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201-Xuv5zJGNVxjE5xPwXimcoJctuTGB7j.svg"
                      width={60}
                      height={60}
                      alt="Addition"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -top-5 right-0 z-20"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 4,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202-WXQ6cqh6qBjO9my6fAXHgQ96qTYFLA.svg"
                      width={60}
                      height={60}
                      alt="Subtraction"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-5 -left-5 z-20"
                    animate={{
                      y: [0, 8, 0],
                      rotate: [0, -3, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%204-OZCjpSGsqbpgEmCup462a2sgp1jzHW.svg"
                      width={60}
                      height={60}
                      alt="Division"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-10 right-0 z-20"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 4,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%203-w6dnHf9IM4HFuv45Sy3OmHv2TufbHc.svg"
                      width={60}
                      height={60}
                      alt="Multiplication"
                    />
                  </motion.div>

                  {/* Phone Mockup */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=600&width=300"
                        width={300}
                        height={600}
                        alt="Tally App Screenshot"
                        className="rounded-[32px] shadow-2xl border-8 border-white"
                      />

                      {/* App Content Overlay */}
                      <div className="absolute inset-8 rounded-[24px] bg-white flex flex-col">
                        <div className="bg-[#4BB0E4] p-4 rounded-t-[20px] text-white font-bold text-center">
                          Multiplication Tables
                        </div>
                        <div className="flex-1 p-4 flex flex-col items-center justify-center">
                          <div className="grid grid-cols-3 gap-3 w-full max-w-[200px]">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                              <motion.div
                                key={num}
                                whileHover={{ scale: 1.05 }}
                                className="aspect-square bg-[#4BB0E4]/10 rounded-lg flex items-center justify-center font-bold text-[#4BB0E4]"
                              >
                                {num}
                              </motion.div>
                            ))}
                          </div>
                          <div className="mt-4 text-center text-sm text-gray-500">Tap a number to practice</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Module Tabs */}
        <div className="bg-white/10 backdrop-blur-sm py-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(moduleColors).map(([module, color]) => (
                <motion.button
                  key={module}
                  onClick={() => handleTabChange(module)}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                    activeTab === module
                      ? "bg-white text-gray-800 shadow-md"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                  {module.charAt(0).toUpperCase() + module.slice(1)}
                  {activeTab !== module && <span className="text-xs ml-1">(Coming Soon)</span>}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tally makes learning math fun and engaging with interactive games and exercises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-[#4BB0E4] mb-4 flex items-center justify-center text-white">
                <span className="text-xl font-bold">×</span>
              </div>
              <h3 className="text-xl font-bold mb-2">9×9 Multiplication Board</h3>
              <p className="text-gray-600">
                Practice multiplication tables from 1 to 9 with our interactive board. Track your progress and improve
                your speed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-[#4BB0E4] mb-4 flex items-center justify-center text-white">
                <span className="text-xl font-bold">🎮</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Memory Game</h3>
              <p className="text-gray-600">
                Test your multiplication knowledge with our fun memory matching game. Match equations with their
                answers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#FFC84D] to-[#FF823D] mb-4 flex items-center justify-center text-white">
                <span className="text-xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2">More Coming Soon</h3>
              <p className="text-gray-600">
                Addition, subtraction, and division modules are on the way. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-O5gZZ6WUBo80pZ6Cn5hzpwYgjF02xh.png"
                alt="Tally Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-xl">Tally</span>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-[#4BB0E4] transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-[#4BB0E4] transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-[#4BB0E4] transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Mhofu Creative Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

