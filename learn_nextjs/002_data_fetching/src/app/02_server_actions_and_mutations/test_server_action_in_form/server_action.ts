"use server"

async function dealwithForm(formdata: FormData) {
    const rawFormData = {
        username: formdata.get("username"),
        password: formdata.get("password")
    }

    console.log(rawFormData)
}

export { dealwithForm }