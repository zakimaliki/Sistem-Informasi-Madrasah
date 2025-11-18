'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FileUp } from 'lucide-react'

export default function PPDBPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    namaLengkap: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    jenjangPendidikan: '',
    namaAyah: '',
    namaIbu: '',
    noTelepon: '',
    email: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Pendaftaran Peserta Didik Baru (PPDB)
            </h1>
            <p className="text-lg text-muted-foreground">
              Daftar online sekarang dan bergabunglah dengan Madrasah Al-Hikmah
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= s ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-2 mx-2 rounded-full transition-all ${
                      step > s ? 'bg-primary' : 'bg-border'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg border border-border p-8 shadow-lg">
            <form className="space-y-6">
              {/* Step 1: Data Pribadi */}
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Data Pribadi Siswa</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="namaLengkap"
                      value={formData.namaLengkap}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tempat Lahir *
                      </label>
                      <input
                        type="text"
                        name="tempatLahir"
                        value={formData.tempatLahir}
                        onChange={handleInputChange}
                        placeholder="Kota/Kabupaten"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tanggal Lahir *
                      </label>
                      <input
                        type="date"
                        name="tanggalLahir"
                        value={formData.tanggalLahir}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Jenis Kelamin *
                    </label>
                    <select
                      name="jenisKelamin"
                      value={formData.jenisKelamin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="L">Laki-laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Jenjang Pendidikan *
                    </label>
                    <select
                      name="jenjangPendidikan"
                      value={formData.jenjangPendidikan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Pilih Jenjang</option>
                      <option value="paud">PAUD Terpadu</option>
                      <option value="mi">Madrasah Ibtidaiyah (MI)</option>
                      <option value="mts">MTs Salafiyah</option>
                      <option value="ma">Madrasah Aliyah (MA)</option>
                      <option value="smk">SMK Terpadu</option>
                    </select>
                  </div>
                </>
              )}

              {/* Step 2: Data Orang Tua */}
              {step === 2 && (
                <>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Data Orang Tua</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Ayah *
                    </label>
                    <input
                      type="text"
                      name="namaAyah"
                      value={formData.namaAyah}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama ayah"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Ibu *
                    </label>
                    <input
                      type="text"
                      name="namaIbu"
                      value={formData.namaIbu}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama ibu"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nomor Telepon Orang Tua *
                    </label>
                    <input
                      type="tel"
                      name="noTelepon"
                      value={formData.noTelepon}
                      onChange={handleInputChange}
                      placeholder="0812345678"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                </>
              )}

              {/* Step 3: Dokumen & Kontak */}
              {step === 3 && (
                <>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Unggah Dokumen & Kontak</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>

                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <FileUp className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-sm font-medium text-foreground mb-1">
                      Upload Dokumen (Foto, Ijazah, dll)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Format: JPG, PNG, PDF (Max 5MB)
                    </p>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-foreground mb-2">
                      ✓ Saya menyatakan data yang saya isi adalah benar dan saya siap melengkapi dokumen yang diperlukan.
                    </p>
                    <input type="checkbox" className="w-4 h-4 rounded" required />
                  </div>
                </>
              )}

              {/* Buttons */}
              <div className="flex gap-4 pt-6 border-t border-border">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:border-primary transition-colors"
                  >
                    Kembali
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="ml-auto px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Lanjut
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Selesaikan Pendaftaran
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Info Tambahanh */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '📅 Jadwal PPDB', desc: 'Pendaftaran dibuka 1 Mei - 31 Agustus 2024' },
              { title: '✅ Verifikasi', desc: 'Tim kami akan memverifikasi data Anda dalam 3 hari kerja' },
              { title: '📞 Hubungi Kami', desc: 'Ada pertanyaan? Hubungi 0295-123-456' },
            ].map((info, idx) => (
              <div key={idx} className="bg-secondary rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">{info.title.split(' ')[0]}</div>
                <h3 className="font-semibold text-foreground mb-1">{info.title.split(' ').slice(1).join(' ')}</h3>
                <p className="text-sm text-muted-foreground">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
