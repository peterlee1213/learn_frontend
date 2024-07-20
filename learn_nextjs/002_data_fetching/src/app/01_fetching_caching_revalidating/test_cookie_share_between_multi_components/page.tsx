"use server"

import { cookies } from "next/headers"
import SubComponent from "./_components/subComponent"

export default async function () {
    const cookieStore = cookies()
    const cookie = cookieStore.get("token")
    console.log(cookie)
    return (
        <div>
            <div>"直接server component中的cookie:" {cookie?.value}</div>
            <SubComponent></SubComponent>
        </div>
    )


}