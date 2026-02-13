import React from "react";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import TechStack from "@/components/TechStack";
import Link from "next/link";

export default function About() {
	return (
		<>
			<div className="flex justify-center items-center flex-col p-10 gap-10">
				{/* Hero Section */}
				<Card className="bg-cyan-400 max-w-3xl p-10 rounded-2xl">
					<CardHeader className="text-black text-4xl text-center font-bold">
						Moksh Malde
					</CardHeader>
					<CardDescription className="text-black text-lg text-center mt-4">
						Backend Engineer • System Architect • Linux Enthusiast
					</CardDescription>
				</Card>

				{/* About Section */}
				<Card className="bg-cyan-400 max-w-4xl p-8 rounded-2xl">
					<CardHeader className="text-black text-2xl font-semibold">
						About Me
					</CardHeader>
					<CardDescription className="text-black text-lg mt-4 space-y-4">
						<p>
							Hey there — I’m a backend developer, and as you might have
							noticed, most of my projects focus on backend systems. Some of
							them are listed in the{" "}
							<Link href={"/projects"} className="text-blue-500 underline">
								Projects
							</Link>{" "}
							section.
						</p>
						<p>
							I enjoy diving deep into Linux — breaking things, rebuilding them,
							customizing my environment, and understanding how everything works
							under the hood. I like experimenting, tweaking configurations, and
							constantly learning through hands-on exploration. Currently pursuing the Diploma Computer engineering degree
						</p>
					</CardDescription>
				</Card>
			</div>

			{/* Tech Stack Section */}
			<div className="flex justify-center bg-cyan-400 items-center p-10 flex-col">
				<header className="text-2xl max-w-2xl p-7 bg-amber-500 rounded-3xl font-semibold">
					Tech Stack
				</header>
				<div className="p-5">
					<TechStack />
				</div>
			</div>
		</>
	);
}
