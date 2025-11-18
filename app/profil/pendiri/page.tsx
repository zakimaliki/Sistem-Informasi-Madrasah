import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PendiriPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Profil Pendiri</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Biografi singkat dan kontribusi K.H. Abdullah Salim dalam mendirikan Madrasah Al-Hikmah
          </p>

          <div className="bg-secondary rounded-lg p-8 border border-border mb-8">
            <div className="flex gap-8">
              <div className="w-32 h-32 bg-primary/10 rounded-lg flex items-center justify-center text-6xl flex-shrink-0">
                👨‍🍳
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  K.H. Abdullah Salim
                </h2>
                <p className="text-muted-foreground mb-4">
                  (1945 - 2010)
                </p>
                <p className="text-foreground font-semibold mb-2">
                  Pendiri & Pelindidik Pertama Madrasah Al-Hikmah
                </p>
                <p className="text-sm text-muted-foreground">
                  Ulama terkemuka, tokoh penggerak pendidikan islam, dan pemimpin spiritual Kajen
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-2xl font-serif font-bold text-foreground">Riwayat Hidup</h2>
            <p className="text-muted-foreground leading-relaxed">
              K.H. Abdullah Salim lahir pada tahun 1945 di Kajen, Pati. Sejak kecil, beliau menunjukkan semangat belajar yang tinggi terhadap ilmu-ilmu islam. Beliau menempuh pendidikan di beberapa pesantren ternama di Jawa Tengah dan pernah mendalami ilmu agama di Mesir selama beberapa tahun.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground">Dedikasi untuk Pendidikan</h2>
            <p className="text-muted-foreground leading-relaxed">
              Setelah kembali dari studi, K.H. Abdullah Salim memiliki visi untuk memberikan pendidikan islam berkualitas kepada masyarakat. Pada tahun 1989, beliau mendirikan Madrasah Al-Hikmah sebagai wujud komitmen tersebut. Dengan dukungan masyarakat lokal, madrasah kecil ini berkembang menjadi lembaga pendidikan yang diakui secara luas.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground">Kontribusi Signifikan</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Mendirikan sistem pendidikan integratif yang menggabungkan kurikulum nasional dengan pembelajaran islam mendalam</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Mengembangkan program tahfidz yang menjadi unggulan dan telah menghasilkan ribuan hafidz berkualitas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Membangun asrama santri dengan sistem pembinaan akhlak yang kokoh berdasarkan nilai-nilai pesantren</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Melatih ratusan guru untuk mengembangkan metode pembelajaran yang efektif dan relevan</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Bermitra dengan pesantren ternama untuk memperkuat kurikulum dan standar akademik</span>
              </li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-foreground">Warisan & Pengaruh</h2>
            <p className="text-muted-foreground leading-relaxed">
              Meskipun K.H. Abdullah Salim telah meninggal pada tahun 2010, warisan beliau tetap hidup dalam bentuk Madrasah Al-Hikmah yang terus berkembang dan berdampak positif bagi ribuan siswa. Semangat pendidikan, komitmen terhadap akhlak mulia, dan visi menciptakan generasi berilmu dan beriman terus diwariskan kepada generasi penerus.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
