import { useState } from "react";
import { Button } from "../ui/button";
import Icon from "~/react/components/icon";

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [pressed, setPressed] = useState(false);
  const onClick = () => {
    setPressed(true);
    navigator.clipboard.writeText(textToCopy);
    setTimeout(() => {
      setPressed(false);
    }, 1000);
  };

  return (
    <Button className="rounded-full" variant="outline" onClick={onClick} size="icon">
      <Icon iconName={pressed ? "check" : "copy"} />
    </Button>
  );
}
