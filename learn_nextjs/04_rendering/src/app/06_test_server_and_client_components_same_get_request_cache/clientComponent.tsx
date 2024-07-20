"use client"

import React from "react"
import { getData } from "./serverAction"

export default function () {
    const [str, setStr] = React.useState<string>()
    React.useEffect(() => {
        getData().then(value => {
            setStr(value)
        })
    }, [])

    return "client components:" + str
}