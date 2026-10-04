"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "923132431876"; // +92 313 2431876
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Heebal! 👋 I found your Bee Binders store and I'm interested in your products. Can you help me?"
);

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 flex items-center gap-3 cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Tooltip label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="bg-white text-ink font-heading font-bold text-sm px-4 py-2 rounded-xl shadow-xl whitespace-nowrap border border-gray-100"
          >
            💬 Chat on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Green WhatsApp button */}
      <motion.div
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.738 5.476 2.027 7.779L0 32l8.418-2.004A15.923 15.923 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.538a13.488 13.488 0 01-6.887-1.885l-.494-.293-5.002 1.192 1.215-4.879-.323-.51A13.462 13.462 0 012.462 16c0-7.46 6.077-13.538 13.538-13.538S29.538 8.54 29.538 16c0 7.46-6.077 13.538-13.538 13.538zm7.436-10.116c-.408-.205-2.416-1.19-2.79-1.327-.374-.136-.646-.204-.918.205-.272.408-1.054 1.327-1.292 1.599-.238.272-.476.307-.884.103-.408-.205-1.724-.636-3.284-2.024-1.214-1.082-2.034-2.419-2.272-2.827-.238-.408-.025-.628.179-.831.183-.182.408-.476.612-.714.204-.238.272-.408.408-.68.136-.272.068-.51-.034-.714-.103-.205-.918-2.21-1.258-3.027-.33-.795-.665-.687-.918-.7-.238-.01-.51-.013-.782-.013s-.714.103-1.088.51c-.374.408-1.428 1.395-1.428 3.4 0 2.006 1.462 3.944 1.666 4.216.205.272 2.878 4.393 6.973 6.163.975.42 1.735.671 2.328.859.978.31 1.869.266 2.573.161.785-.117 2.416-.988 2.757-1.941.34-.953.34-1.769.238-1.941-.101-.17-.374-.272-.782-.476z" />
        </svg>
      </motion.div>

      {/* Ping animation ring */}
      <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
    </motion.a>
  );
}
