"use client";
import "@/locales/i18n";

import Themes from "./Themes";
import Rainbowkit from "./Rainbowkit";
import NextUI from "@/config/NextUI";

export default function Providers({ children }) {
  return (
    <>
      <Themes>
        <NextUI>
          <Rainbowkit>{children}</Rainbowkit>
        </NextUI>
      </Themes>
    </>
  );
}
