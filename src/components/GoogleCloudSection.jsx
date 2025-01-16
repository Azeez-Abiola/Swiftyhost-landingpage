export default function GoogleCloudSection() {
    return (
      <section className="bg-[#F8F9FF] py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Our platform is powered by Google Cloud
                </h2>
                <p className="text-gray-600">
                  We operate on Google Cloud to create a powerful and technically superior hosting service.
                </p>
              </div>
  
              <div className="grid gap-8">
                {/* SSD Storage Feature */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#ff5001] p-3 rounded-lg">
                      <svg 
                        className="w-6 h-6 text-white" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="8" y="8" width="8" height="8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">
                        SSD persistent storage
                      </h3>
                      <p className="text-gray-600">
                        Distributed storage running on SSD disks for optimal speed and a high-level of redundancy.
                      </p>
                    </div>
                  </div>
                </div>
  
                {/* Network Feature */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#ff5001] p-3 rounded-lg">
                      <svg 
                        className="w-6 h-6 text-white" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <path d="M12 12v9" />
                        <path d="m8 17 4 4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">
                        Ultra-fast network
                      </h3>
                      <p className="text-gray-600">
                        Google is known for maintaining one of the fastest and best-connected networks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  
              <button className="inline-flex items-center text-white bg-[#ff5001] px-6 py-3 rounded-lg hover:bg-[#ff5001] transition-colors">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
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
              </button>
            </div>
  
            {/* Right Column - Illustration */}
            <div className="relative">
              <img
                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-16%20at%2013.14.07_8af09b25.jpg-o5dKTfw2jcOSjIkrD4S01d13zpty0X.jpeg`}
                alt="Google Cloud Platform Features"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }