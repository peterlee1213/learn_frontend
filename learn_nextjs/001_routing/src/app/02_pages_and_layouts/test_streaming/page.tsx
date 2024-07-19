/**
 * streaming是说当前页面每个组件都可用<Suspense>包起来，在加载过程中会被替换成fallback对应的ui,各个部分可逐步加载并展示
 */
"use server"
import { Suspense } from "react";
import Asynchro1 from "./asynchro1";
import Asynchro2 from "./asynchro2";

export default async function () {
    return (
        <div>
            <Suspense fallback={"asynchro1 loading"}>
                <Asynchro1></Asynchro1>
            </Suspense>
            <br />
            <Suspense fallback={"asynchro2 loading"}>
                <Asynchro2></Asynchro2>
            </Suspense>
        </div>
    );
}