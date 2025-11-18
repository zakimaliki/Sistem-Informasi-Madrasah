import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function VisiMisiPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Visi & Misi</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Rumusan visi dan misi Madrasah Al-Hikmah yang mencerminkan komitmen pendidikan islam
          </p>

          {/* Visi */}
          <div className="bg-primary text-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4">Visi</h2>
            <p className="text-lg leading-relaxed">
              Menjadi Lembaga Pendidikan Islam Terdepan yang Menghasilkan Generasi Beriman, Berakhlak Mulia, 
              Berwawasan Luas, dan Siap Berkontribusi untuk Kemajuan Bangsa dan Agama.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-secondary rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Misi</h2>
            <ol className="space-y-4">
              {[
                'Menyelenggarakan pendidikan berkualitas tinggi yang menggabungkan kurikulum nasional dengan pembelajaran islam mendalam',
                'Membentuk karakter siswa yang kuat berdasarkan nilai-nilai Ahlus Sunnah Wal Jama\'ah dan akhlak mulia',
                'Mengembangkan program tahfidz Al-Qur\'an dan pembelajaran kitab kuning salafi dengan metode yang terbukti efektif',
                'Menciptakan lingkungan belajar yang aman, kondusif, dan inspiratif untuk pengembangan potensi siswa',
                'Memberdayakan tenaga pendidik dengan pelatihan berkelanjutan dan sertifikasi profesional',
                'Membangun kemitraan strategis dengan stakeholder untuk meningkatkan mutu pendidikan',
                'Mengembangkan jiwa entrepreneurship dan kepemimpinan siswa untuk masa depan yang lebih cerah',
              ].map((misi, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">{idx + 1}.</span>
                  <span className="text-muted-foreground">{misi}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Nilai-nilai Inti */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Nilai-nilai Inti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Iman & Taqwa', desc: 'Kepercayaan teguh kepada Allah dan komitmen menjalankan perintah-Nya' },
                { title: 'Akhlak Mulia', desc: 'Budi pekerti luhur yang tercermin dalam setiap tindakan dan perkataan' },
                { title: 'Ilmu Pengetahuan', desc: 'Pencapaian akademik tinggi melalui pembelajaran yang efektif dan inovatif' },
                { title: 'Integritas', desc: 'Kejujuran dan konsistensi dalam menjalankan tanggung jawab' },
                { title: 'Kepemimpinan', desc: 'Kemampuan membimbing diri sendiri dan orang lain menuju kebaikan' },
                { title: 'Kerja Sama', desc: 'Spirit kolaborasi dan saling mendukung untuk tujuan bersama' },
              ].map((nilai, idx) => (
                <div key={idx} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-border">
                  <h3 className="font-serif font-bold text-foreground mb-2">{nilai.title}</h3>
                  <p className="text-sm text-muted-foreground">{nilai.desc}</p>
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
