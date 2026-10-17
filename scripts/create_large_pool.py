# Comprehensive course questions generator based directly on the NMCN textbook
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

# --- Maternal & Child Health / Obstetrics ---
add("In a pregnant client at 32 weeks gestation, which symptom requires immediate clinical evaluation as a potential warning sign of severe pre-eclampsia?",
    "Occasional mild pedal swelling at the end of the day",
    "Persistent frontal headache, visual scotoma, and right upper quadrant epigastric pain",
    "Increased urinary frequency without dysuria",
    "Braxton Hicks painless uterine contractions",
    "B", "Severe headache, visual disturbances, and epigastric pain indicate cerebral edema, retinal vasospasm, and hepatic capsular distention in severe pre-eclampsia.")

add("Which diagnostic procedure provides definitive assessment of amniotic fluid volume and fetal well-being in high-risk pregnancies?",
    "Serial maternal serum alpha-fetoprotein",
    "Biophysical profile (BPP) combining ultrasound and non-stress testing",
    "Urine protein dipstick",
    "Daily fetal movement kick count alone",
    "B", "A biophysical profile evaluates five parameters: fetal breathing, tone, gross movement, amniotic fluid volume, and reactive heart rate tracing.")

add("A multiparous woman in active labor has sudden intense abdominal pain followed by abrupt cessation of uterine contractions and fetal bradycardia. The nurse suspects:",
    "Uterine rupture",
    "Normal transitional phase",
    "Precipitous labor",
    "Early cervical dilation",
    "A", "Sudden sharp tearing abdominal pain with cessation of contractions and loss of fetal station is diagnostic of uterine rupture, a catastrophic obstetric emergency.")

add("What is the primary action of misoprostol (Cytotec) when used in obstetrics?",
    "Suppression of lactation",
    "Cervical ripening and stimulation of uterine myometrial contractions",
    "Tocolysis to arrest preterm contractions",
    "Prevention of neonatal hypoglycemia",
    "B", "Misoprostol is a synthetic prostaglandin E1 analog that softens and effaces the cervix while initiating vigorous uterine contractions.")

add("Which classification applies to a pregnant woman who has been pregnant 4 times, delivered 2 term infants, 1 preterm infant, and had 1 miscarriage?",
    "Gravida 4, Para 3",
    "Gravida 3, Para 4",
    "Gravida 4, Para 2",
    "Gravida 3, Para 2",
    "A", "Gravida is total number of pregnancies (4); Para is pregnancies reaching viability beyond 20 weeks (2 term + 1 preterm = 3).")

add("Which hormone is synthesized by the syncytiotrophoblast and serves as the biochemical marker detected in qualitative urine pregnancy tests?",
    "Human placental lactogen (hPL)",
    "Human Chorionic Gonadotropin (hCG)",
    "Progesterone",
    "Estriol",
    "B", "hCG is secreted by syncytiotrophoblasts shortly after blastocyst implantation, maintaining the corpus luteum in early pregnancy.")

add("During normal labor, crowning occurs when:",
    "The cervix reaches 8 cm dilation",
    "The widest biparietal diameter of the fetal head distends the vulval introitus and remains visible between contractions",
    "The amniotic membranes rupture spontaneously",
    "The placenta detaches from the uterine wall",
    "B", "Crowning occurs in the second stage when the fetal scalp encircles the vaginal orifice without receding during uterine relaxation.")

add("Which maternal condition is a mandatory indication for scheduled Cesarean section rather than trial of labor?",
    "Gestational diabetes well-controlled on diet",
    "Complete placenta previa covering the internal cervical os",
    "Mild chronic hypertension",
    "History of one prior uncomplicated low transverse cesarean section",
    "B", "Complete placenta previa obstructs the birth canal; vaginal delivery causes massive, life-threatening maternal hemorrhage.")

add("What is the normal expected physiological involution rate of the postpartum uterine fundus following delivery?",
    "Descends approximately 1 fingerbreadth (1 to 2 cm) per 24 hours into the true pelvis",
    "Remains at the umbilicus for 3 weeks",
    "Rises 2 cm daily above the umbilicus",
    "Disappears into the pelvis within 12 hours",
    "A", "The postpartum fundus decreases by approximately 1 cm (one fingerbreadth) each day, becoming non-palpable abdominally by day 10 to 14.")

