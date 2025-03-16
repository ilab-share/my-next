//従来のサーバクライアントシステムを、next.jsのサーバーコンポーネントのみで実装する例
//従来の<a> と <img>を、next.jsの<Link><Image>で実装する例。画像は publicフォルダーに置く

//https://zenn.dev/tor_inc/articles/172a8a1df79164  非同期でsearchParamsを扱う方法

import Link from 'next/link';
import Image from 'next/image';
import Form from 'next/form'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ServerComponent(props: Props) {
  const searchParams = await props.searchParams

  console.log(`searchParams:${JSON.stringify(searchParams)}`);

  const str1 = searchParams.str1 || "";
  const str2 = searchParams.str2 || "";
  const result = `${str1} ${str2}`.trim();


  // クエリパラメータがない場合、デフォルトの入力フォームを表示
  if (!searchParams.str1 || !searchParams.str2) {
    return (
      <>
      <Form action="/">
        <input type="text" name="str1" className="border p-2 m-2"  />
        <input type="text" name="str2" className="border p-2 m-2"  />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded"> 結合する</button>
      </Form>
      </>
    );
  }

  // 結果を表示
  return (
    <div className="p-4">
	<Image src="/dog.jpg" alt="dog" width={320} height={240} />
	<p className="mt-4">結合結果: {result}</p>
	<Link href="/" className="bg-blue-500 text-white p-1 rounded"> 戻る </Link>
    </div>
  );
}
