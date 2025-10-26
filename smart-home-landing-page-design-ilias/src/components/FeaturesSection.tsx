import React from 'react'
import Image from 'next/image'

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.86-2h8.28l.5-3.5L12 6l-4.64 4.5L7.86 14zM5 19h14v2H5v-2z"/>
        </svg>
      ),
      title: "Premium sound",
      description: "Quality and simplicity for timeless music experiences."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3M8 8v8M12 6v12M16 10v4M20 12h1" />
        </svg>
      ),
      title: "Voice control",
      description: "Voice control lets you manage everything hands-free."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Privacy you can trust",
      description: "Your voice data stays secure - designed with privacy at its core."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      title: "Send & read message",
      description: "Send voice messages directly through integrated messengers."
    }
  ]

  return (
    <section className="bg-[#F0F0F0] py-16 md:py-20 lg:py-24">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-4 sm:mb-6 md:mb-8">
              <span className="text-[#999999]">Key</span>{' '}
              <span className="text-[#0D0D0D]">Features</span>{' '}
              <span className="text-[#959595]">& Benefits</span>
            </h2>
            <div className="bg-[#FCFFFE] rounded-[2.1rem] p-[7px]">
              <div className="md:hidden bg-[#F0F0F0] rounded-[2rem] overflow-hidden">
                <div className="relative bg-white h-[250px] sm:h-[300px]">
                  <Image
                    src="/key_features_benefits.png"
                    alt="HomePod"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="h-[7px] bg-[#FCFFFE]"></div>

                <div className="bg-[#F0F0F0] p-[3px]">
                  <div className="flex flex-col gap-[3px]">
                    {features.map((feature, index) => (
                      <div key={index} className={`bg-white p-5 ${
                        index === features.length - 1 ? 'rounded-b-[2rem]' : ''
                      }`}>
                        <div className="flex items-start gap-3">
                          <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                            {React.cloneElement(feature.icon, { className: "w-5 h-5 text-white" })}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-black font-medium text-sm mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:grid bg-[#F0F0F0] rounded-[2rem] h-[600px] grid-cols-[1fr_7px_1fr] overflow-hidden">
                <div className="bg-[#F0F0F0] h-full p-[3px] pr-[7px]">
                  <div className="flex flex-col gap-[3px] h-full">
                    {features.map((feature, index) => (
                      <div key={index} className={`bg-white p-7 flex-1 flex items-center ${
                        index === 0 ? 'rounded-tl-[2rem]' : ''
                      } ${
                        index === features.length - 1 ? 'rounded-bl-[2rem]' : ''
                      }`}>
                        <div className="flex items-start gap-4 w-full">
                          <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-black font-medium text-base mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FCFFFE] h-full"></div>

                <div className="relative bg-white rounded-br-[2rem] rounded-tr-[2rem] overflow-hidden h-full">
                  <Image
                    src="/key_features_benefits.png"
                    alt="HomePod"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}