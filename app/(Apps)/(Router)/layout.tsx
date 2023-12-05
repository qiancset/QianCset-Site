import AppsHeader from "@/app/(Apps)/Component/AppsHeader/AppsHeader";



export default function layout({ children }) {
  return (
    <>

      <AppsHeader />
      <div style={{ marginTop: '65px' }}></div>
      
      <div className="Router">
        {children}
      </div>

    </>
  )
}