import { Mail, Phone, MapPin } from "lucide-react"
import EmailForm from "../components/EmailForm"


export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our products or need a custom solution? Our team is here to help. Reach out to us using
            the contact information below or fill out the form, and we'll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Phone className="w-6 h-6 text-red-950" />
              <div>
                <span className="font-bold text-red-950">Phone</span>
                <p className="text-gray-600">713-893-9371</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg mb-4">
              <Mail className="w-6 h-6 text-red-950" />
              <div>
                <span className="font-bold text-red-950">Value Maintenance Products</span>
                <p className="text-gray-600">vmpsales@amequipment.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-6 h-6 text-red-950" />
              <div>
                <span className="font-bold text-red-950">Automation Request</span>
                <p className="text-gray-600">techsales@amequipment.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <MapPin className="w-6 h-6 text-red-950" />
              <div>
                <span className="font-bold text-red-950">Address</span>
                <p className="text-gray-600">28246 FM 2920 Rd. Waller, TX 77484 USA</p>
              </div>
            </div>
          </div>
        </div>
        <EmailForm />
      </div>
    </div>
  )
}

