"use server";

/**
 * 跳转到此页面两秒后重定向值test_redirect2页面
 */

import { setMaxIdleHTTPParsers } from "http";
import { redirect } from "next/navigation";

async function simulateRequest() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("done")
        }, 2000)
    })

}

export default async function Page() {
    await simulateRequest()

    redirect("/02_pages_and_layouts/test_redirect2")

}