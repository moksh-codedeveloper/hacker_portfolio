import React from "react";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import TechStack from "@/components/TechStack";
export default function Project() {
	return (
		<>
			<div className="flex justify-center p-10 flex-col items-center">
				<Card className="bg-cyan-400 w-2xl p-10 rounded-2xl mb-10">
					<CardHeader className="text-black text-3xl text-center hover:underline">
						About Page
					</CardHeader>
					<CardDescription className="text-black text-xl">
						Hey i am Backend Enginner and System Architect
					</CardDescription>
				</Card>
				<Card className="bg-cyan-400 w-4xl">
					<CardHeader className="text-black text-2xl">
						Personal Details :-
					</CardHeader>
					<CardDescription className="text-black p-3 m-3 text-xl flex-col">
						<p>Name :- Moksh Malde</p>
						<p>Age :- 18</p>
						<p>Residence :- Gujarat, Ahmedabad</p>
						<p>Phone No. :- 8320356172</p>
						<p>Degree :- Diploma Computer Enginnering</p>
						<p>Studies at :- Silver Oak University</p>
					</CardDescription>
				</Card>
			</div>
			<div className="flex justify-center bg-cyan-400 items-center p-10 flex-col">
				<header className="text-2xl max-w-2xl p-7 ml-10 mr-10 bg-amber-500 rounded-3xl">
					Expertise in :-
				</header>
                <div className="p-5">
				<TechStack />
                </div>
			</div>
		</>
	);
}
