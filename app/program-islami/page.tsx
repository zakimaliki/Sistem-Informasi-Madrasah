import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function ProgramIslamiPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Program Islami Kami</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Berbagai program khusus untuk mendalami nilai-nilai islam dan mengembangkan hafidz/hafidzoh berkualitas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Program Tahfidz */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
              <div className="text-5xl mb-4">📖</div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Program Tahfidz</h2>
              <p className="text-muted-foreground mb-4">
                Program menghafal Al-Qur'an dengan target 5 juz per tahun menggunakan metode terbukti efektif
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Target hafalan: 5 juz/tahun atau 30 juz dalam 6 tahun</li>
                <li>✓ Metode setoran langsung dengan qari/qariah bersertifikat</li>
                <li>✓ Pengulangan tertanam dalam kegiatan harian</li>
                <li>✓ Pemberian reward dan insentif untuk pencapaian</li>
                <li>✓ Ujian praktik setiap semester</li>
              </ul>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-2">Jadwal Setoran:</p>
                <p className="text-xs text-muted-foreground">Pagi: 06:00-06:30 | Sore: 16:00-16:30</p>
              </div>
            </div>

            {/* Program Kitab Kuning */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-8 border border-border">
              <div className="text-5xl mb-4">📚</div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Program Kitab Kuning</h2>
              <p className="text-muted-foreground mb-4">
                Pembelajaran kitab-kitab klasik Islam dengan metode tradisional bandongan dan sorogan
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Kitab Fiqih: Al-Fiyah, Fiqh Muyassar</li>
                <li>✓ Kitab Aqidah: Aqidah Tahawiyyah, 'Aquidah al-'Awwam</li>
                <li>✓ Kitab Hadis: Riyadhus Shalihin, Arba'in Nawawi</li>
                <li>✓ Metode pembelajaran: Bandongan dan sorogan</li>
                <li>✓ Pembelajaran langsung dari ustadz berpengalaman</li>
              </ul>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-2">Ustadz Pengampu:</p>
                <p className="text-xs text-muted-foreground">Para ahli di bidang ilmu agama Islam klasik</p>
              </div>
            </div>

            {/* Kajian Rutin */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
              <div className="text-5xl mb-4">🕌</div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Kajian Rutin</h2>
              <p className="text-muted-foreground mb-4">
                Forum pembelajaran berkelanjutan untuk memperdalam pemahaman terhadap ajaran Islam
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Tafsir Al-Qur'an setiap minggu</li>
                <li>✓ Hadis pilihan dan pemahaman</li>
                <li>✓ Fikih kontemporer dan masalah halal-haram</li>
                <li>✓ Aqidah dan akhlak islamiyah</li>
                <li>✓ Pembicara: Ulama tamu dan ustadz madrasah</li>
              </ul>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-2">Jadwal:</p>
                <p className="text-xs text-muted-foreground">Setiap Jumat setelah sholat Ashar (16:30)</p>
              </div>
            </div>

            {/* Asrama */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-8 border border-border">
              <div className="text-5xl mb-4">🏘️</div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Asrama & Pembinaan Santri</h2>
              <p className="text-muted-foreground mb-4">
                Lingkungan pembelajaran 24 jam dengan pembinaan akhlak dan kepemimpinan yang intensif
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Asrama terpisah untuk putra dan putri</li>
                <li>✓ Fasilitas lengkap dengan standar kenyamanan</li>
                <li>✓ Kegiatan harian terstruktur (7 pagi - 21:30 malam)</li>
                <li>✓ Organisasi santri untuk mengembangkan leadership</li>
                <li>✓ Pembinaan akhlak berkelanjutan dari musyrif/musyrifah</li>
              </ul>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-2">Tata Tertib:</p>
                <p className="text-xs text-muted-foreground">Terapkan disiplin, kebersihan, dan adab islami</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
