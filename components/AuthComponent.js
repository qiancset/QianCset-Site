
import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        登录身份 {session.user.email} <br />
        <button onClick={() => signOut()}>登出</button>
      </>
    )
  }
  return (
    <>
      未登录 <br />
      <button onClick={() => signIn()}>登录</button>
   
    </>
  )
}