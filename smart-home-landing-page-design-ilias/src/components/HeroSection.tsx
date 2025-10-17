import CategoryButtons from './CategoryButtons'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="bg-black min-h-[80vh]">
      <div className="px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="max-w-2xl">
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
                Elevate Your
                <br />
                Living Experience
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-8 md:mb-12">
                Discover the latest smart home devices designed to simplify your life, and optimize energy efficiency
              </p>

              {/* Get Started Button */}
              <button className="bg-white text-black rounded-full font-medium text-sm md:text-base hover:bg-gray-200 transition-colors duration-200 inline-flex items-center group pr-1 md:pr-1.5 mb-12 md:mb-16">
                <span className="pl-6 md:pl-8 pr-4 md:pr-6 py-3 md:py-4">Get Started</span>
                <div className="bg-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-0.5 transition-transform duration-200"
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

              {/* Category Buttons */}
              <CategoryButtons />
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] -mt-16 md:-mt-20 lg:-mt-24">
              <Image
                src="/baffe.png"
                alt="Smart Home Device"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}