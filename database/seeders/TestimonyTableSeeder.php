<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimony;

class TestimonyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // category: 'pelayanan', 'unit', 'kebersihan', 'kenyamanan'

        $testimonies = [
            [
                'name' => 'Joko Prabowo',
                'email' => 'jokoprabowo@gmail.com',
                'testimony' => 'Sangat puas dengan mobil yang disewakan. Kondisinya sangat baik dan bensinnya juga irit. Layanan petugas rental mobil juga sangat ramah dan responsif. Saya pasti akan menggunakan layanan ini lagi buat bepergian',
                'rating' => 5,
            ],
            // [
            //     'name' => 'Linda Susanti',
            //     'email' => 'lindasusanti@gmail.com',
            //     'testimony' => 'Mobil yang saya sewa sangat nyaman dan bersih. Proses penyewaan juga sangat mudah dan cepat. Sangat direkomendasikan!',
            //     'rating' => 4,
            // ],
            // [
            //     'name' => 'Rudi Hidayat',
            //     'email' => 'rudihidayat@gmail.com',
            //     'testimony' => 'Kebersihan mobil benar-benar terjaga dengan baik. Saya merasa nyaman dan aman selama perjalanan. Terima kasih atas pelayanan yang baik!',
            //     'rating' => 5,
            // ],
            // [
            //     'name' => 'Anita Wijaya',
            //     'email' => 'anitawijaya@gmail.com',
            //     'testimony' => 'Mobil yang saya sewa memberikan kenyamanan luar biasa. Interior mobil sangat bersih dan terawat. Saya senang menggunakan layanan ini!',
            //     'rating' => 4,
            // ],
            // [
            //     'name' => 'Siti Aisyah',
            //     'email' => 'siti.aisyah@gmail.com',
            //     'testimony' => 'Pelayanan dari tim sangat memuaskan. Mereka sangat ramah dan membantu. Saya merasa didukung selama proses penyewaan. Terima kasih banyak!',
            //     'rating' => 5,
            // ],
            // [
            //     'name' => 'Hendri Susanto',
            //     'email' => 'hendrisusanto@gmail.com',
            //     'testimony' => 'Unit yang saya sewa dalam kondisi prima. Tidak ada masalah selama perjalanan, dan petugas sangat profesional. Saya akan merekomendasikan kepada teman-teman saya.',
            //     'rating' => 4,
            // ],
            // [
            //     'name' => 'Dewi Pratiwi',
            //     'email' => 'dewipratiwi@gmail.com',
            //     'testimony' => 'Kebersihan mobil benar-benar menjadi prioritas di sini. Saya merasa aman dan nyaman dengan standar kebersihan yang tinggi. Terima kasih banyak!',
            //     'rating' => 5,
            // ],
            // [
            //     'name' => 'Budi Santoso',
            //     'email' => 'budisantoso@gmail.com',
            //     'testimony' => 'Mobil yang saya sewa memberikan kenyamanan luar biasa. Interior yang nyaman dan perawatan yang baik membuat perjalanan saya sangat menyenangkan. Terima kasih atas pengalaman yang memuaskan!',
            //     'rating' => 4,
            // ],
            // [
            //     'name' => 'Rina Wulandari',
            //     'email' => 'rina.wulandari@gmail.com',
            //     'testimony' => 'Pelayanan pelanggan yang sangat baik. Tim selalu responsif dan siap membantu. Saya merasa dihargai sebagai pelanggan. Terima kasih atas pengalaman menyenangkan!',
            //     'rating' => 5,
            // ],
            // [
            //     'name' => 'Adi Kusuma',
            //     'email' => 'adi.kusuma@gmail.com',
            //     'testimony' => 'Unit yang saya sewa sangat terawat dengan baik. Performa mobil sangat bagus dan bahan bakar efisien. Saya sangat puas dengan layanan ini!',
            //     'rating' => 4,
            // ],
            // [
            //     'name' => 'Sinta Rahayu',
            //     'email' => 'sinta.rahayu@gmail.com',
            //     'testimony' => 'Mobil selalu dalam kondisi bersih dan rapi. Ini memberikan rasa percaya diri selama perjalanan. Saya merekomendasikan layanan ini kepada semua orang.',
            //     'rating' => 5,
            // ],
            // [
            //     'name' => 'Ferry Gunawan',
            //     'email' => 'ferry.gunawan@gmail.com',
            //     'testimony' => 'Kenyamanan selama perjalanan sangat dijaga. Sistem hiburan dan fasilitas lainnya membuat perjalanan lebih menyenangkan. Layanan yang sangat baik!',
            //     'rating' => 4,
            // ],
            // [
            //     'name' => 'Dian Nugraha',
            //     'email' => 'dian.nugraha@gmail.com',
            //     'testimony' => 'Pelayanan yang sangat profesional dan ramah. Mereka selalu siap membantu dengan senyum. Saya sangat terkesan dengan sikap keramahan tim rental mobil ini.',
            //     'rating' => 5,
            // ],
            // [
            //     'name' => 'Sari Indah',
            //     'email' => 'sari.indah@gmail.com',
            //     'testimony' => 'Saya menyewa unit untuk perjalanan keluarga, dan semuanya berjalan lancar. Unit dalam kondisi prima dan cocok untuk kebutuhan kami. Sangat direkomendasikan!',
            //     'rating' => 4,
            // ],
            // [
            //     'name' => 'Irfan Santoso',
            //     'email' => 'irfan.santoso@gmail.com',
            //     'testimony' => 'Kebersihan mobil sangat diperhatikan. Saya merasa nyaman dan aman selama perjalanan. Terima kasih atas komitmen pada kebersihan yang baik.',
            //     'rating' => 5,
            // ],
            // [
            //     'name' => 'Dewi Lestari',
            //     'email' => 'dewi.lestari@gmail.com',
            //     'testimony' => 'Mobil sangat nyaman dan dilengkapi dengan fasilitas yang baik. Saya dapat bersantai dan menikmati perjalanan tanpa khawatir. Layanan yang memuaskan!',
            //     'rating' => 4,
            // ],
            // [
            //     'name' => 'Fika Ramadhani',
            //     'email' => 'fika.ramadhani@gmail.com',
            //     'testimony' => 'Pelayanan yang sangat baik dari awal hingga akhir. Staff rental mobil ini memberikan informasi yang jelas dan membantu kami dengan baik. Sangat direkomendasikan!',
            //     'rating' => 5,
            // ],
            // [
            //     'name' => 'Rizal Pratama',
            //     'email' => 'rizal.pratama@gmail.com',
            //     'testimony' => 'Saya menyewa unit untuk keperluan bisnis, dan semuanya berjalan lancar. Unit dalam kondisi prima dan cocok untuk perjalanan bisnis saya. Terima kasih atas layanan yang baik!',
            //     'rating' => 4,
            // ],
            // [
            //     'name' => 'Dina Marwah',
            //     'email' => 'dina.marwah@gmail.com',
            //     'testimony' => 'Kebersihan mobil sangat dijaga dengan baik. Saya merasa nyaman dan aman selama perjalanan keluarga kami. Terima kasih atas layanan kebersihan yang baik.',
            //     'rating' => 5,
            // ],
            // [
            //     'name' => 'Aldi Prasetyo',
            //     'email' => 'aldi.prasetyo@gmail.com',
            //     'testimony' => 'Mobil sangat nyaman dan memiliki fasilitas yang lengkap. Saya dapat bekerja selama perjalanan bisnis tanpa masalah. Layanan yang memuaskan!',
            //     'rating' => 4,
            // ],
        ];

        Testimony::insert($testimonies);
    }
}
