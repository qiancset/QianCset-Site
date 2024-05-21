// opt in to caching the route handler
export const dynamic = 'force-static' // or 'error'
// or
export const revalidate = false // or a value > 0
 
export async function GET(request: Request) {
  const res = await fetch('https://picsum.photos/v2/list', {
/*     headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    }, */
  })
  const data = await res.json()
 
  return Response.json({ data })
}