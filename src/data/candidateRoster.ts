export interface CandidateRosterEntry {
  sn: number;
  name: string; // Standard display name (e.g. "Michael Felix" or "Nelson Emmanuel Chams")
  officialName: string; // Spreadsheet format (e.g. "Felix, Michael")
  email: string;
  idNumber: string; // e.g. "ASCONS/BN55/021"
  aliases?: string[];
}

/**
 * Official Accredited BN 55 Candidates Roster
 * Source: Official BN_55_Q&A (2).xlsx Examination Roster (185 Candidates)
 * 
 * Only candidates listed on this accredited roster are authorized to receive
 * verification codes and register for the NMCN Examination Preparation Portal.
 */
export const CANDIDATE_ROSTER: CandidateRosterEntry[] = [
  { sn: 1, name: "Michael Felix", officialName: "Felix, Michael", email: "felixmichael770@gmail.com", idNumber: "ASCONS/BN55/001" },
  { sn: 2, name: "Olive Ephraim", officialName: "Ephraim, Olive", email: "oliveephraim@gmail.com", idNumber: "ASCONS/BN55/002" },
  { sn: 3, name: "Jonathan Isuwa Isaac", officialName: "Isaac, Jonathan, Isuwa", email: "joneschipale1749@gmail.com", idNumber: "ASCONS/BN55/003" },
  { sn: 4, name: "Jemima Japliya Yohanna", officialName: "Yohanna, Jemima, Japliya", email: "jemimayohanna4@gmail.com", idNumber: "ASCONS/BN55/004" },
  { sn: 5, name: "Walmiya Eli Dinshiya", officialName: "Dinshiya, Walmiya, Eli", email: "dinwalmiya@gmail.com", idNumber: "ASCONS/BN55/005" },
  { sn: 6, name: "Hikimat Ayomide Abdulfatai", officialName: "Abdulfatai, Hikimat, Ayomide", email: "abdulfataihikimatayomide@gmail.com", idNumber: "ASCONS/BN55/006" },
  { sn: 7, name: "Sarah Usaku Samson", officialName: "Samson, Sarah, Usaku", email: "sonlinasamson@gmail.com", idNumber: "ASCONS/BN55/007" },
  { sn: 8, name: "Millicent Fwah Michael", officialName: "Michael, Millicent, Fwah", email: "michaelmillicentfwah@gmail.com", idNumber: "ASCONS/BN55/008" },
  { sn: 9, name: "Nuhu John", officialName: "John, Nuhu", email: "nuhujohn070@gmail.com", idNumber: "ASCONS/BN55/009" },
  { sn: 10, name: "Binah Ularamai Alex", officialName: "Alex, Binah, Ularamai", email: "binaha48@gmail.com", idNumber: "ASCONS/BN55/010" },
  { sn: 11, name: "Mathew Manumenso Moses", officialName: "Moses, Mathew, Manumenso", email: "manumenso001@gmail.com", idNumber: "ASCONS/BN55/011" },
  { sn: 12, name: "Precious Dota Kefas", officialName: "Kefas, Precious, Dota", email: "preciousdotakefas@gmail.com", idNumber: "ASCONS/BN55/012" },
  { sn: 13, name: "Precious Nmesoma Madueke", officialName: "Madueke, Precious, Nmesoma", email: "preciousmadueke151@gmail.com", idNumber: "ASCONS/BN55/013" },
  { sn: 14, name: "Rita David", officialName: "David, Rita", email: "davidrita002023@gmail.com", idNumber: "ASCONS/BN55/014" },
  { sn: 15, name: "Ema Anamija Dangari", officialName: "Dangari, Ema, Anamija", email: "emadangari55@gmail.com", idNumber: "ASCONS/BN55/015" },
  { sn: 16, name: "Abraham Andrew", officialName: "Andrew, Abraham", email: "abraskid@gmail.com", idNumber: "ASCONS/BN55/016" },
  { sn: 17, name: "Passover Bakuse Benson", officialName: "Benson, Passover, Bakuse", email: "bensonpassover18@gmail.com", idNumber: "ASCONS/BN55/017" },
  { sn: 18, name: "Abubakar Gurama Dahiru", officialName: "Dahiru, Abubakar, Gurama", email: "abubakardahirugurama@gmail.com", idNumber: "ASCONS/BN55/018" },
  { sn: 19, name: "Mosoti Jared Hanya", officialName: "Hanya, Mosoti, Jared", email: "mosotiwonaguru@gmail.com", idNumber: "ASCONS/BN55/019" },
  { sn: 20, name: "Kaisa Kake Godwin", officialName: "Godwin, Kaisa, Kake", email: "kaisakakegodwin@gmail.com", idNumber: "ASCONS/BN55/020" },
  { 
    sn: 21, 
    name: "Nelson Emmanuel Chams", 
    officialName: "Nelson, Emmanuel, Chams", 
    email: "mhixta.emmy001@gmail.com", 
    idNumber: "ASCONS/BN55/021",
    aliases: ["Nelson Emmanuel", "Emmanuel Chams Nelson", "Mhixta Emmy", "Emmy Chams", "Nelson Chams", "Emmanuel Nelson"]
  },
  { sn: 22, name: "Melody Amacho'i Joel", officialName: "Joel, Melody, Amacho'i", email: "melodyjoelamachoi@gmail.com", idNumber: "ASCONS/BN55/022" },
  { sn: 23, name: "Favour Ohili Ajene", officialName: "Ajene, Favour, Ohili", email: "favourajene15@gmail.com", idNumber: "ASCONS/BN55/023" },
  { sn: 24, name: "Sylvanus Oropwa Nuhu", officialName: "Nuhu, Sylvanus, Oropwa", email: "sylvanusoropwan@gmail.com", idNumber: "ASCONS/BN55/024" },
  { sn: 25, name: "Abdulrazak Sheriff Isah", officialName: "Isah, Abdulrazak, Sheriff", email: "abdulrazakisahsheriff@gmail.com", idNumber: "ASCONS/BN55/025" },
  { sn: 26, name: "Alfred Philip", officialName: "Philip, Alfred", email: "philipalfred70@gmail.com", idNumber: "ASCONS/BN55/026" },
  { sn: 27, name: "Dhiliya Philemon", officialName: "Philemon, Dhiliya", email: "dhiliyaphilemon@gmail.com", idNumber: "ASCONS/BN55/027" },
  { sn: 28, name: "Muktar Ali", officialName: "Ali, Muktar", email: "muktaralimk1995@gmail.com", idNumber: "ASCONS/BN55/028" },
  { sn: 29, name: "Job Francis", officialName: "Francis, Job", email: "jobfrancis300@gmail.com", idNumber: "ASCONS/BN55/029" },
  { sn: 30, name: "Emily Augustine Katuyea", officialName: "Katuyea, Emily, Augustine", email: "augustineemily538@gmail.com", idNumber: "ASCONS/BN55/030" },
  { sn: 31, name: "Nyampisonya Tooh Nata'ala", officialName: "Nata'ala, Nyampisonya, Tooh", email: "nattypurity@gmail.com", idNumber: "ASCONS/BN55/031" },
  { sn: 32, name: "Asiya Tanko Muhammad", officialName: "Muhammad, Asiya, Tanko", email: "asiyamuhammadtanko64@gmail.com", idNumber: "ASCONS/BN55/032" },
  { sn: 33, name: "Martina James", officialName: "James, Martina", email: "martinajames926@gmail.com", idNumber: "ASCONS/BN55/033" },
  { sn: 34, name: "Favour Elisha", officialName: "Elisha, Favour", email: "favourelisha262@gmail.com", idNumber: "ASCONS/BN55/034" },
  { sn: 35, name: "Nefariya Andukwa", officialName: "Andukwa, Nefariya", email: "nefariyaa@gmail.com", idNumber: "ASCONS/BN55/035" },
  { sn: 36, name: "Damijuda Augustine", officialName: "Augustine, Damijuda", email: "damijudaaugustine@gmail.com", idNumber: "ASCONS/BN55/036" },
  { sn: 37, name: "Courage Onisemus", officialName: "Onisemus, Courage", email: "conisemus@gmail.com", idNumber: "ASCONS/BN55/037" },
  { sn: 38, name: "Ishaku Haruna", officialName: "Haruna, Ishaku", email: "dianaflames0@gmail.com", idNumber: "ASCONS/BN55/038" },
  { sn: 39, name: "Abdulwahab Yakubu", officialName: "Yakubu, Abdulwahab", email: "abdulwahabyakubu8464@gmail.com", idNumber: "ASCONS/BN55/039" },
  { sn: 40, name: "Bright Samson", officialName: "Samson, Bright", email: "samsonbright068@gmail.com", idNumber: "ASCONS/BN55/040" },
  { sn: 41, name: "Paramkit Edmund", officialName: "Edmund, Paramkit", email: "paramkitedmund60@gmail.com", idNumber: "ASCONS/BN55/041" },
  { sn: 42, name: "Aisha Yuguda", officialName: "Yuguda, Aisha", email: "aishyuguda95@gmail.com", idNumber: "ASCONS/BN55/042" },
  { sn: 43, name: "Joshua Thliza David", officialName: "David, Joshua, Thliza", email: "davidthlizajoshua@gmail.com", idNumber: "ASCONS/BN55/043" },
  { sn: 44, name: "Habibu Musa", officialName: "Musa, Habibu", email: "habibumusa1177@gmail.com", idNumber: "ASCONS/BN55/044" },
  { sn: 45, name: "Leah Ibrahim", officialName: "Ibrahim, Leah", email: "ibrahimleah50@gmail.com", idNumber: "ASCONS/BN55/045" },
  { sn: 46, name: "Tetibe Abel", officialName: "Abel, Tetibe", email: "abeltetibe@gmail.com", idNumber: "ASCONS/BN55/046" },
  { sn: 47, name: "Benjamin Andrew Joshua", officialName: "Joshua, Benjamin, Andrew", email: "benjaminjoshua6823@gmail.com", idNumber: "ASCONS/BN55/047" },
  { sn: 48, name: "Favour Francis", officialName: "Francis, Favour", email: "favourfrancis2006@gmail.com", idNumber: "ASCONS/BN55/048" },
  { sn: 49, name: "Grace Lily Andrew", officialName: "Andrew, Grace, Lily", email: "andrewgrace5525@gmail.com", idNumber: "ASCONS/BN55/049" },
  { sn: 50, name: "Ayuba John", officialName: "John, Ayuba", email: "johnayuba280@gmail.com", idNumber: "ASCONS/BN55/050" },
  { sn: 51, name: "Fatima Adamu Aminu", officialName: "Aminu, Fatima, Adamu", email: "fatimaaminuadamu2005@gmail.com", idNumber: "ASCONS/BN55/051" },
  { sn: 52, name: "Eunice Memaji Joseph", officialName: "Joseph, Eunice, Memaji", email: "eunicememajijoseph@gmail.com", idNumber: "ASCONS/BN55/052" },
  { sn: 53, name: "Alice Ishaku", officialName: "Ishaku, Alice", email: "aliceishaku011@gmail.com", idNumber: "ASCONS/BN55/053" },
  { sn: 54, name: "Ahmed Iyawa Suleiman", officialName: "Suleiman, Ahmed, Iyawa", email: "ahmediyawa6@gmail.com", idNumber: "ASCONS/BN55/054" },
  { sn: 55, name: "Hauwa Babainna Ahmed", officialName: "Ahmed, Hauwa, Babainna", email: "hauwababainna@gmail.com", idNumber: "ASCONS/BN55/055" },
  { sn: 56, name: "Maryassumpta Metu", officialName: "Metu, Maryassumpta", email: "marbyebere722@gmail.com", idNumber: "ASCONS/BN55/056" },
  { sn: 57, name: "Precious Donsanda Philemon", officialName: "Philemon, Precious, Donsanda", email: "donsanda4real@gmail.com", idNumber: "ASCONS/BN55/057" },
  { sn: 58, name: "Reginah Emmanuel", officialName: "Emmanuel, Reginah", email: "reginahemmanuel94@gmail.com", idNumber: "ASCONS/BN55/058" },
  { sn: 59, name: "Ishaka Hananiya Bobbo", officialName: "Bobbo, Ishaka, Hananiya", email: "ishakabobbo49@gmail.com", idNumber: "ASCONS/BN55/059" },
  { sn: 60, name: "Asma'u Muhammed", officialName: "Muhammed, Asma'u", email: "asmaumuhammed005@gmail.com", idNumber: "ASCONS/BN55/060" },
  { sn: 61, name: "Zulai Abubakar", officialName: "Abubakar, Zulai", email: "abubakarzulaikah1@gmail.com", idNumber: "ASCONS/BN55/061" },
  { sn: 62, name: "Aisha Tukur Aliyu", officialName: "Aliyu, Aisha, Tukur", email: "aishaaliyutukur111@gmail.com", idNumber: "ASCONS/BN55/062" },
  { sn: 63, name: "Silvia David", officialName: "David, Silvia", email: "silviadavid400@gmail.com", idNumber: "ASCONS/BN55/063" },
  { sn: 64, name: "Precious Bernard", officialName: "Bernard, Precious", email: "bernardhatitiya@gmail.com", idNumber: "ASCONS/BN55/064" },
  { sn: 65, name: "Mikailu Benjamin", officialName: "Benjamin, Mikailu", email: "benjaminmikailu13@gmail.com", idNumber: "ASCONS/BN55/065" },
  { sn: 66, name: "Maryam Usman Ahmad", officialName: "Ahmad, Maryam, Usman", email: "maryamahmadusman222@gmail.com", idNumber: "ASCONS/BN55/066" },
  { sn: 67, name: "Ahyekapwa Andrew", officialName: "Andrew, Ahyekapwa", email: "andrewaltiya45@gmail.com", idNumber: "ASCONS/BN55/067" },
  { sn: 68, name: "Mathew Daniel", officialName: "Daniel, Mathew", email: "danielmathew187@gmail.com", idNumber: "ASCONS/BN55/068" },
  { sn: 69, name: "Chadikyam Ittah Levi", officialName: "Levi, Chadikyam, Ittah", email: "ittahchadikyamlevi@gmail.com", idNumber: "ASCONS/BN55/069" },
  { sn: 70, name: "Amina Njidda", officialName: "Njidda, Amina", email: "aminanjidda55@gmail.com", idNumber: "ASCONS/BN55/070" },
  { sn: 71, name: "Asiya Musa", officialName: "Musa, Asiya", email: "asiyamusa684@gmail.com", idNumber: "ASCONS/BN55/071" },
  { sn: 72, name: "Marcella Emmanuel", officialName: "Emmanuel, Marcella", email: "marcellaemmanuel764@gmail.com", idNumber: "ASCONS/BN55/072" },
  { sn: 73, name: "Praise Nicholas", officialName: "Nicholas, Praise", email: "praisenicholas674@gmail.com", idNumber: "ASCONS/BN55/073" },
  { sn: 74, name: "Ijanada Stella Simon", officialName: "Simon, Ijanada, Stella", email: "ijanadasimon7@gmail.com", idNumber: "ASCONS/BN55/074" },
  { sn: 75, name: "Ussa Andrew", officialName: "Andrew, Ussa", email: "ussaandrew60@gmail.com", idNumber: "ASCONS/BN55/075" },
  { sn: 76, name: "Ishaya Taghe", officialName: "Taghe, Ishaya", email: "Ishayataghe53@gmail.com", idNumber: "ASCONS/BN55/076" },
  { sn: 77, name: "Finbar Cyrus", officialName: "Cyrus, Finbar", email: "finbarrcyrus23@gmail.com", idNumber: "ASCONS/BN55/077" },
  { sn: 78, name: "Gracious Gilam", officialName: "Gilam, Gracious", email: "graciousgilam7@gmail.com", idNumber: "ASCONS/BN55/078" },
  { sn: 79, name: "Praise Simon", officialName: "Simon, Praise", email: "praisesimon19@gmail.com", idNumber: "ASCONS/BN55/079" },
  { sn: 80, name: "Eunice Eugine", officialName: "Eugine, Eunice", email: "euniceeugine399@gmail.com", idNumber: "ASCONS/BN55/080" },
  { sn: 81, name: "Joshua Pirenveso", officialName: "Pirenveso, Joshua", email: "joshuapirenveso2004@gmail.com", idNumber: "ASCONS/BN55/081" },
  { sn: 82, name: "Abdulrasheed Ibrahim", officialName: "Ibrahim, Abdulrasheed", email: "ibrahimabdulrasheed812@gmail.com", idNumber: "ASCONS/BN55/082" },
  { sn: 83, name: "Miqdad Abubakar", officialName: "Abubakar, Miqdad", email: "miqdadabubakar1@gmail.com", idNumber: "ASCONS/BN55/083" },
  { sn: 84, name: "Joseph Malgwi Umar", officialName: "Umar, Joseph, Malgwi", email: "josephmalgwi2@gmail.com", idNumber: "ASCONS/BN55/084" },
  { sn: 85, name: "Bello Muhammad Muhammad", officialName: "Muhammad, Bello, Muhammad", email: "Muhammadb3193@gmail.com", idNumber: "ASCONS/BN55/085" },
  { sn: 86, name: "Victor Zira", officialName: "Zira, Victor", email: "victorzira054@gmail.com", idNumber: "ASCONS/BN55/086" },
  { sn: 87, name: "Zhihwi Jacob", officialName: "Jacob, Zhihwi", email: "jacobzhihwi@gmail.com", idNumber: "ASCONS/BN55/087" },
  { sn: 88, name: "Firdausi Ibrahim Adam", officialName: "Adam, Firdausi, Ibrahim", email: "firdausibintimam@gmail.com", idNumber: "ASCONS/BN55/088" },
  { sn: 89, name: "Nicholas James", officialName: "James, Nicholas", email: "nicholasjamesnazi@gmail.com", idNumber: "ASCONS/BN55/089" },
  { sn: 90, name: "Ezekiel David", officialName: "David, Ezekiel", email: "ezekieldavidkulla@gmail.com", idNumber: "ASCONS/BN55/090" },
  { sn: 91, name: "Queensley Hillary", officialName: "Hillary, Queensley", email: "hillaryqueensley@gmail.com", idNumber: "ASCONS/BN55/091" },
  { sn: 92, name: "Hyellathuwada Yusuf", officialName: "Yusuf, Hyellathuwada", email: "hyellathuwadayusuf@gmail.com", idNumber: "ASCONS/BN55/092" },
  { sn: 93, name: "Zainab Aliyu Abubakar", officialName: "Abubakar, Zainab, Aliyu", email: "abubakaraliyuzainab45@gmail.com", idNumber: "ASCONS/BN55/093" },
  { sn: 94, name: "Faith Goddon", officialName: "Goddon, Faith", email: "goddonfaith@gmail.com", idNumber: "ASCONS/BN55/094" },
  { sn: 95, name: "Comfort Mamuda", officialName: "Mamuda, Comfort", email: "mamudacomfort29@gmail.com", idNumber: "ASCONS/BN55/095" },
  { sn: 96, name: "Gladys Adam", officialName: "Adam, Gladys", email: "wunubena@gmail.com", idNumber: "ASCONS/BN55/096" },
  { sn: 97, name: "Fatima Balami Haruna", officialName: "Haruna, Fatima, Balami", email: "balamifatima222@gmail.com", idNumber: "ASCONS/BN55/097" },
  { sn: 98, name: "Halima Muntaqa", officialName: "Muntaqa, Halima", email: "halimamuntaqa@gmail.com", idNumber: "ASCONS/BN55/098" },
  { sn: 99, name: "Innocent Mathias", officialName: "Mathias, Innocent", email: "innocentmathias89@gmail.com", idNumber: "ASCONS/BN55/099" },
  { sn: 100, name: "Timothy Ezekiel", officialName: "Ezekiel, Timothy", email: "timothyezekiel005@gmail.com", idNumber: "ASCONS/BN55/100" },
  { sn: 101, name: "Madaki Iliya", officialName: "Iliya, Madaki", email: "iliyamadaki019@gmail.com", idNumber: "ASCONS/BN55/101" },
  { sn: 102, name: "Ramatu Mustapha Abubakar", officialName: "Abubakar, Ramatu, Mustapha", email: "rahmaabubakar211@gmail.com", idNumber: "ASCONS/BN55/102" },
  { sn: 103, name: "Fidelia Joseph Sheyin", officialName: "Sheyin, Fidelia, Joseph", email: "fideliajoseph22@gmail.com", idNumber: "ASCONS/BN55/103" },
  { sn: 104, name: "Panos P. Mijah", officialName: "Mijah, Panos, P", email: "panospakasom78@gmail.com", idNumber: "ASCONS/BN55/104" },
  { sn: 105, name: "Adonijah Wagai Alfred", officialName: "Alfred, Adonijah, Wagai", email: "adonijahalfred776@gmail.com", idNumber: "ASCONS/BN55/105" },
  { sn: 106, name: "Chamu Lawrence", officialName: "Lawrence, Chamu", email: "chamulawrence58@gmail.com", idNumber: "ASCONS/BN55/106" },
  { sn: 107, name: "Lois Musa", officialName: "Musa, Lois", email: "musalois73@gmail.com", idNumber: "ASCONS/BN55/107" },
  { sn: 108, name: "Nukafata Kuchohfe Mustapha", officialName: "Mustapha, Nukafata, Kuchohfe", email: "kuchohfekafata@gmail.com", idNumber: "ASCONS/BN55/108" },
  { sn: 109, name: "Saratu Hara", officialName: "Hara, Saratu", email: "saratuhara65@gmail.com", idNumber: "ASCONS/BN55/109" },
  { sn: 110, name: "Goodness Jude", officialName: "Jude, Goodness", email: "goodnessjude76@gmail.com", idNumber: "ASCONS/BN55/110" },
  { sn: 111, name: "Muhammad Adam Ahmad", officialName: "Ahmad, Muhammad, Adam", email: "amadadam674@gmail.com", idNumber: "ASCONS/BN55/111" },
  { sn: 112, name: "Kusaniyhel Luka", officialName: "Luka, Kusaniyhel", email: "kusaniyelluka@gmail.com", idNumber: "ASCONS/BN55/112" },
  { sn: 113, name: "Lenti Yakubu", officialName: "Yakubu, Lenti", email: "lentyyakubu@gmail.com", idNumber: "ASCONS/BN55/113" },
  { sn: 114, name: "Juliet Igene Gabriel", officialName: "Gabriel, Juliet, Igene", email: "julietgabriel98@gmail.com", idNumber: "ASCONS/BN55/114" },
  { sn: 115, name: "Usman Halidu", officialName: "Halidu, Usman", email: "usmanhalidu75@gmail.com", idNumber: "ASCONS/BN55/115" },
  { sn: 116, name: "Habiba Usman Dahiru", officialName: "Dahiru, Habiba, Usman", email: "habdabusman2020@gmail.com", idNumber: "ASCONS/BN55/116" },
  { sn: 117, name: "Favour Kwabe Stephen", officialName: "Stephen, Favour, Kwabe", email: "favourstephenkwabe2@gmail.com", idNumber: "ASCONS/BN55/117" },
  { sn: 118, name: "Blessing Mijah Salam", officialName: "Salam, Blessing, Mijah", email: "blessingsalam6@gmail.com", idNumber: "ASCONS/BN55/118" },
  { sn: 119, name: "Aisha Zubairu Umar", officialName: "Umar, Aisha, Zubairu", email: "aishapreety2003@gmail.com", idNumber: "ASCONS/BN55/119" },
  { sn: 120, name: "Mankisiya Alice Yasena", officialName: "Yasena, Mankisiya, Alice", email: "yasenamankisiya@gmail.com", idNumber: "ASCONS/BN55/120" },
  { sn: 121, name: "Eldinah Elias Enson", officialName: "Enson, Eldinah, Elias", email: "eldinahenson@gmail.com", idNumber: "ASCONS/BN55/121" },
  { sn: 122, name: "Jesse Alawa", officialName: "Alawa, Jesse", email: "jessealawa78@gmail.com", idNumber: "ASCONS/BN55/122" },
  { sn: 123, name: "Abel Zakka", officialName: "Zakka, Abel", email: "abelzakka20@gmail.com", idNumber: "ASCONS/BN55/123" },
  { sn: 124, name: "Aisha Musa", officialName: "Musa, Aisha", email: "jiddamusaushman@gmail.com", idNumber: "ASCONS/BN55/124" },
  { sn: 125, name: "Samuel Bamsida Jonathan", officialName: "Jonathan, Samuel, Bamsida", email: "samuelbamsida2015@gmail.com", idNumber: "ASCONS/BN55/125" },
  { sn: 126, name: "Mohammed Bello Usman", officialName: "Usman, Mohammed, Bello", email: "mohammedbellousman@gmail.com", idNumber: "ASCONS/BN55/126" },
  { sn: 127, name: "Unity Elisha", officialName: "Elisha, Unity", email: "elishaunity87@gmail.com", idNumber: "ASCONS/BN55/127" },
  { sn: 128, name: "Vahyella John", officialName: "John, Vahyella", email: "vaheyellajohn81@gmail.com", idNumber: "ASCONS/BN55/128" },
  { sn: 129, name: "Usman Sani Khalid", officialName: "Khalid, Usman, Sani", email: "usmansanikhalid@gmail.com", idNumber: "ASCONS/BN55/129" },
  { sn: 130, name: "Fadimatu Aliyu", officialName: "Aliyu, Fadimatu", email: "aliyufadimatu122@gmail.com", idNumber: "ASCONS/BN55/130" },
  { sn: 131, name: "Juliana Gabriel", officialName: "Gabriel, Juliana", email: "juliana4gabriel@gmail.com", idNumber: "ASCONS/BN55/131" },
  { sn: 132, name: "Honesty Barnabas", officialName: "Barnabas, Honesty", email: "honestybarnabas112@gmail.com", idNumber: "ASCONS/BN55/132" },
  { sn: 133, name: "Hassana Salihu", officialName: "Salihu, Hassana", email: "hs9745369@gmail.com", idNumber: "ASCONS/BN55/133" },
  { sn: 134, name: "Hyelduku Mohammed", officialName: "Mohammed, Hyelduku", email: "mohammedhyelduku4@gmail.com", idNumber: "ASCONS/BN55/134" },
  { sn: 135, name: "Abigail Bage", officialName: "Bage, Abigail", email: "bageabigail01@gmail.com", idNumber: "ASCONS/BN55/135" },
  { sn: 136, name: "Faiza Usman Ahmad", officialName: "Ahmad, Faiza, Usman", email: "faizaahmadusm@gmail.com", idNumber: "ASCONS/BN55/136" },
  { sn: 137, name: "Saint Luti Ishaku", officialName: "Ishaku, saint, Luti", email: "lutisaint@gmail.com", idNumber: "ASCONS/BN55/137" },
  { sn: 138, name: "Magdalene Stephen", officialName: "Stephen, Magdalene", email: "magdalenestephe01@gmail.com", idNumber: "ASCONS/BN55/138" },
  { sn: 139, name: "Aisha Kawu Muhammad", officialName: "Muhammad, Aisha, Kawu", email: "aishamuhammedkawu@gmail.com", idNumber: "ASCONS/BN55/139" },
  { sn: 140, name: "Eucharia Teru Emmanuel", officialName: "Emmanuel, Eucharia, Teru", email: "euchariaemmanuel179@gmail.com", idNumber: "ASCONS/BN55/140" },
  { sn: 141, name: "Esther Demshemino Matthew", officialName: "Matthew, Esther, Demshemino", email: "estherdem169@gmail.com", idNumber: "ASCONS/BN55/141" },
  { sn: 142, name: "Chinwendu Agnes Okereke", officialName: "Okereke, Chinwendu, Agnes", email: "chinweagnesb@gmail.com", idNumber: "ASCONS/BN55/142" },
  { sn: 143, name: "Racheal Masi John", officialName: "John, Racheal, Masi", email: "johnracheal897@gmail.com", idNumber: "ASCONS/BN55/143" },
  { sn: 144, name: "Anasam Hyellakidati Sebastian", officialName: "Sebastian, Anasam, Hyellakidati", email: "bestsyanasam@gmail.com", idNumber: "ASCONS/BN55/144" },
  { sn: 145, name: "Peculiar Patrick Nicholas", officialName: "Nicholas, Peculiar, Patrick", email: "peculiarnicholas5@gmail.com", idNumber: "ASCONS/BN55/145" },
  { sn: 146, name: "Maymun Rabiu", officialName: "Rabiu, Maymun", email: "maymunrabiu@gmail.com", idNumber: "ASCONS/BN55/146" },
  { sn: 147, name: "Hiradi Musa Mafa", officialName: "Mafa, Hiradi, Musa", email: "hiradimusa3@gmail.com", idNumber: "ASCONS/BN55/147" },
  { sn: 148, name: "Jessica Phyneas", officialName: "Phyneas, Jessica", email: "jessicadogan11@gmail.com", idNumber: "ASCONS/BN55/148" },
  { sn: 149, name: "Kwatam Nyako", officialName: "Nyako, Kwatam", email: "princesskwatamnyako@gmail.com", idNumber: "ASCONS/BN55/149" },
  { sn: 150, name: "Deborah Puwu James", officialName: "James, Deborah, Puwu", email: "jamesdeborahpuwu041@gmail.com", idNumber: "ASCONS/BN55/150" },
  { sn: 151, name: "Amina Musa", officialName: "Musa, Amina", email: "Ammimuusa@gmail.com", idNumber: "ASCONS/BN55/151" },
  { sn: 152, name: "Girmuram Bumbum Amiel", officialName: "Amiel, Girmuram, Bumbum", email: "girmuramamiel2019@gmail.com", idNumber: "ASCONS/BN55/152" },
  { sn: 153, name: "Appolonia Alice Anosha", officialName: "Anosha, Appolonia, Alice", email: "anoshalice@gmail.com", idNumber: "ASCONS/BN55/153" },
  { sn: 154, name: "Rejoice Christopher", officialName: "Christopher, Rejoice", email: "christopherrejoice022@gmail.com", idNumber: "ASCONS/BN55/154" },
  { sn: 155, name: "Fiyemila Solomon Frankly", officialName: "Frankly, Fiyemila, Solomon", email: "fiyemila@gmail.com", idNumber: "ASCONS/BN55/155" },
  { sn: 156, name: "Flora Francis", officialName: "Francis, Flora", email: "florafrancis752@gmail.com", idNumber: "ASCONS/BN55/156" },
  { sn: 157, name: "Aisha Abdulganiyu Abdullahi", officialName: "Abdullahi, Aisha, Abdulganiyu", email: "abdulaishatu371@gmail.com", idNumber: "ASCONS/BN55/157" },
  { sn: 158, name: "Elshaddai Pwati Elias", officialName: "Elias, Elshaddai, Pwati", email: "elshaddaielias@gmail.com", idNumber: "ASCONS/BN55/158" },
  { sn: 159, name: "Bwangsiki Makka Dimas", officialName: "Dimas, Bwangsiki, Makka", email: "dimaspraise@gmail.com", idNumber: "ASCONS/BN55/159" },
  { sn: 160, name: "Elizabeth Ambrose", officialName: "Ambrose, Elizabeth", email: "lizzyambrose24@gmail.com", idNumber: "ASCONS/BN55/160" },
  { sn: 161, name: "Ikilima Inuwa Adamu", officialName: "Adamu, Ikilima, Inuwa", email: "adamuikleemah@gmail.com", idNumber: "ASCONS/BN55/161" },
  { sn: 162, name: "Zainab Zailani", officialName: "Zailani, Zainab", email: "zainabzailani5@gmail.com", idNumber: "ASCONS/BN55/162" },
  { sn: 163, name: "Scholarstica Okri Inah", officialName: "Inah, Scholarstica, Okri", email: "sticainah@gmail.com", idNumber: "ASCONS/BN55/163" },
  { sn: 164, name: "Aishatu Zubairu", officialName: "Zubairu, Aishatu", email: "aishatuzubairu09@gmail.com", idNumber: "ASCONS/BN55/164" },
  { sn: 165, name: "Kwatina Diwa Anjikwi", officialName: "Anjikwi, Kwatina, Diwa", email: "Kwatinaanjikwi67@gmail.com", idNumber: "ASCONS/BN55/165" },
  { sn: 166, name: "Hauwa Ibrahim", officialName: "Ibrahim, Hauwa", email: "dikkohammanhauwa8@gmail.com", idNumber: "ASCONS/BN55/166" },
  { sn: 167, name: "Dorcas Agana", officialName: "Agana, Dorcas", email: "aganados01446@gmail.com", idNumber: "ASCONS/BN55/167" },
  { sn: 168, name: "Mosoti Stephen Gyebgon", officialName: "Gyebgon, Mosoti, Stephen", email: "mosoti6740@gmail.com", idNumber: "ASCONS/BN55/168" },
  { sn: 169, name: "Rejoice Sunday", officialName: "Sunday, Rejoice", email: "Rejoicesunday202582@gmail.com", idNumber: "ASCONS/BN55/169" },
  { sn: 170, name: "Rahab Sunday", officialName: "Sunday, Rahab", email: "sundayrahab88@gmail.com", idNumber: "ASCONS/BN55/170" },
  { sn: 171, name: "Fatimah Salihu", officialName: "Salihu, Fatimah", email: "fatymasalihu@gmail.com", idNumber: "ASCONS/BN55/171" },
  { sn: 172, name: "Asur Andrew", officialName: "Andrew, Asur", email: "favordawasu@gmail.com", idNumber: "ASCONS/BN55/172" },
  { sn: 173, name: "Amirah Farouk Mohammed", officialName: "Mohammed, Amirah, Farouk", email: "mohammedfaroukamirah@gmail.com", idNumber: "ASCONS/BN55/173" },
  { sn: 174, name: "Nelly Natalie Nuhu", officialName: "Nuhu, Nelly, Natalie", email: "nellynat97@gmail.com", idNumber: "ASCONS/BN55/174" },
  { sn: 175, name: "Safiya Sallau Amada", officialName: "Amada, Safiya, Sallau", email: "safiyasallauamada@gmail.com", idNumber: "ASCONS/BN55/175" },
  { sn: 176, name: "Aisha Shehu Mudi", officialName: "Mudi, Aisha, Shehu", email: "aishashehu1010@gmail.com", idNumber: "ASCONS/BN55/176" },
  { sn: 177, name: "Pwaluwi Jared Hanya", officialName: "Hanya, Pwaluwi, Jared", email: "pwaluwijaredhanya@gmail.com", idNumber: "ASCONS/BN55/177" },
  { sn: 178, name: "Zainab Said Sani", officialName: "Sani, Zainab, Said", email: "zainabsanisaid4@gmail.com", idNumber: "ASCONS/BN55/178" },
  { sn: 179, name: "Karima Musa", officialName: "Musa, Karima", email: "musakarima357@gmail.com", idNumber: "ASCONS/BN55/179" },
  { sn: 180, name: "Patience Daba Yohanna", officialName: "Yohanna, Patience, Daba", email: "patienceyohanna23@gmail.com", idNumber: "ASCONS/BN55/180" },
  { sn: 181, name: "Farve Kwaji", officialName: "Kwaji, Farve", email: "farveishaya@gmail.com", idNumber: "ASCONS/BN55/181" },
  { sn: 182, name: "Lyra Kwaji Samuel", officialName: "Samuel, Lyra, Kwaji", email: "LYRASAMUEL44@gmail.com", idNumber: "ASCONS/BN55/182" },
  { sn: 183, name: "Ruwaida Bala", officialName: "Bala, Ruwaida", email: "balaruwaida@gmail.com", idNumber: "ASCONS/BN55/183" },
  { sn: 184, name: "Amina Hamman Aminu", officialName: "Aminu, Amina, Hamman", email: "aminahamman2@gmail.com", idNumber: "ASCONS/BN55/184" },
  { sn: 185, name: "Christiana Chiamaka Ignatius", officialName: "Ignatius, Christiana, Chiamaka", email: "ignatiuschristy2@gmail.com", idNumber: "ASCONS/BN55/185" },
];

