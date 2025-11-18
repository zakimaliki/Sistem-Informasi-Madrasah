import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function FasilitasPage() {
  const fasilitas = [
    { icon: '📚', nama: 'Perpustakaan', desc: 'Perpustakaan modern dengan koleksi 10.000+ buku dan akses digital' },
    { icon: '🕌', nama: 'Masjid', desc: 'Masjid berkapasitas 500 orang untuk sholat dan kegiatan keagamaan' },
    { icon: '🧪', nama: 'Lab IPA', desc: 'Laboratorium IPA lengkap dengan peralatan modern dan aman' },
    { icon: '💻', nama: 'Lab Komputer', desc: 'Ruang komputer dengan 40+ unit untuk pembelajaran digital' },
    { icon: '🏫', nama: 'Ruang Kelas', desc: '60+ ruang kelas dengan fasilitas AC dan proyektor' },
    { icon: '🏠', nama: 'Asrama', desc: 'Asrama terpisah putra-putri dengan fasilitas lengkap dan nyaman' },
    { icon: '😊', nama: 'Ruang BK', desc: 'Ruang bimbingan konseling dengan konselor profesional' },
    { icon: '🎬', nama: 'Multimedia', desc: 'Studio multimedia untuk kegiatan ekstrakurikuler & acara' },
    { icon: '🍽️', nama: 'Kantin', desc: 'Kantin yang menyediakan makanan sehat dan bergizi' },
    { icon: '⚽', nama: 'Lapangan Olahraga', desc: 'Lapangan sepak bola, basket, dan voli berstandar' },
    { icon: '🏥', nama: 'Ruang UKS', desc: 'Unit kesehatan sekolah dengan peralatan medis lengkap' },
    { icon: '🚌', nama: 'Transportasi', desc: 'Armada bus sekolah untuk mengantar siswa yang tersebar di berbagai lokasi' },
  ]

  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Fasilitas Madrasah</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Daftar lengkap fasilitas yang tersedia di Madrasah Al-Hikmah untuk mendukung proses belajar mengajar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fasilitas.map((item, idx) => (
              <div key={idx} className="bg-secondary rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{item.nama}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Info Tambahan */}
          <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Komitmen Fasilitas</h2>
            <p className="text-muted-foreground mb-4">
              Madrasah Al-Hikmah terus melakukan pengembangan fasilitas untuk memastikan:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Ruang belajar yang nyaman, aman, dan mendukung pembelajaran aktif</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Peralatan pembelajaran modern sesuai perkembangan zaman</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Perawatan dan pemeliharaan fasilitas secara berkala</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Keamanan dan kenyamanan siswa menjadi prioritas utama</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
