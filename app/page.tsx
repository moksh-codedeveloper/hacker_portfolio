"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import TechStack from "@/components/TechStack";

export default function Home() {
	return (
		<>
			{/* Navbar */}
			<nav className="sticky top-0 z-50 flex justify-center mt-2">
				<div className="flex items-center bg-cyan-400 rounded-full px-6 py-2 gap-4">
					<span className="font-semibold text-black">Portfolio</span>

					<Link href="/">
						<Button variant="ghost" className="text-black hover:bg-green-300">
							Home
						</Button>
					</Link>

					<Link href="/about">
						<Button variant="ghost" className="text-black hover:bg-green-300">
							About
						</Button>
					</Link>

					<Link href="/contact">
						<Button variant="ghost" className="text-black hover:bg-green-300">
							Contact
						</Button>
					</Link>
				</div>
			</nav>

			{/* Hero Card */}
			<Card className="bg-cyan-500 mt-10 max-w-3xl mx-auto hover:bg-black transition-colors">
				<CardHeader className="text-3xl text-center font-bold hover:text-white">
					I’m Moksh Malde
				</CardHeader>

				<CardDescription className="text-center text-gray-200 px-6 text-xl">
					Backend Engineer • Full-Stack Developer • Linux Enthusiast
				</CardDescription>
			</Card>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="text-2xl hover:bg-zinc-800 bg-cyan-400 p-5 mt-5 text-gray-500 max-w-3xl mx-10 flex-row flex-wrap flex-5 justify-center rounded-md items-center">
					<header className="text-3xl text-center hover:underline">
						TechStack
					</header>
					<section className="mt-3">
						<TechStack />
					</section>
				</div>
				<Card className="mx-10 mt-10 bg-cyan-400 max-w-4xl hover:bg-zinc-800 hover:border-zinc-800">
					<CardHeader className="text-3xl text-center hover:text-gray-100">
						About Me
					</CardHeader>

					<CardDescription className="text-center text-gray-100">
						Backend-focused developer with system-level thinking
					</CardDescription>

					<CardContent className="mt-4 space-y-4 text-left text-zinc-900 bg-cyan-500 p-6 rounded-2xl hover:text-white transition">
						<p>
							I specialize in building scalable backend systems and full-stack
							applications using MERN, Django (Python), and .NET (C#).
						</p>

						<p>
							I’ve been daily-driving Arch Linux for over 2 years and enjoy
							working close to the system — performance, security, and clean
							architecture matter to me.
						</p>

						<Link
							href="/projects"
							className="inline-block underline text-cyan-900 hover:text-gray-200"
						>
							View my projects →
						</Link>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
