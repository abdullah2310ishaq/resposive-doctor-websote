"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent px-5 sm:px-8 py-3 flex items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center">
        {/* Left: Logo moved slightly inward */}
        <motion.div 
        className="flex items-center mr-4"
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
            <Image src="/logo.png" alt="Logo" width={44} height={44} className="cursor-pointer" />
          </motion.div>
        </Link>
      </motion.div>
      </div>
      
      {/* Mobile menu button on the far right */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1" />
        <span className="block w-6 h-0.5 bg-white mb-1" />
        <span className="block w-6 h-0.5 bg-white" />
      </button>
      
      {/* Right group: links then contact button at the end */}
      <div className="hidden md:flex items-center ml-auto space-x-6">
        <motion.nav 
          className="flex gap-8 text-white"
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

        {/* Contact button as last item */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <Link 
            href="/contact"
            className="text-black text-sm font-semibold relative overflow-hidden group inline-flex items-center justify-center"
            style={{
              background: 'linear-gradient(90deg, #14F195, #63DB70)',
              boxShadow: '0 4px 15px rgba(20, 241, 149, 0.3)',
              width: 140,
              height: 42,
              borderRadius: 3,
              padding: '15px 27px'
            }}
          >
            <motion.span className="relative z-10" whileHover={{ scale: 1.05 }}>
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

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 px-3 sm:px-5">
          <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
            {[
              { href: "/welcome", label: "Welcome" },
              { href: "/explore", label: "Explore" },
              { href: "/choices", label: "Choices" },
              { href: "/philosophy", label: "Our Philosophy" },
              { href: "/offerings", label: "Our Offerings" },
              { href: "/contact", label: "Contact Us" }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block text-white py-2 text-base" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
