'use client'

import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Upload, Download, AlertCircle } from 'lucide-react'

// SPP Payment Component
export function SPPPaymentTable() {
  const [bulan, setBulan] = useState('Semua')
  const [statusFilter, setStatusFilter] = useState('semua')

  const tagihan = [
    { id: 1, bulan: 'Juli 2024', jumlah: 500000, status: 'Lunas', tanggalBayar: '05/07/2024' },
    { id: 2, bulan: 'Agustus 2024', jumlah: 500000, status: 'Lunas', tanggalBayar: '08/08/2024' },
    { id: 3, bulan: 'September 2024', jumlah: 500000, status: 'Lunas', tanggalBayar: '10/09/2024' },
    { id: 4, bulan: 'Oktober 2024', jumlah: 500000, status: 'Lunas', tanggalBayar: '12/10/2024' },
    { id: 5, bulan: 'November 2024', jumlah: 500000, status: 'Tertunggak', tanggalBayar: '-' },
    { id: 6, bulan: 'Desember 2024', jumlah: 500000, status: 'Belum Jatuh Tempo', tanggalBayar: '-' },
  ]

  const filteredData = statusFilter === 'semua' 
    ? tagihan 
    : tagihan.filter(t => t.status.toLowerCase() === statusFilter.toLowerCase())

  const totalTagihan = filteredData.reduce((sum, t) => sum + t.jumlah, 0)
  const totalLunas = filteredData.filter(t => t.status === 'Lunas').reduce((sum, t) => sum + t.jumlah, 0)
  const totalTertunggak = filteredData.filter(t => t.status === 'Tertunggak').reduce((sum, t) => sum + t.jumlah, 0)

  return (
    <div className="space-y-6">
      {/* Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary/10 rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Tagihan</p>
          <p className="text-2xl font-bold text-primary">Rp {totalTagihan.toLocaleString('id-ID')}</p>
        </div>
        <div className="bg-green-100 rounded-lg p-6">
          <p className="text-sm text-green-700 mb-2">Status Lunas</p>
          <p className="text-2xl font-bold text-green-700">Rp {totalLunas.toLocaleString('id-ID')}</p>
        </div>
        <div className="bg-red-100 rounded-lg p-6">
          <p className="text-sm text-red-700 mb-2">Tunggakan</p>
          <p className="text-2xl font-bold text-red-700">Rp {totalTertunggak.toLocaleString('id-ID')}</p>
        </div>
      </div>

      {/* Notifikasi */}
      {totalTertunggak > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-4">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">Ada Tunggakan SPP</p>
            <p className="text-sm text-red-700">Anda memiliki tunggakan sebesar Rp {totalTertunggak.toLocaleString('id-ID')}. Mohon segera lakukan pembayaran.</p>
          </div>
        </div>
      )}

      {/* Filter */}
      <div className="bg-secondary rounded-lg p-6 flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-2">Filter Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="semua">Semua</option>
            <option value="lunas">Lunas</option>
            <option value="tertunggak">Tertunggak</option>
          </select>
        </div>
      </div>

      {/* Tabel Tagihan */}
      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-primary/10">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Bulan</th>
                <th className="px-6 py-4 text-right font-semibold text-foreground">Jumlah</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Tanggal Bayar</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => {
                const statusColor = 
                  row.status === 'Lunas' ? 'bg-green-100 text-green-700' :
                  row.status === 'Tertunggak' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                
                return (
                  <tr key={row.id} className="border-b border-border hover:bg-secondary/50">
                    <td className="px-6 py-4 font-medium text-foreground">{row.bulan}</td>
                    <td className="px-6 py-4 text-right font-semibold text-foreground">Rp {row.jumlah.toLocaleString('id-ID')}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{row.tanggalBayar}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Bukti Pembayaran */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Upload Bukti Pembayaran</h3>
        <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
          <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
          <p className="text-sm font-medium text-foreground mb-1">
            Upload Bukti Transfer / Kwitansi
          </p>
          <p className="text-xs text-muted-foreground">
            Format: JPG, PNG, PDF (Max 5MB)
          </p>
        </div>
      </div>

      {/* Download Tombol */}
      <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
        <Download className="w-5 h-5" />
        Unduh Riwayat Pembayaran
      </button>
    </div>
  )
}

// Tabungan Siswa Component
export function TabunganSiswaTable() {
  const [periodeFilter, setPeriodeFilter] = useState('semua')

  const transaksiData = [
    { id: 1, tanggal: '05/11/2024', jenis: 'Setoran', nominal: 50000, saldo: 850000, keterangan: 'Setoran reguler bulan November' },
    { id: 2, tanggal: '01/11/2024', jenis: 'Setoran', nominal: 50000, saldo: 800000, keterangan: 'Setoran reguler bulan November' },
    { id: 3, tanggal: '20/10/2024', jenis: 'Penarikan', nominal: 100000, saldo: 750000, keterangan: 'Penarikan untuk kebutuhan' },
    { id: 4, tanggal: '05/10/2024', jenis: 'Setoran', nominal: 50000, saldo: 850000, keterangan: 'Setoran reguler bulan Oktober' },
    { id: 5, tanggal: '01/10/2024', jenis: 'Setoran', nominal: 50000, saldo: 800000, keterangan: 'Setoran reguler bulan Oktober' },
    { id: 6, tanggal: '15/09/2024', jenis: 'Setoran', nominal: 50000, saldo: 750000, keterangan: 'Setoran reguler bulan September' },
  ]

  const saldoAkhir = 850000
  const totalSetoran = transaksiData.filter(t => t.jenis === 'Setoran').reduce((sum, t) => sum + t.nominal, 0)
  const totalPenarikan = transaksiData.filter(t => t.jenis === 'Penarikan').reduce((sum, t) => sum + t.nominal, 0)

  const grafikData = [
    { bulan: 'September', saldo: 750000 },
    { bulan: 'Oktober', saldo: 800000 },
    { bulan: 'November', saldo: 850000 },
  ]

  return (
    <div className="space-y-6">
      {/* Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary/10 rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Saldo Akhir</p>
          <p className="text-2xl font-bold text-primary">Rp {saldoAkhir.toLocaleString('id-ID')}</p>
        </div>
        <div className="bg-green-100 rounded-lg p-6">
          <p className="text-sm text-green-700 mb-2">Total Setoran</p>
          <p className="text-2xl font-bold text-green-700">Rp {totalSetoran.toLocaleString('id-ID')}</p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-6">
          <p className="text-sm text-yellow-700 mb-2">Total Penarikan</p>
          <p className="text-2xl font-bold text-yellow-700">Rp {totalPenarikan.toLocaleString('id-ID')}</p>
        </div>
      </div>

      {/* Grafik Pertumbuhan */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Grafik Pertumbuhan Saldo</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={grafikData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="bulan" />
            <YAxis />
            <Tooltip formatter={(value) => `Rp ${value.toLocaleString('id-ID')}`} />
            <Line type="monotone" dataKey="saldo" stroke="var(--primary)" strokeWidth={2} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tabel Transaksi */}
      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-primary/10">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Tanggal</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Jenis</th>
                <th className="px-6 py-4 text-right font-semibold text-foreground">Nominal</th>
                <th className="px-6 py-4 text-right font-semibold text-foreground">Saldo</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {transaksiData.map((row) => (
                <tr key={row.id} className="border-b border-border hover:bg-secondary/50">
                  <td className="px-6 py-4 text-muted-foreground">{row.tanggal}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      row.jenis === 'Setoran' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {row.jenis}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-foreground">
                    {row.jenis === 'Setoran' ? '+' : '-'} Rp {row.nominal.toLocaleString('id-ID')}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">Rp {row.saldo.toLocaleString('id-ID')}</td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{row.keterangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Input untuk Admin */}
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Tambah Transaksi (Admin Only)</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Jenis Transaksi</label>
              <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Setoran</option>
                <option>Penarikan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Nominal</label>
              <input type="number" placeholder="0" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Keterangan</label>
            <textarea rows={3} placeholder="Masukkan keterangan transaksi" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
            Tambah Transaksi
          </button>
        </form>
      </div>
    </div>
  )
}
