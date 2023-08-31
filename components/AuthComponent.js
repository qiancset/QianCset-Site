
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    const avatarurl = session.user.avatar_url
    return (
      <>
        登录身份 {session.user.email} <br />
        <p>{session.user.name}</p>

        <Image src={avatarurl} alt="avatar_img" height={30} width={30}/>
       
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