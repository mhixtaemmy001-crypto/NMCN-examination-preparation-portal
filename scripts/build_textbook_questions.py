# Compilation of Questions from Pages 69 to 87 and Answer Keys from Pages 88 to 99
import json

TEXTBOOK_QUESTIONS = [
    {
        "question": "What is the normal blood volume in an adult human?",
        "optionA": "2 litres",
        "optionB": "5 litres",
        "optionC": "8 litres",
        "optionD": "10 litres",
        "correctAnswer": "B",
        "explanation": "In an average adult weighing approximately 70 kg, the total circulating blood volume is approximately 5 litres (approx. 70-75 mL/kg)."
    },
    {
        "question": "The physiological pH of human blood is:",
        "optionA": "Strongly acid",
        "optionB": "Slightly acid",
        "optionC": "Neutral",
        "optionD": "Slightly alkaline",
        "correctAnswer": "D",
        "explanation": "Human arterial blood has a slightly alkaline pH normally ranging between 7.35 and 7.45."
    },
    {
        "question": "The cellular name for red blood corpuscles is:",
        "optionA": "Erythrocytes",
        "optionB": "Leucocytes",
        "optionC": "Lymphocytes",
        "optionD": "Thrombocytes",
        "correctAnswer": "A",
        "explanation": "Erythrocytes (red blood cells) are specialized biconcave discs containing hemoglobin designed to transport oxygen."
    },
    {
        "question": "Which constituent of blood plasma is essential for the normal clotting of blood?",
        "optionA": "Albumin",
        "optionB": "Amino acids",
        "optionC": "Creatinine",
        "optionD": "Fibrinogen",
        "correctAnswer": "D",
        "explanation": "Fibrinogen (Factor I) is a soluble high-molecular-weight plasma protein converted to insoluble fibrin strands during coagulation."
    },
    {
        "question": "Bile pigments (such as bilirubin) are derived from the physiological breakdown of:",
        "optionA": "Erythrocytes (hemoglobin)",
        "optionB": "Leucocytes",
        "optionC": "Lymphocytes",
        "optionD": "Thrombocytes",
        "correctAnswer": "A",
        "explanation": "When senescent erythrocytes are phagocytosed by reticuloendothelial macrophages in the spleen, heme is degraded into biliverdin and bilirubin."
    },
    {
        "question": "Deoxygenated venous blood leaves the right ventricle and travels directly to the lungs via the:",
        "optionA": "Aorta",
        "optionB": "Pulmonary artery",
        "optionC": "Superior vena cava",
        "optionD": "Pulmonary veins",
        "correctAnswer": "B",
        "explanation": "The right ventricle ejects deoxygenated blood through the pulmonic valve into the pulmonary trunk and pulmonary arteries to reach the pulmonary capillary beds."
    },
    {
        "question": "Which of the following will naturally slow the resting heart rate through increased vagal parasympathetic tone?",
        "optionA": "Severe emotional distress",
        "optionB": "Strenuous physical exercise",
        "optionC": "Acute hemorrhage",
        "optionD": "Consistent physical endurance athletic training",
        "correctAnswer": "D",
        "explanation": "Chronic endurance training increases cardiac stroke volume and vagal tone, producing a physiological resting bradycardia."
    },
    {
        "question": "The total duration of a normal human cardiac cycle at a resting heart rate of 75 beats per minute is:",
        "optionA": "0.1 second",
        "optionB": "0.3 second",
        "optionC": "0.8 second",
        "optionD": "1.0 second",
        "correctAnswer": "C",
        "explanation": "At 75 beats per minute, each complete cardiac cycle (atrial and ventricular systole and diastole) lasts 60 / 75 = 0.8 second."
    },
    {
        "question": "The single-layer cellular lining of all arteries and vascular endothelium consists of:",
        "optionA": "Epithelial tissue (simple squamous endothelium)",
        "optionB": "Fibrous connective tissue",
        "optionC": "Lymphoid tissue",
        "optionD": "Smooth muscle tissue exclusively",
        "correctAnswer": "A",
        "explanation": "The tunica intima of blood vessels is lined with a smooth, continuous monolayer of specialized simple squamous epithelial cells called the endothelium."
    },
    {
        "question": "Veins in the extremities contain semilunar valves whose primary physiological function is to:",
        "optionA": "Increase systemic diastolic arterial pressure",
        "optionB": "Prevent the backflow of venous blood and facilitate unidirectional flow toward the heart",
        "optionC": "Speed up arterial circulation",
        "optionD": "Prevent blood from reaching the capillary beds",
        "correctAnswer": "B",
        "explanation": "Venous valves prevent retrograde pooling under the influence of gravity, directing venous return back toward the right atrium."
    },
    {
        "question": "Which of the following major arteries provides direct arterial blood supply to the brain?",
        "optionA": "Facial artery",
        "optionB": "Internal carotid artery (and vertebral artery)",
        "optionC": "Left subclavian artery",
        "optionD": "Superficial temporal artery",
        "correctAnswer": "B",
        "explanation": "Cerebral arterial perfusion is supplied primarily by the paired internal carotid arteries anteriorly and the vertebral arteries posteriorly."
    },
    {
        "question": "In which anatomical region of the abdomen is the spleen located?",
        "optionA": "Right hypochondriac region",
        "optionB": "Left hypochondriac region",
        "optionC": "Epigastric region",
        "optionD": "Hypogastric region",
        "correctAnswer": "B",
        "explanation": "The spleen lies in the left hypochondriac quadrant of the abdominal cavity, protected under the 9th to 11th ribs."
    },
    {
        "question": "The exchange of oxygen and carbon dioxide between inspired air and pulmonary blood occurs specifically in the:",
        "optionA": "Alveolar air sacs (alveoli)",
        "optionB": "Trachea",
        "optionC": "Segmental bronchi",
        "optionD": "Nasal turbinates",
        "correctAnswer": "A",
        "explanation": "Alveoli provide an immense, thin diffusion surface (approx. 70-100 square meters) where gas exchange takes place."
    },
    {
        "question": "Which organ belongs functionally and anatomically to both the respiratory and digestive systems?",
        "optionA": "Larynx",
        "optionB": "Pharynx",
        "optionC": "Trachea",
        "optionD": "Esophagus",
        "correctAnswer": "B",
        "explanation": "The pharynx acts as a common fibromuscular conduit for both the passage of air to the larynx and food/liquids to the esophagus."
    },
    {
        "question": "The respiratory epithelium lining the nasal cavity and trachea is primarily composed of:",
        "optionA": "Pseudostratified ciliated columnar epithelium",
        "optionB": "Simple cuboidal epithelium",
        "optionC": "Stratified squamous keratinized epithelium",
        "optionD": "Transitional epithelium",
        "correctAnswer": "A",
        "explanation": "Pseudostratified ciliated columnar epithelium containing goblet cells traps particulates and sweeps mucus upward via the mucociliary escalator."
    },
    {
        "question": "The vocal folds (true vocal cords) are housed within the:",
        "optionA": "Larynx",
        "optionB": "Pharynx",
        "optionC": "Trachea",
        "optionD": "Bronchial tree",
        "correctAnswer": "A",
        "explanation": "The larynx contains the vocal folds spanning across the glottis, which vibrate to generate phonation."
    },
    {
        "question": "The serous membrane that adheres tightly to the outer surface of each lung is the:",
        "optionA": "Parietal pleura",
        "optionB": "Visceral pleura",
        "optionC": "Peritoneum",
        "optionD": "Pericardium",
        "correctAnswer": "B",
        "explanation": "The visceral pleura covers the external surface of the lungs and dips into the interlobar fissures."
    },
    {
        "question": "The auditory (Eustachian) tube connects the middle ear cavity directly to the:",
        "optionA": "Nasopharynx",
        "optionB": "Oropharynx",
        "optionC": "Laryngopharynx",
        "optionD": "External auditory canal",
        "correctAnswer": "A",
        "explanation": "The Eustachian tube vents the tympanic cavity into the lateral wall of the nasopharynx to equilibrate middle ear and ambient pressures."
    },
    {
        "question": "During quiet expiration, air is expelled from the lungs primarily due to:",
        "optionA": "Contraction of internal intercostals",
        "optionB": "Passive elastic recoil of the lungs and chest wall",
        "optionC": "Forceful contraction of the abdominal wall",
        "optionD": "Elevation of the diaphragm",
        "correctAnswer": "B",
        "explanation": "Normal resting expiration is a passive process resulting from elastic recoil of pulmonary tissues and relaxation of inspiratory muscles."
    },
    {
        "question": "The primary structural and functional cellular unit of the nervous system is the:",
        "optionA": "Nephron",
        "optionB": "Neuron (nerve cell)",
        "optionC": "Neuroglia",
        "optionD": "Myocyte",
        "correctAnswer": "B",
        "explanation": "The neuron is the excitable cellular unit of the nervous system specialized for receiving, integrating, and transmitting electrical and chemical impulses."
    },
    {
        "question": "The gray matter of the central nervous system is composed predominantly of:",
        "optionA": "Myelinated axon tracts",
        "optionB": "Neuronal cell bodies, dendrites, and unmyelinated synapses",
        "optionC": "Collagen fibers",
        "optionD": "Adipose tissue",
        "correctAnswer": "B",
        "explanation": "Gray matter contains abundant neuronal soma, dendrites, synaptic junctions, and capillary networks where neural processing occurs."
    },
    {
        "question": "The lipid-rich insulating sheath that encloses axons to accelerate action potential conduction is called:",
        "optionA": "Neurilemma",
        "optionB": "Myelin sheath",
        "optionC": "Endoneurium",
        "optionD": "Perineurium",
        "correctAnswer": "B",
        "explanation": "Myelin is formed by oligodendrocytes in the CNS and Schwann cells in the PNS, enabling rapid saltatory conduction between nodes of Ranvier."
    },
    {
        "question": "Cerebrospinal fluid (CSF) is actively produced by vascular capillary networks in the ventricles known as:",
        "optionA": "Arachnoid villi",
        "optionB": "Choroid plexuses",
        "optionC": "Cerebral aqueduct",
        "optionD": "Corpus callosum",
        "correctAnswer": "B",
        "explanation": "The choroid plexuses in the lateral, third, and fourth cerebral ventricles secrete approximately 500 mL of clear CSF daily."
    },
    {
        "question": "The falx cerebri is a crescent-shaped fold of dura mater located between the:",
        "optionA": "Right and left cerebral hemispheres",
        "optionB": "Cerebrum and cerebellum",
        "optionC": "Right and left cerebellar hemispheres",
        "optionD": "Brainstem and spinal cord",
        "correctAnswer": "A",
        "explanation": "The falx cerebri descends vertically in the longitudinal cerebral fissure, separating the right and left cerebral hemispheres."
    },
    {
        "question": "Which lobe of the cerebrum houses the primary somatosensory cortex for interpreting touch, pain, temperature, and proprioception?",
        "optionA": "Frontal lobe",
        "optionB": "Parietal lobe (postcentral gyrus)",
        "optionC": "Occipital lobe",
        "optionD": "Temporal lobe",
        "correctAnswer": "B",
        "explanation": "The postcentral gyrus of the parietal lobe processes conscious somatic sensory signals transmitted from peripheral cutaneous and muscular receptors."
    },
    {
        "question": "The total number of pairs of cranial nerves originating from the brain and brainstem is:",
        "optionA": "10 pairs",
        "optionB": "12 pairs",
        "optionC": "14 pairs",
        "optionD": "31 pairs",
        "correctAnswer": "B",
        "explanation": "There are 12 pairs of cranial nerves (CN I to XII) that innervate the head, neck, sensory organs, and thoracic/abdominal viscera."
    },
    {
        "question": "Cranial Nerve I is the sensory nerve dedicated to:",
        "optionA": "Vision",
        "optionB": "Smell (Olfaction)",
        "optionC": "Hearing",
        "optionD": "Taste",
        "correctAnswer": "B",
        "explanation": "The olfactory nerve (CN I) conveys sensory impulses of smell from the olfactory mucosa in the superior nasal conchae to the olfactory bulb."
    },
    {
        "question": "The primary function of the cerebellum is to:",
        "optionA": "Initiate conscious voluntary motor intent",
        "optionB": "Coordinate voluntary muscle movements, maintain balance, posture, and fine motor precision",
        "optionC": "Regulate autonomic heart rate and breathing",
        "optionD": "Control endocrine hormone secretion",
        "correctAnswer": "B",
        "explanation": "The cerebellum acts as a motor comparator and coordinator, smoothing somatic muscular activities and preserving equilibrium."
    },
    {
        "question": "In adults, the spinal cord terminates inferiorly at approximately the level of which vertebra?",
        "optionA": "T10",
        "optionB": "L1 to L2 (conus medullaris)",
        "optionC": "L5",
        "optionD": "S2",
        "correctAnswer": "B",
        "explanation": "Because the vertebral column outgrows the spinal cord during fetal development, the adult spinal cord ends as the conus medullaris at L1-L2."
    },
    {
        "question": "The total number of pairs of spinal nerves in the human body is:",
        "optionA": "12 pairs",
        "optionB": "24 pairs",
        "optionC": "31 pairs",
        "optionD": "33 pairs",
        "correctAnswer": "C",
        "explanation": "There are 31 pairs of mixed spinal nerves: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, and 1 coccygeal pair."
    },
    {
        "question": "The largest and longest nerve in the human body, arising from the sacral plexus, is the:",
        "optionA": "Femoral nerve",
        "optionB": "Sciatic nerve",
        "optionC": "Obturator nerve",
        "optionD": "Radial nerve",
        "correctAnswer": "B",
        "explanation": "The sciatic nerve (formed by L4-S3 nerve roots) courses through the greater sciatic notch down the posterior thigh, dividing into the tibial and common fibular nerves."
    },
    {
        "question": "Which cranial nerve provides the sensory pathway for vision?",
        "optionA": "Cranial Nerve I",
        "optionB": "Cranial Nerve II (Optic nerve)",
        "optionC": "Cranial Nerve III",
        "optionD": "Cranial Nerve IV",
        "correctAnswer": "B",
        "explanation": "The optic nerve (CN II) transmits visual sensory information captured by retinal photoreceptors to the optic chiasm, thalamus, and visual cortex."
    },
    {
        "question": "The tough, white, opaque outer fibrous coat of the eyeball is called the:",
        "optionA": "Cornea",
        "optionB": "Sclera",
        "optionC": "Choroid",
        "optionD": "Retina",
        "correctAnswer": "B",
        "explanation": "The sclera ('white of the eye') maintains the shape of the eyeball, protects delicate internal structures, and provides insertion points for extraocular muscles."
    },
    {
        "question": "How many extrinsic skeletal muscles control the precise coordinated movements of each eye?",
        "optionA": "4 muscles",
        "optionB": "6 muscles",
        "optionC": "8 muscles",
        "optionD": "2 muscles",
        "correctAnswer": "B",
        "explanation": "Six extrinsic oculomotor muscles control each eyeball: four recti (superior, inferior, medial, lateral) and two obliques (superior and inferior)."
    },
    {
        "question": "The approximate total length of the entire human gastrointestinal tract from mouth to anus is:",
        "optionA": "3 to 4 metres",
        "optionB": "8 to 10 metres",
        "optionC": "15 to 18 metres",
        "optionD": "25 metres",
        "correctAnswer": "B",
        "explanation": "In an adult, the relaxed alimentary canal measures approximately 9 to 10 metres (approx. 30 feet) in total length."
    },
    {
        "question": "Which large serous membrane covers the abdominal organs and lines the abdominal wall?",
        "optionA": "Pleura",
        "optionB": "Pericardium",
        "optionC": "Peritoneum",
        "optionD": "Meninges",
        "correctAnswer": "C",
        "explanation": "The peritoneum is the largest serous membrane, consisting of parietal and visceral layers separated by peritoneal lubricating fluid."
    },
    {
        "question": "The specialized lymphatic capillaries located within intestinal villi that absorb digested fats and chylomicrons are called:",
        "optionA": "Peyer's patches",
        "optionB": "Lacteals",
        "optionC": "Sinusoids",
        "optionD": "Crypts of Lieberkuhn",
        "correctAnswer": "B",
        "explanation": "Lacteals absorb dietary long-chain fatty acids packaged as chylomicrons into milky lymphatic fluid called chyle, transporting it to the thoracic duct."
    },
    {
        "question": "Which organ does NOT drain its venous blood into the portal vein?",
        "optionA": "Stomach",
        "optionB": "Spleen",
        "optionC": "Kidney",
        "optionD": "Small intestine",
        "correctAnswer": "C",
        "explanation": "The kidneys drain their venous blood directly into the inferior vena cava via the renal veins, completely bypassing the hepatic portal system."
    },
    {
        "question": "Each human kidney contains approximately how many nephrons?",
        "optionA": "10,000",
        "optionB": "100,000",
        "optionC": "1,000,000 (one million)",
        "optionD": "10,000,000",
        "correctAnswer": "C",
        "explanation": "Each kidney houses approximately 1 to 1.25 million functioning microscopic nephrons responsible for ultrafiltration and osmoregulation."
    },
    {
        "question": "Which substance is normally completely reabsorbed by active transport in the proximal convoluted tubule and is absent in normal urine?",
        "optionA": "Urea",
        "optionB": "Creatinine",
        "optionC": "Glucose",
        "optionD": "Uric acid",
        "correctAnswer": "C",
        "explanation": "Under normal physiological conditions, 100% of filtered glucose is reabsorbed by sodium-glucose cotransporters (SGLT2) in the proximal tubule."
    },
    {
        "question": "The only freely movable bone in the human facial skull is the:",
        "optionA": "Maxilla",
        "optionB": "Mandible (lower jaw)",
        "optionC": "Zygomatic bone",
        "optionD": "Palatine bone",
        "correctAnswer": "B",
        "explanation": "The mandible articulates with the temporal bone at the synovial temporomandibular joint (TMJ), allowing mastication and speech movements."
    },
    {
        "question": "The prominent bony process of the ulna that forms the point of the elbow is the:",
        "optionA": "Coracoid process",
        "optionB": "Olecranon process",
        "optionC": "Styloid process",
        "optionD": "Acromion",
        "correctAnswer": "B",
        "explanation": "The olecranon of the proximal ulna fits into the olecranon fossa of the humerus upon complete elbow extension."
    },
    {
        "question": "Cranial sutures between bones of the skull are classic examples of which joint classification?",
        "optionA": "Synovial joints",
        "optionB": "Fibrous joints (synarthroses)",
        "optionC": "Cartilaginous joints",
        "optionD": "Saddle joints",
        "correctAnswer": "B",
        "explanation": "Sutures are immovable fibrous joints where adjacent skull bones are bound tightly together by dense fibrous connective tissue fibers."
    },
    {
        "question": "Which powerful anterior thigh muscle group acts to extend the leg at the knee joint?",
        "optionA": "Hamstring muscles",
        "optionB": "Quadriceps femoris",
        "optionC": "Gastrocnemius",
        "optionD": "Sartorius",
        "correctAnswer": "B",
        "explanation": "The quadriceps femoris (rectus femoris, vastus lateralis, vastus medialis, vastus intermedius) inserts into the tibial tuberosity to extend the knee."
    },
    {
        "question": "The parathyroid hormone (PTH) raises serum calcium concentrations primarily by stimulating:",
        "optionA": "Osteoblast bone formation",
        "optionB": "Osteoclast bone resorption, renal calcium reabsorption, and vitamin D activation",
        "optionC": "Calcitonin secretion",
        "optionD": "Urinary excretion of calcium",
        "correctAnswer": "B",
        "explanation": "PTH mobilizes calcium from bones via osteoclastic resorption, increases renal tubular reabsorption of calcium, and stimulates renal 1-alpha-hydroxylase."
    },
    {
        "question": "The total normal number of chromosomes present in a human somatic diploid cell is:",
        "optionA": "23",
        "optionB": "46 (23 pairs)",
        "optionC": "48",
        "optionD": "92",
        "correctAnswer": "B",
        "explanation": "Human somatic cells contain 46 chromosomes (22 pairs of autosomes and 1 pair of sex chromosomes, XX or XY)."
    },
    {
        "question": "A gamete (mature human ovum or spermatozoon) contains what number of chromosomes?",
        "optionA": "23 (haploid number)",
        "optionB": "46",
        "optionC": "12",
        "optionD": "48",
        "correctAnswer": "A",
        "explanation": "Meiotic division reduces the genetic complement in mature gametes to 23 single chromosomes, so fertilization restores the diploid count of 46."
    },
    {
        "question": "Deficiency of dietary Thiamine (Vitamin B1) is the specific etiology of which clinical nutritional disease?",
        "optionA": "Pellagra",
        "optionB": "Beriberi (dry and wet)",
        "optionC": "Scurvy",
        "optionD": "Rickets",
        "correctAnswer": "B",
        "explanation": "Thiamine deficiency causes beriberi, which manifests as peripheral neuropathy and muscle wasting (dry beriberi) or high-output heart failure (wet beriberi)."
    },
    {
        "question": "Deficiency of Vitamin D in growing children impairs bone mineralization, causing the clinical disorder known as:",
        "optionA": "Osteomalacia",
        "optionB": "Rickets (bowed legs and rachitic rosary)",
        "optionC": "Osteoporosis",
        "optionD": "Scurvy",
        "correctAnswer": "B",
        "explanation": "Defective mineralization of growth plates in children due to vitamin D or calcium deficiency causes softening of bones, skeletal deformities, and rickets."
    },
    {
        "question": "Vitamin K is a required fat-soluble cofactor for the hepatic synthesis of which critical coagulation factor?",
        "optionA": "Fibrinogen (Factor I)",
        "optionB": "Prothrombin (Factor II)",
        "optionC": "Antihemophilic factor (Factor VIII)",
        "optionD": "Hageman factor (Factor XII)",
        "correctAnswer": "B",
        "explanation": "Vitamin K is an essential cofactor for gamma-glutamyl carboxylase, which activates clotting factors II (prothrombin), VII, IX, and X in hepatocytes."
    }
]

print(f"Loaded {len(TEXTBOOK_QUESTIONS)} textbook questions")
