import { FaUsers, FaCar, FaAward, FaHandshake } from 'react-icons/fa'

const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary-800 py-16 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-lg">Learn more about Japan Auto Exchange and our mission</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Japan's Premier Car Dealership</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2000, Japan Auto Exchange has grown to become one of Japan's most trusted car dealerships. 
                We specialize in providing high-quality new and used vehicles to customers throughout Japan.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our mission is simple: to make car buying and ownership a pleasant experience. 
                We achieve this through transparent pricing, exceptional customer service, and a commitment to quality.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With showrooms in Tokyo, Osaka, and Nagoya, we offer a wide selection of vehicles from Japanese and international manufacturers. 
                Whether you're looking for a compact kei car for city driving or a luxury sedan for business, we have the perfect vehicle for you.
              </p>
              <div className="mt-8">
                <a href="/contact" className="btn btn-primary">Contact Us</a>
              </div>
            </div>
            <div>
              <img 
                src="/img/about/showroom.jpg" 
                alt="Japan Auto Exchange Showroom" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Japan Auto Exchange</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and the best car buying experience in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCar className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wide Selection</h3>
              <p className="text-gray-600">
                Choose from hundreds of quality vehicles, from compact kei cars to luxury sedans and SUVs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our knowledgeable staff provides personalized assistance to help you find the perfect vehicle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Every vehicle undergoes a rigorous inspection process to ensure it meets our high standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Our commitment to customer satisfaction has earned us a 98% approval rating from our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals is here to assist you with all your automotive needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/img/team/team-1.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Tanaka Hiroshi</h3>
                <p className="text-gray-500 mb-3">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 20 years of experience in the automotive industry, Hiroshi leads our team with passion and expertise.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/img/team/team-2.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Suzuki Akiko</h3>
                <p className="text-gray-500 mb-3">Sales Manager</p>
                <p className="text-gray-600">
                  Akiko's customer-first approach and deep knowledge of our inventory helps clients find their perfect match.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/img/team/team-3.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Yamamoto Ken</h3>
                <p className="text-gray-500 mb-3">Service Director</p>
                <p className="text-gray-600">
                  Ken ensures that every vehicle we sell meets our rigorous quality and performance standards.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/img/team/team-4.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Nakamura Yuki</h3>
                <p className="text-gray-500 mb-3">Customer Relations</p>
                <p className="text-gray-600">
                  Yuki's dedication to customer satisfaction ensures that our clients receive the best care before and after purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their Japan Auto Exchange experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I was looking for a reliable family car, and Japan Auto Exchange made the process so easy. Their staff was knowledgeable and helped me find the perfect Toyota for my needs."
              </p>
              <div className="flex items-center">
                <img 
                  src="/img/testimonial-1.jpg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Tanaka Hiroshi</h4>
                  <p className="text-gray-500 text-sm">Tokyo</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The financing options at Japan Auto Exchange were excellent. I got a great rate on my new Honda, and the paperwork was handled efficiently. Highly recommend!"
              </p>
              <div className="flex items-center">
                <img 
                  src="/img/testimonial-2.jpg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Suzuki Akiko</h4>
                  <p className="text-gray-500 text-sm">Osaka</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I've bought three cars from Japan Auto Exchange over the years, and each experience has been fantastic. Their after-sales service is exceptional, and they truly care about customer satisfaction."
              </p>
              <div className="flex items-center">
                <img 
                  src="/img/testimonial-3.jpg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Yamamoto Ken</h4>
                  <p className="text-gray-500 text-sm">Nagoya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
