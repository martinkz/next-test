export default async function Home() {
	const url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/hello`;
	console.log(url);

	const result = await fetch(url);
	const data = await result.json();
	console.log(data);

	return <h1>{data.title}</h1>;
}
