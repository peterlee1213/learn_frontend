"use server"

export const getData = async () => {
    const result = await fetch("http://test-java17:3100/hello", { cache: "force-cache" });
    const text = await result.text();
    return text
}