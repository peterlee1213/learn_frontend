export async function getData() {
    const result = await fetch("http://test-java17:3100/hello")
    const text = await result.text()
    return text
}