//従来のサーバクライアントシステムを、next.jsのサーバーコンポーネントのみで実装する例
//https://zenn.dev/tor_inc/articles/172a8a1df79164  非同期でsearchParamsを扱う方法

import Link from 'next/link';
import Image from 'next/image';

import { redirect } from 'next/navigation';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ServerComponent(props: Props) {
  const searchParams = await props.searchParams
  console.log(`searchParams:${JSON.stringify(searchParams)}`);
  const ret = searchParams.result || "";


  async function handleForm(formData: FormData) {
    "use server"; // Next.js のサーバーアクション

    const str1 = (formData.get("str1") as string) ?? ""; // Type assertion needed
    const str2 = (formData.get("str2") as string) ?? ""; // Type assertion needed
    let result:string = `${str1} ${str2}`.trim();
    console.log(result);

    redirect(`/?result=${encodeURIComponent(result)}`); // 結果ページにリダイレクト
  }

  return (
    <div className="p-4">
      <form action={handleForm}>
        <input type="text" name="str1" className="border p-2 m-2" />
        <input type="text" name="str2" className="border p-2 m-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">結合する</button>
	{ret && <p>結果: {ret}</p>} {/* ret が空文字列でない場合に結果を表示 */}
      </form>
    </div>
  );
}
