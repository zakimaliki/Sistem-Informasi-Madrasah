import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function GaleriPage() {
  const galleries = [
    {
      title: 'Galeri Prestasi',
      desc: 'Prestasi siswa dari berbagai jenjang pendidikan',
      icon: '🏆',
      items: 12
    },
    {
      title: 'Galeri Kegiatan',
      desc: 'Dokumentasi kegiatan sehari-hari di madrasah',
      icon: '📸',
      items: 28
    },
    {
      title: 'Video Dokumentasi',
      desc: 'Video-video penting dan kegiatan madrasah',
      icon: '🎥',
      items: 8
    },
  ]

  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Galeri Madrasah</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Dokumentasi lengkap prestasi, kegiatan, dan momen-momen berharga di Madrasah Al-Hikmah
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {galleries.map((gal, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border">
                <div className="p-6 bg-white/50">
                  <div className="text-5xl mb-4">{gal.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {gal.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {gal.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">
                      {gal.items} file
                    </span>
                    <button className="text-primary hover:text-primary/70 text-sm font-semibold">
                      Lihat →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sample Gallery Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Galeri Terbaru
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-5xl">📷</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
                      Lihat
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-primary/10 rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Video Dokumentasi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform">▶️</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <p className="text-white font-medium text-sm">Video Kegiatan {i + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
