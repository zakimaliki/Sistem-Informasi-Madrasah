import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SPPPaymentTable } from '@/components/finance-tables'

export default function SPPPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Pembayaran SPP</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Kelola pembayaran SPP dan lihat riwayat pembayaran Anda
          </p>

          <SPPPaymentTable />
        </div>
      </section>

      <Footer />
    </main>
  )
}
