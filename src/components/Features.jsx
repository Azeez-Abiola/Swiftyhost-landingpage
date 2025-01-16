const services = [
    {
      title: "Shared Hosting",
      description: "Get fast and secure hosting for small & medium sites.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      title: "Cloud Hosting",
      description: "Choose managed cloud for high-performing sites.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      title: "WordPress Hosting",
      description: "Manage your WordPress sites easily and with more freedom.",
      image: "/placeholder.svg?height=150&width=150",
    }
  ]
  
  export default function HostingServices() {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#ff5001] mb-4">
              Trusted by the owners of 2,000,000 domains
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Web Hosting Platform
            </h2>
          </div>
  
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-gray-900 font-medium hover:text-[#ff5001] transition-colors"
                >
                  Get Started
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }