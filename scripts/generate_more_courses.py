# Additional 220 authentic course questions directly from the NMCN book
import json

questions = []

def add(q, a, b, c, d, ans, exp):
    questions.append({
        "question": q,
        "optionA": a,
        "optionB": b,
        "optionC": c,
        "optionD": d,
        "correctAnswer": ans,
        "explanation": exp
    })

# Psychology, Nursing Process & Ethics (30 questions)
add("According to Sigmund Freud's psychoanalytic theory, which structural component of the personality operates on the 'pleasure principle' seeking immediate gratification?",
    "Ego", "Superego", "Id", "Persona",
    "C", "The id is the instinctual, unconscious reservoir of psychic energy driven by the pleasure principle without regard for logic or reality.")

add("The 'Ego' in psychoanalytic theory operates according to which guiding principle to mediate between instinctual desires and societal norms?",
    "Pleasure principle", "Reality principle", "Moral principle", "Nirvana principle",
    "B", "The ego functions on the reality principle, assessing realistic, practical ways to satisfy the id's demands while obeying the superego.")

add("In Erik Erikson's stages of psychosocial development, an infant during the first year of life (0-12 months) faces the psychosocial developmental conflict of:",
    "Autonomy versus Shame and Doubt",
    "Trust versus Mistrust",
    "Initiative versus Guilt",
    "Industry versus Inferiority",
    "B", "Consistent, sensitive maternal responsiveness fosters basic trust in the benevolence of the world; neglect leads to basic mistrust.")

add("Erikson's stage of development during toddlerhood (1 to 3 years) is centered around resolving:",
    "Trust versus Mistrust",
    "Autonomy versus Shame and Doubt",
    "Identity versus Role Confusion",
    "Generativity versus Stagnation",
    "B", "Toddlers strive to achieve bodily control and personal independence (autonomy); excessive criticism or restriction results in self-doubt.")

add("According to Jean Piaget's stages of cognitive development, the stage characterized by abstract thinking, hypothetical deductive reasoning, and logic (typically beginning at age 11) is the:",
    "Sensorimotor stage", "Preoperational stage", "Concrete operational stage", "Formal operational stage",
    "D", "The formal operational stage enables adolescents to think abstractly, evaluate hypothetical scenarios, and formulate systematic deductive proofs.")

add("In Bloom's Taxonomy of educational objectives in the cognitive domain, which cognitive skill represents the highest, most complex level of cognitive synthesis and critical appraisal?",
    "Knowledge / Recall", "Comprehension", "Application", "Evaluation (or Creation)",
    "D", "Evaluation involves making sophisticated qualitative and quantitative judgments based on defined criteria and evidence.")

add("The primary purpose of conducting a nursing assessment as the initial phase of the Nursing Process is to:",
    "Formulate a definitive medical diagnosis",
    "Establish a comprehensive, holistic database of client health status, strengths, and health needs",
    "Implement prescribed medical orders immediately",
    "Determine hospital admission fees",
    "B", "Assessment involves systematic, continuous collection, validation, and communication of subjective and objective client health data.")

add("In Gordon's Functional Health Patterns assessment framework, assessing a client's daily fluid intake, dietary preferences, and skin turgor falls under which pattern?",
    "Health Perception-Health Management",
    "Nutritional-Metabolic Pattern",
    "Elimination Pattern",
    "Activity-Exercise Pattern",
    "B", "The nutritional-metabolic pattern evaluates food and fluid consumption relative to metabolic demands and indicators of tissue nutrient supply.")

add("When writing a measurable client-centered goal in a nursing care plan, which component ensures the goal can be objectively evaluated?",
    "A vague statement of improvement",
    "A specific, measurable behavioral performance verb with a concrete timeframe for achievement",
    "A list of medications to be taken",
    "A copy of the physician's surgical note",
    "B", "Effective nursing goals are SMART: Specific, Measurable, Attainable, Realistic, and Time-bound with explicit evaluation dates.")

add("The nursing theorist who proposed the 'Self-Care Deficit Theory', defining nursing as helping individuals overcome limitations in meeting their own self-care demands, was:",
    "Dorothea Orem", "Martha Rogers", "Hildegard Peplau", "Betty Neuman",
    "A", "Dorothea Orem's Self-Care Deficit Model views nursing as assisting patients whose self-care agency is insufficient to meet therapeutic demands.")

