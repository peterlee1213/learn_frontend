"use server"

import ClientComponent from "./clientComponent";
import { getData } from "./serverAction"

export default async function () {
    const result = await getData();

    return (
        <>
            <div>server component: {result}</div>
            <ClientComponent></ClientComponent>
        </>
    )

}