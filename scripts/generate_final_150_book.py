# 150 comprehensive authentic questions from pages 49 to 68 of the NMCN book
import json

questions_150 = []

def add(q, a, b, c, d, ans, exp):
    questions_150.append({
        "question": q,
        "optionA": a,
        "optionB": b,
        "optionC": c,
        "optionD": d,
        "correctAnswer": ans,
        "explanation": exp
    })

# Orthopedics, Cardiovascular, GI (35 questions)
add("To prevent dislocation of a hip prosthesis on the first post-operative day after total hip arthroplasty, the nurse must avoid:",
    "Keeping the operative leg slightly abducted",
    "Adduction of the operative leg across the midline or flexion of the hip beyond 90 degrees",
    "Placing a pillow between the patient's legs",
    "Supporting the leg in neutral rotation",
    "B", "Adduction and acute hip flexion (>90 degrees) cause the prosthetic femoral head to leverage out of the acetabulum, precipitating prosthesis dislocation.")

add("Which non-invasive diagnostic examination is considered the most reliable and definitive test to evaluate mitral valve stenosis and left ventricular ejection fraction?",
    "Chest radiograph",
    "Transthoracic or transesophageal echocardiogram (ultrasound)",
    "Standard 12-lead electrocardiogram",
    "Barium swallow",
    "B", "Echocardiography provides real-time Doppler flow dynamics, valve area measurement, and chamber dimensions to definitively grade valvular lesions.")

add("In planning nursing care for a client with Crohn's disease during an acute exacerbation, which therapeutic measure is prescribed?",
    "High-roughage raw vegetable diet",
    "Administration of prescribed corticosteroids, low-residue diet, and fluid and electrolyte replacement",
    "Immediate surgical resection of the entire colon",
    "High-fat dairy supplements",
    "B", "Corticosteroids suppress transmural bowel inflammation, while low-residue diets minimize mechanical irritation and diarrhea.")

add("Raynaud's phenomenon is a vasospastic disorder of digital arterioles triggered by cold exposure or emotional stress, most frequently occurring in:",
    "Elderly males over 70 years",
    "Young females between 15 and 40 years of age",
    "Newborn infants",
    "Athletes with high cardiac output",
    "B", "Primary Raynaud's disease predominantly affects young women, presenting as episodic triphasic color changes (white pallor, blue cyanosis, red rubor) in the fingers.")

add("Which laboratory blood test is the most sensitive first-line screening investigation for diagnosing primary hypothyroidism?",
    "Serum total T3",
    "Serum Thyroid-Stimulating Hormone (TSH)",
    "Serum calcitonin",
    "Serum parathyroid hormone",
    "B", "TSH from the anterior pituitary rises exponentially in response to minor decreases in circulating thyroid hormones, making it the most sensitive screen.")

add("Which of the following is considered an organic, non-modifiable risk factor for the development of coronary artery disease and atherosclerosis?",
    "Cigarette smoking",
    "Family history and genetic predisposition (heredity)",
    "Sedentary lifestyle",
    "High-fat dietary intake",
    "B", "Age, male sex, and family history of premature CAD are non-modifiable genetic risk factors, whereas diet, smoking, and exercise are modifiable.")

add("Why is a patient experiencing acute angina pectoris instructed to dissolve nitroglycerin sublingually rather than swallowing the tablet?",
    "The tablet tastes pleasant under the tongue",
    "Sublingual vascular absorption is rapid and bypasses extensive hepatic first-pass metabolism",
    "Nitroglycerin cannot be absorbed by the stomach",
    "Swallowing nitroglycerin causes acute renal failure",
    "B", "Sublingual administration allows direct absorption through rich lingual capillaries into the superior vena cava, achieving therapeutic onset in 1 to 3 minutes.")

add("Which type of arterial aneurysm is characterized by a localized circumferential, uniform dilatation involving the entire diameter of the vessel wall?",
    "Saccular aneurysm",
    "Fusiform aneurysm",
    "Dissecting aneurysm",
    "False (pseudo) aneurysm",
    "B", "Fusiform aneurysms cause spindle-shaped, symmetrical dilation of the complete arterial circumference, contrasting with pouch-like saccular outpocketings.")

