import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "第一层title"
}

export default function Layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <>
            <div>第一层layout</div>
            <div>{children}</div>
        </>


    );
}