import LandingSection from "@/components/LandingSection";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  return (
    <div className="scroll-smooth overflow-x-hidden">
      <div id="landing">
        <LandingSection />
      </div>
      <div id="home">
        <HomeSection />
      </div>
    </div>
  );
}
