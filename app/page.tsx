"use client";

import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { Phone, MapPin, ArrowRight, Check, Copy, Mail, MessageCircle, X, CheckCircle2, Hammer, Calculator } from "lucide-react";
import { useState, useEffect } from "react";

// --- ANIMATION VARIANTS ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- DATA: PACKAGES ---
const packages = {
  basic: {
    name: "Basic Package",
    rate: 2250,
    features: [
      "Steel: ARS / iSteel",
      "Cement: Dalmia / Coromandel (43/53 Grade)",
      "Flooring: Tiles up to ₹80/sq.ft",
      "Paint: Tractor Emulsion",
      "Windows: Standard UPVC",
      "Electrical: Anchor / Havells wires",
      "Bathroom: Parryware fittings (₹20k/bath)"
    ]
  },
  classic: {
    name: "Classic Package",
    rate: 2500,
    features: [
      "Steel: TATA / JSW",
      "Cement: Ultratech / Ramco (43/53 Grade)",
      "Flooring: Tiles up to ₹120/sq.ft",
      "Paint: Royal Emulsion",
      "Windows: UPVC with Mesh",
      "Electrical: Finolex wires",
      "Bathroom: Jaquar fittings (₹30k/bath)"
    ]
  }
};
// --- COMPONENTS ---

