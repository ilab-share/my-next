"use client";

import { useActionState } from "react";
import {ServerActionForm} from "./ServerActionForm"

import Link from "next/link";
import Image from "next/image";

export default function ClientComponent() {

  const [result, formAction] = useActionState(ServerActionForm, "");

  return (
      <form action={formAction} className="p-4">
        <input type="text" name="str1" className="border p-2 m-2" />
        <input type="text" name="str2" className="border p-2 m-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          結合する
        </button>
	{result && <p>結果: {result}</p>} {/* result が空文字列でない場合に結果を表示 */}
      </form>
  );

}