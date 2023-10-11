export default async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
 
  return (
    <>
    {posts.map((post) => {
      return (
        <div key={post.id}>
          
          {post.title}

        </div>
        )
      })}

      </>
  )
}