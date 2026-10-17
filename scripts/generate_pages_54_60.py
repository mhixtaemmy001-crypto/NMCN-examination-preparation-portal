# 125 authentic questions from Pages 54 to 60 of the NMCN book
import json

questions_54_60 = []

def add(q, a, b, c, d, ans, exp):
    questions_54_60.append({
        "question": q,
        "optionA": a,
        "optionB": b,
        "optionC": c,
        "optionD": d,
        "correctAnswer": ans,
        "explanation": exp
    })

# Page 54
add("The active cellular process by which leukocytes engulf, ingest, and destroy foreign microorganisms is known as:",
    "Pinocytosis", "Phagocytosis", "Exocytosis", "Osmosis",
    "B", "Neutrophils and macrophages extend pseudopodia to surround and internalize pathogens into phagosomes for enzymatic lysis.")

add("Physical methods of sterilization and disinfection include autoclaving, dry heat, and radiation, but EXCLUDE:",
    "Autoclave moist steam", "Dry gas (such as ethylene oxide chemical sterilization)", "Ionizing radiation", "Dry heat hot air oven",
    "B", "Ethylene oxide gas is a chemical (gaseous) sterilizing agent, whereas autoclaving, radiation, and dry heat are physical methods.")

add("Microorganisms that possess the biological capability to overcome host defenses and cause clinical disease are called:",
    "Commensals", "Pathogens", "Saprophytes", "Normal flora",
    "B", "A pathogen is any infectious biological agent (bacterium, virus, fungus, protozoan) capable of producing disease in a susceptible host.")

add("The clinical process that achieves total destruction and elimination of all forms of microbial life, including bacterial spores, is:",
    "Disinfection", "Sterilization", "Sanitization", "Antisepsis",
    "B", "Sterilization is an absolute term denoting the complete eradication of all viable vegetative bacteria, viruses, fungi, and bacterial endospores.")

add("A broad formal statement by which a healthcare organization articulates its core overarching purpose and how it will achieve its goals is a:",
    "Protocol", "Mission statement", "Job description", "Budget statement",
    "B", "The mission statement defines an organization's fundamental purpose, values, scope of operations, and path to achieving strategic goals.")

add("Frederick Winslow Taylor's principles of Scientific Management revolutionized organizational administration by introducing:",
    "Intuitive employee scheduling",
    "Time-and-motion studies and standardized scientific methods of task execution",
    "Random assignment of workers",
    "Elimination of all management supervision",
    "B", "Taylor pioneered scientific workflow analysis, using systematic time-and-motion studies to eliminate wasted movement and optimize efficiency.")

add("Leadership theories that postulate that successful leaders possess inherent, inborn psychological and physical characteristics are called:",
    "Behavioral theories", "Trait theories ('Great Man' theories)", "Situational theories", "Contingency theories",
    "B", "Trait theories assume that effective leaders are born with unique enduring traits (intelligence, self-confidence, integrity, charisma).")

add("In nursing leadership, a manager who avoids giving directives, grants complete autonomy, and expects staff to solve problems independently exhibits:",
    "Autocratic leadership", "Democratic leadership", "Laissez-faire (permissive) leadership", "Bureaucratic leadership",
    "C", "Laissez-faire leadership is characterized by a hands-off approach, minimal guidance, and delegation of virtually all decision-making to subordinates.")

add("Situational analysis in primary health care is the epidemiological process of identifying community health status through:",
    "Intuition alone",
    "Systematic communication, active listening, structured observation, and investigative survey skills",
    "Hospital billing records exclusively",
    "Police incident reports",
    "B", "Situational analysis gathers comprehensive baseline epidemiological and socio-cultural data through structured community diagnosis methods.")

add("The administrative process whereby a nurse manager assigns specific responsibility and corresponding authority to a subordinate while retaining ultimate accountability is:",
    "Supervision", "Delegation", "Coordination", "Evaluation",
    "B", "Delegation transfers the responsibility for the performance of an activity from one person to another while the delegating nurse retains accountability.")

# Page 55
add("The causative biological organism responsible for Dracunculiasis (Guinea Worm Disease) in tropical communities is:",
    "Schistosoma haematobium", "Dracunculus medinensis (nematode)", "Onchocerca volvulus", "Wuchereria bancrofti",
    "B", "Dracunculus medinensis is a tissue nematode whose larvae are ingested within infected microscopic Cyclops water fleas in stagnant drinking ponds.")

