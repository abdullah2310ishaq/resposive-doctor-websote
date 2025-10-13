import Image from "next/image";

export default function ExploreSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - third.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/third.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Main Content - Left-aligned */}
      <div className="absolute inset-0 z-10 flex items-center pt-20">
        <div className="max-w-4xl px-8 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-white uppercase mb-4">
            EXPLORE ART THERAPY
          </h1>
          
          {/* Green Underline */}
          <div className="w-24 h-1 bg-green-400 mb-6 mx-auto"></div>
          
          {/* Descriptive Text */}
          <div className="space-y-4 text-white text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              Today, We Welcome You To Step Into A New Panorama, And Fearlessly Explore A Venerable Tradition With A Fresh Set Of Skills Salutary To Everyone.
            </p>
            <p>
              For Millennia, Our Earliest Ancestors Have Intuitively Applied The Therapeutic Power Of Arts For Self-Expression And Healing.
            </p>
            <p>
              Since The Mid-20th Century, The Discipline Of Art Therapy Stood As A Superior Non-Pharmacological Modality With Minimal Side Effects – A Sustainable Tool For Life For Acute Crises Through Loss, Grief, And Trauma, And Chronic Conditions Like Depression, Pain, Fatigue, And Eating Abnormalities, Anxiety, PTSD, Cognitive Impairments, And Autism Spectrum.
            </p>
          </div>
          
          {/* Our Offerings Button */}
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg font-medium text-sm uppercase">
            OUR OFFERINGS
          </button>
        </div>
      </div>
      
      {/* Decorative Elements at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-8 pb-8">
        {/* Left - Folded Towels */}
        <div className="flex space-x-2">
          <div className="w-16 h-20 bg-gray-700 rounded transform rotate-12"></div>
          <div className="w-16 h-20 bg-gray-600 rounded transform -rotate-6"></div>
          <div className="w-16 h-20 bg-gray-500 rounded transform rotate-6"></div>
        </div>
        
        {/* Middle - Vase */}
        <div className="w-12 h-16 bg-gray-800 rounded-t-full"></div>
        
        {/* Right - Incense Burner with Smoke */}
        <div className="flex items-end space-x-2">
          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
          {/* Smoke effect */}
          <div className="absolute -top-4 right-8 w-1 h-8 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute -top-6 right-6 w-1 h-6 bg-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
