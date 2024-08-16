"use client";

import { Inter } from "next/font/google";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  // 关于palette的更多配置参照 https://mui.com/material-ui/customization/palette/
  // 对于primary,secondary,warning等这些颜色，只要提供primary color就可以了，其他颜色都会被自动计算出来
  // 自定义名称的颜色方案（名称非primary,warning,error等）要全部写出四种颜色
  palette: {
    primary: {
      main: '#FF5733',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
  // 更多关于字体的配置参照 https://mui.com/material-ui/customization/typography/
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  // 配置组件和组件之间的默认间距
  // 具体配置参照 https://mui.com/material-ui/customization/spacing/
  spacing: 4,
  // 可以在不同宽度的设备上响应式改变layout
  // 具体配置参照 https://mui.com/material-ui/customization/breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // 在这里可配置组件的全局默认参数（props）以及样式（style）
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
        variant: 'outlined'
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
    },
  },
  // 通过这里可改变某个组件的全局z-index
  // 具体参考 https://mui.com/material-ui/customization/z-index/
  zIndex: {
    mobileStepper: 1000
  },
  // 可定义全局的动画样式效果
  // https://mui.com/material-ui/customization/transitions/
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
});

theme.spacing(2); // `${4 * 2}px` = '8px'
// 这里为特定的属性变化创建transition
theme.transitions.create(['background-color', 'transform']);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>

  );
}