/**
 * Normalizes strings by lowercasing, stripping special punctuation,
 * and normalizing extra whitespace.
 */
function cleanString(str: string): string {
  return str
    .toLowerCase()
    .replace(/[,\.'"`\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extracts individual distinct significant words (> 1 character).
 */
function getWords(str: string): string[] {
  return cleanString(str)
    .split(' ')
    .filter((w) => w.length > 1);
}

/**
 * Lookup a candidate in the accredited BN 55 roster.
 * 
 * Supports:
 * - Exact candidate ID (e.g. "ASCONS/BN55/021" or "BN55/021" or "021")
 * - Exact registered email address (e.g. "mhixta.emmy001@gmail.com")
 * - Any name order (e.g. "Felix Michael", "Michael Felix", "Nelson Emmanuel Chams", "Emmanuel Chams Nelson")
 * - Configured name aliases (e.g. "Mhixta Emmy" for Nelson Emmanuel Chams)
 * 
 * Returns undefined if the query is not accredited.
 */
export function lookupCandidateRoster(query: string): CandidateRosterEntry | undefined {
  const raw = query.trim();
  if (!raw) return undefined;

  const qLower = raw.toLowerCase();
  const qClean = cleanString(raw);
  const qWords = getWords(raw);

  // 1. Check exact email match
  const emailMatch = CANDIDATE_ROSTER.find(
    (c) => c.email.toLowerCase() === qLower
  );
  if (emailMatch) return emailMatch;

  // 2. Check candidate ID number (e.g. ASCONS/BN55/021, BN55/021, ASCONS/2026/021)
  const idMatch = CANDIDATE_ROSTER.find((c) => {
    const cid = c.idNumber.toLowerCase();
    const snNum = String(c.sn);
    const snPad = snNum.padStart(3, '0');
    return (
      cid === qLower ||
      cid.replace('bn55', '2026') === qLower ||
      `bn55/${snPad}` === qLower ||
      `bn55/${snNum}` === qLower ||
      `ascons/${snPad}` === qLower
    );
  });
  if (idMatch) return idMatch;

  // 3. Check exact aliases if specified
  const aliasMatch = CANDIDATE_ROSTER.find((c) =>
    c.aliases?.some((alias) => cleanString(alias) === qClean || alias.toLowerCase() === qLower)
  );
  if (aliasMatch) return aliasMatch;

  // 4. Check exact clean name or official name matches
  const directNameMatch = CANDIDATE_ROSTER.find((c) => {
    const cleanDisplay = cleanString(c.name);
    const cleanOfficial = cleanString(c.officialName);
    return cleanDisplay === qClean || cleanOfficial === qClean;
  });
  if (directNameMatch) return directNameMatch;

  // 5. Multi-word full match: if user supplied multiple words, all query words must belong
  // to the candidate's names or vice versa
  if (qWords.length >= 2) {
    const candidateMatches = CANDIDATE_ROSTER.filter((c) => {
      const allCandidateWords = new Set([
        ...getWords(c.name),
        ...getWords(c.officialName),
        ...(c.aliases ? c.aliases.flatMap((a) => getWords(a)) : []),
      ]);

      // Check if every word entered by the user exists in candidate's names
      const allQueryWordsMatch = qWords.every((word) => allCandidateWords.has(word));
      if (allQueryWordsMatch) return true;

      return false;
    });

    if (candidateMatches.length === 1) {
      return candidateMatches[0];
    }

    // If multiple matched (e.g. two candidates share two names), pick highest word overlap
    if (candidateMatches.length > 1) {
      const sorted = candidateMatches.slice().sort((a, b) => {
        const aOverlap = getWords(a.officialName).filter((w) => qWords.includes(w)).length;
        const bOverlap = getWords(b.officialName).filter((w) => qWords.includes(w)).length;
        return bOverlap - aOverlap;
      });
      return sorted[0];
    }
  }

  // 6. Single word query (e.g. uncommon surname or unique first name)
  if (qWords.length === 1 && qWords[0].length >= 3) {
    const single = qWords[0];
    const candidateMatches = CANDIDATE_ROSTER.filter((c) => {
      const allWords = [
        ...getWords(c.name),
        ...getWords(c.officialName),
        ...(c.aliases ? c.aliases.flatMap((a) => getWords(a)) : []),
      ];
      return allWords.includes(single);
    });

    // Only return if it uniquely identifies a candidate, to prevent wrong OTP recipient
    if (candidateMatches.length === 1) {
      return candidateMatches[0];
    }
  }

  return undefined;
}

/**
 * Checks if a candidate is accredited on the official BN 55 roster.
 */
export function isCandidateAuthorized(queryOrEmail: string): boolean {
  return lookupCandidateRoster(queryOrEmail) !== undefined;
}
