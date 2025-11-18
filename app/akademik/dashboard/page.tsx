'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { BookOpen, Calendar, AlertCircle, Award } from 'lucide-react'

export default function AkademikDashboard() {
  const akademikCards = [
    {
      icon: BookOpen,
      title: 'Nilai Semester',
      desc: 'Lihat nilai mata pelajaran lengkap Anda',
      link: '/akademik/nilai',
      color: 'text-primary'
    },
    {
      icon: Calendar,
      title: 'Data Absensi',
      desc: 'Pantau rekam jejak kehadiran Anda',
      link: '/akademik/absensi',
      color: 'text-blue-600'
    },
    {
      icon: AlertCircle,
      title: 'Catatan BK',
      desc: 'Akses catatan bimbingan konseling',
      link: '/akademik/bk',
      color: 'text-yellow-600'
    },
    {
      icon: Award,
      title: 'Pelanggaran & Prestasi',
      desc: 'Lihat skor pelanggaran dan prestasi',
      link: '/akademik/pelanggaran-prestasi',
      color: 'text-green-600'
    },
  ]

  const nilaiTrend = [
    { bulan: 'Agustus', rata: 82 },
    { bulan: 'September', rata: 84 },
    { bulan: 'Oktober', rata: 83 },
    { bulan: 'November', rata: 85.29 },
  ]

  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <div className="mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
              Portal Akademik - Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Kelola informasi akademik, nilai, absensi, dan perkembangan Anda
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <p className="text-foreground font-semibold">📌 Informasi Penting</p>
            <p className="text-muted-foreground text-sm mt-2">
              Tahun Ajaran: 2024/2025 | Semester: 1 | Kelas: X-A | Status: Aktif ✓
            </p>
          </div>

          {/* Menu Akademik */}
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {akademikCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <Link
                  key={idx}
                  href={card.link}
                  className="bg-white border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all"
                >
                  <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.desc}
                  </p>
                </Link>
              )
            })}
          </div>

          {/* Ringkasan Statistik */}
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Ringkasan Semester Ini</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Rata-rata Nilai', value: '85.29', icon: '📊', color: 'bg-primary/10' },
              { label: 'Hari Hadir', value: '19', icon: '✅', color: 'bg-green-100' },
              { label: 'Skor Akhlak', value: '+25', icon: '⭐', color: 'bg-accent/10' },
              { label: 'Aktivitas', value: '12', icon: '🎯', color: 'bg-blue-100' },
            ].map((stat, idx) => (
              <div key={idx} className={`rounded-lg p-6 ${stat.color}`}>
                <p className="text-3xl mb-2">{stat.icon}</p>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Grafik Perkembangan Nilai */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6">Tren Nilai Rata-rata</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={nilaiTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="bulan" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rata" stroke="var(--primary)" strokeWidth={2} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
