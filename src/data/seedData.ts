import { StimulusItem, SoalItem, PaketLatihan } from '../types/assessment';

// ==========================================
// 1. REPOSITORI STIMULUS RESMI TERAKREDITASI
// ==========================================

export const SEED_STIMULI: StimulusItem[] = [
  // --- SD STIMULI ---
  {
    id: 'STIM-SD-001',
    jenjang: 'SD',
    kelas: 5,
    jenisTeks: 'Cerita anak',
    topik: 'Persahabatan dan Gotong Royong di Lingkungan Sekolah',
    judul: 'Taman Kupu-kupu Kejujuran',
    isiTeks: `Di sudut halaman SD Budi Mulia, terdapat taman kecil yang dipenuhi bunga warna-warni. Bimo dan Risa ditugaskan oleh Pak Guru Harun untuk merawat bibit bunga aster kuning. Setiap jam istirahat, mereka bergantian menyiram dan menyiangi rumput liar.

Suatu hari, Bimo tergesa-gesa saat membawa gembor air hingga tersandung akar pohon mangga. Air tumpah dan beberapa tangkai bunga aster yang sedang kuncup patah. Bimo merasa sangat cemas dan takut dimarahi. Namun, Risa menenangkannya dan mengajak Bimo menghadap Pak Harun secara ksatria untuk menceritakan kejadian yang sebenarnya.

Mendengar pengakuan Bimo yang jujur tanpa mencari kambing hitam, Pak Harun tersenyum hangat. Pak Guru tidak marah, melainkan memuji keberanian Bimo dan mengajarkan cara memasang ajir bambu agar tangkai bunga yang patah dapat tertopang kembali. Sejak saat itu, taman sekolah mereka dinamai Taman Kupu-kupu Kejujuran sebagai pengingat indahnya berkata benar.`,
    jumlahKata: 139,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Karya Penulis Asesmen',
    createdAt: '2026-03-15T08:00:00Z',
  },
  {
    id: 'STIM-SD-002',
    jenjang: 'SD',
    kelas: 5,
    jenisTeks: 'Teks prosedur',
    topik: 'Kesehatan dan Daur Ulang Mandiri',
    judul: 'Langkah Praktis Membuat Pupuk Organik Cair Sederhana',
    isiTeks: `Sampah kulit buah dan sayuran di dapur ternyata dapat diolah menjadi nutrisi alami bagi tanaman. Pembuatan pupuk organik cair dapat dilakukan bersama keluarga menggunakan bahan yang mudah ditemukan.

Pertama, kumpulkan sisa sayuran hijau dan kulit buah yang belum membusuk, lalu potong kecil-kecil berukuran dua sentimeter. Kedua, masukkan potongan bahan tersebut ke dalam ember bersih hingga terisi setengahnya. Ketiga, larutkan dua sendok gula merah cair dan sedikit air cucian beras ke dalam satu liter air matang dingin. Keempat, tuangkan larutan manis tersebut ke dalam ember hingga seluruh bahan terendam sempurna. Kelima, tutup ember rapat-rapat dan letakkan di tempat teduh selama tujuh hari. Buka sedikit penutup setiap dua hari untuk membuang gas fermentasi. Setelah seminggu, saring airnya dan pupuk organik cair siap dicampur air bersih untuk menyiram tanaman hias.`,
    jumlahKata: 136,
    statusValidasi: 'Lolos Validasi Otomatis',
    sumber: 'Simulasi Mandiri',
    createdAt: '2026-03-16T09:00:00Z',
  },
  {
    id: 'STIM-SD-003',
    jenjang: 'SD',
    kelas: 5,
    jenisTeks: 'Teks informasi ilmiah populer',
    topik: 'Energi Bersih dan Lingkungan Nusantara',
    judul: 'Panel Surya Terapung Cirata: Udara Bersih dan Listrik Ramah Bumi',
    isiTeks: `Di Waduk Cirata, Jawa Barat, ribuan modul kaca panel surya terbentang luas mengapung di atas permukaan air danau yang tenang. Panel-panel canggih ini bekerja sepanjang hari menyerap cahaya matahari yang terik, lalu mengubahnya menjadi arus listrik bersih tanpa mengeluarkan asap pembakaran atau jelaga hitam.

Listrik bersih dari pembangkit terapung ini disalurkan langsung melalui jaringan kabel transmisi ke rumah warga, puskesmas, dan sekolah-sekolah di sekitarnya. Penggunaan tenaga matahari di atas air ini memiliki banyak keuntungan. Selain tidak menghabiskan lahan tanah pertanian yang berharga, air danau yang dingin secara alami menyegarkan panel surya sehingga penyerapan energinya menjadi jauh lebih bertenaga. Kita dapat mendukung udara bersih dengan membiasakan mematikan lampu dan kipas angin saat meninggalkan ruangan kelas.`,
    jumlahKata: 122,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Pusat Edukasi Sains Nusantara',
    createdAt: '2026-03-17T09:00:00Z',
  },
  {
    id: 'STIM-SD-004',
    jenjang: 'SD',
    kelas: 5,
    jenisTeks: 'Fabel kearifan lokal',
    topik: 'Kepedulian Lingkungan dan Kejujuran',
    judul: 'Kancil, Bangau Putih, dan Kejernihan Telaga Pinus',
    isiTeks: `Di tengah Hutan Pinus Asri, Telaga Bening menjadi tempat semua satwa minum dan melepas dahaga. Suatu sore saat musim kemarau, Kancil melihat Bangau Putih sibuk mengumpulkan ranting berduri dan dedaunan busuk yang menyumbat saluran mata air telaga. Kancil yang sedang asyik bermain bola biji karet tertegun melihat Bangau bekerja sendirian sampai bulu-bulu sayapnya basah kuyup.

"Bangau, mengapa engkau repot membersihkan lumpur itu? Sebentar lagi hujan pasti turun dan menghanyutkan semuanya," tanya Kancil sembari duduk di atas batu bulat.

Bangau tersenyum lembut lalu menjawab bijak, "Sahabatku Kancil, jika kita menunda dan menunggu hujan, air telaga ini akan membusuk dan meracuni kawan-kawan kita yang kehausan sore ini. Merawat kebersihan alam adalah tugas bersama saat ini juga, bukan nanti saat bahaya sudah datang." Mendengar nasihat tulus itu, Kancil merasa malu atas kemalasannya. Ia meletakkan mainannya, lalu segera terjun ke parit telaga untuk membantu Bangau membersihkan sisa sampah sampai aliran air kembali jernih berkilau.`,
    jumlahKata: 153,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Koleksi Fabel Edukatif',
    createdAt: '2026-03-17T10:00:00Z',
  },
  {
    id: 'STIM-SD-005',
    jenjang: 'SD',
    kelas: 5,
    jenisTeks: 'Teks deskripsi informatif',
    topik: 'Fauna Endemik dan Konservasi Alam Indonesia',
    judul: 'Menjaga Komodo, Satwa Purba Kebanggaan Indonesia',
    isiTeks: `Taman Nasional Komodo di Nusa Tenggara Timur adalah satu-satunya habitat alami di dunia bagi kadal raksasa purba bernama biawak komodo. Hewan berkulit sisik tebal ini dapat tumbuh hingga panjang tiga meter dengan berat mencapai tujuh puluh kilogram. Komodo memiliki indra penciuman yang sangat tajam berkat lidahnya yang panjang, bercabang dua, dan berwarna kuning kemerahan.

Dengan mengibaskan lidahnya di udara, komodo dapat mendeteksi aroma bangkai atau mangsa dari jarak beberapa kilometer jauhnya. Meskipun tubuhnya tampak besar dan lamban saat berjemur di bawah terik karang pantai, komodo dapat berlari cepat secara mengejutkan dalam jarak pendek untuk menyergap mangsanya. Pemerintah Indonesia bersama masyarakat lokal telah menetapkan pulau-pulau habitatnya sebagai zona lindung ketat. Wisatawan yang berkunjung wajib didampingi oleh petugas jagawana (ranger) agar keselamatan pengunjung terjamin dan populasi satwa warisan zaman purba ini tetap terlindungi dari kepunahan.`,
    jumlahKata: 139,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Balai Konservasi Alam Nasional',
    createdAt: '2026-03-17T11:00:00Z',
  },

  // --- SMP STIMULI ---
  {
    id: 'STIM-SMP-001',
    jenjang: 'SMP',
    kelas: 8,
    jenisTeks: 'Teks eksplanasi ilmiah',
    topik: 'Konservasi Wilayah Pesisir dan Perubahan Iklim',
    judul: 'Mangrove: Sabuk Hijau Penjaga Garis Pantai Nusantara',
    isiTeks: `Kawasan pesisir Indonesia memiliki peranan vital dalam menjaga keseimbangan biosfer maritim. Salah satu ekosistem paling tangguh yang mendiami zona pasang surut adalah hutan mangrove. Tumbuhan halofit ini memiliki kemampuan adaptasi fisiologis luar biasa dengan toleransi tinggi terhadap salinitas air laut yang pekat.

Struktur perakaran tunjang dan napas pada mangrove berfungsi layaknya jaring alami berkerapatan tinggi. Ketika gelombang pasang atau ombak besar menerjang ke arah daratan, sistem akar yang kokoh ini mampu mereduksi energi kinetik air hingga lebih dari enam puluh persen. Dampaknya, erosi pantai atau abrasi daratan dapat ditekan secara signifikan. Selain itu, endapan lumpur yang tertahan di celah akar menciptakan substrat kaya nutrisi bagi larva kepiting, udang, dan benih ikan karang.

Secara ekologis, mangrove juga dijuluki 'penyerap karbon biru' karena kemampuannya memerangkap karbon dioksida di dalam sedimen sedalam beberapa meter. Namun, konversi lahan pesisir menjadi tambak intensif tak berizin mengancam kelestarian benteng alami ini. Menjaga tegakan mangrove bukan semata melindungi estetika bahari, melainkan investasi strategis pertahanan bencana bagi jutaan penduduk pesisir nusantara.`,
    jumlahKata: 158,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Artikel Edukatif Asesmen',
    createdAt: '2026-03-18T10:00:00Z',
  },
  {
    id: 'STIM-SMP-002',
    jenjang: 'SMP',
    kelas: 8,
    jenisTeks: 'Cerita pendek',
    topik: 'Kebudayaan dan Tekad Generasi Muda',
    judul: 'Genta Penganyam Bambu di Lereng Menoreh',
    isiTeks: `Di beranda bambu yang dinaungi rumpun petung, jemari Aryo yang masih belia lincah menyelipkan bilah-bilah sayatan tipis. Aroma khas rebung dan getah basah selalu menguar setiap kali angin gunung berhembus menuruni punggung bukit. Kakek Sastro memperhatikannya lamat-lamat dengan mata teduh yang dipagari kerutan usia.

"Menganyam itu bukan cuma soal memadatkan bilah vertikal dan horizontal, Aryo," bisik Kakek sembari mengarahkan jemari cucunya pada sudut motif truntum. "Ini adalah ikhtiar merajut kesabaran. Jika satu bilah dipaksa membengkok sebelum lemas, seluruh anyaman akan kehilangan keseimbangan maknawi."

Aryo mengangguk pelan. Kawan-kawannya di sekolah kota sering mencibir kegemarannya sepulang belajar. Mereka menganggap kerajinan besek dan kepang adalah peninggalan usang zaman kolonial yang tak lagi punya masa depan. Namun bagi Aryo, desau bilah bambu yang saling menindih adalah simfoni warisan leluhur. Saat karyanya dipamerkan di festival kriya kabupaten dan diminati turis mancanegara, binar mata Aryo membuktikan bahwa akar tradisi tak pernah mati di tangan generasi yang berani memeluknya dengan bangga.`,
    jumlahKata: 154,
    statusValidasi: 'Lolos Validasi Otomatis',
    sumber: 'Karya Prosa Edukatif',
    createdAt: '2026-03-20T11:00:00Z',
  },
  {
    id: 'STIM-SMP-003',
    jenjang: 'SMP',
    kelas: 8,
    jenisTeks: 'Teks eksposisi analitis',
    topik: 'Inovasi Agrikultur dan Ketahanan Pangan Perkotaan',
    judul: 'Pertanian Vertikal Perkotaan: Solusi Cerdas Ketahanan Pangan Nasional',
    isiTeks: `Pesatnya alih fungsi lahan pertanian produktif menjadi kawasan industri dan permukiman di Pulau Jawa mendorong lahirnya inovasi pertanian vertikal terpadu (indoor vertical farming). Sistem agrikultur modern ini membudidayakan aneka sayuran daun dan herba di dalam rak bertingkat tertutup dengan memanfaatkan instalasi hidroponik bersirkulasi tertutup serta penyinaran lampu LED berspektrum khusus.

Hasil pengujian agronomi membuktikan bahwa metode budi daya tegak lurus ini mampu menghemat konsumsi air tawar hingga sembilan puluh persen dibandingkan metode bercocok tanam konvensional di lahan terbuka. Selain itu, kondisi ruangan yang higienis dan terkontrol secara presisi meniadakan penggunaan pestisida kimia sintetis, sehingga sayuran yang dipanen memiliki sertifikasi aman pangan dan bebas residu racun. Meskipun investasi awal peranti sensorik dan pendingin ruangan masih relatif mahal, efisiensi rantai distribusi langsung ke pasar swalayan metropolitan sukses memangkas jejak karbon logistik secara signifikan. Pendekatan agroteknologi ini diproyeksikan menjadi pilar ketahanan pangan masa depan perkotaan Indonesia.`,
    jumlahKata: 150,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Jurnal Agroteknologi Populer',
    createdAt: '2026-03-21T08:00:00Z',
  },
  {
    id: 'STIM-SMP-004',
    jenjang: 'SMP',
    kelas: 8,
    jenisTeks: 'Teks eksplanasi maritim',
    topik: 'Terumbu Karang Bunaken dan Ekosistem Bawah Laut',
    judul: 'Pesona Karang Bunaken: Benteng Kehidupan Samudra',
    isiTeks: `Taman Nasional Bunaken di Sulawesi Utara terletak tepat di jantung Segitiga Terumbu Karang Dunia (Coral Triangle). Kawasan perairan ini menjadi rumah bagi lebih dari tiga ratus spesies karang keras dan lunak serta ribuan jenis ikan tropis berwarna-warni yang membentuk simbiosis mutualisme yang menakjubkan.

Karang sesungguhnya tersusun atas ribuan koloni hewan kecil tak bertulang belakang yang disebut polip karang. Polip ini bersimbiosis dengan alga mikroskopis bersel satu bernama zooxanthellae yang tinggal di dalam jaringan tubuhnya. Alga tersebut melakukan fotosintesis dengan memanfaatkan sinar matahari yang menembus air jernih, lalu menyuplai hingga sembilan puluh persen kebutuhan energi bagi polip untuk membentuk kerangka kapur kokoh. Kenaikan suhu air laut akibat perubahan iklim global memicu fenomena pemutihan karang (coral bleaching), di mana alga keluar dari tubuh polip sehingga karang mati kelaparan. Upaya restorasi karang buatan berbasis substrat biorock kini giat dilakukan para peneliti demi menjaga kelangsungan surga bawah laut nusantara.`,
    jumlahKata: 147,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Pusat Riset Kelautan Indonesia',
    createdAt: '2026-03-21T09:30:00Z',
  },
  {
    id: 'STIM-SMP-005',
    jenjang: 'SMP',
    kelas: 8,
    jenisTeks: 'Teks informasi teknologi',
    topik: 'Konektivitas Digital dan Pemerataan Pendidikan Daerah 3T',
    judul: 'Satelit Satria-1: Jembatan Digital Menghubungkan Pelosok Nusantara',
    isiTeks: `Sebagai negara kepulauan terbesar di dunia dengan rentang lebih dari lima ribu kilometer, pemerataan konektivitas internet pita lebar (broadband) merupakan tantangan geografis yang teramat rumit. Peluncuran Satelit Republik Indonesia 1 (Satria-1) ke orbit geostasioner menandai tonggak sejarah baru dalam meruntuhkan kesenjangan teknologi antarwilayah di tanah air.

Satelit berkapasitas transmisi seratus lima puluh gigabit per detik ini dirancang khusus untuk memancarkan sinyal internet berkecepatan tinggi ke wilayah Terdepan, Terluar, dan Tertinggal (3T) yang mustahil dijangkau oleh kabel serat optik bawah laut. Titik layanan prioritas mencakup puluhan ribu fasilitas umum, seperti laboratorium komputer sekolah perbatasan, puskesmas pulau terpencil, dan kantor desa pelosok pegunungan. Kehadiran akses internet satelit ini memungkinkan guru dan peserta didik di pelosok mengakses materi pembelajaran interaktif nasional secara setara dengan sekolah-sekolah di kota metropolitan. Melalui konektivitas yang adil, talenta generasi muda di pelosok negeri dapat berkembang optimal menyongsong era transformasi digital nasional.`,
    jumlahKata: 143,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Badan Aksesibilitas Telekomunikasi dan Informasi',
    createdAt: '2026-03-21T11:00:00Z',
  },

  // --- SMA STIMULI ---
  {
    id: 'STIM-SMA-001',
    jenjang: 'SMA',
    kelas: 11,
    jenisTeks: 'Teks informasi jamak',
    topik: 'Transisi Energi Terbarukan dan Ketahanan Daerah',
    judul: 'Perspektif A: Akselerasi Dekarbonisasi Menuju Kedaulatan Energi',
    isiTeks: `Urgensi transformasi dari energi fosil menuju sumber terbarukan merupakan keniscayaan mutlak bagi ketahanan iklim nasional. Indonesia memiliki modalitas alamiah yang sangat melimpah berupa intensitas radiasi surya sepanjang tahun dan potensi panas bumi nomor dua terbesar di dunia. Akselerasi pembangunan pembangkit listrik tenaga bayu dan fotovoltaik di berbagai provinsi diproyeksikan mampu mereduksi jejak karbon industri hingga empat puluh lima persen pada dekade mendatang. Diversifikasi ini tidak hanya menekan emisi gas rumah kaca, tetapi juga membebaskan anggaran belanja negara dari beban fluktuasi harga minyak mentah internasional yang acap kali memicu inflasi domestik.

Investasi pada infrastruktur jaringan pintar atau smart grid mutlak diimplementasikan guna mengantisipasi karakteristik intermiten pada pembangkit tenaga surya dan angin. Melalui digitalisasi transmisi daya dan adopsi baterai penyimpan skala raksasa, kestabilan pasokan listrik bagi sentra manufaktur perkotaan dapat dijamin tanpa ketergantungan pada batu bara. Transformasi hijau ini terbukti membuka ratusan ribu lapangan kerja baru di sektor perakitan teknologi bersih, logistik komponen, dan rekayasa kelistrikan modern. Oleh karena itu, regulasi yang memberikan insentif fiskal bagi pengembang teknologi ramah lingkungan harus disahkan tanpa penundaan birokratis yang berlarut-larut. Kedaulatan energi masa depan adalah perwujudan sinergi sains, keberanian regulasi, dan komitmen moral terhadap generasi penerus bangsa.`,
    isDual: true,
    teks2Judul: 'Perspektif B: Tantangan Kesiapan Teknis dan Realitas Fiskal Daerah',
    teks2Jenis: 'Artikel ilmiah populer',
    teks2Isi: `Wacana penghentian operasional pembangkit fosil secara prematur menuntut penelaahan komprehensif terhadap realitas demografis dan struktur keekonomian wilayah kepulauan. Walaupun visi elektrifikasi bersih memiliki justifikasi ekologis yang mulia, kenyataan empiris di lapangan menunjukkan bahwa disparitas infrastruktur kelistrikan antarpulau masih teramat mencolok. Pembangkit listrik tenaga surya dan bayu memiliki sifat pasokan yang sangat bergantung pada cuaca, sementara teknologi baterai berkapasitas gigawatt membutuhkan biaya investasi luar biasa mahal yang berpotensi membebani tarif dasar listrik masyarakat berpenghasilan rendah di kawasan tertinggal.

Di banyak wilayah terluar, pembangkit diesel dan uap skala mikro masih menjadi tulang punggung yang memastikan puskesmas, cold storage perikanan, dan sekolah tetap menyala sepanjang malam. Mengganti instalasi yang telah mapan tersebut tanpa perencanaan mitigasi risiko yang matang berisiko memicu krisis pemadaman bergilir yang melumpuhkan produktivitas ekonomi rakyat jelata. Pendekatan transisi yang bijak semestinya mengedepankan asas keadilan spasial melalui pemanfaatan energi campuran secara bertahap dan terukur. Modernisasi pembangkit gas transisi perlu diprioritaskan seraya melatih teknisi lokal agar daerah mandiri mengelola asetnya. Ekologi tidak boleh dipertentangkan secara biner dengan keterjangkauan ekonomi dasar penduduk yang sedang berjuang keluar dari garis kemiskinan.`,
    jumlahKata: 268,
    jumlahKataTeks2: 254,
    rataKataPerKalimat: 11.4,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Data Simulasi Asesmen Akademik',
    createdAt: '2026-03-22T08:00:00Z',
  },
  {
    id: 'STIM-SMA-002',
    jenjang: 'SMA',
    kelas: 11,
    jenisTeks: 'Prosa fiksi',
    topik: 'Eksistensialisme dan Ingatan Kolektif Masyarakat Urban',
    judul: 'Lorong Berulang di Menara Arkais',
    isiTeks: `Setiap dentang pukul lima sore menggema dari kubah balai kota, Pak Sabar selalu merapikan tumpukan berkas arsip yang tak berangka tahun. Di hadapannya, tangga melingkar menara perkantoran tua itu tampak berputar tanpa ujung yang pasti, menyambungkan lantai semen berlumut dengan langit-langit berdebu. Orang-orang bergegas melangkah turun dengan map hitam terkatup rapat di dada mereka, tetapi tidak ada seorang pun yang pernah terlihat benar-benar melintasi pintu gerbang keluar di lantai dasar. Mereka hanya berputar dalam spiral langkah kaki yang bergema seragam.

"Apakah Anda sedang mencari stempel kelayakan masa lalu, Tuan?" sapa seorang pemuda berkacamata retak yang tiba-tiba berdiri di sebelah meja kerjanya. Suaranya terdengar seperti gemerisik kertas karton kering yang tertiup angin senja.

Pak Sabar menggeleng lambat sembari menatap bayangan dirinya di kaca jendela yang buram. Di luar sana, jalan layang kota metropolitan bergerak bagai pita bercahaya, sunyi dan tanpa deru mesin yang wajar. Semua peristiwa seakan-akan telah terjadi berulang kali dalam jeda yang beku. Ia menyadari bahwa arsip yang ia susun setiap hari sesungguhnya adalah daftar nama para penghuni menara yang telah melupakan alasan mengapa mereka pertama kali menaiki anak tangga itu. Ketika lampu gantung tembaga mulai berkedip padam, Pak Sabar mengambil pulpen bertinta biru miliknya, lalu menuliskan satu kalimat pendek di halaman kosong terakhir: ingatan adalah satu-satunya jangkar yang tersisa sebelum ruang ini sepenuhnya lenyap menjadi ketiadaan.`,
    jumlahKata: 271,
    rataKataPerKalimat: 10.8,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Karya Prosa Literasi Kontemporer',
    createdAt: '2026-03-23T14:00:00Z',
  },
  {
    id: 'STIM-SMA-003',
    jenjang: 'SMA',
    kelas: 11,
    jenisTeks: 'Teks argumentasi analitis',
    topik: 'Etika Kecerdasan Buatan dan Perlindungan Hak Kekayaan Intelektual',
    judul: 'Kecerdasan Buatan Generatif dan Tantangan Rekonseptualisasi Hak Cipta',
    isiTeks: `Eksplosi teknologi model bahasa besar (large language models) dan generator citra algoritmik telah memicu disrupsi fundamental dalam doktrin hukum hak kekayaan intelektual global. Selama berabad-abad, prinsip doktrin hukum hak cipta dibangun di atas premis aksiomatik bahwa orisinalitas karya seni dan sastra lahir dari percikan kreativitas personal manusia (human authorship). Namun, peranti kecerdasan buatan masa kini mampu mensintesis esai ilmiah, komposisi simfoni, hingga ilustrasi visual yang menyamai kemahiran maestro hanya dalam hitungan detik setelah menerima instruksi teks singkat.

Persoalan krusial bermuara pada fase pelatihan data (data crawling) tanpa izin pemilik karya. Mesin-mesin pembelajar menyerap miliaran artikel berhak cipta, lukisan seniman independen, dan arsip karya sastra daring tanpa atribusi kredit maupun kompensasi royalti yang berkeadilan. Dalih doktrin penggunaan wajar (fair use) yang kerap diajukan oleh korporasi teknologi raksasa menuai resistensi sengit dari serikat penulis dan perupa dunia yang menganggap praktik ekstraksi massal tersebut sebagai bentuk komodifikasi karya intelektual secara sepihak. Menghadapi era konvergensi manusia dan mesin, regulasi hukum modern dituntut merumuskan batas demarkasi yang tegas antara inspirasi algoritmik yang sah dan pelanggaran hak cipta terstruktur, demi melindungi martabat dan keberlanjutan nafkah para kreator manusia.`,
    jumlahKata: 264,
    rataKataPerKalimat: 11.2,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Jurnal Hukum dan Etika Teknologi',
    createdAt: '2026-03-24T08:00:00Z',
  },
  {
    id: 'STIM-SMA-004',
    jenjang: 'SMA',
    kelas: 11,
    jenisTeks: 'Teks telaah sosial budaya',
    topik: 'Kearifan Ekologis dan Revitalisasi Sistem Subak Bali',
    judul: 'Subak: Filosofi Tri Hita Karana dalam Manajemen Hidrologi Tradisional',
    isiTeks: `Di balik eloknya lanskap undakan sawah berteras di Pulau Dewata, terbentang mahakarya rekayasa sosial dan tata kelola air tradisional yang telah bertahan lebih dari seribu tahun, yakni sistem Subak. Subak bukan semata organisasi pengairan teknis yang mengatur debit air pancuran bambu dari danau kawah gunung menuju petak-petak persawahan petani, melainkan perwujudan konkret dari filosofi sakral Tri Hita Karana, yaitu keharmonisan hubungan antara manusia dengan Sang Pencipta, hubungan selaras dengan sesama manusia, dan pemuliaan terhadap alam lingkungan.

Secara operasional, pembagian jatah air pada sistem Subak dipandu oleh musyawarah mufakat di pura desa (pura bedugul) yang menjunjung tinggi asas keadilan distributif. Petani di hilir mendapatkan kepastian jatah volume air yang sama adilnya dengan petani di kawasan hulu berkat penerapan kalender tanam serentak. Keserentakan penanaman padi ini terbukti secara ilmiah mampu memutus siklus hidup hama wereng dan tikus sawah secara alami tanpa bergantung pada racun pestisida kimia sintetis. Namun demikian, tekanan modernisasi pariwisata massal dan masifnya alih fungsi lahan sawah basah menjadi vila komersial kian mengancam eksistensi warisan budaya dunia ini. Mempertahankan kelestarian Subak pada abad ke-21 menuntut kemauan politik yang berani dalam menegakkan zonasi perlindungan sawah abadi seraya memberikan kompensasi kesejahteraan yang nyata bagi para petani penjaga denyut pangan bangsa.`,
    jumlahKata: 278,
    rataKataPerKalimat: 11.8,
    statusValidasi: 'Disetujui Guru',
    sumber: 'Pusat Studi Antropologi dan Ekologi Kebudayaan',
    createdAt: '2026-03-24T10:00:00Z',
  },
];

