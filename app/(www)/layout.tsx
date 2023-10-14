//服务器渲染

import "@/css/www.css";
import "@/css/www_dark.css";
import "@/css/Anniu.css";

import Header from "@/components/Header/Header";


export const metadata = {
  title: {
    template: '%s | 千赛特 QianCset Web3',
    default: '千赛特 QianCset Web3',
  }
};

export default function wwwLayout({ children }) {

  return (

    <>

      <Header />
      <div style={{ height: "56px" }} />
      {children}

    </>

  );
}
