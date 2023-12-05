/* import 'github-markdown-css' */


import "./layout.css";

export default function layout({ children }) {
  return (
    <>

      <article /* className="markdown-body" */>{children}</article>
    </>
  );
}