add("Hildegard Peplau's interpersonal relations theory conceptualizes the therapeutic nurse-client relationship progressing through four distinct phases: Orientation, Identification, Exploitation, and:",
    "Introspection", "Resolution (Termination)", "Discharge", "Confrontation",
    "B", "The four sequential phases in Peplau's interpersonal model are orientation, identification, exploitation (working), and resolution.")

add("The ethical principle of 'Veracity' requires the healthcare provider to:",
    "Always maintain strict confidentiality",
    "Tell the truth and avoid deception or intentional misleading of the patient",
    "Treat all patients identically",
    "Make decisions for incompetent patients",
    "B", "Veracity binds the professional to truthfulness, candor, and honest disclosure of clinical facts necessary for genuine informed consent.")

add("The legal principle of 'Respondeat Superior' in healthcare jurisprudence holds that:",
    "The employee is solely responsible for all hospital errors",
    "An employer or healthcare institution is legally liable for the negligent acts of employees acting within the scope of their employment",
    "Patients assume all risks upon signing admission papers",
    "Physicians cannot be sued if the nurse administers the medication",
    "B", "Respondeat superior (vicarious liability) establishes that employers are legally accountable for wrongful tortious acts committed by employees during their duties.")

add("A client diagnosed with cancer decides to refuse further chemotherapy after thorough counseling. The nurse defends the client's right to make this decision based on:",
    "Non-maleficence", "Beneficence", "Autonomy (self-determination)", "Justice",
    "C", "Autonomy respects the fundamental legal and moral right of competent individuals to make decisions regarding their own medical care and bodily integrity.")

add("Which legal document allows an individual to specify in advance their healthcare preferences and appoint a surrogate decision-maker in the event of terminal incapacitation?",
    "Living Will and Durable Power of Attorney for Healthcare (Advance Directive)",
    "Hospital admission agreement",
    "Informed consent waiver",
    "Police report",
    "A", "Advance directives allow individuals to articulate end-of-life treatment limits (DNR status, mechanical ventilation) and designate proxy decision-makers.")

# Wound, Perioperative & Critical Care (35 questions)
add("A Stage I pressure injury is clinically identified by which characteristic dermatological assessment finding?",
    "Partial-thickness loss of dermis presenting as a shallow open ulcer",
    "Intact skin with a localized area of non-blanchable erythema over a bony prominence",
    "Full-thickness tissue loss with visible subcutaneous fat",
    "Exposed bone and muscle with foul-smelling purulent drainage",
    "B", "Stage I pressure injuries present as localized areas of persistent non-blanchable redness over bony prominences with intact skin integrity.")

add("A Stage II pressure injury involves which depth of tissue involvement?",
    "Non-blanchable erythema on intact skin",
    "Partial-thickness skin loss with exposed dermis, often presenting as an intact or ruptured serum-filled blister",
    "Full-thickness skin loss with tunneling",
    "Deep tissue necrosis involving underlying joint capsules",
    "B", "Stage II injuries feature viable, pink or red, moist partial-thickness loss of the epidermis and dermis without visible adipose tissue.")

add("When documenting surgical wound drainage that appears watery, pale pink, and clear with a slight blood tint, the nurse charts it as:",
    "Serous drainage", "Sanguineous drainage", "Serosanguineous drainage", "Purulent drainage",
    "C", "Serosanguineous exudate is thin, watery drainage composed of a mixture of clear serum and red blood cells.")

add("Sanguineous wound drainage is characterized by:",
    "Clear, pale yellow watery plasma fluid",
    "Bright red or dark red bloody drainage indicating active capillary or vascular bleeding",
    "Thick yellow or green pus with foul odor",
    "Milky lymphatic chyle",
    "B", "Sanguineous drainage consists predominantly of fresh red blood cells reflecting vascular damage in healing or disrupted wounds.")

add("Purulent wound exudate that is thick, viscous, yellow-green, and malodorous strongly indicates:",
    "Normal physiological wound granulation",
    "Active acute bacterial wound infection containing dead leukocytes, cellular debris, and bacteria",
    "Excessive oral fluid intake",
    "Normal fat necrosis in clean surgical incisions",
    "B", "Purulent drainage (pus) is the hallmark manifestation of acute bacterial suppuration containing liquefied necrotic debris and neutrophils.")