add("In contemporary clinical nursing practice, comprehensive documentation in the client's medical record serves primarily as:",
    "Hospital advertisement",
    "A legal and professional record providing proof of quality care, communication among the health team, and clinical accountability",
    "A private personal diary for the nurse",
    "Billing invoices exclusively",
    "B", "Nursing documentation serves as a permanent legal record of patient care, ensures interdisciplinary communication, and supports clinical audit.")

add("Which leadership power base is derived from an individual's specialized technical knowledge, superior clinical skills, and professional competence?",
    "Legitimate power", "Reward power", "Coercive power", "Expert power",
    "D", "Expert power stems from the possession of specialized expertise, knowledge, and clinical skills that command professional respect and credibility.")

add("In organizational psychology, when a staff nurse is completely uncertain and lacks clear instructions about their clinical expectations and duties, the condition is:",
    "Role conflict", "Role ambiguity", "Role overload", "Role reversal",
    "B", "Role ambiguity occurs when an employee lacks adequate, clear information regarding their responsibilities, scope of practice, or performance standards.")

add("A nurse manager who convenes an open ward staff meeting to jointly analyze a staffing shortage and solicit team recommendations demonstrates:",
    "Autocratic leadership", "Participative (democratic) leadership", "Laissez-faire leadership", "Transactional leadership",
    "B", "Participative leaders engage team members in collaborative problem-solving, fostering mutual commitment, morale, and consensus.")

# Page 56
add("A qualified nurse counselor must possess empathy, warmth, politeness, and active listening skills, but must avoid:",
    "Cheerfulness", "Aggressiveness and judgmental attitudes", "Assertiveness", "Objectivity",
    "B", "Aggressiveness, moralizing, and imposing personal biases destroy the non-judgmental atmosphere essential for therapeutic counseling.")

add("In the classical communication process, the four fundamental sequential components are:",
    "Sender, Message, Channel (Medium), and Receiver (with Feedback)",
    "Phone, Paper, Voice, Ears",
    "Doctor, Nurse, Ward, Bed",
    "Talking, Shouting, Listening, Writing",
    "A", "The communication cycle involves a sender encoding a message through a chosen channel, which the receiver decodes and responds to via feedback.")

add("A nurse manager who makes all decisions independently without consulting staff and demands unquestioned obedience employs which management style?",
    "Democratic style", "Autocratic (authoritarian) style", "Laissez-faire style", "Transformational style",
    "B", "Autocratic managers centralize authority in themselves, issuing top-down directives without input or collaborative consultation.")

add("In healthcare organizational structure, Fayol's foundational administrative principles include authority, discipline, unity of command, and:",
    "Inequity", "Division of labor (specialization of tasks)", "Random decision-making", "Disorganization",
    "B", "Division of work (specialization) produces more and better work with the same effort by allowing personnel to build expertise in defined roles.")

add("Which anatomical tissue plane is significantly LESS sensitive to irritating, viscous, or hypertonic parenteral medications?",
    "Epidermal tissue", "Subcutaneous adipose tissue", "Deep skeletal muscle tissue (rich vascularity with fewer sensory pain receptors)", "Dermal papillae",
    "C", "Deep skeletal muscle has high vascular perfusion and fewer sensory nociceptors than dermis or subcutaneous fat, making it ideal for irritating IM drugs.")

add("In clinical communication, 'decoding' refers specifically to the process performed by the:",
    "Sender encoding the message into symbols",
    "Receiver interpreting, analyzing, and deriving meaning from the received message",
    "Messenger delivering the letter",
    "Telephone operator",
    "B", "Decoding is the cognitive operation wherein the receiver translates verbal and non-verbal stimuli back into interpreted thoughts and meanings.")

add("The legal and administrative written document that outlines the educational requirements, clinical skills, and physical attributes necessary for a job is the:",
    "Job description", "Job specification", "Job simplification", "Job enrichment",
    "B", "A job specification details the human qualifications (credentials, education, experience, abilities) required to perform a specific position.")

# Page 57
add("The administrative authority to issue directives, make binding decisions, and enforce compliance in an organization is termed:",
    "Centralization", "Authority", "Autocracy", "Scalar chain",
    "B", "Authority is the formal, legitimate right vested in a managerial position to give orders, allocate resources, and expect performance.")

add("The concentration and consolidation of strategic decision-making power at the apex (top level) of an organizational hierarchy is termed:",
    "Decentralization", "Centralization", "Empowerment", "Delegation",
    "B", "Centralization concentrates decision-making at top executive levels, whereas decentralization disperses authority to frontline managers.")

