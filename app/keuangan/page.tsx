import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { CreditCard, PiggyBank, AlertCircle } from 'lucide-react'

export default function KeuanganPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Layanan Keuangan</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Kelola pembayaran SPP, tabungan siswa, dan informasi keuangan madrasah
          </p>

          {/* Info Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 flex gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-1">Penting: Jadwal Pembayaran SPP</h3>
              <p className="text-sm text-yellow-800">SPP untuk bulan Desember 2024 harus dibayar paling lambat tanggal 10 Desember 2024. Hubungi bagian keuangan jika ada kesulitan.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* SPP Card */}
            <Link href="/keuangan/spp" className="bg-white rounded-lg border border-border p-8 hover:shadow-lg hover:border-primary transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
                Pembayaran SPP
              </h2>
              <p className="text-muted-foreground mb-6">
                Kelola pembayaran SPP bulanan, lihat riwayat pembayaran, dan upload bukti transfer
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tagihan Bulan Ini:</span>
                  <span className="font-semibold text-foreground">Rp 500.000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">Tertunggak</span>
                </div>
              </div>
              <button className="mt-6 text-primary font-semibold hover:text-primary/70 transition-colors">
                Lihat Detail →
              </button>
            </Link>

            {/* Tabungan Card */}
            <Link href="/keuangan/tabungan" className="bg-white rounded-lg border border-border p-8 hover:shadow-lg hover:border-primary transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <PiggyBank className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
                Buku Tabungan Siswa
              </h2>
              <p className="text-muted-foreground mb-6">
                Kelola saldo tabungan, lihat riwayat setoran dan penarikan, serta grafik perkembangan
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Saldo Akhir:</span>
                  <span className="font-semibold text-foreground">Rp 850.000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Bulan Ini:</span>
                  <span className="text-green-600 font-semibold">+Rp 100.000</span>
                </div>
              </div>
              <button className="mt-6 text-accent font-semibold hover:text-accent/70 transition-colors">
                Lihat Detail →
              </button>
            </Link>
          </div>

          {/* Info Tambahan */}
          <div className="bg-white rounded-lg border border-border p-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Informasi Keuangan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Biaya SPP</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex justify-between">
                    <span>PAUD Terpadu:</span>
                    <span>Rp 300.000/bulan</span>
                  </li>
                  <li className="flex justify-between">
                    <span>MI (Madrasah Ibtidaiyah):</span>
                    <span>Rp 400.000/bulan</span>
                  </li>
                  <li className="flex justify-between">
                    <span>MTs Salafiyah:</span>
                    <span>Rp 500.000/bulan</span>
                  </li>
                  <li className="flex justify-between">
                    <span>MA (Aliyah):</span>
                    <span>Rp 600.000/bulan</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Panduan Pembayaran</h3>
                <ul className="space-y-2 text-muted-foreground text-sm list-decimal list-inside">
                  <li>Pembayaran dilakukan sebelum tanggal 10 setiap bulannya</li>
                  <li>Transfer ke rekening yang sudah ditentukan</li>
                  <li>Catat nomor ID siswa di berita transfer</li>
                  <li>Upload bukti pembayaran ke sistem</li>
                  <li>Verifikasi dalam 1x24 jam kerja</li>
                </ul>
              </div>
            </div>

            {/* Kontak */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-3">Hubungi Bagian Keuangan</h3>
              <p className="text-muted-foreground text-sm mb-2">
                <span className="font-medium">Telepon:</span> (0295) 123-456 ext. 5
              </p>
              <p className="text-muted-foreground text-sm mb-2">
                <span className="font-medium">Email:</span> keuangan@madrasah.com
              </p>
              <p className="text-muted-foreground text-sm">
                <span className="font-medium">Jam Layanan:</span> Senin-Jumat 08:00-15:00, Sabtu 08:00-11:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
