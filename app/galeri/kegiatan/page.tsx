'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { X } from 'lucide-react'

export default function GaleriKegiatanPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const kegiatan = [
    { id: 1, judul: 'Upacara Bendera Hari Senin', tanggal: '18 Nov 2024', icon: '🚩', kategori: 'Rutin' },
    { id: 2, judul: 'Acara Wisuda Tahfidz', tanggal: '15 Nov 2024', icon: '🎓', kategori: 'Khusus' },
    { id: 3, judul: 'Outbound Santri Asrama', tanggal: '10 Nov 2024', icon: '🏕️', kategori: 'Outing' },
    { id: 4, judul: 'Sholat Dhuhur Berjamaah', tanggal: '08 Nov 2024', icon: '🕌', kategori: 'Rutin' },
    { id: 5, judul: 'Persiapan Lomba Tahfidz', tanggal: '05 Nov 2024', icon: '📖', kategori: 'Akademik' },
    { id: 6, judul: 'Pembelajaran Kitab Kuning', tanggal: '01 Nov 2024', icon: '📚', kategori: 'Akademik' },
    { id: 7, judul: 'Istirahat & Makan Siang', tanggal: '30 Okt 2024', icon: '🍽️', kategori: 'Rutin' },
    { id: 8, judul: 'Kegiatan Pembersihan Lingkungan', tanggal: '25 Okt 2024', icon: '🧹', kategori: 'Rutin' },
  ]

  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Galeri Kegiatan</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Dokumentasi kegiatan harian di madrasah dan asrama
          </p>

          {/* Grid Kegiatan */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {kegiatan.map(item => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <div className="text-6xl">{item.icon}</div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
                    Lihat
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm font-medium">{item.judul}</p>
                  <p className="text-white/80 text-xs">{item.tanggal}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-2xl w-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h2 className="text-xl font-serif font-bold text-foreground">
                    {kegiatan.find(k => k.id === selectedImage)?.judul}
                  </h2>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-1 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-6 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 min-h-96">
                  <div className="text-9xl">
                    {kegiatan.find(k => k.id === selectedImage)?.icon}
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Tanggal: {kegiatan.find(k => k.id === selectedImage)?.tanggal}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
