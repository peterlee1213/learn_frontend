"use server"

export default async function ({ name }: { name: string }) {
    return "child server components, hello " + name
}