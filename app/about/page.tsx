import React from "react";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import TechStack from "@/components/TechStack";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      <Navbar />
      
      <div className="flex justify-center items-center flex-col p-6 md:p-10 gap-10">
        {/* Identity / Hero Section */}
        <Card className="bg-zinc-950 border-green-900 border-2 max-w-3xl w-full p-6 md:p-10 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
          <CardHeader className="text-green-400 text-4xl text-center font-bold tracking-tighter">
            <span className="text-white opacity-50 text-2xl mr-2 font-light">{">"}</span>
            Moksh Malde
          </CardHeader>
          <CardDescription className="text-green-600 text-lg text-center mt-4">
            [ Ethical Hacker // System Architect // Linux Enthusiast ]
          </CardDescription>
        </Card>

        {/* System Logs / About Section */}
        <Card className="bg-zinc-900/50 border-green-900/30 max-w-4xl w-full p-8">
          <CardHeader className="text-green-400 text-xl font-bold border-b border-green-900 pb-2 mb-4">
            0x01_ABOUT_ME
          </CardHeader>
          <div className="text-green-500/90 text-md leading-relaxed space-y-4">
            <p>
              I am a Backend Engineer currently completing my final semester of 
              <span className="text-white"> Diploma in Computer Engineering </span> 
              at Silver Oak University, Ahmedabad.
            </p>
            <p>
              Unlike most, I don&apos;t just use systems—I tame them. My workflow is built 
              on <span className="text-white">Arch Linux</span> (Hyprland), 
              where I treat the OS like a sword to be sharpened. I specialize in 
              building resilient backend systems and exploring the theoretical 
              depths of cybersecurity.
            </p>
            <p>
              When I&apos;m not configuring dotfiles or building tools in 
              <span className="text-white"> C# and .NET</span>, I&apos;m analyzing 
              system architectures or diving into the psychology of strategy.
            </p>
            <div className="pt-4 flex gap-4">
              <Link href="/projects" className="text-green-400 hover:text-white underline decoration-dashed">
                ./view_projects.sh
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Tech Stack / Modules Section */}
      <div className="flex justify-center items-center p-10 flex-col bg-zinc-950 border-t border-green-900/50">
        <header className="text-xl px-6 py-2 border-2 border-green-500 text-green-500 font-bold mb-8 shadow-[4px_4px_0px_#22c55e]">
          LOADED_MODULES (TECH_STACK)
        </header>
        <div className="w-full max-w-5xl">
          <TechStack />
        </div>
      </div>
    </div>
  );
}