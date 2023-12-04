'use client'

import { Table } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Dappbrowserpage() {
  return (
    <>

      <Table dataSource={dataSource} columns={columns} />

    </>
  )
}

const dataSource = [
  {
    key: '1',
    apply: 
    <div>
      <IOGO src='/images/COMLOGO/UINSWAP.png' alt="Uinswap" />
      <p>Uinswap</p>
    </div>,
    name: 'Uinswap',
    profile: '在以太坊上构建 Defi 应用程序和工具',
    URL: <Link href='/dappbrowser/Uinswap'>Uinswap</Link>,
  },
  {
    key: '2',
    apply:
      <div>
        <IOGO src='/images/COMLOGO/ENS.png' alt="ENS" />
        <p>ENS</p>
      </div>,
    profile: 'Web3上的身份,一个名称就能解析到您所有的加密地址和您的去中心化网站。',
    URL: <Link href='https://app.ens.domains'>ENS</Link>,
  },
];


const columns = [
  {
    title: '应用',
    dataIndex: 'apply',
    key: 'apply',
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

function IOGO({ src, alt }) {
  return (
    <>
      <Image src={src} height={30} width={30} alt={alt} />
    </>
  )
}