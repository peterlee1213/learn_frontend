"use server"

import getData from "../_server_action/getData"

export default async function () {
    const result = await getData()
    const text = await result.text()
    return "child component: " + text
}