export default function ({ params }: { params: { itemId: string; categoryId: string } }) {
    const { itemId = "", categoryId = "" } = params
    console.log(params)
    return "itemId: " + itemId + "; categoryId: " + categoryId
}