"use server"

import ClientComponent from "./clientComponent"

export default async function () {

    const obj = {
        name: "hello"
    }

    return (
        <div>
            <div>server components</div>
            <ClientComponent name="abc"></ClientComponent>
        </div>
    )
}