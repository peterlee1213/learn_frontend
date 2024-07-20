"use server"

async function getData() {
    const result = await fetch("http://test-java17:3100/hello", { cache: "no-cache" })
    return result
}

export default getData