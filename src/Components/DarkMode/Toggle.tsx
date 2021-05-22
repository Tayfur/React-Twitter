import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com

interface toggleProps {
  theme: string;
  toggleTheme: () => void;
}
const Toggle: React.FC<toggleProps> = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return <button onClick={() => toggleTheme()}>DARK MODE</button>;
};

export default Toggle;
