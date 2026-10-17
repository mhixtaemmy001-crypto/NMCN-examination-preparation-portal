# 35 finishing questions from pages 65 to 68 of the NMCN book
import json

questions_finish = []

def add(q, a, b, c, d, ans, exp):
    questions_finish.append({
        "question": q,
        "optionA": a,
        "optionB": b,
        "optionC": c,
        "optionD": d,
        "correctAnswer": ans,
        "explanation": exp
    })

add("Antibodies acquired by a newborn infant from the mother via transplacental transfer and colostrum are classified as:",
    "Active artificial immunity", "Passive natural immunity", "Active natural immunity", "Passive artificial immunity",
    "B", "Passive natural immunity involves preformed maternal antibodies (IgG and IgA) passed to the offspring without the infant's own immune system generating them.")

add("In normal cardiac blood flow, which sequential order of heart valves does a drop of blood pass through starting from the right atrium?",
    "Aortic, mitral, pulmonary, tricuspid",
    "Tricuspid valve, Pulmonary valve, Mitral (bicuspid) valve, Aortic valve",
    "Mitral, pulmonary, tricuspid, aortic",
    "Pulmonary, tricuspid, aortic, mitral",
    "B", "Blood flows through the tricuspid valve into the right ventricle, through the pulmonary valve to lungs, returns through mitral valve to left ventricle, and leaves through aortic valve.")

add("Under the Nigerian National Health Policy, which tier of government is primarily responsible for the overall formulation of national health policies and standards?",
    "Ward Development Committee", "Federal Government (Federal Ministry of Health)", "Local Government Health Authority", "Community Town Union",
    "B", "The Federal Ministry of Health formulates national health policies, oversees tertiary institutions, and coordinates international health partnerships.")

add("Which low-cost, effective sewage disposal technology is specifically recommended by the WHO for rural communities lacking piped sewer networks?",
    "Bucket latrine system", "Ventilated Improved Pit (VIP) latrine", "Open defecation fields", "Direct river dumping",
    "B", "VIP latrines eliminate fly breeding and odor through screened vertical vent pipes without requiring piped water supply.")

add("Which pharmacological class of medication is the first-line drug therapy prescribed for urge urinary incontinence and overactive bladder?",
    "Anticholinergic / Antimuscarinic agents (such as Oxybutynin or Tolterodine)",
    "Alpha-1 adrenergic agonists",
    "Loop diuretics",
    "Cholinesterase inhibitors",
    "A", "Anticholinergic drugs competitively block muscarinic M3 receptors in the bladder, suppressing uninhibited detrusor muscle contractions.")

add("The primary causative bacterial agent of human Tuberculosis is:",
    "Mycobacterium leprae", "Mycobacterium tuberculosis (acid-fast bacillus)", "Corynebacterium diphtheriae", "Neisseria meningitidis",
    "B", "Mycobacterium tuberculosis has a lipid-rich mycolic acid cell wall that resists destaining by acid-alcohol, appearing as acid-fast rods on Ziehl-Neelsen staining.")

add("Which statement regarding Chickenpox (Varicella) skin lesions is clinically true?",
    "The dried crusts (scabs) remain highly infectious for 3 months",
    "Once all lesions have completely formed dry crusts or scabs, the client is no longer contagious",
    "It is transmitted exclusively by vector ticks",
    "Vesicles never appear on the trunk",
    "B", "Varicella transmission occurs through respiratory droplets and fluid from active uncrusted vesicles; fully crusted scabs contain no viable virus.")

add("The solid waste management strategy where discarded materials (such as glass, aluminum cans, and plastics) are reprocessed into new products is:",
    "Controlled tipping", "Material recycling", "Incineration", "Open dumping",
    "B", "Recycling reprocesses waste materials into raw secondary feedstocks, conserving energy and reducing municipal landfill volume.")

add("In sociology and anthropology, the shared system of beliefs, values, customs, traditions, and behaviors learned by members of a society is defined as:",
    "Socialization", "Culture", "Religion", "Stratification",
    "B", "Culture represents the integrated pattern of human knowledge, beliefs, and learned social behaviors transmitted across generations.")

