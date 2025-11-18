'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: string
  nama: string
  username: string
  role: 'siswa' | 'guru' | 'orangtua' | 'admin'
  kelas?: string
  noInduk?: string
  nomorHP?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (username: string, password: string, userType: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (username: string, password: string, userType: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))

      // Mock user data
      const mockUsers: Record<string, User> = {
        demo_siswa: {
          id: '001',
          nama: 'Muhammad Akbar',
          username: 'demo_siswa',
          role: 'siswa',
          kelas: 'X-A',
          noInduk: '2024001',
          nomorHP: '0812345678',
        },
        demo_guru: {
          id: '002',
          nama: 'Ustadz Ahmad Nasution',
          username: 'demo_guru',
          role: 'guru',
        },
        demo_orangtua: {
          id: '003',
          nama: 'Bapak Akbar Wijaya',
          username: 'demo_orangtua',
          role: 'orangtua',
        },
      }

      const user = mockUsers[username]
      if (user && password === 'demo123') {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        throw new Error('Username atau password salah')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
