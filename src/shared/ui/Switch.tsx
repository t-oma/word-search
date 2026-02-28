import clsx from "clsx";

export type SwitchProps = {
  onClick: () => void;
  isOn: boolean;
};

export function Switch({ onClick, isOn }: SwitchProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "relative h-6 w-11 rounded-full transition-colors",
        isOn ? "bg-blue-600" : "bg-gray-300"
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
