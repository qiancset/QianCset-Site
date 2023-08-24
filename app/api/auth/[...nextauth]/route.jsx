

import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),

    ],



/*     pages: {
        signIn: '/api/auth/signin',
        signOut: '/api/auth/signout',
        error: '/error', // 在查询字符串中作为 ？error= 传递的错误代码
        verifyRequest: '/verify-request', // （用于检查电子邮件）
        newUser: '/new-user' // 新用户将在首次登录时被定向到此处（如果不感兴趣，请将其排除在外）
      }  */
})

export { handler as GET, handler as POST }