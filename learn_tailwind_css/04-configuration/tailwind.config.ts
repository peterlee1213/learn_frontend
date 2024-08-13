import type { Config } from "tailwindcss";

const config: Config = {
  // 哪些文件需要tailwind去解析tailwind类名，或者我要在哪些文件中使用tailwind类名
  /**
   * 1. 不应该使用动态拼接的方式形成tailwind类名，类名任何是否都要是静态的，比如不能是类似于text-{{ error ? 'red' : 'green' }}-600这种格式的，而应该类似于error ? 'text-red-600' : 'text-green-600'格式，否则tailwind无法扫描到
   * 2. tailwind使用正则匹配的最简单的方式来匹配class,并决定将什么class编译进css文件，比如即使在段落中有一个container,tailwind也会把container这个类打包进来
   */
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // 定义全局的color palette,自体，border size, 断点等等
  theme: {
    // 在theme下定义的样式配置会直接覆盖默认的配置，比如breakpoint我只配置了md,那默认的sm,xl等等配置都没有了，属于完整替换
    /**
     * 可以自定义screens,如下：
     */
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },

    /**
     * 默认的screens配置支持我们先写mobile然后逐渐向更宽的宽度扩展，我也可以自定义screens使得默认样式是宽屏，然后比如md是767px以及以下宽度的
     * 可自定义screens如下
     */
    // screens: {
    //   '2xl': { 'max': '1535px' },
    //   // => @media (max-width: 1535px) { ... }

    //   'xl': { 'max': '1279px' },
    //   // => @media (max-width: 1279px) { ... }

    //   'lg': { 'max': '1023px' },
    //   // => @media (max-width: 1023px) { ... }

    //   'md': { 'max': '767px' },
    //   // => @media (max-width: 767px) { ... }

    //   'sm': { 'max': '639px' },
    //   // => @media (max-width: 639px) { ... }
    // }

    /**
     * 我也可以为每个screen标签指定一个范围，示例如下
     */
    // screens: {
    //   'sm': { 'min': '640px', 'max': '767px' },
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   'md': { 'min': '768px', 'max': '1023px' },
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   'lg': { 'min': '1024px', 'max': '1279px' },
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   'xl': { 'min': '1280px', 'max': '1535px' },
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   '2xl': { 'min': '1536px' },
    //   // => @media (min-width: 1536px) { ... }
    // },

    extend: {
      // 在extend下定义的配置会修改和扩展原先的配置，不会覆盖，比如breakpoint我只配置了md,那就只会覆盖md,不会更改其他xl等配置
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // 定义插件
  plugins: [],
  // 指定我自己的基本配置而非自己手写配置，某些第三方库可能已经写好了针对tailwind的配置文件，比如颜色，breakpoint,字体等等
  presets: [],
  // 下面这个配置项会让我所有的tailwind类名都加一个tw-前缀，可防止命名冲突，比如tw-text-left
  prefix: 'tw-',
  // 下面这个配置项会让tailwindcss的所有样式都加上!important,提高优先级，也可通过在class前加！的方式来实现，比如<p class="!font-medium">
  important: true,
};
export default config;
