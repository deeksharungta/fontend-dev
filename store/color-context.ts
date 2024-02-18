// "use client";

// import { createContext, useState, ReactNode } from "react";

// type ColorContextType = {
//   color: string | null;
//   updateColor: (color: string) => void;
// };

// const initialColorContext: ColorContextType = {
//   color: null,
//   updateColor: (color) => {},
// };

// export const ColorContext =
//   createContext<ColorContextType>(initialColorContext);

// const ColorContextProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [color, setColor] = useState<string>("#652BFC");

//   const updateColorHandler = (newColor: string) => {
//     setColor(newColor);
//   };

//   const contextValue: ColorContextType = {
//     color,
//     updateColor: updateColorHandler,
//   };

//   // return (
//   //   // <ColorContext.Provider value={contextValue}>
//   //   //   {children}
//   //   // </ColorContext.Provider>
//   // );
// };

// export default ColorContextProvider;
