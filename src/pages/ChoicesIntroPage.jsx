  import { useRouter } from 'next/navigation'
  import { getCloudinaryImage } from '../utils/cloudinary'
  import introBack from '../assets/introback.png'
  import introForward from '../assets/introforward.png'
import { motion as Motion } from 'framer-motion'

  export default function ChoicesIntroPage({ asSection = false }) {
    const router = useRouter()
    
    // Get optimized image from Cloudinary
    const choiceeeImage = getCloudinaryImage('choiceone.jpg', {
      width: 1920,
      quality: 'auto',
      format: 'auto'
    })

    const containerClass = asSection
      ? "w-full h-screen flex flex-col md:flex-row m-0 p-0 box-border relative"
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
              ? "absolute md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[28%] h-full md:h-full flex items-center justify-center bg-black overflow-hidden"
              : "fixed md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[28%] h-full md:h-full flex items-center justify-center bg-black overflow-hidden"
          }
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Motion.img
            src={choiceeeImage}
            alt="Choices Intro"
            loading="lazy"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          {/* Dim Overlay - Very subtle */}
          <Motion.div 
            className="absolute inset-0 bg-black/30 md:bg-black/30 z-0"
          />
        </Motion.div>

        {/* Text Content - Overlay on mobile, side section on desktop */}
        <Motion.div 
          className="absolute md:absolute inset-0 md:left-[28%] md:right-0 md:top-0 md:bottom-0 w-full md:w-[72%] min-h-full md:min-h-full md:bg-black flex flex-col justify-between md:justify-center relative pl-4 pr-5 sm:pl-6 sm:pr-7 md:pl-6 md:pr-12 py-8 sm:py-10 md:pt-24 md:pb-12 font-sans z-10 [&::-webkit-scrollbar]:hidden"
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
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.6)' }}
          >
            Your Choice
          </Motion.h1>

          {/* Scrollable Content */}
          <div 
            className="flex flex-col gap-3 sm:gap-4 overflow-y-auto md:overflow-x-hidden max-h-[60vh] md:max-h-full pb-4 md:pb-6 [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex flex-col min-w-[300px] md:min-w-auto md:max-w-full md:mt-10">
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col gap-6 sm:gap-7 md:gap-8 mb-4 sm:mb-6 md:mb-8"
              >
                {/* MIND DETOX */}
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
                  <h2 className="font-sans font-semibold text-white text-[12px] sm:text-[13px] md:text-[13px] uppercase underline mb-2 sm:mb-3">
                    MIND DETOX, MENTAL BOOST
                  </h2>
                  <p className="font-sans font-normal text-white text-[11px] sm:text-[12px] md:text-[12px] leading-[1.55] sm:leading-[1.45] opacity-90 text-justify" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.5)' }}>
                    Routine preservation of mental fitness is strongly connected to psychological power and health.
                    Mental fitness is a dynamic process of neutralizing the endless piercing external forces to one's SILO social, financial, cultural, political, and also, to stay tuned with the naturally fluctuating internal biological waves within. Amidst a pervasive culture of psychiatric over-diagnosis and medication over-prescription, it is vital to prioritize prevention, and claim control over our mental wellbeing by adopting sustainable self-care. The role of Art therapy in coping and detangling complex emotions for individuals with a psychologically demanding positions with performance pressure, and high expectations is remarkable.
                  </p>
                </Motion.div>

                {/* FATIGUE / PAIN / BURNOUT */}
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
                  <h2 className="font-sans font-semibold text-white text-[12px] sm:text-[13px] md:text-[13px] uppercase underline mb-2 sm:mb-3">
                    FATIGUE / PAIN / BURNOUT
                  </h2>
                  <p className="font-sans font-normal text-white text-[11px] sm:text-[12px] md:text-[12px] leading-[1.55] sm:leading-[1.45] opacity-90 text-justify" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.5)' }}>
                    Burnout is characterized by three key characteristics: emotional exhaustion, depersonalization, and decline in perceived personal accomplishments. Presenting symptoms could include: fatigue, pain, and ache, lack of drive, dysregulated sleep patterns, self-doubt, helpless and hopeless felling, lack of satisfaction, negative outlook, isolation, procrastination while adopting immediate and poor coping strategies though using food, drugs, alcohol, sex or shopping to scape, or to displace frustration and anger on others.
                  </p>
                </Motion.div>

                {/* MOOD AND ANXIETY */}
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
                  <h2 className="font-sans font-semibold text-white text-[12px] sm:text-[13px] md:text-[13px] uppercase underline mb-2 sm:mb-3">
                    MOOD AND ANXIETY
                  </h2>
                  <p className="font-sans font-normal text-white text-[11px] sm:text-[12px] md:text-[12px] leading-[1.55] sm:leading-[1.45] opacity-90 text-justify" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.5)' }}>
                    Application of art therapy surpasses the limitations of verbal expression by employing powerful techniques that resonate with the soul, body, and mind. As a deeply personal and recovery-oriented practice, it holistically addresses emotional, spiritual, social, and clinical well-being. Engaging in creative processes offers individuals valuable insight for understanding and untangling complex emotions that underlie emotional dysregulation, depression, anxiety, irritability, and anger. It also serves to enhance motivation, diminish stress, advance neurosensory capacities, strengthen interpersonal bonds, and shape a more profound sense of self-fulfillment.
                  </p>
                </Motion.div>
              </Motion.div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-auto mb-3 sm:mb-4 md:mb-0">
            {/* Left Arrow */}
            <Motion.img
              src={introBack?.src || introBack}
              alt="Back"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/explore')}
              className="w-14 sm:w-10 md:w-12 h-auto cursor-pointer"
            />

            {/* Right Arrow */}
            <Motion.img
              src={introForward?.src || introForward}
              alt="Forward"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/choices')}
              className="w-14 sm:w-10 md:w-12 h-auto cursor-pointer"
            />
          </div>
        </Motion.div>
      </Motion.div>
    )
  }
