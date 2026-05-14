import "./NotFound.scss";
import notFoundIMG from "@/assets/images/not-found.png";

export function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__img" src={notFoundIMG} alt="Not found. 404" />
    </div>
  );
}
