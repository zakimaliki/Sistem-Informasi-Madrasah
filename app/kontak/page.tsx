import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function KontakPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Hubungi Kami</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Tim kami siap membantu Anda dengan pertanyaan atau informasi lebih lanjut
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telepon</h3>
                  <p className="text-muted-foreground">(0295) 123-456</p>
                  <p className="text-muted-foreground">(0295) 654-321</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@madrasah.com</p>
                  <p className="text-muted-foreground">ppdb@madrasah.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Alamat</h3>
                  <p className="text-muted-foreground">
                    Jl. Pendidikan No. 123<br />
                    Kajen, Pati 59183<br />
                    Jawa Tengah, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Jam Layanan</h3>
                  <p className="text-muted-foreground">
                    Senin - Jumat: 07:00 - 16:30<br />
                    Sabtu: 08:00 - 12:00<br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    placeholder="Subjek pesan"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tuliskan pesan Anda di sini"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="bg-border rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl mb-2">🗺️</p>
              <p className="text-muted-foreground">Peta lokasi Madrasah Al-Hikmah</p>
              <p className="text-sm text-muted-foreground mt-2">Kajen, Pati, Jawa Tengah</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
