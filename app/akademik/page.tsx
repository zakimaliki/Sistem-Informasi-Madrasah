import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function AkademikPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Portal Akademik Siswa</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Akses informasi akademik, nilai, absensi, dan perkembangan siswa
          </p>

          {/* Login Notice */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <p className="text-foreground mb-4">
              Untuk mengakses data akademik lengkap, silakan login dengan akun siswa, guru, atau orang tua Anda.
            </p>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Login Sekarang
              </Link>
              <Link
                href="/ppdb"
                className="inline-flex items-center justify-center px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Daftar PPDB
              </Link>
            </div>
          </div>

          {/* Fitur Akademik */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Nilai Semester',
                icon: '📊',
                desc: 'Lihat nilai mata pelajaran, rata-rata, dan predikat Anda setiap semester',
              },
              {
                title: 'Absensi & Kehadiran',
                icon: '✅',
                desc: 'Pantau rekam jejak kehadiran, keterlambatan, dan perizinan',
              },
              {
                title: 'Catatan BK',
                icon: '📝',
                desc: 'Akses catatan bimbingan konseling dan perkembangan karakter',
              },
              {
                title: 'Skor Pelanggaran & Prestasi',
                icon: '🏆',
                desc: 'Lihat riwayat pelanggaran, prestasi, dan skor total perilaku',
              },
            ].map((fitur, idx) => (
              <div key={idx} className="bg-secondary rounded-lg p-6 border border-border hover:border-primary transition-colors">
                <div className="text-3xl mb-4">{fitur.icon}</div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {fitur.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {fitur.desc}
                </p>
                <button className="text-primary font-semibold hover:text-primary/70 transition-colors">
                  Lihat Detail →
                </button>
              </div>
            ))}
          </div>

          {/* Info Tambahan */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Panduan Menggunakan Portal Akademik</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">1.</span>
                <span>Login menggunakan username dan password yang diberikan saat pendaftaran</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">2.</span>
                <span>Pilih tahun ajaran dan semester yang ingin Anda lihat</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">3.</span>
                <span>Akses laporan akademik lengkap dan unduh dalam format PDF</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">4.</span>
                <span>Hubungi guru atau BK untuk membahas perkembangan akademik Anda</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
