import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
import Link from "next/link";
import './Clerk_Header.css'

import { useRouter } from 'next/navigation'
export default function Clerk_Header() {
    const router = useRouter()
    return (
        <>
            {/* 挂载用户按钮组件 */}
            <SignedIn>
                <UserButton
                    showName={false}
                    defaultOpen={true}
                    afterSignOutUrl='/'
 
                />
                 
            </SignedIn>

            {/* 已注销的用户将获得登录按钮 */}
            <SignedOut>

                    <button onClick={() => router.push('/about/sign-in')} className="iekbcc0 iekbcc9 ju367v73 ju367v7o ju367v9c ju367vn ju367vec ju367vex ju367v11 ju367v1c ju367v2b ju367v8o _12cbo8i3 ju367v8m _12cbo8i4 _12cbo8i6" >登录</button>
               

            </SignedOut>
        </>
    )
}