'use client'

import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Download, Filter } from 'lucide-react'

// Nilai Semester Component
export function NilaiSemesterTable() {
  const [tahunAjaran, setTahunAjaran] = useState('2024/2025')
  const [semester, setSemester] = useState('1')
  const [kelas, setKelas] = useState('X-A')

  const nilaiData = [
    { mapel: 'Pendidikan Islam', pengetahuan: 85, keterampilan: 88, sikap: 90, rata: 87.67, predikat: 'A' },
    { mapel: 'Bahasa Arab', pengetahuan: 80, keterampilan: 82, sikap: 85, rata: 82.33, predikat: 'B+' },
    { mapel: 'Matematika', pengetahuan: 75, keterampilan: 78, sikap: 80, rata: 77.67, predikat: 'B' },
    { mapel: 'Bahasa Inggris', pengetahuan: 88, keterampilan: 90, sikap: 92, rata: 90, predikat: 'A' },
    { mapel: 'IPA', pengetahuan: 82, keterampilan: 85, sikap: 87, rata: 84.67, predikat: 'A' },
    { mapel: 'IPS', pengetahuan: 78, keterampilan: 80, sikap: 82, rata: 80, predikat: 'B+' },
    { mapel: 'Tahfidz', pengetahuan: 92, keterampilan: 94, sikap: 96, rata: 94, predikat: 'A+' },
    { mapel: 'Seni Budaya', pengetahuan: 85, keterampilan: 87, sikap: 89, rata: 87, predikat: 'A' },
  ]

  const grafikData = [
    { mapel: 'Islam', nilai: 87.67 },
    { mapel: 'Arab', nilai: 82.33 },
    { mapel: 'Math', nilai: 77.67 },
    { mapel: 'English', nilai: 90 },
    { mapel: 'IPA', nilai: 84.67 },
    { mapel: 'IPS', nilai: 80 },
    { mapel: 'Tahfidz', nilai: 94 },
  ]

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <div className="bg-secondary rounded-lg p-6 border border-border">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Filter Data</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tahun Ajaran</label>
            <select
              value={tahunAjaran}
              onChange={(e) => setTahunAjaran(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option>2024/2025</option>
              <option>2023/2024</option>
              <option>2022/2023</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Kelas</label>
            <select
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option>X-A</option>
              <option>X-B</option>
              <option>XI-A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Nilai Table */}
      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-primary/10 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Mata Pelajaran</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Pengetahuan</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Keterampilan</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Sikap</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Rata-rata</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Predikat</th>
              </tr>
            </thead>
            <tbody>
              {nilaiData.map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{row.mapel}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{row.pengetahuan}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{row.keterampilan}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{row.sikap}</td>
                  <td className="px-6 py-4 text-center font-semibold text-primary">{row.rata.toFixed(2)}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      row.predikat === 'A+' ? 'bg-primary/20 text-primary' :
                      row.predikat === 'A' ? 'bg-green-100 text-green-700' :
                      row.predikat === 'B+' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {row.predikat}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grafik Perkembangan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Grafik Nilai per Mata Pelajaran</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={grafikData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="mapel" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="nilai" fill="var(--primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Ringkasan Nilai</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
              <span className="font-medium text-foreground">Rata-rata Umum</span>
              <span className="text-2xl font-bold text-primary">85.29</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
              <span className="font-medium text-foreground">Nilai Tertinggi</span>
              <span className="text-2xl font-bold text-accent">94</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg">
              <span className="font-medium text-foreground">Nilai Terendah</span>
              <span className="text-2xl font-bold text-yellow-700">77.67</span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex gap-4">
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          <Download className="w-5 h-5" />
          Unduh Laporan PDF
        </button>
      </div>
    </div>
  )
}

// Absensi Component
export function AbsensiTable() {
  const [bulan, setBulan] = useState('November')
  const [filter, setFilter] = useState('semua')

  const absensiData = [
    { tanggal: '01/11', status: 'Hadir' },
    { tanggal: '02/11', status: 'Hadir' },
    { tanggal: '04/11', status: 'Izin' },
    { tanggal: '05/11', status: 'Hadir' },
    { tanggal: '06/11', status: 'Sakit' },
    { tanggal: '07/11', status: 'Hadir' },
    { tanggal: '08/11', status: 'Hadir' },
    { tanggal: '11/11', status: 'Hadir' },
    { tanggal: '12/11', status: 'Alpa' },
    { tanggal: '13/11', status: 'Hadir' },
    { tanggal: '14/11', status: 'Hadir' },
    { tanggal: '15/11', status: 'Izin' },
  ]

  const rekapAbsensi = [
    { status: 'Hadir', jumlah: 19, warna: 'bg-green-100 text-green-700' },
    { status: 'Izin', jumlah: 3, warna: 'bg-blue-100 text-blue-700' },
    { status: 'Sakit', jumlah: 2, warna: 'bg-yellow-100 text-yellow-700' },
    { status: 'Alpa', jumlah: 1, warna: 'bg-red-100 text-red-700' },
  ]

  return (
    <div className="space-y-6">
      {/* Filter */}
      <div className="bg-secondary rounded-lg p-6 border border-border flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-2">Bulan</label>
          <select
            value={bulan}
            onChange={(e) => setBulan(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map(m => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-2">Filter</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="semua">Semua</option>
            <option value="hadir">Hadir</option>
            <option value="izin">Izin</option>
            <option value="sakit">Sakit</option>
            <option value="alpa">Alpa</option>
          </select>
        </div>
      </div>

      {/* Rekap Absensi */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {rekapAbsensi.map((item, idx) => (
          <div key={idx} className={`rounded-lg p-4 ${item.warna}`}>
            <p className="text-sm font-medium mb-2">{item.status}</p>
            <p className="text-3xl font-bold">{item.jumlah}</p>
          </div>
        ))}
      </div>

      {/* Grafik Absensi */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Grafik Absensi Bulanan</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={[
            { minggu: 'Minggu 1', hadir: 5, izin: 0, sakit: 0, alpa: 0 },
            { minggu: 'Minggu 2', hadir: 4, izin: 1, sakit: 0, alpa: 0 },
            { minggu: 'Minggu 3', hadir: 5, izin: 0, sakit: 1, alpa: 0 },
            { minggu: 'Minggu 4', hadir: 5, izin: 2, sakit: 1, alpa: 1 },
          ]}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="minggu" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="hadir" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="izin" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="sakit" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="alpa" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Kalender Absensi */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Kalender Absensi {bulan}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {absensiData.map((item, idx) => {
            const statusColor = 
              item.status === 'Hadir' ? 'bg-green-100 text-green-700' :
              item.status === 'Izin' ? 'bg-blue-100 text-blue-700' :
              item.status === 'Sakit' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            
            return (
              <div key={idx} className={`p-3 rounded-lg text-center text-sm font-medium ${statusColor}`}>
                <p className="text-xs opacity-75">{item.tanggal}</p>
                <p>{item.status}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Catatan BK Component
export function CatatanBKTable() {
  const [kategori, setKategori] = useState('semua')
  const [openDetail, setOpenDetail] = useState<number | null>(null)

  const catatanData = [
    {
      id: 1,
      tanggal: '10/11/2024',
      kategori: 'Prestasi',
      judul: 'Juara 1 Kompetisi Tahfidz Provinsi',
      isi: 'Siswa telah menunjukkan dedikasi luar biasa dalam program tahfidz dan berhasil menjadi juara di tingkat provinsi.',
      pengampu: 'Ustadz Ahmad Nasution'
    },
    {
      id: 2,
      tanggal: '08/11/2024',
      kategori: 'Perilaku',
      judul: 'Keterlambatan ke Sekolah',
      isi: 'Siswa sering terlambat masuk kelas. Telah didiskusikan pentingnya disiplin waktu dan komitmen untuk perbaikan.',
      pengampu: 'Ustadzah Siti Nurhaliza'
    },
    {
      id: 3,
      tanggal: '05/11/2024',
      kategori: 'Akademik',
      judul: 'Peningkatan Nilai Matematika',
      isi: 'Siswa menunjukkan peningkatan signifikan dalam nilai matematika setelah mengikuti bimbingan intensif.',
      pengampu: 'Ustadz Ahmad Nasution'
    },
    {
      id: 4,
      tanggal: '01/11/2024',
      kategori: 'Sosial',
      judul: 'Kepemimpinan Baik dalam Kegiatan',
      isi: 'Siswa menunjukkan kemampuan kepemimpinan yang baik dalam mengorganisir kegiatan kelas.',
      pengampu: 'Ustadzah Siti Nurhaliza'
    },
  ]

  const filteredData = kategori === 'semua' ? catatanData : catatanData.filter(c => c.kategori === kategori)

  return (
    <div className="space-y-6">
      {/* Filter */}
      <div className="bg-secondary rounded-lg p-6 border border-border">
        <label className="block text-sm font-medium text-foreground mb-3">Filter Kategori</label>
        <div className="flex flex-wrap gap-2">
          {['semua', 'Prestasi', 'Perilaku', 'Akademik', 'Sosial'].map(k => (
            <button
              key={k}
              onClick={() => setKategori(k)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                kategori === k
                  ? 'bg-primary text-white'
                  : 'bg-white border border-border text-foreground hover:border-primary'
              }`}
            >
              {k.charAt(0).toUpperCase() + k.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Daftar Catatan */}
      <div className="space-y-4">
        {filteredData.map((catatan) => (
          <div
            key={catatan.id}
            className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setOpenDetail(openDetail === catatan.id ? null : catatan.id)}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    catatan.kategori === 'Prestasi' ? 'bg-green-100 text-green-700' :
                    catatan.kategori === 'Perilaku' ? 'bg-yellow-100 text-yellow-700' :
                    catatan.kategori === 'Akademik' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {catatan.kategori}
                  </span>
                  <span className="text-xs text-muted-foreground">{catatan.tanggal}</span>
                </div>
                <h4 className="font-semibold text-foreground">{catatan.judul}</h4>
              </div>
              <span className="text-xl">{openDetail === catatan.id ? '▼' : '▶'}</span>
            </div>

            {openDetail === catatan.id && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-muted-foreground mb-3">{catatan.isi}</p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Pembimbing:</span> {catatan.pengampu}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Form Input Catatan untuk Guru BK */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Input Catatan BK Baru (Untuk Guru BK)</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Kategori</label>
            <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option>Prestasi</option>
              <option>Perilaku</option>
              <option>Akademik</option>
              <option>Sosial</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Judul Catatan</label>
            <input type="text" placeholder="Masukkan judul catatan" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Isi Catatan</label>
            <textarea rows={4} placeholder="Masukkan isi catatan lengkap" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            Simpan Catatan
          </button>
        </form>
      </div>
    </div>
  )
}

// Pelanggaran & Prestasi Component
export function PelanggaranPrestasiTable() {
  const [tab, setTab] = useState<'pelanggaran' | 'prestasi'>('pelanggaran')

  const pelanggaranData = [
    { id: 1, tanggal: '15/11/2024', jenis: 'Terlambat ke Sekolah', bobot: 5, keterangan: 'Terlambat 15 menit' },
    { id: 2, tanggal: '12/11/2024', jenis: 'Tidak Mengerjakan PR', bobot: 10, keterangan: 'PR Matematika tidak dikerjakan' },
    { id: 3, tanggal: '08/11/2024', jenis: 'Berpakaian Tidak Sesuai', bobot: 15, keterangan: 'Memakai sepatu yang tidak sesuai peraturan' },
  ]

  const prestasiData = [
    { id: 1, tanggal: '10/11/2024', prestasi: 'Juara 1 Tahfidz Provinsi', poin: 100 },
    { id: 2, tanggal: '05/11/2024', prestasi: 'Juara Lomba Pidato Bahasa Arab', poin: 50 },
    { id: 3, tanggal: '01/11/2024', prestasi: 'Siswa Teladan Bulan Oktober', poin: 25 },
  ]

  const totalPelanggaran = pelanggaranData.reduce((sum, item) => sum + item.bobot, 0)
  const totalPrestasi = prestasiData.reduce((sum, item) => sum + item.poin, 0)
  const skorAkhir = totalPrestasi - totalPelanggaran

  return (
    <div className="space-y-6">
      {/* Skor Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-100 rounded-lg p-6">
          <p className="text-sm text-red-700 mb-2">Total Skor Pelanggaran</p>
          <p className="text-3xl font-bold text-red-700">{totalPelanggaran}</p>
        </div>
        <div className="bg-green-100 rounded-lg p-6">
          <p className="text-sm text-green-700 mb-2">Total Skor Prestasi</p>
          <p className="text-3xl font-bold text-green-700">+{totalPrestasi}</p>
        </div>
        <div className={`rounded-lg p-6 ${skorAkhir >= 0 ? 'bg-primary/10' : 'bg-red-100'}`}>
          <p className={`text-sm mb-2 ${skorAkhir >= 0 ? 'text-primary' : 'text-red-700'}`}>Skor Total Akhlak</p>
          <p className={`text-3xl font-bold ${skorAkhir >= 0 ? 'text-primary' : 'text-red-700'}`}>
            {skorAkhir > 0 ? '+' : ''}{skorAkhir}
          </p>
        </div>
      </div>

      {/* Tab */}
      <div className="flex gap-4 border-b border-border">
        <button
          onClick={() => setTab('pelanggaran')}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            tab === 'pelanggaran'
              ? 'text-primary border-primary'
              : 'text-muted-foreground border-transparent hover:text-foreground'
          }`}
        >
          Riwayat Pelanggaran
        </button>
        <button
          onClick={() => setTab('prestasi')}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            tab === 'prestasi'
              ? 'text-primary border-primary'
              : 'text-muted-foreground border-transparent hover:text-foreground'
          }`}
        >
          Riwayat Prestasi
        </button>
      </div>

      {/* Tabel Pelanggaran */}
      {tab === 'pelanggaran' && (
        <div className="bg-white border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-red-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Tanggal</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Jenis Pelanggaran</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">Bobot Skor</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {pelanggaranData.map((row) => (
                  <tr key={row.id} className="border-b border-border hover:bg-secondary/50">
                    <td className="px-6 py-4 text-muted-foreground">{row.tanggal}</td>
                    <td className="px-6 py-4 font-medium text-foreground">{row.jenis}</td>
                    <td className="px-6 py-4 text-center font-bold text-red-700">{row.bobot}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tabel Prestasi */}
      {tab === 'prestasi' && (
        <div className="bg-white border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-green-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Tanggal</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Prestasi / Penghargaan</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">Poin</th>
                </tr>
              </thead>
              <tbody>
                {prestasiData.map((row) => (
                  <tr key={row.id} className="border-b border-border hover:bg-secondary/50">
                    <td className="px-6 py-4 text-muted-foreground">{row.tanggal}</td>
                    <td className="px-6 py-4 font-medium text-foreground">{row.prestasi}</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">+{row.poin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Grafik Skor */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Grafik Skor Total</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                { name: 'Pelanggaran', value: totalPelanggaran },
                { name: 'Prestasi', value: totalPrestasi },
              ]}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              <Cell fill="var(--destructive)" />
              <Cell fill="var(--chart-1)" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
