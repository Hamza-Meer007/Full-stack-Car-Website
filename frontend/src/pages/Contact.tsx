import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields')
      return
    }
    
    // Simulate form submission
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary-800 py-16 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">Get in touch with our team for any inquiries</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {error && (
                  <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select Subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Car Purchase">Car Purchase</option>
                        <option value="Service Appointment">Service Appointment</option>
                        <option value="Financing">Financing</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Message <span className="text-red-500">*</span></label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary px-8 flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <FaMapMarkerAlt className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-gray-600">1-2-3 Shibuya, Shibuya-ku, Tokyo, Japan 150-0002</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <FaPhone className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+81-3-1234-5678" className="hover:text-primary">+81-3-1234-5678</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <FaEnvelope className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@Japan Auto Exchange.jp" className="hover:text-primary">info@Japan Auto Exchange.jp</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <FaClock className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7005713!3d35.6617773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2sShibuya%20Scramble%20Square!5e0!3m2!1sen!2sjp!4v1637123456789!5m2!1sen!2sjp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Japan Auto Exchange Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What are your business hours?</h3>
                <p className="text-gray-600">
                  Our showroom is open Monday through Friday from 9:00 AM to 6:00 PM, Saturday from 10:00 AM to 5:00 PM, and closed on Sundays. Our service center operates on the same schedule.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer test drives?</h3>
                <p className="text-gray-600">
                  Yes, we encourage test drives! You can schedule a test drive by contacting us via phone, email, or through our website. We recommend booking in advance to ensure the vehicle you're interested in is available.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What financing options do you offer?</h3>
                <p className="text-gray-600">
                  We offer a variety of financing options to suit different needs and budgets. Our finance team works with multiple lenders to secure competitive rates and terms. We also offer leasing options for those who prefer not to purchase outright.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Do you accept trade-ins?</h3>
                <p className="text-gray-600">
                  Yes, we accept trade-ins and offer fair market value for your current vehicle. Our appraisal process is transparent, and we're happy to explain how we determine the value of your trade-in.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What warranty options are available?</h3>
                <p className="text-gray-600">
                  New vehicles come with the manufacturer's warranty. For used vehicles, we offer various extended warranty options that can be tailored to your needs and budget. Our team can provide detailed information about coverage options during the purchase process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
