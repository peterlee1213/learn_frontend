import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "第二层title"
}


export default function Layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <>
            <div>第二层layout</div>
            <div>{children}</div>
        </>


    );
}