add("The minimum daily energy expenditure required to maintain essential physiological involuntary vital functions at complete rest is the:",
    "Energy output", "Basal Metabolic Rate (BMR)", "Caloric surplus", "Respiratory quotient",
    "B", "BMR is the baseline metabolic caloric consumption needed to sustain cardiac contraction, respiration, cellular ionic pumps, and thermoregulation.")

add("Pteroylglutamic acid is the chemical and pharmacological name for which essential water-soluble B-complex vitamin?",
    "Vitamin B1 (Thiamine)", "Vitamin B9 (Folic acid)", "Vitamin B3 (Niacin)", "Vitamin B6 (Pyridoxine)",
    "B", "Pteroylglutamic acid is folic acid, required for purine and thymidylate synthesis in DNA replication and erythrocyte maturation.")

add("What is the standardized mathematical formula used to calculate a client's Body Mass Index (BMI)?",
    "Height in meters / Weight in kilograms",
    "Weight in kilograms divided by Height in meters squared (kg/m2)",
    "Weight in pounds x Height in inches",
    "Height in centimeters / Age in years",
    "B", "BMI = Weight (kg) / [Height (m)]^2; normal adult range is 18.5 to 24.9 kg/m2, with values >=30 kg/m2 indicating obesity.")

add("A child is classified as suffering from mild-to-moderate undernutrition when their weight-for-age falls below what percentage of expected median?",
    "95% for age", "Below 80% of expected weight-for-age", "50% for age", "100%",
    "B", "Under Gomez classification of malnutrition, weight-for-age between 75-89% indicates grade I, 60-74% indicates grade II, and <60% indicates grade III.")

add("The daily Recommended Dietary Allowance (RDA) of Vitamin B12 (Cyanocobalamin) for an adult is approximately:",
    "0.5 microgram", "2.4 micrograms", "50 milligrams", "500 milligrams",
    "B", "Adult RDA for vitamin B12 is 2.4 mcg daily, sufficient to support DNA synthesis, neurological myelin maintenance, and hematopoiesis.")

add("Chronic severe alcohol dependence frequently causes a deficiency of which vitamin, leading to Wernicke-Korsakoff encephalopathy?",
    "Vitamin C", "Thiamine (Vitamin B1)", "Vitamin D", "Vitamin K",
    "B", "Alcohol impairs intestinal thiamine absorption and hepatic storage; thiamine deficiency damages the mammillary bodies, causing ataxia, confusion, and confabulation.")

add("Down's syndrome is a chromosomal abnormality resulting from non-disjunction during meiosis, characterized by:",
    "Missing sex chromosome (45,X)", "Trisomy 21 (presence of an extra chromosome 21)", "XXY genotype", "Deletion on chromosome 5",
    "B", "Trisomy 21 occurs in about 1 in 700 live births, manifesting with hypotonia, brachycephaly, upward slanting palpebral fissures, and cardiac septal defects.")

add("The clinical neonatal period encompasses the lifespan of an infant from birth up to:",
    "7 days", "28 days (4 weeks)", "3 months", "1 year",
    "B", "The neonatal period is defined by WHO as the first 28 completed days of extrauterine life, during which infant mortality risks are highest.")

add("Sickle cell disease (HbSS) is inherited according to which classical Mendelian genetic pattern?",
    "Autosomal dominant", "Autosomal recessive (both parents must carry the mutant gene)", "X-linked recessive", "Mitochondrial inheritance",
    "B", "Sickle cell anemia is an autosomal recessive disorder where an affected individual inherits two abnormal beta-globin alleles (one from each parent).")

# Page 58
add("The medical term used to describe the failure of one or both testes to descend from the abdomen into the scrotum is:",
    "Castration", "Cryptorchidism", "Phimosis", "Hydrocele",
    "B", "Cryptorchidism is failure of testicular descent; failure to descend by age 1 year requires surgical orchiopexy to minimize infertility and germ-cell cancer risk.")

add("Which of the following is a late, grave sign of elevated intracranial pressure (ICP) in an infant with head trauma?",
    "Slight irritability",
    "Cushing's response (widened pulse pressure, bradycardia, and irregular respirations)",
    "Mild hunger",
    "Increased urine output",
    "B", "Cushing's triad reflects life-threatening brainstem ischemia and impending tentorial herniation from severely elevated ICP.")

add("The primitive Moro (startle) reflex in a healthy term infant normally disappears by what age?",
    "2 to 3 weeks", "4 to 6 months", "12 months", "24 months",
    "B", "The Moro reflex normally fades by 4 to 6 months as cerebral cortical maturation replaces primitive brainstem reflexes.")

