'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e640825c66813a78782e3d70f15b53ea",
"version.json": "19b524d4d487016a6a0e1dceffdd8b61",
"index.html": "a93a8c3c5254524e4af8759c93788d72",
"/": "a93a8c3c5254524e4af8759c93788d72",
"main.dart.js": "990f193519815fa28273e3db695741ff",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "78a107443ebbbb22242c558da7c237eb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b0271106e4409fe6cfd2a09fa2359afc",
"assets/AssetManifest.json": "909b64f99e5656c329d35c9473da728a",
"assets/NOTICES": "16e0ce708d57013a45aa213d27407c48",
"assets/FontManifest.json": "fa7c3c96965d61405383a0a147f6e58f",
"assets/AssetManifest.bin.json": "f6ba3fe5ddaa65a65fd42d7d544cdb7c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "105bfe71da5b9578d1ae7778934d22d5",
"assets/fonts/MaterialIcons-Regular.otf": "d4199ca58f27b0cb33d9c65be63d958f",
"assets/assets/music/acoustic-kids-folk.mp3": "a5c5989cda11c86b29793bbb67b2809d",
"assets/assets/music/whistle-me-happy.mp3": "4e31b82335fc94e74b4065cdddb54cf2",
"assets/assets/music/README.md": "035041cfb2070f794172dedb2aa709b6",
"assets/assets/music/lets-go-to-the-park-playful-cute-flute-and-piano.mp3": "9e45ab827af9b6178c1e6d8f94858335",
"assets/assets/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/images/soroban/dot.png": "2d434316d1e6df1399c992913037c071",
"assets/assets/images/chart_icons/planting_plusminus_bb_minus_8.png": "96339059134fc4f2e4bc80ebd7fc2688",
"assets/assets/images/chart_icons/planting_plusminus_bb_minus_9.png": "4257259f98739d60524fdf6dc2681083",
"assets/assets/images/chart_icons/planting_plusminus_lab_plus_7.png": "f31d225e470e7d4cd576dae2936ee7ed",
"assets/assets/images/chart_icons/planting_plusminus_lab_plus_6.png": "ceae5667234dfa7061aa006dbcf5c6d1",
"assets/assets/images/chart_icons/planting_plusminus_lab_minus_9.png": "7fe5a23147370df3ae2353a69885c6dd",
"assets/assets/images/chart_icons/planting_plusminus_lab_minus_8.png": "068f7104b66867578f19f30e4ebfea0d",
"assets/assets/images/chart_icons/planting_plusminus_bb_plus_1.png": "a4cb2649bb25ec1351f14696526e0868",
"assets/assets/images/chart_icons/planting_plusminus_lb_minus_4.png": "487ea8299b291dce1bf76d3380ab4e6a",
"assets/assets/images/chart_icons/planting_plusminus_bb_plus_2.png": "d394e28d555c1e0ce64d23c17d27eaca",
"assets/assets/images/chart_icons/planting_plusminus_bb_plus_3.png": "5041d550be6525e09089a65880043903",
"assets/assets/images/chart_icons/planting_plusminus_bb_plus_7.png": "fcdfee6fda3691faf79263c6f540eb3d",
"assets/assets/images/chart_icons/planting_plusminus_lb_minus_2.png": "8a3c8d8763fd9f4075c90ed721ebde40",
"assets/assets/images/chart_icons/planting_plusminus_lb_minus_3.png": "55c7276d6b8ffd6765c0127e558b4104",
"assets/assets/images/chart_icons/planting_plusminus_bb_plus_6.png": "07040e2fd30a2ae0cf50a52af4994b9d",
"assets/assets/images/chart_icons/planting_plusminus_bb_plus_4.png": "19ca946fc803425623520876917b0e98",
"assets/assets/images/chart_icons/planting_plusminus_lb_minus_1.png": "3ee3c7eeef08a48e1b5fcab80bdbeb6e",
"assets/assets/images/chart_icons/planting_plusminus_bb_plus_5.png": "a36ca68b1379bed9e996a5cc82a3e66c",
"assets/assets/images/chart_icons/planting_plusminus_bb_plus_8.png": "6e3ad76a1f1bb3379d0b7a7d73dceeb9",
"assets/assets/images/chart_icons/planting_plusminus_bb_plus_9.png": "c6a3f671b9bf02362eec4d4e370626df",
"assets/assets/images/chart_icons/planting_plusminus_lb_plus_4.png": "cf779f0dd2c2ece85b0a8cfc6992897a",
"assets/assets/images/chart_icons/planting_plusminus_lb_plus_1.png": "5c616a16feb061cb9eefa273b765cf46",
"assets/assets/images/chart_icons/planting_plusminus_lb_plus_2.png": "febf0b2ebe88f16a5975f2d63ca43e16",
"assets/assets/images/chart_icons/harvesting_smart_smart1_simple.png": "f8d4ab45506d0e106ca7ac8a0ae4d6be",
"assets/assets/images/chart_icons/planting_plusminus_lb_plus_3.png": "c07a45cd7c617391600585deafbef51a",
"assets/assets/images/chart_icons/planting_plusminus_bb_minus_1.png": "21e6e5dc8bb324b41189ab7deecbe4b4",
"assets/assets/images/chart_icons/planting_plusminus_lab_minus_6.png": "5414d5220b187fcdfa3b715235713722",
"assets/assets/images/chart_icons/planting_plusminus_lab_minus_7.png": "dcd2e46da7e171a0efdd85e276846514",
"assets/assets/images/chart_icons/planting_plusminus_bb_minus_2.png": "aaa3663162488e4ffebd4c76514ef91a",
"assets/assets/images/chart_icons/planting_plusminus_bb_minus_3.png": "0db1da43a7d43559c4c3ca1f51069bfc",
"assets/assets/images/chart_icons/planting_plusminus_bb_minus_7.png": "8541b4fe679962cc1f8af541ddfb1348",
"assets/assets/images/chart_icons/planting_plusminus_bb_minus_6.png": "54897c8e458f72dccd10fcc7c319bc33",
"assets/assets/images/chart_icons/planting_plusminus_bb_minus_4.png": "68f104cbc0aeffde54fe58f12a9e5a7a",
"assets/assets/images/chart_icons/planting_plusminus_lab_plus_8.png": "11d1219ebaf25c16a5a859b4dcd844b1",
"assets/assets/images/chart_icons/planting_plusminus_lab_plus_9.png": "772e733b16890fff52a6fe706d1faeeb",
"assets/assets/images/chart_icons/planting_plusminus_bb_minus_5.png": "3fd34c3484842095f18a05462113a33c",
"assets/assets/images/dialog_happy_mascot.png": "f6b7353d64ba5c2d35b8f10edaf6aa42",
"assets/assets/images/logo-adaptive-foreground.png": "ee957bbd1895c794e4ca6c6baebb480e",
"assets/assets/images/wood_texture.png": "0b8c7af54efc65159657f25466262f0b",
"assets/assets/images/warning_panel.png": "b2d10a35389e85e7e54d8d6c5e01a98d",
"assets/assets/images/setting_button.png": "9efc504d9501599648079703b7ea5ce4",
"assets/assets/images/kiddimath.png": "f3dff76fecca1557b1e7591e49987259",
"assets/assets/images/fingermath.png": "44a1e3f2f2b427dc13086c0cfa2fceb4",
"assets/assets/images/pending_badge_mascot.png": "58a177b69b77ec92edbbaf147cc8edab",
"assets/assets/images/finger_math_lefthand/60.png": "e3597506e32f6064d826bd6deac36450",
"assets/assets/images/finger_math_lefthand/70.png": "f0a83386cede1bcfa96b7437527688d7",
"assets/assets/images/finger_math_lefthand/10.png": "5fee9f5af5ad6f44d41cd9b908c16701",
"assets/assets/images/finger_math_lefthand/20.png": "1e9c76c5db04604bce2a5f6c0096b9f9",
"assets/assets/images/finger_math_lefthand/30.png": "3281a8255ad3c65a5482d150de0deffb",
"assets/assets/images/finger_math_lefthand/80.png": "f23ad7cf466ccad9380ee260c59c0162",
"assets/assets/images/finger_math_lefthand/40.png": "db0ed62999f979ceca850463638fd382",
"assets/assets/images/finger_math_lefthand/50.png": "0b9ea6946952615eb4fe429121021dbd",
"assets/assets/images/finger_math_lefthand/90.png": "26918bc1ae41d0229ec98b931e305358",
"assets/assets/images/logo.png": "0a8961fefd2088a9a007a240ac6fe539",
"assets/assets/images/planting_mascot_2.png": "e45a1e0b359366404e5c667443541f87",
"assets/assets/images/planting_tree.png": "db00f340330c78a8363a687b1c86e716",
"assets/assets/images/planting_mascot_1.png": "d4c8ec02feb8a40131f7b76617d7edd2",
"assets/assets/images/medals/gold_medal.png": "e5bb5888dd0ec249b93daf45a0dcc163",
"assets/assets/images/medals/silver_medal.png": "8c29aab94c8d0652a0e6f2e075e3c47c",
"assets/assets/images/medals/bronze_medal.png": "f8549127378324b5b4d6efc424938f80",
"assets/assets/images/back_button.png": "08afb2c698ecde62f634cbd8e4d65ed0",
"assets/assets/images/finger_math_righthand/8.png": "35b8e84007318a843b641e122002eca2",
"assets/assets/images/finger_math_righthand/9.png": "7683c89cbc941435e354055acfff9891",
"assets/assets/images/finger_math_righthand/4.png": "4c25233a530fbe23059f022c3c0b6629",
"assets/assets/images/finger_math_righthand/5.png": "2fb3802142df5b9a5cb6a402f96f278c",
"assets/assets/images/finger_math_righthand/7.png": "5a09e0c62c7e17378365d77f5fc7ea79",
"assets/assets/images/finger_math_righthand/6.png": "64c93bcf6480a8a653ad4b17936c76a7",
"assets/assets/images/finger_math_righthand/2.png": "c450e431d97922d4209a6d71076e7686",
"assets/assets/images/finger_math_righthand/3.png": "c3bc98539b2614e1d7441f3ec0c01df4",
"assets/assets/images/finger_math_righthand/1.png": "b6b2d9654674641190a4d5f48f9a1861",
"assets/assets/images/finger_math_righthand/0.png": "5b72109fe2f114d6a3f998a79ea57851",
"assets/assets/images/dropdown_icon.png": "9dabd3b033a258c8cf5d641227b4566a",
"assets/assets/images/avatars/avatar5.png": "fa30f06c8d9b9e12ccba8a32663e8561",
"assets/assets/images/avatars/avatar4.png": "e7701d182310b3e0a5c35f016c8ee5ae",
"assets/assets/images/avatars/avatar6.png": "ecafa0545ee432f89f7d5d4fdb55202b",
"assets/assets/images/avatars/avatar3.png": "855e431db4319c6601fdb962e9ad874e",
"assets/assets/images/avatars/avatar2.png": "df65ea67732872c3ebefb88fbe7d2a28",
"assets/assets/images/avatars/avatar1.png": "664a0f314e0c46d8c0c23058fc44aa2b",
"assets/assets/images/badge_icon.png": "a62e087ef21201afb543fda3501228d7",
"assets/assets/images/harvesting_mascot.png": "b623c2893a21671de80063f363f8e752",
"assets/assets/images/play_button.png": "bb32d89447436c1809385c9020125b95",
"assets/assets/images/badges/harvesting_super_super12_plusminus_morethan99_jumpplus.png": "224f051006271e04dda8b1324edd733a",
"assets/assets/images/badges/harvesting_kiddi_simple_right_hand.png": "cd49e9da52f889486d31d655808ae56a",
"assets/assets/images/badges/harvesting_super_super34_multiple_3dx1d.png": "6b545b90dce00a619ddd6e3d293d42c7",
"assets/assets/images/badges/harvesting_master_divide_6d.png": "83f856896e52d55cf807d8249e3d6e6a",
"assets/assets/images/badges/harvesting_master_plusminus_3d.png": "b02703ffecb6dc04c127f453824ac787",
"assets/assets/images/badges/harvesting_super_super12_plusminus_lessthan99_bb_plus.png": "78d02c4043773bd60c9ee5cd14b2f230",
"assets/assets/images/badges/harvesting_master_plusminus_2d.png": "60e907d74852baa593460c63b6645226",
"assets/assets/images/badges/harvesting_smart_smart1_flashcard.png": "1870bd4ceef3074b41309ea5021f8a9c",
"assets/assets/images/badges/harvesting_kiddi_simple_both_hand.png": "946ecd9e4d545a260e800732902af166",
"assets/assets/images/badges/harvesting_super_super12_plusminus_lessthan99_simple.png": "2d5cca0044c7295f5d78d98f30d34c20",
"assets/assets/images/badges/harvesting_master_plusminus_5d.png": "a3d96fcdf6498dcbe47077f98cb89eef",
"assets/assets/images/badges/harvesting_super_super12_multiple_2dx1d.png": "6f6adecfcf33ab8cd4c2cbed57814c19",
"assets/assets/images/badges/harvesting_kiddi_simple_left_hand.png": "684cd3618a1efa1e47a6ac68c94c105f",
"assets/assets/images/badges/master_inactive.png": "b6e9a860e4c81db86b14ca66e87981e0",
"assets/assets/images/badges/smart_inactive.png": "3860242054732f8affc6e9d442cd7ccb",
"assets/assets/images/badges/harvesting_super_super34_divide_3d1d.png": "a4b080fa6fc438d3bb36aa56e4443a7a",
"assets/assets/images/badges/harvesting_super_super12_plusminus_lessthan99_bb_minus.png": "967d3b25d5d7541fe0ed6bb9ea08eb4d",
"assets/assets/images/badges/harvesting_smart_smart3_mix.png": "50bb92231a9b481077a1b5c36a02c490",
"assets/assets/images/badges/harvesting_master_plusminus_4d.png": "3944b31cc40c0d174b60622ffab116e4",
"assets/assets/images/badges/harvesting_smart_smart1_lb_plus.png": "0826ad2858dc96a15872409ea01815d7",
"assets/assets/images/badges/harvesting_master_multiple_3d.png": "a03479d41fd0f6304648e2e4e79674d5",
"assets/assets/images/badges/harvesting_smart_smart2_bb_minus.png": "d2c3b295a2197d7c748c84c444bab9b8",
"assets/assets/images/badges/harvesting_super_super12_plusminus_lessthan99_lb_minus.png": "1d7e8766b467ab1e01e59d8837b5cbb7",
"assets/assets/images/badges/harvesting_kiddi_flashcard_both_hand.png": "51a64b4aec2657117d4cfab00a8d48a4",
"assets/assets/images/badges/harvesting_smart_smart1_bb_plus.png": "3d47b7f1e16f9a653f42836b0e8cb6f8",
"assets/assets/images/badges/harvesting_master_divide_3d.png": "f2853b64151bc662399e5ba93ee704a5",
"assets/assets/images/badges/harvesting_kiddi_flashcard_right_hand.png": "8c68ce33ca5ea3c3ed9a553b9494950e",
"assets/assets/images/badges/harvesting_super_super12_plusminus_lessthan99_mix.png": "fa89191951e582c42245865341bd212e",
"assets/assets/images/badges/harvesting_smart_smart1_simple.png": "c269e651e6550f0b873f3ea73d197fc5",
"assets/assets/images/badges/harvesting_smart_smart1_lb_minus.png": "91c1d5660f81d58565b09cf1acfd5026",
"assets/assets/images/badges/kiddi_inactive.png": "74fd620eb83f00587e3f948509c321e0",
"assets/assets/images/badges/harvesting_master_multiple_2d.png": "efbc1f9b9c2c80bbb17826797979577b",
"assets/assets/images/badges/harvesting_super_super34_plusminus_2d.png": "aaab70024aaa9cba0c0bd9477f8f613e",
"assets/assets/images/badges/super_inactive.png": "401f8fa71fec4336d9e1cf0e3e29ac18",
"assets/assets/images/badges/harvesting_super_super12_plusminus_morethan99_jumpminus.png": "acd2070215a90cbe3699f676257afd79",
"assets/assets/images/badges/harvesting_master_multiple_5d.png": "5a06d097d0022290f8a3fe7e810bffb1",
"assets/assets/images/badges/harvesting_super_super12_plusminus_lessthan99_soroban_flashcard.png": "4d79b409a036aca715a738678568443a",
"assets/assets/images/badges/harvesting_smart_smart2_bb_plus.png": "5d07cf44124296c88a775226cdaa58b9",
"assets/assets/images/badges/harvesting_master_divide_4d.png": "0e8728278a6aca36a6936feec7b44e0c",
"assets/assets/images/badges/harvesting_smart_smart3_jump.png": "e412d4f43f9735a11424bdd24a896fee",
"assets/assets/images/badges/harvesting_master_divide_5d.png": "5ad1db6074d879b7968584a63aba28d1",
"assets/assets/images/badges/harvesting_master_multiple_4d.png": "9a05cbcab5178dd5f4d8407389d2a3f4",
"assets/assets/images/badges/harvesting_super_super34_divide_2d1d.png": "0a9ccc814c17f84a4a6eeba00704fdfa",
"assets/assets/images/badges/harvesting_super_super34_plusminus_3d.png": "d8a27c1d756b75c749a166585de735b0",
"assets/assets/images/badges/harvesting_kiddi_flashcard_left_hand.png": "7c171b442f74e706bfa264b328b5aa88",
"assets/assets/images/badges/harvesting_super_super12_plusminus_lessthan99_lb_plus.png": "4a0a2948d4589c857d654fbe7a4e6a6a",
"assets/assets/images/harvesting_tree.png": "1ef832aa7a9dc1aaaf06f10084dd27b6",
"assets/assets/images/selection_container.png": "ff22f98969a8c8e6a46f34d0d8e19be5",
"assets/assets/images/title_tag.png": "541453764f58f1b589843a945475a1f9",
"assets/assets/sfx/kss1.mp3": "fd0664b62bb9205c1ba6868d2d185897",
"assets/assets/sfx/spsh1.mp3": "2e1354f39a5988afabb2fdd27cba63e1",
"assets/assets/sfx/excellent.mp3": "131d88482f0d7bfb4803af390bfb04b2",
"assets/assets/sfx/fwfwfwfw1.mp3": "d0f7ee0256d1f0d40d77a1264f23342b",
"assets/assets/sfx/fwfwfwfwfw1.mp3": "46355605b43594b67a39170f89141dc1",
"assets/assets/sfx/ohno.mp3": "396d258be56634136bf73d4e022963f0",
"assets/assets/sfx/sh1.mp3": "f695db540ae0ea850ecbb341a825a47b",
"assets/assets/sfx/hh1.mp3": "fab21158730b078ce90568ce2055db07",
"assets/assets/sfx/p1.mp3": "ad28c0d29ac9e8adf9a91a46bfbfac82",
"assets/assets/sfx/sh2.mp3": "e3212b9a7d1456ecda26fdc263ddd3d0",
"assets/assets/sfx/hh2.mp3": "4d39e7365b89c74db536c32dfe35580b",
"assets/assets/sfx/kch1.mp3": "a832ed0c8798b4ec95c929a5b0cabd3f",
"assets/assets/sfx/oo1.mp3": "94b9149911d0f2de8f3880c524b93683",
"assets/assets/sfx/lalala1.mp3": "b0b85bf59814b014ff48d6d79275ecfd",
"assets/assets/sfx/p2.mp3": "ab829255f1ef20fbd4340a7c9e5157ad",
"assets/assets/sfx/hash3.mp3": "38aad045fbbf951bf5e4ca882b56245e",
"assets/assets/sfx/hash2.mp3": "d26cb7676c3c0d13a78799b3ccac4103",
"assets/assets/sfx/wssh1.mp3": "cf92e8d8483097569e3278c82ac9f871",
"assets/assets/sfx/dsht1.mp3": "c99ece72f0957a9eaf52ade494465946",
"assets/assets/sfx/hash1.mp3": "f444469cd7a5a27062580ecd2b481770",
"assets/assets/sfx/wssh2.mp3": "255c455d9692c697400696cbb28511cc",
"assets/assets/sfx/README.md": "33033a0943d1325f78116fcf4b8a96ec",
"assets/assets/sfx/yay1.mp3": "8d3b940e33ccfec612d06a41ae616f71",
"assets/assets/sfx/k2.mp3": "8ec44723c33a1e41f9a96d6bbecde6b9",
"assets/assets/sfx/k1.mp3": "37ffb6f8c0435298b0a02e4e302e5b1f",
"assets/assets/sfx/haw1.mp3": "00db66b69283acb63a887136dfe7a73c",
"assets/assets/sfx/ehehee1.mp3": "52f5042736fa3f4d4198b97fe50ce7f3",
"assets/assets/sfx/pick.mp3": "307aa3a1cdcbedfb886d4f0683ac230c",
"assets/assets/sfx/ws1.mp3": "5cfa8fda1ee940e65a19391ddef4d477",
"assets/assets/sfx/negative_beeps.mp3": "9a6ebd59266412d4c124ef83f578c7cd",
"assets/assets/sfx/wehee1.mp3": "5a986231104c9f084104e5ee1c564bc4",
"assets/assets/sfx/goodjob.mp3": "5d92f0ebe36ecebc8fa53989430d0302",
"assets/assets/sfx/swishswish1.mp3": "219b0f5c2deec2eda0a9e0e941894cb6",
"assets/assets/fonts/Baloo-Regular.ttf": "7ea5a2778c1043f5a28f86b10eaa588d",
"assets/assets/fonts/SVN-Vantom.otf": "6c06365b425911d40155afe33ae5a6ac",
"assets/assets/fonts/UTM%2520Avo.ttf": "5b5fcc354ed196046001a2db207984fa",
"assets/assets/fonts/iCiel-Pacifico.otf": "e369f61a78c093012ca192389d011d6f",
"assets/assets/fonts/HLT%2520Fall%2520For%2520You.ttf": "5bfa8b09ad3fa5ef494efbf3aca9cf4d",
"assets/assets/fonts/UTM-Cookies.ttf": "87f7b04f82d7f58da0276e43e2f55ce0",
"assets/assets/fonts/Mali-SemiBold.ttf": "154697f2a2007a57bfd35667b0957fda",
"assets/assets/fonts/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/UTM%2520Aptima.ttf": "8c38c404394cb2df6002064ae7b5ede5",
"assets/assets/fonts/iCielSoupofJustice.ttf": "ff5ea31e3f72eaeb8ef878e0b4aa6aef",
"assets/assets/fonts/VfDecorate56.ttf": "68caf02196309f5b91096bda7ee6defb",
"assets/assets/fonts/Nunito-Italic.ttf": "fac5c8ffb51e06094affdbb7fff9000e",
"assets/assets/fonts/ARLRDBD.ttf": "200135e8e5aec51916af96b03c1ee8fc",
"assets/assets/fonts/CustomIcons.ttf": "ee0e5c38db22ed4eb1f1d1163bc347cf",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
