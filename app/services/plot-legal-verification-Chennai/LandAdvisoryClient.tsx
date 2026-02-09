"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Map, HeartHandshake, ShieldCheck, FileCheck } from "lucide-react";
import Link from 'next/link';
import NextImage from 'next/image';

export default function LandAdvisoryClient() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1A1A1A]">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <NextImage
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
                        alt="Land Buying & Selling Hero"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 z-10" />
                </div>

                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
                    >
                        Land <span className="text-[#E63946]">Advisory</span>
                    </motion.h1>
                    <p className="text-xl text-gray-200 max-w-2xl border-l-4 border-[#0F4C81] pl-6">
                        Expert guidance on buying and selling verified residential and commercial plots.
                        Transparent transactions with full legal security.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        <div className="relative">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-[#E63946]/10 -translate-x-1/2 -translate-y-1/2 rounded-full" />
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#0F4C81]/10 translate-x-1/3 translate-y-1/3 rounded-full" />
                            <div className="relative z-10 w-full h-[400px] rounded-3xl shadow-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700">
                                <NextImage
                                    src="https://images.unsplash.com/photo-1542601906990-24ccd08d7455?q=80&w=2000"
                                    alt="Real Estate Plan"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-[#0F4C81] mb-8">Secure Your Investment</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                SKR Builders & Promoters provide professional land advisory services in Chennai,
                                helping clients buy and sell residential and commercial plots with confidence.
                                Our process focuses on legal verification, clear documentation, and transparent
                                property transactions.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We assist with verified plots, DTCP and CMDA approved layouts, title deed
                                verification, land valuation, registration support, and end-to-end advisory
                                for safe property decisions.

                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-xl text-[#0F4C81]">
                                        <FileCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Legal Verification</h4>
                                        <p className="text-sm text-gray-500">Thorough checking of EC, Patta, and title deeds to ensure litigation-free property.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-xl text-[#E63946]">
                                        <HeartHandshake size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Transparent Brokerage</h4>
                                        <p className="text-sm text-gray-500">Bridging the gap between genuine buyers and sellers with open communication.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-xl text-green-600">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Approval Guidance</h4>
                                        <p className="text-sm text-gray-500">Expert assistance in securing CMDA and DTCP approvals for residential layouts.</p>
                                    </div>
                                </div>
                            </div>

                            <Link href="/#contact" className="mt-12 inline-block px-8 py-4 bg-[#0F4C81] text-white font-bold rounded-lg hover:bg-black transition-colors">
                                Buy/Sell Property
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
