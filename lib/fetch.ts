export default async function fetchAsync() {
    const res = await fetch('https://swapi.dev/api/starships/');
    return await res.json();
}