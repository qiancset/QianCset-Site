'use client'
import React, { useState, } from "react";
import Web3 from 'web3'; // 引入web3.js库
import { abi } from "./contractABI";

import './NFTCreator.css'
import { useTranslation } from 'react-i18next';

function NFTCreator() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null); // 初始化为null

const { t } = useTranslation();

  async function handleUpload() {
    // 创建web3对象
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      try {
        // 请求用户授权
        await window.ethereum.enable();

        // 将文件转为base64格式
        const reader = new FileReader();
        reader.onloadend = () => {
          const fileData = reader.result;
          const base64Data = fileData.split(",")[1];

          // 初始化合约对象
          const contractAddress = "0x5984a0C438C098BBAf155133CF76c3F0806d27C2"; // 合约地址
          // 合约ABI
          const contract = new web3.eth.Contract(abi, contractAddress);

          // 调用合约创建NFT
          contract.methods.createToken(name, description, base64Data)
            .send({ from: window.ethereum.selectedAddress, value: 0, gas: 3000000 }, (error, result) => {
              if (error) {
                console.log(error);
              } else {
                console.log(result);
              }
            });
        };
        reader.readAsDataURL(file);
      } catch (e) {
        console.log(e);
      }
    }
  };

  function handleFileChange(e) {
    setFile(e.target.files[0]);

    // 将图片URL保存到状态中
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setFileUrl(fileUrl);
  }

  return (
    <div className="NFTCreator">
      <form className="formNFT">

        <h2>{t('创建部署NFT')}</h2>
        <label htmlFor="name">{t('NFT名字')}:</label>
        <input
          type="text"
          className="inputNFT"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">{t('NFT描述')}:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="file1">{t('上传NFT')}:</label>

        <div className="divNFT" style={{ height: '10vh' }}>
  {fileUrl && (
    <>
      <img className="imgNFT" src={fileUrl} alt={t('"上传的图片"')} />
      
    </>
  )}
</div>


          
        <input type="file" className="inputNFT" id="file" onChange={handleFileChange} onClick={() => setFileUrl(null)}/>

        <button className="buttonNFT" type="button" onClick={handleUpload}>
          {t('创建 NFT')}
        </button>
      </form>
    </div>
  );
}

export default NFTCreator;