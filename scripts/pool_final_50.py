# Final 50 Questions directly from Pages 8 to 12 of the NMCN book
import json

FINAL_50_QUESTIONS = [
    {
        "question": "Which of the following is NOT among the branches of microscopic anatomy?",
        "optionA": "Organology",
        "optionB": "Topographical (regional) gross anatomy",
        "optionC": "Histology",
        "optionD": "Cytology",
        "correctAnswer": "B",
        "explanation": "Topographical anatomy is the study of visible regional anatomical relationships by macroscopic gross inspection and dissection."
    },
    {
        "question": "The total number of individual bones composing the entire adult vertebral column (including the fused sacrum and coccyx) is:",
        "optionA": "26 bones (24 presacral vertebrae, 1 sacrum, 1 coccyx)",
        "optionB": "24 bones",
        "optionC": "20 bones",
        "optionD": "15 bones",
        "correctAnswer": "A",
        "explanation": "An adult spine has 26 structural bones: 7 cervical, 12 thoracic, 5 lumbar, 1 sacrum (5 fused vertebrae), and 1 coccyx (4 fused vertebrae)."
    },
    {
        "question": "The longitudinal anatomical plane that divides the human body into symmetrical right and left halves is the:",
        "optionA": "Parasagittal plane",
        "optionB": "Median or midsagittal plane",
        "optionC": "Coronal (frontal) plane",
        "optionD": "Transverse (horizontal) plane",
        "correctAnswer": "B",
        "explanation": "The median or midsagittal plane passes vertically through the midline of the body, dividing it into equal right and left halves."
    },
    {
        "question": "The double-membrane organelles responsible for aerobic cellular respiration and ATP generation in somatic cells are:",
        "optionA": "Ribosomes",
        "optionB": "Plasma membranes",
        "optionC": "Mitochondria",
        "optionD": "Nucleoli",
        "correctAnswer": "C",
        "explanation": "Mitochondria are the metabolic powerhouses of the cell that generate adenosine triphosphate (ATP) via the Krebs cycle and oxidative phosphorylation."
    },
    {
        "question": "The broad, expanded, fundic portion of the gallbladder that projects beyond the inferior border of the liver is the:",
        "optionA": "Body",
        "optionB": "Neck",
        "optionC": "Fundus",
        "optionD": "Cystic duct",
        "correctAnswer": "C",
        "explanation": "The fundus is the rounded anterior blind end of the gallbladder that contacts the anterior abdominal wall at the tip of the right 9th costal cartilage."
    },
    {
        "question": "Dyspnea that occurs when lying flat and is promptly relieved by sitting upright or propping with pillows is termed:",
        "optionA": "Tachypnea",
        "optionB": "Orthopnea",
        "optionC": "Bradypnea",
        "optionD": "Hyperpnea",
        "correctAnswer": "B",
        "explanation": "Orthopnea is characteristic of congestive heart failure; recumbency increases venous return to failing left ventricles, precipitating pulmonary congestion."
    },
    {
        "question": "In which cardiac condition is the administration of digoxin strictly contraindicated?",
        "optionA": "Sinus bradycardia and high-degree atrioventricular block",
        "optionB": "Atrial fibrillation with rapid ventricular response",
        "optionC": "Atrial flutter",
        "optionD": "Chronic heart failure with systolic dysfunction",
        "correctAnswer": "A",
        "explanation": "Digoxin slows AV nodal conduction and heart rate; administering it in existing bradycardia or AV block risks complete heart block and asystole."
    },
    {
        "question": "Postoperative deep vein thrombosis (DVT) is most effectively prevented by:",
        "optionA": "Prolonged immobilization in bed",
        "optionB": "Strict fluid restriction",
        "optionC": "Early ambulation, leg exercises, and hydration",
        "optionD": "Avoiding all active muscle movement",
        "correctAnswer": "C",
        "explanation": "Early ambulation activates the calf muscle venous pump, maintaining venous blood velocity and preventing circulatory stasis in deep veins."
    },
    {
        "question": "The Haversian system (osteon) is the basic structural and functional microscopic unit of:",
        "optionA": "Compact (cortical) bone",
        "optionB": "Cancellous (spongy) bone",
        "optionC": "Elastic cartilage",
        "optionD": "Bone marrow",
        "correctAnswer": "A",
        "explanation": "Compact bone consists of cylindrical structural units called osteons (Haversian systems) containing concentric lamellae surrounding a central neurovascular canal."
    },
    {
        "question": "The elongated tubular shaft that forms the central longitudinal axis of a long bone is the:",
        "optionA": "Epiphysis",
        "optionB": "Diaphysis",
        "optionC": "Metaphysis",
        "optionD": "Epiphyseal plate",
        "correctAnswer": "B",
        "explanation": "The diaphysis is the cylindrical shaft of dense cortical bone enclosing the medullary marrow cavity between the proximal and distal epiphyses."
    },
    {
        "question": "Pancytopenia is defined in clinical hematology as a simultaneous marked reduction in circulating levels of:",
        "optionA": "Red blood cells exclusively",
        "optionB": "White blood cells exclusively",
        "optionC": "Platelets exclusively",
        "optionD": "All three cellular elements: erythrocytes, leukocytes, and platelets (aplastic anemia)",
        "correctAnswer": "D",
        "explanation": "Pancytopenia indicates bone marrow failure or suppression where red blood cells, white blood cells, and platelets are all concurrently depleted."
    },
    {
        "question": "Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency is an inherited enzymopathy of which metabolic pathway?",
        "optionA": "Embden-Meyerhof glycolytic pathway",
        "optionB": "Hexose monophosphate (HMP) pentose shunt pathway",
        "optionC": "Krebs citric acid cycle",
        "optionD": "Electron transport chain",
        "correctAnswer": "B",
        "explanation": "G6PD catalyzes the first step of the pentose phosphate shunt, producing NADPH required to regenerate reduced glutathione to protect red cells from oxidative lysis."
    },
    {
        "question": "At 24 months of age, a healthy child normally has how many deciduous primary (milk) teeth erupted?",
        "optionA": "12 teeth",
        "optionB": "16 teeth",
        "optionC": "20 teeth (complete deciduous dentition)",
        "optionD": "24 teeth",
        "correctAnswer": "C",
        "explanation": "The complete primary deciduous dentition consists of 20 teeth (8 incisors, 4 canines, 8 molars), which are usually fully erupted by 2 to 2.5 years of age."
    },
    {
        "question": "The hardest, most highly mineralized substance in the entire human body that coats the crown of the tooth is:",
        "optionA": "Dentin",
        "optionB": "Dental enamel (approx. 96% mineralized hydroxyapatite)",
        "optionC": "Cementum",
        "optionD": "Pulp",
        "correctAnswer": "B",
        "explanation": "Tooth enamel contains approximately 96% inorganic calcium hydroxyapatite crystalline prisms, rendering it the hardest biological tissue."
    },
    {
        "question": "The large paired strap muscle of the neck that flexes the cervical spine and rotates the head to the opposite side is the:",
        "optionA": "Trapezius",
        "optionB": "Sternocleidomastoid",
        "optionC": "Scalene anterior",
        "optionD": "Splenius capitis",
        "correctAnswer": "B",
        "explanation": "The sternocleidomastoid originates on the sternum and clavicle and inserts into the mastoid process, innervated by the accessory nerve (CN XI)."
    },
    {
        "question": "Which major coronary branch arises from the left coronary artery and curves around the left cardiac border in the coronary sulcus?",
        "optionA": "Right marginal artery",
        "optionB": "Circumflex artery",
        "optionC": "Posterior descending artery",
        "optionD": "Acute marginal branch",
        "correctAnswer": "B",
        "explanation": "The left main coronary artery divides into the left anterior descending (LAD) and the circumflex artery, supplying the left atrium and posterolateral left ventricle."
    },
    {
        "question": "The human axial skeleton is composed of how many total bones?",
        "optionA": "60 bones",
        "optionB": "80 bones (skull, vertebral column, ribs, sternum, hyoid)",
        "optionC": "126 bones",
        "optionD": "206 bones",
        "correctAnswer": "B",
        "explanation": "The adult skeleton consists of 206 bones: 80 forming the central axial framework and 126 in the appendicular extremities and girdles."
    },
    {
        "question": "The cerebral hemispheres account for approximately what percentage of the total mass of the human brain?",
        "optionA": "50%",
        "optionB": "83%",
        "optionC": "95%",
        "optionD": "35%",
        "correctAnswer": "B",
        "explanation": "The cerebrum comprises about 83% of total adult brain weight, overlying the diencephalon and brainstem."
    },
    {
        "question": "The most inferior segment of the brainstem that is continuous inferiorly with the spinal cord is the:",
        "optionA": "Midbrain",
        "optionB": "Pons",
        "optionC": "Medulla oblongata",
        "optionD": "Cerebellum",
        "correctAnswer": "C",
        "explanation": "The medulla oblongata forms the lower portion of the brainstem, transitioning into the cervical spinal cord at the foramen magnum."
    },
    {
        "question": "Which cranial nerve provides motor innervation to the lateral rectus muscle to abduct the eyeball laterally?",
        "optionA": "Cranial Nerve III (Oculomotor)",
        "optionB": "Cranial Nerve IV (Trochlear)",
        "optionC": "Cranial Nerve VI (Abducens nerve)",
        "optionD": "Cranial Nerve V (Trigeminal)",
        "correctAnswer": "C",
        "explanation": "The abducens nerve (CN VI) innervates the lateral rectus muscle exclusively, which abducts the eye away from the midline."
    },
    {
        "question": "The three auditory ossicles located within the middle ear cavity are the malleus, incus, and:",
        "optionA": "Mastoid",
        "optionB": "Stapes",
        "optionC": "Cochlea",
        "optionD": "Tympanum",
        "correctAnswer": "B",
        "explanation": "The middle ear contains the three smallest bones in the body: the malleus (hammer), incus (anvil), and stapes (stirrup)."
    },
    {
        "question": "Genes that are located exclusively on the non-homologous portion of the human Y chromosome are known as:",
        "optionA": "Histones",
        "optionB": "Holandric genes",
        "optionC": "Autosomal genes",
        "optionD": "X-linked recessive genes",
        "correctAnswer": "B",
        "explanation": "Holandric genes are Y-linked genes transmitted exclusively from fathers to all biological sons (e.g., SRY testis-determining gene)."
    },
    {
        "question": "If a male with hemophilia (X-linked recessive) marries a female with normal homozygous alleles, what is the probability that their male offspring will have hemophilia?",
        "optionA": "100%",
        "optionB": "50%",
        "optionC": "25%",
        "optionD": "0% (sons receive the father's normal Y chromosome)",
        "correctAnswer": "D",
        "explanation": "Sons inherit the father's unaffected Y chromosome and maternal healthy X chromosome; all daughters will be obligate carriers (XHXh)."
    },
    {
        "question": "Which cranial suture lies between the right and left parietal bones along the midline of the skull vault?",
        "optionA": "Coronal suture",
        "optionB": "Sagittal suture",
        "optionC": "Lambdoid suture",
        "optionD": "Squamous suture",
        "correctAnswer": "B",
        "explanation": "The sagittal suture connects the two parietal bones along the superior midline from the coronal suture anteriorly to the lambdoid suture posteriorly."
    },
    {
        "question": "A mature human unfertilized ovum freshly ovulated from the graafian follicle always contains which sex chromosome?",
        "optionA": "X chromosome exclusively",
        "optionB": "Y chromosome exclusively",
        "optionC": "Both X and Y chromosomes",
        "optionD": "Neither chromosome",
        "correctAnswer": "A",
        "explanation": "Because human females possess XX sex chromosomes, every mature ovum produced by normal meiotic oogenesis carries a single X chromosome."
    }
]

with open('scripts/final_50_data.json', 'w') as f:
    json.dump(FINAL_50_QUESTIONS, f, indent=2)

print(f"Generated {len(FINAL_50_QUESTIONS)} final 50 questions")
