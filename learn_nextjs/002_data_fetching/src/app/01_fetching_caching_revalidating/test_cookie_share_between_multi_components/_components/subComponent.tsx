"use server"

import { cookies } from "next/headers"

export default async function () {
    const cookieStore = cookies()
    const cookie = cookieStore.get("token")
    console.log(cookie)
    return "子组件server component中的cookie:" + cookie?.value
}