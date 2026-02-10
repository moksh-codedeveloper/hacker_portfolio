"use client";
import React from "react";
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
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
			{stack.map((tech) => (
				<div
					key={tech.name}
					className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/40 hover:bg-cyan-600"
				>
					<tech.icon className="text-3xl text-white" />
					<span className="text-sm text-gray-200">{tech.name}</span>
				</div>
			))}
		</div>
	);
}
