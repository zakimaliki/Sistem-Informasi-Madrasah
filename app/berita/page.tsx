'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Calendar, User, Search, ChevronRight } from 'lucide-react'

export default function BeritaPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('semua')

  const beritaData = [
    {
      id: 1,
      judul: 'Wisuda Santri Tahfidz Angkatan 2023 Berlangsung Meriah',
      kategori: 'Pengumuman',
      tanggal: '15 November 2024',
      author: 'Admin',
      excerpt: 'Lebih dari 50 santri yang telah menyelesaikan hafalan 30 juz Al-Qur\'an dirayakan dalam acara wisuda yang meriah...',
      image: '🎓',
    },
    {
      id: 2,
      judul: 'Prestasi! Siswa MI Juara Olimpiade Sains Tingkat Provinsi',
      kategori: 'Prestasi',
      tanggal: '12 November 2024',
      author: 'Redaksi',
      excerpt: 'Selamat kepada siswa kelas V MI kami yang berhasil menjadi juara 2 Olimpiade Sains Tingkat Provinsi 2024...',
      image: '🏆',
    },
    {
      id: 3,
      judul: 'Dibuka Pendaftaran PPDB Tahun Ajaran 2024/2025',
      kategori: 'Pengumuman',
      tanggal: '10 November 2024',
      author: 'Admin',
      excerpt: 'Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025 untuk semua jenjang telah dibuka...',
      image: '📝',
    },
    {
      id: 4,
      judul: 'Kegiatan Outbound Santri Asrama di Taman Nasional Muria',
      kategori: 'Kegiatan',
      tanggal: '08 November 2024',
      author: 'Dokumentasi',
      excerpt: 'Santri asrama melaksanakan kegiatan outbound sebagai bagian dari pembinaan karakter dan penguatan...',
      image: '🏕️',
    },
    {
      id: 5,
      judul: 'Artikel Opini: Pentingnya Keseimbangan Akademik dan Spiritual',
      kategori: 'Opini',
      tanggal: '05 November 2024',
      author: 'Ustadz Ahmad',
      excerpt: 'Pendidikan ideal tidak hanya fokus pada aspek akademik semata, tetapi juga pembangunan kepribadian...',
      image: '✍️',
    },
    {
      id: 6,
      judul: 'Jadwal Semester Ganjil Tahun Ajaran 2024/2025',
      kategori: 'Informasi',
      tanggal: '01 November 2024',
      author: 'Tata Usaha',
      excerpt: 'Berikut adalah jadwal lengkap semester ganjil tahun ajaran 2024/2025 untuk semua jenjang...',
      image: '📅',
    },
  ]

  const categories = ['semua', 'Pengumuman', 'Prestasi', 'Kegiatan', 'Opini', 'Informasi']

  const filteredBerita = beritaData.filter(berita => {
    const matchesSearch = berita.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          berita.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'semua' || berita.kategori === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Berita & Informasi</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Informasi terkini tentang kegiatan, prestasi, dan pengumuman penting madrasah
          </p>

          {/* Search & Filter */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-foreground hover:border-primary border-2 border-transparent'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Berita Grid */}
          <div className="space-y-6">
            {filteredBerita.length > 0 ? (
              filteredBerita.map(berita => (
                <Link
                  key={berita.id}
                  href={`/berita/${berita.id}`}
                  className="bg-secondary rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary transition-all flex gap-6"
                >
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                    {berita.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {berita.kategori}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {berita.tanggal}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2 hover:text-primary transition-colors">
                      {berita.judul}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {berita.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <User className="w-3 h-3" /> {berita.author}
                      </span>
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Tidak ada berita yang sesuai dengan pencarian Anda.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">← Sebelumnya</button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">2</button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">3</button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">Berikutnya →</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
