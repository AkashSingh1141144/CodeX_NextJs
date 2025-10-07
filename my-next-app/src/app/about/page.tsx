import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | My Next App",
  description: "Learn more about us on this page",
};

export default function About() {
  return (
	<main className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-400 p-28">
	  <h1 className="text-9xl font-bold text-white drop-shadow-lg">
		About Us
	  </h1>
	</main>
  );
}