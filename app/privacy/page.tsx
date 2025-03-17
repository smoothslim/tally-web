"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Privacy() {
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
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-white/90 max-w-2xl">Last updated: March 17, 2024</p>
        </div>
      </div>

      {/* Privacy Content */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                Mhofu Creative Inc. ("we," "our," or "us") respects your privacy and is committed to protecting it
                through our compliance with this policy. This Privacy Policy describes the types of information we may
                collect from you or that you may provide when you use the Tally application and our practices for
                collecting, using, maintaining, protecting, and disclosing that information.
              </p>
              <p className="mb-4">
                This policy applies to information we collect through the Tally application, in email, text, and other
                electronic communications sent through or in connection with the application.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">2. Children's Privacy</h2>
              <p className="mb-4">
                Our Service is directed to children under the age of 13. We do not knowingly collect personally
                identifiable information from children under 13 without verifiable parental consent. If you are a parent
                or guardian and you are aware that your child has provided us with personal information without your
                consent, please contact us so that we can take necessary actions.
              </p>
              <p className="mb-4">
                We comply with the Children's Online Privacy Protection Act (COPPA). For more information about COPPA
                and general tips about protecting children's online privacy, please visit the Federal Trade Commission
                website.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">3. Information We Collect</h2>
              <p className="mb-4">
                We collect several types of information from and about users of our application, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">
                  <strong>Personal Information:</strong> This may include a parent or guardian's name, email address,
                  and payment information when you subscribe to our premium services.
                </li>
                <li className="mb-2">
                  <strong>Usage Data:</strong> Information about how you use our application, including progress in
                  learning modules, time spent on exercises, and performance metrics.
                </li>
                <li className="mb-2">
                  <strong>Device Information:</strong> Information about your mobile device and internet connection,
                  including the device's unique device identifier, IP address, operating system, browser type, and
                  mobile network information.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">4. How We Collect Information</h2>
              <p className="mb-4">We collect information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">
                  Directly from you when you provide it to us, such as when you register for an account, subscribe to
                  our service, or contact us.
                </li>
                <li className="mb-2">
                  Automatically as you navigate through the application, including usage details, IP addresses, and
                  information collected through cookies and other tracking technologies.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">5. How We Use Your Information</h2>
              <p className="mb-4">We use information that we collect about you or that you provide to us:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">To provide, maintain, and improve our application and services.</li>
                <li className="mb-2">
                  To process and complete transactions, and send you related information, including purchase
                  confirmations and invoices.
                </li>
                <li className="mb-2">
                  To personalize your experience and deliver content and product offerings relevant to your interests.
                </li>
                <li className="mb-2">
                  To respond to your comments, questions, and requests, and provide customer service.
                </li>
                <li className="mb-2">
                  To send you technical notices, updates, security alerts, and support and administrative messages.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">6. Disclosure of Your Information</h2>
              <p className="mb-4">
                We may disclose aggregated information about our users, and information that does not identify any
                individual, without restriction. We may disclose personal information that we collect or you provide:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">To our subsidiaries and affiliates.</li>
                <li className="mb-2">
                  To contractors, service providers, and other third parties we use to support our business.
                </li>
                <li className="mb-2">
                  To comply with any court order, law, or legal process, including to respond to any government or
                  regulatory request.
                </li>
                <li className="mb-2">To enforce or apply our terms of use and other agreements.</li>
                <li className="mb-2">
                  If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
                  Mhofu Creative Inc., our customers, or others.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">7. Data Security</h2>
              <p className="mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from
                unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on
                secure servers behind firewalls.
              </p>
              <p className="mb-4">
                The safety and security of your information also depends on you. Where we have given you (or where you
                have chosen) a password for access to certain parts of our application, you are responsible for keeping
                this password confidential. We ask you not to share your password with anyone.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">8. Your Rights</h2>
              <p className="mb-4">
                You can review and change your personal information by logging into the application and visiting your
                account profile page. You may also send us an email to request access to, correct, or delete any
                personal information that you have provided to us. We cannot delete your personal information except by
                also deleting your user account.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">9. Changes to Our Privacy Policy</h2>
              <p className="mb-4">
                It is our policy to post any changes we make to our privacy policy on this page. If we make material
                changes to how we treat our users' personal information, we will notify you through a notice on the
                application's main page. The date the privacy policy was last revised is identified at the top of the
                page.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">10. Contact Information</h2>
              <p className="mb-4">
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:
              </p>
              <p className="mb-4">
                Mhofu Creative Inc.
                <br />
                123 Math Avenue, Suite 456
                <br />
                Education City, CA 90210
                <br />
                Email: privacy@tallyapp.com
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
              <Link href="/privacy" className="text-[#4BB0E4] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[#4BB0E4] transition-colors">
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

