"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Home, Layout, Lightbulb, Armchair } from "lucide-react";
import Link from 'next/link';
import NextImage from 'next/image';

export default function InteriorClient() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1A1A1A]">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <NextImage
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
                        alt="Interior Design Hero"
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
                        Interior <span className="text-[#E63946]">Design</span>
                    </motion.h1>
                    <p className="text-xl text-gray-200 max-w-2xl border-l-4 border-[#0F4C81] pl-6">
                        Crafting spaces that reflect your personality and enhance your productivity.
                        Residential and commercial interiors delivered with precision.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
                    <div className="order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-gray-100 p-6 rounded-2xl text-center">
                                <Layout className="mx-auto text-[#0F4C81] mb-3" size={32} />
                                <span className="block font-bold">Modular Kitchens</span>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-2xl text-center">
                                <Home className="mx-auto text-[#0F4C81] mb-3" size={32} />
                                <span className="block font-bold">Wardrobes</span>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-2xl text-center">
                                <Lightbulb className="mx-auto text-[#0F4C81] mb-3" size={32} />
                                <span className="block font-bold">Lighting Layouts</span>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-2xl text-center">
                                <Armchair className="mx-auto text-[#0F4C81] mb-3" size={32} />
                                <span className="block font-bold">Custom Furniture</span>
                            </div>
                        </div>

                        <div className="bg-[#0F4C81] text-white p-10 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Turnkey Interior Solutions</h3>
                            <p className="opacity-80 mb-6">
                                We provide end-to-end interior services, from initial 3D designs to final on-site execution.
                                Our team ensures every detail aligns with your vision.
                            </p>
                            <Link href="/#contact" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all">
                                Get A Quote <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-[#0F4C81] mb-8">Elegance in Every Detail</h2>
                        <div className="prose prose-lg text-gray-600 mb-12">
                            <p>
                                SKR Builders and Promoters offer comprehensive interior design services in Chennai.
                                Whether it's your dream home or a high-performance office, we blend aesthetics with functionality.
                            </p>
                            <p>
                                Our expertise covers space planning, material selection, and expert execution, or what we call "turnkey interior services".
                            </p>
                        </div>

                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-[#E63946] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">02</span>
                            Our Capabilities
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "3D Visualization & Space Planning",
                                "Modular Kitchen & Wardrobe Systems",
                                "False Ceiling & Decorative Lighting",
                                "Custom Carpentry & Furniture",
                                "Office Partitioning & Workstation Setup"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 p-3 border-b border-gray-100">
                                    <div className="w-2 h-2 bg-[#E63946] rounded-full" />
                                    <span className="font-medium text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
