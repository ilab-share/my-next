"use client";

import { useState } from "react";
import {ServerAction} from "./ServerAction"

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ClientComponent() {
  const [result, setResult] = useState("");
  
  const handleSubmit = async (formData: FormData) => {
    console.log(`formData:${JSON.stringify(formData)}`);

    const res = await ServerAction(formData);
    setResult(res);
  };

  const handleReset = () => {
    setResult("");
  };

  if (result!="") {
	return (
	      <div className="p-4">
	        <Image src="/dog.jpg" alt="dog" width={320} height={240} />
	        <p className="mt-4">結合結果: {result}</p>
	        <Link href="/" onClick={handleReset} className="bg-blue-500 text-white p-1 rounded">
	          戻る
	        </Link>
	      </div>
	);

  }else{
	  return (
	      <form action={handleSubmit} className="p-4">
	        <input type="text" name="str1" className="border p-2 m-2" />
	        <input type="text" name="str2" className="border p-2 m-2" />
	        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
	          結合する
	        </button>
	      </form>
	  );
  }
}