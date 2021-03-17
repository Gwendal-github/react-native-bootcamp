export default async function fetchAsync(url: string) {
    const res = await fetch(url);
    return await res.json();
}