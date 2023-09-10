import Image from "next/image";





const getPostsData = async () => {
    const res = await fetch(process.env.EDGE_CONFIG)
    return res.json();
}

export default async function page() {
    const data = await getPostsData()
   return (
     <>
   <p>{data.items.greeting}</p>
   <p>{data.items.name}</p>
   <p>{data.digest}</p>
   <p>{data.updatedAt}</p>


     </>
   )
}