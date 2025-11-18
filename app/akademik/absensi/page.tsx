import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AbsensiTable } from '@/components/academic-tables'

export default function AbsensiPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Data Absensi Siswa</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Rekam jejak kehadiran, keterlambatan, perizinan, dan ketidakhadiran
          </p>

          <AbsensiTable />
        </div>
      </section>

      <Footer />
    </main>
  )
}
