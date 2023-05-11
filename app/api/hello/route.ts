export async function GET(request: Request) {
	console.log("API hit");

	return new Response(
		JSON.stringify({
			title: "Fetch successful",
		})
	);
}