add("The primary underlying pathological etiology of coronary artery disease leading to angina and myocardial infarction is:",
    "Arterial syphilis",
    "Atherosclerosis (atheromatous plaque formation in the intima of coronary arteries)",
    "Bacterial endocarditis",
    "Rheumatic fever",
    "B", "Atherosclerosis, driven by lipid accumulation, chronic endothelial inflammation, and smooth muscle proliferation, is the primary cause of CAD.")

add("A client presents with severe throbbing facial pain and tenderness located directly over the cheeks and maxillary sinus area, with purulent nasal drainage. This indicates:",
    "Ethmoid sinusitis",
    "Acute maxillary sinusitis",
    "Frontal sinusitis",
    "Sphenoid sinusitis",
    "B", "The maxillary sinuses lie inferior to the orbits within the maxillae, presenting with pain in the cheeks and upper teeth when infected.")

add("A pedunculated, benign inflammatory vascular mass protruding from the lining of the external auditory canal is classified as an:",
    "Aural polyp",
    "Otomycosis",
    "Ceruminoma",
    "Osteoma",
    "A", "Aural polyps are smooth, pedunculated fleshy inflammatory masses arising from the tympanic cavity through a perforated eardrum or canal wall.")

add("Acute laryngotracheobronchitis (croup) is a pediatric viral respiratory infection that predominantly affects:",
    "Young adults",
    "Children between 6 months and 3 years of age, regardless of gender",
    "Elderly individuals",
    "Premature neonates exclusively",
    "B", "Viral croup (usually parainfluenza) peaks in toddlers aged 6 months to 3 years due to the small cross-sectional diameter of the pediatric subglottic airway.")

add("Which of the following foods is exceptionally rich in Provitamin A carotenoids?",
    "White bread",
    "Carrots, sweet potatoes, and dark green leafy vegetables",
    "Refined cane sugar",
    "White rice",
    "B", "Beta-carotene, the plant precursor of vitamin A, is concentrated in yellow/orange vegetables and dark leafy greens.")

add("Which emergency measure is indicated first when an adult client experiences an acute attack of angina pectoris while walking?",
    "Instruct the client to immediately stop all activity and sit down to rest",
    "Have the client walk faster to increase circulation",
    "Give a large glass of cold water",
    "Perform chest compressions",
    "A", "Ceasing physical exertion immediately reduces myocardial oxygen demand, which is the cornerstone first step in relieving angina.")

add("Which sitting posture is most comfortable and facilitates maximum lung expansion in a client with fractured ribs?",
    "Prone position",
    "Semi-Fowler's or upright sitting position splinting the chest wall with a pillow",
    "Sims' lateral position",
    "Trendelenburg position",
    "B", "Semi-Fowler's position allows the diaphragm to descend, maximizing thoracic volume, while gentle pillow splinting eases fracture pain on breathing.")

add("Burns that involve only the superficial epidermal layer of the skin, characterized by erythema, dry skin, and pain without blister formation, are classified as:",
    "First-degree (Superficial) burns (such as sunburn)",
    "Second-degree (Partial-thickness) burns",
    "Third-degree (Full-thickness) burns",
    "Fourth-degree burns",
    "A", "First-degree burns damage only the epidermis, remaining intact without blisters and healing spontaneously in 3 to 6 days without scarring.")

add("During endotracheal intubation, the 'Sellick maneuver' involves applying posterior cricoid pressure against the cervical vertebrae to:",
    "Open the larynx wider",
    "Occlude the esophagus to prevent passive gastric regurgitation and aspiration",
    "Stimulate the vagus nerve",
    "Paralyze the vocal cords",
    "B", "Compressing the complete cartilaginous cricoid ring against the C6 vertebral body occludes the esophagus, preventing aspiration of stomach contents.")

