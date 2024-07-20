"use client"

import React from "react";
import { getData } from "./_server_actions";

export default function () {
    const [data, setData] = React.useState("");

    return (
        <>
            <div>数据： {data}</div>
            <button onClick={() => getData().then((value) => { setData(value) })}>按钮</button>
        </>

    );
}