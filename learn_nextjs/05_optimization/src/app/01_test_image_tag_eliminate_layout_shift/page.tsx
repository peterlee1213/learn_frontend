"use server"

import Image from "next/image"

export default async () => {
    /**
     * Image中引用的url的域名必须得在next.config.js中配置，否则报错
     * 通过适当配置可避免layout shift
     */
    return <Image alt="hello" src="https://tppic.chinaz.net/files/default/imgs/2024-07-17/048090e700327886_big.jpg" width={7360} height={4912} />
}