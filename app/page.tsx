import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroBanner } from '@/components/hero-banner'
import Link from 'next/link'
import { BookOpen, Users, GraduationCap, Zap } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Program Akademik Lengkap',
      description: 'Kurikulum nasional terintegrasi dengan program keislaman dari PAUD hingga Aliyah'
    },
    {
      icon: GraduationCap,
      title: 'Program Islami Intensif',
      description: 'Tahfidz, kitab kuning, kajian rutin, dan pembinaan karakter islami'
    },
    {
      icon: Users,
      title: 'Komunitas Santri Solid',
      description: 'Asrama terintegrasi dengan sistem pembinaan akhlak dan kepemimpinan'
    },
    {
      icon: Zap,
      title: 'Teknologi Terkini',
      description: 'Platform digital untuk akademik, keuangan, dan informasi terintegrasi'
    },
  ]

  const lembagaPendidikan = [
    {
      name: 'PAUD Terpadu',
      desc: 'Persiapan dini dengan nilai-nilai islami',
      href: '/lembaga/paud'
    },
    {
      name: 'Madrasah Ibtidaiyah (MI)',
      desc: 'Jenjang dasar dengan kurikulum komprehensif',
      href: '/lembaga/mi'
    },
    {
      name: 'MTs Salafiyah',
      desc: 'Jenjang menengah dengan program unggulan',
      href: '/lembaga/mts'
    },
    {
      name: 'Madrasah Aliyah (MA)',
      desc: 'Jenjang atas dengan program keunggulan',
      href: '/lembaga/ma'
    },
  ]

  return (
    <main>
      <Navbar />
      <HeroBanner />

      {/* Fitur Unggulan */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Keunggulan Madrasah Al-Hikmah
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kombinasi sempurna antara pendidikan akademik berkualitas dan pembinaan islami mendalam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-secondary rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lembaga Pendidikan */}
      <section className="section-padding bg-primary/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Lembaga Pendidikan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dari PAUD hingga jenjang tertinggi, kami menyediakan pendidikan berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lembagaPendidikan.map((lembaga, idx) => (
              <Link
                key={idx}
                href={lembaga.href}
                className="bg-white border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all group"
              >
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lembaga.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {lembaga.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Selengkapnya →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Program Unggulan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai program khusus untuk mengembangkan potensi siswa secara optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Program Tahfidz',
                icon: '📖',
                desc: 'Menghafal Al-Qur\'an dengan metode terbukti efektif',
                link: '/program-islami#tahfidz'
              },
              {
                title: 'Kitab Kuning',
                icon: '📚',
                desc: 'Pembelajaran kitab klasik dengan metode bandongan dan sorogan',
                link: '/program-islami#kitab'
              },
              {
                title: 'Bahasa Arab & Inggris',
                icon: '🌍',
                desc: 'Kursus intensif untuk penguasaan bahasa asing',
                link: '/program-islami'
              },
            ].map((program, idx) => (
              <Link
                key={idx}
                href={program.link}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-lg p-8 hover:border-primary transition-all"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground">
                  {program.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Bergabunglah dengan Madrasah Al-Hikmah
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Investasi terbaik untuk masa depan adalah pendidikan berkualitas dengan nilai-nilai islami yang kuat
          </p>
          <Link
            href="/ppdb"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            Mulai Pendaftaran Sekarang
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
