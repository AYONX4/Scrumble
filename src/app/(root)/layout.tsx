import StreamCientProvider from '@/components/providers/StreamCientProvider'
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <StreamCientProvider>
      {children}
    </StreamCientProvider>
  )
}

export default Layout