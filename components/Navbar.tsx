"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaTerminal, FaTimes } from "react-icons/fa";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center gap-2 font-mono">
            {/* Toggle Button */}
            <Button
                onClick={() => setOpen((prev) => !prev)}
                className="bg-zinc-950 border border-green-900 text-green-500 hover:bg-green-900 hover:text-white shadow-[0_0_10px_rgba(34,197,94,0.2)]"
            >
                {open ? <FaTimes /> : <FaTerminal />}
                <span className="ml-2 text-xs">{open ? "CLOSE" : "MENU"}</span>
            </Button>

            {/* Floating Navbar HUD */}
            {open && (
                <nav className="animate-in fade-in zoom-in duration-200">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-950/90 border border-green-500/30 backdrop-blur-md shadow-2xl">
                        <div className="hidden md:block mr-4 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] text-green-500">
                            STATUS: ENCRYPTED
                        </div>

                        {[
                            { name: "ROOT", path: "/" },
                            { name: "ABOUT", path: "/about" },
                            { name: "COMMS", path: "/contact" }
                        ].map((item) => (
                            <Link key={item.name} href={item.path}>
                                <Button
                                    variant="ghost"
                                    className="text-green-500 hover:bg-green-500 hover:text-black text-xs font-bold"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </div>
    );
}