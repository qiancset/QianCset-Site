"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import Image from "next/image";
import Link from "next/link";

const dataSource = [
  {
    key: "1",
    logo: "/images/COMLOGO/UINSWAP.png",
    url: "/dappbrowser/Uinswap",
    name: "Uinswap",
    profile: "在以太坊上构建 Defi 应用程序和工具",
  },
  {
    key: "2",
    logo: "/images/COMLOGO/ENS.png",
    url: "https://app.ens.domains",
    name: "ENS",
    profile:
      "Web3上的身份,一个名称就能解析到您所有的加密地址和您的去中心化网站。",
  },
];

function LOGO({ src, alt }) {
  return (
    <>
      <Image src={src} height={30} width={30} alt={alt} />
    </>
  );
}

export default function Dappbrowserpage() {
  return (
    <Table removeWrapper aria-label='Example static collection table'>
      <TableHeader>
        <TableColumn>应用</TableColumn>
        <TableColumn>网址</TableColumn>
        <TableColumn>简介</TableColumn>
      </TableHeader>

      <TableBody>
        {dataSource.map((dapp) => (
          <TableRow key={dapp.key} {...dapp}>
            <TableCell>
              <LOGO src={dapp.logo} alt={dapp.name} />
            </TableCell>
            <TableCell>
              <Link href={dapp.url} style={{color:'#ea7411'}}>{dapp.name}</Link>
            </TableCell>
            <TableCell>{dapp.profile}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
