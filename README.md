# JOIN SLD

**JOIN SLD** adalah aplikasi berbasis web yang dirancang untuk memudahkan pengelolaan anggota dalam grup Telegram. Aplikasi ini memiliki fitur pendaftaran yang memungkinkan verifikasi anggota menggunakan Nomor Induk Pegawai (NIP) dan otomatisasi undangan ke grup Telegram. Solusi ini cocok digunakan oleh organisasi atau instansi yang memerlukan sistem validasi identitas secara otomatis dan pengelolaan anggota secara efisien.

Dengan menggunakan teknologi terkini dan fitur-fitur canggih, proyek ini bertujuan untuk memberikan kemudahan dalam mengelola keanggotaan, memastikan keamanan data anggota, serta memberikan pengalaman pengguna yang mulus dan responsif. Setiap langkah dalam aplikasi ini dirancang untuk memberikan kenyamanan bagi administrator grup dalam melakukan verifikasi anggota dan pengelolaan grup Telegram mereka.

## Fitur

### 1\. Validasi Format NIP

Fitur validasi NIP (Nomor Induk Pegawai) memastikan hanya pengguna dengan identitas yang sah yang dapat mendaftar untuk bergabung dengan grup Telegram. Aplikasi ini memverifikasi apakah NIP yang dimasukkan sesuai dengan format yang ditentukan, meningkatkan keamanan dan memastikan bahwa hanya anggota yang terverifikasi yang diterima.

### 2\. Form Pendaftaran Terstruktur

Form pendaftaran dirancang secara terstruktur untuk memudahkan pengguna dalam mengisi data yang diperlukan. Pengguna hanya perlu mengisi informasi dasar mereka, seperti nama lengkap, NIP, dan informasi lainnya, untuk memulai proses pendaftaran. Form ini juga memiliki elemen validasi yang memastikan bahwa data yang dimasukkan sesuai dengan ketentuan.

### 3\. Integrasi SweetAlert2

SweetAlert2 digunakan untuk memberikan notifikasi yang lebih menarik dan interaktif. Notifikasi ini memberikan feedback langsung kepada pengguna mengenai status pendaftaran mereka, seperti pemberitahuan sukses atau kesalahan. Dengan antarmuka yang lebih bersahabat, pengguna dapat memahami proses dengan lebih mudah.

### 4\. Halaman Invite Otomatis

Fitur undangan otomatis memungkinkan administrator untuk mengundang anggota yang telah terdaftar ke dalam grup Telegram dengan mudah. Setelah anggota terverifikasi, aplikasi ini akan menghasilkan tautan undangan otomatis yang dapat dikirimkan langsung ke anggota melalui berbagai platform komunikasi. Hal ini menghemat waktu dan tenaga administrator dalam mengelola undangan.

### 5\. Responsive Design

Aplikasi ini dirancang dengan prinsip mobile-first, memastikan bahwa aplikasi dapat diakses dengan mudah dari perangkat apa pun, baik desktop, tablet, maupun ponsel. Tampilan aplikasi akan menyesuaikan diri dengan ukuran layar perangkat, memberikan pengalaman pengguna yang optimal di berbagai platform.

## Teknologi

* **Next.js 15:** Next.js adalah framework React yang menawarkan kemampuan seperti rendering sisi server dan statis, serta pengoptimalan otomatis untuk SEO dan performa. Versi 15 dari Next.js digunakan dalam proyek ini untuk memastikan performa tinggi dan pengelolaan aplikasi yang lebih efisien.
* **TypeScript:** TypeScript digunakan untuk meningkatkan kualitas kode dengan menyediakan tipe statis. Dengan TypeScript, pengembangan aplikasi menjadi lebih terstruktur dan terhindar dari kesalahan yang dapat muncul saat runtime, memungkinkan pengembang untuk menulis kode yang lebih aman dan mudah dipelihara.
* **Tailwind CSS:** Tailwind CSS adalah framework CSS berbasis utility yang memungkinkan pembuatan desain responsif dan cepat dengan menggunakan kelas-kelas utilitas. Dengan Tailwind, pengembang dapat dengan mudah menyesuaikan desain aplikasi sesuai kebutuhan tanpa menulis CSS kustom secara manual.
* **DaisyUI:** DaisyUI adalah plugin UI untuk Tailwind CSS yang menyediakan berbagai komponen desain siap pakai, seperti tombol, form, dan card, dengan tema yang mudah disesuaikan. Penggunaan DaisyUI memungkinkan pengembang untuk mempercepat proses pengembangan UI tanpa harus membuat komponen dari awal.
* **SweetAlert2:** SweetAlert2 adalah pustaka JavaScript untuk menampilkan pesan atau notifikasi yang lebih menarik dan interaktif. Pustaka ini memberikan pengalaman pengguna yang lebih baik dibandingkan dengan alert standar browser, dengan mendukung berbagai fitur seperti ikon, tombol, dan animasi.

## Prasyarat

Sebelum memulai proyek ini, pastikan bahwa Anda telah menginstal perangkat lunak berikut:

* **Node.js 18+:** Proyek ini membutuhkan versi Node.js 18 atau lebih baru. Node.js adalah runtime JavaScript yang memungkinkan Anda untuk menjalankan aplikasi berbasis JavaScript di server.
* **npm/yarn:** Anda dapat menggunakan npm (Node Package Manager) atau yarn untuk mengelola dependensi proyek. Kedua manajer paket ini memungkinkan Anda untuk menginstal, mengelola, dan mengatur versi pustaka yang digunakan dalam proyek ini.

## Instalasi

Untuk menginstal dan menjalankan proyek ini, ikuti langkah-langkah berikut:

1. **Clone repository:** Gunakan perintah Git untuk mengkloning repository ke komputer lokal Anda:

    ```bash
    git clone https://github.com/idugeni/join-sld.git
    ```

2. **Install dependensi:** Setelah berhasil mengkloning repository, masuk ke direktori proyek dan instal semua dependensi yang dibutuhkan:

    ```bash
    cd join-sld
    npm install
    ```

3. **Jalankan aplikasi:** Setelah instalasi selesai, jalankan aplikasi menggunakan perintah berikut:

    ```bash
    npm run dev
    ```

    Aplikasi akan berjalan pada **<http://localhost:3000>**. Anda dapat membuka browser dan memulai penggunaan aplikasi.

## Kontribusi

Kami sangat menghargai kontribusi dari para pengembang lain yang tertarik untuk memperbaiki dan mengembangkan proyek ini. Untuk berkontribusi, Anda dapat membuka **issues** atau mengirimkan **pull request**. Pastikan untuk mengikuti pedoman pengembangan dan melakukan pengujian sebelum mengirimkan perubahan Anda.

Jika Anda menemukan bug atau memiliki fitur baru yang ingin ditambahkan, silakan buka **issue** terlebih dahulu untuk mendiskusikan perubahan yang diusulkan.

## Lisensi

Proyek ini dilisensikan di bawah **MIT License**, yang memungkinkan Anda untuk mengedit, mendistribusikan, dan menggunakan kode sumber sesuai kebutuhan. Lisensi ini memberikan fleksibilitas tinggi dalam penggunaan proyek ini, baik untuk tujuan pribadi maupun komersial.
