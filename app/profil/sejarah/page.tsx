import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function SejarahPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Sejarah Madrasah Al-Hikmah</h1>
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex-1">
              <p className="text-muted-foreground">Diterbitkan: 15 November 2024</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Awal Berdirinya</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Madrasah Al-Hikmah didirikan pada tahun 1989 oleh K.H. Abdullah Salim, seorang tokoh ulama terkemuka di Kajen, Pati. Visi awalnya adalah memberikan pendidikan islami yang berkualitas namun tetap terjangkau bagi semua lapisan masyarakat. Pada awalnya, madrasah hanya memiliki beberapa ruang kelas dan sekitar 50 siswa.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Perkembangan Awal (1989-2000)</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Dalam dekade pertama, Madrasah Al-Hikmah terus berkembang pesat. Dengan dukungan masyarakat lokal dan alumni yang berkomitmen, lembaga pendidikan ini berhasil membangun asrama santri, masjid, dan perpustakaan. Kurikulum mulai disesuaikan dengan standar nasional sambil mempertahankan kedalaman materi islami.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Era Modernisasi (2001-2015)</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Periode ini menandai transformasi besar-besaran. Madrasah mulai menambah jenjang pendidikan dari PAUD hingga Aliyah. Fasilitas pembelajaran ditingkatkan dengan laboratorium IPA, laboratorium komputer, dan perpustakaan digital. Program tahfidz Al-Qur'an dan kitab kuning diintensifkan dengan metode pembelajaran yang lebih terstruktur.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Era Digital (2016-Sekarang)</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Pada tahun 2016, Madrasah Al-Hikmah meluncurkan transformasi digital dengan membangun sistem informasi terintegrasi. Platform e-learning, portal akademik, dan aplikasi manajemen keuangan diimplementasikan untuk meningkatkan efisiensi dan transparansi. Kemitraan dengan universitas ternama juga diperkuat untuk pengembangan kurikulum dan pelatihan guru.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Pencapaian Hingga Saat Ini</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Saat ini, Madrasah Al-Hikmah memiliki:
            </p>
            <ul className="text-muted-foreground mb-4 space-y-2">
              <li>• Lebih dari 1500 siswa aktif dari berbagai latar belakang</li>
              <li>• 5 jenjang pendidikan (PAUD hingga MA)</li>
              <li>• 120 tenaga pendidik profesional dan bersertifikat</li>
              <li>• Fasilitas modern dengan standar internasional</li>
              <li>• Program tahfidz dengan 500+ hafidz dan hafidzoh</li>
              <li>• Jaringan alumni yang tersebar di seluruh Indonesia dan mancanegara</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Komitmen ke Depan</h2>
            <p className="text-muted-foreground leading-relaxed">
              Madrasah Al-Hikmah berkomitmen untuk terus berinovasi dalam menyediakan pendidikan berkualitas tinggi yang menggabungkan keunggulan akademik dengan pembinaan karakter islami. Kami percaya bahwa generasi muda Islam harus dilengkapi dengan ilmu pengetahuan modern, nilai-nilai keislaman yang kuat, dan semangat service untuk masyarakat.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
