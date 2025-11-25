export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { messages } = req.body;

	try {
		const response = await fetch(
			"https://openrouter.ai/api/v1/chat/completions",
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${process.env.OPENROUTER_KEY}`,
					"Content-Type": "application/json",
					"HTTP-Referer": "https://kgotso.vercel.app",
					"X-Title": "Kgotso Portfolio Bot",
				},
				body: JSON.stringify({
					model: "x-ai/grok-4.1-fast:free",
					messages,
				}),
			}
		);

		const data = await response.json();
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}