// ==============================================================
// 2. BANK SOAL AUTENTIK (SD: 30 BUTIR, SMP: 35 BUTIR, SMA: 40 BUTIR)
// STIMULUS & SOAL SELALU MENYATU (TIDAK TERPISAH)
// ==============================================================

// Helper to build cohesive SoalItem with attached stimulus data
function buatSoal(
  id: string,
  jenjang: 'SD' | 'SMP' | 'SMA',
  kelas: number,
  kompetensi: 'Pemahaman Tekstual' | 'Pemahaman Inferensial' | 'Evaluasi dan Apresiasi',
  indikatorId: string,
  indikator: string,
  stimulus: StimulusItem,
  tingkatKesulitan: 'Mudah' | 'Sedang' | 'Sulit',
  pertanyaan: string,
  pilihan: { kode: 'A' | 'B' | 'C' | 'D'; teks: string; alasanDistraktor?: string }[],
  kunciJawaban: 'A' | 'B' | 'C' | 'D',
  pembahasan: string,
  buktiTekstual: string
): SoalItem {
  return {
    id,
    jenjang,
    kelas: kelas as any,
    kompetensi,
    indikatorId,
    indikator,
    jenisStimulus: stimulus.jenisTeks,
    stimulusIds: [stimulus.id],
    stimulusJudul: stimulus.judul,
    stimulusTeks: stimulus.isiTeks,
    stimulusJenis: stimulus.jenisTeks,
    tingkatKesulitan,
    bentukSoal: 'Pilihan Ganda',
    pertanyaan,
    pilihan,
    kunciJawaban,
    pembahasan,
    buktiTekstual,
    bobot: 1,
    statusValidasi: 'Disetujui Guru',
    versi: 1,
    createdAt: '2026-03-25T08:00:00Z',
  };
}

// -------------------------------------------------------------
// A. SOAL SD (30 BUTIR RESMI TKA SD - STANDAR ASLI 25-30 SOAL)
// -------------------------------------------------------------
const stimSD1 = SEED_STIMULI[0];
const stimSD2 = SEED_STIMULI[1];
const stimSD3 = SEED_STIMULI[2];
const stimSD4 = SEED_STIMULI[3];
const stimSD5 = SEED_STIMULI[4];

