"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from 'next/link';
import NextImage from 'next/image';

export default function ConstructionClient() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1A1A1A]">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <NextImage
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
                        alt="Construction Hero"
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
                        Residential <span className="text-[#E63946]">Construction</span>
                    </motion.h1>
                    <p className="text-xl text-gray-200 max-w-2xl border-l-4 border-[#0F4C81] pl-6">
                        From foundation to finish, we build homes that stand the test of time.
                        Custom villas, apartments, and independent houses tailored to your lifestyle.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-[#0F4C81] mb-8">Building Your Legacy</h2>
                        <div className="prose prose-lg text-gray-600 mb-12">
                            <p>
                                At SKR Builders, we understand that building a home is one of life's most significant investments.
                                Our residential construction services are designed to provide you with a seamless, transparent,
                                and high-quality building experience.
                            </p>
                            <p>
                                We specialize in turnkey projects, handling everything from architectural planning and structural
                                design to material procurement and interior finishing.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-[#0F4C81] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">01</span>
                            Our Expertise
                        </h3>
                        <ul className="space-y-4 mb-12">
                            {[
                                "Custom Villa Construction",
                                "Multi-Story Apartments",
                                "Structural Design & RCC Framework",
                                "Premium Interior Finishing",
                                "Smart Home Integration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <CheckCircle2 className="text-[#E63946] shrink-0" size={20} />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-3xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E63946] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-bold mb-8 relative z-10">Why Choose SKR?</h3>
                        <div className="space-y-8 relative z-10">
                            <div>
                                <h4 className="text-lg font-bold text-[#E63946] mb-2">Quality Materials</h4>
                                <p className="text-gray-400 text-sm">We strictly use branded steel (TATA/JSW) and premium cement grades (Ultratech/Ramco).</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[#E63946] mb-2">On-Time Delivery</h4>
                                <p className="text-gray-400 text-sm">Strict project management schedules ensure you move in on the promised date.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[#E63946] mb-2">Transparent Pricing</h4>
                                <p className="text-gray-400 text-sm">No hidden costs. Detailed BOQs provided upfront for all packages.</p>
                            </div>
                        </div>

                        <Link href="/#contact" className="mt-12 w-full bg-white text-[#1A1A1A] py-4 font-black uppercase tracking-widest hover:bg-[#E63946] hover:text-white transition-colors flex items-center justify-center gap-3 rounded-xl">
                            Start Your Project <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
