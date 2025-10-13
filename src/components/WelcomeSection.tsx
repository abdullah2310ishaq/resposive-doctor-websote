import Image from "next/image";

export default function WelcomeSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - second_bg.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/second_bg.jpg"
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
            WELCOME TO MIND SPA
          </h1>
          
          {/* Green Underline */}
          <div className="w-24 h-1 bg-green-400 mb-6 mx-auto"></div>
          
          {/* Descriptive Text */}
          <div className="space-y-4 text-white text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              Mana Of Arta Is A Sanctuary Space We Sculpt For Your Mind, Body And Spirit To Retune And Revive To Reveal Your True Power — Art And Nature
            </p>
            <p>
              We Are An Eco-Friendly, And Tech-Integrated Solution For Complex Psychological Needs Of Today&apos;s Global Citizens.
            </p>
            <p>
              Let&apos;s Get On A Routine For Psyche Detox And Personal Hygiene For Mind.
            </p>
          </div>
          
          {/* Learn More Button */}
          <button className="mt-6 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg font-medium text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
