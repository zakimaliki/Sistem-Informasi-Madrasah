'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Filter } from 'lucide-react'

export default function GaleriPrestasiPage() {
  const [selectedLembaga, setSelectedLembaga] = useState('semua')
  const [selectedYear, setSelectedYear] = useState('2024')

  const prestasi = [
    { id: 1, lembaga: 'MI', judul: 'Juara Olimpiade IPA Tingkat Provinsi', tahun: '2024', icon: '🏆' },
    { id: 2, lembaga: 'MI', judul: 'Juara 2 Lomba Cerdas Cermat Nasional', tahun: '2024', icon: '🥈' },
    { id: 3, lembaga: 'MTs', judul: 'Juara 1 Festival Tahfidz Anak Provinsi', tahun: '2024', icon: '📖' },
    { id: 4, lembaga: 'MTs', judul: 'Juara Lomba Tartil & Qiro\'ah se-Jateng', tahun: '2024', icon: '🎤' },
    { id: 5, lembaga: 'MA', judul: '95% Lulusan Diterima di PTN Pilihan', tahun: '2024', icon: '🎓' },
    { id: 6, lembaga: 'MA', judul: 'Juara Lomba Hadrah Tingkat Kabupaten', tahun: '2024', icon: '🥁' },
    { id: 7, lembaga: 'MI', judul: 'Penghargaan Sekolah Aman Berbudaya', tahun: '2023', icon: '🏅' },
    { id: 8, lembaga: 'MTs', judul: 'Akreditasi A dari Kemenag', tahun: '2023', icon: '✅' },
  ]

  const filteredPrestasi = prestasi.filter(p => 
    (selectedLembaga === 'semua' || p.lembaga === selectedLembaga) &&
    p.tahun === selectedYear
  )

  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Galeri Prestasi</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Prestasi siswa dan lembaga yang telah diraih
          </p>

          {/* Filter */}
          <div className="bg-secondary rounded-lg p-6 mb-12 flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-foreground mb-2">Lembaga</label>
              <select
                value={selectedLembaga}
                onChange={(e) => setSelectedLembaga(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="semua">Semua Lembaga</option>
                <option value="MI">MI</option>
                <option value="MTs">MTs</option>
                <option value="MA">MA</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-foreground mb-2">Tahun</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>

          {/* Grid Prestasi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrestasi.map(p => (
              <div key={p.id} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{p.icon}</div>
                <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded">{p.lembaga}</span>
                <h3 className="text-lg font-serif font-bold text-foreground mt-3">{p.judul}</h3>
                <p className="text-xs text-muted-foreground mt-2">Tahun {p.tahun}</p>
              </div>
            ))}
          </div>

          {filteredPrestasi.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada prestasi untuk filter yang dipilih.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
