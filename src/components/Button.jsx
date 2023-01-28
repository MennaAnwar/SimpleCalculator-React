import "./Button.css";

export default function Button({ className, value, onclick }) {
  return (
    <button className={className} onClick={onclick}>
      {value}
    </button>
  );
}
