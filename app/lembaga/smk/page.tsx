import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function SMKPage() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">SMK Terpadu</h1>
          <p className="text-lg text-muted-foreground mb-12">Sekolah Menengah Kejuruan dengan keahlian terstandar nasional dan nilai-nilai islami</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profil */}
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Profil Lembaga</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Kompetensi Keahlian:</strong> 3 program studi dengan sertifikasi industri</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Total Siswa:</strong> 400+ siswa aktif</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Pendidik:</strong> 35+ guru bersertifikat dan berpengalaman industri</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Akreditasi:</strong> A (Excellent)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Sertifikasi:</strong> Kompetensi internasional & ISO</span>
                </li>
              </ul>
            </div>

            {/* Program Studi */}
            <div className="bg-primary/10 rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Program Studi</h2>
              <div className="space-y-3">
                {[
                  '1. Teknik Elektro Industri',
                  '2. Teknik Mesin & Otomasi',
                  '3. Teknik Informatika & Komputer',
                ].map((program, idx) => (
                  <div key={idx} className="bg-white rounded p-3 border border-primary/20">
                    <p className="text-sm font-semibold text-foreground">{program}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Program Keahlian Detail */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Detail Program Keahlian</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '⚡',
                  title: 'Teknik Elektro Industri',
                  skills: [
                    'Instalasi tenaga listrik',
                    'Sistem kontrol otomatis',
                    'PLC & SCADA',
                    'Maintenance industri',
                    'Panel & inverter'
                  ],
                  industri: 'Industri Manufaktur, Energi'
                },
                {
                  icon: '🔧',
                  title: 'Teknik Mesin & Otomasi',
                  skills: [
                    'Perancangan mesin',
                    'CNC & Pemrograman',
                    'Hydraulik & Pneumatik',
                    'Maintenance mesin',
                    'Robotika dasar'
                  ],
                  industri: 'Industri Otomotif, Pabrik'
                },
                {
                  icon: '💻',
                  title: 'Teknik Informatika & Komputer',
                  skills: [
                    'Network & Server',
                    'Web Development',
                    'Database Management',
                    'IT Support & Maintenance',
                    'Cybersecurity'
                  ],
                  industri: 'IT, Telekomunikasi, Startup'
                },
              ].map((program, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">{program.icon}</div>
                  <h3 className="font-semibold text-foreground mb-3">{program.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-accent mb-2">KOMPETENSI:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {program.skills.map((skill, i) => (
                          <li key={i}>• {skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs"><span className="font-semibold text-foreground">Industri:</span> {program.industri}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kurikulum */}
          <div className="mt-12 bg-secondary rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Kurikulum & Pembelajaran</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Kelas X (Dasar Keahlian)</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Pembelajaran fundamental untuk semua program studi termasuk soft skills, bahasa, dan teori dasar
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Matematika teknik & Fisika</li>
                  <li>✓ Menggambar teknik & CAD</li>
                  <li>✓ Bahasa Indonesia & Inggris</li>
                  <li>✓ Pendidikan agama & karakter</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Kelas XI-XII (Konsentrasi & Praktik)</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fokus pada spesialisasi keahlian dengan praktik langsung di workshop & industri
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Mata pelajaran keahlian spesifik</li>
                  <li>✓ Praktik industri 60% waktu belajar</li>
                  <li>✓ Proyek & capstone projects</li>
                  <li>✓ Kerjasama dengan industri real</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fasilitas Praktik */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Workshop & Laboratorium</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Workshop Mesin CNC', desc: 'Mesin CNC 3-axis, lathe otomatis, dan precision tools' },
                { name: 'Laboratorium Elektronik & Listrik', desc: 'Trainer PLC, panel kontrol, dan power supply profesional' },
                { name: 'Lab Komputer & Networking', desc: 'Server, switch, router, dan workstation untuk praktik IT' },
                { name: 'Workshop Robotika', desc: 'Robot manipulator, automation simulator, dan IoT tools' },
                { name: 'Ruang Desain CAD', desc: 'Workstation dengan AutoCAD, CATIA, dan software design terbaru' },
                { name: 'Bengkel Umum', desc: 'Peralatan mesin untuk pemeliharaan dan perbaikan umum' },
              ].map((fasilitas, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border border-border">
                  <h3 className="font-semibold text-foreground">{fasilitas.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{fasilitas.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Tambahan */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Program Penunjang Karir</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '📜', name: 'Sertifikasi Industri', desc: 'Persiapan uji kompetensi nasional & internasional' },
                { icon: '🤝', name: 'Magang Industri', desc: 'Praktik kerja industri di perusahaan mitra selama 6 bulan' },
                { icon: '💼', name: 'Job Placement', desc: 'Dukungan penempatan kerja & pengembangan karir setelah lulus' },
                { icon: '🎓', name: 'Beasiswa', desc: 'Program beasiswa penuh dan parsial untuk siswa berprestasi' },
                { icon: '🌐', name: 'Kerjasama Global', desc: 'Program exchange student & dual degree dengan institusi luar' },
                { icon: '📚', name: 'Entrepreneurship', desc: 'Bimbingan bisnis & dukungan untuk membuka usaha sendiri' },
              ].map((program, idx) => (
                <div key={idx} className="bg-secondary rounded-lg p-6 border border-border text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{program.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{program.name}</h3>
                  <p className="text-sm text-muted-foreground">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prestasi */}
          <div className="mt-12 bg-accent/10 rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Prestasi & Pencapaian</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Akademik</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Kelulusan 98% dengan nilai minimal kompeten</li>
                  <li>✓ Juara 3 LKS Teknik Elektro Nasional 2024</li>
                  <li>✓ Sertifikasi BNSP 90% lulusan</li>
                  <li>✓ Passing rate uji kompetensi 92%</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Non-Akademik</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Pemenang Inovasi Teknologi Kabupaten</li>
                  <li>✓ Tim Robotika masuk final nasional</li>
                  <li>✓ Peserta aktif pameran industri</li>
                  <li>✓ Program CSR dengan UMKM</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Karir Alumni</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ 85% terserap di industri dalam 3 bulan</li>
                  <li>✓ Alumni di perusahaan multinasional</li>
                  <li>✓ 10% alumni menjadi entrepreneur sukses</li>
                  <li>✓ Rata-rata gaji 1st job: Rp 3-5 juta</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Wujudkan Karir Cemerlang Anda</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Pilih program keahlian yang sesuai dengan minat Anda dan raih kesuksesan di dunia industri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ppdb" className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Daftar Sekarang
              </Link>
              <Link href="/kontak" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