add("Which type of lochia is normally observed during the first 3 to 4 days postpartum?",
    "Lochia serosa (pinkish-brown)",
    "Lochia rubra (dark red with small decidual clots)",
    "Lochia alba (yellowish-white)",
    "Lochia purulenta",
    "B", "Lochia rubra consists predominantly of blood, decidual debris, and trophoblastic tissue, lasting from delivery until postpartum day 3 to 4.")

# --- Pediatrics & Neonatology ---
add("What is the leading cause of accidental death and injury in infants under 1 year of age in home environments?",
    "Bicycle trauma",
    "Suffocation, aspiration of foreign objects, and falls",
    "Poisoning from garden plants",
    "Pedestrian collisions",
    "B", "Unintentional mechanical suffocation, aspiration of small objects or milk, and falls constitute the predominant risks in infants under 12 months.")

add("In a neonate, jaundice that appears within the first 24 hours of life is considered:",
    "Physiological jaundice due to immature liver glucuronyl transferase",
    "Pathological jaundice (suggesting hemolytic disease such as Rh or ABO incompatibility)",
    "Breast milk jaundice",
    "Normal transient transitional hyperbilirubinemia",
    "B", "Jaundice appearing within the first 24 hours of life is always pathological, usually indicating rapid hemolysis from blood group incompatibility.")

add("Which diagnostic finding on blood film examination confirms sickle cell trait (HbAS) versus homozygous sickle cell anemia (HbSS)?",
    "Full blood count alone",
    "Hemoglobin electrophoresis",
    "Urine microscopy",
    "Serum ferritin level",
    "B", "Hemoglobin electrophoresis separates hemoglobin variants by electrical charge, definitively distinguishing HbAA, HbAS, and HbSS.")

add("What is the recommended position for a healthy term infant during sleep to prevent Sudden Infant Death Syndrome (SIDS)?",
    "Prone position (on the stomach)",
    "Supine position (on the back on a firm flat mattress)",
    "Side-lying with pillows",
    "Semi-reclined in a soft armchair",
    "B", "The 'Back to Sleep' campaign demonstrated that placing infants supine on a firm, bare mattress reduces the incidence of SIDS by over 50%.")

add("A child with suspected acute bacterial meningitis will demonstrate resistance and pain upon passive extension of the knee with the hip flexed at 90 degrees. This is:",
    "Brudzinski's sign",
    "Kernig's sign",
    "Chvostek's sign",
    "Trousseau's sign",
    "B", "Kernig's sign is elicited by flexing the hip and knee to 90 degrees; subsequent resistance or hamstring pain upon knee extension indicates meningeal irritation.")

add("Which infectious disease presents with Koplik spots (small white spots with red halos on the buccal mucosa) preceding a generalized maculopapular rash?",
    "Rubella (German measles)",
    "Rubeola (Measles)",
    "Varicella (Chickenpox)",
    "Roseola infantum",
    "B", "Koplik spots are pathognomonic early enanthem lesions appearing on the oral mucosa opposite the second molars 1 to 2 days before the measles rash erupts.")

add("In administering oral rehydration therapy (ORT) to a toddler with acute gastroenteritis and mild-to-moderate dehydration, the solution is given:",
    "In large boluses of 250 mL every 4 hours",
    "In frequent small sips (5 to 10 mL every 1 to 2 minutes using a spoon or syringe)",
    "Mixed with whole cow's milk",
    "Only after withholding all fluids for 12 hours",
    "B", "Administering oral rehydration salts in small, continuous sips prevents gastric overdistention and minimizes the trigger for reflex vomiting.")

add("Which childhood condition is characterized by a failure of the developmental descent of one or both testes into the scrotal sac?",
    "Hydrocele",
    "Cryptorchidism",
    "Phimosis",
    "Epispadias",
    "B", "Cryptorchidism is undescended testis; if uncorrected by 6 to 12 months, surgical orchiopexy is indicated to preserve fertility and monitor malignancy risk.")

