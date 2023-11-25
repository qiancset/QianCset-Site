"use client";
import "@/locales/i18n";
import { useSSR } from 'react-i18next';
import StyledComponentsRegistry from './lib/AntdRegistry'
import Antd from "./Antd";
import Themes from "./Themes";
import Rainbowkit from "./Rainbowkit"


export default function Providers({ children,initialI18nStore, initialLanguage  }) {
  useSSR(initialI18nStore, initialLanguage);

  return (
    <>
 
        <StyledComponentsRegistry>
          <Themes>
            <Antd>
              <Rainbowkit>

                {children}

              </Rainbowkit>
            </Antd>
          </Themes>
        </StyledComponentsRegistry>

    </>
  );
}
