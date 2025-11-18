'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function StrukturPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Load OrgChart CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://balkan.app/OrgChart/latest/orgchart.css'
    document.head.appendChild(link)

    // Load OrgChart JS
    const script = document.createElement('script')
    script.src = 'https://balkan.app/OrgChart/latest/orgchart.js'
    script.async = true
    script.onload = () => {
      setLoaded(true)
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    if (loaded && typeof window !== 'undefined' && (window as any).OrgChart) {
      const OrgChart = (window as any).OrgChart

      const datasource = {
        'id': 'yayasan',
        'name': 'Yayasan Pendidikan Al-Hikmah',
        'title': 'Badan Penyelenggara',
        'children': [
          {
            'id': 'pengasuh',
            'name': 'K.H. Abdurrahman Salim',
            'title': 'Pengasuh Pesantren',
            'children': [
              {
                'id': 'kepala',
                'name': 'Drs. H. Muhammad Ridho, M.Pd',
                'title': 'Kepala Madrasah',
                'children': [
                  {
                    'id': 'kurikulum',
                    'name': 'Dra. Siti Nur Azizah',
                    'title': 'Wakil Kepala Kurikulum'
                  },
                  {
                    'id': 'sarpras',
                    'name': 'H. Sutrisno, S.Pd.I',
                    'title': 'Wakil Kepala Sarpras'
                  },
                  {
                    'id': 'kesiswaan',
                    'name': 'Hj. Umi Salamah, S.Ag',
                    'title': 'Wakil Kepala Kesiswaan'
                  }
                ]
              }
            ]
          }
        ]
      }

      try {
        const chart = new OrgChart({
          container: document.getElementById('diagram'),
          data: datasource,
          enableSearch: false,
          template: 'ana',
          editForm: false,
          lazyLoading: false,
          nodeBinding: {
            field_0: 'name',
            field_1: 'title'
          }
        })
      } catch (error) {
        console.error('[v0] OrgChart Error:', error)
      }
    }
  }, [loaded])

  return (
    <main>
      <Navbar />
      <section className="section-padding bg-white">
        <div className="container-max max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Struktur Organisasi</h1>
            <p className="text-lg text-muted-foreground">
              Bagan struktur organisasi Madrasah Al-Hikmah dan pemegang jabatan
            </p>
          </div>

          {/* Fallback: Struktur Organisasi Statis */}
          <div className="bg-white rounded-lg border-2 border-primary/20 p-8 mb-12 overflow-auto" style={{ minHeight: '600px' }}>
            <div className="flex flex-col items-center gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-lg p-6 inline-block mb-4">
                  <p className="font-bold">Yayasan Pendidikan Al-Hikmah</p>
                </div>
                <div className="text-muted-foreground mb-4">↓</div>
                <div className="bg-primary/20 text-primary rounded-lg p-6 inline-block mb-4">
                  <p className="font-bold">Pengasuh Pesantren</p>
                  <p className="text-sm">K.H. Abdurrahman Salim</p>
                </div>
                <div className="text-muted-foreground mb-4">↓</div>
                <div className="bg-accent/20 text-accent rounded-lg p-6 inline-block mb-4">
                  <p className="font-bold">Kepala Madrasah</p>
                  <p className="text-sm">Drs. H. Muhammad Ridho, M.Pd</p>
                </div>
                <div className="text-muted-foreground mb-4">↓</div>
                <div className="flex flex-row gap-4 justify-center">
                  <div className="bg-secondary border border-border rounded-lg p-4 text-center flex-1">
                    <p className="font-semibold text-foreground text-sm mb-2">Wakil Kepala Kurikulum</p>
                    <p className="text-xs text-muted-foreground">Dra. Siti Nur Azizah</p>
                  </div>
                  <div className="bg-secondary border border-border rounded-lg p-4 text-center flex-1">
                    <p className="font-semibold text-foreground text-sm mb-2">Wakil Kepala Sarpras</p>
                    <p className="text-xs text-muted-foreground">H. Sutrisno, S.Pd.I</p>
                  </div>
                  <div className="bg-secondary border border-border rounded-lg p-4 text-center flex-1">
                    <p className="font-semibold text-foreground text-sm mb-2">Wakil Kepala Kesiswaan</p>
                    <p className="text-xs text-muted-foreground">Hj. Umi Salamah, S.Ag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Tambahan */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Daftar Pejabat Madrasah</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Drs. H. Muhammad Ridho, M.Pd', jabatan: 'Kepala Madrasah', telp: '(0295) 123-456 ext. 2' },
                  { name: 'Dra. Siti Nur Azizah', jabatan: 'Wakil Kepala Kurikulum', telp: '(0295) 123-456 ext. 4' },
                  { name: 'H. Sutrisno, S.Pd.I', jabatan: 'Wakil Kepala Sarpras', telp: '(0295) 123-456 ext. 7' },
                  { name: 'Hj. Umi Salamah, S.Ag', jabatan: 'Wakil Kepala Kesiswaan', telp: '(0295) 123-456 ext. 8' },
                  { name: 'Ahmad Solikhin, S.Pd', jabatan: 'Kepala Tata Usaha', telp: '(0295) 123-456 ext. 1' },
                  { name: 'Siti Khotijah, S.Pd', jabatan: 'Bendahara', telp: '(0295) 123-456 ext. 5' },
                ].map((pejabat, idx) => (
                  <div key={idx} className="bg-secondary rounded-lg p-4 border border-border hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-foreground">{pejabat.name}</h3>
                    <p className="text-sm text-accent mb-2">{pejabat.jabatan}</p>
                    <p className="text-xs text-muted-foreground">{pejabat.telp}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Hubungi Unit Kerja</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Tata Usaha</p>
                  <p className="text-muted-foreground">(0295) 123-456 ext. 1</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Bendahara</p>
                  <p className="text-muted-foreground">(0295) 123-456 ext. 5</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Perpustakaan</p>
                  <p className="text-muted-foreground">(0295) 123-456 ext. 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
