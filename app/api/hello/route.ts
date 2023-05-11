export async function GET(request: Request) {
	console.log("API hit");

	// fetch("https://webhook.site/610ebed6-d8b2-4ec1-8442-07658f4b6067", {
	// 	method: "OPTIONS",
	// 	body: JSON.stringify({ from: "next-clean route hit" }),
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// });

	return new Response(
		JSON.stringify({
			title: "Fetch successful",
		})
	);
}
