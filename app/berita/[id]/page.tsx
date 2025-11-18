import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Calendar, User, Share2, Printer as Print } from 'lucide-react'

export default function BeritaDetailPage({ params }: { params: { id: string } }) {
  // In a real app, fetch berita data by ID
  const berita = {
    id: 1,
    judul: 'Wisuda Santri Tahfidz Angkatan 2023 Berlangsung Meriah',
    kategori: 'Pengumuman',
    tanggal: '15 November 2024',
    author: 'Admin Madrasah',
    image: '🎓',
    konten: `
      Acara wisuda santri tahfidz angkatan 2023 telah berlangsung dengan meriah pada Sabtu, 15 November 2024 di aula Madrasah Al-Hikmah. 
      Lebih dari 50 santri yang telah menyelesaikan hafalan 30 juz Al-Qur'an dirayakan dalam acara yang penuh berkah ini.

      Dalam sambutannya, Kepala Madrasah menekankan pentingnya konsistensi dalam menjaga hafalan. "Menghafal Al-Qur'an bukan hanya tentang 
      mencapai target juz, tetapi juga tentang menginternalisasi nilai-nilai Qur'an dalam kehidupan sehari-hari," ujarnya.

      Para hafidz dan hafidzoh yang telah lulus akan diberikan sertifikat dan kesempatan untuk melanjutkan program tahfidz tingkat lanjut. 
      Selain itu, beberapa siswa terbaik mendapatkan beasiswa untuk melanjutkan pendidikan ke pesantren ternama di Jawa Tengah.

      Acara ini juga dihadiri oleh orang tua siswa, guru, dan berbagai tokoh masyarakat yang mendukung program pendidikan islami di madrasah. 
      Terima kasih kepada semua pihak yang telah berkontribusi dalam kesuksesan program tahfidz kami.
    `,
  }

  const beritaTerkait = [
    { id: 2, judul: 'Prestasi! Siswa MI Juara Olimpiade Sains', kategori: 'Prestasi', tanggal: '12 Nov 2024' },
    { id: 3, judul: 'Dibuka PPDB Tahun Ajaran 2024/2025', kategori: 'Pengumuman', tanggal: '10 Nov 2024' },
    { id: 4, judul: 'Kegiatan Outbound Santri Asrama', kategori: 'Kegiatan', tanggal: '08 Nov 2024' },
  ]

  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {berita.kategori}
              </span>
            </div>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              {berita.judul}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {berita.tanggal}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> {berita.author}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-8">
            <div className="text-8xl">{berita.image}</div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {berita.konten}
            </p>
          </div>

          {/* Share & Print */}
          <div className="flex gap-4 py-8 border-t border-b border-border mb-12">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-foreground">
              <Share2 className="w-4 h-4" /> Bagikan
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-foreground">
              <Print className="w-4 h-4" /> Cetak
            </button>
          </div>

          {/* Berita Terkait */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Berita Terkait</h2>
            <div className="space-y-4">
              {beritaTerkait.map(berita => (
                <Link
                  key={berita.id}
                  href={`/berita/${berita.id}`}
                  className="p-4 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-primary">{berita.kategori}</span>
                      <h3 className="font-semibold text-foreground mt-1 hover:text-primary transition-colors">
                        {berita.judul}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2">{berita.tanggal}</p>
                    </div>
                    <span className="text-xl">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
