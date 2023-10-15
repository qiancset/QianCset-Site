"use client";

import "@/locales/i18n";
import Antd from "./Antd";
import Themes from "./Themes";
import RainbowkitP from "./RainbowkitP";
import StyledComponentsRegistry from './lib/AntdRegistry'

export default function Providers({ children }) {
  return (
    <>
      <StyledComponentsRegistry>
        <Themes>
        <Antd>
          <RainbowkitP>

           {children}

          </RainbowkitP>
          </Antd>
        </Themes>
      </StyledComponentsRegistry>

    </>
  );
}
