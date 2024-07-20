"use client"

import React from "react"
import { serverAction } from "./server_action";

export default function () {
    const [str, setStr] = React.useState<string>("");

    return (
        <>
            <div>str</div>
            <button onClick={() => serverAction().then(value => setStr(value))}>button</button>
        </>
    )
}