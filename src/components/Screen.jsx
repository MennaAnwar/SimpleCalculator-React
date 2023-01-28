/**
 * The Screen component will be the top section child of the Wrapper component.
 * Its purpose will be to display the calculated values.
 */
import "./Screen.css";

export default function Screen({ value }) {
  return <div className="screen">{value}</div>;
}
