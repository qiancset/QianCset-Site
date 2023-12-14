import Sidebar from "./_docs/Sidebar";
import "./_docs/layout_docs.css";
export default function AppsLayout({ children }) {
  return (
    <div className="layout_Nav">

      <div className="www_page_container">
        <div className="www_page_left"> <Sidebar /></div>
        <div className="www_page_right">{children}</div>
      </div>
    </div>
  );
}
