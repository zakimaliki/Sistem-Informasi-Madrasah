import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function MTSPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">MTs Salafiyah</h1>
          <p className="text-lg text-muted-foreground mb-12">Jenjang menengah dengan program unggulan tahfidz dan kitab kuning</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Profil Lembaga</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Jumlah Kelas:</strong> 3 Kelas (Kelas 7-9)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Total Siswa:</strong> 350+ siswa</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Pendidik:</strong> 22 guru S1/S2 Bersertifikat</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Program Khusus:</strong> Full Tahfidz, Kitab Kuning Salafi</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Program Unggulan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Tahfidz Intensif</h3>
                  <p className="text-sm text-muted-foreground">
                    Program hafalan 5-10 juz per tahun dengan setoran harian dan evaluasi berkelanjutan
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Kitab Kuning Salafi</h3>
                  <p className="text-sm text-muted-foreground">
                    Pembelajaran kitab-kitab klasik fiqih, hadis, dan aqidah dengan metode tradisional
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Program */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Kegiatan Rutin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Setoran Tahfidz', desc: 'Setiap pagi 06:00 dan sore 16:00 dengan qari berpengalaman' },
                { title: 'Kajian Kitab', desc: 'Setiap hari dengan ustadz salafi yang berpengalaman' },
                { title: 'Sholat Berjamaah', desc: 'Lima waktu di masjid dengan pembinaan akhlak' },
                { title: 'Tasmi\'a Rutin', desc: 'Setiap bulan untuk menguji hafalan siswa' },
              ].map((item, idx) => (
                <div key={idx} className="bg-secondary rounded-lg p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Bergabunglah dengan MTs Salafiyah</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Dapatkan pengalaman belajar yang holistik menggabungkan akademik modern dan pembelajaran islami mendalam
            </p>
            <Link href="/ppdb" className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Daftar PPDB Sekarang
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
