"use client";
import AntdContainer from "./AntdContainer";
import Themes from "./Themes";
import Web3ModalP from './Web3ModalP';

export default function Providers({ children }) {
  return (
    <>
  
      <Themes>
        <Web3ModalP>
          <AntdContainer>
            {children}
            </AntdContainer>
        </Web3ModalP>
      </Themes>
      
    </>
  );
}