add("Which pediatric parasite causes perianal pruritus that worsens markedly at night, diagnosed using the cellophane tape test?",
    "Ascaris lumbricoides",
    "Enterobius vermicularis (Pinworm / Threadworm)",
    "Taenia saginata",
    "Ancylostoma duodenale",
    "B", "Female pinworms migrate out of the anus at night to deposit ova on the perianal fold, causing intense nocturnal itching.")

add("A 4-year-old child with nephrotic syndrome will exhibit which classic triad of clinical and laboratory findings?",
    "Hematuria, azotemia, and fever",
    "Heavy proteinuria, severe hypoalbuminemia, and generalized pitting edema",
    "Oliguria, hypercalcemia, and jaundice",
    "Glycosuria, polyuria, and polydipsia",
    "B", "Increased glomerular permeability causes massive urinary protein loss (>3.5 g/day equivalent), profound hypoalbuminemia, and massive anasarca.")

# --- Pharmacology & Toxicology ---
add("Which drug class represents the cornerstone treatment for reversing bronchoconstriction in acute chronic bronchitis and asthma?",
    "Beta-2 adrenergic receptor agonists",
    "Alpha-1 receptor agonists",
    "Beta-1 antagonists",
    "Carbonic anhydrase inhibitors",
    "A", "Beta-2 agonists stimulate adenylyl cyclase in airway smooth muscle, leading to relaxation of the bronchial tree and rapid relief of dyspnea.")

add("Which specific reversal agent is administered for acute toxicity or respiratory depression induced by benzodiazepines like diazepam?",
    "Naloxone",
    "Flumazenil",
    "Atropine",
    "Protamine sulfate",
    "B", "Flumazenil is a competitive antagonist at the central GABA-A receptor benzodiazepine binding site, rapidly reversing benzodiazepine sedation.")

add("Which oral hypoglycemic agent of the biguanide class decreases hepatic glucose production and does not cause hypoglycemia as a monotherapy?",
    "Glibenclamide",
    "Metformin hydrochloride",
    "Pioglitazone",
    "Repaglinide",
    "B", "Metformin suppresses hepatic gluconeogenesis and improves peripheral insulin sensitivity without stimulating pancreatic beta-cell insulin secretion.")

add("A client receiving intravenous Vancomycin requires regular therapeutic drug monitoring of which pharmacokinetic parameter to avoid nephrotoxicity?",
    "Peak concentration only",
    "Trough serum concentration drawn immediately prior to the next scheduled dose",
    "Random post-prandial level",
    "Urine creatinine level",
    "B", "Monitoring vancomycin serum trough levels (typically maintained between 10-20 mcg/mL depending on infection severity) ensures efficacy and prevents toxicity.")

add("Which anti-tubercular medication is notorious for causing peripheral neuropathy, which can be prevented by co-administering Pyridoxine (Vitamin B6)?",
    "Rifampicin",
    "Isoniazid (INH)",
    "Ethambutol",
    "Pyrazinamide",
    "B", "Isoniazid binds with pyridoxal-5-phosphate and accelerates its renal excretion, causing vitamin B6 deficiency and peripheral neuropathy unless supplemented.")

add("Which first-line anti-TB drug requires routine baseline and periodic visual acuity and color vision testing due to the risk of retrobulbar optic neuritis?",
    "Isoniazid",
    "Ethambutol",
    "Streptomycin",
    "Rifampicin",
    "B", "Ethambutol can induce dose-dependent optic neuritis, manifesting as decreased visual acuity and loss of red-green color discrimination.")

add("Which loop diuretic is commonly utilized for rapid reduction of pulmonary edema in acute congestive heart failure?",
    "Hydrochlorothiazide",
    "Furosemide (Lasix)",
    "Spironolactone",
    "Acetazolamide",
    "B", "Intravenous furosemide produces acute venous dilation within 5 minutes (reducing cardiac preload) followed by brisk natriuresis and diuresis within 15-20 minutes.")

