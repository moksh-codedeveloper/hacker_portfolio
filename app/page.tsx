"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
		{/* Navbar completed and fulll body is now black  */}
			<div className="flex justify-center flex-nowrap sticky top-0.5">
				<div className="h-15 text-black bg-cyan-400 p-4 m-0 rounded-l-4xl hover:text-green-800 hover:border-cyan-800">
					<p>Portfolio</p>
				</div>
				<div className="items-center">
					<div className="p-3 m-0 bg-cyan-400 text-black rounded-r-3xl">
						<Button className="text-black bg-transparent hover:bg-green-300">
							<Link href={"/"} target="_blank">Home</Link>
						</Button>
						<Button className="text-black bg-transparent hover:bg-green-300">
							<Link href={"/about"} target="_blank">About</Link>
						</Button>
						<Button className="text-black bg-transparent hover:bg-green-300">
							<Link href={"/contact"} target="_blank">Contact us</Link>
						</Button>
					</div>
				</div>
			</div>
			<Card className="bg-cyan-500 mt-5 hover:text-cyan-500 hover:bg-black">
				<CardHeader className="text-2xl text-center relative">
					I am Moksh Malde
				</CardHeader>
				<CardDescription className="text-gray-200 hover:bg-gray-400 pb-4 rounded-2xl hover:text-zinc-700 text-center">
					<p className="m-1 p-2">Here is the short description about myself</p>
					<CardContent className="text-gray-100">
						I am the backend engineer i have worked with major stacks of industries like MERN stack, Python with Django, Dotnet C# and many more also i have been using the  Linux for about the 2 years on my personal as the main OS (Arch Linux) and have worked with many projects which you can visit from here :- <Link href={"/projects"} className="underline text-blue-600 hover:text-gray-300">Click Here</Link>
					</CardContent>
				</CardDescription>
			</Card>
		</>
	);
}
