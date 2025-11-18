import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TabunganSiswaTable } from '@/components/finance-tables'

export default function TabunganPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Buku Tabungan Siswa</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Kelola tabungan pribadi Anda dengan sistem pencatatan transaksi transparan
          </p>

          <TabunganSiswaTable />
        </div>
      </section>

      <Footer />
    </main>
  )
}