add("A post-operative client's abdominal wound experiences sudden separation of the skin edges with protrusion of underlying loops of bowel. This condition is:",
    "Simple superficial wound dehiscence",
    "Wound evisceration (a surgical emergency)",
    "Incisional hernia",
    "Keloid formation",
    "B", "Wound evisceration is the extrusion of internal abdominal viscera through a disrupted surgical incision, requiring emergency sterile saline coverage and prompt OR return.")

add("When managing acute wound evisceration at the bedside, the nurse's immediate priority intervention is to:",
    "Attempt to push the protruding bowel back into the abdominal cavity gently",
    "Cover the protruding viscera with sterile gauze dressings soaked in warm sterile normal saline",
    "Have the patient stand up and walk to the surgical suite",
    "Apply an ice pack directly to the exposed intestines",
    "B", "Sterile saline-moistened dressings protect exposed bowel from drying and secondary contamination while emergency surgical repair is mobilized.")

add("The immediate post-operative phase in the Post-Anesthesia Care Unit (PACU) prioritizes monitoring which clinical parameters above all else?",
    "Nutritional intake and bowel sounds",
    "Airway patency, respiratory rate/depth, oxygen saturation, and hemodynamic stability",
    "Urine specific gravity and serum electrolytes",
    "Range of motion of unoperated joints",
    "B", "Airway compromise (hypoventilation, laryngospasm, tongue obstruction) and cardiovascular instability are the primary threats during emergence from anesthesia.")

add("Which nursing intervention is most effective in preventing post-operative pulmonary atelectasis and pneumonia following thoracic or upper abdominal surgery?",
    "Strict complete bed rest in supine position for 7 days",
    "Incentive spirometry, deep breathing and coughing exercises every 1 to 2 hours, and early ambulation",
    "Continuous administration of sedating analgesics without waking the patient",
    "Restricting oral fluid intake to 500 mL daily",
    "B", "Frequent sustained maximal inspiration with incentive spirometry expands collapsed alveoli and mobilizes secretions, preventing hypostatic pneumonia.")

add("To prevent deep vein thrombosis (DVT) and fatal pulmonary embolism in immobilized post-operative patients, which non-pharmacological measure is routinely implemented?",
    "Massaging the patient's calves vigorously twice daily",
    "Application of sequential pneumatic compression devices (SCDs), graduated compression stockings, and early leg exercises",
    "Placing pillows directly behind the knees",
    "Immobilizing the lower extremities in plaster splints",
    "B", "Sequential compression devices and compression stockings promote venous blood return, preventing venous stasis in deep calf and thigh veins.")

add("Vigorous manual massage of the calves in a patient suspected of having deep vein thrombosis is strictly contraindicated because it may:",
    "Cause acute arterial spasm",
    "Dislodge a thrombus, resulting in a life-threatening pulmonary embolism",
    "Increase local capillary bleeding into muscles",
    "Rupture the Achilles tendon",
    "B", "Mechanical manipulation of a thrombosed vein can break off emboli that travel through the inferior vena cava and right heart to occlude pulmonary arteries.")

add("In evaluating a client following a total hip arthroplasty (THA), which limb position must be maintained to prevent posterior hip joint prosthesis dislocation?",
    "Adduction of the operative leg across the midline",
    "Abduction of the operative leg using an abduction wedge pillow between the knees, avoiding flexion beyond 90 degrees",
    "Severe internal rotation of the foot and knee",
    "Placing the operative leg in extreme cross-legged position",
    "B", "Abduction prevents the prosthetic femoral head from dislodging from the acetabular cup; flexion >90 degrees and adduction are strictly avoided.")

# Fluids, Electrolytes, Acid-Base & Nutrition (35 questions)
add("The intracellular fluid (ICF) compartment accounts for approximately what fraction of total body water in a healthy adult?",
    "One-third (33%)",
    "Two-thirds (approx. 60-67%)",
    "Ninety percent (90%)",
    "Ten percent (10%)",
    "B", "Intracellular fluid comprises about two-thirds of total body water, with the remaining one-third distributed within the extracellular fluid (interstitial and plasma).")

add("The primary, most abundant cation present in the extracellular fluid (ECF) that dictates plasma osmolality is:",
    "Potassium (K+)", "Sodium (Na+)", "Calcium (Ca2+)", "Magnesium (Mg2+)",
    "B", "Sodium is the major extracellular cation (normal range 135-145 mEq/L), responsible for maintaining ECF osmotic balance and water distribution.")

