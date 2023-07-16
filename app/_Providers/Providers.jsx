"use client";
import Antd from "./Antd";
import Themes from "./Themes";
import Web3ModalP from './Web3ModalP';

export default function Providers({ children }) {
  return (
    <>
  
      <Themes>
        <Web3ModalP>
          <Antd>
            {children}
            </Antd>
        </Web3ModalP>
      </Themes>
      
    </>
  );
}
