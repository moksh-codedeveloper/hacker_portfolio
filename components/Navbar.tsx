"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { FaBars } from "react-icons/fa";

export function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Toggle Button */}
			<div className="fixed top-4 left-4 z-50">
				<Button
					onClick={() => setOpen((prev) => !prev)}
					className="bg-cyan-400 text-black hover:bg-cyan-600"
				>
					<FaBars className="text-xl" />
				</Button>
			</div>

			{/* Navbar */}
			{open && (
				<nav className="sticky top-3 flex justify-center">
					<div className="flex flex-wrap items-center gap-4 px-6 py-3 rounded-full bg-cyan-400 shadow-md">
						<span className="font-semibold text-black">
							Portfolio
						</span>

						<Link href="/">
							<Button
								variant="ghost"
								className="text-black hover:bg-cyan-600"
							>
								Home
							</Button>
						</Link>

						<Link href="/about">
							<Button
								variant="ghost"
								className="text-black hover:bg-cyan-600"
							>
								About
							</Button>
						</Link>

						<Link href="/contact">
							<Button
								variant="ghost"
								className="text-black hover:bg-cyan-600"
							>
								Contact
							</Button>
						</Link>

						<ModeToggle />
					</div>
				</nav>
			)}
		</>
	);
}
