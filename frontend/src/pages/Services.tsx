import { FaCar, FaTools, FaMoneyBillWave, FaExchangeAlt, FaShieldAlt, FaCarCrash } from 'react-icons/fa'

const Services = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary-800 py-16 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-lg">Comprehensive automotive services to meet all your needs</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Japan Auto Exchange, we provide a wide range of services to ensure your car buying and ownership experience is seamless and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <FaCar className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">New & Used Car Sales</h3>
              <p className="text-gray-600 mb-4">
                Browse our extensive inventory of new and pre-owned vehicles from top manufacturers. All our used cars undergo rigorous inspection to ensure quality.
              </p>
              <a href="/cars" className="text-primary font-medium hover:underline">View Inventory →</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <FaTools className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maintenance & Repairs</h3>
              <p className="text-gray-600 mb-4">
                Our certified technicians provide comprehensive maintenance and repair services to keep your vehicle running smoothly and safely.
              </p>
              <a href="/contact" className="text-primary font-medium hover:underline">Schedule Service →</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <FaMoneyBillWave className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financing Options</h3>
              <p className="text-gray-600 mb-4">
                We offer flexible financing solutions to fit your budget. Our finance experts will help you find the best rates and terms for your purchase.
              </p>
              <a href="/contact" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <FaExchangeAlt className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trade-In Services</h3>
              <p className="text-gray-600 mb-4">
                Looking to upgrade? We offer fair market value for your current vehicle when you trade it in for a new purchase at Japan Auto Exchange.
              </p>
              <a href="/contact" className="text-primary font-medium hover:underline">Get Estimate →</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Extended Warranties</h3>
              <p className="text-gray-600 mb-4">
                Protect your investment with our comprehensive extended warranty options, providing peace of mind for years to come.
              </p>
              <a href="/contact" className="text-primary font-medium hover:underline">Explore Plans →</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <FaCarCrash className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Insurance Services</h3>
              <p className="text-gray-600 mb-4">
                We partner with top insurance providers to offer competitive rates on auto insurance for your new vehicle.
              </p>
              <a href="/contact" className="text-primary font-medium hover:underline">Get Quote →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've streamlined our service process to make it as convenient and efficient as possible for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-3">Schedule</h3>
                <p className="text-gray-600">
                  Book your appointment online or by phone at a time that's convenient for you.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-primary">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-3">Diagnosis</h3>
                <p className="text-gray-600">
                  Our technicians will perform a thorough inspection and diagnose any issues.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-primary">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-3">Service</h3>
                <p className="text-gray-600">
                  We'll perform the necessary repairs or maintenance with quality parts and expert care.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-primary">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold mb-3">Delivery</h3>
                <p className="text-gray-600">
                  We'll return your vehicle in excellent condition, ready for the road ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of service packages designed to keep your vehicle in optimal condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-2xl font-bold">Basic Maintenance</h3>
                <div className="text-3xl font-bold text-primary mt-2">¥5,000</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Oil and Filter Change
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Tire Rotation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Fluid Level Check
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Battery Test
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Visual Brake Inspection
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/contact" className="btn btn-primary w-full">Schedule Service</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-primary transform scale-105">
              <div className="bg-primary p-6 text-center text-white">
                <h3 className="text-2xl font-bold">Comprehensive</h3>
                <div className="text-3xl font-bold mt-2">¥12,000</div>
                <div className="inline-block px-3 py-1 bg-white text-primary text-xs font-bold rounded-full mt-2">MOST POPULAR</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    All Basic Maintenance Services
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Air Filter Replacement
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Cabin Filter Replacement
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Brake Inspection & Service
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Multi-Point Inspection
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Wiper Blade Replacement
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/contact" className="btn btn-primary w-full">Schedule Service</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-2xl font-bold">Premium</h3>
                <div className="text-3xl font-bold text-primary mt-2">¥20,000</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    All Comprehensive Services
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Transmission Fluid Change
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Coolant Flush
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Fuel System Cleaning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Power Steering Flush
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Complimentary Car Wash
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/contact" className="btn btn-primary w-full">Schedule Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-3xl font-bold mb-2">Ready to Schedule a Service?</h2>
              <p className="text-white text-opacity-90">
                Contact us today to book an appointment or learn more about our services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
              </a>
              <a href="tel:+81-3-1234-5678" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
                Call Now: +81-3-1234-5678
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
