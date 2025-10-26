import Image from 'next/image'

export default function ProductsSection() {
  return (
    <section className="bg-[#101010] py-16 md:py-20 lg:py-24">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="px-6 md:px-8 lg:px-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-thin text-center mb-8 md:mb-12">
            <span className="text-[#6F6F6F]">Discover Our Smart</span> <span className="text-[#FEFEFE]">Products</span>
          </h2>

          <div className="max-w-7xl mx-auto relative">
            <div className="absolute left-[-20px] lg:left-[20px] top-0 w-[120px] lg:w-[160px] h-3/4 hidden lg:block">
              <div className="bg-gray-200 rounded-[2.5rem] overflow-hidden h-full">
                <Image
                  src="/left_card.PNG"
                  alt="HomePod partial left"
                  fill
                  className="object-cover object-right rounded-[2.5rem]"
                />
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-200 rounded-[2.5rem] overflow-hidden">
                <div className="md:hidden flex flex-col items-center p-6">
                  <div className="relative w-full h-[250px] mb-6">
                    <Image
                      src="/primarydiscoverproduct.png"
                      alt="HomePod"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-black font-bold text-lg mb-2">
                      HomePod (2nd generation)
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Improved internals, newer chip, updated features
                    </p>
                  </div>

                  <button className="bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-colors duration-200 inline-flex items-center group pr-1.5 w-full max-w-xs justify-center">
                    <span className="pl-6 pr-4 py-3">Get Started</span>
                    <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200"
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

                <div className="hidden md:block p-8 md:p-10 lg:p-12 relative min-h-[400px]">
                  <div className="absolute top-8 left-8 md:top-10 md:left-10 lg:top-12 lg:left-12 z-10 max-w-[200px]">
                    <h3 className="text-black font-bold text-base mb-1">
                      HomePod (2nd generation)
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Improved internals, newer chip, updated features
                    </p>
                  </div>

                  <div className="flex items-center justify-center h-full">
                    <div className="relative w-[280px] h-[320px] md:w-[320px] md:h-[360px] lg:w-[360px] lg:h-[400px]">
                      <Image
                        src="/primarydiscoverproduct.png"
                        alt="HomePod"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

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

            <div className="absolute right-[20px] lg:right-[20px] bottom-0 w-[120px] lg:w-[160px] h-3/4 hidden lg:block">
              <div className="bg-gray-200 rounded-[2.5rem] overflow-hidden h-full">
                <Image
                  src="/right_card.png"
                  alt="HomePod partial right"
                  fill
                  className="object-cover object-left rounded-[2.5rem]"
                />
              </div>
            </div>

            <div className="md:hidden flex justify-center gap-4 mt-6">
              <button className="bg-[#3E3E3E] hover:bg-[#4E4E4E] transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="bg-[#F1F1F1] hover:bg-white transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <button className="hidden md:flex absolute left-[80px] lg:left-[120px] top-[85%] z-10 bg-[#3E3E3E] hover:bg-[#4E4E4E] transition-colors rounded-full w-12 h-12 items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button className="hidden md:flex absolute right-[80px] lg:right-[120px] top-[5%] z-10 bg-[#F1F1F1] hover:bg-white transition-colors rounded-full w-12 h-12 items-center justify-center">
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