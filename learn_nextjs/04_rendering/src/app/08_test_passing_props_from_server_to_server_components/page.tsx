"use server"

import ServerChildComponent from "./serverChildComponent"

export default async function () {

    return (
        <div>
            <div>server components</div>
            <ServerChildComponent name="abc"></ServerChildComponent>
        </div>
    )
}