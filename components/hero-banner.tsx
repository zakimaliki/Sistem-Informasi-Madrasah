'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent min-h-screen flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full -ml-48 -mb-48"></div>

      <div className="container-max relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              ✨ Pendidikan Islam Modern Terintegrasi
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Membangun Generasi Beriman dan Berwawasan
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Sistem informasi madrasah terpadu yang menghubungkan dunia pendidikan akademik, program islami, dan pembinaan karakter berbasis nilai-nilai pesantren.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/ppdb"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Daftar Sekarang <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/profil/sejarah"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary">1500+</div>
                <div className="text-sm text-muted-foreground">Siswa Aktif</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Pengajar Berpengalaman</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary">35</div>
                <div className="text-sm text-muted-foreground">Tahun Berdiri</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <div className="text-6xl font-serif font-bold text-primary">ض</div>
                  </div>
                  <p className="text-primary font-serif text-lg">Madrasah Al-Hikmah</p>
                  <p className="text-muted-foreground text-sm">Membangun Masa Depan Cerah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