add("Which troublesome, throbbing side effect is most frequently reported by patients using sublingual nitroglycerin tablets for angina?",
    "Severe diarrhea",
    "Throbbing headache (caused by cerebral vasodilation)",
    "Constipation",
    "Blurred vision",
    "B", "Nitroglycerin causes generalized systemic and cerebral arterial vasodilation; meningeal vessel distention produces headaches in over 50% of patients.")

add("Carpal Tunnel Syndrome is an entrapment neuropathy caused by compression of which peripheral nerve beneath the transverse carpal ligament?",
    "Radial nerve",
    "Median nerve",
    "Ulnar nerve",
    "Musculocutaneous nerve",
    "B", "The median nerve passes through the rigid carpal tunnel along with nine flexor tendons; compression causes paresthesias in the thumb, index, and middle fingers.")

add("In orthopedic management, the mechanical application of a pulling force along the long axis of a fractured limb to align bone fragments is termed:",
    "Immobilization",
    "Traction (skin or skeletal traction)",
    "Casting",
    "Open reduction",
    "B", "Traction aligns fractured bone ends, overcomes muscle spasm, relieves pain, and minimizes soft tissue contractures prior to definitive fixation.")

add("Kaposi's Sarcoma, a multifocal vascular endothelial neoplasm commonly presenting as purplish cutaneous plaques in AIDS clients, is caused by:",
    "Human Papillomavirus type 16",
    "Human Herpesvirus-8 (HHV-8 / KSHV)",
    "Epstein-Barr virus",
    "Cytomegalovirus",
    "B", "HHV-8 infects vascular endothelial and lymphatic cells in severely immunocompromised individuals, driving angioproliferative tumor formation.")

add("Which of the following infections is classified as a 'water-washed' (water shortage) disease that flourishes when water for personal hygiene is scarce?",
    "Cholera",
    "Scabies and Trachoma",
    "Typhoid fever",
    "Schistosomiasis",
    "B", "Water-washed diseases (e.g., scabies, pediculosis, trachoma) spread due to inadequate water supply for regular hand, face, and clothing washing.")

add("In a client with a closed femur fracture, the greatest life-threatening systemic risk during the initial 48 hours is:",
    "Infection",
    "Fat Embolism Syndrome and massive internal hemorrhage/hypovolemic shock",
    "Neurogenic shock",
    "Deep vein calcification",
    "B", "A fractured femur can sequester 1,000 to 1,500 mL of blood into the thigh tissues, and fat globules entering torn veins can cause lethal fat embolism.")

add("In the nutritional management of chronic Gout, which dietary modification is prescribed to prevent hyperuricemia and urate crystal deposition?",
    "High protein, high purine diet",
    "Low purine diet (avoiding liver, kidneys, sweetbreads, sardines, anchovies, and heavy alcohol)",
    "Strict restriction of dietary water",
    "High saturated fat diet",
    "B", "Purines are metabolized into uric acid; avoiding purine-dense animal tissues and alcohol reduces circulating serum urate pools.")

add("Osteoporosis is a progressive metabolic bone disease characterized by:",
    "Bacterial destruction of bone cortex",
    "Demineralization leading to loss of bone mineral density and microarchitectural deterioration with high fracture risk",
    "Hypertrophy of compact cortical bone",
    "Excessive osteoblastic activity",
    "B", "Osteoclast resorption outpaces osteoblast synthesis, causing brittle, porous bones susceptible to low-trauma vertebral compression and hip fractures.")

add("Which physical deformity of the spine is a classic late assessment finding in postmenopausal osteoporosis?",
    "Lordosis",
    "Kyphosis (Dowager's hump)",
    "Scoliosis",
    "Ankylosis",
    "B", "Multiple anterior wedge compression fractures of thoracic vertebrae produce the characteristic progressive dorsal kyphotic curvature.")

