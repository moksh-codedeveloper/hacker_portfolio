"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TechStack from "@/components/TechStack";
import { FaGithub, FaLinkedin, FaYoutube, FaTerminal, FaShieldAlt } from "react-icons/fa";
import { Navbar } from "@/components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-10">
            <Navbar />

            {/* Main Terminal Container */}
            <div className="max-w-6xl mx-auto space-y-8 pt-16">
                
                {/* Hero / Banner: System ID */}
                <Card className="bg-zinc-950 border-2 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)] overflow-hidden">
                    <div className="bg-green-500 text-black px-4 py-1 text-xs font-bold flex justify-between items-center">
                        <span>SYSTEM_IDENTIFICATION_MODULE</span>
                        <span>v2.0.26</span>
                    </div>
                    <CardHeader className="py-8">
                        <CardTitle className="text-4xl md:text-6xl font-black text-center tracking-tighter text-white">
                            MOKSH_MALDE
                        </CardTitle>
                        <CardDescription className="text-center text-green-400 text-sm md:text-lg mt-2 uppercase tracking-[0.2em]">
                            Backend Engineer // Arch Linux Poweruser // Ethical Hacker
                        </CardDescription>
                    </CardHeader>
                </Card>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Column 1: About Me (The "Log") */}
                    <Card className="md:col-span-2 bg-zinc-900/50 border-green-900 text-green-500">
                        <CardHeader className="border-b border-green-900/50 py-3">
                            <CardTitle className="text-sm flex items-center gap-2">
                                <FaTerminal className="text-xs" /> USER_BIO.LOG
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4 text-sm md:text-base leading-relaxed">
                            <p>
                                <span className="text-white font-bold">{">"}</span> Based in Ahmedabad, India. Pursuing Diploma in Computer Engineering.
                            </p>
                            <p>
                                <span className="text-white font-bold">{">"}</span> I build scalable backends using <span className="text-white">MERN, Django, and .NET</span>. My code is optimized for speed—because on Linux, every millisecond counts.
                            </p>
                            <p>
                                <span className="text-white font-bold">{">"}</span> 2+ years of daily-driving <span className="text-white">Arch Linux</span>. If it&apos;s not tiling (Hyprland), I&apos;m not using it.
                            </p>
                            <Link href="/projects" className="inline-block mt-4 text-black bg-green-500 px-4 py-1 font-bold hover:bg-white transition-colors">
                                RUN projects.exe →
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Column 2: Quick Stats / Socials */}
                    <Card className="bg-zinc-950 border-green-900 flex flex-col text-white">
                        <CardHeader className="border-b border-green-900/50 py-3">
                            <CardTitle className="text-sm flex items-center gap-2">
                                <FaShieldAlt className="text-xs" /> EXTERNAL_LINKS
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-around items-center py-6">
                            <Link href="https://github.com/moksh-codedeveloper" target="_blank" className="group flex items-center gap-4 w-full p-2 hover:bg-green-500/10 transition-all">
                                <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                                <span className="text-xs tracking-widest">GITHUB/MOKSH</span>
                            </Link>
                            <Link href="https://www.linkedin.com/in/moksh-malde-126902288/" target="_blank" className="group flex items-center gap-4 w-full p-2 hover:bg-green-500/10 transition-all">
                                <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                                <span className="text-xs tracking-widest">LINKEDIN/CONNECT</span>
                            </Link>
                            <Link href="https://www.youtube.com/@glitchnuniverse" target="_blank" className="group flex items-center gap-4 w-full p-2 hover:bg-green-500/10 transition-all">
                                <FaYoutube className="text-2xl text-red-500 group-hover:text-white transition-colors" />
                                <span className="text-xs tracking-widest">YT/GLITCH_N_UNIVERSE</span>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* Tech Stack: The Core Modules */}
                <Card className="bg-black border-2 border-green-900/50 shadow-inner overflow-hidden">
                    <div className="bg-zinc-900 px-4 py-2 text-[10px] tracking-[0.3em] text-green-800 font-bold border-b border-green-900/50 uppercase">
                        Loaded_System_Modules
                    </div>
                    <CardContent className="p-8">
                        <TechStack />
                    </CardContent>
                </Card>

                {/* Footer Footer */}
                <footer className="text-center text-[10px] opacity-40 py-10 uppercase tracking-[0.5em]">
                    [ End of Transmission // Moksh Malde © 2026 ]
                </footer>
            </div>
        </div>
    );
}