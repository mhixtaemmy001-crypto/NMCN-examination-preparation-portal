# Pool of Questions directly from Pages 33 to 68 of Explicit of Medical Surgical Nursing
import json

PAGES_33_68_QUESTIONS = [
    {
        "question": "Which clinical assessment signs would the nurse suspect in a client diagnosed with Myasthenia Gravis?",
        "optionA": "Nuchal rigidity and positive Kernig's sign",
        "optionB": "Resting tremor and pill-rolling motion",
        "optionC": "Extreme muscular weakness that worsens with activity and improves with rest, accompanied by ptosis and diplopia",
        "optionD": "Chorea and progressive dementia",
        "correctAnswer": "C",
        "explanation": "Myasthenia gravis is an autoimmune disease where autoantibodies block acetylcholine receptors at the neuromuscular junction, leading to fatiguable weakness and ptosis."
    },
    {
        "question": "Which dietary instruction should be included in the care plan for a client who develops constipation following a craniotomy?",
        "optionA": "The need for daily high-volume cleansing enemas",
        "optionB": "A high-fiber diet, adequate fluid intake, and stool softeners to prevent the Valsalva maneuver",
        "optionC": "A low-fiber liquid diet exclusively",
        "optionD": "Routine daily stimulant cathartic laxatives",
        "correctAnswer": "B",
        "explanation": "Straining at stool (Valsalva maneuver) acutely raises intrathoracic and intracranial pressure; fiber and stool softeners prevent straining."
    },
    {
        "question": "When ambulating a client following surgical removal of a protruded intervertebral lumbar disc (laminectomy), which nursing principle is essential?",
        "optionA": "Maintaining proper anatomical body alignment with straight spine and avoiding twisting or bending",
        "optionB": "Having the client bend forward at the waist while walking",
        "optionC": "Administering oral sedatives 5 minutes before ambulation",
        "optionD": "Keeping the patient on complete bed rest for 14 days",
        "correctAnswer": "A",
        "explanation": "Maintaining spinal alignment and log-rolling techniques protect the surgical fusion and bone grafts from shearing forces during mobility."
    },
    {
        "question": "A client with a head injury sustains a moderate concussion and demonstrates a Glasgow Coma Scale (GCS) score of 7. Which nursing intervention should be prioritized?",
        "optionA": "Assisting the client to ambulate around the ward",
        "optionB": "Maintaining an open patent airway, preparing for endotracheal intubation, and monitoring for signs of brain herniation",
        "optionC": "Instituting active vigorous sensory stimulation",
        "optionD": "Discharging the client home with family supervision",
        "correctAnswer": "B",
        "explanation": "A GCS score of 8 or less indicates severe coma and inability to protect the airway; immediate airway protection and ICU neuro-monitoring are mandatory."
    },
    {
        "question": "When assessing a client with a spinal cord injury, the nurse notes complete loss of motor control and sensation below the waist level, with loss of bowel and bladder control. The nurse anticipates the lesion is at or below:",
        "optionA": "C4",
        "optionB": "C8",
        "optionC": "T12 (paraplegia)",
        "optionD": "S4",
        "correctAnswer": "C",
        "explanation": "Thoracic cord injuries (e.g., T12) result in paraplegia (paralysis and sensory loss of the lower trunk and lower extremities) while preserving upper extremity motor function."
    },
    {
        "question": "For a client receiving miotic eye drops (such as pilocarpine) for open-angle glaucoma, which visual side effect should the nurse instruct the client about?",
        "optionA": "Impaired distant vision and double vision",
        "optionB": "Pupillary constriction causing decreased vision in dim light or darkness",
        "optionC": "Complete loss of peripheral vision",
        "optionD": "Yellow halos around lights",
        "correctAnswer": "B",
        "explanation": "Miotics cause pupillary miosis and ciliary muscle contraction to open the trabecular meshwork; constricted pupils reduce light entry, causing night blindness and dim vision."
    },
    {
        "question": "Which assessment finding would alert the nurse to the possibility of acute intraocular hemorrhage following cataract surgery?",
        "optionA": "Elevated oral temperature of 37.8 C",
        "optionB": "Sudden sharp, severe eye pain or feeling of deep pressure accompanied by visual floaters",
        "optionC": "Mild scratchy foreign-body sensation on blinking",
        "optionD": "Watery clear tear production",
        "correctAnswer": "B",
        "explanation": "Severe sudden deep ocular pain or visual dark spots/floaters indicates increased intraocular pressure or choroidal hemorrhage, requiring immediate surgical evaluation."
    },
    {
        "question": "A client using an over-the-counter topical nasal decongestant spray reports unrelieved and worsening nasal congestion after 7 days of use. Which condition should the nurse recognize?",
        "optionA": "Development of acute bacterial sinusitis",
        "optionB": "Rhinitis medicamentosa (rebound nasal congestion from prolonged topical alpha-agonist use)",
        "optionC": "Allergic reaction to the preservative",
        "optionD": "Nasal septal perforation",
        "correctAnswer": "B",
        "explanation": "Topical nasal vasoconstrictors used beyond 3 to 5 days down-regulate alpha receptors, producing severe rebound hyperemia and worsening congestion upon wearing off."
    },
    {
        "question": "Which nursing diagnosis is the highest priority for an adult client with a traumatic perforated eardrum (tympanic membrane rupture)?",
        "optionA": "Disturbed body image",
        "optionB": "Risk for infection (otitis media) secondary to loss of the tympanic protective barrier",
        "optionC": "Acute pain related to vertigo",
        "optionD": "Deficient fluid volume",
        "correctAnswer": "B",
        "explanation": "A torn tympanic membrane allows bacteria and water from the external auditory meatus to enter the sterile middle ear cavity, risking suppurative otitis media."
    },
    {
        "question": "Which nursing intervention is essential when preparing a client for discharge following a total laryngectomy?",
        "optionA": "Instructing the client that they will breathe through the nose as before",
        "optionB": "Providing medical alert identification indicating that the client is a total neck-breather, and teaching stoma care and suctioning",
        "optionC": "Encouraging swimming in deep pools",
        "optionD": "Applying airtight occlusive dressings over the stoma",
        "correctAnswer": "B",
        "explanation": "Total laryngectomy completely severs the upper airway from the lungs; the patient breathes exclusively through the permanent neck stoma (neck-breather)."
    },
    {
        "question": "Which clinical assessment signs would alert the nurse to the possibility of a Fat Embolism Syndrome in a client with multiple long bone fractures?",
        "optionA": "Hematuria and hypocalcemia",
        "optionB": "Acute respiratory distress, hypoxia, confusion/altered mental status, and petechial rash over the chest, neck, and axillae",
        "optionC": "Sudden hypertension and bounding pulse",
        "optionD": "Severe lower back pain radiating to the heel",
        "correctAnswer": "B",
        "explanation": "Fat globules released from fractured marrow enter circulation, lodging in pulmonary and cerebral microvessels and producing petechiae, hypoxia, and acute confusion."
    },
    {
        "question": "When preparing a client for Magnetic Resonance Imaging (MRI), which safety assessment by the nurse is mandatory?",
        "optionA": "Administering a Fleet enema 1 hour before scanning",
        "optionB": "Screening for any internal metallic implants, aneurysm clips, or cardiac pacemakers",
        "optionC": "Shaving the scalp and chest",
        "optionD": "Ensuring the client remains strictly standing throughout the procedure",
        "correctAnswer": "B",
        "explanation": "The powerful magnetic field generated during MRI can heat, torque, or dislodge ferromagnetic materials and deactivate electronic cardiac pacemakers."
    },
    {
        "question": "Which nursing intervention is most effective in protecting an immunocompromised client with severe neutropenia from acquiring a nosocomial infection?",
        "optionA": "Placing the client in a positive-pressure private room and performing meticulous hand hygiene before entering",
        "optionB": "Administering prophylactic oral antidiarrheals daily",
        "optionC": "Providing fresh raw vegetable salads at every meal",
        "optionD": "Keeping fresh potted flowers at the bedside",
        "correctAnswer": "A",
        "explanation": "Strict hand washing and protective isolation prevent transmission of pathogens; raw vegetables and standing flower water harbor Pseudomonas and are prohibited."
    },
    {
        "question": "Which statement indicates that an elderly client with a stroke and right hemiplegia understands measures to prevent pressure ulcers while seated in a wheelchair?",
        "optionA": "'I will sit still in one position for 6 hours so my hip heals.'",
        "optionB": "'I will shift my weight every 15 to 20 minutes and inspect my skin daily.'",
        "optionC": "'I will sit on a rubber doughnut ring all day.'",
        "optionD": "'I will rub reddened bony areas firmly twice a day.'",
        "correctAnswer": "B",
        "explanation": "Relieving ischemic capillary pressure by weight-shifting every 15 minutes restores tissue perfusion over the ischial tuberosities."
    },
    {
        "question": "When administering parenteral opioids to a client with severe major burns during the acute emergent phase, the nurse selects which route of administration?",
        "optionA": "Intramuscular (IM)",
        "optionB": "Subcutaneous (SC)",
        "optionC": "Intravenous (IV)",
        "optionD": "Oral (PO)",
        "correctAnswer": "C",
        "explanation": "Impaired peripheral tissue perfusion and edema in burn shock make IM and SC absorption erratic and unreliable; IV administration ensures immediate, predictable bioavailability."
    },
    {
        "question": "The nurse instructs a client admitted following an automobile accident with suspected blunt abdominal trauma to lie flat and quiet because:",
        "optionA": "It decreases abdominal pain and distention while reducing the risk of dislodging an intra-abdominal hematoma or spleen tear",
        "optionB": "It increases intestinal peristalsis",
        "optionC": "It prevents gastric acid secretion",
        "optionD": "It eliminates the need for surgery",
        "correctAnswer": "A",
        "explanation": "Minimizing physical movement and maintaining bed rest prevents sudden displacement of a subcapsular splenic hematoma and hemodynamic instability."
    },
    {
        "question": "Following an insect sting, a client with acute respiratory distress receives an emergency intramuscular injection of epinephrine. Which assessment data indicates the drug is effective?",
        "optionA": "Increased heart rate and facial flushing",
        "optionB": "Easier breathing, relief of wheezing, and improved oxygen saturation",
        "optionC": "Decreased pruritus at the puncture site",
        "optionD": "Pupillary constriction",
        "correctAnswer": "B",
        "explanation": "Epinephrine acts on beta-2 adrenergic receptors to relax bronchial smooth muscle and alpha-1 receptors to relieve mucosal edema, reversing bronchospasm and stridor."
    },
    {
        "question": "Which educational topic is most important to include in pre-operative teaching for a client scheduled for an abdominal hysterectomy?",
        "optionA": "Instruction in postoperative deep breathing, coughing, and leg exercises to prevent atelectasis and DVT",
        "optionB": "Explanation of hospital billing and administrative procedures",
        "optionC": "Detailed description of all surgical instruments used",
        "optionD": "Advice to avoid drinking water for two weeks post-op",
        "correctAnswer": "A",
        "explanation": "Teaching coughing, splinting, and lower-extremity ankle-pumping exercises before surgery ensures the patient understands and complies post-operatively when groggy."
    },
    {
        "question": "On the first day following a subtotal thyroidectomy, the client develops hoarseness, whispered speech, and inspiratory stridor. The nurse immediately suspects:",
        "optionA": "Normal throat irritation from the endotracheal tube",
        "optionB": "Tracheal compression from expanding wound hematoma or bilateral recurrent laryngeal nerve damage",
        "optionC": "Hypocalcemic tetany exclusively",
        "optionD": "Acute pulmonary embolism",
        "correctAnswer": "B",
        "explanation": "Stridor indicates upper airway narrowing due to tracheal edema, hematoma compression, or vocal cord paralysis, requiring an emergency tracheostomy tray at the bedside."
    },
    {
        "question": "Which clinical assessment finding would the nurse expect to assess in a client with Acute Respiratory Distress Syndrome (ARDS)?",
        "optionA": "Localized unilateral wheezing on inspiration",
        "optionB": "Severe refractory hypoxemia, dyspnea, and bilateral diffuse alveolar infiltrates on chest X-ray",
        "optionC": "Hypertension with clear lung fields",
        "optionD": "Stridor with normal arterial blood gases",
        "correctAnswer": "B",
        "explanation": "ARDS is marked by widespread inflammatory damage to the alveolocapillary membrane, pulmonary non-cardiogenic edema, and severe hypoxemia unresponsive to high FiO2."
    },
    {
        "question": "Five hours after a chest tube is placed for a traumatic pneumothorax, the nurse observes that the water level in the water-seal chamber fluctuates with breathing (tidaling). This indicates:",
        "optionA": "The chest tube is occluded with a blood clot",
        "optionB": "The system is functioning normally, reflecting intrapleural pressure changes with inspiration and expiration",
        "optionC": "An active continuous air leak in the drainage tubing",
        "optionD": "The lung has fully expanded and the tube should be removed immediately",
        "correctAnswer": "B",
        "explanation": "Tidaling (rise on inspiration, fall on expiration in a spontaneously breathing patient) confirms patent communication between the pleural space and water seal."
    },
    {
        "question": "A client on telemetry suddenly goes into pulseless ventricular tachycardia. What is the immediate priority intervention?",
        "optionA": "Administer IV lidocaine bolus",
        "optionB": "Defibrillate immediately with unsynchronized shock and initiate cardiopulmonary resuscitation (CPR)",
        "optionC": "Obtain a 12-lead electrocardiogram",
        "optionD": "Perform a carotid sinus massage",
        "correctAnswer": "B",
        "explanation": "Pulseless ventricular tachycardia is functionally identical to ventricular fibrillation and requires immediate electrical defibrillation and high-quality chest compressions."
    },
    {
        "question": "A client with chronic heart failure is prescribed digoxin. Before administering the scheduled morning dose, the nurse finds an apical pulse of 52 beats per minute. The nurse should:",
        "optionA": "Administer the medication with a glass of orange juice",
        "optionB": "Withhold the medication, document the finding, and notify the prescribing physician",
        "optionC": "Give half the prescribed tablet",
        "optionD": "Recheck the radial pulse in 4 hours",
        "correctAnswer": "B",
        "explanation": "Digoxin exerts a negative chronotropic effect on the SA and AV nodes; doses must be withheld if the apical heart rate is below 60 beats/min in adults to avoid severe bradycardia."
    },
    {
        "question": "Which statement indicates that a client with a permanent cardiac pacemaker understands post-discharge safety instructions?",
        "optionA": "'I can undergo MRI scans without any special precautions.'",
        "optionB": "'I will check my pulse daily and report any rate lower than the set rate, dizziness, or prolonged hiccups to my doctor.'",
        "optionC": "'I must never use a microwave oven at home.'",
        "optionD": "'The pacemaker will need to be replaced every 3 months.'",
        "correctAnswer": "B",
        "explanation": "Pulse rates below the programmed lower rate limit indicate pacemaker malfunction; persistent hiccups can signal phrenic nerve stimulation from displaced lead wires."
    },
    {
        "question": "In assessing a client with cholelithiasis, the nurse expects the client to report biliary colic described as:",
        "optionA": "Dull left lower quadrant aching after drinking water",
        "optionB": "Severe, episodic spasmodic pain in the right upper quadrant or epigastrium that radiates to the right shoulder or back, especially following high-fat meals",
        "optionC": "Constant burning retrosternal chest pain relieved by food",
        "optionD": "Periumbilical pain relieved by defecation",
        "correctAnswer": "B",
        "explanation": "Ingestion of dietary fat triggers cholecystokinin release, stimulating gallbladder contraction against an obstructing cystic duct stone and producing right hypochondriac pain."
    },
    {
        "question": "Which clinical assessment findings would the nurse expect to find in a client with acute appendicitis?",
        "optionA": "Severe left upper quadrant pain radiating to the groin",
        "optionB": "Abdominal pain beginning periumbilically and shifting to the right lower quadrant at McBurney's point, with nausea, low-grade fever, and rebound tenderness",
        "optionC": "Painless watery diarrhea and jaundice",
        "optionD": "Sudden hematemesis and melena",
        "correctAnswer": "B",
        "explanation": "Visceral pain from appendiceal luminal obstruction initially refers to the T10 periumbilical dermatome before localizing to the parietal peritoneum in the right iliac fossa."
    },
    {
        "question": "A client has a permanent sigmoid colostomy. The nurse educates the client that the expected consistency of fecal drainage from a sigmoid stoma is:",
        "optionA": "Liquid and highly enzymatically irritating",
        "optionB": "Formed and firm (similar to normal defecated stool)",
        "optionC": "Continuous semi-liquid slurry",
        "optionD": "Mucus only without fecal matter",
        "correctAnswer": "B",
        "explanation": "Because the sigmoid colon is situated at the terminal end of the large intestine where water reabsorption is largely complete, effluent is solid and formed."
    },
    {
        "question": "During a tonic-clonic epileptic seizure, the nurse's primary protective responsibility is to:",
        "optionA": "Forcefully insert a padded tongue blade between the client's clenched teeth",
        "optionB": "Restrain the client's arms and legs tightly to the bed frame",
        "optionC": "Protect the client's head from injury, loosen tight clothing, maintain airway patency, and never force objects into the mouth",
        "optionD": "Administer oral antiepileptic syrup immediately",
        "correctAnswer": "C",
        "explanation": "Safety and airway protection are the primary priorities; forcing items into the mouth causes dental fractures and aspiration, and physical restraint causes musculoskeletal injury."
    },
    {
        "question": "A client with chronic obstructive pulmonary disease (COPD) is receiving long-term oral prednisone therapy. Which instruction should the nurse include in the discharge teaching?",
        "optionA": "'Stop taking the pills immediately if you gain any weight.'",
        "optionB": "'Never discontinue prednisone abruptly; the dose must be tapered gradually as ordered by your doctor.'",
        "optionC": "'Take the medication on an empty stomach right before bedtime.'",
        "optionD": "'Avoid drinking fluids while on this medication.'",
        "correctAnswer": "B",
        "explanation": "Exogenous corticosteroids suppress the hypothalamic-pituitary-adrenal axis; abrupt cessation causes acute life-threatening adrenal crisis due to adrenal atrophy."
    },
    {
        "question": "In evaluating arterial blood gas results for a client with acute respiratory failure, which finding definitively confirms hypoxemic respiratory failure?",
        "optionA": "Arterial oxygen tension (PaO2) less than 60 mmHg on room air",
        "optionB": "Arterial carbon dioxide tension (PaCO2) of 40 mmHg",
        "optionC": "Blood pH of 7.40",
        "optionD": "Serum bicarbonate of 24 mEq/L",
        "correctAnswer": "A",
        "explanation": "Type I (hypoxemic) respiratory failure is classically defined as a PaO2 <60 mmHg while breathing ambient room air (FiO2 0.21)."
    }
]

with open('scripts/pages_33_68_data.json', 'w') as f:
    json.dump(PAGES_33_68_QUESTIONS, f, indent=2)

print(f"Generated {len(PAGES_33_68_QUESTIONS)} questions from pages 33-68")