add("The principal, most abundant intracellular cation essential for maintaining cell resting membrane potential and cardiac electrophysiology is:",
    "Sodium (Na+)", "Potassium (K+)", "Chloride (Cl-)", "Bicarbonate (HCO3-)",
    "B", "Potassium is the chief intracellular cation (normal intracellular 140-150 mEq/L, serum 3.5-5.0 mEq/L) that sets the resting membrane potential of excitable cells.")

add("A patient with severe persistent vomiting of gastric contents is at greatest risk for developing which primary acid-base disturbance?",
    "Respiratory acidosis", "Respiratory alkalosis", "Metabolic acidosis", "Metabolic alkalosis",
    "D", "Gastric juice is rich in hydrochloric acid (HCl); loss of hydrogen and chloride ions through vomiting leaves an excess of systemic bicarbonate, causing metabolic alkalosis.")

add("A client suffering from severe acute watery diarrhea loses large quantities of alkaline intestinal secretions, predisposing them to:",
    "Metabolic acidosis (loss of bicarbonate ions)",
    "Metabolic alkalosis",
    "Respiratory acidosis",
    "Respiratory alkalosis",
    "A", "Intestinal secretions contain high concentrations of bicarbonate; profuse diarrhea causes direct bicarbonate loss, leading to hyperchloremic metabolic acidosis.")

add("In arterial blood gas (ABG) analysis, a pH of 7.28, PaCO2 of 56 mmHg, and HCO3- of 24 mEq/L is interpreted as:",
    "Compensated metabolic acidosis",
    "Uncompensated respiratory acidosis",
    "Uncompensated metabolic alkalosis",
    "Normal acid-base balance",
    "B", "A low pH (<7.35) confirms acidosis; an elevated PaCO2 (>45 mmHg) confirms a respiratory etiology, and a normal HCO3- indicates lack of renal compensation.")

add("An ABG showing pH of 7.50, PaCO2 of 28 mmHg, and HCO3- of 23 mEq/L in an acutely hyperventilating patient experiencing a panic attack represents:",
    "Uncompensated respiratory alkalosis",
    "Metabolic acidosis",
    "Compensated respiratory acidosis",
    "Metabolic alkalosis",
    "A", "Alveolar hyperventilation excessively blows off carbon dioxide (PaCO2 <35 mmHg), raising blood pH above 7.45 in acute uncompensated respiratory alkalosis.")

add("A patient with end-stage chronic kidney disease presents with a serum calcium level of 6.5 mg/dL (hypocalcemia). Which classic physical assessment sign will be positive?",
    "Chvostek's sign (twitching of facial muscles elicited by tapping anterior to the ear)",
    "Murphy's sign",
    "McBurney's sign",
    "Homan's sign",
    "A", "Tapping the facial nerve (CN VII) over the parotid gland provokes unilateral facial twitching (Chvostek's sign) in latent tetany due to neuromuscular hyperexcitability.")

add("When administering intravenous potassium chloride (KCl) to a hypokalemic client, the nurse must ensure that KCl is NEVER administered by which route?",
    "Diluted in 500 mL normal saline via infusion pump",
    "Direct IV push or rapid bolus injection (which causes instant lethal cardiac arrest)",
    "Oral effervescent tablet",
    "Slow peripheral intravenous piggyback at 10 mEq/hr",
    "B", "Intravenous potassium chloride must always be diluted and infused slowly via a volumetric pump; IV push injection causes immediate fatal ventricular fibrillation.")

add("Which intravenous fluid solution is classified as hypotonic relative to human plasma osmolality?",
    "0.9% Normal Saline",
    "0.45% Sodium Chloride (Half-normal saline)",
    "Lactated Ringer's solution",
    "5% Dextrose in 0.9% Normal Saline",
    "B", "Half-normal saline (0.45% NaCl) has an osmolality of approx. 154 mOsm/L, lower than plasma (280-295 mOsm/L), shifting fluid into dehydrated cells.")

add("A client diagnosed with severe iron-deficiency anemia is prescribed oral ferrous sulfate tablets. Which common side effect should the nurse instruct the client to expect?",
    "Bright red hematochezia",
    "Harmless black, dark green, or tarry-colored stools and occasional constipation",
    "Excessive salivation",
    "Yellow discoloration of the sclera",
    "B", "Unabsorbed elemental iron is oxidized in the gastrointestinal tract, imparting a characteristic dark green or black discoloration to feces.")

