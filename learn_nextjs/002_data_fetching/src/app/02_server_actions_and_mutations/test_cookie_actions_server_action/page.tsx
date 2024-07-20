"use server"

import { dealwithForm } from "./server_action";

export default async function () {
    return (
        <div>
            {/* 不要写method, nextjs会自动决定 */}
            <form action={dealwithForm}>
                <input name="username" />
                <input name="password" />
                <button>submit</button>
            </form>
        </div>
    );
}