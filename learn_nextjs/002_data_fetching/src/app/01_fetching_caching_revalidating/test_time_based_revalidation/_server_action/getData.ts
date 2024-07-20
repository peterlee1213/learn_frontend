"use server"

async function getData() {
    const result = await fetch("http://test-java17:3100/hello", { next: { revalidate: 5 } })
    return result
}

export default getData