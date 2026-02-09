"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, PaintBucket, Hammer, ShieldCheck, Ruler, Clock, Droplets } from "lucide-react";
import Link from 'next/link';
import NextImage from 'next/image';

const features = [
    {
        icon: <ShieldCheck size={24} />,
        title: "Structural Strengthening",
        desc: "Specialized retrofitting and beam reinforcement for older structures to meet modern safety standards."
    },
    {
        icon: <LayoutIcon size={24} />,
        title: "Space Optimization",
        desc: "Convert unused areas into functional spaces through smart architectural remodeling and wall removals."
    },
    {
        icon: <Droplets size={24} />,
        title: "Waterproofing & Repairs",
        desc: "Complete terrace and wall seepage solutions with advanced chemical coatings and structural repairs."
    },
    {
        icon: <Ruler size={24} />,
        title: "Vertical Expansion",
        desc: "Adding extra floors or rooms to your existing property with meticulous load management and design integration."
    },
    {
        icon: <PaintBucket size={24} />,
        title: "Aesthetic Makeovers",
        desc: "Premium painting, texture finishes, and exterior elevation upgrades to give your building a brand new look."
    },
    {
        icon: <Clock size={24} />,
        title: "Quick Turnaround",
        desc: "Standardized processes ensuring minimal disruption to your daily life while we rebuild your space."
    }
];

export default function RenovationClient() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1A1A1A]">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <NextImage
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031"
                        alt="Renovation Hero"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                </div>
                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
                    >
                        Renovation <span className="text-[#E63946]">& Restore</span>
                    </motion.h1>
                    <p className="text-xl text-gray-200 max-w-2xl border-l-4 border-[#0F4C81] pl-6">
                        Breathing new life into existing spaces. Modern upgrades, structural strengthening,
                        and aesthetic makeovers for older buildings in Chennai.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#0F4C81] mb-6">Elevate Your Existing Property</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            SKR Builders & Promoters provide professional renovation services in Chennai
                            for residential and commercial properties. Our renovation solutions focus on
                            structural safety, functional upgrades, and long-term durability.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We handle home remodeling, building renovation, waterproofing,
                            electrical and plumbing upgrades, interior renovation, and complete
                            property transformation with minimal disruption and clear execution plans.

                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 border border-gray-100 rounded-3xl hover:shadow-2xl transition-all group hover:border-[#E63946]/20 bg-gray-50/50"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#E63946] shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-[#0F4C81]">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Process Section */}
                    <div className="bg-[#0F4C81] rounded-[3rem] p-12 md:p-20 text-white mb-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 grid md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-3xl font-bold mb-8">Our Restoration Process</h3>
                                <div className="space-y-8">
                                    {[
                                        { s: "Step 1", t: "Stability Audit", d: "Professional structural analysis to check foundation and load-bearing capacity." },
                                        { s: "Step 2", t: "Design & Plan", d: "Architectural 3D modeling to visualize changes before demolition begins." },
                                        { s: "Step 3", t: "Execution", d: "Coordinated demolition and reconstruction with minimal environmental impact." }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6">
                                            <div className="text-[#E63946] font-black text-lg shrink-0">{step.s}</div>
                                            <div>
                                                <h4 className="font-bold mb-1">{step.t}</h4>
                                                <p className="text-blue-200/70 text-sm">{step.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm self-center">
                                <h4 className="text-2xl font-bold mb-4">Why Renovate with SKR?</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="text-[#E63946]" size={18} /> Branded Construction Chemicals</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="text-[#E63946]" size={18} /> Civil Engineering Precision</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="text-[#E63946]" size={18} /> Budget-Friendly Transformations</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="text-[#E63946]" size={18} /> Hassle-Free Legal Approvals</li>
                                </ul>
                                <Link href="/#contact" className="mt-10 w-full inline-flex items-center justify-center gap-3 py-4 bg-white text-[#0F4C81] font-black rounded-xl hover:bg-[#E63946] hover:text-white transition-all uppercase tracking-widest text-sm">
                                    Free Consultation <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function LayoutIcon({ size, className }: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
        </svg>
    );
}