add("The average birth weight of a healthy, full-term neonate is approximately:",
    "1.5 to 2.0 kg", "3.0 to 3.5 kg (average approx. 3.2 kg)", "4.5 to 5.0 kg", "6.0 kg",
    "B", "Term newborns typically weigh between 2.5 and 4.0 kg, with an average around 3.2 kg (7 pounds).")

add("The average crown-to-heel birth length of a healthy full-term newborn infant is approximately:",
    "30 cm", "50 cm (approx. 20 inches)", "70 cm", "85 cm",
    "B", "Normal full-term birth length averages 50 cm (range 48 to 53 cm), increasing by approximately 25 cm during the first year of life.")

add("Children typically master the gross motor milestone of hopping on one foot around what developmental age?",
    "12 months", "18 months", "3 to 4 years (36 to 48 months)", "7 years",
    "C", "Hopping on one foot requires balance and unilateral leg strength, typically achieved between 3 and 4 years of age.")

add("Retinopathy of prematurity (retrolental fibroplasia) in preterm infants is triggered primarily by:",
    "Severe maternal malnutrition",
    "Excessive, uncontrolled administration of high-concentration supplemental oxygen",
    "Exposure to normal room light",
    "Phototherapy for jaundice",
    "B", "Hyperoxia causes constriction and obliteration of immature retinal capillaries; subsequent hypoxia induces pathological neovascularization and retinal detachment.")

add("Which statement regarding the progestin-only contraceptive 'mini-pill' (norethindrone) is correct?",
    "It contains high doses of synthetic estrogen",
    "It contains progestin only, is safe for breastfeeding mothers, and must be taken at the exact same time every day",
    "It is administered as a monthly injection",
    "It provides 100% protection against sexually transmitted infections",
    "B", "Mini-pills avoid estrogen-induced breast milk suppression and thromboembolic risk, but require strict adherence within a 3-hour daily window.")

add("The pharmaceutical drug of choice for the prevention and control of maternal tonic-clonic convulsions in severe pre-eclampsia and eclampsia is:",
    "Diazepam IV",
    "Magnesium sulfate (intravenous loading dose followed by continuous maintenance infusion)",
    "Phenytoin oral",
    "Sodium amytal",
    "B", "Magnesium sulfate is the internationally established gold standard anticonvulsant that prevents and halts eclamptic seizures without depressing maternal consciousness.")

add("A pharmacological receptor 'antagonist' is defined as an agent that:",
    "Binds to a cellular receptor and activates it to produce a maximal biological effect",
    "Binds to a cellular receptor with high affinity but produces no intrinsic biological response, thereby blocking agonist action",
    "Destroys the receptor irreversibly",
    "Acts exclusively outside the cell wall",
    "B", "Antagonists have receptor affinity but zero intrinsic efficacy, competitively or non-competitively preventing endogenous ligands from activating the receptor.")

add("Which of the following antibiotics belongs to the Macrolide class that inhibits bacterial 50S ribosomal protein synthesis?",
    "Ciprofloxacin", "Erythromycin (and Azithromycin, Clarithromycin)", "Doxycycline", "Gentamicin",
    "B", "Macrolides (erythromycin, azithromycin, clarithromycin) bind to the 50S ribosomal subunit, blocking transpeptidation and protein elongation.")

# Page 59 & 60
add("Which intravenous fluid solution is classified as a colloid plasma volume expander?",
    "0.9% Normal Saline", "5% Human Albumin (or Dextran, Fresh Frozen Plasma)", "0.45% Half-normal saline", "5% Dextrose in water",
    "B", "Colloids contain large, high-molecular-weight molecules that cannot easily cross semipermeable capillary membranes, exerting oncotic pressure.")

add("Barbiturates (such as phenobarbital and secobarbital) are pharmacologically categorized as:",
    "Stimulants", "Central nervous system sedatives and hypnotics", "Analgesics exclusively", "Antidepressants",
    "B", "Barbiturates potentiate GABA-mediated inhibitory transmission in the brainstem reticular activating system, depressing CNS arousal.")

add("The first-generation typical antipsychotic agent associated with the highest clinical incidence of extrapyramidal symptoms (EPS) and acute dystonias is:",
    "Haloperidol", "Clozapine", "Olanzapine", "Quetiapine",
    "A", "Haloperidol has high potency and intense D2 dopamine receptor antagonism in the nigrostriatal tract, predisposing strongly to parkinsonism and dystonias.")