add("Syphilis is a systemic sexually transmitted infection caused by Treponema pallidum that progresses through primary, secondary, and:",
    "Eruptive and convalescent stages",
    "Latent and Tertiary (neurosyphilis / cardiovascular gummatous) stages",
    "Prodromal and resolution stages",
    "Exclusively acute stages",
    "B", "Untreated syphilis progresses from primary chancre to secondary bacteremic rash, followed by an asymptomatic latent period and destructive tertiary neuro/cardiovascular disease.")

add("Under the Nigerian National Expanded Program on Immunization (EPI), which three vaccines should a newborn receive at birth?",
    "Pentavalent, Measles, and Yellow fever",
    "BCG, Oral Polio Vaccine zero dose (OPV-0), and Hepatitis B birth dose (HBV-0)",
    "DPT, Tetanus toxoid, and IPV",
    "Pneumococcal and Rotavirus only",
    "B", "Nigeria's national immunization schedule mandates BCG, OPV-0, and Hepatitis B birth dose within the first 24 to 48 hours of life.")

add("Community diagnosis in public health nursing practice is the systematic process of identifying:",
    "Only private hospital profits",
    "The felt needs, health indicators, epidemiological problems, and resources of a defined community population",
    "Individual psychiatric diagnoses",
    "Doctor prescription preferences",
    "B", "Community diagnosis assesses the community's health status, disease burdens, environmental determinants, and available community health resources.")

add("Pertussis (Whooping cough) is an acute respiratory infection caused by the bacterium:",
    "Parvovirus B19", "Bordetella pertussis (Gram-negative coccobacillus)", "Varicella zoster", "Herpes simplex",
    "B", "Bordetella pertussis colonizes respiratory cilia, producing pertussis toxin that induces severe paroxysmal coughing spasms with high-pitched whooping inspiration.")

add("The characteristic difficulty in opening the mouth due to sustained spasm of the masseter muscles in tetanus is medically termed:",
    "Trismus (lockjaw)", "Opisthotonos", "Dysphagia", "Blepharospasm",
    "A", "Trismus is painful sustained tonic contraction of the masticatory muscles, typically the earliest clinical manifestation of generalized tetanus.")

add("The primary causative protozoan parasite responsible for Amoebic Dysentery (amoebiasis) is:",
    "Giardia lamblia", "Entamoeba histolytica", "Trichomonas vaginalis", "Balantidium coli",
    "B", "Entamoeba histolytica invades the colonic mucosa, creating characteristic flask-shaped ulcers and producing bloody mucoid diarrheal stools.")

add("The full meaning of the vaccine acronym BCG is:",
    "Bacillus Calmette-Guérin", "Bacterial Coli Globulin", "Bacillus Central Genus", "Blood Cell Growth",
    "A", "BCG is an attenuated live strain of Mycobacterium bovis developed by Albert Calmette and Camille Guérin in 1921 to protect against severe tuberculosis.")

add("In clinical research, a sampling technique where the population is divided into homogenous subgroups (strata) and random samples are drawn from each stratum is:",
    "Convenience sampling", "Stratified random sampling", "Snowball sampling", "Quota sampling",
    "B", "Stratified random sampling ensures proportional representation of distinct subpopulations (e.g., age, gender, geographic wards) within the overall sample.")

add("The measure of central tendency calculated by summing all individual numerical scores and dividing by the total number of scores is the:",
    "Median", "Arithmetic Mean", "Mode", "Variance",
    "B", "The mean is the arithmetic average of a dataset, sensitive to every score in the distribution.")

add("The score or value that appears with the greatest frequency in a set of observations is the:",
    "Mean", "Mode", "Median", "Standard deviation",
    "B", "The mode is the most frequently occurring value in a frequency distribution.")

add("In epidemiological research, 'Validity' of a study instrument refers to the extent to which the tool:",
    "Produces identical scores repeatedly",
    "Accurately measures the specific concept, attribute, or phenomenon it was intended to measure",
    "Is short and easy to complete",
    "Is translated into multiple languages",
    "B", "Validity assesses truthfulness and accuracy (content, construct, and criterion validity) of a measurement tool.")

