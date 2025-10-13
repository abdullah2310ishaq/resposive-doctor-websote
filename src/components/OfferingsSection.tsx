import Image from "next/image";

export default function OfferingsSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - offering.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/offering.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      
      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center pt-32 pb-20">
        {/* Page Title */}
        <h1 className="text-6xl font-bold text-white text-center mb-8">
          Our Offerings
        </h1>
        
        {/* Descriptive Subtitle */}
        <p className="text-white/90 text-lg text-center max-w-4xl mb-16 px-8">
          You are a striking blend of art and nature, walking a unique experience in life we strive to meet your needs, expectations, budget and time if the standard offerings is not suitable,
        </p>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full px-8">
          
          {/* Left Card: Individual Packages */}
          <div className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-white">Individual Packages (Virtual)</h2>
            </div>
            
            <div className="space-y-6">
              {/* Single Sessions - Highlighted */}
              <div className="border-2 border-green-400 rounded-lg p-6 bg-green-400/10">
                <div className="text-3xl font-bold text-white mb-2">$130</div>
                <div className="space-y-2">
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    45 min
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L3 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    Free 15 min intro session
                  </div>
                </div>
              </div>
              
              {/* Bundle 1 */}
              <div className="border border-gray-600 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">$1000</div>
                <div className="space-y-2">
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Once a week, 8 weeks (45 min a session)
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L3 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    Free Introduction (15 min each)
                  </div>
                </div>
              </div>
              
              {/* Bundle 2 */}
              <div className="border border-gray-600 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">$2000</div>
                <div className="space-y-2">
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Twice a week, 8 weeks (45 min a session)
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L3 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    Free Introduction (15 min each)
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Card: Joint Sessions */}
          <div className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-white">Joint Sessions (Virtual)</h2>
            </div>
            
            <div className="space-y-6">
              {/* Single Sessions */}
              <div className="border border-gray-600 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">$200</div>
                <div className="space-y-2">
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    60 min
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L3 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    Free introduction session (15 min)
                  </div>
                </div>
              </div>
              
              {/* Bundle 1 */}
              <div className="border border-gray-600 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">$1000</div>
                <div className="space-y-2">
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    5 sessions, (60 min a session)
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L3 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    Free Introduction (15 min each)
                  </div>
                </div>
              </div>
              
              {/* Bundle 2 */}
              <div className="border border-gray-600 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">$1,900</div>
                <div className="space-y-2">
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    10 sessions, (60 min a session)
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L3 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    Free Introduction (15 min each)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
