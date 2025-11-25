import { useEffect, useState } from "react";
import { BotMessageSquare, Send } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function ChatBot() {
	const [open, setOpen] = useState(false);
	const [showBotHint, setShowBotHint] = useState(true);
	const [messages, setMessages] = useState([
		{
			role: "assistant",
			content:
				"Hey! I'm Kgotso's bot assistant. You are free to ask anything you would like to know about Kgotso's career.",
		},
	]);
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState("");

	useEffect(() => {
		setTimeout(() => {
			setShowBotHint(false);
		}, 5000);
	}, []);

	async function sendMessage() {
		if (!input.trim()) return;

		const userMsg = { role: "user", content: input };
		setMessages((prev) => [...prev, userMsg]);

		setLoading(true);

		const res = await fetch("/api/chat", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ messages: [...messages, userMsg] }),
		});

		const data = await res.json();

		const botMsg =
			data?.choices?.[0]?.message?.content ||
			"⚠️ Something went wrong. Try again.";

		setMessages((prev) => [...prev, { role: "assistant", content: botMsg }]);
		setLoading(false);
		setInput("");
	}

	return (
		<>
			<button
				onClick={() => setOpen(!open)}
				className={`fixed bottom-28 right-6 ${
					!open && "animate-bounce-"
				} cursor-pointer w-14 h-14 rounded-full hover:animate-none bg-blue-600 text-white shadow-xl flex items-center justify-center text-xl z-50 hover:bg-blue-700 transition`}
			>
				<BotMessageSquare />
			</button>

			{open && (
				<div className="fixed bottom-44 right-6 w-80 h-96 bg-linear-to-b from-neutral-700 to-neutral-700 text-white shadow-2xl rounded-lg flex flex-col z-50">
					<div className="flex items-center justify-between p-3 bg-blue-600 text-white font-semibold rounded-t-lg">
						<p>Kgotso's AI Bot</p>
						<button
							onClick={() => setOpen(!open)}
							className="cursor-pointer text-gray-300 transition-colors hover:text-white"
						>
							X
						</button>
					</div>
					<ScrollArea className="flex-1 block whitespace-nowrap overflow-hidden">
						<div className="flex-1 p-3 flex flex-col space-y-2">
							{messages.map((msg, i) => (
								<span
									key={i}
									className={`p-2 rounded-lg text-wrap text-sm max-w-[85%] ${
										msg.role === "assistant"
											? "bg-gray-500 self-start"
											: "bg-[#3b82f6] self-end ml-auto"
									}`}
								>
									{msg.content}
								</span>
							))}

							{loading && (
								<div className="text-gray-200 text-sm">
									Assistant is typing…
								</div>
							)}
						</div>
						<ScrollBar orientation="vertical" />
					</ScrollArea>

					<div className="p-3 border-t border-t-neutral-400 flex gap-2">
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && sendMessage()}
							className="flex-1 border rounded-lg border-neutral-400 px-3 py-1 text-sm focus:border-[#3c83f6] outline-0"
							placeholder="Ask something..."
						/>
						<button
							onClick={sendMessage}
							className="bg-[#3b82f6] text-white px-3 cursor-pointer py-1 rounded-lg hover:bg-blue-500 justify-center item-center"
						>
							<Send size={14} />
						</button>
					</div>
				</div>
			)}

			{!open && showBotHint && (
				<>
					<div className="fixed bottom-44 right-20 max-w-90 bg-blue-500 py-1 px-1.5 text-white shadow-2xl rounded-lg flex flex-col rounded-br-none rounded-tl-none z-50">
						Hey there! Have some quetions about Kgotso's profession? Ask me 😁
					</div>
					<div className="fixed bottom-46 p-2 animate-bounce right-10 max-w-90 bg-blue-500 py-1 px-1.5 rounded-full flex flex-col z-50">
						👇
					</div>
				</>
			)}
		</>
	);
}
