/* 'use client' */


import './Vv.css'
import NFTCreator from "./mitiNFT/NFTCreator";


export const metadata = {
  title: {
    absolute: '产品 | 千里 Qianli Next App',
  },
}


export default function Vv() {



  return (
    <>
      <div id="Vv" >
        <div className="Vv">
          <NFTCreator />
        </div>


      </div>



    </>
  );

}