add("What is the primary mechanism of action of nonsteroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen and diclofenac?",
    "Inhibition of cyclooxygenase enzymes (COX-1 and COX-2) to block prostaglandin synthesis",
    "Stimulation of opioid mu receptors in the spinal cord",
    "Blockade of histamine H1 receptors",
    "Enhancement of serotonin neurotransmission",
    "A", "NSAIDs block cyclooxygenase (prostaglandin H2 synthase), inhibiting the conversion of arachidonic acid to pro-inflammatory prostaglandins.")

add("A patient taking monoamine oxidase inhibitors (MAOIs) for refractory depression must avoid tyramine-rich foods (aged cheese, red wine, cured meats) to prevent:",
    "Severe hypoglycemia",
    "Hypertensive crisis (malignant hypertension)",
    "Renal stone formation",
    "Agranulocytosis",
    "B", "MAO inhibition prevents intestinal breakdown of dietary tyramine; accumulated tyramine displaces norepinephrine into synaptic clefts, causing extreme vasoconstriction.")

add("Which broad-spectrum antimicrobial is contraindicated in children under 8 years of age and pregnant women due to permanent yellow-brown dental enamel discoloration?",
    "Amoxicillin",
    "Tetracyclines (such as doxycycline)",
    "Erythromycin",
    "Ciprofloxacin",
    "B", "Tetracyclines chelate with calcium orthophosphate in developing teeth and growing bones, causing permanent dental staining and enamel hypoplasia.")

# --- Mental Health & Psychiatric Nursing ---
add("Which psychiatric disorder is characterized by a pervasive pattern of grandiosity, need for admiration, and a profound lack of empathy for others?",
    "Antisocial personality disorder",
    "Narcissistic personality disorder",
    "Borderline personality disorder",
    "Histrionic personality disorder",
    "B", "Narcissistic personality disorder is marked by an inflated sense of self-importance, entitlement, exploitative interpersonal relationships, and absence of empathy.")

add("In a psychiatric interview, a client continually shifts from one topic to another rapidly, connected only by superficial associations or rhyming words. This speech pattern is:",
    "Word salad",
    "Flight of ideas (clang associations)",
    "Neologisms",
    "Perseveration",
    "B", "Flight of ideas is characterized by accelerated speech with abrupt topic jumps governed by chance environmental stimuli or phonetic sound similarities (rhyming/clanging).")

add("Which therapeutic communication technique is demonstrated when the nurse rephrases the client's core message in fewer, similar words to confirm mutual understanding?",
    "Probing",
    "Paraphrasing (restating)",
    "False reassurance",
    "Moralizing",
    "B", "Paraphrasing restates the essence of the patient's verbal expression in the nurse's own words, verifying accurate comprehension and conveying active listening.")

add("A client presenting with persistent physical symptoms (such as pain or paralysis) for which thorough medical evaluation reveals no organic pathophysiological basis is diagnosed with:",
    "Conversion disorder (Functional Neurological Symptom Disorder)",
    "Malingering",
    "Bipolar disorder",
    "Generalized anxiety disorder",
    "A", "Conversion disorder involves altered voluntary motor or sensory function that cannot be explained by neurological or general medical disease, often triggered by psychological stress.")

add("Which psychotherapeutic treatment modality utilizes brief controlled electrical currents applied across the scalp to induce a generalized cerebral seizure for refractory depression?",
    "Biofeedback therapy",
    "Electroconvulsive Therapy (ECT)",
    "Systematic desensitization",
    "Transcranial magnetic therapy",
    "B", "ECT is an effective biological therapy indicated for treatment-resistant major depression, acute mania with exhaustion, and severe katatonic states.")

# --- Community Health, Environmental Health & Epidemiology ---
add("The epidemiological term 'Endemic' refers to a disease that is:",
    "Spreading rapidly across multiple continents worldwide",
    "Constantly present at an expected baseline level within a given geographic area or population",
    "Exclusively occurring as rare, isolated sporadic cases",
    "Completely eradicated through immunization",
    "B", "An endemic disease (e.g., malaria in sub-Saharan Africa) maintains a predictable, sustained presence within a specific geographical locality.")

