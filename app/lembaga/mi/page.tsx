import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function MIPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Madrasah Ibtidaiyah (MI)</h1>
          <p className="text-lg text-muted-foreground mb-12">Jenjang dasar dengan kurikulum komprehensif dan program islam terpadu</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profil */}
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Profil Lembaga</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Jumlah Kelas:</strong> 6 Kelas (Kelas 1-6)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Total Siswa:</strong> 250+ siswa aktif</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Pendidik:</strong> 18 guru bersertifikat S1</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Akreditasi:</strong> A (Excellent)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Program Unggulan:</strong> Tahfidz, Bahasa Arab, IPA Terpadu</span>
                </li>
              </ul>
            </div>

            {/* Kurikulum */}
            <div className="bg-primary/10 rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Kurikulum</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mata Pelajaran Inti</h3>
                  <p className="text-sm text-muted-foreground">
                    Bahasa Indonesia, Matematika, IPA, IPS, Pendidikan Jasmani, Seni Budaya, Pendidikan Agama Islam
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Muatan Lokal & Tambahan</h3>
                  <p className="text-sm text-muted-foreground">
                    Bahasa Arab, Bahasa Inggris, Tahfidz Al-Qur'an, Pembelajaran Qur'an & Hadis
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ekstrakurikuler */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Program Ekstrakurikuler</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '📖', name: 'Tahfidz Al-Qur\'an', desc: 'Program menghafal Qur\'an dengan target 5 juz per tahun' },
                { icon: '🎤', name: 'Qiro\'ah', desc: 'Pembelajaran membaca Qur\'an dengan tartil yang indah' },
                { icon: '🥁', name: 'Hadrah', desc: 'Seni musik islami tradisional' },
                { icon: '🏕️', name: 'Pramuka', desc: 'Pembinaan karakter dan kepemimpinan' },
                { icon: '🌍', name: 'Bahasa Arab', desc: 'Kursus intensif bahasa arab tingkat dasar' },
                { icon: '🗣️', name: 'Bahasa Inggris', desc: 'Pelatihan bahasa inggris komunikatif' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prestasi */}
          <div className="mt-12 bg-accent/10 rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Prestasi Lembaga</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Prestasi Akademik</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Nilai UN Matematika rata-rata 78 (Standar Nasional)</li>
                  <li>✓ Juara 2 Lomba Olimpiade IPA Tingkat Kabupaten</li>
                  <li>✓ Juara 3 Lomba Cerdas Cermat Nasional</li>
                  <li>✓ 40% lulusan masuk MTs dengan ranking atas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Prestasi Non-Akademik</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Juara 1 Festival Tahfidz Anak Tingkat Provinsi 2024</li>
                  <li>✓ Juara Lomba Tartil & Qiro'ah se-Jateng</li>
                  <li>✓ Pemenang Lomba Hadrah Tingkat Kabupaten</li>
                  <li>✓ Peserta Aktif Kompetisi Sains Madrasah Nasional</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Tertarik Mendaftar?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan ratusan siswa yang telah merasakan pendidikan berkualitas di MI Madrasah Al-Hikmah
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
