// const destinations = [
//   {
//     id: 1,
//     name: "Wakatobi",
//     location: "Sulawesi Tenggara",
//     description:
//       "Wakatobi adalah sebuah kabupaten yang terletak di provinsi Sulawesi Tenggara, Indonesia. Terkenal dengan keindahan bawah lautnya yang menakjubkan.",
//     image_url:
//       "https://i.pinimg.com/564x/60/ff/51/60ff51fa04e8332098be37bc0174a862.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127115.10619074393!2d123.6712293489971!3d-5.363912563293633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da132c009d62f91%3A0x27e60d480afc1529!2sKabupaten%20Wakatobi!5e0!3m2!1sid!2sid!4v1718152585599!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/m2ayp1Bg89UEQcA97",
//   },
//   {
//     id: 2,
//     name: "Kawah Putih",
//     location: "Bandung, Jawa Barat",
//     description:
//       "Kawah Putih adalah sebuah danau vulkanik yang terletak di Bandung, Jawa Barat. Terkenal dengan air danau yang berwarna putih kehijauan.",
//     image_url:
//       "https://i.pinimg.com/564x/0a/fa/d4/0afad43c96aca65c3ab8da4f864fd47a.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7917.304416902015!2d107.39700052089398!3d-7.166143376410129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e688c1383dc510f%3A0xfab41bb8e4a3a83e!2sKawah%20Putih!5e0!3m2!1sid!2sid!4v1718152807631!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/za8ZTdzDKRS6AoTTA",
//   },
//   {
//     id: 3,
//     name: "Braga",
//     location: "Bandung, Jawa Barat",
//     description:
//       "Jalan Braga adalah sebuah area wisata yang terletak di pusat kota Bandung, Jawa Barat. Terkenal dengan bangunan-bangunan bersejarah dan kegiatan belanja.",
//     image_url:
//       "https://i.pinimg.com/564x/98/2c/46/982c46219a325a78005b9ebe85693eca.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.772091014373!2d107.60943410000002!3d-6.917828299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e63aa8eef09b%3A0x492819c17ff5b185!2sJl.%20Braga%2C%20Kec.%20Sumur%20Bandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1718152860981!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/XcLDNA666D6cZHHQ7",
//   },
//   {
//     id: 4,
//     name: "Pantai Ujung Gelam",
//     location: "Karimunjawa, Jawa Tengah",
//     description:
//       "Pantai Ujung Gelam adalah sebuah pantai yang terletak di Karimunjawa, Jawa Tengah. Terkenal dengan pasir putihnya dan pemandangan laut yang indah.",
//     image_url:
//       "https://i.pinimg.com/564x/cd/cb/21/cdcb21d6f47a790ecdc5248464189aac.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15876.453038485828!2d110.4109561!3d-5.8396567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e73cdf1cc21a51f%3A0xd66903b6840dda04!2sPantai%20Ujung%20Gelam!5e0!3m2!1sid!2sid!4v1718152885906!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/z4dJFRinEn11MecKA",
//   },
//   {
//     id: 5,
//     name: "Pantai Barakuda",
//     location: "Banyuwangi, Jawa Timur",
//     description:
//       "Pantai Barakuda adalah sebuah pantai yang terletak di Banyuwangi, Jawa Timur. Terkenal dengan ombaknya yang cocok untuk berselancar.",
//     image_url:
//       "https://i.pinimg.com/564x/a9/ea/e5/a9eae57ac8c71240084df9841db0e971.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.016907893907!2d110.48259820822435!3d-5.819726359785813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e73cf8e5dcfedc7%3A0xb08ebeccd88f6f28!2sPantai%20Barakuda!5e0!3m2!1sid!2sid!4v1718152913278!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfulls',
//     openmaps: "https://maps.app.goo.gl/njNptGqARUahUPq47",
//   },
//   {
//     id: 6,
//     name: "Gunung Bromo",
//     location: "Probolinggo, Jawa Timur",
//     description:
//       "Gunung Bromo adalah sebuah gunung berapi yang terletak di Probolinggo, Jawa Timur. Terkenal dengan pemandangan sunrise yang spektakuler.",
//     image_url:
//       "https://i.pinimg.com/564x/20/4a/fd/204afd1a99d578329ec6f76abc429865.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63224.73356813743!2d112.91189823547765!3d-7.942406421701862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sGn.%20Bromo!5e0!3m2!1sid!2sid!4v1718152977783!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/CAKcb5VagikNiQEK7",
//   },
//   {
//     id: 7,
//     name: "Gunung Rinjani",
//     location: "Lombok, Nusa Tenggara Barat",
//     description:
//       "Gunung Rinjani adalah sebuah gunung berapi yang terletak di Lombok, Nusa Tenggara Barat. Terkenal dengan danau kawahnya yang indah.",
//     image_url:
//       "https://i.pinimg.com/564x/eb/3d/f8/eb3df88b7785d101f714cfb118cc092f.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63150.444611807776!2d116.41623483725813!3d-8.41120800578033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc2d800216cccf%3A0x3c03cdbf11d30a1e!2sGn.%20Rinjani!5e0!3m2!1sid!2sid!4v1718153024518!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/J5Qn2uF6iLuednDi7",
//   },
//   {
//     id: 8,
//     name: "Danau Sentani",
//     location: "Jayapura, Papua",
//     description:
//       "Danau Sentani adalah sebuah danau yang terletak di Jayapura, Papua. Terkenal dengan keindahan alam sekitarnya dan kegiatan perikanan tradisional.",
//     image_url:
//       "https://i.pinimg.com/564x/dd/3b/3a/dd3b3a26e603996f34e878a0c131645d.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510160.6960862097!2d140.17977334436364!3d-2.625404904524206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cf33c72660fbf%3A0x7e5c1e7d20d930d7!2sDanau%20Sentani!5e0!3m2!1sid!2sid!4v1718153053839!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/VeK7suET6M7BghyWA",
//   },
//   {
//     id: 9,
//     name: "Candi Borobudur",
//     location: "Magelang, Jawa Tengah",
//     description:
//       "Candi Borobudur adalah sebuah candi Buddha yang terletak di Magelang, Jawa Tengah. Terkenal dengan relief-reliefnya yang indah.",
//     image_url:
//       "https://i.pinimg.com/564x/27/f3/1d/27f31d9c494cf589a92948ae2211a80a.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.697368946588!2d110.20375130000001!3d-7.607873800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8cf009a7d697%3A0xdd34334744dc3cb!2sCandi%20Borobudur!5e0!3m2!1sid!2sid!4v1718153092624!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/oh8VoS4dXxv5mvxM6",
//   },
//   {
//     id: 10,
//     name: "Pulo Cinta",
//     location: "Gorontalo, Sulawesi Utara",
//     description:
//       "Pulo Cinta adalah sebuah pulau kecil yang terletak di Gorontalo, Sulawesi Utara. Terkenal dengan keindahan alamnya dan kegiatan wisata bahari.",
//     image_url:
//       "https://i.pinimg.com/564x/f4/b4/0f/f4b40f0593f56d4b68b0f70a69a41466.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.779390637228!2d122.28203200745615!3d0.4507623498967792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327854230cad8ff3%3A0xae385a003eb8d967!2sPulo%20Cinta%20Eco%20Resort!5e0!3m2!1sid!2sid!4v1718153147469!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/6CV5dTmmAanDYDUT7",
//   },
//   {
//     id: 11,
//     name: "Way Kambas",
//     location: "Lampung, Sumatera",
//     description:
//       "Taman Nasional Way Kambas (TNWK) adalah taman nasional perlindungan gajah yang terletak di daerah Lampung tepatnya di Kecamatan Labuhan Ratu, Lampung Timur, Indonesia.",
//     image_url:
//       "https://i.pinimg.com/564x/d7/0b/15/d70b158d97134929e945fa92f193d095.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15900.289447645468!2d105.76665000806574!3d-4.927554342597755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40813cf143bc13%3A0x4c426b2efc4681a3!2sTaman%20Nasional%20Way%20Kambas!5e0!3m2!1sid!2sid!4v1718153171270!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/qM8Wb5PjJALwDSJp8",
//   },
//   {
//     id: 12,
//     name: "Pura Luhur Uluwatu",
//     location: "Kabupaten Badung, Bali",
//     description:
//       "Pura Luhur Uluwatu atau Pura Uluwatu merupakan pura yang berada di wilayah Desa Adat Pecatu, Kecamatan Kuta Selatan, Kabupaten Badung.",
//     image_url:
//       "https://i.pinimg.com/564x/19/72/7b/19727bf2edfcfa21823fd168fa37d7a7.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7885.077107396248!2d115.08003297099003!3d-8.829346013310568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24ffc20cb8191%3A0xcb98d1ba7db0495!2sPura%20Luhur%20Uluwatu!5e0!3m2!1sid!2sid!4v1718153196154!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/GmWEH5eA3i9MxKxf8",
//   },
//   {
//     id: 13,
//     name: "Ubud Monkey Forest",
//     location: "Ubud, Bali",
//     description:
//       "Mandala Suci Wenara Wana, juga dikenal sebagai Hutan Monyet Ubud, adalah sebuah tempat perlindungan yang terletak di Padangtegal, Ubud, Bali, Indonesia.",
//     image_url:
//       "https://i.pinimg.com/564x/ee/9e/75/ee9e7584b4774bfea28ac7f066da129b.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.176356069212!2d115.25035520880323!3d-8.519362743889602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23de09e1a4359%3A0x87384198c326203e!2sMonkey%20Forest%20Ubud!5e0!3m2!1sid!2sid!4v1718153218765!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/whkESh6uFrwtxW6H6",
//   },
//   {
//     id: 14,
//     name: "Taman Nasional Sembilang",
//     location: "Kabupaten Banyuasin, Sumatera Selatan",
//     description:
//       "Taman Nasional Sembilang adalah taman nasional yang terletak di Kabupaten Banyuasin, pesisir Provinsi Sumatera Selatan, Indonesia.",
//     image_url:
//       "https://kawanbumi.wordpress.com/wp-content/uploads/2016/10/sem10.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.3004782182334!2d104.65670317510698!3d-2.0356267979460654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e24eb1722963935%3A0xa0a93a20ae3efaa!2sTaman%20Nasional%20Sembilang!5e0!3m2!1sid!2sid!4v1718245650298!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/VR2vv1822yARGQ4j8",
//   },
//   {
//     id: 15,
//     name: "Puncak Becici",
//     location: "Kabupaten Bantul, Daerah Istimewa Jogjakarta",
//     description:
//       "Puncak Becici atau Pinus Becici (bahasa Jawa: ꦥꦶꦤꦸꦱ꧀ꦧꦺꦕꦶꦕꦶ, translit. Pinus Becici) adalah objek wisata bergaya alam andalan Kabupaten Bantul, DI Yogyakarta.",
//     image_url:
//       "https://i.pinimg.com/564x/9e/ed/32/9eed3250f4b14b0907ddc35f61feaede.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11842.428310750698!2d110.4241527058396!3d-7.901724841877229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a531aaaaaaaab%3A0x6c28149b91ea59f4!2sPuncak%20Pinus%20Becici!5e0!3m2!1sid!2sid!4v1718245690935!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/W836eJb3NgYNPHmx8",
//   },
//   {
//     id: 16,
//     name: "Pulau Natuna",
//     location: "Kabupaten Natuna, Kepulauan Riau",
//     description:
//       "Kabupaten Natuna adalah salah satu kabupaten di Provinsi Kepulauan Riau, Indonesia.",
//     image_url:
//       "https://i.pinimg.com/564x/20/9d/a0/209da0bb13d9a0b23cb47c9e865eca66.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31840.794601438654!2d108.22940036359164!3d3.9999996423134396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ec6fc2ce9cc2a3%3A0x5d117d4612d1f817!2sKabupaten%20Natuna!5e0!3m2!1sid!2sid!4v1718245710797!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/cxJSxhG4aNWpUp2Q8",
//   },
//   {
//     id: 17,
//     name: "Pulau Komodo",
//     location: "Pulau Komodo, Nusa Tenggara Timur",
//     description:
//       "Pulau Komodo adalah sebuah pulau yang terletak di Kepulauan Nusa Tenggara, berada di sebelah timur Pulau Sumbawa, yang dipisahkan oleh Selat Sape. Pulau Komodo dikenal sebagai habitat asli hewan komodo.",
//     image_url:
//       "https://i.pinimg.com/564x/d4/9b/37/d49b37af51be7d32b9729fa61eedec6a.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252484.52735688476!2d119.30782338823612!3d-8.589197444853935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db4545ba8b2bbbb%3A0x62b9b2c3feba412!2sPulau%20Komodo!5e0!3m2!1sid!2sid!4v1718245739996!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/84SXxZKC3GqdqfzY6",
//   },
//   {
//     id: 18,
//     name: "Candi Prambanan",
//     location: "Sleman dan Klaten, Daerah Istimewa Jogjakarta dan Jawa Tengah",
//     description:
//       "Candi Prambanan (bahasa Jawa: ꦕꦟ꧀ꦝꦶꦥꦿꦩ꧀ꦧꦤꦤ꧀, translit. Caṇḍi Prambanan) adalah bangunan candi bercorak agama Hindu terbesar di Indonesia yang dibangun pada abad ke-9 Masehi.",
//     image_url:
//       "https://i.pinimg.com/564x/70/78/ca/7078ca52a3af4ac006c518f041201c76.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3559337544734!2d110.48889247514307!3d-7.752020592266881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae3dbd859d1%3A0x19e7a03b25955a2d!2sCandi%20Prambanan!5e0!3m2!1sid!2sid!4v1718245770170!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/uXRMjfUaQ44Sh4J26",
//   },
//   {
//     id: 19,
//     name: "Pantai Parangkritis",
//     location: "Kabupaten Bantul, Daerah Istimewa Jogjakarta",
//     description:
//       "Pantai Parangtritis (bahasa Jawa: ꦥꦱꦶꦱꦶꦂ ꦥꦫꦁꦠꦿꦶꦠꦶꦱ꧀, translit. Pasisir Parangtritis) adalah tempat wisata yang terletak di Kalurahan Parangtritis, Kapanéwon Kretek, Kabupaten Bantul, Daerah Istimewa Jogjakarta.",
//     image_url:
//       "https://i.pinimg.com/564x/e8/7c/ab/e87cabf2ec55e7f496297d9b4760529d.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31605.945160964002!2d110.30817171560807!3d-8.025398788064729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b00975eac533d%3A0x351bfe1453e22e36!2sPantai%20Parangtritis!5e0!3m2!1sid!2sid!4v1718245795994!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/Y1996XibNCPt4jT19",
//   },
//   {
//     id: 20,
//     name: "Nusa Penida",
//     location: "Kabupaten Klungkung, Bali",
//     description:
//       "Nusa Penida adalah sebuah pulau (=nusa) bagian dari Kabupaten Klungkung, Bali, Indonesia yang terletak di sebelah tenggara Bali yang dipisahkan oleh Selat Badung.",
//     image_url:
//       "https://i.pinimg.com/564x/1c/87/c2/1c87c27dce5ade9092443f8af420c3f9.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126189.75488376994!2d115.45523872041346!3d-8.745564095298045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd271194d1319d3%3A0x5c3a3706b2197b7b!2sNusa%20Penida!5e0!3m2!1sid!2sid!4v1718245818140!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/fZLRkTG9hvLpdP1E7",
//   },
//   {
//     id: 21,
//     name: "Malioboro",
//     location: "Kota Jogjakarta, Daerah Istimewa Jogjakarta",
//     description:
//       "Jalan Malioboro (bahasa Jawa: ꦢꦭꦤ꧀ꦩꦭꦶꦪꦧꦫ, translit. Dalan Maliabara) adalah salah satu kawasan jalan dari tiga jalan di Kota Yogyakarta yang membentang dari Tugu Yogyakarta hingga ke persimpangan Titik Nol Kilometer Yogyakarta.",
//     image_url:
//       "https://i.pinimg.com/564x/8a/b2/6b/8ab26be3e08c0be9370826f8feac03bc.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.89605177833!2d110.3473890150461!3d-7.792576000775453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5742a17e8c33%3A0xf92dc9a55003beb0!2sMalioboro%20Yogyakarta!5e0!3m2!1sid!2sid!4v1718245848099!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/7T5QmT8CNp4rB6Aw6",
//   },
//   {
//     id: 22,
//     name: "Taman Nasional Ujung Kulon",
//     location: "Semenanjung Ujung Kulon, Jawa Barat",
//     description:
//       "Taman Nasional Ujung Kulon terletak di Semenanjung Ujung Kulon, bagian paling barat di Pulau Jawa, Indonesia. Kawasan taman nasional ini pada mulanya meliputi wilayah Krakatau dan beberapa pulau kecil di sekitarnya seperti Pulau Handeuleum dan Pulau Peucang dan Pulau Panaitan.",
//     image_url:
//       "https://i.pinimg.com/564x/08/e0/b5/08e0b5d7ba0b8d19114245c393349aab.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8780308515197!2d105.37253387513404!3d-6.784694393212352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42233395979ea1%3A0x8df3a34e43b4c872!2sTaman%20Nasional%20Ujung%20Kulon!5e0!3m2!1sid!2sid!4v1718245941066!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/EKeEoyudfiqKAUvQ9",
//   },
//   {
//     id: 23,
//     name: "Gili Trawangan",
//     location: "Kabupaten Lombok Utara, Nusa Tenggara Barat",
//     description:
//       "Gili Trawangan adalah salah satu dari Tiga Gili yang ada di bagian barat laut Pulau Lombok, bersama dengan Gili Air dan Gili Meno atau yang juga disebut sebagai Pesona Gili Tramena (Trawangan, Meno, dan Air).",
//     image_url:
//       "https://i.pinimg.com/564x/bc/7a/01/bc7a01f74763f4b75789d05928a7590d.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15790.083507573148!2d116.02590640020159!3d-8.350309116981066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcde0ab4ff1579f%3A0xfcea7c174732d4b2!2sGili%20Trawangan!5e0!3m2!1sid!2sid!4v1718245966214!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/RGgkvuhzGR9ctthB8",
//   },
//   {
//     id: 24,
//     name: "Taman Budaya Garuda Wisnu Kencana",
//     location: "Kabupaten Badung, Bali",
//     description:
//       "Taman Budaya Garuda Wisnu Kencana, (Bali: ᬢᬫᬦ᭄ᬩᬸᬤᬬᬕᬭᬸᬤᬯᬶᬲ᭄ᬦᬸᬓᬾᬜ᭄ᬘᬦ, bahasa Inggris: Garuda Wisnu Kencana Cultural Park) atau kerap disebut dengan GWK, adalah sebuah taman wisata budaya di bagian selatan pulau Bali.",
//     image_url:
//       "https://i.pinimg.com/564x/75/02/63/750263055615cc85cf13dde0fb9556c9.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.7405992437534!2d115.16502367515443!3d-8.810422791242468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244cf54e1dec7%3A0x1988663e064f5a51!2sTaman%20Budaya%20Garuda%20Wisnu%20Kencana!5e0!3m2!1sid!2sid!4v1718245986498!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/jD2R36J5MP2GmTsY6",
//   },
//   {
//     id: 25,
//     name: "Canggu",
//     location: "Kabupaten Badung, Bali",
//     description:
//       "Canggu adalah desa di kecamatan Kuta Utara, Kabupaten Badung, Bali, Indonesia.[3] Canggu mulai terkenal setelah dibukanya Deus ex Machina.",
//     image_url:
//       "https://i.pinimg.com/736x/63/76/b7/6376b7561a1a51ca8338383e47d739fb.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31556.366336395367!2d115.1194163660337!3d-8.63952695004063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23861f4589665%3A0x5030bfbca82fd30!2sCanggu%2C%20Kec.%20Kuta%20Utara%2C%20Kabupaten%20Badung%2C%20Bali!5e0!3m2!1sid!2sid!4v1718246008076!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/ox8tKb58G3K6Fza86",
//   },
//   {
//     id: 26,
//     name: "Bunaken",
//     location: " Manado, Sulawesi Utara",
//     description:
//       "Bunaken adalah sebuah pulau seluas 8,08 km² di Teluk Manado, yang terletak di utara pulau Sulawesi, Indonesia. Pulau ini merupakan bagian dari kota Manado, ibu kota provinsi Sulawesi Utara, Indonesia.",
//     image_url:
//       "https://i.pinimg.com/736x/59/a2/7c/59a27cfb3ace1b50d40187eb77d5eb40.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31905.88320732916!2d124.73897666303276!3d1.6140048457397078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32879a3c17d8d75b%3A0xe07329f226330faf!2sBunaken!5e0!3m2!1sid!2sid!4v1718246031134!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/saUyY6ShvaLyG2iX8",
//   },
//   {
//     id: 27,
//     name: "Labuan Bajo",
//     location: "Kabupaten Manggarai Barat, Nusa Tenggara Timur",
//     description:
//       "Labuan Bajo merupakan salah satu kelurahan yang berada di Kecamatan Komodo, Kabupaten Manggarai Barat, Provinsi Nusa Tenggara Timur, Indonesia.",
//     image_url:
//       "https://i.pinimg.com/564x/02/46/f7/0246f7c0f8feb49d74e77e601e1e171f.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63144.20750914784!2d119.82302759237481!3d-8.449391897090322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db468a6d47ed641%3A0x87f524333c6a6e8d!2sLabuan%20Bajo%2C%20Kec.%20Komodo%2C%20Kabupaten%20Manggarai%20Barat%2C%20Nusa%20Tenggara%20Tim.!5e0!3m2!1sid!2sid!4v1718246050172!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/3qWTGRaTTRBYA9X27",
//   },
//   {
//     id: 28,
//     name: "Danau Toba",
//     location: "Danau Toba, Sumatera Utara",
//     description:
//       "Danau Toba (bahasa Batak Toba: Surat Batak: ᯖᯀᯬ ᯖᯬᯅ, translit. Tao Toba) adalah danau alami berukuran besar di Indonesia yang terletak di kaldera gunung supervulkan.",
//     image_url:
//       "https://i.pinimg.com/564x/93/7f/e6/937fe63319a127f8505d3014e8e80bb1.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510166.67581303156!2d98.50630621498192!3d2.610717845635565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031de07a843b6ad%3A0xc018edffa69c0d05!2sDanau%20Toba!5e0!3m2!1sid!2sid!4v1718246069837!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/9sPJtRhA2tG8pFjG9",
//   },
//   {
//     id: 29,
//     name: "Kelingking Beach",
//     location: "Nusa Penida, Bali",
//     description:
//       "Kelingking Beach berada di pesisir barat daya Nusa Penida dengan pasir putih lembut yang terhampar di sepanjang pantainya. Selain itu pantai ini menyajikan pemandangan laut biru yang jernih yang memanjakan mata.",
//     image_url:
//       "https://i.pinimg.com/564x/a6/d4/0b/a6d40ba5dfe8ac57fd5a0651ad08f653.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.37876732354!2d115.47004687515384!3d-8.750386491300242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd26f1616cd2cc7%3A0xee84b7df0afbff19!2sKelingking%20Beach!5e0!3m2!1sid!2sid!4v1718246087519!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/hXQTGqmCXJSab3KfA",
//   },
//   {
//     id: 30,
//     name: "Pink Beach",
//     location: "Kabupaten Lombok Timur, Lombok",
//     description:
//       "Pantai Tangsi merupakan pantai yang terletak di desa Sekaroh, kecamatan Jerowaru, Kabupaten Lombok Timur. Pantai ini dikenal dengan sebutan Pantai Pink dari Pulau Lombok.",
//     image_url:
//       "https://i.pinimg.com/564x/f5/d0/01/f5d001a0ed6bc960ca7234b58c7f093d.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.9439780287653!2d119.51717357515211!3d-8.601377541443878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db4567cf6bd1967%3A0x9f2eb4aca51c5fd0!2sPantai%20Merah!5e0!3m2!1sid!2sid!4v1718246110385!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/eFLHXaNFQDZNWk647",
//   },
//   {
//     id: 31,
//     name: "Raja Ampat",
//     location: "Kabupaten Raja Ampat, Papua Barat Daya",
//     description:
//       "Kabupaten Raja Ampat adalah salah satu kabupaten di provinsi Papua Barat Daya, Indonesia. Ibukota kabupaten ini terletak di Waisai, dimana Waisai menjadi pusat pemerintahan Kabupaten Raja Ampat.",
//     image_url:
//       "https://i.pinimg.com/564x/e9/e6/8a/e9e68a5c704c5e843959a63240161ec2.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084915.7411327935!2d125.74974898529368!3d-1.0284947909135949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d5c3eaaccb47097%3A0x7851bd844c4cdf44!2sKabupaten%20Raja%20Ampat!5e0!3m2!1sid!2sid!4v1718246136379!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/oxXeBAyYsjsS4W2X7",
//   },
//   {
//     id: 32,
//     name: "Wae Rebo",
//     location: "Kabupaten Manggarai, Nusa Tenggara Timur",
//     description:
//       "Wae Rebo atau Waerebo adalah sebuah desa adat terpencil dan misterius di Kabupaten Manggarai, Nusa Tenggara Timur. Wae Rebo merupakan salah satu destinasi wisata budaya di Kabupaten Manggarai",
//     image_url:
//       "https://i.pinimg.com/564x/bc/11/7b/bc117b6650c5fd73122c9fafa0a99084.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15772.720690216514!2d120.26616185541991!3d-8.769113199999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db36459b2e80e9d%3A0xce74c6b87dcb8a88!2sWaerebo%20Village!5e0!3m2!1sid!2sid!4v1718246164380!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/HNbGuYgBA9eKJ9Kh6",
//   },
//   {
//     id: 33,
//     name: "Tana Toraja",
//     location: "Tana Toraja, Sulawesi Selatan",
//     description:
//       "Kabupaten Tana Toraja adalah salah satu kabupaten yang berada di provinsi Sulawesi Selatan, Indonesia. Ibu kota dari kabupaten ini ada di kecamatan Makale.",
//     image_url:
//       "https://i.pinimg.com/564x/9a/09/5f/9a095f7a41a402dae92b1f6692f5c8fe.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019940.7323866682!2d118.52441789731343!3d-3.0562519808124264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d9395b1758f3585%3A0x3030bfbcaf77090!2sKabupaten%20Tana%20Toraja%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1718246190945!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/Jd6SiqvMvrgsSCeH9",
//   },
//   {
//     id: 34,
//     name: "Pulau Belitung",
//     location: "Belitung, Belitung Timur, Kepulauan Bangka Belitung",
//     description:
//       "Belitung, atau Belitong (bahasa setempat, diambil dari nama sejenis siput laut), dulunya dikenal sebagai Billiton adalah sebuah pulau di lepas pantai timur Sumatra, Indonesia, diapit oleh Selat Gaspar dan Selat Karimata.",
//     image_url:
//       "https://i.pinimg.com/564x/d1/e9/a1/d1e9a10a570aef8cc80fa68b5b46c776.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510043.00357230974!2d107.58438798446177!3d-2.899381939600366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e172904cb3c7b25%3A0x9b308566eb9637c6!2sPulau%20Belitung!5e0!3m2!1sid!2sid!4v1718246208817!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/6s2PnbmvEWxUn9jb7",
//   },
//   {
//     id: 35,
//     name: "Gunung Kelimutu",
//     location: "Pulau Flores, Nusa Tenggara Timur",
//     description:
//       "Gunung Kelimutu adalah gunung berapi yang terletak di Pulau Flores, Provinsi NTT, Indonesia. Lokasi gunung ini tepatnya di Desa Pemo, Kecamatan Kelimutu, Kabupaten Ende.",
//     image_url:
//       "https://i.pinimg.com/564x/65/fb/e2/65fbe2a607b4fce6ed305a0b277aef87.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31545.458145930774!2d121.80150886612736!3d-8.768915792061097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dad43202a4e7a87%3A0xa23d56a33e2a7541!2sGn.%20Kelimutu!5e0!3m2!1sid!2sid!4v1718246231644!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/eSmcxmi5agdW6o7L7",
//   },
//   {
//     id: 36,
//     name: "Kepulauan Mentawai",
//     location: "Kepulauan Mentawai, Sumatera Barat",
//     description:
//       "Kepulauan Mentawai adalah gugusan pulau-pulau yang secara geografis terletak di Samudra Hindia dan secara administratif masuk ke dalam provinsi Sumatera Barat, Indonesia.",
//     image_url:
//       "https://i.pinimg.com/564x/cb/3b/dd/cb3bdd1556a94c788a522ab1d43404d5.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4081961.5374527005!2d97.59074964978844!3d-2.409585665611799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd26ea82de46e3b%3A0x3039d80b220cb20!2sKabupaten%20Kepulauan%20Mentawai%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1718246260645!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/J9HCAEnFFTzVff1d6",
//   },
//   {
//     id: 37,
//     name: "Pantai Tanjung Aan",
//     location: "Lombonk Tengah, Nusa Tenggara Barat",
//     description:
//       "Pantai Tanjung Aan adalah pantai berpasir putih yang terletak di Kawasan Ekonomi Khusus (KEK) Mandalika, Kabupaten Lombok Tengah, Provinsi Nusa Tenggara Barat.",
//     image_url:
//       "https://i.pinimg.com/564x/a9/ea/e5/a9eae57ac8c71240084df9841db0e971.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31533.423080927594!2d116.29278641083985!3d-8.909507999999981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcd00b5b1b198b7%3A0xa4020552d97fc866!2sPantai%20Tanjung%20Aan!5e0!3m2!1sid!2sid!4v1718246293446!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/GLL8t9Ji5RFBuLD77",
//   },
//   {
//     id: 38,
//     name: "Danau Maninjau",
//     location: "Agam, Sumatera Barat",
//     description:
//       "Danau Maninjau (berarti pemandangan atau peninjauan dalam bahasa Minangkabau) adalah sebuah danau kaldera di kecamatan Tanjung Raya, Kabupaten Agam, provinsi Sumatera Barat, Indonesia.",
//     image_url:
//       "https://i.pinimg.com/564x/35/42/6a/35426a9e1ba5468ecd6af0b218f0b90d.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.0901358233!2d100.10545626802053!3d-0.3283176604657498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd51493dd7c7663%3A0xdc30ab6afb30d576!2sDanau%20Maninjau!5e0!3m2!1sid!2sid!4v1718246313389!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/3jTavncqqHo5D3Bf9",
//   },
//   {
//     id: 39,
//     name: "Taman Nasional Lorentz",
//     location: "Papua Pegunungan, Papua Tengah dan Papua Selatan, Papua",
//     description:
//       "Taman Nasional Lorentz adalah sebuah taman nasional yang terletak diantara 3 provinsi di Pulau Papua, Indonesia yakni Papua Pegunungan, Papua Tengah dan Papua Selatan.",
//     image_url:
//       "https://i.pinimg.com/564x/82/59/53/8259535bae2afa00c5fefc7d6dc6084e.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7998752554454!2d137.97010797511803!3d-4.629763295344985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x683ada72cad8bf5b%3A0xe5acb2b81cad387f!2sTaman%20Nasional%20Lorentz!5e0!3m2!1sid!2sid!4v1718246335810!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/mWSpDH4qUGnGAvvC8",
//   },
//   {
//     id: 40,
//     name: "Banda Neira",
//     location: "Maluku Tengah, Maluku",
//     description:
//       "Banda Tangah atau Banda Naira adalah salah satu pulau di Kepulauan Banda, dan merupakan pusat administratif Kecamatan Banda, Kabupaten Maluku Tengah, Maluku, Indonesia.",
//     image_url:
//       "https://i.pinimg.com/564x/d5/3b/a5/d53ba51838bd25c3b56e98ae87b8edb3.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31819.368334189643!2d129.8834603637756!3d-4.5179016092103526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d15860b887ac3ab%3A0x6d9d8565c44e2f07!2sBanda%20Neira!5e0!3m2!1sid!2sid!4v1718246352769!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/zeEeu5F6pjbyFH9J8",
//   },
//   {
//     id: 41,
//     name: "Pantai Nihiwatu",
//     location: "Kabupaten Sumba Barat, Nusa Tenggara Timur",
//     description:
//       "Pantai Nihiwatu mempesona para pengunjung dengan keindahan alamnya yang menakjubkan. Air lautnya yang jernih dan biru, bersihnya pasir putih yang lembut di pinggiran pantai, dan latar belakang pemandangan bukit hijau yang menakjubkan menciptakan suasana yang luar biasa memikat hati.",
//     image_url:
//       "https://i.pinimg.com/564x/37/54/a3/3754a3934e271744a418c26db438e33e.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.683083527347!2d119.35563580046818!3d-9.772771545139884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4afcdc01f97a73%3A0x54c747e3fc22ac63!2sNihiwatu%20Beach!5e0!3m2!1sid!2sid!4v1718246376792!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/N37Hu3Qf1DLkZgpC6",
//   },
//   {
//     id: 42,
//     name: "Kawah Ijen",
//     location: "Kanupaten Banyuwani, Jawa Timur",
//     description:
//       "Gunung Ijen adalah sebuah gunung berapi yang terletak di perbatasan Kabupaten Banyuwangi dan Kabupaten Bondowoso, Jawa Timur, Indonesia.",
//     image_url:
//       "https://i.pinimg.com/564x/5e/d2/24/5ed224b28a27b03620ba7c3feb8d437f.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31603.340187975475!2d114.23211346563042!3d-8.058823085989037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd149f2110ae607%3A0x7c04ef029d5e39bc!2sGn.%20Ijen!5e0!3m2!1sid!2sid!4v1718246395679!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/4tUyrgRFiQjveDVo8",
//   },
//   {
//     id: 43,
//     name: "Taman Nasional Baluran",
//     location: "Situbondo, Jawa Timur",
//     description:
//       "Taman Nasional Baluran adalah salah satu taman nasional di Indonesia yang terletak di wilayah Banyuputih, Situbondo, Jawa Timur, Indonesia. Namanya diambil dari nama gunung yang berada di daerah ini, yaitu Gunung Baluran.",
//     image_url:
//       "https://i.pinimg.com/564x/7d/9a/dc/7d9adc9855dfe954736811b354de117e.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63241.73679207029!2d114.31545272167966!3d-7.831188399999978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1249454d7c085%3A0x67067c7ed3eced4b!2sTaman%20Nasional%20Baluran!5e0!3m2!1sid!2sid!4v1718246423229!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/iCsFvNDYBj9LJmJL8",
//   },
//   {
//     id: 44,
//     name: "Taman Nasional Kerinci Seblat",
//     location: "Sumatera",
//     description:
//       "Taman nasional ini terdiri dari Pegunungan Bukit Barisan yang memiliki wilayah dataran tertinggi di Sumatra, Gunung Kerinci",
//     image_url:
//       "https://i.pinimg.com/564x/2d/b6/64/2db66465a675c8c435f5d781bd37dc7d.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0535127700687!2d101.26641677510618!3d-1.704220398280006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2cf9fbd99b6711%3A0xb67f5051899866a4!2sTaman%20Nasional%20Kerinci%20Seblat!5e0!3m2!1sid!2sid!4v1718246445734!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/YCDf5Zmmh9NSVXK67",
//   },
//   {
//     id: 45,
//     name: "Kampung Naga",
//     location: "Kabupaten Tasikmalaya, Jawa Barat",
//     description:
//       "Kampung Naga (aksara Sunda: ᮊᮙ᮪ᮕᮥᮀ ᮔᮍ) adalah sebuah perkampungan tradisional Sunda yang terletak di Kabupaten Tasikmalaya, Jawa Barat.",
//     image_url:
//       "https://i.pinimg.com/564x/5c/31/fd/5c31fdc70614c7bd1560d87b5f5e8748.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253352.0189126095!2d107.62412027461406!3d-7.1692408480858605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ab81533e7381%3A0xaad3d7b0b36b33e9!2sKampung%20Naga!5e0!3m2!1sid!2sid!4v1718246468326!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/SBEhmwa35je44baj6",
//   },
//   {
//     id: 46,
//     name: "Bukit Lawang",
//     location: "Kabupaten Langkat, Suamtera Utara",
//     description:
//       "Bukit Lawang adalah nama tempat wisata di Kecamatan Bohorok, Kabupaten Langkat, Provinsi Sumatera Utara yang terletak 68 km sebelah barat laut Kota Binjai dan sekitar 80 km di sebelah barat laut kota Medan.",
//     image_url:
//       "https://i.pinimg.com/564x/60/50/26/6050267b6441c97b9a3434e877ed5652.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63714.159182625575!2d98.09826323249266!3d3.5563680829224387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3030c81b5f04b997%3A0xd57e31753995db8f!2sBukit%20Lawang%2C%20Kec.%20Bohorok%2C%20Kabupaten%20Langkat%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1718246487040!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/hpF4byMmznqT1NRq5",
//   },
//   {
//     id: 47,
//     name: "Pantai Tanjung Tinggi",
//     location: "Kabupaten Belitung, Bangka Belitung",
//     description:
//       "Tanjung tinggi adalah pantai yang diapit oleh dua semenanjung, yaitu tanjung Kelayang dan tanjung Pendam. Nama tanjung tinggi diambil dari kata tanjung yang artinya semenanjung dan tinggi yang artinya pantai yang memiliki bebatuan yang tinggi.",
//     image_url:
//       "https://i.pinimg.com/564x/7e/01/17/7e0117cdffd8fbe54d2fbbb3d0bf7a4b.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8621802070015!2d107.71119752510856!3d-2.551718697426562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1742357d8d15ef%3A0xd09bad2ea529a7cf!2sPantai%20Tj.%20Tinggi!5e0!3m2!1sid!2sid!4v1718246516509!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/EKY4Qp5Jg7z5SsW26",
//   },
//   {
//     id: 48,
//     name: "Air Terjun Tumpak Sewu",
//     location: "Lumajang dan Kabupaten Malang, Jawa Timur",
//     description:
//       "Air Terjun Tumpak Sewu atau disebut juga Coban Sewu adalah sebuah air terjun berketinggian sekitar 120 meter. Air terjun ini berbatasan dengan Kabupaten Lumajang dan Kabupaten Malang, Provinsi Jawa Timur.",
//     image_url:
//       "https://i.pinimg.com/564x/c6/a6/6d/c6a66d932664f072b06dca0843810918.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.7266483887684!2d112.9149675751481!3d-8.230219541802617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd614085869da41%3A0x4a94cc5f06772982!2sAir%20Terjun%20Tumpak%20Sewu!5e0!3m2!1sid!2sid!4v1718246541510!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/uBVDsXrgwNN9ernX7",
//   },
//   {
//     id: 49,
//     name: "Bukit Pergasingan",
//     location: "Lombok Timur, Nusa Tenggara Barat",
//     description:
//       "Bukit Pergasingan merupakan salah satu jejeran bukit yang ada di kawasan lingkar Gunung Rinjani, Kecamatan Sembalun, Lombok Timur, Nusa Tenggara Barat.",
//     image_url:
//       "https://i.pinimg.com/564x/c9/f2/7e/c9f27e9f76d1f949de7d41e14d949b9e.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7895.140739844973!2d116.524037!3d-8.3454136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc321fd286476d%3A0x3a9263fd14e1cd13!2sBukit%20Pergasingan!5e0!3m2!1sid!2sid!4v1718246583269!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/M6gCu7Cxb8TTFHKw5",
//   },
//   {
//     id: 50,
//     name: "Pulau Kepa",
//     location: "Kabupaten Alor, Nusa Tenggara Timur",
//     description:
//       "Pulau Kepa sendiri merupakan sebuah pulau kecil yang berjarak sekitar 30 menit perjalanan dari kota Kalabahi, ibu kota Kepulauan Alor Island. Jarak antara Kepulauan Alor Kecil dengan Pulau Kepa hanya 500 meter",
//     image_url:
//       "https://i.pinimg.com/564x/92/e3/6a/92e36a4acaa447ee5d05ecc603a35e7a.jpg",
//     maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7896.701311458916!2d124.39943029189911!3d-8.267852617064625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2daa87574d147a11%3A0x3635d5b290fab077!2sPulau%20KEPA!5e0!3m2!1sid!2sid!4v1718246617667!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     openmaps: "https://maps.app.goo.gl/7uhL6MN1T8rdsETE9",
//   },
// ];

