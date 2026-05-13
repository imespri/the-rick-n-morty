import "./Shadow.scss";

export function Shadow({ closeModal }) {
  return <div className="shadow" onClick={closeModal} />;
}