export const SOAL_SD_BANK: SoalItem[] = [
  // --- Stimulus SD-1 (Taman Kupu-kupu Kejujuran) ---
  buatSoal('SOAL-SD-001', 'SD', 5, 'Pemahaman Tekstual', 'SD-T04', 'Mengidentifikasi informasi tersurat dalam teks', stimSD1, 'Mudah',
    'Berdasarkan wacana "Taman Kupu-kupu Kejujuran", siapakah yang ditugaskan oleh Pak Guru Harun untuk merawat bibit bunga aster kuning?',
    [
      { kode: 'A', teks: 'Bimo dan Risa', alasanDistraktor: 'Jawaban tepat: Dinyatakan eksplisit pada kalimat kedua paragraf pertama.' },
      { kode: 'B', teks: 'Pak Harun dan Bimo', alasanDistraktor: 'Pak Harun adalah guru pemberi tugas, bukan siswa yang ditugaskan.' },
      { kode: 'C', teks: 'Risa dan seluruh siswa kelas lima', alasanDistraktor: 'Teks menyatakan hanya Bimo dan Risa yang ditugaskan.' },
      { kode: 'D', teks: 'Penjaga sekolah dan Pak Harun', alasanDistraktor: 'Penjaga sekolah tidak disebutkan dalam wacana.' },
    ], 'A',
    'Pertanyaan menemukan informasi eksplisit. Paragraf 1 menyatakan: "Bimo dan Risa ditugaskan oleh Pak Guru Harun untuk merawat bibit bunga aster kuning."',
    'Paragraf 1: "Bimo dan Risa ditugaskan oleh Pak Guru Harun untuk merawat bibit bunga aster kuning."'
  ),
  buatSoal('SOAL-SD-002', 'SD', 5, 'Pemahaman Inferensial', 'SD-I03', 'Menjelaskan makna ungkapan yang digunakan dalam teks', stimSD1, 'Sedang',
    'Pada paragraf ketiga tertulis: "...pengakuan Bimo yang jujur tanpa mencari kambing hitam...". Apa makna ungkapan "mencari kambing hitam" dalam cerita tersebut?',
    [
      { kode: 'A', teks: 'Mencari hewan ternak yang hilang di kebun sekolah', alasanDistraktor: 'Mengartikan ungkapan secara harfiah/denotatif.' },
      { kode: 'B', teks: 'Melimpahkan kesalahan diri sendiri kepada orang lain', alasanDistraktor: 'Jawaban benar: Kambing hitam bermakna pihak yang dipersalahkan atas kekhilafan.' },
      { kode: 'C', teks: 'Meminta bantuan teman untuk menutupi perbuatan ceroboh', alasanDistraktor: 'Tidak sesuai makna idiomatis kambing hitam.' },
      { kode: 'D', teks: 'Menyembunyikan bukti patahnya tangkai bunga aster', alasanDistraktor: 'Tidak merefleksikan makna kiasan yang berlaku.' },
    ], 'B',
    'Ungkapan kambing hitam bermakna orang yang dipersalahkan. Bimo berani mengakui kelalaiannya sendiri tanpa menyalahkan orang lain.',
    'Paragraf 3: "...pengakuan Bimo yang jujur tanpa mencari kambing hitam, Pak Harun tersenyum hangat."'
  ),
  buatSoal('SOAL-SD-003', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E02', 'Menilai tindakan tokoh dalam teks cerita anak', stimSD1, 'Sedang',
    'Bagaimanakah penilaian Anda terhadap tindakan Risa saat melihat Bimo cemas karena mematahkan tangkai bunga aster?',
    [
      { kode: 'A', teks: 'Kurang tepat karena Risa seharusnya melaporkan Bimo diam-diam tanpa sepengetahuannya', alasanDistraktor: 'Tindakan melaporkan diam-diam mencerminkan sikap tidak setia kawan.' },
      { kode: 'B', teks: 'Sangat bijak karena Risa menenangkan Bimo dan membimbingnya untuk berani berkata jujur kepada guru', alasanDistraktor: 'Jawaban benar: Mencerminkan teladan suportif dan membina keberanian moral kawan.' },
      { kode: 'C', teks: 'Biasa saja karena Risa tidak ikut memegang gembor air yang tumpah di kebun', alasanDistraktor: 'Mengabaikan aspek empati dan dukungan moral yang diberikan Risa.' },
      { kode: 'D', teks: 'Keliru karena Risa seharusnya membelikan bibit aster baru di toko sebelum melapor', alasanDistraktor: 'Tidak menyelesaikan masalah sikap kejujuran yang ditekankan dalam cerita.' },
    ], 'B',
    'Tindakan Risa menenangkan Bimo dan mengajaknya jujur adalah teladan persahabatan yang positif dan mendidik.',
    'Paragraf 2: "Namun, Risa menenangkannya dan mengajak Bimo menghadap Pak Harun secara ksatria untuk menceritakan kejadian yang sebenarnya."'
  ),
  buatSoal('SOAL-SD-004', 'SD', 5, 'Pemahaman Tekstual', 'SD-T02', 'Menemukan rincian peristiwa dalam teks narasi', stimSD1, 'Mudah',
    'Berdasarkan cerita di atas, apa penyebab Bimo tersandung hingga air gembor tumpah mematahkan tangkai bunga?',
    [
      { kode: 'A', teks: 'Dikejar oleh lebah madu yang terbang di taman', alasanDistraktor: 'Lebah madu tidak disebutkan dalam wacana.' },
      { kode: 'B', teks: 'Terpeleset genangan air di dekat selokan sekolah', alasanDistraktor: 'Genangan air bukan penyebab tersandung.' },
      { kode: 'C', teks: 'Tergesa-gesa saat membawa gembor air hingga tersandung akar pohon mangga', alasanDistraktor: 'Jawaban benar: Dinyatakan persis pada kalimat pertama paragraf kedua.' },
      { kode: 'D', teks: 'Didorong oleh teman-temannya yang sedang bermain bola', alasanDistraktor: 'Tidak ada peristiwa dorong-mendorong dalam teks.' },
    ], 'C',
    'Fakta eksplisit di paragraf 2: "Suatu hari, Bimo tergesa-gesa saat membawa gembor air hingga tersandung akar pohon mangga."',
    'Paragraf 2: "Suatu hari, Bimo tergesa-gesa saat membawa gembor air hingga tersandung akar pohon mangga."'
  ),
  buatSoal('SOAL-SD-005', 'SD', 5, 'Pemahaman Inferensial', 'SD-I02', 'Menyimpulkan watak atau karakter tokoh', stimSD1, 'Sedang',
    'Bagaimanakah watak Pak Guru Harun berdasarkan responsnya saat menerima pengakuan Bimo?',
    [
      { kode: 'A', teks: 'Keras dan mudah menghukum siswa yang bersalah', alasanDistraktor: 'Bertentangan dengan sikap ramah Pak Harun dalam teks.' },
      { kode: 'B', teks: 'Bijaksana, pemaaf, dan mendidik siswanya dengan penuh kasih sayang', alasanDistraktor: 'Jawaban benar: Pak Harun tersenyum, memuji kejujuran, dan mengajari solusi memasang ajir bambu.' },
      { kode: 'C', teks: 'Acuh tak acuh terhadap kebersihan dan keindahan taman sekolah', alasanDistraktor: 'Pak Harun sangat peduli dan memberi bimbingan merawat taman.' },
      { kode: 'D', teks: 'Terburu-buru mengambil keputusan tanpa mendengar alasan', alasanDistraktor: 'Pak Harun mendengarkan pengakuan Bimo dengan sabar.' },
    ], 'B',
    'Pak Harun menunjukkan keteladanan pendidik bijak yang menghargai kejujuran murid dan memberikan solusi mendidik.',
    'Paragraf 3: "Pak Guru tidak marah, melainkan memuji keberanian Bimo dan mengajarkan cara memasang ajir bambu..."'
  ),
  buatSoal('SOAL-SD-006', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E01', 'Menentukan amanat atau pesan moral dalam teks cerita', stimSD1, 'Sedang',
    'Apa pesan moral utama yang ingin disampaikan pengarang melalui cerita "Taman Kupu-kupu Kejujuran"?',
    [
      { kode: 'A', teks: 'Sebaiknya kita tidak perlu merawat bunga aster di sekolah jika takut tersandung', alasanDistraktor: 'Pesan negatif yang menyarankan lari dari tanggung jawab.' },
      { kode: 'B', teks: 'Menyiram tanaman sebaiknya dilakukan saat jam pelajaran berlangsung', alasanDistraktor: 'Tidak sesuai aturan sekolah dan bukan pesan moral wacana.' },
      { kode: 'C', teks: 'Keberanian mengakui kekhilafan secara jujur jauh lebih berharga daripada menutupi kesalahan dengan kebohongan', alasanDistraktor: 'Jawaban benar: Pesan utama kisah Bimo, Risa, dan Pak Harun.' },
      { kode: 'D', teks: 'Akar pohon mangga harus selalu ditebang agar tidak mengganggu siswa', alasanDistraktor: 'Pesan keliru yang bertentangan dengan pelestarian lingkungan.' },
    ], 'C',
    'Inti pesan cerita terangkum pada nama taman: "Taman Kupu-kupu Kejujuran sebagai pengingat indahnya berkata benar."',
    'Paragraf 3: "...sebagai pengingat indahnya berkata benar."'
  ),

  // --- Stimulus SD-2 (Pupuk Organik Cair) ---
  buatSoal('SOAL-SD-007', 'SD', 5, 'Pemahaman Tekstual', 'SD-T01', 'Menemukan informasi urutan prosedur', stimSD2, 'Mudah',
    'Berdasarkan wacana prosedur pupuk organik cair, berapa lama ember harus ditutup rapat di tempat teduh selama proses fermentasi?',
    [
      { kode: 'A', teks: 'Dua hari saja', alasanDistraktor: 'Dua hari adalah jadwal membuka sedikit penutup untuk membuang gas, bukan total waktu.' },
      { kode: 'B', teks: 'Selama tujuh hari (seminggu)', alasanDistraktor: 'Jawaban benar: Disebutkan eksplisit pada langkah kelima wacana.' },
      { kode: 'C', teks: 'Empat belas hari penuh', alasanDistraktor: 'Tidak sesuai dengan instruksi teks.' },
      { kode: 'D', teks: 'Satu bulan kalender', alasanDistraktor: 'Waktu fermentasi dalam teks hanya seminggu.' },
    ], 'B',
    'Langkah kelima menyatakan: "tutup ember rapat-rapat dan letakkan di tempat teduh selama tujuh hari."',
    'Langkah kelima: "...letakkan di tempat teduh selama tujuh hari."'
  ),
  buatSoal('SOAL-SD-008', 'SD', 5, 'Pemahaman Inferensial', 'SD-I01', 'Menjelaskan hubungan sebab-akibat dalam teks prosedur', stimSD2, 'Sedang',
    'Mengapa penutup ember harus dibuka sedikit setiap dua hari sekali selama proses pembuatan pupuk organik?',
    [
      { kode: 'A', teks: 'Untuk menambahkan garam dapur agar baunya harum', alasanDistraktor: 'Tidak ada penambahan garam dalam teks.' },
      { kode: 'B', teks: 'Untuk membuang gas fermentasi yang menumpuk di dalam ember tertutup', alasanDistraktor: 'Jawaban benar: Disebutkan eksplisit sebagai fungsi membuang gas fermentasi.' },
      { kode: 'C', teks: 'Agar serangga lalat dapat masuk dan membantu penguraian', alasanDistraktor: 'Masuknya lalat justru merusak kebersihan pupuk.' },
      { kode: 'D', teks: 'Untuk mengganti sayuran busuk dengan sayuran yang baru', alasanDistraktor: 'Bahan sayuran tidak diganti selama fermentasi berlangsung.' },
    ], 'B',
    'Teks menyatakan: "Buka sedikit penutup setiap dua hari untuk membuang gas fermentasi."',
    'Teks: "Buka sedikit penutup setiap dua hari untuk membuang gas fermentasi."'
  ),
  buatSoal('SOAL-SD-009', 'SD', 5, 'Pemahaman Tekstual', 'SD-T03', 'Mengidentifikasi bahan dalam teks prosedur', stimSD2, 'Mudah',
    'Bahan manis apakah yang dilarutkan bersama air cucian beras ke dalam satu liter air matang?',
    [
      { kode: 'A', teks: 'Dua sendok gula merah cair', alasanDistraktor: 'Jawaban benar: Sesuai petunjuk langkah ketiga wacana.' },
      { kode: 'B', teks: 'Tiga cangkir sirup rasa melon', alasanDistraktor: 'Sirup berperisa tidak digunakan dalam pembuatan pupuk organik.' },
      { kode: 'C', teks: 'Madu hutan murni tanpa campuran', alasanDistraktor: 'Madu hutan tidak disebutkan dalam teks.' },
      { kode: 'D', teks: 'Susu kental manis cokelat', alasanDistraktor: 'Bukan bahan pembuatan pupuk organik tanaman.' },
    ], 'A',
    'Langkah ketiga menyatakan: "larutkan dua sendok gula merah cair dan sedikit air cucian beras ke dalam satu liter air matang dingin."',
    'Langkah ketiga: "...larutkan dua sendok gula merah cair dan sedikit air cucian beras..."'
  ),
  buatSoal('SOAL-SD-010', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E03', 'Menilai manfaat praktis isi teks prosedur bagi kehidupan', stimSD2, 'Sedang',
    'Apa manfaat lingkungan paling nyata jika keluarga mempraktikkan langkah pembuatan pupuk organik cair di rumah?',
    [
      { kode: 'A', teks: 'Tanaman hias akan layu karena kekurangan bahan kimia sintetis', alasanDistraktor: 'Pupuk organik justru memberi nutrisi alami yang subur.' },
      { kode: 'B', teks: 'Mengurangi timbulan sampah sisa dapur sekaligus menghemat pengeluaran membeli pupuk kimia tanaman', alasanDistraktor: 'Jawaban benar: Merefleksikan manfaat ekologis dan ekonomis daur ulang mandiri.' },
      { kode: 'C', teks: 'Rumah menjadi dipenuhi gas beracun yang membahayakan pernapasan', alasanDistraktor: 'Gas dibuang perlahan dan tidak beracun berbahaya jika ditutup rapat.' },
      { kode: 'D', teks: 'Meningkatkan biaya tagihan air bulanan karena harus menyiram setiap jam', alasanDistraktor: 'Penyiraman tanaman dilakukan secara wajar sesuai kebutuhan.' },
    ], 'B',
    'Memanfaatkan sisa sayuran dan kulit buah mengurangi sampah organik rumah tangga dan menghasilkan pupuk subur ramah kantong.',
    'Paragraf 1: "Sampah kulit buah dan sayuran di dapur ternyata dapat diolah menjadi nutrisi alami bagi tanaman."'
  ),
  buatSoal('SOAL-SD-011', 'SD', 5, 'Pemahaman Inferensial', 'SD-I04', 'Memprediksi dampak jika instruksi prosedur diabaikan', stimSD2, 'Sedang',
    'Apa yang kemungkinan besar terjadi jika kulit buah dan sayuran yang dimasukkan ke dalam ember sudah membusuk dan berjamur hitam sejak awal?',
    [
      { kode: 'A', teks: 'Pupuk akan lebih cepat matang dalam waktu satu hari', alasanDistraktor: 'Bahan busuk tidak mempercepat fermentasi yang sehat.' },
      { kode: 'B', teks: 'Hasil fermentasi dapat berbau busuk menyengat dan mengundang belatung berbahaya', alasanDistraktor: 'Jawaban benar: Teks mensyaratkan bahan yang "belum membusuk" agar fermentasi berhasil.' },
      { kode: 'C', teks: 'Warna air pupuk akan berubah menjadi seputih susu segar', alasanDistraktor: 'Warna pupuk organik cair umumnya kecokelatan.' },
      { kode: 'D', teks: 'Ember akan meledak saat pertama kali ditutup', alasanDistraktor: 'Terlalu berlebihan dan tidak logis.' },
    ], 'B',
    'Teks menegaskan: "kumpulkan sisa sayuran hijau dan kulit buah yang belum membusuk" untuk memastikan kualitas fermentasi.',
    'Langkah pertama: "...kumpulkan sisa sayuran hijau dan kulit buah yang belum membusuk..."'
  ),
  buatSoal('SOAL-SD-012', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E02', 'Menilai kejelasan instruksi teks prosedur', stimSD2, 'Sedang',
    'Mengapa penulis menyertakan ukuran potongan sayuran "berukuran dua sentimeter" dalam petunjuk tersebut?',
    [
      { kode: 'A', teks: 'Agar sayuran terlihat indah seperti hiasan kue ulang tahun', alasanDistraktor: 'Alasan estetika kue tidak relevan untuk pembuatan pupuk.' },
      { kode: 'B', teks: 'Agar proses penguraian oleh larutan fermentasi berlangsung lebih mudah dan merata', alasanDistraktor: 'Jawaban benar: Memperkecil ukuran bahan memperluas bidang kontak fermentasi.' },
      { kode: 'C', teks: 'Untuk menyulitkan anak-anak saat membantu orang tua di dapur', alasanDistraktor: 'Instruksi bertujuan mempermudah keberhasilan, bukan menyulitkan.' },
      { kode: 'D', teks: 'Supaya sayuran dapat dimasak kembali jika pupuk batal dibuat', alasanDistraktor: 'Bahan pupuk tidak dimasak kembali.' },
    ], 'B',
    'Ukuran potongan kecil bertujuan mempercepat perendaman dan penguraian merata oleh mikroorganisme fermentasi.',
    'Langkah pertama: "...lalu potong kecil-kecil berukuran dua sentimeter."'
  ),

  // --- Stimulus SD-3 (Panel Surya Cirata) ---
  buatSoal('SOAL-SD-013', 'SD', 5, 'Pemahaman Tekstual', 'SD-T01', 'Mengidentifikasi lokasi dan gagasan tersurat wacana', stimSD3, 'Mudah',
    'Di manakah lokasi ribuan modul kaca panel surya terapung tersebut berada berdasarkan wacana?',
    [
      { kode: 'A', teks: 'Di Pantai Parangtritis, D.I. Yogyakarta', alasanDistraktor: 'Bukan lokasi yang disebutkan dalam wacana.' },
      { kode: 'B', teks: 'Di Danau Toba, Sumatra Utara', alasanDistraktor: 'Bukan lokasi yang tercantum dalam teks.' },
      { kode: 'C', teks: 'Di Waduk Cirata, Jawa Barat', alasanDistraktor: 'Jawaban benar: Disebutkan pada kalimat pertama wacana.' },
      { kode: 'D', teks: 'Di Sungai Kapuas, Kalimantan Barat', alasanDistraktor: 'Bukan lokasi instalasi panel surya yang dibahas.' },
    ], 'C',
    'Kalimat pertama menyatakan eksplisit: "Di Waduk Cirata, Jawa Barat, ribuan modul kaca panel surya terbentang luas mengapung..."',
    'Paragraf 1: "Di Waduk Cirata, Jawa Barat, ribuan modul kaca panel surya terbentang luas mengapung..."'
  ),
  buatSoal('SOAL-SD-014', 'SD', 5, 'Pemahaman Inferensial', 'SD-I01', 'Menyimpulkan manfaat tersirat dari energi terbarukan', stimSD3, 'Sedang',
    'Berdasarkan wacana, mengapa penggunaan panel surya terapung dikatakan membantu menciptakan "udara bersih"?',
    [
      { kode: 'A', teks: 'Karena panel surya menyemprotkan cairan wangi ke langit setiap siang hari', alasanDistraktor: 'Panel surya tidak menyemprotkan cairan wangi.' },
      { kode: 'B', teks: 'Karena proses pembangkitan listrik tenaga surya tidak menghasilkan asap beracun atau jelaga hitam', alasanDistraktor: 'Jawaban benar: Paragraf 1 menyebutkan "tanpa mengeluarkan asap pembakaran atau jelaga hitam".' },
      { kode: 'C', teks: 'Karena waduk Cirata akan dipenuhi pohon pinus yang menghasilkan oksigen', alasanDistraktor: 'Waduk adalah perairan, bukan hutan pinus daratan.' },
      { kode: 'D', teks: 'Karena panel surya menyedot seluruh udara kotor dan menyimpannya di dasar danau', alasanDistraktor: 'Miskonsepsi cara kerja panel surya fotovoltaik.' },
    ], 'B',
    'Wacana menyatakan: "...mengubahnya menjadi arus listrik bersih tanpa mengeluarkan asap pembakaran atau jelaga hitam."',
    'Paragraf 1: "...tanpa mengeluarkan asap pembakaran atau jelaga hitam."'
  ),
  buatSoal('SOAL-SD-015', 'SD', 5, 'Pemahaman Tekstual', 'SD-T04', 'Menemukan rincian keunggulan fasilitas terapung', stimSD3, 'Mudah',
    'Apa keuntungan alami yang didapat panel surya karena dipasang mengapung di atas air danau?',
    [
      { kode: 'A', teks: 'Air danau yang dingin secara alami menyegarkan panel surya sehingga penyerapan energi lebih bertenaga', alasanDistraktor: 'Jawaban benar: Disebutkan pada paragraf kedua wacana.' },
      { kode: 'B', teks: 'Panel kaca menjadi lebih mudah hanyut ke samudra luas', alasanDistraktor: 'Hanyut adalah risiko bahaya, bukan keuntungan.' },
      { kode: 'C', teks: 'Ikan-ikan di danau dapat meloncat ke atas panel untuk berjemur', alasanDistraktor: 'Bukan keuntungan operasional teknologi fotovoltaik.' },
      { kode: 'D', teks: 'Panel tidak membutuhkan sinar matahari sama sekali saat hujan', alasanDistraktor: 'Panel surya tetap membutuhkan cahaya matahari.' },
    ], 'A',
    'Paragraf 2 menyatakan: "air danau yang dingin secara alami menyegarkan panel surya sehingga penyerapan energinya menjadi jauh lebih bertenaga."',
    'Paragraf 2: "...air danau yang dingin secara alami menyegarkan panel surya..."'
  ),
  buatSoal('SOAL-SD-016', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E01', 'Menghubungkan isi bacaan dengan tindakan nyata peserta didik', stimSD3, 'Sedang',
    'Tindakan sederhana apa yang disarankan penulis dalam wacana untuk ikut mendukung penghematan energi dan udara bersih?',
    [
      { kode: 'A', teks: 'Membeli panel surya sendiri untuk dipasang di tas sekolah', alasanDistraktor: 'Saran yang tidak praktis dan tidak tertulis dalam wacana.' },
      { kode: 'B', teks: 'Membiasakan mematikan lampu dan kipas angin saat meninggalkan ruangan kelas', alasanDistraktor: 'Jawaban benar: Rekomendasi langsung pada kalimat terakhir wacana.' },
      { kode: 'C', teks: 'Tidak perlu belajar menggunakan komputer sama sekali', alasanDistraktor: 'Menghindari teknologi bertentangan dengan kemajuan literasi.' },
      { kode: 'D', teks: 'Menutup seluruh jendela kelas agar udara luar tidak masuk', alasanDistraktor: 'Menutup jendela justru membuat ruangan gerah dan butuh listrik lebih.' },
    ], 'B',
    'Penulis mengajak: "Kita dapat mendukung udara bersih dengan membiasakan mematikan lampu dan kipas angin saat meninggalkan ruangan kelas."',
    'Paragraf 2: "...membiasakan mematikan lampu dan kipas angin saat meninggalkan ruangan kelas."'
  ),
  buatSoal('SOAL-SD-017', 'SD', 5, 'Pemahaman Inferensial', 'SD-I02', 'Menyimpulkan dampak penghematan lahan daratan', stimSD3, 'Sedang',
    'Mengapa pemasangan panel surya di atas danau dinilai sangat membantu sektor pertanian pangan?',
    [
      { kode: 'A', teks: 'Karena petani dapat menanam padi di atas permukaan panel kaca', alasanDistraktor: 'Padi tidak dapat ditanam di atas kaca panel.' },
      { kode: 'B', teks: 'Karena lahan daratan yang subur tidak terpakai untuk pembangkit sehingga tetap dapat digunakan bertani', alasanDistraktor: 'Jawaban benar: Paragraf 2 menyatakan "tidak menghabiskan lahan tanah pertanian yang berharga".' },
      { kode: 'C', teks: 'Karena panel surya mengeluarkan pupuk kimia cair ke air waduk', alasanDistraktor: 'Panel surya tidak mengeluarkan bahan kimia pupuk.' },
      { kode: 'D', teks: 'Karena petani tidak perlu lagi menyiram sawah saat kemarau', alasanDistraktor: 'Irigasi sawah tetap diperlukan sesuai musim.' },
    ], 'B',
    'Keuntungan lahan tertera jelas: "tidak menghabiskan lahan tanah pertanian yang berharga".',
    'Paragraf 2: "Selain tidak menghabiskan lahan tanah pertanian yang berharga..."'
  ),
  buatSoal('SOAL-SD-018', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E03', 'Menilai keandalan informasi dalam teks ilmiah populer', stimSD3, 'Sedang',
    'Bagaimanakah penilaian Anda terhadap manfaat informasi dalam teks "Panel Surya Terapung Cirata"?',
    [
      { kode: 'A', teks: 'Sangat mendidik karena memberikan pemahaman konkret mengenai teknologi energi bersih masa depan Indonesia', alasanDistraktor: 'Jawaban benar: Memberikan literasi sains ramah lingkungan bagi peserta didik.' },
      { kode: 'B', teks: 'Kurang berguna karena anak-anak belum boleh bekerja di pembangkit listrik', alasanDistraktor: 'Teks bertujuan membangun wawasan peduli bumi, bukan mencari tenaga kerja.' },
      { kode: 'C', teks: 'Meragukan karena matahari tidak selalu bersinar di malam hari', alasanDistraktor: 'Fakta bahwa panel surya bekerja di siang hari tidak mengurangi nilai wacana.' },
      { kode: 'D', teks: 'Membosankan karena tidak menceritakan tokoh kartun atau pahlawan super', alasanDistraktor: 'Menilai genre teks nonfiksi secara tidak adil.' },
    ], 'A',
    'Teks menyajikan informasi faktual berwawasan lingkungan yang membangun kesadaran hemat energi sejak dini.',
    'Wacana keseluruhan memaparkan inovasi energi bersih Waduk Cirata.'
  ),

  // --- Stimulus SD-4 (Kancil, Bangau Putih, dan Telaga Pinus) ---
  buatSoal('SOAL-SD-019', 'SD', 5, 'Pemahaman Tekstual', 'SD-T04', 'Menemukan informasi tersurat tokoh dan aktivitas', stimSD4, 'Mudah',
    'Berdasarkan fabel di atas, apa yang sedang dilakukan Kancil ketika melihat Bangau Putih bekerja keras membersihkan saluran mata air?',
    [
      { kode: 'A', teks: 'Asyik bermain bola biji karet sembari duduk di atas batu bulat', alasanDistraktor: 'Jawaban benar: Dinyatakan pada paragraf pertama dan kedua.' },
      { kode: 'B', teks: 'Sedang tidur pulas di bawah naungan pohon pinus besar', alasanDistraktor: 'Kancil sedang bermain, bukan tidur.' },
      { kode: 'C', teks: 'Membantu induk rusa mencari rumput gajah di tepi telaga', alasanDistraktor: 'Induk rusa tidak ada dalam cerita.' },
      { kode: 'D', teks: 'Berenang menyelam mencari ikan kecil bersama bangau', alasanDistraktor: 'Kancil tidak berenang mencari ikan.' },
    ], 'A',
    'Paragraf 1 dan 2 menyatakan: "Kancil yang sedang asyik bermain bola biji karet tertegun..." dan "Kancil sembari duduk di atas batu bulat."',
    'Paragraf 1: "...Kancil yang sedang asyik bermain bola biji karet tertegun..."'
  ),
  buatSoal('SOAL-SD-020', 'SD', 5, 'Pemahaman Inferensial', 'SD-I01', 'Menyimpulkan alasan tindakan tokoh', stimSD4, 'Sedang',
    'Mengapa Bangau Putih menolak usulan Kancil untuk menunda pekerjaan dan menunggu datangnya hujan?',
    [
      { kode: 'A', teks: 'Karena Bangau ingin memamerkan kekuatan sayapnya kepada hewan lain', alasanDistraktor: 'Bangau tidak berniat sombong atau pamer.' },
      { kode: 'B', teks: 'Karena jika menunda, air telaga akan membusuk dan meracuni hewan-hewan lain yang kehausan sore itu', alasanDistraktor: 'Jawaban benar: Alasan peduli sesama makhluk hidup yang diucapkan Bangau.' },
      { kode: 'C', teks: 'Karena Bangau takut dimarahi oleh Raja Hutan yang sedang berpatroli', alasanDistraktor: 'Tidak ada tokoh Raja Hutan dalam fabel.' },
      { kode: 'D', teks: 'Karena Bangau ingin mengambil bola biji karet milik Kancil', alasanDistraktor: 'Bangau fokus pada kebersihan telaga untuk kepentingan bersama.' },
    ], 'B',
    'Bangau menjawab bijak: "jika kita menunda dan menunggu hujan, air telaga ini akan membusuk dan meracuni kawan-kawan kita yang kehausan sore ini."',
    'Paragraf 3: "...air telaga ini akan membusuk dan meracuni kawan-kawan kita yang kehausan sore ini."'
  ),
  buatSoal('SOAL-SD-021', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E02', 'Menilai perubahan sikap tokoh dalam cerita', stimSD4, 'Sedang',
    'Bagaimanakah penilaian Anda terhadap sikap Kancil di akhir cerita fabel tersebut?',
    [
      { kode: 'A', teks: 'Kancil tetap bersikap sombong dan meninggalkan Bangau seorang diri', alasanDistraktor: 'Bertolak belakang dengan akhir cerita.' },
      { kode: 'B', teks: 'Kancil patut diapresiasi karena ia sadar akan kemalasannya, merasa malu, lalu segera turun membantu Bangau', alasanDistraktor: 'Jawaban benar: Menunjukkan sikap mau belajar, rendah hati, dan peduli sesama.' },
      { kode: 'C', teks: 'Kancil penakut karena mudah terpengaruh oleh ucapan Bangau', alasanDistraktor: 'Bukan penakut, melainkan kesadaran moral yang terpuji.' },
      { kode: 'D', teks: 'Kancil seharusnya meminta upah makanan sebelum masuk ke parit telaga', alasanDistraktor: 'Tindakan gotong royong sukarela tidak memerlukan upah pamrih.' },
    ], 'B',
    'Paragraf 3 menyatakan: "Kancil merasa malu atas kemalasannya. Ia meletakkan mainannya, lalu segera terjun ke parit telaga untuk membantu Bangau..."',
    'Paragraf 3: "Kancil merasa malu atas kemalasannya. Ia meletakkan mainannya, lalu segera terjun..."'
  ),
  buatSoal('SOAL-SD-022', 'SD', 5, 'Pemahaman Tekstual', 'SD-T02', 'Menemukan rincian material penyumbat air', stimSD4, 'Mudah',
    'Sampah apakah yang dikumpulkan oleh Bangau Putih dari saluran mata air Telaga Bening?',
    [
      { kode: 'A', teks: 'Plastik bekas bungkus makanan dan kaleng minuman kemasan', alasanDistraktor: 'Sampah hutan dalam teks adalah ranting dan dedaunan.' },
      { kode: 'B', teks: 'Ranting berduri dan dedaunan busuk yang menyumbat saluran', alasanDistraktor: 'Jawaban benar: Disebutkan di paragraf pertama.' },
      { kode: 'C', teks: 'Batu-batu kali berukuran raksasa yang tidak bisa digeser', alasanDistraktor: 'Bukan batu raksasa melainkan ranting dan daun busuk.' },
      { kode: 'D', teks: 'Kail pancing tajam milik para pemburu liar', alasanDistraktor: 'Kail pancing tidak disebutkan dalam teks.' },
    ], 'B',
    'Teks menyatakan: "Bangau Putih sibuk mengumpulkan ranting berduri dan dedaunan busuk yang menyumbat saluran mata air telaga."',
    'Paragraf 1: "...mengumpulkan ranting berduri dan dedaunan busuk yang menyumbat saluran..."'
  ),
  buatSoal('SOAL-SD-023', 'SD', 5, 'Pemahaman Inferensial', 'SD-I03', 'Menafsirkan ungkapan bermakna kiasan', stimSD4, 'Sedang',
    'Apa makna kalimat Bangau: "Merawat kebersihan alam adalah tugas bersama saat ini juga, bukan nanti saat bahaya sudah datang"?',
    [
      { kode: 'A', teks: 'Mencegah kerusakan lingkungan harus dilakukan sejak dini sebelum timbul bencana yang merugikan semua pihak', alasanDistraktor: 'Jawaban benar: Penafsiran esensial makna peribahasa sedia payung sebelum hujan.' },
      { kode: 'B', teks: 'Semua hewan di hutan harus pindah sarang sebelum musim kemarau tiba', alasanDistraktor: 'Bukan pesan pindah habitat melainkan pencegahan pencemaran.' },
      { kode: 'C', teks: 'Bahaya tidak akan pernah datang jika kita sering bermain bola', alasanDistraktor: 'Tidak logis dan tidak berkaitan dengan pesan teks.' },
      { kode: 'D', teks: 'Hanya Bangau yang memiliki kewajiban menjaga sumber air telaga', alasanDistraktor: 'Bangau menegaskan ini adalah "tugas bersama".' },
    ], 'A',
    'Pernyataan Bangau menekankan pentingnya tindakan preventif menjaga alam bersama-sama demi keselamatan seluruh warga hutan.',
    'Paragraf 3: "Merawat kebersihan alam adalah tugas bersama saat ini juga, bukan nanti saat bahaya sudah datang."'
  ),
  buatSoal('SOAL-SD-024', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E01', 'Menentukan relevansi fabel dengan kehidupan nyata siswa', stimSD4, 'Sedang',
    'Bagaimana pengamalan pesan cerita fabel tersebut dalam kehidupan sehari-hari di lingkungan sekolah kita?',
    [
      { kode: 'A', teks: 'Menunggu petugas kebersihan sekolah datang baru kita mau memungut sampah di bawah meja kita', alasanDistraktor: 'Sikap pasif yang bertentangan dengan pesan cerita.' },
      { kode: 'B', teks: 'Langsung memungut sampah yang berserakan di lorong kelas tanpa harus disuruh atau menunggu jadwal piket', alasanDistraktor: 'Jawaban benar: Mencerminkan inisiatif dan tanggung jawab bersama.' },
      { kode: 'C', teks: 'Menyalahkan teman yang lupa piket di depan seluruh warga sekolah', alasanDistraktor: 'Sikap mempermalukan orang lain bertentangan dengan budi pekerti.' },
      { kode: 'D', teks: 'Membuang sisa makanan ke saluran air agar hanyut saat hujan deras', alasanDistraktor: 'Perilaku buruk yang menyumbat saluran air.' },
    ], 'B',
    'Inisiatif Bangau mengajarkan kesadaran bertindak langsung merawat lingkungan tanpa menunda-nunda.',
    'Pesan moral wacana: kesadaran bersama menjaga kebersihan alam.'
  ),

  // --- Stimulus SD-5 (Komodo Satwa Purba) ---
  buatSoal('SOAL-SD-025', 'SD', 5, 'Pemahaman Tekstual', 'SD-T04', 'Mengidentifikasi ciri fisik satwa pada teks deskripsi', stimSD5, 'Mudah',
    'Bagaimanakah ciri lidah biawak komodo yang membantunya memiliki indra penciuman sangat tajam?',
    [
      { kode: 'A', teks: 'Pendek, bulat, dan berwarna hijau lumut', alasanDistraktor: 'Tidak sesuai dengan deskripsi teks.' },
      { kode: 'B', teks: 'Panjang, bercabang dua, dan berwarna kuning kemerahan', alasanDistraktor: 'Jawaban benar: Disebutkan eksplisit pada kalimat terakhir paragraf pertama.' },
      { kode: 'C', teks: 'Lebar, bersisik keras, dan berbulu hitam halus', alasanDistraktor: 'Lidah reptil komodo tidak berbulu.' },
      { kode: 'D', teks: 'Bergigi tajam di bagian ujung lidahnya', alasanDistraktor: 'Lidah tidak memiliki gigi.' },
    ], 'B',
    'Paragraf 1 menyatakan: "...berkat lidahnya yang panjang, bercabang dua, dan berwarna kuning kemerahan."',
    'Paragraf 1: "...panjang, bercabang dua, dan berwarna kuning kemerahan."'
  ),
  buatSoal('SOAL-SD-026', 'SD', 5, 'Pemahaman Inferensial', 'SD-I01', 'Menyimpulkan fungsi adaptasi perilaku satwa', stimSD5, 'Sedang',
    'Berdasarkan wacana, untuk tujuan apakah komodo kerap mengibaskan lidahnya ke udara?',
    [
      { kode: 'A', teks: 'Untuk menakut-nakuti burung camar yang terbang rendah', alasanDistraktor: 'Bukan untuk menakuti burung.' },
      { kode: 'B', teks: 'Mendeteksi aroma bangkai atau mangsa dari jarak beberapa kilometer jauhnya', alasanDistraktor: 'Jawaban benar: Menggunakan lidah bercabang untuk menangkap partikel aroma di udara.' },
      { kode: 'C', teks: 'Untuk minum air asin langsung dari tetesan embun pantai', alasanDistraktor: 'Lidah komodo adalah sensor penciuman, bukan sendok minum asin.' },
      { kode: 'D', teks: 'Membersihkan sisik kulit matanya dari debu pasir karang', alasanDistraktor: 'Bukan fungsi mengibaskan lidah ke udara.' },
    ], 'B',
    'Paragraf 2 menyatakan: "Dengan mengibaskan lidahnya di udara, komodo dapat mendeteksi aroma bangkai atau mangsa..."',
    'Paragraf 2: "...mendeteksi aroma bangkai atau mangsa dari jarak beberapa kilometer jauhnya."'
  ),
  buatSoal('SOAL-SD-027', 'SD', 5, 'Pemahaman Tekstual', 'SD-T02', 'Menemukan aturan keselamatan pada teks informatif', stimSD5, 'Mudah',
    'Mengapa wisatawan yang berkunjung ke habitat komodo wajib didampingi oleh petugas jagawana (ranger)?',
    [
      { kode: 'A', teks: 'Agar keselamatan pengunjung terjamin dan kelestarian komodo tetap terlindungi', alasanDistraktor: 'Jawaban benar: Disebutkan pada kalimat terakhir wacana.' },
      { kode: 'B', teks: 'Untuk membawa koper dan barang bawaan belanjaan wisatawan', alasanDistraktor: 'Petugas jagawana bukan pemikul barang bawaan belanja.' },
      { kode: 'C', teks: 'Supaya pengunjung dapat memegang ekor komodo dengan bebas', alasanDistraktor: 'Memegang satwa liar sangat berbahaya dan dilarang.' },
      { kode: 'D', teks: 'Untuk mengajari komodo menari di depan para fotografer', alasanDistraktor: 'Taman nasional bukan sirkus hewan.' },
    ], 'A',
    'Teks menyatakan: "Wisatawan yang berkunjung wajib didampingi oleh petugas jagawana (ranger) agar keselamatan pengunjung terjamin dan populasi satwa... tetap terlindungi."',
    'Paragraf 2: "...agar keselamatan pengunjung terjamin dan populasi satwa... tetap terlindungi..."'
  ),
  buatSoal('SOAL-SD-028', 'SD', 5, 'Pemahaman Inferensial', 'SD-I04', 'Menyimpulkan karakteristik kecepatan gerak satwa', stimSD5, 'Sedang',
    'Meskipun tubuh komodo berukuran besar dan tampak lamban saat berjemur, fakta apakah yang harus diwaspadai dari satwa ini?',
    [
      { kode: 'A', teks: 'Komodo dapat terbang melintasi selat antarpulau', alasanDistraktor: 'Komodo tidak memiliki sayap untuk terbang.' },
      { kode: 'B', teks: 'Komodo dapat berlari cepat secara mengejutkan dalam jarak pendek untuk menyergap mangsanya', alasanDistraktor: 'Jawaban benar: Teks menyatakan "dapat berlari cepat secara mengejutkan dalam jarak pendek".' },
      { kode: 'C', teks: 'Komodo dapat menghilang di balik bayangan batu karang', alasanDistraktor: 'Komodo adalah hewan nyata, bukan makhluk gaib yang menghilang.' },
      { kode: 'D', teks: 'Komodo mampu memanjat pohon kelapa setinggi dua puluh meter', alasanDistraktor: 'Komodo dewasa bertubuh 70 kg tidak memanjat pohon kelapa 20 meter.' },
    ], 'B',
    'Paragraf 2 menyatakan: "...komodo dapat berlari cepat secara mengejutkan dalam jarak pendek untuk menyergap mangsanya."',
    'Paragraf 2: "...komodo dapat berlari cepat secara mengejutkan dalam jarak pendek..."'
  ),
  buatSoal('SOAL-SD-029', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E02', 'Menilai pentingnya status perlindungan kawasan', stimSD5, 'Sedang',
    'Mengapa penetapan Taman Nasional Komodo sebagai "zona lindung ketat" oleh pemerintah dinilai sangat tepat?',
    [
      { kode: 'A', teks: 'Karena pulau-pulau tersebut adalah satu-satunya habitat alami komodo di dunia yang perlu dijaga dari kepunahan', alasanDistraktor: 'Jawaban benar: Menjaga warisan satwa endemik purba yang tidak ada di tempat lain.' },
      { kode: 'B', teks: 'Supaya masyarakat lokal tidak dapat mencari ikan di seluruh lautan Indonesia', alasanDistraktor: 'Zonasi lindung ditujukan untuk konservasi komodo, bukan melarang nelayan nusantara.' },
      { kode: 'C', teks: 'Agar seluruh pulau dapat dibangun hotel dan mal perbelanjaan mewah', alasanDistraktor: 'Pembangunan masif justru merusak habitat satwa lindung.' },
      { kode: 'D', teks: 'Karena komodo membutuhkan pasokan listrik AC sepanjang siang hari', alasanDistraktor: 'Satwa liar hidup alami di alam terbuka.' },
    ], 'A',
    'Teks menyebutkan: "satu-satunya habitat alami di dunia bagi kadal raksasa purba... agar populasi satwa warisan zaman purba ini tetap terlindungi dari kepunahan."',
    'Paragraf 1 & 2: "...satu-satunya habitat alami di dunia... terlindungi dari kepunahan."'
  ),
  buatSoal('SOAL-SD-030', 'SD', 5, 'Evaluasi dan Apresiasi', 'SD-E03', 'Menilai kebanggaan nasional terhadap keanekaragaman hayati', stimSD5, 'Mudah',
    'Sikap apakah yang paling mencerminkan rasa bangga sebagai warga Indonesia terhadap keberadaan biawak komodo?',
    [
      { kode: 'A', teks: 'Menjualbelikan anak komodo ke luar negeri untuk mendapatkan keuntungan pribadi', alasanDistraktor: 'Tindakan kriminal perburuan liar yang melanggar hukum.' },
      { kode: 'B', teks: 'Mendukung upaya konservasi satwa langka dan mempelajari ilmu pengetahuan tentang fauna asli nusantara', alasanDistraktor: 'Jawaban benar: Merefleksikan cinta tanah air dan kepedulian ilmiah.' },
      { kode: 'C', teks: 'Menganggap komodo sebagai hama pengganggu yang tidak perlu dilindungi', alasanDistraktor: 'Sikap keliru yang mengancam kepunahan satwa warisan dunia.' },
      { kode: 'D', teks: 'Membuang sampah plastik saat berwisata ke pantai pulau komodo', alasanDistraktor: 'Mencemari lingkungan habitat satwa liar.' },
    ], 'B',
    'Komodo adalah kebanggaan dan kekayaan hayati Indonesia yang harus dijaga bersama melalui riset dan konservasi.',
    'Judul dan wacana: "Menjaga Komodo, Satwa Purba Kebanggaan Indonesia."'
  ),
];