// const destinationsContainer = document.getElementById("destinations");

// destinations.forEach((destination) => {
//   const card = document.createElement("div");
//   card.className = "destination-card";

//   const image = document.createElement("img");
//   image.src = destination.image_url;
//   image.alt = destination.name;
//   card.appendChild(image);

//   const content = document.createElement("div");
//   content.className = "destination-card-content";

//   const title = document.createElement("h2");
//   title.textContent = destination.name;
//   content.appendChild(title);

//   const location = document.createElement("p");
//   location.textContent = `Location: ${destination.location}`;
//   content.appendChild(location);

//   // const description = document.createElement("p");
//   // description.textContent = destination.description;
//   // content.appendChild(description);

//   const button = document.createElement("button"); // Mengganti createElement("p") menjadi createElement("button")
//   button.className = "detail"; // Menggunakan class "rating" untuk styling (tidak berubah)
//   button.textContent = `Detail`; // Mengubah teks tombol sesuai dengan rating (tidak berubah)
//   button.addEventListener("click", () => {
//     // Ketika tombol diklik, halaman akan berpindah ke detail
//     window.location.href = "info1.html";
//   });
//   content.appendChild(button); // Menambahkan tombol ke dalam elemen content

//   // const link = document.createElement("a");
//   // link.href = destination.openmaps;
//   // link.textContent = "Lihat Lokasi";
//   // link.target = "_blank";
//   // content.appendChild(link);

//   card.appendChild(content);
//   destinationsContainer.appendChild(card);
// });
