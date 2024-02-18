"use client";

import { generateShadesAndTints } from "@/generateShades";
import { createContext, useState, ReactNode } from "react";

type ColorContextType = {
  color: string;
  updateColor: (color: string) => void;
  shades: string[];
};

const initialColorContext: ColorContextType = {
  color: "#652BFC",
  updateColor: (color) => {},
  shades: [],
};

export const ColorContext =
  createContext<ColorContextType>(initialColorContext);

const ColorContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [color, setColor] = useState<string>("#652BFC");
  const shadesDefault = generateShadesAndTints("#652BFC").reverse();
  const [shades, setShades] = useState<string[]>(shadesDefault);

  const updateColorHandler = (newColor: string) => {
    setColor(newColor);
    const shades = color && generateShadesAndTints(color);
    const finalShades = shades && shades.reverse();
    finalShades && setShades(finalShades);
  };

  const contextValue: ColorContextType = {
    color,
    updateColor: updateColorHandler,
    shades,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
