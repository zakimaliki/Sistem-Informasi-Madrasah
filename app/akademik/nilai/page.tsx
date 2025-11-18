import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { NilaiSemesterTable } from '@/components/academic-tables'

export default function NilaiPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Nilai Semester</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Laporan nilai lengkap mata pelajaran per semester
          </p>

          <NilaiSemesterTable />
        </div>
      </section>

      <Footer />
    </main>
  )
}
