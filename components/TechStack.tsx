"use client";
import {
	SiPython,
	SiMongodb,
	SiDotnet,
	SiNodedotjs,
	SiNextdotjs,
	SiLinux,
	SiDjango,
	SiDocker,
	SiReact,
	SiGit,
} from "react-icons/si";
import React from "react";

export default function TechStack() {
	const stack = [
		{ name: "React", icon: SiReact },
		{ name: "Next.js", icon: SiNextdotjs },
		{ name: "Node.js", icon: SiNodedotjs },
		{ name: "MongoDB", icon: SiMongodb },
		{ name: "Python", icon: SiPython },
		{ name: "Django", icon: SiDjango },
		{ name: ".NET", icon: SiDotnet },
		{ name: "Linux (Arch)", icon: SiLinux },
		{ name: "Docker", icon: SiDocker },
		{ name: "Git", icon: SiGit },
	];

	return (
		<section className="mt-16 text-center">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
				{stack.map((tech) => (
					<div
						key={tech.name}
						className="flex flex-col items-center gap-2 p-4 rounded-xl bg-black/40 hover:bg-cyan-500 transition"
					>
						<tech.icon className="text-4xl text-white" />
						<span className="text-sm text-gray-200">{tech.name}</span>
					</div>
				))}
			</div>
		</section>
	);
}
