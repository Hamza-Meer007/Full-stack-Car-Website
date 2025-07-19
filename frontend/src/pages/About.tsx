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