add("The normal physiological volume of amniotic fluid at term gestation (36 to 40 weeks) is approximately:",
    "100 to 200 mL", "800 to 1,000 mL", "3,000 to 4,000 mL", "50 mL",
    "B", "Normal term amniotic fluid volume averages 800 to 1,000 mL; volumes <500 mL define oligohydramnios, and >2,000 mL define polyhydramnios.")

add("Which obstetric maneuver is the first-line intervention to resolve acute fetal shoulder dystocia by hyperflexing maternal thighs against the abdomen?",
    "Zavanelli maneuver", "McRoberts maneuver with suprapubic pressure", "Credé maneuver", "Leopold maneuver",
    "B", "McRoberts maneuver flattens the maternal sacral promontory and cephalad-rotates the pubic symphysis, releasing the impacted anterior shoulder.")

add("In evaluating a non-stress test (NST), a reactive (reassuring) fetal heart rate tracing in a gestation beyond 32 weeks requires:",
    "At least 2 accelerations of at least 15 beats/min above baseline lasting at least 15 seconds within a 20-minute window",
    "Continuous deceleration without variability",
    "A heart rate of exactly 80 bpm",
    "Absence of all fetal movement",
    "A", "The 15x15 criteria (two 15-bpm accelerations lasting 15 seconds in 20 minutes) confirm intact fetal autonomic neurological and myocardial oxygenation.")

add("The clinical appearance of healthy, viable granulation tissue in a healing secondary-intention wound bed is:",
    "Pale yellow, dry, and cool",
    "Beefy red, moist, cobblestone-like, and highly vascular",
    "Black, leathery, and necrotic",
    "White and fibrous",
    "B", "Healthy granulation tissue is composed of proliferating capillary loops and fibroblasts, presenting as vibrant beefy-red vascular tissue.")

add("Cranial Nerve XI (Accessory nerve) is clinically assessed during neurological examination by testing the strength of the:",
    "Facial mimetic muscles",
    "Trapezius muscle (shrugging shoulders against resistance) and sternocleidomastoid muscle (turning head against resistance)",
    "Tongue protrusion",
    "Masseter and temporalis chewing muscles",
    "B", "CN XI innervates the sternocleidomastoid and trapezius muscles; weakness or atrophy impairs shoulder shrug and contralateral head rotation.")

add("Which physical assessment sign for deep venous thrombosis (DVT) is elicited when forced passive dorsiflexion of the foot provokes calf pain?",
    "Kernig's sign", "Homans' sign", "Brudzinski's sign", "Trousseau's sign",
    "B", "Homans' sign involves calf discomfort upon ankle dorsiflexion, though clinical diagnosis requires definitive compression duplex ultrasound.")

add("The pharmacokinetic parameter defined as the time required for the circulating plasma concentration of a drug to decrease by half is the:",
    "Clearance rate", "Elimination half-life (t1/2)", "Bioavailability fraction", "Volume of distribution",
    "B", "Half-life determines the dosing interval and the time required to achieve steady-state plasma concentrations (approx. 4 to 5 half-lives).")

add("Administration of Hepatitis B Immune Globulin (HBIG) or Tetanus Antitoxin to an exposed individual confers which class of immunity?",
    "Active artificial immunity", "Passive artificial immunity", "Active natural immunity", "Passive natural immunity",
    "B", "Passive artificial immunity provides immediate, transient protection through exogenous injection of preformed pooled human or animal antibodies.")

add("The foundational international code of medical research ethics established in 1947 requiring voluntary informed human consent is the:",
    "Nightingale Pledge", "Nuremberg Code", "Declaration of Alma-Ata", "Geneva Convention",
    "B", "The Nuremberg Code articulated 10 core principles for human experimentation, emphasizing that voluntary informed consent is absolutely essential.")

add("Normal resting 24-hour urinary output in a well-hydrated, healthy adult typically averages approximately:",
    "200 to 300 mL", "1,000 to 1,500 mL (approx. 0.5 to 1 mL/kg/hr)", "5,000 to 6,000 mL", "50 to 100 mL",
    "B", "Adult urinary output of 1,000 to 1,500 mL/day reflects normal renal clearance of 600 mOsm of daily metabolic solute wastes.")

with open('scripts/pool_final_35_finish.json', 'w') as f:
    json.dump(questions_finish, f, indent=2)

print(f"Generated {len(questions_finish)} finishing questions")
