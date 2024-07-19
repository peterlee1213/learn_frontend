"use server"

async function timeout() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("done");
        }, 2000)
    })
}

export default async function () {
    await timeout();

    return "asynchro1 loaded"
}