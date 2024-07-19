export default function ({ params }: { params: { multipleParams: string[] } }) {

    const { multipleParams = [] } = params;

    console.log(params)

    return "multiParams的值是" + multipleParams.join(",")

}