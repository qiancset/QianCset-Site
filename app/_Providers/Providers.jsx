"use client";
import AntdContainer from "./AntdContainer";
import Themes from "./Themes";
import Web3ModalP from './Web3ModalP';
import { Analytics } from '@vercel/analytics/react';
export default function Providers({ children }) {
  return (
    <>
    <Analytics>
      <Themes>
        <Web3ModalP>
          <AntdContainer>
            {children}
            </AntdContainer>
        </Web3ModalP>
      </Themes>
      </Analytics>
    </>
  );
}
