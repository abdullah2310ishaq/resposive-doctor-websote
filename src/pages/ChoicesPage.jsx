import { useRouter } from 'next/navigation'
import { motion as Motion } from 'framer-motion'
import { getCloudinaryImage } from '../utils/cloudinary'
import choicesBack from '../assets/choicesback.png'
import choicesFront from '../assets/choicesfront.png'

export default function ChoicesPage({ asSection = false }) {
  const router = useRouter()
  
  // Get optimized image from Cloudinary
  const choiceImage = getCloudinaryImage('choices.png', {
    width: 1920,
    quality: 'auto',
    format: 'auto'
  })

  const containerClass = asSection
    ? "w-full min-h-screen flex flex-col md:flex-row m-0 p-0 box-border"
    : "w-screen h-screen fixed top-0 left-0 flex flex-col md:flex-row overflow-y-auto md:overflow-y-auto m-0 p-0 box-border [&::-webkit-scrollbar]:hidden";

  const containerStyle = asSection
    ? {}
    : {
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      };

  return (
    <Motion.div 
      className={containerClass}
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background Image - Full screen on mobile, side section on desktop */}
      <Motion.div 
        className={
          asSection
            ? "relative md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[32%] h-[60vh] md:h-full flex items-center justify-center bg-black overflow-hidden"
            : "fixed md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[32%] h-full md:h-full flex items-center justify-center bg-black overflow-hidden"
        }
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Motion.img
          src={choiceImage}
          alt="Choices"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        {/* Dim Overlay - Very subtle */}
        <Motion.div 
          className="absolute inset-0 bg-black/30 md:bg-black/40 z-0"
        />
      </Motion.div>

      {/* Text Content - Overlay on mobile, side section on desktop */}
      <Motion.div 
        className="absolute md:absolute inset-0 md:left-[32%] md:right-0 md:top-0 md:bottom-0 w-full md:w-[68%] min-h-full md:min-h-full md:bg-black flex flex-col justify-between md:justify-center relative overflow-hidden pl-4 pr-5 sm:pl-6 sm:pr-7 md:pl-4 md:pr-12 py-8 sm:py-10 md:pt-20 md:pb-14 font-sans z-10 [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        {/* Main Heading */}
        <Motion.h1
          initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
          animate={{ 
            opacity: 1, 
            x: 0,
            filter: 'blur(0px)'
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          className="font-sans font-medium text-white text-sm sm:text-base md:text-base leading-snug sm:leading-tight md:leading-[1.2] mb-6 sm:mb-8 md:mb-10 tracking-wide"
          style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.6)', opacity: 0.9 }}
        >
          Your Choice
        </Motion.h1>

        {/* Scrollable Content */}
        <div 
          className="flex flex-col gap-3 sm:gap-4 overflow-y-auto md:overflow-x-hidden max-h-[60vh] md:max-h-full pb-4 md:pb-6 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="flex flex-col min-w-[300px] md:min-w-auto md:max-w-full">
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-6 sm:gap-7 md:gap-8 mb-4 sm:mb-6 md:mb-8"
            >
              {/* TRAUMA Section */}
              <Motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: 'blur(0px)'
                }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.6,
                  ease: 'easeOut'
                }}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <h2 className="font-sans font-semibold text-white text-[12px] sm:text-[12px] md:text-[13px] uppercase underline mb-2 sm:mb-3" style={{ opacity: 0.9 }}>
                  TRAUMA
                </h2>
                <p className="font-sans font-normal text-white text-[11px] sm:text-[11px] md:text-[12px] leading-[1.55] sm:leading-[1.45] text-justify" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.5)', opacity: 0.9 }}>
                  The remarkable value of art therapy in overpowering trauma has been proved. The process provides a safe and controlled environment where individuals can access and process traumatic emotions through nonverbal symbolic expressions. Sensory engagement facilitates the processing of blocked traumatic memories. A significant benefit for individuals comes from revisiting their experiences and viewing the visual artwork representing their trauma. The repetition of the auditory, verbal, and visual memories is crucial, as each review helps to fill in memory gaps, the processing and ultimately diminishing the related suffering.
                </p>
              </Motion.div>

              {/* FATIGUE/PAIN/BURNOUT Section */}
              <Motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: 'blur(0px)'
                }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.7,
                  ease: 'easeOut'
                }}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <h2 className="font-sans font-semibold text-white text-[12px] sm:text-[12px] md:text-[13px] uppercase underline mb-2 sm:mb-3" style={{ opacity: 0.9 }}>
                  FATIGUE / PAIN / BURNOUT
                </h2>
                <p className="font-sans font-normal text-white text-[11px] sm:text-[11px] md:text-[12px] leading-[1.55] sm:leading-[1.45] text-justify" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.5)', opacity: 0.9 }}>
                  Art therapy can circumvent cultural and language-based barriers, addressing the root causes of eating disorders. For those struggling with disordered eating, art provides a safe medium for self-expression, and facilitating a deeper understanding of themselves, their relationships, and interactions with the world. Metaphorical expressions within art can reveal unconscious conflicts, such as the individual's simultaneous desire for safety through food and their conscious efforts to rationalize the behaviors.
                </p>
              </Motion.div>

              {/* AUTISM SPECTRUM Section */}
              <Motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: 'blur(0px)'
                }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.8,
                  ease: 'easeOut'
                }}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <h2 className="font-sans font-semibold text-white text-[12px] sm:text-[12px] md:text-[13px] capitalize underline mb-2 sm:mb-3" style={{ opacity: 0.9 }}>
                  Autism Spectrum
                </h2>
                <p className="font-sans font-normal text-white text-[11px] sm:text-[11px] md:text-[12px] leading-[1.55] sm:leading-[1.45] text-justify" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.5)', opacity: 0.9 }}>
                  Research on creative arts interventions for children with Autism Spectrum Disorder level one, reveals improvements in occupation-based outcomes, specifically in performance skills related to process and social interaction, as well as in body functions. Art Therapy promotes self-expression and structured freedom, but not avoidant and suppressive coping approaches which ultimately lead to anxiety and stress in this population.
                </p>
              </Motion.div>
            </Motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-auto mb-3 sm:mb-4 md:mb-0">
          {/* Left Arrow */}
          <Motion.img
            src={choicesBack}
            alt="Back"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/choices-intro')}
            className="w-14 sm:w-10 md:w-12 h-auto cursor-pointer"
          />

          {/* Right Arrow */}
          <Motion.img
            src={choicesFront}
            alt="Forward"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/philosophy')}
            className="w-14 sm:w-10 md:w-12 h-auto cursor-pointer"
          />
        </div>
      </Motion.div>
    </Motion.div>
  )
}
