import json

MORE_QUESTIONS = [
    # Hematology & Transfusion Medicine
    {
        "question": "A client receiving a unit of packed red blood cells suddenly develops chills, fever, lower back pain, tachycardia, and dyspnea 15 minutes into the transfusion. What is the nurse's first immediate action?",
        "optionA": "Slow the infusion rate to keep vein open",
        "optionB": "Stop the transfusion immediately, disconnect the blood tubing at the hub, and infuse 0.9% Normal Saline with new IV tubing",
        "optionC": "Administer an oral antipyretic and continue the transfusion",
        "optionD": "Elevate the client's legs and increase the blood flow rate",
        "correctAnswer": "B",
        "explanation": "These signs indicate an acute hemolytic transfusion reaction; the priority is stopping the offending blood immediately and maintaining vascular access."
    },
    {
        "question": "Disseminated Intravascular Coagulation (DIC) is a complex hematological syndrome characterized pathophysiologically by:",
        "optionA": "Isolated deficiency of platelet production in bone marrow",
        "optionB": "Widespread systemic microvascular fibrin thrombi formation with consumption of clotting factors and platelets, leading to paradoxical severe hemorrhage",
        "optionC": "Rapid clonal expansion of mature erythrocytes",
        "optionD": "Chronic localized venous stasis without bleeding",
        "correctAnswer": "B",
        "explanation": "DIC involves uncontrolled thrombin generation causing widespread microthrombi and secondary consumptive coagulopathy with hemorrhage."
    },
    {
        "question": "In a client diagnosed with Multiple Myeloma, which laboratory urine finding represents abnormal monoclonal light chains excreted by malignant plasma cells?",
        "optionA": "Bence Jones proteinuria",
        "optionB": "Glucosuria",
        "optionC": "Ketonuria",
        "optionD": "Bilirubinuria",
        "correctAnswer": "A",
        "explanation": "Bence Jones proteins are free monoclonal immunoglobulin kappa or lambda light chains filtered by glomeruli in multiple myeloma."
    },
    {
        "question": "The Philadelphia chromosome, a balanced reciprocal translocation t(9;22)(q34;q11) creating the BCR-ABL1 oncogene, is pathognomonic for:",
        "optionA": "Acute lymphoblastic leukemia (ALL)",
        "optionB": "Chronic Myeloid Leukemia (CML)",
        "optionC": "Hodgkin's lymphoma",
        "optionD": "Burkitt lymphoma",
        "correctAnswer": "B",
        "explanation": "The BCR-ABL tyrosine kinase gene fusion on the Philadelphia chromosome drives constitutive proliferation in chronic myeloid leukemia."
    },
    {
        "question": "Von Willebrand disease, the most common inherited human bleeding disorder, is caused by deficiency or dysfunction of a protein that:",
        "optionA": "Directly hydrolyzes prothrombin into thrombin",
        "optionB": "Mediates platelet adhesion to subendothelial collagen and stabilizes circulating Factor VIII",
        "optionC": "Synthesizes erythropoietin in peritubular capillary beds",
        "optionD": "Inhibits plasminogen activation",
        "correctAnswer": "B",
        "explanation": "Von Willebrand factor anchors platelets to damaged subendothelial collagen and serves as the carrier protein protecting Factor VIII from degradation."
    },
    # Cardiovascular & Shock
    {
        "question": "Neurogenic shock resulting from high cervical or thoracic spinal cord trauma is uniquely distinguished from other forms of distributive shock by:",
        "optionA": "Profound hypertension, tachycardia, and hyperthermia",
        "optionB": "Hypotension accompanied by paradoxical bradycardia and warm, dry skin below the level of the injury",
        "optionC": "Narrow pulse pressure, severe cold clammy skin, and tachypnea",
        "optionD": "Marked hyperkalemia with muscle spasms",
        "correctAnswer": "B",
        "explanation": "Loss of sympathetic tone leaves unopposed vagal parasympathetic innervation to the heart (bradycardia) and systemic vasodilation (warm dry skin)."
    },
    {
        "question": "Beck's triad, the classical physical diagnostic triad indicative of acute life-threatening Cardiac Tamponade, consists of:",
        "optionA": "Hypertension, bounding pulse, and loud friction rub",
        "optionB": "Hypotension, muffled (distant) heart sounds, and elevated jugular venous distention (JVD)",
        "optionC": "Bradycardia, bradypnea, and systolic hypertension",
        "optionD": "Flail chest, hemoptysis, and tracheal deviation",
        "correctAnswer": "B",
        "explanation": "Fluid accumulating rapidly in the pericardial space compresses the heart, impairing ventricular filling and producing Beck's triad."
    },
    {
        "question": "In a client presenting with acute infective endocarditis, painful, red, raised subcutaneous nodules on the pads of the fingers and toes are documented as:",
        "optionA": "Janeway lesions",
        "optionB": "Osler's nodes",
        "optionC": "Roth spots",
        "optionD": "Splinter hemorrhages",
        "correctAnswer": "B",
        "explanation": "Osler's nodes are tender immune-complex nodules on digital pads; Janeway lesions are painless erythematous macules on palms and soles."
    },
    {
        "question": "The classic clinical triad of symptoms indicating critical, hemodynamically significant Aortic Valve Stenosis is:",
        "optionA": "Fever, chills, and productive cough",
        "optionB": "Angina pectoris, syncope on exertion, and exertional dyspnea (heart failure)",
        "optionC": "Headache, epistaxis, and visual blur",
        "optionD": "Peripheral edema, ascites, and jaundice",
        "correctAnswer": "B",
        "explanation": "Fixed left ventricular outflow tract obstruction in aortic stenosis prevents cardiac output augmentation, causing angina, syncope, and heart failure."
    },
    {
        "question": "Acute pericarditis is classically characterized by chest pain that is sharp and pleuritic, and typically:",
        "optionA": "Worsens when sitting forward and improves when lying flat",
        "optionB": "Worsens on deep inspiration and when lying supine, and is relieved by sitting upright and leaning forward",
        "optionC": "Radiates down the right leg",
        "optionD": "Is completely unaffected by breathing or body position",
        "correctAnswer": "B",
        "explanation": "Leaning forward shifts the inflamed pericardium away from the anterior chest wall and diaphragm, alleviating pleuritic friction pain."
    },
    # Respiratory & Critical Care
    {
        "question": "Which oxygen delivery system is calibrated to provide the most precise, fixed, and consistent fraction of inspired oxygen (FiO2) for clients with chronic hypercapnic COPD?",
        "optionA": "Simple face mask",
        "optionB": "Nasal cannula at 6 L/min",
        "optionC": "Venturi mask",
        "optionD": "Non-rebreather reservoir mask",
        "correctAnswer": "C",
        "explanation": "Venturi masks utilize colored entrainment adapters to deliver an exact, predictable concentration of oxygen regardless of client breathing pattern."
    },
    {
        "question": "When interpreting a Mantoux tuberculin skin test (TST / PPD) at 48 to 72 hours, the nurse evaluates the test by measuring:",
        "optionA": "The diameter of erythema (redness) across the forearm in millimeters",
        "optionB": "The palpable, raised, hardened induration in millimeters across the transverse axis of the forearm",
        "optionC": "The depth of cutaneous puncture",
        "optionD": "The intensity of local itching",
        "correctAnswer": "B",
        "explanation": "Only palpable cellular induration (not erythema) reflects cell-mediated delayed-type hypersensitivity to tuberculin purified protein derivative."
    },
    {
        "question": "In performing open endotracheal or tracheostomy suctioning on an adult client, the maximum duration for applying continuous suction during catheter withdrawal is:",
        "optionA": "30 to 45 seconds",
        "optionB": "10 to 15 seconds",
        "optionC": "60 seconds",
        "optionD": "5 minutes",
        "correctAnswer": "B",
        "explanation": "Applying suction longer than 10-15 seconds causes significant hypoxia, vagal stimulation, and severe cardiac dysrhythmias."
    },
    {
        "question": "When preparing an adult client for an elective therapeutic thoracentesis to drain a large pleural effusion, how should the nurse position the client?",
        "optionA": "Supine with arms extended at sides",
        "optionB": "Sitting upright on the edge of the bed, leaning forward over an overbed bedside table supported by pillows",
        "optionC": "Prone with head turned to the side",
        "optionD": "Trendelenburg position with head down 30 degrees",
        "correctAnswer": "B",
        "explanation": "Sitting upright leaning forward widens the posterior intercostal spaces and allows pleural fluid to accumulate dependently at the lung base."
    },
    {
        "question": "To prevent ischemic pressure necrosis of the tracheal mucosa while preventing aspiration, the cuff pressure of an adult endotracheal tube should be maintained at:",
        "optionA": "5 to 10 mmHg",
        "optionB": "20 to 25 cm H2O (or 15 to 20 mmHg)",
        "optionC": "40 to 50 mmHg",
        "optionD": "60 cm H2O",
        "correctAnswer": "B",
        "explanation": "Cuff pressures exceeding 25-30 cm H2O exceed tracheal capillary perfusion pressure, risking mucosal ulceration and tracheal stenosis."
    },
    # Neurological & Sensory Nursing
    {
        "question": "A client with a complete T4 spinal cord injury suddenly develops acute Autonomic Dysreflexia (Hyperreflexia). The nurse's immediate first action is to:",
        "optionA": "Lay the client completely flat in the supine position",
        "optionB": "Elevate the head of the bed to a high upright sitting position (90 degrees) to lower intracranial blood pressure",
        "optionC": "Administer an immediate IV bolus of potassium",
        "optionD": "Apply warm blankets over the lower extremities",
        "correctAnswer": "B",
        "explanation": "Sitting the client upright utilizes gravity to induce orthostatic venous pooling, lowering cerebral arterial pressure while the trigger is found."
    },
    {
        "question": "The most common noxious trigger precipitating life-threatening Autonomic Dysreflexia in a spinal cord injured client is:",
        "optionA": "Hypoglycemia",
        "optionB": "Distended urinary bladder resulting from a blocked, kinked, or full Foley catheter",
        "optionC": "Mild environmental noise",
        "optionD": "Drinking warm fluids",
        "correctAnswer": "B",
        "explanation": "Bladder distention accounts for over 70% of dysreflexia episodes; visceral afferent stimuli trigger uninhibited sympathetic discharge below the lesion."
    },
    {
        "question": "Bell's palsy is an acute, unilateral peripheral neuropathy characterized by flaccid weakness of facial muscles resulting from dysfunction of which cranial nerve?",
        "optionA": "Trigeminal nerve (CN V)",
        "optionB": "Facial nerve (Cranial Nerve VII)",
        "optionC": "Glossopharyngeal nerve (CN IX)",
        "optionD": "Hypoglossal nerve (CN XII)",
        "correctAnswer": "B",
        "explanation": "Cranial nerve VII innervates muscles of facial expression; lower motor neuron palsy causes inability to smile, close the eye, or wrinkle the forehead."
    },
    {
        "question": "Trigeminal neuralgia (tic douloureux) is characterized by paroxysmal, severe, stabbing, shock-like unilateral facial pain along the sensory distribution of Cranial Nerve V. The first-line pharmacological treatment is:",
        "optionA": "Carbamazepine (Tegretol)",
        "optionB": "Intravenous heparin",
        "optionC": "High-dose aspirin",
        "optionD": "Morphine sulfate oral elixir",
        "correctAnswer": "A",
        "explanation": "Carbamazepine is an anticonvulsant that inhibits voltage-gated sodium channels, reducing paroxysmal ectopic neuronal firing in the trigeminal nerve."
    },
    {
        "question": "A client with Multiple Sclerosis describes a sudden, electric shock-like sensation running down the spine and into the limbs triggered by neck flexion. This clinical sign is:",
        "optionA": "Kernig's sign",
        "optionB": "Lhermitte's sign",
        "optionC": "Brudzinski's sign",
        "optionD": "Romberg's sign",
        "correctAnswer": "B",
        "explanation": "Lhermitte's phenomenon indicates demyelination plaques in the posterior cervical columns of the spinal cord."
    },
    {
        "question": "The classical motor tetrad of cardinal signs defining Parkinson's disease includes resting 'pill-rolling' tremor, muscle rigidity (cogwheel rigidity), postural instability, and:",
        "optionA": "Chorea",
        "optionB": "Bradykinesia (generalized slowness of voluntary movement)",
        "optionC": "Ataxia",
        "optionD": "Hemiballismus",
        "correctAnswer": "B",
        "explanation": "Dopaminergic neuronal loss in the substantia nigra pars compacta leads to bradykinesia, resting tremor, rigidity, and gait impairment."
    },
    {
        "question": "A client presents with sudden, painless flashes of light (photopsia), multiple dark floating specks, and a progressive shadow like a 'curtain falling over the eye.' These symptoms indicate:",
        "optionA": "Acute angle-closure glaucoma",
        "optionB": "Rhegmatogenous Retinal Detachment",
        "optionC": "Central retinal artery occlusion",
        "optionD": "Senile nuclear cataract",
        "correctAnswer": "B",
        "explanation": "A retinal tear allows vitreous fluid into the subretinal space, peeling the sensory retina away from underlying pigment epithelium (curtain effect)."
    },
    # Gastrointestinal & Hepatic
    {
        "question": "In the laboratory diagnosis of acute pancreatitis, which serum pancreatic enzyme is more specific and remains elevated for a longer duration (7 to 14 days)?",
        "optionA": "Serum amylase",
        "optionB": "Serum lipase",
        "optionC": "Alkaline phosphatase",
        "optionD": "Creatine kinase MB",
        "correctAnswer": "B",
        "explanation": "Serum lipase has higher clinical sensitivity and specificity for pancreatitis than amylase, remaining elevated for up to 2 weeks."
    },
    {
        "question": "In a client with end-stage cirrhosis experiencing hepatic encephalopathy, the characteristic flapping tremor of the dorsiflexed wrists is documented as:",
        "optionA": "Ataxia",
        "optionB": "Asterixis (liver flap)",
        "optionC": "Athetosis",
        "optionD": "Intention tremor",
        "correctAnswer": "B",
        "explanation": "Asterixis is a non-rhythmic flapping movement of outstretched, dorsiflexed hands caused by cerebral metabolic intoxication from elevated serum ammonia."
    },
    {
        "question": "The primary pharmacological rationale for administering oral or rectal Lactulose to a client with hepatic encephalopathy is to:",
        "optionA": "Directly stimulate hepatic protein synthesis",
        "optionB": "Acidify colonic contents, converting absorbable ammonia (NH3) into non-absorbable ammonium ions (NH4+) that are eliminated in stool",
        "optionC": "Inhibit gastric acid secretion",
        "optionD": "Coagulate esophageal varices",
        "correctAnswer": "B",
        "explanation": "Colonic bacteria ferment lactulose into lactic acid; the low pH protonates NH3 to NH4+, trapping it for rapid fecal expulsion."
    },
    {
        "question": "To prevent postprandial Dumping Syndrome following a partial gastrectomy with gastrojejunostomy (Billroth II), the nurse instructs the client to:",
        "optionA": "Eat large meals rich in concentrated refined carbohydrates and sugars",
        "optionB": "Eat small, frequent meals high in protein and complex fats, avoid fluids with meals, and lie down for 20-30 minutes after eating",
        "optionC": "Drink three glasses of water during every meal",
        "optionD": "Engage in vigorous jogging immediately after dining",
        "correctAnswer": "B",
        "explanation": "Small, dry meals low in simple sugars prevent rapid osmotic fluid shifts from plasma into the jejunum, and recumbency delays gastric emptying."
    },
    {
        "question": "In teaching a client diagnosed with Celiac Disease (gluten-sensitive enteropathy), the nurse emphasizes strictly avoiding all foods containing:",
        "optionA": "Corn, rice, and soy",
        "optionB": "Wheat, rye, barley, and triticale (gluten proteins)",
        "optionC": "Potatoes and cassava",
        "optionD": "Fresh lean poultry and fish",
        "correctAnswer": "B",
        "explanation": "Gliadin peptide in wheat, rye, and barley triggers autoimmune small intestinal mucosal villous atrophy, malabsorption, and steatorrhea."
    },
    # Renal, Musculoskeletal & Dermatology
    {
        "question": "Post-streptococcal acute glomerulonephritis in a pediatric client is classically characterized by the clinical triad of:",
        "optionA": "Massive hypercalcemia, jaundice, and polyuria",
        "optionB": "Hematuria (cola-colored or smoky urine), periorbital edema, and hypertension following a streptococcal pharyngitis or skin infection",
        "optionC": "High fever, flank mass, and severe weight loss",
        "optionD": "Continuous urinary incontinence with normal urinalysis",
        "correctAnswer": "B",
        "explanation": "Immune complex deposition in glomerular capillaries causes inflammatory hematuria (smoky urine), salt retention, and periorbital edema."
    },
    {
        "question": "When assessing an extremity in a cast for acute Compartment Syndrome, the earliest, most reliable subjective clinical symptom is:",
        "optionA": "Absence of a palpable distal pulse",
        "optionB": "Severe, deep, unrelenting pain that is disproportionate to the injury and is exacerbated by passive stretching of the involved muscles",
        "optionC": "Complete paralysis of all digits",
        "optionD": "Cold, pale skin",
        "correctAnswer": "B",
        "explanation": "Pain out of proportion to exam and pain on passive muscle stretch are the earliest indicators of rising fascial compartment pressure."
    },
    {
        "question": "The definitive, emergency surgical intervention indicated for acute compartment syndrome to relieve intra-compartmental pressure and prevent ischemic necrosis is a:",
        "optionA": "Closed joint reduction",
        "optionB": "Decompressive Fasciotomy",
        "optionC": "Immediate amputation",
        "optionD": "Cast tightening procedure",
        "correctAnswer": "B",
        "explanation": "Emergency surgical fasciotomy involves incising the non-yielding deep fascia to restore microvascular perfusion and prevent muscle infarction."
    },
    {
        "question": "A butterfly-shaped (malar) erythematous rash across the bridge of the nose and cheeks that spares the nasolabial folds is pathognomonic of:",
        "optionA": "Scleroderma",
        "optionB": "Systemic Lupus Erythematosus (SLE)",
        "optionC": "Atopic dermatitis",
        "optionD": "Rosacea",
        "correctAnswer": "B",
        "explanation": "The malar rash is a classic diagnostic criterion of SLE, a multisystem autoimmune connective tissue disease associated with ANA and anti-dsDNA."
    },
    {
        "question": "Psoriasis vulgaris is clinically identified on skin examination by the presence of:",
        "optionA": "Honey-colored crusted erosions on the face",
        "optionB": "Well-demarcated erythematous papules and plaques covered with silvery-white micaceous scales, commonly on extensor surfaces (elbows, knees)",
        "optionC": "Fluid-filled flaccid bullae that rupture easily",
        "optionD": "Subcutaneous burrow tunnels between the fingers",
        "correctAnswer": "B",
        "explanation": "Hyperproliferation of epidermal keratinocytes produces characteristic erythematous plaques topped with silvery scales that bleed when scraped (Auspitz sign)."
    },
    {
        "question": "Impetigo contagiosa in pediatric clients is an acute, superficial bacterial skin infection typically presenting as:",
        "optionA": "Deep painful subcutaneous abscesses",
        "optionB": "Vesicles that rupture to form characteristic golden, honey-colored crusts around the mouth and nose",
        "optionC": "Hyperpigmented macules covering the torso",
        "optionD": "Extensive keloid scars",
        "correctAnswer": "B",
        "explanation": "Staph aureus or Group A Streptococcus infects superficial epidermal layers, producing vesicular lesions that dry into classic honey-colored crusts."
    }
]

print(f"More questions loaded: {len(MORE_QUESTIONS)}")
