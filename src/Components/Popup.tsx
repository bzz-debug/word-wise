import { wordRequest } from "../../api.ts";
import "./Popup.css";

export function Popup(props: any) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {/* <p>{props.definition}</p> */}
        <h2>{props.definition}</h2>
        <button
          onClick={() => props.setTriggerPulled(false)}
          className="close-button"
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
