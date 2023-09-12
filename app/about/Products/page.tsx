import Link from "next/link";
import "./Products.css";


export const metadata = {
  title: {
    absolute: "产品 | 千赛特-QianCset",
  },
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
