'use client';

import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 注意： 设置dark mode要么使用默认palette,要么自定义palette的时候要基于mode配置颜色
// 根据用户系统设置决定是亮色还是暗色，可使用useMediaQuery api
const darktheme = createTheme({
  palette: {
    mode: 'dark'
  }
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={darktheme}>
      <CssBaseline />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>

  );
}
