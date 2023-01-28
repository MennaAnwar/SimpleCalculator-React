/**
 * The Wrapper component will be the frame, holding all the children components in place.
 * It will also allow us to center the whole app afterward.
 */
import "./Wrapper.css";

export default function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