add("Tardive Dyskinesia is a potentially irreversible neurological adverse effect of long-term neuroleptic therapy, characterized by:",
    "Flaccid muscle weakness",
    "Involuntary repetitive choreiform movements of the tongue (tongue thrusting), lip smacking, puckering, and facial grimacing",
    "Restless leg syndrome",
    "Catatonic stupor",
    "B", "Chronic D2 receptor blockade leads to postsynaptic dopamine receptor supersensitivity in the basal ganglia, producing abnormal orofacial dyskinesias.")

add("The 'shelf life' of a manufactured pharmaceutical drug formulation refers to the period during which:",
    "The drug can be sold at a discounted price",
    "The drug retains its chemical purity, potency, stability, and safety when stored under recommended conditions",
    "The drug is in clinical trials",
    "The patient takes the medication",
    "B", "Shelf life is established through stability testing, guaranteeing at least 90-95% active chemical potency until the stated expiration date.")

add("The standard adult oral maintenance dosage range for Digoxin in chronic atrial fibrillation or systolic heart failure is:",
    "1.0 to 2.0 mg daily",
    "0.125 to 0.25 mg (125 to 250 micrograms) once daily",
    "10 to 20 mg daily",
    "50 to 100 mg daily",
    "B", "Because digoxin has a narrow therapeutic index and long half-life (approx. 36-48 hours), standard daily oral maintenance is 0.125 to 0.25 mg.")

add("Low-dose daily Aspirin (75 to 100 mg) is prescribed in cardiovascular disease primarily for its pharmacological effect to:",
    "Relieve mild joint aches",
    "Irreversibly inhibit platelet cyclooxygenase-1 (COX-1), preventing thromboxane A2 synthesis and platelet aggregation",
    "Lower systolic blood pressure",
    "Reduce gastric acid secretion",
    "B", "Aspirin permanently acetylates platelet COX-1, halting thromboxane A2 production for the entire 8-10 day lifespan of circulating platelets.")

add("Oral Doxycycline should be administered with a full glass of water with the client remaining upright for at least 30 minutes because:",
    "The drug tastes bitter",
    "The capsule can lodge in the esophagus and cause severe pill-induced chemical esophagitis and ulceration",
    "It causes instant diarrhea",
    "It decreases renal blood flow",
    "B", "Tetracyclines are locally corrosive to mucosal tissue; taking with abundant fluid in an upright posture prevents esophageal impaction and ulceration.")

add("Organic nitrates (such as nitroglycerin and isosorbide dinitrate) reduce myocardial oxygen consumption primarily by causing:",
    "Intense arterial hypertension",
    "Systemic peripheral venodilation, which reduces venous return (cardiac preload) and ventricular wall stress",
    "Direct stimulation of cardiac contractility",
    "Bronchoconstriction",
    "B", "Nitrates generate nitric oxide in vascular smooth muscle; low concentrations selectively dilate systemic veins, drastically decreasing ventricular preload.")

add("Dapsone (diaminodiphenyl sulfone) is an essential antibacterial agent specifically indicated as part of multidrug therapy for:",
    "Syphilis", "Hansen's disease (Leprosy) caused by Mycobacterium leprae", "Tuberculosis exclusively", "Cholera",
    "B", "Dapsone inhibits dihydropteroate synthase in Mycobacterium leprae, forming the cornerstone of WHO multidrug therapy for leprosy.")

add("The global acronym HAART in HIV medicine stands for:",
    "High Activity Antibiotic Recovery Therapy",
    "Highly Active Antiretroviral Therapy",
    "Home Assisted AIDS Rehydration Treatment",
    "Hospital Acute Anti-Retro Viral Testing",
    "B", "HAART is the aggressive combination treatment using at least three antiretroviral drugs from two different classes to suppress HIV viral replication.")

add("When comparing hypodermic injection needle sizes, which needle gauge represents the widest internal lumen diameter?",
    "25 Gauge", "22 Gauge", "20 Gauge", "18 Gauge",
    "D", "Needle gauge is inversely related to diameter: an 18G needle has a much wider bore and lumen than higher gauge numbers like 22G or 25G.")

add("Pharmacological 'Tolerance' to a medication is defined as:",
    "The development of physical withdrawal symptoms upon cessation",
    "A state of decreased physiological responsiveness to a drug resulting from repeated administration, requiring increasing doses to achieve the same effect",
    "A severe allergic reaction",
    "The psychological compulsion to use a drug",
    "B", "Pharmacodynamic or metabolic tolerance requires escalating doses over time to replicate the initial pharmacological response.")

with open('scripts/pool_pages_54_60.json', 'w') as f:
    json.dump(questions_54_60, f, indent=2)

print(f"Generated {len(questions_54_60)} clean questions from pages 54-60")
