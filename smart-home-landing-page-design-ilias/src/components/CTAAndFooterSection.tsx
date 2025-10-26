import Image from 'next/image'
import Link from 'next/link'

export default function CTAAndFooterSection() {
  return (
    <section className="bg-[#F0F0F0] pt-16 md:pt-20 lg:pt-24 pb-6">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="px-6 md:px-8 lg:px-12">
          <div className="w-full">
            <div className="bg-[#FCFFFE] rounded-[2.1rem] p-[7px]">
              <div className="rounded-[2rem] overflow-hidden">

                <div className="grid grid-cols-1 md:grid-cols-[5fr_7px_6fr] h-auto md:h-[480px]">
                  <div className="relative bg-white overflow-hidden h-[300px] md:h-full">
                    <Image
                      src="/bring_smart_sound_home_today.png"
                      alt="HomePod"
                      fill
                      className="object-cover object-center md:object-left"
                    />
                  </div>

                  {/* Vertical Separator - Hidden on mobile */}
                  <div className="hidden md:block bg-[#FCFFFE]"></div>

                  {/* Right Side - Content */}
                  <div className="bg-[#F5F5F5] flex items-center px-8 md:px-12 lg:px-20 py-12 md:py-0">
                    <div className="max-w-xl mx-auto md:mx-0">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-black mb-4 md:mb-6 leading-tight text-center md:text-left">
                        Bring Smart Sound Home Today
                      </h2>
                      <p className="text-gray-600 text-sm md:text-base mb-8 md:mb-10 leading-relaxed max-w-md text-center md:text-left">
                        Discover how HomePod transforms your music, home, and moments into something truly special.
                      </p>

                      {/* Get Started Button - Inverted colors */}
                      <button className="bg-black text-white rounded-full font-medium text-sm md:text-base hover:bg-gray-800 transition-colors duration-200 inline-flex items-center group pr-1.5 w-full md:w-auto justify-center md:justify-start">
                        <span className="pl-6 md:pl-8 pr-4 md:pr-6 py-3 md:py-4">Get Started</span>
                        <div className="bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-black group-hover:translate-x-0.5 transition-transform duration-200"
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

                {/* Horizontal Separator */}
                <div className="h-[7px] bg-[#FCFFFE]"></div>

                {/* Footer Section */}
                <div className="bg-[#1A1A1A] text-white py-12 md:py-16 px-8 md:px-12">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-8">
                    {/* Logo and Tagline */}
                    <div className="col-span-2 sm:col-span-3 md:col-span-1">
                      <div className="flex items-center gap-3 mb-6">
                        {/* Logo icon */}
                        <div className="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-normal">Auralis</h3>
                      </div>
                      <p className="text-[#717171] text-sm leading-relaxed">
                        More than sound - it&apos;s the voice of connection.
                      </p>
                      <p className="text-[#717171] text-xs mt-4 leading-relaxed">
                        Auralis brings people closer through intelligent sound blending technology, emotion, and harmony for meaningful connections everywhere.
                      </p>
                    </div>

                    {/* About Auralis */}
                    <div className="md:col-span-1">
                      <h4 className="font-medium text-base mb-5">About Auralis</h4>
                      <ul className="space-y-3">
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Press
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Sustainability
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Licensing
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Products */}
                    <div className="md:col-span-1">
                      <h4 className="font-medium text-base mb-5">Products</h4>
                      <ul className="space-y-3">
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            All Devices
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Engine
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Design
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Updates
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Support */}
                    <div className="md:col-span-1">
                      <h4 className="font-medium text-base mb-5">Support</h4>
                      <ul className="space-y-3">
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Join Account
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Warranty
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Shipping & Returns
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Get Started */}
                    <div className="md:col-span-1">
                      <h4 className="font-medium text-base mb-5">Get Started</h4>
                      <ul className="space-y-3">
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Buy Now
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Starter Guide
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Use Cases
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-[#717171] text-sm hover:text-white transition-colors">
                            Partner With Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Copyright and Social Icons */}
                  <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-12 md:mt-16 gap-6 sm:gap-0">
                    {/* Social Icons */}
                    <div className="flex gap-3">
                      <Link href="#" className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#3A3A3A] transition-colors">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                        </svg>
                      </Link>
                      <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                        </svg>
                      </Link>
                      <Link href="#" className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#3A3A3A] transition-colors">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      </Link>
                      <Link href="#" className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#3A3A3A] transition-colors">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      </Link>
                    </div>

                    {/* Copyright */}
                    <p className="text-[#717171] text-sm text-center sm:text-right">
                      © 2025 Auralis. All Rights Reserved
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}