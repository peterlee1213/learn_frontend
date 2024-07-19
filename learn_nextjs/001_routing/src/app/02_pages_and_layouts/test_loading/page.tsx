"use server";

async function simulateRequest() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("done")
        }, 2000)
    })
}

export default async function () {
    await simulateRequest();

    return "页面加载完毕"
}