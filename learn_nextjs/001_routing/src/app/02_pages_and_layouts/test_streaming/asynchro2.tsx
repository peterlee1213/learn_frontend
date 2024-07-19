"use server"

async function timeout() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("done");
        }, 3000)
    })
}

export default async function () {
    await timeout();

    return "asynchro2 loaded"
}