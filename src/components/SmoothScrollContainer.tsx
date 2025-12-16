'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import LandingPage from '../pages/LandingPage';
import WelcomePage from '../pages/WelcomePage';
import ExplorePage from '../pages/ExplorePage';
import ChoicesPage from '../pages/ChoicesPage';
import ChoicesIntroPage from '../pages/ChoicesIntroPage';
import PhilosophyPage from '../pages/PhilosophyPage';

export default function SmoothScrollContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: 'landing', component: LandingPage },
    { id: 'welcome', component: WelcomePage },
    { id: 'explore', component: ExplorePage },
    { id: 'choices', component: ChoicesPage },
    { id: 'choices-intro', component: ChoicesIntroPage },
    { id: 'philosophy', component: PhilosophyPage },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(index);
            }
          });
        },
        observerOptions
      );

      observer.observe(section);
      return observer;
    });

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory [&::-webkit-scrollbar]:hidden"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        scrollBehavior: 'smooth',
      }}
    >
      {sections.map((section, index) => {
        const Component = section.component;
        const isActive = activeSection === index;
        const isPast = activeSection > index;

        // Slightly different motion for the Choices → Choices Intro duo
        const isChoicesFlow = section.id === 'choices' || section.id === 'choices-intro';
        
        return (
          <motion.section
            key={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="h-screen w-screen snap-start snap-always relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isActive ? 1 : isPast ? 0.4 : 0.8,
              y: isActive ? 0 : isPast ? -20 : 0,
              scale: isActive ? 1 : 0.98,
              x: isChoicesFlow ? (isActive ? 0 : isPast ? -15 : 15) : 0,
            }}
            transition={{
              duration: isChoicesFlow ? 1.0 : 0.8,
              ease: isChoicesFlow ? [0.16, 1, 0.3, 1] : [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="h-full w-full">
              <Component asSection={true} />
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}

