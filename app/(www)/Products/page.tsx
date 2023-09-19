import Link from "next/link";
import "./Products.css";


export const metadata = {
  title:"产品",
  description:
  " QianCset Web3 产品, QianCsetProducts,QiancsetProducts,qiancsetProducts,千赛特产品",
};

export default function Products() {
  return (
<div className="Products">

<h1>
<Link href='/about/Products/mintNFT'>mintNFT</Link>     
</h1>

<h1>
<Link href='/' target="_blank">QianCset</Link>     
</h1>
      
</div>
  );
}
