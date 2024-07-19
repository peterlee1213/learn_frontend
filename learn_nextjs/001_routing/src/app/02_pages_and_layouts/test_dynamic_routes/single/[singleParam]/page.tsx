/**
 * the "singleParam" property refers to [singleParam]
 * @param param0 
 * @returns 
 */
export default function ({ params }: { params: { singleParam: string } }) {
    const { singleParam = "" } = params;
    console.log(params)

    return "singleParam的值为：" + singleParam
}