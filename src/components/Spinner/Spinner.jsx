import "./Spinner.scss";
import spinnerIMG from "@/assets/images/spinner.png";

export function Spinner() {
  return (
    <div className="spinner">
      <img className="spinner__image" src={spinnerIMG} alt="Loading..." />
    </div>
  );
}
