'use client'

import { Table } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Dappbrowserpage() {
  return (
    <>

      <Table dataSource={dataSource} columns={columns} />;

    </>
  )
}

const dataSource = [
  {
    key: '1',
    logo: <IOGO src='/images/WEB3/UINSWAP.png' alt="Uinswap" />,
    name: 'Uinswap',
    chain: "EVM",
    profile: '在以太坊上构建 Defi 应用程序和工具',
    URL: <Link href='/Dappbrowser/Uinswap'>Uinswap</Link>,
  },
  {
    key: '2',
    logo: <IOGO src='/images/WEB3/UINSWAP.png' alt="ENS" />,
    name: 'ENS',
    chain: 'EVM',
    profile: 'Web3上的身份,一个名称就能解析到您所有的加密地址和您的去中心化网站。',
    URL: <Link href='https://app.ens.domains'>ENS</Link>,
  },
];
function IOGO({ src, alt }) {
  return (
    <>
      <Image src={src} height={30} width={30} alt={alt} />
    </>
  )
}
const columns = [
  {
    title: '图标',
    dataIndex: 'logo',
    key: 'logo',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '区块链',
    dataIndex: 'chain',
    key: 'chain',
  },
  {
    title: '简介',
    dataIndex: 'profile',
    key: 'profile',
  },
  {
    title: '网址',
    dataIndex: 'URL',
    key: 'URL',
  },
];
