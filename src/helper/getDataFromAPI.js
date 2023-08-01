export default async function getDataFromAPI() {
	let res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
	let data = await res.json();

	return data.results;
}
