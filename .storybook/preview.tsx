import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { Inter, Kode_Mono } from "next/font/google";
import React from "react";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
});



const preview: Preview = {
  initialGlobals: {
    dataThemes: {
      list: [
        { name: "Welf", dataTheme: "welf", color: "#54b342" },
        { name: "PropChain", dataTheme: "propchain", color: "#FFBE06" },
      ],
      dataAttribute: "data-theme",            // optional (default: "data-theme")
      clearable: true,                        // optional (default: true)
      toolbar: {
        title: "Change data-theme attribute", // optional
        icon: "PaintBrushIcon",               // optional
      },
    },
    dataTheme: "welf",

  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    
    },
  
  },

  decorators: [
    withThemeByClassName({
      themes: {
      
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'dark',
      parentSelector: 'body',
    }),
    (Story) => (
      <div data-theme="welf" className={`${inter.className} ${kodeMono.variable} antialiased font-inter`}>
        <Story  />
      </div>
    ),
  ],
  
};

export default preview;
