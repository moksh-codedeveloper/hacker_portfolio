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
        <CardHeader className="text-3xl text-center font-bold">
          I’m Moksh Malde
        </CardHeader>

        <CardDescription className="text-center text-gray-200 px-6">
          Backend Engineer • Full-Stack Developer • Linux Enthusiast
        </CardDescription>

        <CardContent className="text-gray-100 text-center mt-4 space-y-3">
          <p>
            I specialize in building scalable backend systems and full-stack
            applications using MERN, Django (Python), and .NET (C#).
          </p>
          <p>
            I’ve been daily-driving Arch Linux for over 2 years and love working
            close to the system — performance, security, and clean architecture
            matter to me.
          </p>

          <Link
            href="/projects"
            className="inline-block underline text-blue-600 hover:text-gray-300"
          >
            View my projects →
          </Link>
        </CardContent>
      </Card>
	  <Card>
		<CardHeader>
			TechStack
		</CardHeader>
		<CardDescription>
			<TechStack />
		</CardDescription>
	  </Card>
    </>
  );
}
