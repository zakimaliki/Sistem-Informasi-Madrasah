import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function PAUDPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">PAUD Terpadu</h1>
          <p className="text-lg text-muted-foreground mb-12">Pendidikan Anak Usia Dini dengan pendekatan islami dan developmentally appropriate practices</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profil */}
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Profil Lembaga</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Kelompok Usia:</strong> 2-6 tahun (Kelompok Bermain, TK A, TK B)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Total Peserta Didik:</strong> 150+ anak aktif</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Pendidik:</strong> 12 guru terlatih dan bersertifikat</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Akreditasi:</strong> A (Excellent)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Fasilitas:</strong> Ruang bermain, ruang belajar, taman, masjid, area outdoor</span>
                </li>
              </ul>
            </div>

            {/* Program */}
            <div className="bg-primary/10 rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Program Pembelajaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Kurikulum Terintegrasi</h3>
                  <p className="text-sm text-muted-foreground">
                    Menggabungkan kurikulum nasional dengan muatan islami untuk pengembangan holistik
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Metode Pembelajaran</h3>
                  <p className="text-sm text-muted-foreground">
                    Play-based learning, sentra pembelajaran, active learning sesuai tahap perkembangan
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pendekatan Islami</h3>
                  <p className="text-sm text-muted-foreground">
                    Pembiasaan adab, doa, tahfidz surat-surat pendek, dan nilai-nilai islam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sentra Pembelajaran */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Sentra Pembelajaran</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '📚', name: 'Sentra Persiapan', desc: 'Membaca, menulis, matematika dasar' },
                { icon: '🎨', name: 'Sentra Seni', desc: 'Melukis, menggambar, krayon, dan kreativitas' },
                { icon: '🏠', name: 'Sentra Imtaq', desc: 'Doa, hadis, cerita Nabi, nilai islam' },
                { icon: '🧩', name: 'Sentra Bermain Peran', desc: 'Role play, imaginasi, social skills' },
              ].map((sentra, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{sentra.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{sentra.name}</h3>
                  <p className="text-sm text-muted-foreground">{sentra.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Aktivitas Rutin */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Aktivitas Rutin</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: '🌅 Upacara Pagi', desc: 'Setiap hari Senin dengan pembelajaran patriotisme dan nilai islam' },
                { title: '📖 Bercerita & Tahfidz', desc: 'Cerita nabi dan sahabat, hafal surat-surat pendek Al-Qur\'an' },
                { title: '🎭 Seni & Budaya', desc: 'Menari, menyanyi, bermain musik, dan ekspresi seni lainnya' },
                { title: '🏃 Olahraga & Permainan', desc: 'Aktivitas fisik dan permainan outdoor untuk perkembangan motorik' },
                { title: '🍽️ Gizi & Kesehatan', desc: 'Snack bergizi, edukasi kebersihan, dan pemeriksaan kesehatan berkala' },
                { title: '👨‍👩‍👧 Kerjasama dengan Orang Tua', desc: 'Parenting workshop, open class, dan komunikasi rutin' },
              ].map((aktivitas, idx) => (
                <div key={idx} className="bg-secondary rounded-lg p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{aktivitas.title}</h3>
                  <p className="text-sm text-muted-foreground">{aktivitas.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prestasi */}
          <div className="mt-12 bg-accent/10 rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Pencapaian & Prestasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Prestasi Akademik</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ 95% siswa siap masuk SD dengan kemampuan akademik optimal</li>
                  <li>✓ Penguasaan tahfidz rata-rata 5 surat pendek per siswa</li>
                  <li>✓ Program kesiapan membaca & menulis efektif</li>
                  <li>✓ Pengembangan logika matematika yang baik</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Prestasi Non-Akademik</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Juara 1 & 2 Lomba Seni Rupa Anak se-Kabupaten</li>
                  <li>✓ Peserta aktif Pekan PAUD Tingkat Provinsi</li>
                  <li>✓ Penghargaan akreditasi A dari Dinas Pendidikan</li>
                  <li>✓ Program islami yang terintegrasi sempurna dalam pembelajaran</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fasilitas */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Fasilitas & Sarana</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Ruang Kelas AC', desc: '6 ruang kelas dengan AC, whiteboard, dan alat pembelajaran' },
                { name: 'Area Bermain Outdoor', desc: 'Lapangan bermain, ayunan, seluncuran, dan sandbox' },
                { name: 'Perpustakaan', desc: 'Koleksi buku cerita, dongeng, dan buku pembelajaran anak' },
                { name: 'Masjid', desc: 'Masjid khusus untuk shalat berjamaah dan kajian' },
                { name: 'Ruang Multimedia', desc: 'Proyektor, speaker, dan sarana pembelajaran multimedia' },
                { name: 'Kamar Mandi Anak', desc: 'Kamar mandi khusus anak dengan standar kebersihan tinggi' },
              ].map((fasilitas, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border border-border text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2">{fasilitas.name}</h3>
                  <p className="text-sm text-muted-foreground">{fasilitas.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Daftarkan Anak Anda Sekarang</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Berikan pendidikan terbaik dengan pendekatan islami sejak dini. Tempat terbatas untuk tahun ajaran ini!
            </p>
            <Link href="/ppdb" className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Daftar PAUD
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
