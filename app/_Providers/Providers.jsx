"use client";
import Antd from "./Antd";
import Themes from "./Themes";
import NextAuth from "./NextAuth";
import RainbowkitP from "./RainbowkitP";
export default function Providers({ children }) {
  return (
    <>
      <Themes>
        <NextAuth>
          <RainbowkitP>
            <Antd>{children}</Antd>
          </RainbowkitP>
        </NextAuth>
      </Themes>
    </>
  );
}
