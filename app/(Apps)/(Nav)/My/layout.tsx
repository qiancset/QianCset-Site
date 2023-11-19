
'use client'

import "./My.css";

export default function Mylayout({ children }) {
  return (
    <>
      <div className="My">
        {children}
      </div>
    </>
  );
}
