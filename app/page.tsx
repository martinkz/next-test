import styles from "./page.module.css";

const url = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://127.0.0.1:3000";
console.log(`${url}/api/hello`);

export default async function Home() {
	const result = await fetch(`${url}/api/hello`);
	const jsonData = await result.json();
	// const result = { title: "test" };
	console.log(jsonData);

	return (
		<main className={styles.main}>
			<h1>{jsonData.title}</h1>
		</main>
	);
}
