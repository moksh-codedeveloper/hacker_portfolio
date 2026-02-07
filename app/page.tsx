"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<div className="flex items-center justify-center">
				<div className="h-15 text-black bg-cyan-400 p-4 m-2 rounded-4xl">
					<p>Portfolio</p>
				</div>
				<div className="items-center">
					<div className="p-3 m-4 bg-cyan-400 text-black rounded-3xl">
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
