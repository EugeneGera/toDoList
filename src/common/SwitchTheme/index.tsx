import { useTheme } from "next-themes";
import { Button } from "../Button";

export const SwitchTheme = function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      src="light.svg"
      alt="light"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      text="Поменять тему"
    />
  );
};
