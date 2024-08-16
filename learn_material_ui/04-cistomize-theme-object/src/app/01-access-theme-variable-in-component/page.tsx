"use client";
import { useTheme } from "@mui/material";

export default function () {

    const theme = useTheme();

    return <span>sm:{theme.breakpoints.values.sm}</span>

}