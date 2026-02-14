"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaMicrochip } from "react-icons/fa";
const projects = [
  {
    title: "ReconSage (v.Arch/.NET)",
    status: "STABLE",
    tech: ["C#", ".NET", "Arch Linux"],
    desc: "Windows-compatible high-speed recon tool developed on Arch. Optimized for asynchronous network scanning and header analysis.",
    link: "https://github.com/moksh-codedeveloper/Recon_Sage_Windows_Version",
    cmd: "git clone <Link of Recon_Sage_Windows_Version>"
  },
  {
    title: "E-Commerce Admin Backend",
    status: "DEPLOYED",
    tech: ["Node.js", "Express", "MongoDB"],
    desc: "Admin-driven e-commerce engine. Robust API architecture for inventory management and secure transactions.",
    link: "https://be-og8o.onrender.com",
    cmd: "curl -X GET https://be-og8o.onrender.com/api/status"
  },
  {
    title: "ReconSage (v.Python)",
    status: "LEGACY",
    tech: ["Python", "FastAPI"],
    desc: "The original Python implementation of the ReconSage engine. Foundation for automated security reconnaissance.",
    link: "https://github.com/moksh-codedeveloper/Recon_sage",
    cmd: "python3 main.py"
  },
  {
    title: "Hostel Management System",
    status: "U_CONSTRUCTION",
    tech: ["Python", "Django", "PostgreSQL"],
    desc: "Upcoming full-scale management system for streamlining hostel operations and student data.",
    link: "https://github.com/moksh-codedeveloper/hostel_mgmt",
    cmd: "python manage.py runserver"
  },
  {
    title: "Hacker_Portfolio_v2",
    status: "LIVE",
    tech: ["Next.js", "Shadcn/UI", "Tailwind"],
    desc: "This exact environment. A terminal-themed command center built to showcase system-level engineering.",
    link: "https://github.com/moksh-codedeveloper/", // Add your portfolio repo link
    cmd: "npm run dev"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-10">
      <Navbar />
      
      <div className="max-w-5xl mx-auto pt-20">
        <div className="mb-12 border-l-4 border-green-600 pl-4">
          <h1 className="text-3xl font-bold tracking-tighter text-white">SYSTEM_PROJECTS_DATABASE</h1>
          <p className="text-xs text-green-700 mt-1 uppercase tracking-widest">Authorized Access Only // Search Results: {projects.length} Entries</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-950 border border-green-900/50 rounded-none hover:border-green-400 transition-all group">
              <CardHeader className="flex flex-row items-center justify-between border-b border-green-900/30">
                <CardTitle className="text-xl text-green-400 flex items-center gap-3">
                  <FaDatabase className="text-xs opacity-50" />
                  {project.title}
                </CardTitle>
                <span className="text-[10px] px-2 py-1 bg-green-900/20 border border-green-500/30 text-green-500">
                  {project.status}
                </span>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-green-600/80 mb-4">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] border border-green-900 px-2 py-0.5 text-green-700 font-bold uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="bg-black p-3 border border-zinc-800 flex items-center justify-between group-hover:border-green-500/50 transition-colors">
                  <code className="text-sm text-zinc-400">{project.cmd}</code>
                  <div className="flex gap-4">
                    <a href={project.link} target="_blank" className="hover:text-white"><FaGithub /></a>
                    <a href={project.link} target="_blank" className="hover:text-white"><FaExternalLinkAlt className="text-xs" /></a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}