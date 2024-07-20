"use server"

import ClientComponent from "./clientComponent"

export default async function () {
    return (
        <>
            <div>server component</div>
            <ClientComponent></ClientComponent>
        </>
    )
}