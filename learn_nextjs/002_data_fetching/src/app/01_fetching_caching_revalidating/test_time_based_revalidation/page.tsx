"use server"

import ChildComponent from "./_components/childComponent"
import getData from "./_server_action/getData"

export default async function () {
    const result = await getData()
    const text = await result.text()
    return (
        <div>
            <div>parent component: {text}</div>
            <ChildComponent></ChildComponent>
        </div>
    )
}