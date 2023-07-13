import { useTheme } from "next-themes";
import { Button } from "../Button";

export const SwitchTheme = function SwitchTheme() {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === 'dark'

  return (
      <Button
        src="light.svg"
        alt="light"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        text={`Поменять на ${currentTheme ? "тёмную" : "светлую"} тему`}
      />
  );
};
