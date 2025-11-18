'use client'

import { useAuth } from '@/components/auth-context'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
  requiredRole?: string[]
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }

    if (requiredRole && user && !requiredRole.includes(user.role)) {
      router.push('/')
      return
    }
  }, [isAuthenticated, user, requiredRole, router])

  if (!isAuthenticated) {
    return null
  }

  if (requiredRole && user && !requiredRole.includes(user.role)) {
    return null
  }

  return <>{children}</>
}
