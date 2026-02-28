import { useEffect, useState } from "react";

import clsx from "clsx";

export type SwitchProps = {
  id?: string;
  isOn: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export function Switch({ id, disabled, isOn: _isOn, onClick }: SwitchProps) {
  const [isOn, setIsOn] = useState(_isOn);

  useEffect(() => {
    setIsOn(_isOn); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
  }, [_isOn]);

  return (
    <button
      id={id}
      type="button"
      disabled={disabled}
      role="switch"
      onClick={() => {
        onClick?.();
        setIsOn(!isOn);
      }}
      className={clsx(
        "relative h-6 w-11 rounded-full transition-colors",
        isOn ? "bg-blue-600" : "bg-gray-300",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      )}
    >
      <span
        className={clsx(
          "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform",
          isOn ? "translate-x-full" : ""
        )}
      />
    </button>
  );
}