// -------------------------------------------------------------
// B. SOAL SMP (35 BUTIR RESMI TKA SMP - STANDAR ASLI 30-35 SOAL)
// -------------------------------------------------------------
const stimSMP1 = SEED_STIMULI[5];
const stimSMP2 = SEED_STIMULI[6];
const stimSMP3 = SEED_STIMULI[7];
const stimSMP4 = SEED_STIMULI[8];
const stimSMP5 = SEED_STIMULI[9];

export const SOAL_SMP_BANK: SoalItem[] = [
  // --- Stimulus SMP-1 (Mangrove Penjaga Garis Pantai) ---
  buatSoal('SOAL-SMP-001', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T01', 'Menemukan informasi angka dan persentase eksplisit', stimSMP1, 'Mudah',
    'Berdasarkan wacana "Mangrove: Sabuk Hijau Penjaga Garis Pantai", berapa persentase energi kinetik air laut yang mampu diredam oleh sistem perakaran mangrove?',
    [
      { kode: 'A', teks: 'Sekitar dua puluh lima persen', alasanDistraktor: 'Angka yang salah dan terlalu rendah.' },
      { kode: 'B', teks: 'Tepat lima puluh persen', alasanDistraktor: 'Tidak sesuai dengan data paragraf kedua.' },
      { kode: 'C', teks: 'Lebih dari enam puluh persen', alasanDistraktor: 'Jawaban benar: Dinyatakan persis pada kalimat kedua paragraf kedua.' },
      { kode: 'D', teks: 'Hingga seratus persen tanpa sisa ombak', alasanDistraktor: 'Pernyataan mutlak yang keliru.' },
    ], 'C',
    'Paragraf 2 menyatakan: "sistem akar yang kokoh ini mampu mereduksi energi kinetik air hingga lebih dari enam puluh persen."',
    'Paragraf 2: "...mampu mereduksi energi kinetik air hingga lebih dari enam puluh persen."'
  ),
  buatSoal('SOAL-SMP-002', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I02', 'Menjelaskan hubungan kausalitas ekologis', stimSMP1, 'Sedang',
    'Mengapa ekosistem mangrove di pesisir pantai dijuluki sebagai "penyerap karbon biru" (blue carbon)?',
    [
      { kode: 'A', teks: 'Karena daun mangrove memancarkan cahaya berwarna biru saat malam hari', alasanDistraktor: 'Penjelasan fiktif tanpa dasar biologis.' },
      { kode: 'B', teks: 'Karena kemampuannya memerangkap karbon dioksida di dalam sedimen lumpur sedalam beberapa meter', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat pertama paragraf ketiga.' },
      { kode: 'C', teks: 'Karena akar mangrove hanya dapat tumbuh di air laut yang berwarna biru pekat', alasanDistraktor: 'Tumbuhan mangrove tumbuh di zona pasang surut berlumpur.' },
      { kode: 'D', teks: 'Karena mangrove menyerap seluruh garam laut sehingga air berubah warna', alasanDistraktor: 'Miskonsepsi proses penyerapan karbon.' },
    ], 'B',
    'Paragraf 3 menyatakan: "mangrove juga dijuluki \'penyerap karbon biru\' karena kemampuannya memerangkap karbon dioksida di dalam sedimen sedalam beberapa meter."',
    'Paragraf 3: "...kemampuannya memerangkap karbon dioksida di dalam sedimen sedalam beberapa meter."'
  ),
  buatSoal('SOAL-SMP-003', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E01', 'Menilai validitas argumen dan ancaman konversi lahan', stimSMP1, 'Sedang',
    'Bagaimanakah penilaian kritis terhadap fenomena konversi lahan hutan mangrove menjadi tambak intensif tak berizin?',
    [
      { kode: 'A', teks: 'Sangat menguntungkan dalam jangka panjang karena memperbanyak ekspor udang tanpa risiko lingkungan', alasanDistraktor: 'Mengabaikan bahaya abrasi dan hilangnya benteng tsunami alami.' },
      { kode: 'B', teks: 'Merupakan langkah keliru dan merugikan karena menghancurkan benteng alami penahan bencana dan merusak tempat pemijahan benih ikan laut', alasanDistraktor: 'Jawaban benar: Sesuai peringatan ekologis di paragraf ketiga.' },
      { kode: 'C', teks: 'Perlu didukung penuh oleh pemerintah daerah karena akar mangrove mengotori pantai', alasanDistraktor: 'Pandangan keliru yang bertentangan dengan sains ekologi maritim.' },
      { kode: 'D', teks: 'Tidak berpengaruh sama sekali terhadap ketahanan wilayah pesisir', alasanDistraktor: 'Mengesampingkan kenyataan ilmiah ancaman erosi pantai.' },
    ], 'B',
    'Paragraf 3 memperingatkan: "konversi lahan pesisir menjadi tambak intensif tak berizin mengancam kelestarian benteng alami ini. Menjaga tegakan mangrove... investasi strategis pertahanan bencana..."',
    'Paragraf 3: "...mengancam kelestarian benteng alami ini. Menjaga tegakan mangrove... investasi strategis pertahanan bencana..."'
  ),
  buatSoal('SOAL-SMP-004', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T03', 'Mengidentifikasi istilah biologi dalam teks', stimSMP1, 'Mudah',
    'Apakah istilah biologis yang digunakan dalam teks untuk menyebut tumbuhan yang mampu beradaptasi dan bertoleransi pada kadar garam tinggi?',
    [
      { kode: 'A', teks: 'Tumbuhan epifit', alasanDistraktor: 'Epifit adalah tumbuhan yang menumpang pada tumbuhan lain.' },
      { kode: 'B', teks: 'Tumbuhan halofit', alasanDistraktor: 'Jawaban benar: Disebutkan di paragraf pertama wacana.' },
      { kode: 'C', teks: 'Tumbuhan xerofit', alasanDistraktor: 'Xerofit adalah tumbuhan yang beradaptasi di lingkungan kering/gurun.' },
      { kode: 'D', teks: 'Tumbuhan hidrofit tawar', alasanDistraktor: 'Hidrofit tawar hidup di air tawar seperti teratai.' },
    ], 'B',
    'Paragraf 1 menyatakan: "Tumbuhan halofit ini memiliki kemampuan adaptasi fisiologis luar biasa dengan toleransi tinggi terhadap salinitas air laut yang pekat."',
    'Paragraf 1: "Tumbuhan halofit ini memiliki kemampuan adaptasi fisiologis luar biasa..."'
  ),
  buatSoal('SOAL-SMP-005', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I01', 'Menyimpulkan fungsi celah akar mangrove bagi biota perairan', stimSMP1, 'Sedang',
    'Apa keuntungan ekologis dari endapan lumpur yang tertahan di sela-sela jalinan akar mangrove?',
    [
      { kode: 'A', teks: 'Membendung seluruh aliran air laut agar pantai menjadi daratan kering', alasanDistraktor: 'Bukan tujuan membendung total laut.' },
      { kode: 'B', teks: 'Menciptakan substrat kaya nutrisi bagi tempat pemijahan dan pembesaran larva kepiting, udang, dan benih ikan', alasanDistraktor: 'Jawaban benar: Sesuai fakta biologis paragraf kedua.' },
      { kode: 'C', teks: 'Menghalangi perahu nelayan tradisional agar tidak dapat melaut', alasanDistraktor: 'Bukan fungsi ekologis jalinan akar mangrove.' },
      { kode: 'D', teks: 'Mempercepat penguapan air laut menjadi kristal garam konsumsi', alasanDistraktor: 'Tidak berkaitan dengan ladang garam evaporasi.' },
    ], 'B',
    'Paragraf 2 menyatakan: "endapan lumpur yang tertahan di celah akar menciptakan substrat kaya nutrisi bagi larva kepiting, udang, dan benih ikan karang."',
    'Paragraf 2: "...menciptakan substrat kaya nutrisi bagi larva kepiting, udang, dan benih ikan karang."'
  ),
  buatSoal('SOAL-SMP-006', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E02', 'Menilai efektivitas gaya penyampaian informasi penulis', stimSMP1, 'Sedang',
    'Mengapa penulis menggunakan metafora "sabuk hijau" dan "benteng alami" dalam mendeskripsikan hutan mangrove?',
    [
      { kode: 'A', teks: 'Untuk menegaskan fungsi perlindungan fisik pantai yang kokoh sekaligus melestarikan lingkungan hijau dari ancaman bencana', alasanDistraktor: 'Jawaban benar: Metafora visual yang memperkuat pesan ketahanan bencana ekologis.' },
      { kode: 'B', teks: 'Karena pohon mangrove memiliki daun yang berbentuk melingkar seperti ikat pinggang tentara', alasanDistraktor: 'Tafsiran harfiah yang keliru atas metafora bahasa.' },
      { kode: 'C', teks: 'Supaya pembaca mengira bahwa pantai tersebut terbuat dari tembok batu bata hijau', alasanDistraktor: 'Bukan bangunan tembok melainkan ekosistem tumbuhan hidup.' },
      { kode: 'D', teks: 'Untuk membingungkan para pembaca awam dengan kosakata kiasan', alasanDistraktor: 'Metafora digunakan untuk memperjelas konsep fungsional.' },
    ], 'A',
    'Istilah "sabuk hijau" dan "benteng alami" mempertegas signifikansi vegetasi pesisir dalam menahan laju abrasi dan gelombang laut.',
    'Wacana menggunakan diksi "sabuk hijau" dan "benteng alami" secara integratif.'
  ),
  buatSoal('SOAL-SMP-007', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I03', 'Menyimpulkan dampak jangka panjang abrasi pantai', stimSMP1, 'Sedang',
    'Jika hutan mangrove di sepanjang garis pantai musnah, apa dampak sosio-ekologis yang paling mengancam jutaan penduduk pesisir?',
    [
      { kode: 'A', teks: 'Kenaikan hasil tangkapan ikan laut di sekitar muara sungai', alasanDistraktor: 'Hilangnya mangrove justru memusnahkan habitat bibit ikan.' },
      { kode: 'B', teks: 'Erosi daratan yang kian parah, intrusi air asin ke sumur warga, dan kerentanan tinggi terhadap terjangan gelombang badai', alasanDistraktor: 'Jawaban benar: Rangkaian konsekuensi logis hilangnya benteng pesisir.' },
      { kode: 'C', teks: 'Daratan pulau akan semakin meluas ke arah laut lepas', alasanDistraktor: 'Tanpa mangrove, daratan justru terkikis abrasi.' },
      { kode: 'D', teks: 'Suhu air laut akan mendadak turun mendekati titik beku', alasanDistraktor: 'Tidak ada kaitan langsung dengan pembekuan air laut tropis.' },
    ], 'B',
    'Hilangnya peredam kinetik 60% mengakibatkan abrasi cepat dan hilangnya perlindungan garis pantai.',
    'Paragraf 2 & 3: "...erosi pantai atau abrasi... pertahanan bencana bagi jutaan penduduk pesisir..."'
  ),

  // --- Stimulus SMP-2 (Genta Penganyam Bambu) ---
  buatSoal('SOAL-SMP-008', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T02', 'Menemukan dialog dan motif seni tradisional', stimSMP2, 'Mudah',
    'Motif anyaman apakah yang diajarkan oleh Kakek Sastro saat mengarahkan jemari cucunya di beranda bambu?',
    [
      { kode: 'A', teks: 'Motif mega mendung', alasanDistraktor: 'Mega mendung adalah motif batik khas Cirebon.' },
      { kode: 'B', teks: 'Motif parang rusak', alasanDistraktor: 'Parang rusak adalah motif batik larangan Jawa.' },
      { kode: 'C', teks: 'Motif truntum', alasanDistraktor: 'Jawaban benar: Disebutkan di paragraf kedua cerita.' },
      { kode: 'D', teks: 'Motif pucuk rebung tenun', alasanDistraktor: 'Pucuk rebung umum pada songket Minangkabau/Melayu.' },
    ], 'C',
    'Paragraf 2 menyatakan: "...sembari mengarahkan jemari cucunya pada sudut motif truntum."',
    'Paragraf 2: "...mengarahkan jemari cucunya pada sudut motif truntum."'
  ),
  buatSoal('SOAL-SMP-009', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I02', 'Menafsirkan makna filosofis ucapan tokoh', stimSMP2, 'Sedang',
    'Apa makna filosofis dari nasihat Kakek Sastro: "Jika satu bilah dipaksa membengkok sebelum lemas, seluruh anyaman akan kehilangan keseimbangan maknawi"?',
    [
      { kode: 'A', teks: 'Kerajinan anyaman harus menggunakan bambu impor dari luar negeri', alasanDistraktor: 'Tidak berkaitan dengan impor bambu.' },
      { kode: 'B', teks: 'Proses berkarya menuntut kesabaran batin dan ketelatenan tinggi, bukan pemaksaan yang tergesa-gesa tanpa menghormati watak alami bahan', alasanDistraktor: 'Jawaban benar: Penafsiran mendalam atas nilai etos kesabaran kriya.' },
      { kode: 'C', teks: 'Bambu petung harus direndam air mendidih selama setahun penuh', alasanDistraktor: 'Penafsiran harfiah yang keliru.' },
      { kode: 'D', teks: 'Setiap penganyam wajib mematahkan bilah pertama sebelum memulai', alasanDistraktor: 'Bertolak belakang dengan pesan kehati-hatian kakek.' },
    ], 'B',
    'Kakek menegaskan bahwa menganyam adalah ikhtiar merajut kesabaran dan keharmonisan.',
    'Paragraf 2: "Ini adalah ikhtiar merajut kesabaran. Jika satu bilah dipaksa membengkok sebelum lemas..."'
  ),
  buatSoal('SOAL-SMP-010', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E01', 'Menilai konflik nilai antara tradisi dan modernitas', stimSMP2, 'Sedang',
    'Bagaimanakah sikap Aryo dalam merespons cibiran kawan-kawan sekolahnya yang menganggap kerajinan anyaman sudah usang?',
    [
      { kode: 'A', teks: 'Aryo membakar seluruh bilah bambunya karena malu dan rendah diri', alasanDistraktor: 'Bertentangan dengan tekad Aryo dalam cerita.' },
      { kode: 'B', teks: 'Aryo tetap teguh melestarikan seni anyaman bambu dengan bangga hingga berhasil menembus apresiasi mancanegara', alasanDistraktor: 'Jawaban benar: Sikap teguh dan percaya diri generasi muda pelestari budaya.' },
      { kode: 'C', teks: 'Aryo membalas mengejek kawan-kawannya dengan kata-kata kasar', alasanDistraktor: 'Aryo tidak membalas dengan kekerasan.' },
      { kode: 'D', teks: 'Aryo meminta kakeknya berhenti menganyam dan pindah ke kota', alasanDistraktor: 'Bertolak belakang dengan kecintaan Aryo terhadap warisan leluhur.' },
    ], 'B',
    'Paragraf 3 menyatakan: "binar mata Aryo membuktikan bahwa akar tradisi tak pernah mati di tangan generasi yang berani memeluknya dengan bangga."',
    'Paragraf 3: "...akar tradisi tak pernah mati di tangan generasi yang berani memeluknya dengan bangga."'
  ),
  buatSoal('SOAL-SMP-011', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T01', 'Mengidentifikasi latar tempat dalam prosa naratif', stimSMP2, 'Mudah',
    'Di manakah latar tempat berlangsungnya dialog mendalam antara Aryo dan Kakek Sastro?',
    [
      { kode: 'A', teks: 'Di dalam gedung festival kriya kabupaten', alasanDistraktor: 'Festival adalah tempat pameran karya di akhir cerita.' },
      { kode: 'B', teks: 'Di beranda bambu yang dinaungi rumpun petung di lereng bukit', alasanDistraktor: 'Jawaban benar: Disebutkan pada awal paragraf pertama.' },
      { kode: 'C', teks: 'Di ruang perpustakaan sekolah kota', alasanDistraktor: 'Sekolah adalah tempat kawan-kawannya mencibir.' },
      { kode: 'D', teks: 'Di dermaga pelabuhan penyeberangan antarprovinsi', alasanDistraktor: 'Bukan latar cerita Aryo.' },
    ], 'B',
    'Paragraf 1 menyatakan: "Di beranda bambu yang dinaungi rumpun petung, jemari Aryo yang masih belia lincah menyelipkan bilah-bilah sayatan tipis."',
    'Paragraf 1: "Di beranda bambu yang dinaungi rumpun petung..."'
  ),
  buatSoal('SOAL-SMP-012', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I04', 'Menyimpulkan tema utama cerita pendek', stimSMP2, 'Sedang',
    'Apakah tema sentral yang diusung dalam cerita "Genta Penganyam Bambu di Lereng Menoreh"?',
    [
      { kode: 'A', teks: 'Persaingan dagang antara perajin bambu lokal dan pengusaha pabrik plastik', alasanDistraktor: 'Tidak ada bahasan pabrik plastik.' },
      { kode: 'B', teks: 'Keteguhan generasi muda dalam menjaga keluhuran kriya tradisional warisan leluhur di tengah arus modernisasi', alasanDistraktor: 'Jawaban benar: Refleksi perjuangan Aryo dan nasihat Kakek Sastro.' },
      { kode: 'C', teks: 'Bencana tanah longsor yang melanda kawasan perbukitan Menoreh', alasanDistraktor: 'Bukan cerita bencana alam.' },
      { kode: 'D', teks: 'Teknik budi daya tanaman bambu petung untuk bahan bangunan rumah', alasanDistraktor: 'Bukan teks budi daya agrikultur.' },
    ], 'B',
    'Cerita mengangkat benturan pandangan antara nilai tradisi luhur dan cibiran modernitas yang berhasil dimenangkan Aryo dengan prestasi.',
    'Paragraf 3: "...desau bilah bambu yang saling menindih adalah simfoni warisan leluhur."'
  ),
  buatSoal('SOAL-SMP-013', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E03', 'Menganalisis gaya bahasa personifikasi dalam teks', stimSMP2, 'Sulit',
    'Pada paragraf ketiga terdapat frasa: "desau bilah bambu yang saling menindih adalah simfoni warisan leluhur". Majas apakah yang terkandung dalam frasa tersebut dan apa efek estetiknya?',
    [
      { kode: 'A', teks: 'Majas hiperbola yang menggambarkan bambu dapat meledak seperti bom', alasanDistraktor: 'Tafsiran salah yang merusak konteks estetik.' },
      { kode: 'B', teks: 'Majas metafora yang mengibaratkan gesekan bilah bambu sebagai alunan musik orkestra agung pengikat memori budaya', alasanDistraktor: 'Jawaban benar: Metafora "simfoni" mengangkat gesekan bambu menjadi karya seni musikal luhur.' },
      { kode: 'C', teks: 'Majas ironi untuk mencela kawan-kawan sekolah Aryo yang suka mencibir', alasanDistraktor: 'Bukan majas sindiran melainkan apresiasi estetis.' },
      { kode: 'D', teks: 'Majas pleonasme yang mengulang kata-kata tanpa fungsi makna', alasanDistraktor: 'Bukan pemborosan kata.' },
    ], 'B',
    'Frasa tersebut adalah metafora yang menganalogikan suara gesekan bilah bambu dengan keindahan "simfoni warisan leluhur".',
    'Paragraf 3: "...desau bilah bambu yang saling menindih adalah simfoni warisan leluhur."'
  ),

  // --- Stimulus SMP-3 (Pertanian Vertikal Perkotaan) ---
  buatSoal('SOAL-SMP-014', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T04', 'Menemukan efisiensi konsumsi air dalam teks eksposisi', stimSMP3, 'Mudah',
    'Berdasarkan wacana pertanian vertikal, berapa persentase penghematan konsumsi air tawar yang berhasil dibuktikan melalui pengujian agronomi?',
    [
      { kode: 'A', teks: 'Empat puluh persen', alasanDistraktor: 'Angka yang keliru.' },
      { kode: 'B', teks: 'Hingga sembilan puluh persen', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat pertama paragraf kedua.' },
      { kode: 'C', teks: 'Tepat lima puluh lima persen', alasanDistraktor: 'Tidak sesuai dengan isi wacana.' },
      { kode: 'D', teks: 'Seratus persen tanpa membutuhkan air sama sekali', alasanDistraktor: 'Pertanian hidroponik tetap membutuhkan air bernutrisi.' },
    ], 'B',
    'Paragraf 2 menyatakan: "metode budi daya tegak lurus ini mampu menghemat konsumsi air tawar hingga sembilan puluh persen dibandingkan metode bercocok tanam konvensional..."',
    'Paragraf 2: "...menghemat konsumsi air tawar hingga sembilan puluh persen..."'
  ),
  buatSoal('SOAL-SMP-015', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I01', 'Menyimpulkan alasan peniadaan pestisida sintetis', stimSMP3, 'Sedang',
    'Mengapa sayuran yang dibudidayakan dalam sistem pertanian vertikal tertutup dapat bersertifikasi bebas residu racun pestisida kimia?',
    [
      { kode: 'A', teks: 'Karena sayuran tersebut dilapisi lapisan plastik lilin kedap udara', alasanDistraktor: 'Bukan karena pelapisan plastik.' },
      { kode: 'B', teks: 'Karena kondisi ruangan tertutup higienis dan terkontrol presisi sehingga meniadakan masuknya hama pengganggu', alasanDistraktor: 'Jawaban benar: Sesuai penjelasan paragraf kedua wacana.' },
      { kode: 'C', teks: 'Karena benih sayuran disinari sinar ultraviolet berkekuatan tinggi', alasanDistraktor: 'Penyinaran menggunakan LED khusus, bukan radiasi pemusnah.' },
      { kode: 'D', teks: 'Karena daun sayuran dipetik sebelum sempat berfotosintesis', alasanDistraktor: 'Tumbuhan tetap berfotosintesis dengan cahaya lampu LED.' },
    ], 'B',
    'Paragraf 2 menyatakan: "kondisi ruangan yang higienis dan terkontrol secara presisi meniadakan penggunaan pestisida kimia sintetis..."',
    'Paragraf 2: "...kondisi ruangan yang higienis dan terkontrol secara presisi meniadakan penggunaan pestisida kimia sintetis..."'
  ),
  buatSoal('SOAL-SMP-016', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E01', 'Menilai kelemahan sekaligus prospek masa depan teknologi', stimSMP3, 'Sedang',
    'Berdasarkan wacana, apakah tantangan terbesar implementasi pertanian vertikal di kota-kota besar saat ini?',
    [
      { kode: 'A', teks: 'Sayuran yang dihasilkan berasa pahit dan tidak disukai konsumen pasar', alasanDistraktor: 'Kualitas rasa justru aman pangan dan segar.' },
      { kode: 'B', teks: 'Investasi awal peranti sensorik dan pendingin ruangan yang masih relatif mahal', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat ketiga paragraf kedua.' },
      { kode: 'C', teks: 'Tidak tersedianya bibit sayuran hijau di wilayah Pulau Jawa', alasanDistraktor: 'Bibit sayuran melimpah.' },
      { kode: 'D', teks: 'Masyarakat menolak makan sayuran hidroponik karena alasan adat', alasanDistraktor: 'Tidak ada penolakan adat di pasar swalayan metropolitan.' },
    ], 'B',
    'Paragraf 2 menyatakan: "Meskipun investasi awal peranti sensorik dan pendingin ruangan masih relatif mahal, efisiensi rantai distribusi... sukses memangkas jejak karbon..."',
    'Paragraf 2: "Meskipun investasi awal peranti sensorik dan pendingin ruangan masih relatif mahal..."'
  ),
  buatSoal('SOAL-SMP-017', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I02', 'Menjelaskan konsep jejak karbon logistik', stimSMP3, 'Sedang',
    'Bagaimanakah pertanian vertikal perkotaan dapat berkontribusi memangkas jejak karbon rantai pasok pangan?',
    [
      { kode: 'A', teks: 'Dengan memproduksi sayuran langsung di dekat pusat konsumen perkotaan sehingga memangkas jarak transportasi truk antarpulau', alasanDistraktor: 'Jawaban benar: Memperpendek jarak tempuh angkutan bahan pangan segar.' },
      { kode: 'B', teks: 'Dengan mengganti truk pengangkut menggunakan gerobak sapi tradisional', alasanDistraktor: 'Bukan menggunakan gerobak sapi.' },
      { kode: 'C', teks: 'Dengan menjual sayuran hanya saat siang hari terik', alasanDistraktor: 'Waktu penjualan tidak berkaitan dengan emisi logistik.' },
      { kode: 'D', teks: 'Dengan menghentikan konsumsi sayuran hijau di seluruh restoran kota', alasanDistraktor: 'Bertentangan dengan tujuan ketahanan pangan.' },
    ], 'A',
    'Paragraf 2 menyatakan: "efisiensi rantai distribusi langsung ke pasar swalayan metropolitan sukses memangkas jejak karbon logistik secara signifikan."',
    'Paragraf 2: "...efisiensi rantai distribusi langsung ke pasar swalayan metropolitan sukses memangkas jejak karbon logistik..."'
  ),
  buatSoal('SOAL-SMP-018', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T01', 'Menemukan pemicu lahirnya inovasi pertanian vertikal', stimSMP3, 'Mudah',
    'Kondisi apakah di Pulau Jawa yang menjadi pemicu utama lahirnya inovasi pertanian vertikal di ruangan tertutup?',
    [
      { kode: 'A', teks: 'Banjir lumpur panas yang melanda seluruh perkebunan', alasanDistraktor: 'Bukan penyebab yang tertulis dalam wacana.' },
      { kode: 'B', teks: 'Pesatnya alih fungsi lahan pertanian produktif menjadi kawasan industri dan permukiman', alasanDistraktor: 'Jawaban benar: Kalimat pembuka paragraf pertama.' },
      { kode: 'C', teks: 'Musim hujan yang berlangsung terus-menerus selama lima tahun', alasanDistraktor: 'Pernyataan hiperbolis yang tidak ada dalam teks.' },
      { kode: 'D', teks: 'Seluruh petani beralih profesi menjadi nelayan laut lepas', alasanDistraktor: 'Bukan fakta yang dinyatakan wacana.' },
    ], 'B',
    'Paragraf 1 menyatakan: "Pesatnya alih fungsi lahan pertanian produktif menjadi kawasan industri dan permukiman di Pulau Jawa mendorong lahirnya inovasi pertanian vertikal terpadu..."',
    'Paragraf 1: "Pesatnya alih fungsi lahan pertanian produktif menjadi kawasan industri dan permukiman..."'
  ),
  buatSoal('SOAL-SMP-019', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E02', 'Menilai kelayakan argumen ketahanan pangan', stimSMP3, 'Sedang',
    'Bagaimanakah simpulan penulis terkait relevansi agroteknologi vertikal ini bagi masa depan Indonesia?',
    [
      { kode: 'A', teks: 'Metode ini tidak memiliki masa depan karena terlalu rumit bagi petani desa', alasanDistraktor: 'Bertolak belakang dengan optimisme penulis.' },
      { kode: 'B', teks: 'Diproyeksikan menjadi pilar ketahanan pangan masa depan perkotaan Indonesia yang ramah lingkungan dan mandiri', alasanDistraktor: 'Jawaban benar: Kalimat penutup wacana paragraf kedua.' },
      { kode: 'C', teks: 'Harus segera dihentikan sebelum merugikan pedagang pasar tradisional', alasanDistraktor: 'Penulis mendukung agroteknologi sebagai solusi masa depan.' },
      { kode: 'D', teks: 'Hanya cocok diterapkan di negara beriklim salju abadi', alasanDistraktor: 'Teknologi ini relevan dengan kota-kota padat di Indonesia.' },
    ], 'B',
    'Wacana menyimpulkan: "Pendekatan agroteknologi ini diproyeksikan menjadi pilar ketahanan pangan masa depan perkotaan Indonesia."',
    'Paragraf 2: "Pendekatan agroteknologi ini diproyeksikan menjadi pilar ketahanan pangan masa depan perkotaan Indonesia."'
  ),

  // --- Stimulus SMP-4 (Pesona Karang Bunaken) ---
  buatSoal('SOAL-SMP-020', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T04', 'Menemukan relasi simbiosis pada terumbu karang', stimSMP4, 'Mudah',
    'Berdasarkan teks tentang Karang Bunaken, apakah nama alga bersel satu yang bersimbiosis hidup di dalam jaringan tubuh polip karang?',
    [
      { kode: 'A', teks: 'Alga zooxanthellae', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat kedua paragraf kedua.' },
      { kode: 'B', teks: 'Bakteri escherichia', alasanDistraktor: 'Bakteri usus, bukan alga simbiotik karang.' },
      { kode: 'C', teks: 'Lumut kerak kerak', alasanDistraktor: 'Lumut kerak hidup di daratan bebatuan.' },
      { kode: 'D', teks: 'Fitoplankton spirogyra', alasanDistraktor: 'Bukan spesies simbiotik polip karang laut.' },
    ], 'A',
    'Paragraf 2 menyatakan: "Polip ini bersimbiosis dengan alga mikroskopis bersel satu bernama zooxanthellae yang tinggal di dalam jaringan tubuhnya."',
    'Paragraf 2: "...alga mikroskopis bersel satu bernama zooxanthellae..."'
  ),
  buatSoal('SOAL-SMP-021', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I01', 'Menjelaskan mekanisme fenomena pemutihan karang', stimSMP4, 'Sedang',
    'Bagaimanakah kenaikan suhu air laut dapat menyebabkan fenomena pemutihan karang (coral bleaching)?',
    [
      { kode: 'A', teks: 'Kenaikan suhu memicu alga zooxanthellae keluar dari tubuh polip sehingga polip kehilangan pemasok energi dan memutih kelaparan', alasanDistraktor: 'Jawaban benar: Kausalitas biologis yang dipaparkan pada paragraf kedua.' },
      { kode: 'B', teks: 'Air laut yang hangat melarutkan seluruh kerangka kapur karang dalam hitungan detik', alasanDistraktor: 'Bukan pelarutan instan kerangka kapur.' },
      { kode: 'C', teks: 'Ikan-ikan tropis memakan habis seluruh kulit polip hingga tampak putih', alasanDistraktor: 'Bukan karena dimakan ikan tropis.' },
      { kode: 'D', teks: 'Polip karang mengeluarkan cat putih untuk melindungi diri dari panas', alasanDistraktor: 'Pernyataan fiktif yang tidak ilmiah.' },
    ], 'A',
    'Paragraf 2 menjelaskan: "Kenaikan suhu air laut... memicu fenomena pemutihan karang (coral bleaching), di mana alga keluar dari tubuh polip sehingga karang mati kelaparan."',
    'Paragraf 2: "...di mana alga keluar dari tubuh polip sehingga karang mati kelaparan."'
  ),
  buatSoal('SOAL-SMP-022', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T02', 'Menemukan nama teknologi restorasi terumbu karang', stimSMP4, 'Mudah',
    'Metode substrat apakah yang giat diaplikasikan peneliti untuk merevitalisasi dan merestorasi terumbu karang buatan di perairan Bunaken?',
    [
      { kode: 'A', teks: 'Substrat beton semen cor', alasanDistraktor: 'Bukan beton semen konvensional.' },
      { kode: 'B', teks: 'Substrat biorock', alasanDistraktor: 'Jawaban benar: Disebutkan pada kalimat terakhir wacana.' },
      { kode: 'C', teks: 'Substrat plastik sintetis', alasanDistraktor: 'Plastik mencemari lautan.' },
      { kode: 'D', teks: 'Jaring kawat tembaga murni', alasanDistraktor: 'Bukan jaring kawat tembaga.' },
    ], 'B',
    'Paragraf 2 menyatakan: "Upaya restorasi karang buatan berbasis substrat biorock kini giat dilakukan para peneliti demi menjaga kelangsungan surga bawah laut nusantara."',
    'Paragraf 2: "...berbasis substrat biorock kini giat dilakukan para peneliti..."'
  ),
  buatSoal('SOAL-SMP-023', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E01', 'Menilai signifikansi Segitiga Karang Dunia', stimSMP4, 'Sedang',
    'Mengapa keberadaan terumbu karang Bunaken memiliki signifikansi global yang melampaui batas wilayah Indonesia?',
    [
      { kode: 'A', teks: 'Karena Bunaken terletak di jantung Segitiga Karang Dunia yang menjadi episentrum keanekaragaman hayati maritim planet bumi', alasanDistraktor: 'Jawaban benar: Wilayah kunci biosfer laut internasional.' },
      { kode: 'B', teks: 'Karena hanya karang Bunaken yang dapat dijualbelikan secara bebas ke luar negeri', alasanDistraktor: 'Perdagangan karang liar dilarang hukum internasional.' },
      { kode: 'C', teks: 'Karena Bunaken adalah satu-satunya laut yang tidak memiliki gelombang ombak', alasanDistraktor: 'Setiap laut memiliki gelombang dan pasang surut.' },
      { kode: 'D', teks: 'Karena karang Bunaken menghasilkan minyak bumi bagi kapal pesiar', alasanDistraktor: 'Karang tidak menghasilkan minyak bumi komersial.' },
    ], 'A',
    'Paragraf 1 menyatakan: "Taman Nasional Bunaken di Sulawesi Utara terletak tepat di jantung Segitiga Terumbu Karang Dunia (Coral Triangle). Kawasan perairan ini menjadi rumah bagi lebih dari tiga ratus spesies karang..."',
    'Paragraf 1: "...terletak tepat di jantung Segitiga Terumbu Karang Dunia (Coral Triangle)."'
  ),
  buatSoal('SOAL-SMP-024', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I03', 'Menyimpulkan fungsi kerangka kapur bagi ekosistem', stimSMP4, 'Sedang',
    'Apa peran vital kerangka kapur yang kokoh yang dibentuk oleh koloni polip karang bagi kehidupan ribuan spesies ikan tropis?',
    [
      { kode: 'A', teks: 'Menyediakan struktur labirin tiga dimensi sebagai tempat berlindung, mencari makan, dan bertelur dari predator laut', alasanDistraktor: 'Jawaban benar: Fungsi habitat esensial struktur karang.' },
      { kode: 'B', teks: 'Menghangatkan air laut agar ikan tidak kedinginan saat malam', alasanDistraktor: 'Karang tidak berfungsi sebagai pemanas air laut.' },
      { kode: 'C', teks: 'Menjadi sumber makanan utama satu-satunya bagi seluruh jenis paus', alasanDistraktor: 'Paus umumnya memakan krill dan plankton.' },
      { kode: 'D', teks: 'Menghentikan arus pasang surut di seluruh samudra Pasifik', alasanDistraktor: 'Gaya gravitasi bulan yang mengendalikan pasang surut.' },
    ], 'A',
    'Koloni karang membentuk rumah ekosistem bagi ribuan spesies ikan tropis yang bersimbiosis mutualisme.',
    'Paragraf 1: "...membentuk simbiosis mutualisme yang menakjubkan."'
  ),
  buatSoal('SOAL-SMP-025', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E02', 'Menilai tanggung jawab manusia terhadap krisis iklim global', stimSMP4, 'Sedang',
    'Sikap apakah yang paling mencerminkan kepedulian generasi muda terhadap ancaman pemutihan karang dunia?',
    [
      { kode: 'A', teks: 'Mengurangi jejak emisi karbon harian dan mendukung gerakan konservasi pesisir berkelanjutan', alasanDistraktor: 'Jawaban benar: Menanggulangi akar penyebab kenaikan suhu lautan global.' },
      { kode: 'B', teks: 'Mengambil pecahan karang pantai untuk dibawa pulang sebagai hiasan akuarium kamar', alasanDistraktor: 'Merusak ekosistem dan melanggar hukum konservasi.' },
      { kode: 'C', teks: 'Menaburkan es batu ke laut lepas untuk mendinginkan air', alasanDistraktor: 'Tindakan sia-sia yang tidak berbasis sains.' },
      { kode: 'D', teks: 'Menghindari makan ikan laut seumur hidup tanpa alasan yang jelas', alasanDistraktor: 'Bukan solusi mitigasi krisis iklim.' },
    ], 'A',
    'Krisis pemutihan karang dipicu kenaikan suhu global, sehingga transisi energi rendah karbon adalah kunci solusinya.',
    'Paragraf 2: "...akibat perubahan iklim global memicu fenomena pemutihan karang..."'
  ),

  // --- Stimulus SMP-5 (Satelit Satria-1) ---
  buatSoal('SOAL-SMP-026', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T01', 'Menemukan kapasitas transmisi satelit', stimSMP5, 'Mudah',
    'Berapakah kapasitas transmisi data yang dimiliki oleh Satelit Republik Indonesia 1 (Satria-1)?',
    [
      { kode: 'A', teks: 'Lima puluh gigabit per detik', alasanDistraktor: 'Kapasitas yang terlalu rendah.' },
      { kode: 'B', teks: 'Seratus lima puluh gigabit per detik', alasanDistraktor: 'Jawaban benar: Disebutkan eksplisit di paragraf kedua wacana.' },
      { kode: 'C', teks: 'Tiga ratus gigabit per detik', alasanDistraktor: 'Bukan kapasitas yang tertulis di teks.' },
      { kode: 'D', teks: 'Satu terabit per detik', alasanDistraktor: 'Tidak sesuai dengan spesifikasi teks.' },
    ], 'B',
    'Paragraf 2 menyatakan: "Satelit berkapasitas transmisi seratus lima puluh gigabit per detik ini dirancang khusus..."',
    'Paragraf 2: "Satelit berkapasitas transmisi seratus lima puluh gigabit per detik ini..."'
  ),
  buatSoal('SOAL-SMP-027', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I02', 'Menjelaskan alasan pemilihan teknologi satelit dibanding serat optik', stimSMP5, 'Sedang',
    'Mengapa wilayah Terdepan, Terluar, dan Tertinggal (3T) di Indonesia lebih efektif dijangkau menggunakan teknologi satelit geostasioner dibandingkan kabel serat optik bawah laut?',
    [
      { kode: 'A', teks: 'Karena kabel serat optik dilarang dipasang di bawah laut Indonesia', alasanDistraktor: 'Kabel optik tidak dilarang, tetapi kendala geografis.' },
      { kode: 'B', teks: 'Karena kondisi geografis kepulauan terpencil dan pegunungan pelosok sangat rumit dan mahal jika harus menggelar kabel optik ribuan kilometer', alasanDistraktor: 'Jawaban benar: Tantangan geografis dan efisiensi jangkauan pancaran udara satelit.' },
      { kode: 'C', teks: 'Karena satelit tidak membutuhkan biaya listrik saat beroperasi', alasanDistraktor: 'Satelit ditenagai panel surya di antariksa.' },
      { kode: 'D', teks: 'Karena kabel optik selalu putus dimakan ikan hiu setiap minggu', alasanDistraktor: 'Bukan alasan utama pemerataan akses pita lebar.' },
    ], 'B',
    'Paragraf 2 menjelaskan satelit dirancang untuk wilayah 3T: "yang mustahil dijangkau oleh kabel serat optik bawah laut" karena tantangan geografis ribuan pulau.',
    'Paragraf 1 & 2: "...sebagai negara kepulauan... tantangan geografis... mustahil dijangkau oleh kabel serat optik..."'
  ),
  buatSoal('SOAL-SMP-028', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T02', 'Mengidentifikasi titik layanan prioritas internet satelit', stimSMP5, 'Mudah',
    'Fasilitas layanan publik apakah yang menjadi titik prioritas penerima manfaat sinyal internet Satria-1?',
    [
      { kode: 'A', teks: 'Laboratorium komputer sekolah perbatasan, puskesmas pulau terpencil, dan kantor desa pelosok', alasanDistraktor: 'Jawaban benar: Tercantum eksplisit pada kalimat kedua paragraf kedua.' },
      { kode: 'B', teks: 'Pusat perbelanjaan mal mewah di ibu kota provinsi', alasanDistraktor: 'Mal kota sudah dilayani serat optik komersial.' },
      { kode: 'C', teks: 'Gedung bioskop dan arena bermain wahana air', alasanDistraktor: 'Bukan fasilitas layanan publik prioritas 3T.' },
      { kode: 'D', teks: 'Hotel berbintang lima di kawasan wisata internasional', alasanDistraktor: 'Prioritas Satria-1 adalah fasilitas publik pedesaan 3T.' },
    ], 'A',
    'Paragraf 2 menyatakan: "Titik layanan prioritas mencakup puluhan ribu fasilitas umum, seperti laboratorium komputer sekolah perbatasan, puskesmas pulau terpencil, dan kantor desa pelosok pegunungan."',
    'Paragraf 2: "...laboratorium komputer sekolah perbatasan, puskesmas pulau terpencil, dan kantor desa pelosok..."'
  ),
  buatSoal('SOAL-SMP-029', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E01', 'Menilai dampak pemerataan digital terhadap keadilan pendidikan', stimSMP5, 'Sedang',
    'Bagaimanakah penilaian Anda terhadap dampak pengoperasian Satria-1 bagi peserta didik di wilayah 3T?',
    [
      { kode: 'A', teks: 'Merugikan karena membuat siswa di pelosok lupa membantu orang tua bertani', alasanDistraktor: 'Pandangan negatif tanpa melihat hak pendidikan setara.' },
      { kode: 'B', teks: 'Sangat positif karena membuka akses belajar interaktif setara dengan sekolah kota, meruntuhkan disparitas pendidikan nasional', alasanDistraktor: 'Jawaban benar: Sesuai visi keadilan pendidikan yang diulas di paragraf kedua.' },
      { kode: 'C', teks: 'Tidak ada gunanya karena buku cetak jauh lebih murah daripada komputer', alasanDistraktor: 'Internet melengkapi bahan ajar dan wawasan global.' },
      { kode: 'D', teks: 'Hanya menguntungkan perusahaan penyedia gawai luar negeri', alasanDistraktor: 'Mengesampingkan faedah pemberdayaan talenta anak bangsa.' },
    ], 'B',
    'Paragraf 2 menekankan: "memungkinkan guru dan peserta didik di pelosok mengakses materi pembelajaran interaktif nasional secara setara... talenta generasi muda di pelosok negeri dapat berkembang optimal..."',
    'Paragraf 2: "...mengakses materi pembelajaran interaktif nasional secara setara dengan sekolah-sekolah di kota metropolitan."'
  ),
  buatSoal('SOAL-SMP-030', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I04', 'Menyimpulkan fungsi orbit geostasioner', stimSMP5, 'Sedang',
    'Apakah arti penting penempatan satelit pada "orbit geostasioner" bagi penerimaan sinyal antena parabola di bumi?',
    [
      { kode: 'A', teks: 'Satelit bergerak seirama rotasi bumi sehingga posisinya tampak tetap di atas wilayah Indonesia, menjamin koneksi stabil tanpa antena harus terus bergerak berputar', alasanDistraktor: 'Jawaban benar: Prinsip astronomi dan telekomunikasi orbit geostasioner.' },
      { kode: 'B', teks: 'Satelit dapat mendarat kembali ke bumi setiap sore untuk diisi ulang baterainya', alasanDistraktor: 'Satelit geostasioner tetap berada di orbit antariksa.' },
      { kode: 'C', teks: 'Satelit berada sangat dekat dengan permukaan laut sedalam sepuluh meter', alasanDistraktor: 'Orbit geostasioner berada sekitar 36.000 km di atas bumi.' },
      { kode: 'D', teks: 'Satelit hanya memancarkan sinyal saat malam hari tanpa awan', alasanDistraktor: 'Satelit memancar kontinu 24 jam.' },
    ], 'A',
    'Orbit geostasioner berada di ketinggian ~36.000 km dengan kecepatan orbit sama dengan rotasi bumi sehingga antena parabola di darat dapat mengarah tetap.',
    'Paragraf 1: "...ke orbit geostasioner menandai tonggak sejarah baru..."'
  ),
  buatSoal('SOAL-SMP-031', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E02', 'Menilai keutuhan struktur paragraf teks eksposisi teknologi', stimSMP5, 'Sedang',
    'Apakah fungsi gagasan paragraf pertama dalam membangun keutuhan wacana "Satelit Satria-1"?',
    [
      { kode: 'A', teks: 'Memaparkan kesimpulan akhir dari hasil ujian para siswa di daerah perbatasan', alasanDistraktor: 'Bukan simpulan akhir, melainkan pengantar.' },
      { kode: 'B', teks: 'Menyajikan latar belakang tantangan geografis kepulauan Indonesia sebelum mengenalkan solusi peluncuran satelit', alasanDistraktor: 'Jawaban benar: Struktur eksposisi masalah (kesenjangan geografis) lalu solusi (Satria-1).' },
      { kode: 'C', teks: 'Mengkritik kegagalan peluncuran roket luar angkasa negara lain', alasanDistraktor: 'Tidak ada kritik terhadap roket negara lain.' },
      { kode: 'D', teks: 'Menjelaskan rumus fisika kecepatan cahaya dalam ruang hampa', alasanDistraktor: 'Bukan pembahasan rumus fisika teori murni.' },
    ], 'B',
    'Paragraf 1 membuka dengan kondisi kepulauan >5.000 km sebagai dasar urgensi peluncuran Satria-1.',
    'Paragraf 1: "Sebagai negara kepulauan terbesar di dunia... tantangan geografis... peluncuran Satria-1..."'
  ),
  buatSoal('SOAL-SMP-032', 'SMP', 8, 'Pemahaman Tekstual', 'SMP-T03', 'Menemukan istilah singkatan daerah 3T', stimSMP5, 'Mudah',
    'Apakah kepanjangan dari akronim wilayah "3T" yang tercantum dalam wacana?',
    [
      { kode: 'A', teks: 'Terdepan, Terluar, dan Tertinggal', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat pertama paragraf kedua.' },
      { kode: 'B', teks: 'Terpencil, Tertutup, dan Terabaikan', alasanDistraktor: 'Bukan istilah resmi tata kelola wilayah negara.' },
      { kode: 'C', teks: 'Terpadu, Teratur, dan Terencana', alasanDistraktor: 'Bukan kepanjangan 3T dalam konteks perbatasan.' },
      { kode: 'D', teks: 'Tertinggi, Terpanjang, dan Terluas', alasanDistraktor: 'Bukan istilah geografis pemerataan konektivitas.' },
    ], 'A',
    'Paragraf 2 menyatakan: "wilayah Terdepan, Terluar, dan Tertinggal (3T)..."',
    'Paragraf 2: "...wilayah Terdepan, Terluar, dan Tertinggal (3T)..."'
  ),
  buatSoal('SOAL-SMP-033', 'SMP', 8, 'Pemahaman Inferensial', 'SMP-I01', 'Menyimpulkan relasi teknologi dan transformasi digital', stimSMP5, 'Sedang',
    'Berdasarkan wacana, apa relasi langsung antara penyediaan akses internet di puskesmas pelosok dengan kualitas hidup masyarakat desa?',
    [
      { kode: 'A', teks: 'Petugas puskesmas dapat melakukan tele-konsultasi medis darurat dengan dokter spesialis di rumah sakit rujukan kota besar', alasanDistraktor: 'Jawaban benar: Pemanfaatan konektivitas digital untuk pelayanan kesehatan prima.' },
      { kode: 'B', teks: 'Puskesmas dapat menjual obat-obatan secara daring ke pasar luar negeri', alasanDistraktor: 'Puskesmas melayani warga lokal, bukan ekspor obat.' },
      { kode: 'C', teks: 'Warga desa tidak perlu lagi menjaga pola hidup sehat karena ada internet', alasanDistraktor: 'Pola hidup sehat tetap menjadi fondasi kesehatan.' },
      { kode: 'D', teks: 'Puskesmas akan ditutup dan digantikan oleh antena satelit', alasanDistraktor: 'Puskesmas justru diperkuat fasilitas digitalnya.' },
    ], 'A',
    'Koneksi broadband di puskesmas pulau terpencil membuka integrasi data medis dan rujukan daring cepat.',
    'Paragraf 2: "...puskesmas pulau terpencil... talenta generasi muda... berkembang optimal..."'
  ),
  buatSoal('SOAL-SMP-034', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E03', 'Menilai tujuan komunikatif penulis wacana teknologi', stimSMP5, 'Sedang',
    'Apakah tujuan komunikatif utama penulis dalam menyusun wacana tentang Satelit Satria-1 tersebut?',
    [
      { kode: 'A', teks: 'Mengajak pembaca membeli saham perusahaan telekomunikasi swasta', alasanDistraktor: 'Bukan promosi investasi saham komersial.' },
      { kode: 'B', teks: 'Menyampaikan informasi optimistik mengenai upaya strategis bangsa dalam mewujudkan keadilan akses digital bagi seluruh rakyat', alasanDistraktor: 'Jawaban benar: Tujuan informatif dan edukatif kebangsaan.' },
      { kode: 'C', teks: 'Membuktikan bahwa teknologi kabel darat sudah tidak berguna sama sekali', alasanDistraktor: 'Kabel optik tetap vital untuk kota besar.' },
      { kode: 'D', teks: 'Membujuk masyarakat pedesaan agar pindah ke perkotaan', alasanDistraktor: 'Teks justru mendorong pemerataan agar warga pelosok maju di desanya.' },
    ], 'B',
    'Penulis menyampaikan pencapaian kemajuan teknologi nasional untuk pemerataan keadilan sosial.',
    'Wacana keseluruhan memaparkan pemerataan akses pita lebar nusantara.'
  ),
  buatSoal('SOAL-SMP-035', 'SMP', 8, 'Evaluasi dan Apresiasi', 'SMP-E01', 'Menyimpulkan peran pemuda dalam memanfaatkan akses teknologi', stimSMP5, 'Sedang',
    'Bagaimanakah respons paling produktif yang semestinya ditunjukkan peserta didik saat sekolahnya telah terhubung jaringan internet pita lebar?',
    [
      { kode: 'A', teks: 'Menghabiskan kuota internet untuk bermain permainan daring sepanjang jam pelajaran', alasanDistraktor: 'Penyalahgunaan fasilitas belajar yang merugikan prestasi.' },
      { kode: 'B', teks: 'Memanfaatkan kemudahan akses untuk memperdalam literasi sains, mengasah kreativitas karya, dan mengeksplorasi ilmu pengetahuan global', alasanDistraktor: 'Jawaban benar: Penggunaan teknologi yang memberdayakan kapasitas diri.' },
      { kode: 'C', teks: 'Menyebarkan kabar burung atau hoaks tanpa memeriksa kebenaran sumbernya', alasanDistraktor: 'Tindakan tidak bertanggung jawab yang melanggar etika digital.' },
      { kode: 'D', teks: 'Menolak menggunakan internet karena takut terkena radiasi layar komputer', alasanDistraktor: 'Sikap fobia teknologi yang menghambat kemajuan diri.' },
    ], 'B',
    'Konektivitas ditujukan agar peserta didik berkembang optimal menyongsong era transformasi digital.',
    'Paragraf 2: "...talenta generasi muda di pelosok negeri dapat berkembang optimal menyongsong era transformasi digital nasional."'
  ),
];

// -------------------------------------------------------------
// C. SOAL SMA (40 BUTIR RESMI TKA SMA - STANDAR ASLI 35-40 SOAL)
// -------------------------------------------------------------
const stimSMA1 = SEED_STIMULI[10];
const stimSMA2 = SEED_STIMULI[11];
const stimSMA3 = SEED_STIMULI[12];
const stimSMA4 = SEED_STIMULI[13];

export const SOAL_SMA_BANK: SoalItem[] = [
  // --- Stimulus SMA-1 (Teks Jamak: Transisi Energi vs Realitas Fiskal) ---
  buatSoal('SOAL-SMA-001', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T01', 'Menemukan proyeksi target reduksi emisi pada Teks 1', stimSMA1, 'Mudah',
    'Berdasarkan Teks 1 wacana jamak di atas, berapa proyeksi persentase reduksi jejak karbon industri yang ditargetkan melalui akselerasi energi terbarukan pada dekade mendatang?',
    [
      { kode: 'A', teks: 'Tiga puluh persen', alasanDistraktor: 'Angka yang salah.' },
      { kode: 'B', teks: 'Hingga empat puluh lima persen', alasanDistraktor: 'Jawaban benar: Dinyatakan persis pada kalimat ketiga paragraf pertama Teks 1.' },
      { kode: 'C', teks: 'Tepat enam puluh persen', alasanDistraktor: 'Tidak sesuai dengan angka teks.' },
      { kode: 'D', teks: 'Tujuh puluh lima persen', alasanDistraktor: 'Bukan target yang tercantum di teks.' },
    ], 'B',
    'Teks 1 Paragraf 1 menyatakan: "Akselerasi pembangunan pembangkit listrik tenaga bayu dan fotovoltaik di berbagai provinsi diproyeksikan mampu mereduksi jejak karbon industri hingga empat puluh lima persen..."',
    'Teks 1 Paragraf 1: "...mampu mereduksi jejak karbon industri hingga empat puluh lima persen pada dekade mendatang."'
  ),
  buatSoal('SOAL-SMA-002', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I02', 'Menganalisis disparitas pandangan antarteks (Teks Jamak)', stimSMA1, 'Sulit',
    'Berdasarkan perbandingan kedua teks, apa titik temu sekaligus perbedaan sudut pandang paling mendasar antara Penulis Teks 1 dan Penulis Teks 2 mengenai dekarbonisasi?',
    [
      { kode: 'A', teks: 'Kedua penulis menolak semua bentuk inovasi pembangkit listrik ramah lingkungan', alasanDistraktor: 'Keliru: Kedua penulis sama-sama mengakui pentingnya kelestarian lingkungan.' },
      { kode: 'B', teks: 'Kedua penulis sepakat akan nilai mulia elektrifikasi bersih, namun Teks 1 menekankan urgensi percepatan regulasi dan investasi teknologi, sedangkan Teks 2 menekankan kehati-hatian, keadilan spasial, dan kesiapan fiskal daerah tertinggal', alasanDistraktor: 'Jawaban benar: Sintesis perbandingan kritis dual teks yang objektif.' },
      { kode: 'C', teks: 'Teks 1 membela pengusaha batu bara, sedangkan Teks 2 mendukung kenaikan tarif listrik rakyat', alasanDistraktor: 'Bertolak belakang dengan esensi kedua teks.' },
      { kode: 'D', teks: 'Kedua penulis menyarankan agar seluruh kepulauan terpencil tidak perlu dialiri listrik', alasanDistraktor: 'Pernyataan absurd yang tidak mendasar.' },
    ], 'B',
    'Teks 1 berfokus pada lompatan dekarbonisasi dan peluang industri hijau, sedangkan Teks 2 mengkritisi realitas disparitas infrastruktur pulau terluar dan keterjangkauan tarif listrik rakyat.',
    'Teks 1: "...sinergi sains, keberanian regulasi..."; Teks 2: "...mengedepankan asas keadilan spasial melalui pemanfaatan energi campuran..."'
  ),
  buatSoal('SOAL-SMA-003', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E01', 'Menilai validitas argumen ekonomi Penulis Teks 2', stimSMA1, 'Sedang',
    'Bagaimanakah penilaian kritis terhadap peringatan Penulis Teks 2 mengenai risiko penghentian operasional pembangkit fosil secara prematur di wilayah kepulauan?',
    [
      { kode: 'A', teks: 'Peringatan tersebut sangat realistis dan kontekstual karena di wilayah terluar, pembangkit diesel skala mikro masih menjadi penopang utama layanan vital masyarakat seperti puskesmas dan cold storage perikanan', alasanDistraktor: 'Jawaban benar: Mengapresiasi argumen empiris berbasis realitas wilayah 3T.' },
      { kode: 'B', teks: 'Argumen Penulis Teks 2 tidak valid karena baterai gigawatt dapat dibagikan secara gratis kepada semua warga', alasanDistraktor: 'Teknologi baterai gigawatt sangat mahal dan memerlukan investasi raksasa.' },
      { kode: 'C', teks: 'Penulis Teks 2 bersikap anti-kemajuan karena membenci energi matahari', alasanDistraktor: 'Penulis mengakui justifikasi ekologis, hanya mengingatkan mitigasi risiko sosial.' },
      { kode: 'D', teks: 'Argumen tidak relevan karena cold storage perikanan tidak membutuhkan aliran listrik kontinu', alasanDistraktor: 'Cold storage mutlak membutuhkan pasokan listrik stabil untuk menjaga kesegaran ikan tangkapan.' },
    ], 'A',
    'Teks 2 menegaskan fakta lapangan: "Di banyak wilayah terluar, pembangkit diesel dan uap skala mikro masih menjadi tulang punggung yang memastikan puskesmas, cold storage perikanan, dan sekolah tetap menyala sepanjang malam."',
    'Teks 2 Paragraf 2: "...pembangkit diesel dan uap skala mikro masih menjadi tulang punggung yang memastikan puskesmas, cold storage perikanan..."'
  ),
  buatSoal('SOAL-SMA-004', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T04', 'Menemukan istilah teknik intermiten pada Teks 1', stimSMA1, 'Mudah',
    'Mengapa infrastruktur jaringan pintar (smart grid) dan baterai penyimpan skala raksasa mutlak diimplementasikan menurut Teks 1?',
    [
      { kode: 'A', teks: 'Untuk menurunkan gaji teknisi listrik di kawasan industri', alasanDistraktor: 'Bukan tujuan smart grid.' },
      { kode: 'B', teks: 'Guna mengantisipasi karakteristik pasokan intermiten (bergantung cuaca dan waktu) pada pembangkit surya dan angin', alasanDistraktor: 'Jawaban benar: Dinyatakan eksplisit pada awal paragraf kedua Teks 1.' },
      { kode: 'C', teks: 'Agar kabel listrik dapat dipasang tanpa tiang pancang di udara', alasanDistraktor: 'Tidak berkaitan dengan teknologi isolasi nirkabel.' },
      { kode: 'D', teks: 'Untuk menggantikan seluruh sambungan internet kabel optik di perkotaan', alasanDistraktor: 'Smart grid adalah transmisi kelistrikan, bukan pengganti internet optik.' },
    ], 'B',
    'Teks 1 Paragraf 2 menyatakan: "Investasi pada infrastruktur jaringan pintar atau smart grid mutlak diimplementasikan guna mengantisipasi karakteristik intermiten pada pembangkit tenaga surya dan angin."',
    'Teks 1 Paragraf 2: "...guna mengantisipasi karakteristik intermiten pada pembangkit tenaga surya dan angin."'
  ),
  buatSoal('SOAL-SMA-005', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I03', 'Menafsirkan diksi filosofis antiteks', stimSMA1, 'Sulit',
    'Apa makna pernyataan penutup Penulis Teks 2: "Ekologi tidak boleh dipertentangkan secara biner dengan keterjangkauan ekonomi dasar penduduk yang sedang berjuang keluar dari garis kemiskinan"?',
    [
      { kode: 'A', teks: 'Kelestarian alam dan pengentasan kemiskinan harus diselaraskan secara inklusif, bukan dipaksa memilih salah satu yang mengorbankan hajat hidup rakyat miskin', alasanDistraktor: 'Jawaban benar: Menolak dikotomi biner antara lingkungan vs kesejahteraan dasar.' },
      { kode: 'B', teks: 'Orang miskin tidak berhak menikmati udara bersih karena biaya hidup yang mahal', alasanDistraktor: 'Tafsiran diskriminatif yang bertentangan dengan semangat keadilan sosial teks.' },
      { kode: 'C', teks: 'Kebijakan lingkungan harus dibatalkan seluruhnya sampai tidak ada lagi orang miskin di bumi', alasanDistraktor: 'Bukan pembatalan ekologi melainkan transisi bertahap berkeadilan.' },
      { kode: 'D', teks: 'Keterjangkauan ekonomi hanya dapat dicapai dengan membakar batu bara sebanyak-banyaknya', alasanDistraktor: 'Mengabaikan wacana energi campuran dan transisi gas.' },
    ], 'A',
    'Frasa tersebut menolak pola pikir biner hitam-putih dan menuntut pendekatan transisi adil yang melindungi kelompok rentan secara proporsional.',
    'Teks 2 Paragraf 2: "Ekologi tidak boleh dipertentangkan secara biner dengan keterjangkauan ekonomi dasar penduduk..."'
  ),
  buatSoal('SOAL-SMA-006', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E02', 'Menilai kebaruan solusi jalan tengah kedua teks', stimSMA1, 'Sedang',
    'Berdasarkan Teks 2, langkah transisi jalan tengah apakah yang diprioritaskan sebelum penghentian total pembangkit fosil?',
    [
      { kode: 'A', teks: 'Menutup seluruh jaringan kelistrikan dan mewajibkan warga menggunakan lampu minyak', alasanDistraktor: 'Kemunduran peradaban yang merugikan.' },
      { kode: 'B', teks: 'Pemanfaatan energi campuran secara bertahap serta modernisasi pembangkit gas transisi seraya melatih teknisi lokal', alasanDistraktor: 'Jawaban benar: Rekomendasi konkret kalimat keempat paragraf kedua Teks 2.' },
      { kode: 'C', teks: 'Menjual seluruh pembangkit listrik negara kepada perusahaan asing', alasanDistraktor: 'Bukan rekomendasi teks.' },
      { kode: 'D', teks: 'Menghapuskan subsidi listrik bagi sekolah dan fasilitas kesehatan', alasanDistraktor: 'Bertolak belakang dengan perlindungan fasilitas publik.' },
    ], 'B',
    'Teks 2 menyarankan: "Pendekatan transisi yang bijak semestinya mengedepankan asas keadilan spasial melalui pemanfaatan energi campuran secara bertahap... Modernisasi pembangkit gas transisi perlu diprioritaskan..."',
    'Teks 2 Paragraf 2: "...pemanfaatan energi campuran secara bertahap dan terukur. Modernisasi pembangkit gas transisi perlu diprioritaskan..."'
  ),
  buatSoal('SOAL-SMA-007', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I01', 'Menganalisis dampak makroekonomi pada Teks 1', stimSMA1, 'Sedang',
    'Bagaimanakah diversifikasi ke energi terbarukan dapat membebaskan anggaran belanja negara menurut Teks 1?',
    [
      { kode: 'A', teks: 'Dengan meniadakan pajak pendapatan bagi seluruh warga negara', alasanDistraktor: 'Pajak pendapatan tidak berkaitan dengan impor minyak.' },
      { kode: 'B', teks: 'Mereduksi ketergantungan pada fluktuasi harga minyak mentah internasional yang sering membebani anggaran dan memicu inflasi domestik', alasanDistraktor: 'Jawaban benar: Penjelasan kausalitas fiskal makro di paragraf pertama Teks 1.' },
      { kode: 'C', teks: 'Memaksa negara lain membayar ganti rugi atas polusi udara masa lalu', alasanDistraktor: 'Bukan instrumen fiskal yang dibahas teks.' },
      { kode: 'D', teks: 'Menghentikan seluruh kegiatan perakitan baterai di dalam negeri', alasanDistraktor: 'Teks justru mendorong pembukaan lapangan kerja perakitan baterai.' },
    ], 'B',
    'Teks 1 Paragraf 1 menyatakan: "...membebaskan anggaran belanja negara dari beban fluktuasi harga minyak mentah internasional yang acap kali memicu inflasi domestik."',
    'Teks 1 Paragraf 1: "...membebaskan anggaran belanja negara dari beban fluktuasi harga minyak mentah internasional..."'
  ),
  buatSoal('SOAL-SMA-008', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E03', 'Mengevaluasi kekuatan data argumentasi antarteks', stimSMA1, 'Sulit',
    'Manakah di antara pernyataan berikut yang paling tepat mengevaluasi perbandingan kekuatan bukti argumentasi kedua teks?',
    [
      { kode: 'A', teks: 'Teks 1 unggul dalam menyajikan proyeksi reduksi emisi kuantitatif (45%) dan potensi geothermal, sedangkan Teks 2 unggul dalam menyajikan analisis kualitatif keadilan spasial dan realitas empiris pulau terluar', alasanDistraktor: 'Jawaban benar: Evaluasi komparatif yang seimbang dan cermat terhadap bobot masing-masing teks.' },
      { kode: 'B', teks: 'Kedua teks tidak memiliki dasar argumen sama sekali dan hanya berisi opini tanpa fakta', alasanDistraktor: 'Penilaian serampangan yang mengabaikan data teknis kedua teks.' },
      { kode: 'C', teks: 'Teks 2 sepenuhnya salah karena mengabaikan eksistensi radiasi matahari di Indonesia', alasanDistraktor: 'Teks 2 tidak menyangkal radiasi surya melainkan menyoroti biaya intermitensi.' },
      { kode: 'D', teks: 'Teks 1 lebih lemah karena ditulis oleh pihak yang tidak memahami teknologi smart grid', alasanDistraktor: 'Teks 1 justru secara spesifik menguraikan smart grid dan digitalisasi transmisi.' },
    ], 'A',
    'Teks 1 memaparkan data kuantitatif dekarbonisasi dan modalitas alamiah, sedangkan Teks 2 memperkuat dimensi sosio-ekologis demografi kepulauan.',
    'Sintesis komparatif Teks 1 dan Teks 2.'
  ),

  // --- Stimulus SMA-2 (Prosa Fiksi Realisme Magis: Lorong Berulang) ---
  buatSoal('SOAL-SMA-009', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T02', 'Menemukan deskripsi suasana fisik dan metaforis cerita', stimSMA2, 'Mudah',
    'Berdasarkan cerita "Lorong Berulang di Menara Arkais", apakah rutinitas yang selalu dilakukan oleh Pak Sabar setiap dentang pukul lima sore menggema?',
    [
      { kode: 'A', teks: 'Berlari kencang menuruni tangga menuju pintu gerbang keluar', alasanDistraktor: 'Tidak ada tokoh yang terlihat keluar melewati pintu gerbang.' },
      { kode: 'B', teks: 'Merapikan tumpukan berkas arsip yang tak berangka tahun di meja kerjanya', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat pembuka cerita.' },
      { kode: 'C', teks: 'Menjual barang antik kepada pemuda berkacamata retak', alasanDistraktor: 'Bukan rutinitas transaksi jual beli.' },
      { kode: 'D', teks: 'Mengganti lampu gantung tembaga yang mulai berkedip padam', alasanDistraktor: 'Pak Sabar mengambil pulpen, bukan mengganti lampu.' },
    ], 'B',
    'Paragraf 1 menyatakan: "Setiap dentang pukul lima sore menggema dari kubah balai kota, Pak Sabar selalu merapikan tumpukan berkas arsip yang tak berangka tahun."',
    'Paragraf 1: "...Pak Sabar selalu merapikan tumpukan berkas arsip yang tak berangka tahun."'
  ),
  buatSoal('SOAL-SMA-010', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I02', 'Menafsirkan simbolisme tangga melingkar tanpa ujung', stimSMA2, 'Sulit',
    'Apakah makna simbolik dari "tangga melingkar menara perkantoran tua yang berputar tanpa ujung yang pasti" di mana orang-orang berputar dalam spiral langkah seragam?',
    [
      { kode: 'A', teks: 'Kegagalan arsitek gedung dalam membaca cetak biru konstruksi sipil', alasanDistraktor: 'Tafsiran harfiah teknis yang mengabaikan dimensi sastra absurdisme.' },
      { kode: 'B', teks: 'Metafora lingkaran rutinitas mekanistik masyarakat urban yang terjebak dalam siklus kesibukan tanpa kesadaran akan tujuan eksistensial hidupnya', alasanDistraktor: 'Jawaban benar: Menyingkap kritik eksistensial alienasi manusia modern.' },
      { kode: 'C', teks: 'Latihan kebugaran jasmani wajib bagi seluruh pegawai balai kota', alasanDistraktor: 'Tafsiran dangkal yang tidak relevan dengan nada wacana.' },
      { kode: 'D', teks: 'Simbol kemakmuran ekonomi yang terus meningkat tanpa henti', alasanDistraktor: 'Suasana teks sunyi, beku, dan hampa, bukan kemakmuran semarak.' },
    ], 'B',
    'Spiral langkah tanpa ujung melambangkan alienasi manusia dalam rutinitas birokrasi dan modernitas yang menjebak tanpa jalan keluar hakiki.',
    'Paragraf 1: "...tidak ada seorang pun yang pernah terlihat benar-benar melintasi pintu gerbang keluar... berputar dalam spiral langkah kaki yang bergema seragam."'
  ),
  buatSoal('SOAL-SMA-011', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E01', 'Menganalisis kalimat konklusif bertema eksistensialisme', stimSMA2, 'Sulit',
    'Di akhir cerita, Pak Sabar menuliskan kalimat: "ingatan adalah satu-satunya jangkar yang tersisa sebelum ruang ini sepenuhnya lenyap menjadi ketiadaan". Bagaimana tafsiran filosofis Anda terhadap fungsi metafora "jangkar" dalam wacana?',
    [
      { kode: 'A', teks: 'Pak Sabar bermaksud beralih profesi menjadi nakhoda kapal pengangkut arsip', alasanDistraktor: 'Mengartikan jangkar secara harfiah maritim.' },
      { kode: 'B', teks: 'Memori dan kesadaran diri merupakan penambat terakhir martabat manusia agar tidak hanyut dan lenyap tertelan kehampaan rutinitas absurd', alasanDistraktor: 'Jawaban benar: Interpretasi esensial filsafat eksistensialisme teks.' },
      { kode: 'C', teks: 'Menunjukkan bahwa menara tua tersebut akan segera dirobohkan dengan jangkar derek', alasanDistraktor: 'Tafsiran keliru yang tidak menangkap substansi karya sastra.' },
      { kode: 'D', teks: 'Menegaskan bahwa Pak Sabar menderita penyakit lupa ingatan usia lanjut', alasanDistraktor: 'Pak Sabar justru sosok yang menjaga ingatan melalui tulisan.' },
    ], 'B',
    'Jangkar melambangkan penahan agar kesadaran manusia tidak hanyut ke dalam amnesia kolektif penghuni menara yang melupakan alasan keberadaannya.',
    'Paragraf 3: "...ia menyadari bahwa arsip... adalah daftar nama para penghuni menara yang telah melupakan alasan mengapa mereka pertama kali menaiki anak tangga itu... ingatan adalah satu-satunya jangkar..."'
  ),
  buatSoal('SOAL-SMA-012', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I04', 'Menafsirkan atmosfer surealisme pemandangan kota di luar jendela', stimSMA2, 'Sedang',
    'Bagaimanakah penggambaran pemandangan kota metropolitan di luar jendela Pak Sabar yang menunjukkan corak aliran realisme magis/absurdisme?',
    [
      { kode: 'A', teks: 'Kota dilanda demonstrasi buruh yang riuh dengan sirene ambulans', alasanDistraktor: 'Teks menyatakan pemandangan bergerak sunyi tanpa deru mesin.' },
      { kode: 'B', teks: 'Jalan layang bergerak bagai pita bercahaya, sunyi dan tanpa deru mesin yang wajar, seakan-akan semua peristiwa berulang dalam jeda beku', alasanDistraktor: 'Jawaban benar: Sesuai deskripsi surealistik paragraf ketiga.' },
      { kode: 'C', teks: 'Pemandangan taman kota yang dipenuhi anak-anak bermain layang-layang', alasanDistraktor: 'Atmosfer teks bernuansa dingin, arkais, dan terisolasi.' },
      { kode: 'D', teks: 'Kota tenggelam oleh luapan air pasang laut setinggi sepuluh meter', alasanDistraktor: 'Tidak ada bencana air dalam cerita.' },
    ], 'B',
    'Paragraf 3 melukiskan: "jalan layang kota metropolitan bergerak bagai pita bercahaya, sunyi dan tanpa deru mesin yang wajar. Semua peristiwa seakan-akan telah terjadi berulang kali dalam jeda yang beku."',
    'Paragraf 3: "...bergerak bagai pita bercahaya, sunyi dan tanpa deru mesin yang wajar..."'
  ),
  buatSoal('SOAL-SMA-013', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E02', 'Menilai keunikan karakterisasi tokoh pemuda berkacamata retak', stimSMA2, 'Sedang',
    'Apakah fungsi kehadiran tokoh "pemuda berkacamata retak" yang bersuara bagai kertas karton kering dalam alur narasi tersebut?',
    [
      { kode: 'A', teks: 'Sebagai pengantar surat pos kilat dari kantor gubernur jenderal', alasanDistraktor: 'Bukan pengantar pos kilat.' },
      { kode: 'B', teks: 'Sebagai pemantik kesadaran kritis yang menggugah Pak Sabar merefleksikan kesia-siaan pencarian legalitas masa lalu dalam arsipnya', alasanDistraktor: 'Jawaban benar: Pertanyaan retoris pemuda menyentakkan kesadaran batin Pak Sabar.' },
      { kode: 'C', teks: 'Sebagai musuh antagonis yang mencuri pulpen bertinta biru milik Pak Sabar', alasanDistraktor: 'Tokoh ini tidak mencuri pulpen.' },
      { kode: 'D', teks: 'Sebagai teknisi listrik yang memperbaiki lampu gantung tembaga', alasanDistraktor: 'Bukan teknisi listrik.' },
    ], 'B',
    'Pertanyaan pemuda ("Apakah Anda sedang mencari stempel kelayakan masa lalu, Tuan?") menyadarkan Pak Sabar akan hakikat kesia-siaan rutinitas penghuni menara.',
    'Paragraf 2 & 3: "...apakah Anda sedang mencari stempel kelayakan masa lalu... Ia menyadari bahwa arsip yang ia susun sesungguhnya adalah daftar nama para penghuni yang telah melupakan alasan..."'
  ),

  // --- Stimulus SMA-3 (Kecerdasan Buatan dan Hak Cipta) ---
  buatSoal('SOAL-SMA-014', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T01', 'Menemukan premis aksiomatik doktrin hak cipta', stimSMA3, 'Mudah',
    'Berdasarkan wacana tentang Kecerdasan Buatan Generatif, apakah premis aksiomatik klasik yang selama berabad-abad mendasari hukum hak cipta dunia?',
    [
      { kode: 'A', teks: 'Setiap karya digital harus dipasarkan secara gratis di internet terbuka', alasanDistraktor: 'Bukan doktrin hak cipta klasik.' },
      { kode: 'B', teks: 'Orisinalitas karya seni dan sastra lahir dari percikan kreativitas personal manusia (human authorship)', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat kedua paragraf pertama.' },
      { kode: 'C', teks: 'Karya seni hanya diakui jika dilukis di atas kanvas kain sutra alam', alasanDistraktor: 'Pembatasan media yang tidak relevan dengan hukum hak cipta.' },
      { kode: 'D', teks: 'Hak cipta secara otomatis menjadi milik pembuat peranti komputer pertama', alasanDistraktor: 'Doktrin klasik berpusat pada kreator manusia pembuat karya.' },
    ], 'B',
    'Paragraf 1 menyatakan: "doktrin hukum hak cipta dibangun di atas premis aksiomatik bahwa orisinalitas karya seni dan sastra lahir dari percikan kreativitas personal manusia (human authorship)."',
    'Paragraf 1: "...orisinalitas karya seni dan sastra lahir dari percikan kreativitas personal manusia (human authorship)."'
  ),
  buatSoal('SOAL-SMA-015', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I02', 'Menganalisis konflik kepentingan ekstraksi data (data crawling)', stimSMA3, 'Sulit',
    'Mengapa komunitas penulis dan perupa independen menentang dalih "penggunaan wajar" (fair use) yang diajukan oleh korporasi pengembang kecerdasan buatan?',
    [
      { kode: 'A', teks: 'Karena mereka membenci komputer dan ingin kembali menggunakan mesin tik manual', alasanDistraktor: 'Tafsiran simplistis yang meremehkan isu hak ekonomi kreator.' },
      { kode: 'B', teks: 'Karena mesin AI menyerap miliaran karya cipta mereka tanpa izin, atribusi kredit, maupun royalti berkeadilan untuk menguntungkan korporasi secara sepihak', alasanDistraktor: 'Jawaban benar: Esensi persoalan eksploitasi data latih tanpa kompensasi.' },
      { kode: 'C', teks: 'Karena AI tidak mampu menghasilkan karya yang seindah buatan manusia', alasanDistraktor: 'Teks mengakui AI mampu menghasilkan esai dan ilustrasi setara maestro.' },
      { kode: 'D', teks: 'Karena perupa ingin agar seluruh lukisan museum dibakar', alasanDistraktor: 'Pernyataan absurd.' },
    ], 'B',
    'Paragraf 2 menguraikan: "Mesin-mesin pembelajar menyerap miliaran artikel berhak cipta... tanpa atribusi kredit maupun kompensasi royalti... menentang praktik ekstraksi massal sebagai komodifikasi sepihak."',
    'Paragraf 2: "...tanpa atribusi kredit maupun kompensasi royalti yang berkeadilan... bentuk komodifikasi karya intelektual secara sepihak."'
  ),
  buatSoal('SOAL-SMA-016', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E01', 'Menilai tuntutan regulasi hukum modern di era konvergensi', stimSMA3, 'Sedang',
    'Bagaimanakah penilaian Anda terhadap desakan wacana agar regulasi modern merumuskan garis demarkasi tegas antara inspirasi algoritmik yang sah dan pelanggaran hak cipta?',
    [
      { kode: 'A', teks: 'Sangat tepat dan mendesak demi menjaga martabat kemanusiaan dan kepastian nafkah ekonomi berkelanjutan bagi para kreator orisinal', alasanDistraktor: 'Jawaban benar: Sejalan dengan tesis penutup paragraf kedua.' },
      { kode: 'B', teks: 'Tidak perlu diatur karena teknologi selalu benar dan tidak boleh dibatasi oleh undang-undang', alasanDistraktor: 'Mengabaikan prinsip keadilan hukum dan perlindungan hak asasi.' },
      { kode: 'C', teks: 'Sebaiknya seluruh peranti kecerdasan buatan dilarang beroperasi di seluruh dunia', alasanDistraktor: 'Pelarangan total tidak realistis di era digital.' },
      { kode: 'D', teks: 'Regulasi hanya boleh dibuat untuk melindungi karya cipta yang berusia lebih dari seratus tahun', alasanDistraktor: 'Karya kontemporer justru yang paling rentan diekstraksi tanpa royalti.' },
    ], 'A',
    'Paragraf 2 menyimpulkan: "regulasi hukum modern dituntut merumuskan batas demarkasi yang tegas... demi melindungi martabat dan keberlanjutan nafkah para kreator manusia."',
    'Paragraf 2: "...demi melindungi martabat dan keberlanjutan nafkah para kreator manusia."'
  ),
  buatSoal('SOAL-SMA-017', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T04', 'Mengidentifikasi kapabilitas teknis AI generatif pada teks', stimSMA3, 'Mudah',
    'Karya apa sajakah yang menurut wacana mampu disintesis oleh peranti kecerdasan buatan masa kini dalam hitungan detik?',
    [
      { kode: 'A', teks: 'Esai ilmiah, komposisi simfoni, hingga ilustrasi visual yang menyamai kemahiran maestro', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat ketiga paragraf pertama.' },
      { kode: 'B', teks: 'Batu bata bangunan dan semen fondasi rumah bertingkat', alasanDistraktor: 'Material fisik bangunan, bukan sintesis karya digital.' },
      { kode: 'C', teks: 'Padi organik dan buah-buahan segar di kebun raya', alasanDistraktor: 'Hasil pertanian hayati, bukan produk AI generatif.' },
      { kode: 'D', teks: 'Minyak kelapa sawit dan bahan bakar gas alam cair', alasanDistraktor: 'Komoditas energi alam, bukan karya seni/sastra.' },
    ], 'A',
    'Paragraf 1 menyatakan: "...mensintesis esai ilmiah, komposisi simfoni, hingga ilustrasi visual yang menyamai kemahiran maestro hanya dalam hitungan detik..."',
    'Paragraf 1: "...mensintesis esai ilmiah, komposisi simfoni, hingga ilustrasi visual..."'
  ),
  buatSoal('SOAL-SMA-018', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I03', 'Menganalisis pergeseran makna orisinalitas di era digital', stimSMA3, 'Sulit',
    'Apakah implikasi paling mendalam dari kehadiran AI generatif terhadap filosofi penciptaan karya seni?',
    [
      { kode: 'A', teks: 'Penciptaan seni tidak lagi memerlukan emosi, pengalaman batin, dan kerja keras latihan bertahun-tahun jika prompt teks singkat dapat menirunya secara instan', alasanDistraktor: 'Jawaban benar: Implikasi krisis ontologis proses kreasi artistik manusia.' },
      { kode: 'B', teks: 'Manusia akan berhenti mendengarkan musik dan membaca buku selamanya', alasanDistraktor: 'Pernyataan hiperbolis yang tidak berdasar.' },
      { kode: 'C', teks: 'Seluruh museum dunia akan tutup dan diubah menjadi pusat server komputer', alasanDistraktor: 'Prediksi fiktif yang tidak didukung teks.' },
      { kode: 'D', teks: 'Bahasa Indonesia akan punah karena digantikan bahasa mesin biner', alasanDistraktor: 'AI generatif justru memproses bahasa alami manusia.' },
    ], 'A',
    'Teks menyoroti disrupsi fundamental doktrin human authorship ketika mesin dapat memproduksi karya setara maestro dalam hitungan detik.',
    'Paragraf 1: "...disrupsi fundamental dalam doktrin hukum hak kekayaan intelektual global."'
  ),
  buatSoal('SOAL-SMA-019', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E03', 'Menilai dialektika argumen antara inovasi dan perlindungan hak', stimSMA3, 'Sedang',
    'Bagaimanakah sikap bijak seorang akademisi dalam memanfaatkan kemajuan peranti kecerdasan buatan dalam penulisan ilmiah?',
    [
      { kode: 'A', teks: 'Menyalin seluruh teks keluaran AI dan mencantumkan nama sendiri sebagai satu-satunya penulis tunggal', alasanDistraktor: 'Pelanggaran integritas akademik dan plagiarisme.' },
      { kode: 'B', teks: 'Menggunakan AI sebagai mitra pengolah data dan eksplorasi referensi, seraya menjunjung tinggi kejujuran akademik melalui deklarasi penggunaan dan verifikasi fakta primer', alasanDistraktor: 'Jawaban benar: Etika akademik berintegritas di era konvergensi teknologi.' },
      { kode: 'C', teks: 'Menolak membaca hasil riset apa pun yang diproses dengan bantuan komputer', alasanDistraktor: 'Menolak komputasi bertentangan dengan metodologi sains modern.' },
      { kode: 'D', teks: 'Membayar korporasi AI agar merahasiakan penggunaan prompt penulisan', alasanDistraktor: 'Tindakan menutup-nutupi yang mencederai etika ilmiah.' },
    ], 'B',
    'Wacana menekankan batas tegas antara bantuan algoritmik yang sah dan pelanggaran orisinalitas hak cipta.',
    'Paragraf 2: "...merumuskan batas demarkasi yang tegas antara inspirasi algoritmik yang sah dan pelanggaran hak cipta terstruktur..."'
  ),

  // --- Stimulus SMA-4 (Subak dan Tri Hita Karana) ---
  buatSoal('SOAL-SMA-020', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T01', 'Menemukan tiga pilar filosofis Tri Hita Karana', stimSMA4, 'Mudah',
    'Berdasarkan wacana tentang Subak di Bali, apakah tiga pilar keselarasan yang terkandung dalam filosofi sakral Tri Hita Karana?',
    [
      { kode: 'A', teks: 'Keharmonisan dengan Sang Pencipta, hubungan selaras dengan sesama manusia, dan pemuliaan terhadap alam lingkungan', alasanDistraktor: 'Jawaban benar: Dinyatakan eksplisit pada akhir paragraf pertama.' },
      { kode: 'B', teks: 'Kekayaan materiil, jabatan politik di desa, dan kepemilikan senjata perang', alasanDistraktor: 'Bertolak belakang dengan filosofi sakral spiritual Tri Hita Karana.' },
      { kode: 'C', teks: 'Pembangunan hotel wisata, pembukaan jalan tol, dan pembagian dividen saham', alasanDistraktor: 'Bukan pilar filosofis tradisional Bali.' },
      { kode: 'D', teks: 'Penguasaan sumber air hulu, pembendungan air hilir, dan monopoli bibit padi', alasanDistraktor: 'Subak berasaskan keadilan distributif, bukan monopoli.' },
    ], 'A',
    'Paragraf 1 menyatakan: "filosofi sakral Tri Hita Karana, yaitu keharmonisan hubungan antara manusia dengan Sang Pencipta, hubungan selaras dengan sesama manusia, dan pemuliaan terhadap alam lingkungan."',
    'Paragraf 1: "...keharmonisan hubungan antara manusia dengan Sang Pencipta, hubungan selaras dengan sesama manusia, dan pemuliaan terhadap alam lingkungan."'
  ),
  buatSoal('SOAL-SMA-021', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I01', 'Menjelaskan mekanisme ilmiah pemutusan siklus hama', stimSMA4, 'Sedang',
    'Bagaimanakah penerapan kalender tanam serentak dalam sistem Subak terbukti secara ilmiah mampu memutus siklus hidup hama wereng dan tikus sawah?',
    [
      { kode: 'A', teks: 'Karena petani menyemprotkan air belerang dari kawah gunung setiap malam', alasanDistraktor: 'Bukan dengan air belerang gunung.' },
      { kode: 'B', teks: 'Karena dengan waktu tanam dan panen yang serentak, ketersediaan inang makanan bagi hama terputus secara massal saat masa jeda olah tanah, sehingga populasi hama anjlok alami tanpa pestisida kimia', alasanDistraktor: 'Jawaban benar: Prinsip ilmiah pengendalian hama terpadu berbasis kalender tanam.' },
      { kode: 'C', teks: 'Karena tikus dan wereng takut pada upacara ritual di pura bedugul', alasanDistraktor: 'Penjelasan mistis tanpa membedah mekanisme ilmiah biologisnya.' },
      { kode: 'D', teks: 'Karena sawah dikeringkan selama lima tahun berturut-turut', alasanDistraktor: 'Sawah berproduksi rutin antarmusim.' },
    ], 'B',
    'Paragraf 2 menyatakan: "Keserentakan penanaman padi ini terbukti secara ilmiah mampu memutus siklus hidup hama wereng dan tikus sawah secara alami tanpa bergantung pada racun pestisida kimia sintetis."',
    'Paragraf 2: "...terbukti secara ilmiah mampu memutus siklus hidup hama wereng dan tikus sawah secara alami..."'
  ),
  buatSoal('SOAL-SMA-022', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T03', 'Menemukan ancaman terhadap kelestarian warisan budaya dunia', stimSMA4, 'Mudah',
    'Faktor apakah yang menjadi ancaman terbesar bagi eksistensi kelestarian sistem Subak pada abad ke-21 menurut wacana?',
    [
      { kode: 'A', teks: 'Gunung berapi yang meletus setiap bulan tanpa henti', alasanDistraktor: 'Bukan ancaman utama yang disorot wacana.' },
      { kode: 'B', teks: 'Tekanan pariwisata massal dan masifnya alih fungsi lahan sawah basah menjadi vila komersial', alasanDistraktor: 'Jawaban benar: Disebutkan eksplisit pada kalimat ketiga paragraf kedua.' },
      { kode: 'C', teks: 'Penolakan generasi muda untuk memakan beras organik', alasanDistraktor: 'Bukan penyebab berkurangnya lahan sawah.' },
      { kode: 'D', teks: 'Hilangnya pasokan bambu di seluruh kepulauan Nusa Tenggara', alasanDistraktor: 'Tidak berkaitan dengan saluran air Subak.' },
    ], 'B',
    'Paragraf 2 menyatakan: "Namun demikian, tekanan modernisasi pariwisata massal dan masifnya alih fungsi lahan sawah basah menjadi vila komersial kian mengancam eksistensi warisan budaya dunia ini."',
    'Paragraf 2: "...tekanan modernisasi pariwisata massal dan masifnya alih fungsi lahan sawah basah menjadi vila komersial..."'
  ),
  buatSoal('SOAL-SMA-023', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E01', 'Menilai keadilan distributif pembagian air', stimSMA4, 'Sedang',
    'Bagaimanakah penilaian Anda terhadap mekanisme musyawarah mufakat di pura bedugul dalam pembagian debit air persawahan?',
    [
      { kode: 'A', teks: 'Sangat adil dan demokratis karena menjamin petani di hilir mendapatkan kepastian volume air yang setara dengan petani di hulu tanpa dominasi kekuatan modal', alasanDistraktor: 'Jawaban benar: Menghargai asas keadilan distributif tradisi Subak.' },
      { kode: 'B', teks: 'Tidak efektif karena pembagian air seharusnya diserahkan pada mekanisme lelang harga tertinggi', alasanDistraktor: 'Komersialisasi air melanggar hak hidup petani kecil.' },
      { kode: 'C', teks: 'Ketinggalan zaman karena pura desa tidak memiliki sensor digital otomatis', alasanDistraktor: 'Mengabaikan kekuatan modal sosial dan konsensus kultural yang telah teruji seribu tahun.' },
      { kode: 'D', teks: 'Merugikan petani hulu yang semestinya berhak menghabiskan seluruh debit air mata air', alasanDistraktor: 'Egoisme spasial bertentangan dengan filosofi Tri Hita Karana.' },
    ], 'A',
    'Paragraf 2 menggarisbawahi: "pembagian jatah air pada sistem Subak dipandu oleh musyawarah mufakat di pura desa (pura bedugul) yang menjunjung tinggi asas keadilan distributif. Petani di hilir mendapatkan kepastian jatah volume air yang sama adilnya..."',
    'Paragraf 2: "...menjunjung tinggi asas keadilan distributif. Petani di hilir mendapatkan kepastian jatah volume air yang sama adilnya..."'
  ),
  buatSoal('SOAL-SMA-024', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I04', 'Menyimpulkan syarat keberlanjutan Subak di masa depan', stimSMA4, 'Sedang',
    'Berdasarkan kalimat penutup wacana, apa syarat mutlak yang dituntut agar sistem Subak tetap lestari menopang kedaulatan pangan bangsa?',
    [
      { kode: 'A', teks: 'Mengubah seluruh lahan persawahan menjadi kawasan industri manufaktur', alasanDistraktor: 'Memusnahkan lahan pangan.' },
      { kode: 'B', teks: 'Kemauan politik yang berani menegakkan zonasi perlindungan sawah abadi seraya memberikan kompensasi kesejahteraan nyata bagi para petani penjaga pangan', alasanDistraktor: 'Jawaban benar: Sintesis solusi struktural penutup wacana.' },
      { kode: 'C', teks: 'Menghapuskan ritual pura desa agar biaya operasional sawah lebih hemat', alasanDistraktor: 'Ritual adalah perekat ikatan sosial kebersamaan Subak.' },
      { kode: 'D', teks: 'Mewajibkan turis mancanegara ikut membajak sawah setiap hari', alasanDistraktor: 'Bukan kebijakan perlindungan spasial zonasi sawah.' },
    ], 'B',
    'Wacana menyimpulkan: "menuntut kemauan politik yang berani dalam menegakkan zonasi perlindungan sawah abadi seraya memberikan kompensasi kesejahteraan yang nyata bagi para petani penjaga denyut pangan bangsa."',
    'Paragraf 2: "...kemauan politik yang berani dalam menegakkan zonasi perlindungan sawah abadi seraya memberikan kompensasi kesejahteraan yang nyata..."'
  ),
  buatSoal('SOAL-SMA-025', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E03', 'Menganalisis kohesi dan koherensi wacana kebudayaan', stimSMA4, 'Sedang',
    'Bagaimanakah relasi makna antara paragraf pertama dan paragraf kedua dalam wacana "Subak"?',
    [
      { kode: 'A', teks: 'Paragraf pertama memaparkan filosofi luhur Tri Hita Karana, sedangkan paragraf kedua membedah operasional teknis ilmiah sekaligus tantangan nyata masa kini', alasanDistraktor: 'Jawaban benar: Menunjukkan keterpaduan struktur wacana konseptual-aplikatif-kritis.' },
      { kode: 'B', teks: 'Paragraf pertama menentang keberadaan Subak, sedangkan paragraf kedua mendukung alih fungsi lahan', alasanDistraktor: 'Bertentangan dengan pesan pelestarian teks.' },
      { kode: 'C', teks: 'Kedua paragraf saling berkontradiksi mengenai lokasi geografis Bali', alasanDistraktor: 'Tidak ada kontradiksi geografis.' },
      { kode: 'D', teks: 'Paragraf kedua mengulang kata-kata paragraf pertama tanpa menambahkan informasi baru', alasanDistraktor: 'Paragraf kedua menambahkan data teknis hama wereng dan ancaman komersialisasi.' },
    ], 'A',
    'Paragraf 1 mengupas aspek spiritual filosofis dan nilai sejarah, sedangkan Paragraf 2 membedah aplikasi hidrologi, ekologi hama, dan tantangan komersialisasi modern.',
    'Paragraf 1 & 2 terjalin secara kohesif dari filosofi ke realitas praksis.'
  ),

  // --- Soal SMA Lanjutan (Nomor 26 - 40 untuk memenuhi kuota asli 35-40 soal SMA) ---
  buatSoal('SOAL-SMA-026', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T02', 'Menemukan rincian potensi energi baru terbarukan Indonesia', stimSMA1, 'Mudah',
    'Berdasarkan Teks 1 pada wacana jamak transisi energi, Indonesia menduduki peringkat keberlimpahan potensi apakah di dunia?',
    [
      { kode: 'A', teks: 'Potensi batu bara termal nomor satu di dunia', alasanDistraktor: 'Bukan batu bara yang diunggulkan dalam transisi hijau teks.' },
      { kode: 'B', teks: 'Potensi panas bumi (geothermal) nomor dua terbesar di dunia', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat kedua paragraf pertama Teks 1.' },
      { kode: 'C', teks: 'Potensi tenaga angin kutub nomor lima di dunia', alasanDistraktor: 'Indonesia beriklim tropis khatulistiwa.' },
      { kode: 'D', teks: 'Potensi minyak bumi cadangan terbesar di dunia', alasanDistraktor: 'Minyak bumi justru fluktuatif dan diimpor.' },
    ], 'B',
    'Teks 1 Paragraf 1 menyatakan: "...intensitas radiasi surya sepanjang tahun dan potensi panas bumi nomor dua terbesar di dunia."',
    'Teks 1 Paragraf 1: "...potensi panas bumi nomor dua terbesar di dunia."'
  ),
  buatSoal('SOAL-SMA-027', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I01', 'Menyimpulkan dampak penciptaan lapangan kerja hijau', stimSMA1, 'Sedang',
    'Sektor industri baru apakah yang diproyeksikan membuka ratusan ribu lapangan kerja menurut Penulis Teks 1?',
    [
      { kode: 'A', teks: 'Perakitan teknologi bersih, logistik komponen, dan rekayasa kelistrikan modern', alasanDistraktor: 'Jawaban benar: Sesuai paparan paragraf kedua Teks 1.' },
      { kode: 'B', teks: 'Pertambangan minyak bumi lepas pantai perbatasan', alasanDistraktor: 'Pertambangan fosil bukan sektor transformasi hijau.' },
      { kode: 'C', teks: 'Penebangan hutan alam untuk bahan bakar kayu bakar', alasanDistraktor: 'Deforestasi bertentangan dengan komitmen iklim.' },
      { kode: 'D', teks: 'Pabrik rokok konvensional di kawasan perdesaan', alasanDistraktor: 'Tidak relevan dengan dekarbonisasi energi.' },
    ], 'A',
    'Teks 1 Paragraf 2 menyatakan: "Transformasi hijau ini terbukti membuka ratusan ribu lapangan kerja baru di sektor perakitan teknologi bersih, logistik komponen, dan rekayasa kelistrikan modern."',
    'Teks 1 Paragraf 2: "...membuka ratusan ribu lapangan kerja baru di sektor perakitan teknologi bersih, logistik komponen, dan rekayasa kelistrikan modern."'
  ),
  buatSoal('SOAL-SMA-028', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E02', 'Menilai kejelasan alur logika sebab-akibat Teks 1', stimSMA1, 'Sedang',
    'Bagaimanakah keterkaitan logis antara regulasi insentif fiskal dan percepatan kedaulatan energi dalam Teks 1?',
    [
      { kode: 'A', teks: 'Insentif fiskal meringankan beban biaya investasi pengembang swasta sehingga mempercepat adopsi teknologi bersih tanpa hambatan birokrasi', alasanDistraktor: 'Jawaban benar: Alur sebab-akibat kebijakan ekonomi energi pada Teks 1.' },
      { kode: 'B', teks: 'Insentif fiskal digunakan untuk membeli minyak bumi impor dalam jumlah ganda', alasanDistraktor: 'Bertolak belakang dengan misi pelepasan ketergantungan minyak.' },
      { kode: 'C', teks: 'Regulasi tersebut melarang masyarakat memasang panel surya di atap rumah', alasanDistraktor: 'Regulasi justru memberikan insentif percepatan adopsi.' },
      { kode: 'D', teks: 'Insentif diberikan untuk menutup seluruh sekolah kejuruan teknik', alasanDistraktor: 'Tenaga rekayasa kelistrikan justru sangat dibutuhkan.' },
    ], 'A',
    'Teks 1 menyatakan: "regulasi yang memberikan insentif fiskal bagi pengembang teknologi ramah lingkungan harus disahkan tanpa penundaan birokratis yang berlarut-larut."',
    'Teks 1 Paragraf 2: "...regulasi yang memberikan insentif fiskal bagi pengembang teknologi ramah lingkungan harus disahkan..."'
  ),
  buatSoal('SOAL-SMA-029', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T04', 'Menemukan risiko mitigasi pada Teks 2', stimSMA1, 'Mudah',
    'Apa risiko yang diperingatkan oleh Penulis Teks 2 jika instalasi listrik yang telah mapan diganti tanpa perencanaan mitigasi matang?',
    [
      { kode: 'A', teks: 'Krisis pemadaman bergilir yang berisiko melumpuhkan produktivitas ekonomi rakyat jelata di daerah', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat kedua paragraf kedua Teks 2.' },
      { kode: 'B', teks: 'Ledakan jumlah tangkapan ikan di laut bebas', alasanDistraktor: 'Bukan risiko pemadaman listrik.' },
      { kode: 'C', teks: 'Penurunan drastis harga jual beras organik', alasanDistraktor: 'Tidak relevan dengan risiko jaringan listrik.' },
      { kode: 'D', teks: 'Terjadinya gempa bumi tektonik di seluruh pulau', alasanDistraktor: 'Gempa tektonik disebabkan pergeseran lempeng bumi.' },
    ], 'A',
    'Teks 2 Paragraf 2 memperingatkan: "Mengganti instalasi yang telah mapan tersebut tanpa perencanaan mitigasi risiko yang matang berisiko memicu krisis pemadaman bergilir yang melumpuhkan produktivitas ekonomi rakyat jelata."',
    'Teks 2 Paragraf 2: "...berisiko memicu krisis pemadaman bergilir yang melumpuhkan produktivitas ekonomi rakyat jelata."'
  ),
  buatSoal('SOAL-SMA-030', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I02', 'Menafsirkan diksi intermiten dan teknologi baterai', stimSMA1, 'Sedang',
    'Mengapa teknologi baterai berkapasitas gigawatt dinilai Penulis Teks 2 berpotensi membebani tarif dasar listrik rakyat berpenghasilan rendah?',
    [
      { kode: 'A', teks: 'Karena biaya investasi peranti baterai skala masif masih luar biasa mahal sehingga biaya modalnya dapat terbeban ke komponen tarif konsumen', alasanDistraktor: 'Jawaban benar: Analisis ekonomi pembebanan modal infrastruktur ke tarif dasar.' },
      { kode: 'B', teks: 'Karena baterai gigawatt menggunakan bahan bakar bensin beroktan tinggi', alasanDistraktor: 'Baterai menyimpan listrik elektrokimia, bukan bensin.' },
      { kode: 'C', teks: 'Karena warga diwajibkan membeli baterai sendiri setiap hari di toko', alasanDistraktor: 'Baterai skala jaringan dipasang di gardu induk, bukan dibeli harian oleh warga.' },
      { kode: 'D', teks: 'Karena baterai tersebut hanya dapat digunakan saat terjadi banjir bandang', alasanDistraktor: 'Baterai jaringan beroperasi harian untuk stabilisasi tegangan.' },
    ], 'A',
    'Teks 2 menyatakan: "teknologi baterai berkapasitas gigawatt membutuhkan biaya investasi luar biasa mahal yang berpotensi membebani tarif dasar listrik masyarakat berpenghasilan rendah..."',
    'Teks 2 Paragraf 1: "...membutuhkan biaya investasi luar biasa mahal yang berpotensi membebani tarif dasar listrik..."'
  ),
  buatSoal('SOAL-SMA-031', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E01', 'Mengevaluasi sikap penulis kedua terhadap kemandirian daerah', stimSMA1, 'Sedang',
    'Bagaimanakah penilaian Anda terhadap gagasan Teks 2 tentang perlunya melatih teknisi lokal agar daerah mandiri mengelola asetnya?',
    [
      { kode: 'A', teks: 'Sangat visioner karena mencegah ketergantungan abadi daerah terpencil pada konsultan atau teknisi luar saat terjadi gangguan teknis mendadak', alasanDistraktor: 'Jawaban benar: Menghargai transfer keahlian dan kedaulatan sumber daya lokal.' },
      { kode: 'B', teks: 'Tidak penting karena teknisi luar kota dapat dipanggil menggunakan pesawat setiap saat', alasanDistraktor: 'Biaya transportasi luar kota sangat mahal dan memakan waktu lama saat darurat.' },
      { kode: 'C', teks: 'Merugikan lembaga sertifikasi internasional di ibu kota', alasanDistraktor: 'Pelatihan lokal justru bagian dari sertifikasi keahlian bangsa.' },
      { kode: 'D', teks: 'Gagasan tersebut mustahil karena masyarakat kepulauan tidak memiliki kemampuan belajar mesin', alasanDistraktor: 'Pandangan merendahkan potensi talenta anak bangsa.' },
    ], 'A',
    'Teks 2 menekankan: "melatih teknisi lokal agar daerah mandiri mengelola asetnya."',
    'Teks 2 Paragraf 2: "...seraya melatih teknisi lokal agar daerah mandiri mengelola asetnya."'
  ),
  buatSoal('SOAL-SMA-032', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T01', 'Mengidentifikasi objek yang digenggam para penghuni menara', stimSMA2, 'Mudah',
    'Benda apakah yang terkatup rapat di dada orang-orang saat bergegas melangkah turun di tangga melingkar menara arkais?',
    [
      { kode: 'A', teks: 'Map hitam', alasanDistraktor: 'Jawaban benar: Disebutkan di paragraf pertama cerita.' },
      { kode: 'B', teks: 'Kotak perhiasan emas', alasanDistraktor: 'Bukan kotak perhiasan.' },
      { kode: 'C', teks: 'Buku telepon tebal berdebu', alasanDistraktor: 'Tidak sesuai dengan teks wacana.' },
      { kode: 'D', teks: 'Kamera foto saku', alasanDistraktor: 'Benda yang digenggam adalah map hitam.' },
    ], 'A',
    'Paragraf 1 menyatakan: "Orang-orang bergegas melangkah turun dengan map hitam terkatup rapat di dada mereka..."',
    'Paragraf 1: "...dengan map hitam terkatup rapat di dada mereka..."'
  ),
  buatSoal('SOAL-SMA-033', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I02', 'Menafsirkan makna tumpukan berkas tak berangka tahun', stimSMA2, 'Sedang',
    'Mengapa tumpukan berkas arsip yang disusun Pak Sabar dideskripsikan "tak berangka tahun"?',
    [
      { kode: 'A', teks: 'Karena Pak Sabar lupa mencatat tanggal kalender pada buku catatannya', alasanDistraktor: 'Tafsiran keliru yang mengabaikan simbolisme waktu sastra.' },
      { kode: 'B', teks: 'Melambangkan kebekuan waktu yang tak berujung di mana rutinitas birokrasi mengaburkan pergantian masa dan meniadakan perkembangan bermakna', alasanDistraktor: 'Jawaban benar: Waktu yang kehilangan arti historis dalam dunia absurdisme.' },
      { kode: 'C', teks: 'Karena arsip tersebut adalah dokumen kalender abad ke-30 yang belum dicetak', alasanDistraktor: 'Bukan fiksi ilmiah masa depan.' },
      { kode: 'D', teks: 'Supaya arsip tersebut dapat dimusnahkan tanpa melanggar undang-undang kearsipan', alasanDistraktor: 'Bukan dalih penghancuran dokumen.' },
    ], 'B',
    'Ketiadaan angka tahun menggarisbawahi jeda waktu beku di mana peristiwa berulang dalam siklus seragam tanpa kebaruan hidup.',
    'Paragraf 1: "...berkas arsip yang tak berangka tahun... Semua peristiwa seakan-akan telah terjadi berulang kali dalam jeda yang beku."'
  ),
  buatSoal('SOAL-SMA-034', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E01', 'Menganalisis koherensi tema eksistensialisme dalam karya fiksi', stimSMA2, 'Sulit',
    'Bagaimanakah keterikatan tema antara tindakan Pak Sabar menulis kalimat penutup di halaman kosong dengan pesan eksistensial karya?',
    [
      { kode: 'A', teks: 'Tindakan menulis merupakan deklarasi eksistensial perlawanan individu untuk merebut kembali kesadaran batin di hadapan kepunahan makna', alasanDistraktor: 'Jawaban benar: Meneguhkan hakikat menulis sebagai tindakan pemaknaan hidup.' },
      { kode: 'B', teks: 'Pak Sabar hanya ingin menghabiskan tinta pulpennya sebelum pulang kantor', alasanDistraktor: 'Tafsiran sepele yang mereduksi bobot filosofis cerita.' },
      { kode: 'C', teks: 'Menunjukkan kepatuhan mutlak pegawai terhadap perintah atasan balai kota', alasanDistraktor: 'Pak Sabar menulis atas dorongan perenungan batinnya sendiri.' },
      { kode: 'D', teks: 'Merupakan bukti bahwa Pak Sabar merusak arsip negara yang dilarang dicoret', alasanDistraktor: 'Menulis di halaman kosong adalah simbol penciptaan makna baru.' },
    ], 'A',
    'Ketika lampu gantung mulai padam dan ruang terancam lenyap, menuliskan pemaknaan ingatan adalah bentuk peneguhan eksistensi manusia yang merdeka.',
    'Paragraf 3: "...mengambil pulpen bertinta biru miliknya, lalu menuliskan satu kalimat pendek... ingatan adalah satu-satunya jangkar yang tersisa..."'
  ),
  buatSoal('SOAL-SMA-035', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T03', 'Mengidentifikasi istilah data crawling pada wacana kecerdasan buatan', stimSMA3, 'Mudah',
    'Istilah teknis apakah yang digunakan dalam wacana untuk menyebut aktivitas mesin kecerdasan buatan dalam menyerap data karya berhak cipta secara masif di internet?',
    [
      { kode: 'A', teks: 'Data crawling', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat pertama paragraf kedua.' },
      { kode: 'B', teks: 'Data encryption', alasanDistraktor: 'Encryption adalah enkripsi pengamanan data.' },
      { kode: 'C', teks: 'Data deletion', alasanDistraktor: 'Deletion adalah penghapusan data.' },
      { kode: 'D', teks: 'Data formatting', alasanDistraktor: 'Formatting adalah penataan format file.' },
    ], 'A',
    'Paragraf 2 menyatakan: "Persoalan krusial bermuara pada fase pelatihan data (data crawling) tanpa izin pemilik karya."',
    'Paragraf 2: "...fase pelatihan data (data crawling) tanpa izin pemilik karya."'
  ),
  buatSoal('SOAL-SMA-036', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I01', 'Menyimpulkan ancaman AI terhadap keberlanjutan profesi seniman', stimSMA3, 'Sedang',
    'Mengapa komunitas seniman independen menganggap praktik ekstraksi massal tanpa royalti mengancam keberlanjutan nafkah mereka?',
    [
      { kode: 'A', teks: 'Karena gaya visual unik yang mereka kembangkan selama puluhan tahun dapat ditiru instan oleh publik tanpa mereka menerima kompensasi ekonomi apa pun', alasanDistraktor: 'Jawaban benar: Kerugian ekonomi akibat kanibalisasi komersial karya orisinal.' },
      { kode: 'B', teks: 'Karena toko cat minyak dan kanvas lukis akan ditutup oleh pemerintah', alasanDistraktor: 'Bukan masalah ketersediaan cat minyak.' },
      { kode: 'C', teks: 'Karena lukisan fisik akan memudar jika difoto oleh kamera digital', alasanDistraktor: 'Bukan persoalan lunturnya pigmen lukisan fisik.' },
      { kode: 'D', teks: 'Karena komputer membutuhkan biaya listrik yang dibebankan kepada seniman', alasanDistraktor: 'Biaya server dibayar korporasi teknologi, bukan seniman.' },
    ], 'A',
    'Paragraf 2 menguraikan: "komodifikasi karya intelektual secara sepihak... melindungi martabat dan keberlanjutan nafkah para kreator manusia."',
    'Paragraf 2: "...komodifikasi karya intelektual secara sepihak... demi melindungi martabat dan keberlanjutan nafkah para kreator manusia."'
  ),
  buatSoal('SOAL-SMA-037', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E01', 'Menilai keadilan pembagian keuntungan ekonomi platform AI', stimSMA3, 'Sedang',
    'Bagaimanakah pandangan etis yang adil terkait skema royalti antara korporasi pengembang AI dan para kreator data latih?',
    [
      { kode: 'A', teks: 'Kreator yang karyanya terbukti digunakan sebagai korpus pelatihan model AI selayaknya mendapatkan skema royalti lisensi atau pembagian keuntungan dari monetisasi platform komersial tersebut', alasanDistraktor: 'Jawaban benar: Prinsip keadilan distributif hak kekayaan intelektual digital.' },
      { kode: 'B', teks: 'Seluruh seniman harus membayar denda kepada korporasi teknologi karena telah diberi inspirasi', alasanDistraktor: 'Pandangan eksploitatif yang terbalik.' },
      { kode: 'C', teks: 'Karya seni yang diunggah ke internet harus otomatis dianggap tidak memiliki pemilik sah', alasanDistraktor: 'Mengunggah ke internet bukan berarti melepaskan hak cipta moral dan ekonomi.' },
      { kode: 'D', teks: 'Korporasi teknologi boleh mengambil karya siapa pun tanpa batas karena demi kemajuan sains', alasanDistraktor: 'Kemajuan sains tidak boleh mengorbankan hak asasi dan martabat kemanusiaan.' },
    ], 'A',
    'Teks menuntut perumusan kompensasi royalti berkeadilan dan atribusi kredit yang layak bagi para pemilik karya intelektual.',
    'Paragraf 2: "...tanpa atribusi kredit maupun kompensasi royalti yang berkeadilan..."'
  ),
  buatSoal('SOAL-SMA-038', 'SMA', 11, 'Pemahaman Tekstual', 'SMA-T02', 'Menemukan nama pura musyawarah air Subak', stimSMA4, 'Mudah',
    'Di manakah musyawarah mufakat pembagian jatah air pada sistem Subak diselenggarakan menurut wacana?',
    [
      { kode: 'A', teks: 'Di pura desa (pura bedugul)', alasanDistraktor: 'Jawaban benar: Dinyatakan pada kalimat pertama paragraf kedua.' },
      { kode: 'B', teks: 'Di kantor bupati kabupaten ibu kota', alasanDistraktor: 'Musyawarah dipandu di pura desa setempat.' },
      { kode: 'C', teks: 'Di restoran hotel bintang lima kawasan pantai', alasanDistraktor: 'Bukan tempat musyawarah petani Subak.' },
      { kode: 'D', teks: 'Di gedung balai lelang komoditas pangan internasional', alasanDistraktor: 'Musyawarah berlandaskan spiritualitas lokal.' },
    ], 'A',
    'Paragraf 2 menyatakan: "...dipandu oleh musyawarah mufakat di pura desa (pura bedugul) yang menjunjung tinggi asas keadilan distributif."',
    'Paragraf 2: "...musyawarah mufakat di pura desa (pura bedugul)..."'
  ),
  buatSoal('SOAL-SMA-039', 'SMA', 11, 'Pemahaman Inferensial', 'SMA-I03', 'Menghubungkan nilai kearifan lokal dengan kedaulatan pangan', stimSMA4, 'Sedang',
    'Apakah kaitan langsung antara ketahanan sistem Subak dengan kedaulatan pangan beras nasional?',
    [
      { kode: 'A', teks: 'Subak membuktikan bahwa kearifan lokal mampu menjaga produktivitas sawah berkelanjutan secara mandiri tanpa merusak ekologi tanah dengan pestisida berlebih', alasanDistraktor: 'Jawaban benar: Sinergi kearifan budaya dan kemandirian pangan ekologis.' },
      { kode: 'B', teks: 'Subak mewajibkan seluruh beras Bali dijual ke luar negeri dengan harga dolar', alasanDistraktor: 'Subak menjaga pasokan beras lokal dan nasional.' },
      { kode: 'C', teks: 'Subak mengganti tanaman padi dengan komoditas kelapa sawit perkebunan', alasanDistraktor: 'Subak mengelola sawah padi basah berterasering.' },
      { kode: 'D', teks: 'Subak menolak penggunaan air dari danau kawah pegunungan', alasanDistraktor: 'Air Subak bersumber dari danau kawah dan mata air pegunungan.' },
    ], 'A',
    'Sistem Subak menjaga denyut pangan bangsa secara berkelanjutan dan ramah lingkungan.',
    'Paragraf 2: "...tanpa bergantung pada racun pestisida kimia sintetis... para petani penjaga denyut pangan bangsa."'
  ),
  buatSoal('SOAL-SMA-040', 'SMA', 11, 'Evaluasi dan Apresiasi', 'SMA-E01', 'Merumuskan refleksi kritis atas komodifikasi budaya', stimSMA4, 'Sulit',
    'Mengapa eksploitasi lanskap terasering sawah untuk pariwisata swafoto tanpa memperhatikan kesejahteraan petani disebut sebagai bentuk komodifikasi budaya yang dangkal?',
    [
      { kode: 'A', teks: 'Karena pariwisata hanya menikmati keindahan visual Subak sebagai latar foto komersial, seraya membiarkan petani terdesak biaya hidup dan terancam alih fungsi lahan', alasanDistraktor: 'Jawaban benar: Refleksi kritis yang tajam atas ketimpangan industri pariwisata vs nasib petani.' },
      { kode: 'B', teks: 'Karena turis tidak memakai pakaian adat saat mengambil foto di sawah', alasanDistraktor: 'Isu fundamental adalah ketidakadilan ekonomi dan konversi lahan, bukan sekadar pakaian.' },
      { kode: 'C', teks: 'Karena foto sawah terasering tidak laku dijual di media sosial', alasanDistraktor: 'Bukan masalah laku tidaknya foto swafoto.' },
      { kode: 'D', teks: 'Karena petani tidak diperbolehkan berbicara dengan para wisatawan asing', alasanDistraktor: 'Bukan larangan berbicara, melainkan kompensasi kesejahteraan yang diabaikan.' },
    ], 'A',
    'Wacana mengkritisi: "tekanan modernisasi pariwisata massal dan masifnya alih fungsi lahan sawah basah menjadi vila komersial kian mengancam eksistensi warisan budaya dunia ini... menuntut kompensasi kesejahteraan yang nyata bagi para petani penjaga denyut pangan bangsa."',
    'Paragraf 2: "...masifnya alih fungsi lahan sawah basah menjadi vila komersial... menuntut... kompensasi kesejahteraan yang nyata..."'
  ),
];

// ==============================================================
// 3. PAKET RESMI TERSTANDAR TKA (SD: 25-30, SMP: 30-35, SMA: 35-40)
// ==============================================================

export const SEED_SOAL: SoalItem[] = [
  ...SOAL_SD_BANK,
  ...SOAL_SMP_BANK,
  ...SOAL_SMA_BANK,
];

export const SEED_PAKET: PaketLatihan[] = [
  // --- SD PACKAGES (Range Asli 25 - 30 Soal) ---
  {
    id: 'PKT-SD-SIM-01',
    judul: 'Simulasi Resmi TKA Literasi SD/MI 2026 (Format Penuh 30 Soal)',
    jenjang: 'SD',
    kelas: 5,
    deskripsi: 'Simulasi resmi standar penuh TKA SD (30 butir soal, 60 menit) dengan sebaran wacana fabel, teks prosedur, sains ramah anak, dan fauna endemik. Soal dan stimulus terpadu utuh.',
    waktuMenit: 60,
    soalIds: SOAL_SD_BANK.slice(0, 30).map(s => s.id),
    isSimulasi: true,
    isDemoAllowed: false,
    createdAt: '2026-03-25T08:00:00Z',
  },
  {
    id: 'PKT-SD-SIM-02',
    judul: 'Simulasi Mandiri TKA Literasi SD/MI (Format Ringkas 25 Soal)',
    jenjang: 'SD',
    kelas: 5,
    deskripsi: 'Simulasi mandiri standar ringkas TKA SD (25 butir soal, 50 menit) menguji 3 kompetensi membaca: tekstual, inferensial, dan apresiatif dengan stimulus terintegrasi.',
    waktuMenit: 50,
    soalIds: SOAL_SD_BANK.slice(0, 25).map(s => s.id),
    isSimulasi: true,
    isDemoAllowed: false,
    createdAt: '2026-03-25T08:15:00Z',
  },
  {
    id: 'PKT-SD-LAT-01',
    judul: 'Latihan Literasi SD/MI: Karakter & Budi Pekerti (Demo Terbuka)',
    jenjang: 'SD',
    kelas: 5,
    deskripsi: 'Paket latihan terbuka 10 butir soal berbasis wacana kejujuran dan daur ulang ramah lingkungan. Dilengkapi pembahasan instan dan kutipan bukti teks.',
    waktuMenit: 25,
    soalIds: SOAL_SD_BANK.slice(0, 10).map(s => s.id),
    isSimulasi: false,
    isDemoAllowed: true,
    createdAt: '2026-03-25T08:30:00Z',
  },

  // --- SMP PACKAGES (Range Asli 30 - 35 Soal) ---
  {
    id: 'PKT-SMP-SIM-01',
    judul: 'Simulasi Resmi TKA Literasi SMP/MTs 2026 (Format Penuh 35 Soal)',
    jenjang: 'SMP',
    kelas: 8,
    deskripsi: 'Simulasi resmi standar penuh TKA SMP (35 butir soal, 75 menit) berbasis teks eksplanasi maritim mangrove, prosa Menoreh, pertanian vertikal, karang Bunaken, dan Satelit Satria-1.',
    waktuMenit: 75,
    soalIds: SOAL_SMP_BANK.slice(0, 35).map(s => s.id),
    isSimulasi: true,
    isDemoAllowed: false,
    createdAt: '2026-03-25T09:00:00Z',
  },
  {
    id: 'PKT-SMP-SIM-02',
    judul: 'Simulasi Mandiri TKA Literasi SMP/MTs (Format 30 Soal)',
    jenjang: 'SMP',
    kelas: 8,
    deskripsi: 'Simulasi mandiri berwaktu TKA SMP (30 butir soal, 65 menit) mengukur penalaran kausalitas, simpulan tersirat, dan evaluasi argumen lingkungan maritim.',
    waktuMenit: 65,
    soalIds: SOAL_SMP_BANK.slice(0, 30).map(s => s.id),
    isSimulasi: true,
    isDemoAllowed: false,
    createdAt: '2026-03-25T09:15:00Z',
  },
  {
    id: 'PKT-SMP-LAT-01',
    judul: 'Latihan Literasi SMP/MTs: Sains & Kebudayaan (Demo Terbuka)',
    jenjang: 'SMP',
    kelas: 8,
    deskripsi: 'Paket latihan terbuka 12 butir soal mengasah pemahaman tekstual dan inferensial mangrove dan prosa tradisi Menoreh dengan bukti tekstual terintegrasi.',
    waktuMenit: 30,
    soalIds: SOAL_SMP_BANK.slice(0, 12).map(s => s.id),
    isSimulasi: false,
    isDemoAllowed: true,
    createdAt: '2026-03-25T09:30:00Z',
  },

  // --- SMA PACKAGES (Range Asli 35 - 40 Soal) ---
  {
    id: 'PKT-SMA-SIM-01',
    judul: 'Simulasi Resmi TKA Literasi SMA/Sederajat 2026 (Format Penuh 40 Soal)',
    jenjang: 'SMA',
    kelas: 11,
    deskripsi: 'Simulasi resmi standar komprehensif TKA SMA (40 butir soal, 90 menit) menguji komparasi teks jamak transisi energi, prosa fiksi eksistensialis, etika AI generatif, dan revitalisasi Subak Bali.',
    waktuMenit: 90,
    soalIds: SOAL_SMA_BANK.slice(0, 40).map(s => s.id),
    isSimulasi: true,
    isDemoAllowed: false,
    createdAt: '2026-03-25T10:00:00Z',
  },
  {
    id: 'PKT-SMA-SIM-02',
    judul: 'Simulasi Mandiri TKA Literasi SMA/Sederajat (Format 35 Soal)',
    jenjang: 'SMA',
    kelas: 11,
    deskripsi: 'Simulasi mandiri resmi TKA SMA (35 butir soal, 80 menit) menguji daya kritis antarteks, validitas klaim, kebahasaan kompleks, dan apresiasi sastra kontemporer.',
    waktuMenit: 80,
    soalIds: SOAL_SMA_BANK.slice(0, 35).map(s => s.id),
    isSimulasi: true,
    isDemoAllowed: false,
    createdAt: '2026-03-25T10:15:00Z',
  },
  {
    id: 'PKT-SMA-LAT-01',
    judul: 'Latihan Literasi SMA/Sederajat: Analisis Teks Jamak (Demo Terbuka)',
    jenjang: 'SMA',
    kelas: 11,
    deskripsi: 'Paket latihan terbuka 12 butir soal mengomparasikan perspektif dual teks transisi energi dan fiksi menara arkais dengan pembahasan analitis terpadu.',
    waktuMenit: 35,
    soalIds: SOAL_SMA_BANK.slice(0, 12).map(s => s.id),
    isSimulasi: false,
    isDemoAllowed: true,
    createdAt: '2026-03-25T10:30:00Z',
  },
];
