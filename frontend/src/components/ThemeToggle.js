import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      colorScheme="primary"
      variant="ghost"
      aria-label="toggle theme"
      borderRadius="full"
      title={colorMode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
    />
  );
};

export default ThemeToggle;