// 1. Blueprint Side Panel (Calculator)
function BlueprintPanel({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [area, setArea] = useState<number>(1000);
  const [selectedPkg, setSelectedPkg] = useState<"basic" | "classic" | "custom">("basic");
  
  // Calculate cost only if not custom
  const totalCost = selectedPkg === "custom" ? 0 : area * packages[selectedPkg].rate;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[90] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-[#0F4C81] z-[100] border-l-4 border-white shadow-2xl overflow-y-auto"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />

            <div className="relative z-10 p-6 md:p-10 text-white font-mono h-full flex flex-col">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-8 border-b border-white/30 pb-4">
                <div className="flex items-center gap-3">
                  <Calculator size={28} />
                  <div>
                    <h2 className="text-2xl font-bold tracking-tighter">COST_ESTIMATOR</h2>
                    <p className="text-xs text-blue-200">LIVE RATES 2025</p>
                  </div>
                </div>
                <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Area Input (Hide if Custom) */}
              <div className={`mb-8 transition-opacity duration-300 ${selectedPkg === "custom" ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
                <label className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2 block">01 // BUILD AREA (SQ.FT)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="500" 
                    max="5000" 
                    step="50" 
                    value={area} 
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full accent-[#E63946] h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <input 
                    type="number" 
                    value={area} 
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-24 bg-white/10 border border-white/30 p-2 text-center font-bold rounded"
                  />
                </div>
              </div>

              {/* Package Selection (Updated with Custom Option) */}
              <div className="mb-8">
                <label className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-4 block">02 // SELECT PACKAGE</label>
                <div className="grid grid-cols-3 gap-2">
                  {/* Basic Card */}
                  <div 
                    onClick={() => setSelectedPkg("basic")}
                    className={`border-2 p-2 cursor-pointer transition-all ${selectedPkg === "basic" ? "bg-white text-[#0F4C81] border-white" : "border-white/30 hover:bg-white/10"}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold uppercase text-xs">BASIC</span>
                      {selectedPkg === "basic" && <CheckCircle2 size={12} />}
                    </div>
                    <div className="text-lg font-black">₹2250</div>
                  </div>

                  {/* Classic Card */}
                  <div 
                    onClick={() => setSelectedPkg("classic")}
                    className={`border-2 p-2 cursor-pointer transition-all ${selectedPkg === "classic" ? "bg-[#E63946] text-white border-[#E63946]" : "border-white/30 hover:bg-white/10"}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold uppercase text-xs">CLASSIC</span>
                      {selectedPkg === "classic" && <CheckCircle2 size={12} />}
                    </div>
                    <div className="text-lg font-black">₹2500</div>
                  </div>

                  {/* Custom Card (NEW) */}
                  <div 
                    onClick={() => setSelectedPkg("custom")}
                    className={`border-2 p-2 cursor-pointer transition-all ${selectedPkg === "custom" ? "bg-green-500 text-white border-green-500" : "border-white/30 hover:bg-white/10"}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold uppercase text-xs">CUSTOM</span>
                      {selectedPkg === "custom" && <CheckCircle2 size={12} />}
                    </div>
                    <div className="text-lg font-black">QUOTE</div>
                  </div>
                </div>
              </div>

              {/* Features List or Custom Message */}
              <div className="flex-grow overflow-y-auto mb-8 pr-2 custom-scrollbar">
                <label className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3 block">DETAILS:</label>
                
                {selectedPkg === "custom" ? (
                  <div className="bg-white/10 p-6 rounded-lg border border-white/20 text-center">
                    <Hammer className="mx-auto mb-4 text-green-400" size={32} />
                    <h3 className="text-xl font-bold mb-2">Tailored For You</h3>
                    <p className="text-sm opacity-80 mb-4">
                      Need a specific material brand? Luxury finish? Or a commercial complex? 
                      We create custom BOQs matching your exact requirements and budget.
                    </p>
                    <ul className="text-sm text-left space-y-2 mb-4 mx-auto max-w-[200px]">
                      <li className="flex items-center gap-2"><Check size={12} className="text-green-400"/> Specific Brands</li>
                      <li className="flex items-center gap-2"><Check size={12} className="text-green-400"/> Architectural Designs</li>
                      <li className="flex items-center gap-2"><Check size={12} className="text-green-400"/> Turnkey Solutions</li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <ul className="space-y-3">
                      {packages[selectedPkg].features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm border-b border-white/10 pb-2">
                          <Check size={14} className="mt-1 text-green-400 shrink-0" />
                          <span className="opacity-90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-blue-200 mt-4 italic">* Rates typically exclude compound wall, sump, septic tank, over head tank and additional works.</p>
                  </>
                )}
              </div>

              {/* Total & Action */}
              <div className="mt-auto bg-black/30 -mx-6 -mb-10 p-6 md:p-10 border-t border-white/20">
                {selectedPkg === "custom" ? (
                   <div className="text-center">
                     <a 
                       href="https://wa.me/919087411115?text=Hi%2C%20I%20need%20a%20custom%20quote%20for%20my%20project."
                       target="_blank"
                       className="w-full bg-green-500 text-white py-4 font-black text-lg uppercase tracking-widest hover:bg-green-400 transition-colors flex items-center justify-center gap-3 shadow-lg active:scale-95 rounded-lg"
                     >
                       <MessageCircle size={20} /> CHAT FOR ESTIMATE
                     </a>
                   </div>
                ) : (
                  <>
                    <div className="flex justify-between items-end mb-6">
                      <span className="text-sm font-bold opacity-70">ESTIMATED COST</span>
                      <span className="text-4xl font-black text-[#E63946]">
                        ₹{(totalCost / 100000).toFixed(2)} Lakhs
                      </span>
                    </div>
                    <button className="w-full bg-white text-[#0F4C81] py-4 font-black text-lg uppercase tracking-widest hover:bg-[#E63946] hover:text-white transition-colors flex items-center justify-center gap-3 shadow-lg active:scale-95">
                      GET DETAILED QUOTE <ArrowRight size={20} />
                    </button>
                  </>
                )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// 3. Call Modal
function CallModal({ isOpen, onClose, onCopy }: { isOpen: boolean, onClose: () => void, onCopy: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-gradient-to-br from-[#0F4C81] to-[#0a3356] rounded-[2rem] p-8 shadow-2xl z-[101] text-center border border-white/10 overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
             <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400 rounded-full blur-[80px] opacity-20" />
             
             <div className="relative mx-auto mb-6">
               <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 mx-auto relative z-10">
                 <MessageCircle size={40} className="text-white drop-shadow-lg" />
               </div>
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-white/30 rounded-full animate-ping opacity-50" />
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-white/10 rounded-full animate-ping animation-delay-200 opacity-30" />
             </div>
             
             <h3 className="text-3xl font-black text-white mb-1 tracking-tight">R. Anand</h3>
             <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-6">Proprietor • SKR</p>
             
             <div className="bg-white/5 p-4 rounded-xl mb-6 border border-white/10">
               <p className="text-2xl font-black text-white tracking-wider">+91 90874 11115</p>
             </div>
             
             <div className="space-y-4 relative z-10">
                <a 
                 href="https://wa.me/919087411115?text=Hi%2C%20I%20am%20interested%20in%20your%20construction%20services."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full py-4 bg-[#25D366] hover:bg-[#20b858] text-white font-bold rounded-xl shadow-lg shadow-green-900/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
               >
                 <MessageCircle size={20} fill="currentColor" /> CHAT ON WHATSAPP
               </a>
               
               <button 
                 onClick={onCopy}
                 className="block w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-3"
               >
                 <Copy size={18} /> COPY NUMBER
               </button>
               
               <button 
                 onClick={onClose}
                 className="block w-full py-3 bg-white/5 hover:bg-white/10 text-white/70 font-bold rounded-xl border border-white/10 transition-colors"
               >
                 Close
               </button>
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// 4. Main Page Content
export default function V13() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Automatic Popup Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCallOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Fallback copy failed:', err);
        }
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] overflow-x-hidden selection:bg-[#E63946] selection:text-white font-sans">
      
      <BlueprintPanel isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <CallModal isOpen={isCallOpen} onClose={() => setIsCallOpen(false)} onCopy={() => copyToClipboard("+91 90874 11115")} />

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsQuoteOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-[#0F4C81] text-white p-4 rounded-full shadow-[0_0_0_4px_white,0_0_20px_rgba(15,76,129,0.5)] flex items-center gap-3 pr-6 group overflow-hidden hidden md:flex"
      >
        <div className="bg-white text-[#0F4C81] p-3 rounded-full">
          <Calculator size={24} />
        </div>
        <div className="text-left">
          <span className="block text-xs font-bold uppercase opacity-80 group-hover:opacity-100">Estimate Cost</span>
          <span className="block text-lg font-black uppercase tracking-tight">CALCULATOR</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </motion.button>

      {/* Mobile FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsCallOpen(true)}
        className="fixed bottom-8 right-4 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg flex md:hidden items-center justify-center"
      >
        <Phone size={24} />
      </motion.button>

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, filter: "grayscale(100%)" }}
          animate={{ scale: 1, filter: "grayscale(0%)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <motion.div style={{ y, opacity }} className="max-w-4xl">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-20 bg-[#E63946]" />
              <span className="text-[#E63946] tracking-[0.3em] font-bold uppercase">Skr Builders & Promoters</span>
            </motion.div>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white leading-none mb-8 drop-shadow-2xl"
            >
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-orange-500">
                LEGACIES
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl text-gray-200 max-w-xl mb-12 border-l-4 border-[#0F4C81] pl-6 backdrop-blur-sm bg-black/20 py-4 rounded-r-lg"
            >
              We don't just pour concrete. We engineer lifestyles. 
              Experience the pinnacle of construction with Chennai's finest.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <button 
                onClick={() => setIsQuoteOpen(true)}
                className="group relative px-8 py-4 bg-white text-[#1A1A1A] font-bold overflow-hidden rounded-none hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">OPEN COST CALCULATOR</span>
                <div className="absolute inset-0 bg-[#E63946] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0F4C81] mb-4">Mastery in Motion</h2>
            <div className="w-24 h-1 bg-[#E63946] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600">Comprehensive solutions for all your property needs</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
             <ComplexServiceCard 
               title="Construction" 
               desc="Building your dream home from the ground up."
               image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
               num="01"
             />
             <ComplexServiceCard 
               title="Commercial" 
               desc="High-performance workspaces driving growth."
               image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
               num="02"
             />
             <ComplexServiceCard 
               title="Renovation" 
               desc="Breathing new life into existing structures."
               image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031"
               num="03"
             />
             <ComplexServiceCard 
               title="Land Advisory" 
               desc="Finding the perfect plot for your investment."
               image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
               num="04"
             />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-[#0F4C81] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[#E63946] font-bold tracking-widest uppercase mb-2">About Us</h3>
              <h2 className="text-4xl font-bold mb-6">Quality You Can Trust</h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                At SKR Builders and Promoters, we don't just build structures; we build relationships. 
                Led by R. Anand, our team is committed to delivering excellence.
              </p>
              <ul className="space-y-3">
                {['Premium Quality Materials', 'On-time Delivery', 'Transparent Pricing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#E63946] flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Actions */}
      <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F4C81]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Start the Conversation</h2>
            <div className="w-24 h-1 bg-[#E63946] mx-auto rounded-full" />
            <p className="mt-4 text-gray-400">Choose how you'd like to connect with us</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* WhatsApp */}
            <a href="https://wa.me/919087411115" target="_blank" className="group bg-[#25D366] p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#1a3c29] h-full rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#25D366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#25D366] p-4 rounded-full mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-900/50 relative z-10">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-green-200 text-sm mb-6">Immediate response for quick queries</p>
                <span className="bg-[#25D366] text-black font-bold py-3 px-8 rounded-lg w-full group-hover:bg-white transition-colors">Chat Now</span>
              </div>
            </a>
            {/* Email */}
            <a href="mailto:contact@skrbuilders.com" className="group bg-[#0F4C81] p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#0a1f33] h-full rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F4C81]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#0F4C81] p-4 rounded-full mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/50 relative z-10">
                  <Mail size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-blue-200 text-sm mb-6">Send floor plans & documents</p>
                <span className="bg-[#0F4C81] text-white font-bold py-3 px-8 rounded-lg w-full group-hover:bg-white group-hover:text-[#0F4C81] transition-colors">Send Email</span>
              </div>
            </a>
            {/* Phone */}
            <div onClick={() => setIsCallOpen(true)} className="group bg-gray-700 p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
              <div className="bg-[#1a1a1a] h-full rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-gray-700 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50 relative z-10">
                  <Phone size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Call Directly</h3>
                <p className="text-gray-400 text-sm mb-6">Speak with us now</p>
                <span className="bg-gray-700 text-white font-bold py-3 px-8 rounded-lg w-full group-hover:bg-white group-hover:text-black transition-colors">View Number</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-10 text-center text-sm border-t border-gray-900">
        <p>© {new Date().getFullYear()} SKR Builders And Promoters.</p>
        <div className="flex justify-center gap-4 mt-4">
           <MapPin size={16} /> #292/1, Leo Apartment, Viduthalai Nagar, Chennai - 600 117.
        </div>
      </footer>

      {/* Developer Credit */}
      <div className="bg-[#0a0a0a] border-t border-gray-950 py-3 text-center">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Trenz Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
}

// 5. Complex Service Card
function ComplexServiceCard({ number, title, desc, image }: any) {
  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ y: -10 }}
      className="group relative h-[450px] overflow-hidden bg-gray-900 cursor-pointer rounded-2xl shadow-xl"
    >
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" 
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <span className="text-6xl font-black text-white/10 group-hover:text-white/30 transition-colors">
          {number}
        </span>
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm leading-relaxed">
            {desc}
          </p>
          <div className="mt-6 w-12 h-1 bg-[#E63946] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </div>
    </motion.div>
  );
}
