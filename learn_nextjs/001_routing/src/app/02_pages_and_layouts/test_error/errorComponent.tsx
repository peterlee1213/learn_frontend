"use client"

import React from "react";

export default function () {
    const [number, setNumber] = React.useState(Math.random());
    if (number > 0.8) {
        return <div>加载成功</div>
    } else {
        throw new Error("加载失败")
    }
}