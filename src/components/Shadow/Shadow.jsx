import "./Shadow.scss";
import { useShadow } from "@/components/AppLayout/AppLayout";

export function Shadow() {
  const { hideShadow } = useShadow();

  return <div className="shadow" onClick={hideShadow} />;
}
