"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ClientComponent() {
  const searchParams = useSearchParams();

  console.log(`searchParams:${JSON.stringify(searchParams)}`);

  const str1 = searchParams.get("str1") || "";
  const str2 = searchParams.get("str2") || "";
  const result = `${str1} ${str2}`.trim();

  // クエリパラメータがない場合、フォームを表示
  if (!str1 || !str2) {
    return (
      <form action="/" method="get" className="p-4">
        <input
          type="text"
          name="str1"
          className="border p-2 m-2"
        />
        <input
          type="text"
          name="str2"
          className="border p-2 m-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          結合する
        </button>
      </form>
    );

  }else{

  // クエリパラメータがある場合、結果を表示
    return (
      <div className="p-4">
        <Image src="/dog.jpg" alt="dog" width={320} height={240} />
        <p className="mt-4">結合結果: {result}</p>
        <Link href="/" className="bg-blue-500 text-white p-1 rounded">
          戻る
        </Link>
      </div>
    );
  }

}
