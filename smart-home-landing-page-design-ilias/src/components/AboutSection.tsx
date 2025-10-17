import Image from 'next/image'

export default function AboutSection() {
  const stats = [
    { value: '12Y', label: 'Experience' },
    { value: '4K', label: 'Products' },
    { value: '40K', label: 'Happy clients' }
  ]

  return (
    <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="px-6 md:px-8 lg:px-12">
          {/* Conteneur encadré avec bordure */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative bg-gray-200 rounded-2xl h-[280px] md:h-[320px] lg:h-[380px] w-full overflow-hidden">
                <Image
                  src="/aboutusbaffe.png"
                  alt="About us"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                  About us
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  We offer the latest technologies in audio and provide a wide range of products 
                  to meet the needs of every customer.
                </p>

                {/* Stats Cards */}
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.value}
                      className="bg-black rounded-xl px-5 md:px-6 py-3 md:py-4 min-w-[100px] md:min-w-[120px] text-center"
                    >
                      <div className="text-white text-xl md:text-2xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}