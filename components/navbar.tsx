'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const menuItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Profil Madrasah', 
      href: '#',
      submenu: [
        { label: 'Sejarah', href: '/profil/sejarah' },
        { label: 'Pendiri', href: '/profil/pendiri' },
        { label: 'Struktur Organisasi', href: '/profil/struktur' },
        { label: 'Visi & Misi', href: '/profil/visi-misi' },
        { label: 'Fasilitas', href: '/profil/fasilitas' },
      ]
    },
    { 
      label: 'Lembaga Pendidikan',
      href: '#',
      submenu: [
        { label: 'PAUD Terpadu', href: '/lembaga/paud' },
        { label: 'Madrasah Ibtidaiyah (MI)', href: '/lembaga/mi' },
        { label: 'MTs Salafiyah', href: '/lembaga/mts' },
        { label: 'MA (Aliyah)', href: '/lembaga/ma' },
        { label: 'SMK Terpadu', href: '/lembaga/smk' },
      ]
    },
    { label: 'Program Islami', href: '/program-islami' },
    { label: 'Akademik', href: '/akademik' },
    { label: 'Keuangan', href: '/keuangan' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Berita', href: '/berita' },
    { label: 'Kontak', href: '/kontak' },
  ]

  return (
    <nav className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-serif font-bold text-xl text-primary">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-lg">
              ض
            </div>
            <span className="hidden md:inline">Madrasah Al-Hikmah</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <button
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {item.label}
                  </Link>
                )}
                
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="/ppdb"
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              PPDB
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <button
                    className="w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors flex items-center justify-between"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="w-full text-left block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                
                {item.submenu && activeDropdown === item.label && (
                  <div className="bg-secondary rounded-lg ml-4 mt-1 space-y-1">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-2 px-4 pt-4 border-t border-border">
              <Link
                href="/login"
                className="flex-1 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-center"
              >
                Masuk
              </Link>
              <Link
                href="/ppdb"
                className="flex-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                PPDB
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
