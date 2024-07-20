"use server"

import { cookies } from "next/headers"

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    return res
}

export default async function () {
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    const res = await getData()
    console.log(res.headers)
    console.log(token)
    return res.headers
}