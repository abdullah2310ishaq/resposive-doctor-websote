import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useTransition, useMemo } from "react";
import { getCloudinaryImage } from "../utils/cloudinary";
import clockIcon from "../assets/clock png.png";
import chatIcon from "../assets/chat png.png";
import offeringsBg from "../assets/Our Offerings.png";

export default function OfferingsPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);

  // Prefer Cloudinary background, fall back to local asset if it fails
  const offeringsCloudUrl = getCloudinaryImage("offerings.png", {
    width: 1920,
    quality: "auto",
    fetchFormat: "auto",
  });

  const [backgroundUrl, setBackgroundUrl] = useState(null);

  useEffect(() => {
    const cloudImg = new Image();
    cloudImg.src = offeringsCloudUrl;
    cloudImg.onload = () => {
      setBackgroundUrl(offeringsCloudUrl);
      setImageLoaded(true);
    };
    cloudImg.onerror = () => {
      const localImg = new Image();
      localImg.src = offeringsBg;
      localImg.onload = () => {
        setBackgroundUrl(offeringsBg);
        setImageLoaded(true);
      };
      localImg.onerror = () => {
        setBackgroundUrl(null);
        setImageLoaded(true);
      };
    };
  }, [offeringsCloudUrl]);

  // Check for payment success
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const sessionId = urlParams.get('session_id');
    
    if (success === 'true' || sessionId) {
      setShowSuccessSnackbar(true);
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
      // Auto-hide after 6 seconds
      const timer = setTimeout(() => {
        setShowSuccessSnackbar(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);
  const individualPackages = [
    {
      title: "Single Sessions",
      price: "$130",
      duration: "45 min",
      intro: "Free 15 min intro session",
      highlighted: true,
    },
    {
      title: "Bundle 1",
      price: "$1000",
      duration: "Once a week, 8 weeks (45 min a session)",
      intro: "Free Introduction (15 min each)",
      highlighted: false,
    },
    {
      title: "Bundle 2",
      price: "$2000",
      duration: "Twice a week, 8 weeks (45 min a session)",
      intro: "Free Introduction (15 min each)",
      highlighted: false,
    },
  ];

  const jointSessions = [
    {
      title: "Single Sessions",
      price: "$200",
      duration: "60 min",
      intro: "Free introduction session (15 min)",
      highlighted: false,
    },
    {
      title: "Bundle 1",
      price: "$1000",
      duration: "5 sessions, (60 min a session)",
      intro: "Free Introduction (15 min each)",
      highlighted: false,
    },
    {
      title: "Bundle 2",
      price: "$1,900",
      duration: "10 sessions, (60 min a session)",
      intro: "Free Introduction (15 min each)",
      highlighted: false,
    },
  ];

  const toggleSelection = (sectionKey, pkg) => {
    setSelectedItems((prev) => {
      const id = `${sectionKey}:${pkg.title}`;
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.filter((item) => item.id !== id);
      }
      return [...prev, { id, section: sectionKey, title: pkg.title, price: pkg.price }];
    });
  };

  const isSelected = (sectionKey, pkg) =>
    selectedItems.some((item) => item.id === `${sectionKey}:${pkg.title}`);

  const totalPrice = useMemo(() => {
    return selectedItems.reduce((sum, item) => {
      const numeric = Number(
        (item.price || "")
          .replace("$", "")
          .replace(/,/g, "")
          .trim()
      );
      if (Number.isNaN(numeric)) return sum;
      return sum + numeric;
    }, 0);
  }, [selectedItems]);

  const handleSingleCheckout = (sectionKey, pkg) => {
    setError(null);

    startTransition(async () => {
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            section: sectionKey,
            title: pkg.title,
          }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Unable to start checkout. Please try again.");
        }

        const { url } = await res.json();
        if (url) {
          window.location.href = url;
        } else {
          throw new Error("No checkout URL returned from server.");
        }
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong starting checkout.");
      }
    });
  };

  const handleCartCheckout = () => {
    if (!selectedItems.length) return;
    setError(null);
    startTransition(async () => {
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: selectedItems.map(({ section, title }) => ({
              section,
              title,
            })),
          }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Unable to start checkout. Please try again.");
        }

        const { url } = await res.json();
        if (url) {
          window.location.href = url;
        } else {
          throw new Error("No checkout URL returned from server.");
        }
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong starting checkout.");
      }
    });
  };

  return (
    <motion.div
      className="w-screen h-screen fixed inset-0 flex flex-col overflow-y-auto bg-cover bg-center bg-no-repeat [&::-webkit-scrollbar]:hidden"
      style={{ 
        backgroundImage: imageLoaded && backgroundUrl ? `url(${backgroundUrl})` : "none",
        backgroundColor: imageLoaded ? 'transparent' : '#000',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0.8 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Main Container */}
      <div className="flex flex-col w-full px-4 sm:px-6 md:px-10 pt-6 pb-24 sm:pt-6 sm:pb-8 md:pt-14 md:pb-14 font-[Calibri] text-white relative">
        {error && (
          <div className="mb-4 rounded-md bg-red-600/80 text-white px-4 py-2 text-sm max-w-2xl mx-auto">
            {error}
          </div>
        )}
        {/* Header - Above Cards */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.h1 
            className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4" 
            style={{ fontFamily: 'Calibri, sans-serif' }}
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Our Offerings
          </motion.h1>
          <motion.p 
            className="text-[12px] sm:text-[14px] md:text-[17px] leading-relaxed max-w-3xl text-center md:font-light" 
            style={{ fontFamily: 'Calibri, sans-serif' }}
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: 'easeOut'
            }}
          >
            You are a striking blend of art and nature, walking a unique experience in life. We strive to meet your needs, expectations, budget and time. If the standard offerings are not suitable, talk to us!
          </motion.p>
        </motion.div>

        {/* Cart / selection summary button (top-right) */}
        <div className="absolute right-4 top-6 sm:right-6 sm:top-6 md:right-10 md:top-10 flex items-center gap-2">
          <motion.button
            type="button"
            onClick={() => setIsCartOpen(true)}
            disabled={!selectedItems.length || isPending}
            className="relative inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-md disabled:opacity-40 disabled:cursor-not-allowed backdrop-blur-md hover:bg-white/10 transition-colors"
            whileHover={{ scale: selectedItems.length ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shopping Cart Icon */}
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            {selectedItems.length > 0 && (
              <motion.span
                className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-black"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {selectedItems.length}
              </motion.span>
            )}
            <span className="hidden sm:inline">
              {selectedItems.length
                ? `Cart (${selectedItems.length})`
                : "Your Cart"}
            </span>
          </motion.button>
        </div>

        {/* Floating bottom bar when something is selected */}
        {selectedItems.length > 0 && (
          <motion.div
            className="fixed inset-x-0 bottom-3 sm:bottom-5 z-30 flex justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="max-w-md w-full rounded-2xl bg-zinc-950/85 border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl px-4 py-3 flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-white/50">
                  Your plan
                </span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {selectedItems.length} offering{selectedItems.length > 1 ? "s" : ""} selected
                </span>
                <span className="text-xs sm:text-sm text-white/70">
                  Total{" "}
                  <span className="font-semibold">
                    {totalPrice > 0 ? `$${totalPrice.toLocaleString()}` : "-"}
                  </span>
                </span>
              </div>

              <motion.button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-black shadow-md hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsCartOpen(true)}
                disabled={isPending}
              >
                Review & proceed
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Offerings Grid - Below Header */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto w-full pb-8 sm:pb-4 md:pb-0 items-stretch">
          {[
            {
              key: "individual",
              title: "Individual Packages (Virtual)",
              items: individualPackages,
              delay: 0.2,
            },
            {
              key: "joint",
              title: "Joint Sessions (Virtual)",
              items: jointSessions,
              delay: 0.3,
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: section.delay }}
              className="flex flex-col gap-3 sm:gap-4 h-full"
            >
              <motion.h2 
                className="text-lg sm:text-xl md:text-2xl font-semibold underline underline-offset-4 text-left" 
                style={{ fontFamily: 'Calibri, sans-serif' }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.7,
                  delay: section.delay + 0.2,
                  ease: 'easeOut'
                }}
                whileHover={{
                  scale: 1.05,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {section.title}
              </motion.h2>

              <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                {section.items.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(5px)' }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                      filter: 'blur(0px)'
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.1 + sectionIndex * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => !isPending && toggleSelection(section.key, pkg)}
                    className={`flex flex-col gap-2 p-3 sm:p-4 md:p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected(section.key, pkg)
                        ? "border-emerald-400/70 bg-emerald-500/10 shadow-[0_0_24px_rgba(16,185,129,0.35)]"
                        : "border-[#2b2b2b] bg-black/20 md:bg-transparent"
                    } ${
                      pkg.highlighted && !isSelected(section.key, pkg)
                        ? "md:hover:shadow-[0_6px_16px_rgba(0,212,170,0.18)]"
                        : ""
                    }`}
                  >
                    <motion.div 
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + sectionIndex * 0.15 }}
                    >
                      <h3 className="font-medium text-base sm:text-lg md:text-xl" style={{ fontFamily: 'Calibri, sans-serif' }}>
                        {pkg.title}
                      </h3>
                      <span className="font-medium text-base sm:text-lg md:text-xl" style={{ fontFamily: 'Calibri, sans-serif' }}>
                        {pkg.price}
                      </span>
                    </motion.div>

                    <motion.div 
                      className="flex flex-col gap-2 flex-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 + sectionIndex * 0.15 }}
                    >
                      <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ x: 3, transition: { duration: 0.2 } }}
                      >
                        <motion.img
                          src={clockIcon?.src || clockIcon}
                          alt="Clock"
                          className="w-4 sm:w-5 h-auto"
                          loading="lazy"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="font-light text-[12px] sm:text-[13px] md:text-[15px] text-gray-200" style={{ fontFamily: 'Calibri, sans-serif' }}>
                          {pkg.duration}
                        </span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ x: 3, transition: { duration: 0.2 } }}
                      >
                        <motion.img
                          src={chatIcon?.src || chatIcon}
                          alt="Chat"
                          className="w-4 sm:w-5 h-auto"
                          loading="lazy"
                          whileHover={{ rotate: -15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="font-light text-[12px] sm:text-[13px] md:text-[15px] text-gray-200" style={{ fontFamily: 'Calibri, sans-serif' }}>
                          {pkg.intro}
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* Card selection strip */} 
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-white/50">
                        {isSelected(section.key, pkg) ? "Tap again to unselect" : "Tap card to select"}
                      </span>
                      <div
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] sm:text-xs font-semibold shadow-sm border ${
                          isSelected(section.key, pkg)
                            ? "bg-emerald-500/90 text-black border-emerald-300"
                            : "bg-white/5 text-white/80 border-white/15"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isSelected(section.key, pkg) ? "bg-black" : "bg-emerald-400"
                          }`}
                        />
                        <span>{isSelected(section.key, pkg) ? "Selected" : "Add to plan"}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Modal */}
        {isCartOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-md rounded-2xl bg-zinc-950/95 border border-white/10 shadow-2xl p-5 sm:p-6 flex flex-col gap-4"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg sm:text-xl font-semibold">Selected Offerings</h2>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="text-xs sm:text-sm text-white/60 hover:text-white"
                >
                  Close
                </button>
              </div>

              {selectedItems.length === 0 ? (
                <p className="text-sm text-white/70">No offerings selected yet.</p>
              ) : (
                <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
                  {selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-xs sm:text-sm"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">{item.title}</span>
                        <span className="text-white/70 capitalize text-[11px] sm:text-xs">
                          {item.section === "individual" ? "Individual" : "Joint"} session
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{item.price}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedItems((prev) => prev.filter((it) => it.id !== item.id))
                          }
                          className="text-[11px] sm:text-xs text-red-400 hover:text-red-300"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mt-2 text-sm sm:text-base">
                <span className="text-white/80">Total</span>
                <span className="font-semibold">
                  {totalPrice > 0 ? `$${totalPrice.toLocaleString()}` : "-"}
                </span>
              </div>

              <motion.button
                type="button"
                className="mt-3 inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm sm:text-base font-semibold text-black shadow-md hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCartCheckout}
                disabled={isPending || !selectedItems.length}
              >
                {isPending ? "Redirecting..." : "Checkout Selected"}
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* Loading overlay */}
        {isPending && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-14 h-14 border-2 border-emerald-400/40 border-t-emerald-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        )}

        {/* Success Snackbar */}
        <AnimatePresence>
          {showSuccessSnackbar && (
            <motion.div
              className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="rounded-2xl bg-gradient-to-r from-emerald-500/95 to-emerald-600/95 border border-emerald-400/50 shadow-[0_20px_50px_rgba(16,185,129,0.4)] backdrop-blur-xl p-5 sm:p-6 flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                    Payment Successful!
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    You have made this payment and have booked your session. We will contact you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setShowSuccessSnackbar(false)}
                  className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
