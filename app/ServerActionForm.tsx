"use server";

export async function ServerActionForm(prevState: string, formData: FormData) {
    const str1 = formData.get("str1") as string;
    const str2 = formData.get("str2") as string;

    return `${str1} ${str2}`.trim();
}
