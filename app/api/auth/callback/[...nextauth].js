import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // 配置一个或多个身份验证提供程序
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    
    // ...在此处添加更多提供程序


  ],
}

export default NextAuth(authOptions)