export default function ({ params }: { params: { optionalMultipleParams?: string[] } }) {
    const { optionalMultipleParams = [] } = params;
    console.log(params)

    return "optionalMultipleParams的值是" + optionalMultipleParams.join(",")

}