add("What is the primary mode of transmission of Lassa fever virus in West African communities?",
    "Bite of the tsetse fly",
    "Direct contact with or ingestion of food contaminated with excreta or urine of infected multimammate rats (Mastomys natalensis)",
    "Inhalation of pollen spores",
    "Consumption of undercooked beef",
    "B", "Mastomys natalensis rodents shed Lassa virus in their urine and feces, contaminating domestic food storage pots and household grain.")

add("Which simple, low-cost household water treatment method effectively destroys waterborne pathogens using heat?",
    "Vigorous rolling boiling of drinking water for at least 1 to 3 minutes",
    "Sedimentation in an open bucket for 1 hour",
    "Passing water through a single cotton cloth",
    "Exposing water to moonlight overnight",
    "A", "Bringing water to a vigorous rolling boil for 1 minute (or 3 minutes at high altitude) thermal-inactivates enteric bacteria, viruses, and protozoan cysts.")

add("In epidemiology, the 'Case Fatality Rate' is defined as the proportion of:",
    "Deaths in the entire national population over one year",
    "Individuals diagnosed with a specific disease who die from that disease within a specified time frame",
    "New cases occurring relative to the total population",
    "Hospitalized patients who are discharged alive",
    "B", "Case fatality rate measures disease severity by calculating: (Number of deaths from disease / Total confirmed cases of disease) x 100.")

add("What is the primary purpose of adding fluoride to public community water supplies or toothpaste?",
    "To eliminate coliform bacteria",
    "To strengthen dental enamel hydroxyapatite and prevent dental caries (cavities)",
    "To clarify turbidity in surface water",
    "To prevent goiter",
    "B", "Fluoride incorporates into tooth enamel to form fluorapatite, which is significantly more resistant to demineralization by bacterial plaque acids.")

# --- Medical-Surgical Specialities & Surgery ---
add("In post-operative care following an open abdominal procedure, which assessment finding indicates the return of normal gastrointestinal motility?",
    "Absence of abdominal pain",
    "Audible bowel sounds in all 4 quadrants and the passage of flatus",
    "Clear nasogastric drainage of 1500 mL/day",
    "Soft non-distended bladder",
    "B", "The auscultation of active bowel sounds accompanied by the passage of flatus confirms the resolution of post-surgical paralytic ileus.")

add("Which surgical position is standard for a patient undergoing abdominal laparoscopic cholecystectomy or hiatal hernia repair to allow viscera to drop away from the operative field?",
    "Trendelenburg position",
    "Reverse Trendelenburg position",
    "Prone position",
    "Jackknife position",
    "B", "Reverse Trendelenburg (head elevated, feet lowered) utilizes gravity to displace the stomach and intestines inferiorly away from the subhepatic space.")

add("When caring for a client with an indwelling urinary (Foley) catheter, the drainage collection bag must always be positioned:",
    "At the level of the patient's heart",
    "Below the level of the bladder at all times to prevent retroflex of contaminated urine",
    "Resting directly on the floor",
    "Tucked under the bed pillow",
    "B", "Maintaining the collection bag below bladder level facilitates gravity drainage and prevents backflow of colonized urine into the sterile urinary tract.")

add("Which clinical test is utilized at the bedside to assess collateral arterial circulation in the hand prior to radial artery cannulation for blood gas sampling?",
    "Homan's test",
    "Allen's test",
    "Phalen's test",
    "Tinels test",
    "B", "The modified Allen test occludes both radial and ulnar arteries until the hand blanches; release of the ulnar artery should restore pink flushing within 5-7 seconds.")

add("In a patient suffering from hypovolemic shock due to severe hemorrhage, which intravenous fluid is most appropriate for immediate initial volume resuscitation while blood is cross-matched?",
    "5% Dextrose in water (D5W)",
    "Isotonic crystalloid solutions (0.9% Normal Saline or Ringer's Lactate)",
    "0.45% Half-normal saline",
    "10% Dextrose in water",
    "B", "Isotonic crystalloids expand the intravascular compartment effectively without causing rapid intracellular fluid shifts or hemolysis.")

# Save compiled list
with open('scripts/large_pool_questions.json', 'w') as f:
    json.dump(questions, f, indent=2)

print(f"Successfully generated {len(questions)} large pool questions")
