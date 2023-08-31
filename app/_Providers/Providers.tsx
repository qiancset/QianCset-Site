"use client";
import Antd from "./Antd";
import Themes from "./Themes";
import NextAuth from "./NextAuth";
import AntdRegistry from './(lib)/AntdRegistry'
import RainbowkitP from "./RainbowkitP";
export default function Providers({ children }) {
  return (
    <>
      <Themes>
        <NextAuth>
          <RainbowkitP>
            
            <AntdRegistry>
              <Antd>{children}</Antd>
            </AntdRegistry>

          </RainbowkitP>
        </NextAuth>
      </Themes>
    </>
  );
}
