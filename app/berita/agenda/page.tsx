import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar } from 'lucide-react'

export default function AgendaPage() {
  const agenda = [
    { tanggal: '20 November 2024', kegiatan: 'Rapat Guru Pembina', tempat: 'Ruang Rapat' },
    { tanggal: '22 November 2024', kegiatan: 'Hari Ulang Tahun RI', tempat: 'Halaman Madrasah' },
    { tanggal: '25 November 2024', kegiatan: 'Ujian Tengah Semester', tempat: 'Ruang Kelas' },
    { tanggal: '01 Desember 2024', kegiatan: 'Pengumuman Nilai UTS', tempat: 'Portal Online' },
    { tanggal: '10 Desember 2024', kegiatan: 'Batas Akhir Pembayaran SPP', tempat: 'Bagian Keuangan' },
    { tanggal: '20 Desember 2024', kegiatan: 'Libur Semester Ganjil Dimulai', tempat: 'Dirumah' },
  ]

  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Agenda Kegiatan</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Daftar lengkap kegiatan dan acara penting madrasah
          </p>

          <div className="space-y-4">
            {agenda.map((item, idx) => (
              <div key={idx} className="bg-secondary rounded-lg p-6 border border-border hover:border-primary transition-colors">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary mb-1">{item.tanggal}</p>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                      {item.kegiatan}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Lokasi: {item.tempat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
