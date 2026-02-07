"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
		{/* Navbar completed and fulll body is now black  */}
			<div className="flex justify-center bg-black h-screen flex-nowrap sticky top-0.5">
				<div className="h-15 text-black bg-cyan-400 p-4 m-0 rounded-l-4xl hover:text-green-800 hover:border-cyan-800">
					<p>Portfolio</p>
				</div>
				<div className="items-center">
					<div className="p-3 m-0 bg-cyan-400 text-black rounded-r-3xl">
						<Button className="text-black bg-transparent hover:bg-green-300">
							<Link href={"/"} target="_blank">Home</Link>
						</Button>
						<Button className="text-black bg-transparent hover:bg-green-300">
							<Link href={"/"} target="_blank">About</Link>
						</Button>
						<Button className="text-black bg-transparent hover:bg-green-300">
							<Link href={"/"} target="_blank">Contact us</Link>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
