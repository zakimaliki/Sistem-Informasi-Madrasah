import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PelanggaranPrestasiTable } from '@/components/academic-tables'

export default function PelanggaranPrestasiPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Skor Pelanggaran & Prestasi</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Rekam jejak pelanggaran, prestasi, dan skor akhlak total
          </p>

          <PelanggaranPrestasiTable />
        </div>
      </section>

      <Footer />
    </main>
  )
}
