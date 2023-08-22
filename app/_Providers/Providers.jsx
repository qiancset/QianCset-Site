"use client";
import Antd from "./Antd";
import Themes from "./Themes";
/* import Web3ModalP from "./Web3ModalP"; */
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