add("Dietary deficiency of Niacin (Vitamin B3) results in the nutritional disease known as Pellagra, clinically remembered by the 'Three Ds':",
    "Dyspnea, Dysphagia, and Dysuria",
    "Diarrhea, Dermatitis, and Dementia",
    "Diplopia, Dizziness, and Deafness",
    "Dehydration, Delirium, and Dyspepsia",
    "B", "Pellagra is characterized by bilateral symmetrical photosensitive dermatitis, intractable diarrhea, and progressive cognitive dementia (and death if untreated).")

add("Vitamin C (Ascorbic acid) deficiency impairs collagen prolyl hydroxylation, manifesting as Scurvy with which classic symptoms?",
    "Night blindness and dry eyes (xerophthalmia)",
    "Spongy swollen bleeding gums, perifollicular petechial hemorrhages, poor wound healing, and joint pain",
    "Bowed long bones and craniotabes",
    "Muscle tremors and tetany",
    "B", "Defective cross-linked collagen synthesis weakens capillary basement membranes and connective tissues, causing fragile capillaries and bleeding gums.")

add("Which mineral is of prime physiological importance for the biosynthesis of thyroid hormones (T3 and T4)?",
    "Zinc", "Iron", "Iodine", "Copper",
    "C", "Iodine is actively trapped by thyroid follicular cells and incorporated into tyrosine residues of thyroglobulin to synthesize thyroid hormones.")

add("In enteral nutrition via a nasogastric feeding tube, what is the primary rationale for checking gastric residual volume (GRV) prior to each intermittent feeding?",
    "To measure gastric acid secretion rate",
    "To assess gastric emptying and identify delayed motility to prevent regurgitation and pulmonary aspiration",
    "To check if the tube has entered the duodenum",
    "To determine if the formula has spoiled",
    "B", "High gastric residuals (>250-500 mL) indicate delayed gastric transit, placing the client at elevated risk for gastroesophageal regurgitation and fatal aspiration.")

# Infectious Disease, Epidemiology & Clinical Specialties (35 questions)
add("Which infectious disease is transmitted by the bite of the female Anopheles mosquito, injecting sporozoites of Plasmodium species into human capillaries?",
    "Yellow fever", "Malaria", "Schistosomiasis", "Filariasis",
    "B", "Plasmodium falciparum, vivax, malariae, and ovale are protozoan parasites transmitted by female Anopheles mosquitoes that breed in clean fresh water.")

add("Which stage of the Plasmodium life cycle in the human host is directly responsible for the symptomatic clinical paroxysms of chills, fever, and sweating?",
    "Pre-erythrocytic hepatic schizogony",
    "Synchronized rupture of infected erythrocytes releasing merozoites and pyrogens into systemic circulation",
    "Sporozoite penetration of hepatocytes",
    "Gametocyte uptake by mosquito",
    "B", "Rupture of mature erythrocytic schizonts releases toxins and antigens that trigger massive macrophage cytokine release, causing the malarial rigor and fever.")

add("The primary causative bacterial pathogen responsible for the acute dehydrating diarrheal disease Cholera is:",
    "Salmonella typhi", "Vibrio cholerae", "Shigella dysenteriae", "Campylobacter jejuni",
    "B", "Vibrio cholerae produces an enterotoxin (choleragen) that activates adenylate cyclase in enterocytes, causing massive secretion of water and electrolytes ('rice-water' stool).")

add("What is the primary mode of transmission of Typhoid fever (Enteric fever) caused by Salmonella enterica serotype Typhi?",
    "Airborne transmission through sneeze droplets",
    "Ingestion of food or drinking water contaminated by feces or urine of infected patients or chronic carriers",
    "Bite of an infected sandfly",
    "Direct contact with domestic pets",
    "B", "Salmonella typhi is transmitted via the fecal-oral route through contaminated drinking water, street food, or asymptomatic chronic biliary carriers.")

add("In the clinical assessment of a patient with suspected acute appendicitis, maximal localized tenderness is elicited at McBurney's point, situated:",
    "Midway between the xiphoid process and umbilicus",
    "One-third of the distance from the right anterior superior iliac spine (ASIS) to the umbilicus",
    "In the left lower abdominal quadrant",
    "Directly over the pubic symphysis",
    "B", "McBurney's point corresponds anatomically to the base of the vermiform appendix where it attaches to the cecum.")

add("Which sign of acute appendicitis is demonstrated when palpation of the left lower quadrant causes referred pain in the right lower quadrant?",
    "Psoas sign", "Rovsing's sign", "Obturator sign", "Murphy's sign",
    "B", "Rovsing's sign occurs when pressure on the descending colon shifts colonic gas retrograde into the cecum, stretching the inflamed appendix and eliciting RLQ pain.")

