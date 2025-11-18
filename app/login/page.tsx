'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState('siswa')

  return (
    <main>
      <Navbar />
      
      <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max w-full py-12">
          <div className="max-w-md mx-auto bg-white rounded-lg border border-border shadow-lg p-8">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2 text-center">Masuk Akun</h1>
            <p className="text-center text-muted-foreground mb-8">
              Akses portal akademik dan layanan madrasah
            </p>

            <form className="space-y-6">
              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Tipe Pengguna
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'siswa', label: '👨‍🎓 Siswa' },
                    { value: 'guru', label: '👨‍🏫 Guru' },
                    { value: 'orangtua', label: '👨‍👩‍👧 Orang Tua' },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setUserType(type.value)}
                      className={`py-3 px-3 rounded-lg text-sm font-medium transition-all ${
                        userType === type.value
                          ? 'bg-primary text-white border-primary'
                          : 'bg-secondary text-foreground border-2 border-border hover:border-primary'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Username / Email
                </label>
                <input
                  type="text"
                  placeholder="Masukkan username atau email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan password"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="text-muted-foreground">Ingat saya</span>
                </label>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  Lupa Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Masuk
              </button>

              {/* Signup Link */}
              <p className="text-center text-sm text-muted-foreground">
                Belum punya akun?{' '}
                <Link href="/ppdb" className="text-primary hover:text-primary/80 font-semibold">
                  Daftar di PPDB
                </Link>
              </p>

              {/* Demo Credentials */}
              <div className="bg-secondary rounded-lg p-4 text-xs text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Demo Login:</p>
                <p>Username: demo_siswa | Password: demo123</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
