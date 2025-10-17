import Image from 'next/image'

export default function ProductsSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="px-6 md:px-8 lg:px-12">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500 text-center mb-12 md:mb-16">
            Discover Our Smart <span className="text-white">Products</span>
          </h2>

          {/* Carousel Container */}
          <div className="max-w-7xl mx-auto relative">
            {/* Left Card - Partial (Image only) */}
            <div className="absolute -left-12 top-0 w-[200px] lg:w-[250px] h-[75%] hidden lg:block pr-[10px]">
              <div className="bg-gray-200 rounded-3xl overflow-hidden h-full">
                {/* Image placeholder only - pas de texte */}
                <div className="bg-gray-300 h-full w-full">
                  {/* Image sera ajoutée ici */}
                </div>
              </div>
            </div>

            {/* Main Product Card */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
                <div className="p-8 md:p-10 lg:p-12">
                <div className="flex items-center">
                  {/* Left side - Text */}
                  <div className="flex-shrink-0 w-1/3">
                    <h3 className="text-black font-bold text-base mb-1">
                      HomePod (2nd generation)
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Improved internals, newer chip, updated features
                    </p>
                  </div>

                  {/* Center - Image */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative bg-gray-300 rounded-2xl w-[240px] h-[280px] md:w-[280px] md:h-[320px] overflow-hidden">
                      <Image
                        src="/primarydiscoverproduct.png"
                        alt="HomePod"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Right side - spacer for button */}
                  <div className="w-1/3"></div>
                </div>

                {/* Get Started Button in bottom right */}
                <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12">
                  <button className="bg-white text-black rounded-full font-medium text-base hover:bg-gray-100 transition-colors duration-200 inline-flex items-center group pr-1.5">
                    <span className="pl-8 pr-6 py-4">Get Started</span>
                    <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            </div>

            {/* Right Card - Partial */}
            <div className="absolute right-0 top-0 w-[200px] lg:w-[250px] h-[75%] hidden lg:block">
              <div className="bg-gray-200 rounded-3xl overflow-hidden h-full">
                <div className="p-6">
                  <h3 className="text-black font-bold text-sm mb-1">
                    HomePod Studio
                  </h3>
                  <p className="text-gray-600 text-xs mb-4">
                    Professional audio quality
                  </p>
                  {/* Image placeholder */}
                  <div className="bg-gray-300 rounded-xl h-[200px] w-full">
                    {/* Image sera ajoutée ici */}
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Button Left */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-gray-800 hover:bg-gray-700 transition-colors rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Navigation Button Right */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-gray-200 hover:bg-white transition-colors rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}