import Link from 'next/link'
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container-max py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-lg font-serif font-bold">
                ض
              </div>
              <h3 className="text-lg font-serif font-bold">Madrasah Al-Hikmah</h3>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Lembaga pendidikan Islam modern dengan komitmen membentuk generasi berakhlak mulia dan berwawasan luas.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-serif font-bold mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              <li><Link href="/profil/sejarah" className="text-white/70 hover:text-white text-sm transition-colors">Profil Madrasah</Link></li>
              <li><Link href="/lembaga/mi" className="text-white/70 hover:text-white text-sm transition-colors">Lembaga Pendidikan</Link></li>
              <li><Link href="/program-islami" className="text-white/70 hover:text-white text-sm transition-colors">Program Islami</Link></li>
              <li><Link href="/akademik" className="text-white/70 hover:text-white text-sm transition-colors">Portal Akademik</Link></li>
              <li><Link href="/berita" className="text-white/70 hover:text-white text-sm transition-colors">Berita & Informasi</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-serif font-bold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><Link href="/keuangan" className="text-white/70 hover:text-white text-sm transition-colors">Pembayaran SPP</Link></li>
              <li><Link href="/akademik" className="text-white/70 hover:text-white text-sm transition-colors">Nilai & Absensi</Link></li>
              <li><Link href="/galeri" className="text-white/70 hover:text-white text-sm transition-colors">Galeri & Dokumentasi</Link></li>
              <li><Link href="/ppdb" className="text-white/70 hover:text-white text-sm transition-colors">Pendaftaran (PPDB)</Link></li>
              <li><Link href="/kontak" className="text-white/70 hover:text-white text-sm transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-serif font-bold mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">Jl. Pendidikan No. 123, Kajen, Pati</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-white/70 hover:text-white text-sm transition-colors">(0295) 123-456</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@madrasah.com" className="text-white/70 hover:text-white text-sm transition-colors">info@madrasah.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © 2025 Madrasah Al-Hikmah. Semua hak dilindungi. Didukung oleh teknologi modern untuk pendidikan Islam terbaik.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">Privasi</Link>
              <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">Syarat & Ketentuan</Link>
              <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
