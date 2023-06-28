'use client'

import { QueryClient, QueryClientProvider } from 'react-query';
// 初始化 queryClient
const queryClient = new QueryClient();
export default function Query({children}) {
    return (
      <QueryClientProvider client={queryClient}>
       {children}
        </QueryClientProvider>
    )
  }