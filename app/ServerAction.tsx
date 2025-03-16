"use server";

import Link from 'next/link';
import Image from 'next/image';
import Form from 'next/form'

export async function ServerAction(formData: FormData) {
  const str1 = formData.get("str1") as string;
  const str2 = formData.get("str2") as string;
  return `${str1} ${str2}`.trim(); 
}