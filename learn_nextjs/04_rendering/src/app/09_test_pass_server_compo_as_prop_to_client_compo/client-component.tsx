"use client"

import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div> parent client component</div>
            {children}
        </div>
    )
}