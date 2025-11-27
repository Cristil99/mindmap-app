import { createSignal, Switch, Match } from "solid-js";

/* -------------------------
   定義可以切換的頁面名稱
-------------------------- */
type Page = "home" | "quiz" | "about";

/* -------------------------
   三個簡單「頁面元件」
-------------------------- */

function HomePage() {
  return (
    <div>
      <h2>🏠 首頁</h2>
      <p>這是簡單的 Solid.js 多頁範例首頁。</p>
      <p>你可以在這裡放總覽、連結、介紹等等。</p>
    </div>
  );
}

function QuizPage() {
  return (
    <div>
      <h2>📝 題庫頁面</h2>
      <p>未來可以接你的建築師考題、刷題工具。</p>
      <ul>
        <li>建築法規</li>
        <li>建築構造與施工</li>
        <li>建築環境控制</li>
      </ul>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h2>ℹ️ 關於</h2>
      <p>這裡可以寫：這個網站在做什麼、作者是誰、使用技術等等。</p>
    </div>
  );
}

/* -------------------------
   主元件 App：控制目前頁面
-------------------------- */

export default function App() {
  // currentPage 控制目前顯示哪一頁
  const [currentPage, setCurrentPage] = createSignal<Page>("home");

  // 簡單的導覽按鈕元件（高亮目前頁面）
  const NavButton = (props: { page: Page; label: string }) => (
    <button
      onClick={() => setCurrentPage(props.page)}
      style={{
        padding: "8px 12px",
        "margin-right": "8px",
        "border-radius": "6px",
        border: currentPage() === props.page ? "2px solid #333" : "1px solid #ccc",
        "background-color": currentPage() === props.page ? "#333" : "#f0f0f0",
        color: currentPage() === props.page ? "#fff" : "#000",
        cursor: "pointer",
      }}
    >
      {props.label}
    </button>
  );

  return (
    <div
      style={{
        padding: "24px",
        "font-family": "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <h1>🌐 Solid.js 簡易多頁範例</h1>

      {/* 導覽列 */}
      <div style={{ "margin-bottom": "16px" }}>
        <NavButton page="home" label="首頁" />
        <NavButton page="quiz" label="題庫" />
        <NavButton page="about" label="關於" />
      </div>

      <hr />

      {/* 依 currentPage 切換顯示的內容 */}
      <div style={{ "margin-top": "16px" }}>
        <Switch fallback={<p>找不到頁面。</p>}>
          <Match when={currentPage() === "home"}>
            <HomePage />
          </Match>
          <Match when={currentPage() === "quiz"}>
            <QuizPage />
          </Match>
          <Match when={currentPage() === "about"}>
            <AboutPage />
          </Match>
        </Switch>
      </div>

      {/* 小提示區 */}
      <div
        style={{
          "margin-top": "32px",
          padding: "12px",
          "border-radius": "8px",
          "background-color": "#f8f8f8",
          "font-size": "13px",
          color: "#555",
        }}
      >
        <p>💡 提示：</p>
        <ul>
          <li>現在是用 <code>currentPage</code> 這個 signal 在做「假路由」。</li>
          <li>未來可以改成用網址（/quiz、/about）搭配 <code>@solidjs/router</code> 做真正路由。</li>
          <li>你可以把 QuizPage 改成接題庫資料、AboutPage 寫你在準備的考試與研究。</li>
        </ul>
      </div>
    </div>
  );
}