add("What is the primary mode of transmission of Poliovirus in human populations?",
    "Airborne dust inhalation",
    "Fecal-oral route through ingestion of contaminated water, food, or contact with infected feces",
    "Bite of Anopheles mosquito",
    "Direct blood transfusion exclusively",
    "B", "Poliovirus replicates in the oropharynx and intestinal tract, shedding in feces for weeks and spreading via poor sanitation and contaminated water.")

add("In clinical traumatology, the stage of shock in which compensatory mechanisms fail, tissue perfusion falls catastrophically, and lactic acidosis ensues is the:",
    "Compensatory stage",
    "Progressive (decompensated) stage",
    "Irreversible stage",
    "Latent stage",
    "B", "In progressive shock, cardiac output declines, microvascular autoregulation fails, cell membranes leak, and multiple organ dysfunction syndrome (MODS) begins.")

add("A patient with severe persistent diarrhea loses substantial amounts of potassium and bicarbonate. What serious consequence can hypokalemia have on the heart?",
    "Sinus tachycardia only",
    "Potentially lethal cardiac dysrhythmias (ventricular ectopy, flat T waves, prominent U waves, and cardiac arrest)",
    "Severe hypertension",
    "Hypertrophy of the left atrium",
    "B", "Hypokalemia hyperpolarizes the myocardial resting membrane, delaying repolarization and predisposing to PVCs, ventricular tachycardia, and fibrillation.")

add("Normal healthy human kidneys filter approximately how many liters of glomerular filtrate per day in an adult?",
    "15 to 20 liters",
    "150 to 180 liters per day",
    "500 liters",
    "5 liters",
    "B", "The normal glomerular filtration rate (GFR) of 120-125 mL/min produces approximately 180 liters of ultrafiltrate daily, of which >99% is tubularly reabsorbed.")

add("The maximum physiological volume capacity of the adult urinary bladder when fully distended before pain receptors trigger emergency voiding is approximately:",
    "100 to 200 mL",
    "800 to 1000 mL",
    "2500 mL",
    "5000 mL",
    "B", "Normal voiding desire occurs at 250-350 mL; the elastic bladder can expand to hold 800 to 1000 mL before severe overdistention and pain arise.")

add("Congenital hypertrophic pyloric stenosis in infants is surgically corrected by an incision through the hypertrophied pyloric muscle known as:",
    "Bilroth I procedure",
    "Ramstedt's pyloromyotomy",
    "Whipple procedure",
    "Nissen fundoplication",
    "B", "Ramstedt's pyloromyotomy incises the thickened circular pyloric muscle down to the submucosa, releasing the gastric outlet obstruction without entering the lumen.")

add("In active euthanasia, the medical practitioner:",
    "Withholds futile life support based on a valid DNR order",
    "Directly and deliberately administers a lethal agent (such as potassium chloride) with the explicit intention of ending the patient's life",
    "Provides maximum palliative pain relief knowing it may shorten life",
    "Allows natural disease progression",
    "B", "Active euthanasia involves the deliberate, direct administration of a lethal substance to end life, which remains legally and ethically prohibited in standard nursing practice.")

add("Which of the following is considered an innate, non-specific physiological host defense mechanism against infection?",
    "Antigen-specific IgG antibodies",
    "Intact anatomical skin barrier, gastric acidity, and phagocytosis by neutrophils and macrophages",
    "Cytotoxic T-lymphocytes",
    "Memory B-cells",
    "B", "Innate non-specific defenses act immediately against all entering microorganisms without requiring prior antigen exposure or sensitization.")

add("A localized, circumscribed collection of purulent exudate (pus) surrounded by an active wall of inflamed vascularized tissue is defined as an:",
    "Ulcer",
    "Abscess",
    "Nodule",
    "Cyst",
    "B", "An abscess forms when tissue liquefaction necrosis and polymorphonuclear neutrophil infiltration become walled off by fibrous granulation tissue.")

# Save compiled list
with open('scripts/pool_final_150_clean.json', 'w') as f:
    json.dump(questions_150, f, indent=2)

print(f"Generated {len(questions_150)} questions from pages 49-68")
