/* eslint-disable react-hooks/purity */
"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { toast } from "sonner";
export default function ContactPage() {
	const [formData, setFormData] = useState({
		alias: "",
		email: "",
		message: "",
	});
	const [isSending, setIsSending] = useState(false);

	const handleInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleShipIt = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSending(true);

		// Basic validation
		if (!formData.alias || !formData.email || !formData.message) {
			alert("ERROR: Missing data packets.");
			return;
		}

		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				toast("TRANSMISSION_SUCCESS Message has been relayed to Moksh", {
					position: "top-center",
					className: "bg-zinc-950 border-green-500 text-green-500 font-mono",
				});
				setFormData({ alias: "", email: "", message: "" }); // Clear form
			} else {
				toast("TRASNMISSION_ERROR something is not going right with the transmission", {
					description: "Packet dropped. Gateway unreachable.",
					className: "font-mono",
				});
			}
		} catch (err) {
			toast("CRITICAL_ERROR", {
				className: "font-mono",
				position: "top-center",
				description : `I think something has gone wrong with the internet connection :- ${err}`
			});
		}finally{
			setIsSending(false);
		}
	};

	return (
		<div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-6">
			<Navbar />

			<Card className="w-full max-w-lg bg-zinc-950 border-green-800 shadow-[0_0_20px_rgba(34,197,94,0.15)] mt-20 text-white">
				<CardHeader className="border-b border-green-900/50">
					<CardTitle className="text-sm tracking-widest flex items-center gap-2">
						<span className="animate-pulse">●</span> ESTABLISH_COMMS_CHANNEL
					</CardTitle>
				</CardHeader>

				<CardContent className="pt-6 text-white">
					<form onSubmit={handleShipIt} className="space-y-4">
						<div>
							<label className="text-[10px] uppercase opacity-50 mb-1 block">
								Subject_Alias
							</label>
							<Input
								name="alias"
								placeholder="Who are you?"
								onChange={handleInput}
								className="bg-black border-green-900 text-green-400 focus:border-green-400"
							/>
						</div>

						<div>
							<label className="text-[10px] uppercase opacity-50 mb-1 block">
								Return_Node (Email)
							</label>
							<Input
								name="email"
								type="email"
								placeholder="node@network.com"
								onChange={handleInput}
								className="bg-black border-green-900 text-green-400 focus:border-green-400"
							/>
						</div>

						<div>
							<label className="text-[10px] uppercase opacity-50 mb-1 block">
								Payload (Message)
							</label>
							<Textarea
								name="message"
								placeholder="Input message..."
								onChange={handleInput}
								className="bg-black border-green-900 text-green-400 focus:border-green-400 min-h-[120px]"
							/>
						</div>

						<Button
							type="submit"
							className="w-full bg-green-700 text-black font-bold hover:bg-green-400"
							disabled={isSending}
						>
							{isSending ? "ENCRYPTING..." : "EXECUTE_SEND()"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
