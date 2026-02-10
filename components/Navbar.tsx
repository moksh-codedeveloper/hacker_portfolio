"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Navbar(){
    return (
			<nav className="sticky top-0 z-50 flex justify-center mt-3">
				<div className="flex items-center gap-4 px-6 py-2 rounded-full bg-cyan-400">
					<span className="font-semibold text-black">Portfolio</span>

					<Link href="/">
						<Button variant="ghost" className="text-black hover:bg-cyan-600">
							Home
						</Button>
					</Link>

					<Link href="/about">
						<Button variant="ghost" className="text-black hover:bg-cyan-600">
							About
						</Button>
					</Link>

					<Link href="/contact">
						<Button variant="ghost" className="text-black hover:bg-cyan-600">
							Contact
						</Button>
					</Link>
				</div>
			</nav>

    )
}