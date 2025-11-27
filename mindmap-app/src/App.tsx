import { createSignal } from "solid-js";

/* ----------------------------------------------------
   樹狀資料結構（你之後可以改成題庫、考試分類…）
---------------------------------------------------- */
const treeData = [
  {
    title: "建築法規",
    children: [
      { title: "建築法" },
      { title: "技術規則建築設計編" },
      { title: "施工管理" }
    ],
  },
  {
    title: "建築構造",
    children: [
      { title: "混凝土" },
      { title: "鋼構造" },
      { title: "木構造" }
    ],
  },
  {
    title: "建築環境控制",
    children: [
      { title: "溫熱環境" },
      { title: "聲學" },
      { title: "照明" }
    ],
  },
];

/* ----------------------------------------------------
   TreeItem 元件：單一節點（可展開 / 收合）
---------------------------------------------------- */
function TreeItem(props: { title: string; children?: any[] }) {
  // 控制是否展開
  const [open, setOpen] = createSignal(false);

  return (
    <div style={{ "margin-left": "20px", "margin-top": "6px" }}>
      <div
        style={{
          cursor: "pointer",
          "font-weight": "bold",
          "user-select": "none",
        }}
        onClick={() => setOpen(!open())}
      >
        {/* 展開 / 收合小符號 */}
        {props.children ? (open() ? "▼ " : "▶ ") : "• "}
        {props.title}
      </div>

      {/* 若有子項目且目前為展開狀態 */}
      {open() && props.children && (
        <div style={{ "margin-left": "12px" }}>
          {props.children.map((child) => (
            <TreeItem title={child.title} children={child.children} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ----------------------------------------------------
   主元件：App
---------------------------------------------------- */
export default function App() {
  return (
    <div style={{ padding: "30px", "font-family": "sans-serif" }}>
      <h1>🌳 Solid.js 可展開 / 收合的樹狀清單</h1>

      {/* 渲染樹狀資料 */}
      {treeData.map((item) => (
        <TreeItem title={item.title} children={item.children} />
      ))}
    </div>
  );
}
