"use sesrver"

import ClientComponent from "./client-component"
import ServerComponent from "./server-component"

export default async function () {
    return (
        <ClientComponent>
            <ServerComponent></ServerComponent>
        </ClientComponent>
    )
}