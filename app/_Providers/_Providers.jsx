"use client";
import AntdContainer from "./Antdcontainer";
import Themes from "./Themes";
import Web3Modalproviders from "./Web3Modalproviders";

export default function Providers({ children }) {
  return (
    <>
      <Themes>
        <Web3Modalproviders>
          <AntdContainer>
            {children}
            </AntdContainer>
        </Web3Modalproviders>
      </Themes>
    </>
  );
}
