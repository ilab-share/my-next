//https://qiita.com/newbee1939/items/7ce919f9a1a7153582b8
//https://www.youtube.com/watch?v=A78v05JSyqg

//Next.js の App Router では、デフォルトで作成したコンポーネントがサーバーコンポーネントになる
//クライアントコンポーネントにするにはuse clientを記述する必要がある

import { ClientComponent } from "./ClientComponent";
import { ServerComponent } from "./ServerComponent";

export default async function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <ClientComponent />
      <ServerComponent />
    </div>
  );
}