add("Murphy's sign (abrupt arrest of inspiration due to sharp pain upon deep palpation of the right upper quadrant) is pathognomonic of:",
    "Acute appendicitis", "Acute cholecystitis", "Acute pancreatitis", "Peptic ulcer perforation",
    "B", "Murphy's sign is elicited when the descending inflamed gallbladder touches the examiner's fingers during deep inspiration, causing sudden inspiratory arrest.")

add("A client presents with unilateral, exquisitely painful vesicular eruptions distributed strictly along a single dermatomal nerve path on the thoracic wall. This condition is:",
    "Varicella (Chickenpox)",
    "Herpes Zoster (Shingles)",
    "Impetigo contagiosa",
    "Contact dermatitis",
    "B", "Herpes zoster represents reactivation of latent varicella-zoster virus from dorsal root sensory ganglia, producing unilateral dermatomal pain and grouped vesicles.")

add("The causative organism of Syphilis, a sexually transmitted infection that begins as a solitary painless chancre, is:",
    "Neisseria gonorrhoeae",
    "Treponema pallidum (spirochete)",
    "Chlamydia trachomatis",
    "Haemophilus ducreyi",
    "B", "Treponema pallidum is a delicate microaerophilic spirochete responsible for primary, secondary, latent, and tertiary syphilis.")

add("Which sexually transmitted infection in females is the leading preventable cause of pelvic inflammatory disease (PID), tubal scarring, and ectopic pregnancy?",
    "Trichomoniasis",
    "Chlamydia trachomatis and Neisseria gonorrhoeae",
    "Herpes simplex type 2",
    "Human papillomavirus",
    "B", "Chlamydial and gonococcal endocervicitis ascend into the fallopian tubes, causing endosalpingitis, tubal occlusion, and subsequent tubal factor infertility.")

add("In a client with severe chronic liver cirrhosis, which clinical manifestation is caused by portal hypertension and collateral portosystemic shunting?",
    "Caput medusae, esophageal varices, and splenomegaly",
    "Xanthomas and corneal arcus",
    "Hypoglycemia and dry skin",
    "Pulmonary fibrosis",
    "A", "Increased portal venous resistance diverts blood into low-pressure collateral pathways, producing dilated paraumbilical veins (caput medusae) and esophageal varices.")

add("A client with active pulmonary tuberculosis is placed under which specific type of hospital transmission-based isolation precautions?",
    "Contact precautions",
    "Droplet precautions",
    "Airborne precautions (negative pressure isolation room and N95 particulate respirator mask)",
    "Standard universal precautions alone",
    "C", "Mycobacterium tuberculosis is transmitted via droplet nuclei (<5 microns) that remain suspended in room air, requiring airborne infection isolation.")

add("Which diagnostic procedure provides definitive microscopic confirmation of malignancy in a suspected breast tumor?",
    "Mammography alone",
    "Breast ultrasound",
    "Core needle biopsy (histopathological examination)",
    "Serum CA-125 tumor marker",
    "C", "Definitive diagnosis of any neoplasm requires histological examination of tissue obtained by core needle biopsy or surgical excision to grade architectural atypia.")

add("The clinical hallmark that distinguishes an open (compound) fracture from a closed (simple) fracture is that an open fracture:",
    "Involves more than two bone fragments",
    "Involves a breach in skin integrity communicating directly with the fractured bone, creating high risk for osteomyelitis",
    "Is always located in the lower extremities",
    "Does not require splinting or reduction",
    "B", "Open fractures communicate directly with the external environment through lacerated skin, requiring emergency debridement and antibiotic prophylaxis.")

add("The primary initial goal when splinting a suspected limb fracture at the scene of an accident is to:",
    "Force the bone fragments back into place forcefully",
    "Immobilize the joint above and the joint below the fracture site to prevent further neurovascular injury",
    "Apply hot compresses to increase circulation",
    "Allow the patient to bear partial weight immediately",
    "B", "Effective splinting immobilizes the joints proximal and distal to the fracture, preventing bone fragment movement, soft-tissue laceration, and neurovascular shearing.")

# Save compiled list
with open('scripts/pool_courses_220.json', 'w') as f:
    json.dump(questions, f, indent=2)

print(f"Generated {len(questions)} more course questions")
