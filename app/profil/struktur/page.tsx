import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function StrukturPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Struktur Organisasi</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Bagan struktur organisasi Madrasah Al-Hikmah dan pemegang jabatan
          </p>

          <div className="bg-gradient-to-b from-primary/5 to-transparent rounded-lg p-8 border border-border">
            <div className="space-y-8">
              {/* Yayasan */}
              <div className="text-center">
                <div className="bg-primary text-white rounded-lg p-6 inline-block mb-4">
                  <p className="font-bold">Yayasan Pendidikan Al-Hikmah</p>
                </div>
              </div>

              <div className="text-center text-muted-foreground mb-4">
                <svg className="w-1 h-8 mx-auto" viewBox="0 0 2 8" fill="currentColor">
                  <line x1="1" y1="0" x2="1" y2="8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Pengasuh Pesantren */}
              <div className="text-center">
                <div className="bg-primary/20 text-primary rounded-lg p-6 inline-block mb-4">
                  <p className="font-bold">Pengasuh Pesantren</p>
                  <p className="text-sm">K.H. Abdurrahman Salim</p>
                </div>
              </div>

              <div className="text-center text-muted-foreground mb-4">
                <svg className="w-1 h-8 mx-auto" viewBox="0 0 2 8" fill="currentColor">
                  <line x1="1" y1="0" x2="1" y2="8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Kepala Madrasah */}
              <div className="text-center">
                <div className="bg-accent/20 text-accent rounded-lg p-6 inline-block mb-4">
                  <p className="font-bold">Kepala Madrasah</p>
                  <p className="text-sm">Drs. H. Muhammad Ridho, M.Pd</p>
                </div>
              </div>

              <div className="text-center text-muted-foreground mb-4">
                <svg className="w-8 h-1 mx-auto" viewBox="0 0 8 2" fill="currentColor">
                  <line x1="0" y1="1" x2="8" y2="1" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Wakil Kepala */}
              <div className="flex gap-4 justify-center">
                {['Kurikulum', 'Sarpras', 'Kesiswaan'].map((pos) => (
                  <div key={pos} className="bg-secondary border border-border rounded-lg p-4 text-center flex-1">
                    <p className="font-semibold text-foreground text-sm mb-2">Wakil Kepala</p>
                    <p className="text-xs text-muted-foreground">{pos}</p>
                  </div>
                ))}
              </div>

              <div className="text-center text-muted-foreground mb-4">
                <svg className="w-1 h-8 mx-auto" viewBox="0 0 2 8" fill="currentColor">
                  <line x1="1" y1="0" x2="1" y2="8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Unit Kerja */}
              <div className="grid grid-cols-3 gap-4">
                {['Tata Usaha', 'Bendahara', 'Perpustakaan'].map((unit) => (
                  <div key={unit} className="bg-secondary rounded-lg p-4 text-center">
                    <p className="text-sm font-semibold text-foreground">{unit}</p>
                  </div>
                ))}
              </div>

              <div className="text-center text-muted-foreground mb-4">
                <svg className="w-1 h-8 mx-auto" viewBox="0 0 2 8" fill="currentColor">
                  <line x1="1" y1="0" x2="1" y2="8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Guru & Siswa */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="font-semibold text-green-900">Guru & Pendidik</p>
                  <p className="text-sm text-green-700 mt-1">120+ Tenaga Pendidik</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <p className="font-semibold text-blue-900">Siswa</p>
                  <p className="text-sm text-blue-700 mt-1">1500+ Siswa Aktif</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Tambahan */}
          <div className="mt-12 space-y-6">
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-3">Kontak Unit Kerja</h2>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Tata Usaha:</span> (0295) 123-456 ext. 1
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Bendahara:</span> (0295) 123-456 ext. 5
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Perpustakaan:</span> (0295) 123-456 ext. 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
