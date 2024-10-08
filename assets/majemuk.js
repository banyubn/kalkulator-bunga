document.getElementById('formBungaMajemuk').addEventListener('submit', function (e) {
    e.preventDefault();

    const pinjaman = parseFloat(document.getElementById('pinjamanMajemuk').value);
    const sukuBunga = parseFloat(document.getElementById('sukuBungaMajemuk').value);
    const tipePeriodeMajemuk = document.getElementById('tipePeriodeMajemuk').value;
    let waktuMajemuk = parseFloat(document.getElementById('periodeMajemuk').value);

    switch (tipePeriodeMajemuk) {
        case 'tahun':
            waktuMajemuk *= 1;
            break;
        case 'bulan':
            waktuMajemuk /= 12;
            break;
        case 'semester':
            waktuMajemuk /= 2;
            break;
        case 'triwulan':
            waktuMajemuk /= 4;
            break;
        case 'caturwulan':
            waktuMajemuk /= 3;
            break;
    }

    const totalPembayaranMajemuk = pinjaman * Math.pow((1 + (sukuBunga / 100)), waktuMajemuk);

    document.getElementById('totalMajemuk').textContent = `Rp ${totalPembayaranMajemuk.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    document.getElementById('hasilMajemuk').classList.remove('hidden');
});