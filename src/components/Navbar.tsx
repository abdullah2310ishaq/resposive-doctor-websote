"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-3 bg-transparent"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {/* Top Left Logo */}
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            whileHover={{ 
              rotate: 360,
              scale: 1.2,
              transition: { duration: 0.5 }
            }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-6 cursor-pointer"
            />
          </motion.div>
        </Link>
      </motion.div>
      
      {/* Navigation Links and Contact Button - Grouped on Right */}
      <div className="flex items-center space-x-6">
        <motion.nav 
          className="hidden md:flex space-x-6 text-white"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {[
            { href: "/welcome", label: "Welcome" },
            { href: "/explore", label: "Explore" },
            { href: "/choices", label: "Choices" },
            { href: "/philosophy", label: "Our Philosophy" },
            { href: "/offerings", label: "Our Offerings" }
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              <Link 
                href={item.href}
                className={`hover:text-green-400 transition-all duration-300 relative group ${pathname === item.href ? "text-green-400" : ""}`}
              >
                <motion.span
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 10px rgba(34, 197, 94, 0.5)"
                  }}
                  className="relative z-10"
                >
                  {item.label}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        
        {/* Contact Us Button with Green Gradient */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <Link 
            href="/contact"
            className="text-black px-4 py-2 rounded-lg text-xs font-bold relative overflow-hidden group"
            style={{
              background: 'linear-gradient(to right, #14F195, #63DB70)',
              boxShadow: '0 4px 15px rgba(20, 241, 149, 0.3)'
            }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
