"use client";

import React from "react";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import TechStack from "@/components/TechStack";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Navbar } from "@/components/Navbar";
export default function Home() {
	return (
		<>
			<Navbar/>
			{/* Hero */}
			<Card className="mt-10 max-w-3xl mx-auto bg-cyan-500 hover:bg-cyan-600">
				<CardHeader className="text-3xl font-bold text-center text-black">
					I’m Moksh Malde
				</CardHeader>
				<CardDescription className="text-center text-gray-100 text-lg px-6">
					Backend Engineer • Full-Stack Developer • Linux Enthusiast
				</CardDescription>
			</Card>

			{/* Main Content */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8">
				{/* Tech Stack */}
				<Card className="bg-cyan-400 hover:bg-cyan-600">
					<CardHeader className="text-2xl text-center text-black">
						Tech Stack
					</CardHeader>
					<CardContent>
						<TechStack />
					</CardContent>
				</Card>

				{/* About */}
				<Card className="bg-cyan-400 hover:bg-cyan-600">
					<CardHeader className="text-2xl text-center text-black">
						About Me
					</CardHeader>

					<CardDescription className="text-center text-gray-100">
						Backend-focused developer with system-level thinking
					</CardDescription>

					<CardContent className="mt-4 space-y-4 text-black">
						<p>
							I build scalable backend systems and full-stack applications using
							MERN, Django (Python), and .NET (C#).
						</p>

						<p>
							Daily-driving Arch Linux for 2+ years. I care deeply about
							performance, security, and clean architecture.
						</p>

						<Link
							href="/projects"
							className="underline text-black hover:text-gray-200"
						>
							View my projects →
						</Link>
					</CardContent>
				</Card>
			</div>

			{/* Social */}
			<Card className="mt-10 mx-10 bg-cyan-400 hover:bg-cyan-600">
				<CardHeader className="text-2xl text-center text-black">
					Social Links
				</CardHeader>

				<CardDescription className="flex justify-center gap-6 py-4">
					<Link href="https://github.com/moksh-codedeveloper" target="_blank">
						<FaGithub className="text-3xl text-black" />
					</Link>
					<Link href="https://www.linkedin.com/in/moksh-malde-126902288/" target="_blank">
						<FaLinkedin className="text-3xl text-black" />
					</Link>
					<Link href="https://www.youtube.com/@glitchnuniverse" target="_blank">
						<FaYoutube className="text-3xl text-black" />
					</Link>
				</CardDescription>

				<CardContent className="text-center text-black">
					© 2026 Moksh Malde
				</CardContent>
			</Card>
		</>
	);
}
