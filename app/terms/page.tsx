"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Terms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/">
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
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="font-medium hover:text-[#4BB0E4] transition-colors">
              Features
            </Link>
            <Link href="/#about" className="font-medium hover:text-[#4BB0E4] transition-colors">
              About
            </Link>
            <Link href="/#modules" className="font-medium hover:text-[#4BB0E4] transition-colors">
              Modules
            </Link>
            <Link
              href="/#download"
              className="bg-gradient-to-r from-[#FFC84D] to-[#FF823D] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
            >
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
                href="/#features"
                className="font-medium hover:text-[#4BB0E4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/#about"
                className="font-medium hover:text-[#4BB0E4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#modules"
                className="font-medium hover:text-[#4BB0E4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Modules
              </Link>
              <Link
                href="/#download"
                className="bg-gradient-to-r from-[#FFC84D] to-[#FF823D] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#FFC84D] to-[#FF823D] text-white py-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-white/90 max-w-2xl">Last updated: March 17, 2024</p>
        </div>
      </div>

      {/* Terms Content */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Tally ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use
                of the Tally application, website, and services (collectively, the "Service"). By accessing or using the
                Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not
                access the Service.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">2. Use of the Service</h2>
              <p className="mb-4">
                Tally is an educational application designed to help children and young adults learn mathematics through
                interactive exercises and games. The Service is intended for educational purposes only.
              </p>
              <p className="mb-4">
                You agree to use the Service only for its intended purposes and in compliance with these Terms and all
                applicable laws and regulations. You may not use the Service in any way that could damage, disable,
                overburden, or impair the Service or interfere with any other party's use of the Service.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">3. Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you must provide accurate, complete, and current information.
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your
                account.
              </p>
              <p className="mb-4">
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password. We encourage you to use "strong" passwords (passwords that
                use a combination of upper and lower case letters, numbers, and symbols) with your account.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">4. Intellectual Property</h2>
              <p className="mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of Mhofu Creative Inc. and its licensors. The Service is protected by copyright, trademark, and
                other laws of both the United States and foreign countries. Our trademarks and trade dress may not be
                used in connection with any product or service without the prior written consent of Mhofu Creative Inc.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">5. User Content</h2>
              <p className="mb-4">
                Our Service may allow you to post, link, store, share and otherwise make available certain information,
                text, graphics, videos, or other material. You are responsible for the content that you post to the
                Service, including its legality, reliability, and appropriateness.
              </p>
              <p className="mb-4">
                By posting content to the Service, you grant us the right to use, modify, publicly perform, publicly
                display, reproduce, and distribute such content on and through the Service. You retain any and all of
                your rights to any content you submit, post, or display on or through the Service and you are
                responsible for protecting those rights.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">6. Subscriptions</h2>
              <p className="mb-4">
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a
                recurring and periodic basis, depending on the type of subscription plan you select. At the end of each
                period, your subscription will automatically renew under the same conditions unless you cancel it or we
                cancel it.
              </p>
              <p className="mb-4">
                You may cancel your subscription renewal either through your online account management page or by
                contacting our customer support team. A valid payment method is required to process the payment for your
                subscription. You shall provide accurate and complete billing information including full name, address,
                state, zip code, telephone number, and valid payment method information.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">7. Free Trial</h2>
              <p className="mb-4">
                We may, at our sole discretion, offer a subscription with a free trial for a limited period of time. You
                may be required to enter your billing information to sign up for the free trial. If you do enter your
                billing information when signing up for a free trial, you will not be charged by us until the free trial
                has expired.
              </p>
              <p className="mb-4">
                At any time and without notice, we reserve the right to (i) modify the terms and conditions of the free
                trial offer, or (ii) cancel such free trial offer.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">8. Changes to the Service</h2>
              <p className="mb-4">
                We reserve the right to withdraw or amend our Service, and any service or material we provide via the
                Service, in our sole discretion without notice. We will not be liable if for any reason all or any part
                of the Service is unavailable at any time or for any period.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">9. Changes to Terms</h2>
              <p className="mb-4">
                We may revise and update these Terms from time to time in our sole discretion. All changes are effective
                immediately when we post them, and apply to all access to and use of the Service thereafter. Your
                continued use of the Service following the posting of revised Terms means that you accept and agree to
                the changes.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">10. Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
              <p className="mb-4">
                Mhofu Creative Inc.
                <br />
                123 Math Avenue, Suite 456
                <br />
                Education City, CA 90210
                <br />
                Email: legal@tallyapp.com
                <br />
                Phone: +1 (555) 123-4567
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
              <Link href="/privacy" className="hover:text-[#4BB0E4] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-[#4BB0E4] transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-[#4BB0E4] transition-colors">
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

