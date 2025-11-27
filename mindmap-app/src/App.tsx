import { createSignal } from "solid-js";

/* -----------------------------------------
   顏色主題切換範例
   - 使用 createSignal() 控制深色 / 淺色
   - 點按按鈕會切換樣式
------------------------------------------ */

export default function App() {
  // true = 深色, false = 淺色
  const [dark, setDark] = createSignal(false);

  return (
    <div
      style={{
        padding: "40px",
        "text-align": "center",
        transition: "0.3s",
        background: dark() ? "#222" : "#f2f2f2",
        color: dark() ? "white" : "black",
        height: "100vh",
      }}
    >
      <h1>🌗 Solid.js Light / Dark Mode 切換</h1>

      <p style={{ "font-size": "18px", "margin-top": "20px" }}>
        目前模式： <b>{dark() ? "Dark" : "Light"}</b>
      </p>

      <button
        onClick={() => setDark(!dark())}
        style={{
          padding: "12px 20px",
          "font-size": "18px",
          "border-radius": "8px",
          cursor: "pointer",
          border: "none",
          "margin-top": "20px",
          "background-color": dark() ? "#444" : "#ddd",
          color: dark() ? "#fff" : "#000",
        }}
      >
        切換模式
      </button>
    </div>
  );
}