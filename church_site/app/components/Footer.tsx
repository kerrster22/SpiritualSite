import { Facebook } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-deep-purple text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Sheringham Spiritualist Church</h3>
            <address className="not-italic">
              <p className="mb-2">Later Life Care</p>
              <p className="mb-2">Cromer Rd, Sheringham NR26 8RS</p>
              <p>
                Email:{" "}
                <a href="mailto:info@sheringhamspiritualistchurch.org" className="hover:underline">
                  info@sheringhamspiritualistchurch.org
                </a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/history" className="hover:underline transition-colors">
                  History
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/1522566388058837/?locale=en_GB" className="hover:text-lavender transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cream/20 text-center">
          <p>&copy; {new Date().getFullYear()} Sheringham Spiritualist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

