

import { signIn } from "next-auth/react"

export default function page() {
  return (
    <>
    <button onClick={() => signIn('github',{callbackUrl:"/"})}>登录github</button>
    </>


  )
}
