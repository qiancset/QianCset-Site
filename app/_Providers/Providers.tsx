"use client";
import "@/locales/i18n";

import Antd from "./Antd";
import Themes from "./Themes";


import RainbowkitP from "./RainbowkitP";
export default function Providers({ children }) {
  return (
    <>
      <Themes>

          <RainbowkitP>
        
              <Antd>{children}</Antd>
  
          </RainbowkitP>

      </Themes>
    </>
  );
}
