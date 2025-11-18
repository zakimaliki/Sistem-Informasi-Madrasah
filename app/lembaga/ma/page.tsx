import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function MAPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Madrasah Aliyah (MA)</h1>
          <p className="text-lg text-muted-foreground mb-12">Jenjang atas dengan program keunggulan dan persiapan karir/lanjutan</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Profil Lembaga</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Jumlah Kelas:</strong> 3 Kelas (Kelas 10-12)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Total Siswa:</strong> 300+ siswa</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Akreditasi:</strong> A (Terakreditasi Penuh)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Program:</strong> IPA, IPS, Bahasa, Tahfidz</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Program Keunggulan</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>✓ Program Tahfidz dengan target 30 juz dalam 3 tahun</li>
                <li>✓ Persiapan SNBT dan tes masuk PTN</li>
                <li>✓ English conversation & TOEFL</li>
                <li>✓ Keterampilan software dan teknologi</li>
                <li>✓ Life skills & entrepreneurship</li>
              </ul>
            </div>
          </div>

          {/* Jurusan */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Program Studi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'MIPA', desc: 'Fokus pada mata pelajaran sains (Matematika, Fisika, Kimia, Biologi)' },
                { name: 'MIPS', desc: 'Fokus pada ilmu sosial (Ekonomi, Geografi, Sejarah, Sosiologi)' },
                { name: 'Bahasa', desc: 'Fokus pada bahasa dan sastra (Arab, Inggris, Indonesia, Budaya)' },
              ].map((prog, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-3">{prog.name}</h3>
                  <p className="text-sm text-muted-foreground">{prog.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prestasi */}
          <div className="mt-12 bg-accent/10 rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Pencapaian Alumni</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ 95% lulusan diterima di PTN pilihan</li>
              <li>✓ Ribuan alumni bekerja di instansi pemerintah & swasta</li>
              <li>✓ Banyak alumni menjadi profesor dan peneliti</li>
              <li>✓ Alumni tersebar di berbagai universitas top Indonesia</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Wujudkan Masa Depan Cemerlang</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              MA Madrasah Al-Hikmah adalah tempat yang tepat untuk mengembangkan potensi akademik dan spiritual Anda
            </p>
            <Link href="/ppdb" className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
