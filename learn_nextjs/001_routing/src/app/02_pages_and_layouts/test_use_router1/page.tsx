"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()

    return (
        <>
            <h1>当前是test_use_router1页面</h1>
            <button onClick={() => router.push("/02_pages_and_layouts/test_use_router2")}>去test_use_router2页面</button>
        </>
    );
}