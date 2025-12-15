import { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { getCloudinaryImage } from '../utils/cloudinary'
import offeringsBg from '../assets/Our Offerings.png'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Get optimized image from Cloudinary
  const girlImage = getCloudinaryImage('contact.png', {
    width: 1920,
    quality: 'auto',
    format: 'auto'
  })

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [
        new Promise((resolve) => {
          const img = new Image()
          img.src = offeringsBg
          img.onload = resolve
          img.onerror = resolve
        }),
        new Promise((resolve) => {
          const img = new Image()
          img.src = girlImage
          img.onload = resolve
          img.onerror = resolve
        })
      ]
      await Promise.all(imagePromises)
      setImagesLoaded(true)
    }
    preloadImages()
  }, [girlImage])

  
  const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ''

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (message.text) setMessage({ type: '', text: '' })
  }

  const validateForm = () => {
    if (!formData.fullName.trim())
      return setMessage({ type: 'error', text: 'Please enter your full name' })
    if (!formData.email.trim())
      return setMessage({ type: 'error', text: 'Please enter your email' })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return setMessage({ type: 'error', text: 'Please enter a valid email address' })
    if (!formData.phoneNumber.trim())
      return setMessage({ type: 'error', text: 'Please enter your phone number' })
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    
    if (!WEB3FORMS_ACCESS_KEY) {
      setMessage({
        type: 'error',
        text: 'Form configuration error. Please contact the administrator.',
      })
      return
    }

    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          subject: 'New Contact Form Submission - Art of Mana',
          from_name: 'Art of Mana Contact Form',
          // Auto-reply configuration for Web3Forms
       }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || 'Failed to send message')
      }

      setMessage({
        type: 'success',
        text: 'We are excited to receive your email. You will hear back from us very soon.',
      })
      setFormData({ fullName: '', email: '', phoneNumber: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      setMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later or contact us directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        .contact-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        .contact-input:focus {
          border-color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
      <Motion.div 
        className="w-screen h-screen fixed top-0 left-0 flex flex-col md:flex-row overflow-y-auto bg-black text-white [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
      {/* Left Image Section - Hidden on mobile */}
      <Motion.div 
        className="hidden md:block relative w-full md:w-[50%] h-full overflow-hidden"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Motion.img
          src={girlImage}
          alt="Contact"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: imagesLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <Motion.div 
          className="absolute inset-0 bg-black/50"
          animate={{ opacity: [0.5, 0.6, 0.5] }}
          transition={{ 
            duration: 3, 
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </Motion.div>

      {/* Right Section - Contact Form with Offerings Background */}
      <Motion.div 
        className="relative w-full md:w-[50%] min-h-full md:min-h-full flex items-center justify-center px-5 md:px-10 py-8 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: imagesLoaded ? `url(${offeringsBg})` : 'none',
          backgroundColor: imagesLoaded ? 'transparent' : '#000',
        }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: imagesLoaded ? 1 : 0.8 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <Motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)'
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="flex flex-col w-full max-w-sm md:max-w-md px-1 md:px-0"
        >
          {/* Title */}
          <Motion.h1 
            className="text-3xl md:text-4xl font-bold text-white mb-1"
            initial={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
            animate={{ 
              opacity: 1, 
              x: 0,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: 0.7,
              delay: 0.5,
              ease: 'easeOut'
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Contact
          </Motion.h1>
          <Motion.p 
            className="text-green-400 text-sm md:text-base leading-snug mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Time to Reveal Your True Power
          </Motion.p>
          <Motion.p 
            className="text-green-400 text-sm md:text-base mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Mana Of Arta
          </Motion.p>

          {/* Message Alert */}
          {message.text && (
            <Motion.div
              className={`text-sm text-center px-3 py-2 mb-4 rounded-md ${
                message.type === 'success' ? 'bg-green-500/80' : 'bg-red-500/80'
              }`}
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {message.text}
            </Motion.div>
          )}

          {/* Input Fields */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              disabled={loading}
              className="w-full text-white outline-none transition-all text-sm mb-3 contact-input"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                padding: '12px 14px',
                height: '41px',
                fontFamily: 'Calibri, sans-serif',
              }}
            />
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="w-full text-white outline-none transition-all text-sm mb-3 contact-input"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                padding: '12px 14px',
                height: '41px',
                fontFamily: 'Calibri, sans-serif',
              }}
            />
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              disabled={loading}
              className="w-full text-white outline-none transition-all text-sm mb-5 contact-input"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                padding: '12px 14px',
                height: '41px',
                fontFamily: 'Calibri, sans-serif',
              }}
            />
          </Motion.div>

          {/* Submit Button */}
          <Motion.button
            type="submit"
            disabled={loading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileTap={!loading ? { scale: 0.95 } : {}}
            className={`text-black text-sm font-bold relative overflow-hidden group inline-flex items-center justify-center w-full ${
              loading ? 'cursor-not-allowed opacity-70' : ''
            }`}
            style={{
              background: loading 
                ? '#4B5563' 
                : 'linear-gradient(90deg, #14F195, #63DB70)',
              boxShadow: loading 
                ? 'none' 
                : '0 4px 15px rgba(20, 241, 149, 0.3)',
              height: 42,
              border: 'none',
              borderRadius: 3,
              padding: '15px 27px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'Calibri, sans-serif',
              margin: '0',
            }}
          >
            {/* Shimmer effect */}
            {!loading && (
              <Motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'easeInOut',
                }}
              />
            )}
            <Motion.span 
              className="relative z-10 uppercase tracking-wider" 
              whileHover={!loading ? { scale: 1.05 } : {}}
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}
            >
              {loading ? 'SENDING...' : 'SUBMIT'}
            </Motion.span>
            {/* Pulsing glow on hover */}
            {!loading && (
              <Motion.div
                className="absolute inset-0 rounded-sm bg-white/20 opacity-0 group-hover:opacity-100 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
            )}
          </Motion.button>
        </Motion.form>
      </Motion.div>
    </Motion.div>
    </>
  )
}
