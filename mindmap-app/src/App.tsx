import { createSignal } from "solid-js";

type CounterButtonProps = {
  label: string;
  onClick: () => void;
};

function CounterButton(props: CounterButtonProps) {
  return (
    <button
      onClick={props.onClick}
      style={{ padding: "8px", "font-size": "16px", "margin-right": "10px" }}
    >
      {props.label}
    </button>
  );
}

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div style={{ "text-align": "center", padding: "40px" }}>
      <h1>🧪 Solid.js TSX 練習範例</h1>

      <p style={{ "font-size": "20px" }}>目前數字： {count()}</p>

      <div style={{ "margin-top": "20px" }}>
        <CounterButton
          label="增加 +1"
          onClick={() => setCount(count() + 1)}
        />
        <CounterButton
          label="減少 -1"
          onClick={() => setCount(count() - 1)}
        />
      </div>
    </div>
  );
}

