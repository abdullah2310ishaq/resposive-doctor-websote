import Image from "next/image";

export default function PhilosophySection2() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - philosophy_bg.jpg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/philosophy_bg.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Main Title - Philosophy */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10 pt-20">
        <h1 className="text-6xl font-bold text-white text-center">
          Philosophy
        </h1>
      </div>
      
      {/* Tabs */}
      <div className="absolute top-48 left-1/2 transform -translate-x-1/2 z-10 flex space-x-8">
        <button className="text-white text-xl font-bold uppercase border-b border-white pb-2 hover:text-green-400 transition-colors">
          I AM ART
        </button>
        <button className="text-green-400 text-xl font-bold uppercase border-b-2 border-green-400 pb-2">
          I AM NATURE
        </button>
      </div>
      
      {/* Content Box */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 w-4/5 max-w-4xl">
        <div className="bg-black/60 backdrop-blur-sm border-2 border-green-400 rounded-lg p-8 shadow-2xl">
          <h2 className="text-green-400 text-3xl font-bold mb-6">
            I AM NATURE
          </h2>
          
          <div className="space-y-4 text-white text-lg leading-relaxed">
            <p>
              <span className="text-green-400 font-semibold">I Am Nature –</span> a beat of life in balance with infinite lives around me.
            </p>
            <p>
              <span className="text-green-400 font-semibold">I Am Nature –</span> the sequences of expansion, pause; contraction, and pause.
            </p>
            <p>
              <span className="text-green-400 font-semibold">I Am Nature –</span> a seed of dream striving to fully germinate.
            </p>
            <p>
              <span className="text-green-400 font-semibold">I Am Nature –</span> I accept, I honor and celebrate the hardship to be.
            </p>
            <p>
              <span className="text-green-400 font-semibold">I Am Nature –</span> a short life, yet an everlasting mark.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
