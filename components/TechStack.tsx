"use client";
import React from "react";
import {
    SiPython, SiMongodb, SiDotnet, SiNodedotjs, SiNextdotjs,
    SiLinux, SiDjango, SiDocker, SiReact, SiGit,
} from "react-icons/si";

export default function TechStack() {
    const stack = [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Python", icon: SiPython },
        { name: "Django", icon: SiDjango },
        { name: ".NET Core", icon: SiDotnet },
        { name: "Arch Linux", icon: SiLinux },
        { name: "Docker", icon: SiDocker },
        { name: "Git", icon: SiGit },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 font-mono">
            {stack.map((tech) => (
                <div
                    key={tech.name}
                    className="group relative flex flex-col items-center gap-3 p-6 rounded-none border border-green-900/30 bg-zinc-950 transition-all hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                >
                    {/* Corner accents for that "tech" look */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500 opacity-0 group-hover:opacity-100" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500 opacity-0 group-hover:opacity-100" />
                    
                    <tech.icon className="text-4xl text-green-700 group-hover:text-green-400 transition-colors" />
                    <span className="text-[10px] tracking-widest text-green-900 group-hover:text-green-500 uppercase">
                        {tech.name}
                    </span>
                </div>
            ))}
        </div>
    );
}