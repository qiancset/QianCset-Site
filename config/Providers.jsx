"use client";
import "@/locales/i18n";
import StyledComponentsRegistry from './lib/AntdRegistry'
import Antd from "./Antd";

import Themes from "./Themes";
import Rainbowkit from "./Rainbowkit"


export default function Providers({ children }) {

  return (
    <>

        <Themes>
      <StyledComponentsRegistry>
          <Antd>
            <>
              <Rainbowkit>

                {children}

              </Rainbowkit>
            </>
          </Antd>
      </StyledComponentsRegistry>
        </Themes>

    </>
  );
}