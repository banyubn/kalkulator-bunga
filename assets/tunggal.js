document.getElementById('formBungaTunggal').addEventListener('submit', function(e) {
    e.preventDefault();

    const pinjaman = parseFloat(document.getElementById('pinjaman').value);
    const sukuBunga = parseFloat(document.getElementById('sukuBunga').value);
    const tipePeriode = document.getElementById('tipePeriode').value;
    let waktu = parseFloat(document.getElementById('periode').value);

    switch (tipePeriode) {
        case 'tahun':
            waktu *= 1;
            break;
        case 'bulan':
            waktu /= 12;
            break;
        case 'semester':
            waktu /= 2;
            break;
        case 'triwulan':
            waktu /= 4;
            break;
        case 'caturwulan':
            waktu /= 3;
            break;
    }

    const bungaTunggal = pinjaman * (sukuBunga / 100) * waktu;
    const totalPembayaran = pinjaman + bungaTunggal;

    document.getElementById('totalTunggal').textContent = `Rp ${totalPembayaran.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    document.getElementById('hasilTunggal').classList.remove('hidden');
});