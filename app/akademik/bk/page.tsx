import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CatatanBKTable } from '@/components/academic-tables'

export default function CatatanBKPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Catatan Bimbingan Konseling</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Riwayat lengkap catatan bimbingan konseling per kategori
          </p>

          <CatatanBKTable />
        </div>
      </section>

      <Footer />
    </main>
  )
}
