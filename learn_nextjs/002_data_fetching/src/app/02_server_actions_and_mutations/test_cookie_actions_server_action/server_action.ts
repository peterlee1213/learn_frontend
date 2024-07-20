"use server"


import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function dealwithForm(formdata: FormData) {
    const rawFormData = {
        username: formdata.get("username"),
        password: formdata.get("password")
    }

    console.log(rawFormData)

    //设置的cookie会在返回的响应中作为“set-cookie”header
    cookies().set("token", "abc")
    cookies().set("name", "zheng")

    redirect("/")
}

export { dealwithForm }