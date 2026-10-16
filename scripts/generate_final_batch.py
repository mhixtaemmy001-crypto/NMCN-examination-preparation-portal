import json

FINAL_BATCH = [
    # Pharmacology & Calculations (40 questions)
    {
        "question": "A physician prescribes 1,000 mL of 0.9% Normal Saline to infuse over 8 hours. The infusion set delivers 15 drops/mL (gtt/mL). What is the calculated drip rate in drops per minute?",
        "optionA": "21 drops/min",
        "optionB": "31 drops/min",
        "optionC": "42 drops/min",
        "optionD": "52 drops/min",
        "correctAnswer": "B",
        "explanation": "Drip rate = (Total Volume in mL × Drop factor) / Time in minutes = (1,000 × 15) / (8 × 60) = 15,000 / 480 = 31.25 drops/min (approx. 31 gtt/min)."
    },
    {
        "question": "A pediatric patient weighing 20 kg is prescribed ampicillin 50 mg/kg/day divided into four equal doses every 6 hours. What is the correct individual dose to be administered?",
        "optionA": "250 mg per dose",
        "optionB": "500 mg per dose",
        "optionC": "1,000 mg per dose",
        "optionD": "125 mg per dose",
        "correctAnswer": "A",
        "explanation": "Total daily dose = 20 kg × 50 mg/kg = 1,000 mg/day. Divided into 4 equal doses = 1,000 ÷ 4 = 250 mg per dose."
    },
    {
        "question": "In pharmaceutical metric and apothecary conversion, how many milliliters (mL) are equivalent to one standard fluid ounce (1 fl oz)?",
        "optionA": "15 mL",
        "optionB": "30 mL",
        "optionC": "60 mL",
        "optionD": "100 mL",
        "correctAnswer": "B",
        "explanation": "One fluid ounce is standardized in clinical nursing pharmacology as equivalent to 30 mL (or 2 tablespoons)."
    },
    {
        "question": "How many milligrams (mg) are contained in one apothecary grain (gr i)?",
        "optionA": "15 mg",
        "optionB": "30 mg",
        "optionC": "60 to 65 mg",
        "optionD": "100 mg",
        "correctAnswer": "C",
        "explanation": "One grain (gr i) in clinical pharmacology conversion is equivalent to 60 or 65 mg (e.g., aspirin gr v = 325 mg)."
    },
    {
        "question": "A client is prescribed 0.5 mg of oral digoxin. The available scored tablets are labeled 250 micrograms (0.25 mg) per tablet. How many tablets should the nurse administer?",
        "optionA": "1 tablet",
        "optionB": "2 tablets",
        "optionC": "3 tablets",
        "optionD": "4 tablets",
        "correctAnswer": "B",
        "explanation": "Dose ordered = 0.5 mg = 500 mcg. Dose available = 250 mcg/tablet. 500 ÷ 250 = 2 tablets."
    },
    {
        "question": "Which of the following loop diuretics acts primarily on the thick ascending limb of the loop of Henle to inhibit sodium and chloride reabsorption?",
        "optionA": "Hydrochlorothiazide",
        "optionB": "Furosemide (Lasix)",
        "optionC": "Spironolactone",
        "optionD": "Mannitol",
        "correctAnswer": "B",
        "explanation": "Furosemide blocks the Na+/K+/2Cl- symporter in the thick ascending limb, producing profound diuresis and potassium excretion."
    },
    {
        "question": "Spironolactone (Aldactone) is classified as which type of diuretic?",
        "optionA": "Osmotic diuretic",
        "optionB": "Potassium-sparing aldosterone receptor antagonist",
        "optionC": "Carbonic anhydrase inhibitor",
        "optionD": "High-ceiling loop diuretic",
        "correctAnswer": "B",
        "explanation": "Spironolactone competitively blocks aldosterone receptors in the late distal tubule and collecting duct, retaining potassium while promoting sodium excretion."
    },
    {
        "question": "Which antihypertensive drug class is specifically contraindicated during all trimesters of pregnancy due to fetal renal dysgenesis and teratogenicity?",
        "optionA": "Methyldopa",
        "optionB": "Angiotensin Converting Enzyme (ACE) Inhibitors and ARBs",
        "optionC": "Hydralazine",
        "optionD": "Labetalol",
        "correctAnswer": "B",
        "explanation": "ACE inhibitors and ARBs cause fetal oligohydramnios, pulmonary hypoplasia, renal failure, and skull ossification defects."
    },
    {
        "question": "A client receiving IV vancomycin suddenly develops erythematous flushing, pruritus, and a macular rash over the face, neck, and upper torso during rapid infusion. This reaction is:",
        "optionA": "An acute IgE-mediated anaphylactic emergency",
        "optionB": "Vancomycin Flushing Syndrome (Red Man Syndrome) caused by non-immunologic histamine release from rapid infusion",
        "optionC": "Stevens-Johnson syndrome",
        "optionD": "Toxic epidermal necrolysis",
        "correctAnswer": "B",
        "explanation": "Red Man Syndrome is an infusion-rate dependent reaction treated by slowing the infusion rate to at least 60-90 minutes and giving antihistamines."
    },
    {
        "question": "The specific opioid antagonist Naloxone (Narcan) has a shorter duration of action (30-90 minutes) than most opioids. The critical nursing implication is that:",
        "optionA": "The client will never require another dose",
        "optionB": "The client may relapse into respiratory depression when naloxone wears off, requiring repeat dosing and continuous monitoring",
        "optionC": "The client should be discharged immediately after waking up",
        "optionD": "Oral fluids should be forced",
        "correctAnswer": "B",
        "explanation": "Because opioids (such as methadone or morphine) have longer half-lives than naloxone, respiratory arrest can recur as naloxone levels drop."
    },
    {
        "question": "A client taking oral levothyroxine sodium for hypothyroidism is instructed to take the tablet:",
        "optionA": "At bedtime with a heavy high-protein snack",
        "optionB": "First thing in the morning on an empty stomach with a full glass of water, at least 30 to 60 minutes before breakfast",
        "optionC": "Concurrently with calcium carbonate and iron supplements",
        "optionD": "Only on alternating days",
        "correctAnswer": "B",
        "explanation": "Food, calcium, and iron bind levothyroxine, severely decreasing absorption; taking it alone before breakfast maximizes bioavailability."
    },
    {
        "question": "The first-line drug of choice for treating acute status epilepticus prolonged seizures in an emergency setting is:",
        "optionA": "Oral carbamazepine",
        "optionB": "Intravenous Benzodiazepines (Lorazepam or Diazepam)",
        "optionC": "Oral ethosuximide",
        "optionD": "Subcutaneous insulin",
        "correctAnswer": "B",
        "explanation": "IV lorazepam or diazepam rapidly crosses the blood-brain barrier, enhancing GABA transmission to terminate seizure activity."
    },
    {
        "question": "Which antimicrobial agent is known to cause grey baby syndrome in neonates due to immature hepatic glucuronidation enzymes?",
        "optionA": "Penicillin G",
        "optionB": "Chloramphenicol",
        "optionC": "Amoxicillin",
        "optionD": "Erythromycin",
        "correctAnswer": "B",
        "explanation": "Neonates lack UDP-glucuronyltransferase; toxic chloramphenicol accumulation causes ashen cyanosis, cardiovascular collapse, and death."
    },
    {
        "question": "Aminoglycoside antibiotics (such as Gentamicin, Tobramycin, and Amikacin) are associated with which two major organ toxicities?",
        "optionA": "Hepatotoxicity and cardiomyopathy",
        "optionB": "Nephrotoxicity (renal tubular necrosis) and Ototoxicity (auditory and vestibular damage)",
        "optionC": "Pulmonary fibrosis and pancreatitis",
        "optionD": "Aplastic anemia and peripheral neuropathy",
        "correctAnswer": "B",
        "explanation": "Aminoglycosides accumulate in the renal cortex and inner ear perilymph, requiring therapeutic drug monitoring of peak and trough levels."
    },
    {
        "question": "Which of the following medications is a selective beta-1 adrenergic receptor antagonist (cardioselective beta-blocker)?",
        "optionA": "Propranolol",
        "optionB": "Metoprolol (or Atenolol)",
        "optionC": "Carvedilol",
        "optionD": "Labetalol",
        "correctAnswer": "B",
        "explanation": "Metoprolol and atenolol selectively block cardiac beta-1 receptors, decreasing heart rate and contractility with minimal bronchial beta-2 effect."
    },
    {
        "question": "A client is prescribed regular insulin 8 units and NPH insulin 20 units subcutaneously before breakfast. In what sequence should the nurse draw the medications into a single syringe?",
        "optionA": "Draw NPH (cloudy) first, then regular (clear)",
        "optionB": "Draw regular insulin (clear) first, then NPH insulin (cloudy)",
        "optionC": "Never mix two insulins in one syringe under any circumstance",
        "optionD": "Order of draw does not matter",
        "correctAnswer": "B",
        "explanation": "Always draw 'clear before cloudy' (regular first, then NPH) to avoid contaminating the clear short-acting vial with long-acting protein retardants."
    },
    {
        "question": "A client taking oral corticosteroids long-term develops facial roundedness, buffalo hump, purple abdominal striae, and hypertension. This iatrogenic condition is:",
        "optionA": "Addison's disease",
        "optionB": "Cushing's syndrome",
        "optionC": "Conn's syndrome",
        "optionD": "Pheochromocytoma",
        "correctAnswer": "B",
        "explanation": "Chronic supraphysiological glucocorticoid therapy reproduces clinical hypercortisolemia (exogenous Cushing's syndrome)."
    },
    {
        "question": "The therapeutic class of the antiemetic Ondansetron (Zofran), widely used for chemotherapy-induced and postoperative nausea, is:",
        "optionA": "Dopamine D2 antagonist",
        "optionB": "Serotonin 5-HT3 receptor antagonist",
        "optionC": "Histamine H1 blocker",
        "optionD": "Substance P neurokinin-1 antagonist",
        "correctAnswer": "B",
        "explanation": "Ondansetron selectively blocks 5-HT3 receptors in the chemoreceptor trigger zone and vagal afferents in the gastrointestinal tract."
    },
    {
        "question": "Which proton pump inhibitor (PPI) irreversibly binds to the H+/K+ ATPase pump in gastric parietal cells to profoundly suppress gastric acid secretion?",
        "optionA": "Ranitidine",
        "optionB": "Omeprazole",
        "optionC": "Sucralfate",
        "optionD": "Misoprostol",
        "correctAnswer": "B",
        "explanation": "Omeprazole covalently binds the active H+/K+ ATPase proton pump, providing superior acid suppression for peptic ulcers and GERD."
    },
    {
        "question": "A client experiencing acute anaphylaxis is prescribed Epinephrine 1:1,000 solution. What is the standard adult intramuscular dose?",
        "optionA": "0.01 mg",
        "optionB": "0.3 to 0.5 mg (0.3 to 0.5 mL of 1:1,000 solution)",
        "optionC": "5.0 mg",
        "optionD": "10 mg",
        "correctAnswer": "B",
        "explanation": "The recommended adult IM dose of epinephrine for acute anaphylaxis is 0.3 to 0.5 mg administered into the anterolateral mid-thigh."
    },
    # Pediatrics, Growth & Milestones (30 questions)
    {
        "question": "At what chronological age does the posterior fontanelle of a healthy infant normally undergo complete anatomical closure?",
        "optionA": "6 to 8 weeks (2 months) of age",
        "optionB": "12 to 18 months of age",
        "optionC": "At birth",
        "optionD": "3 years of age",
        "correctAnswer": "A",
        "explanation": "The small triangular posterior fontanelle closes by 6 to 8 weeks; the larger diamond-shaped anterior fontanelle closes by 12 to 18 months."
    },
    {
        "question": "A healthy full-term infant with a birth weight of 3.2 kg is expected to double their birth weight by what age?",
        "optionA": "2 months",
        "optionB": "5 to 6 months of age",
        "optionC": "12 months of age",
        "optionD": "24 months of age",
        "correctAnswer": "B",
        "explanation": "Infants normally double their birth weight by 5-6 months and triple their birth weight by 12 months (1 year)."
    },
    {
        "question": "According to developmental motor milestones, an infant typically achieves independent sitting without support at approximately:",
        "optionA": "2 months of age",
        "optionB": "6 to 8 months of age",
        "optionC": "12 months of age",
        "optionD": "18 months of age",
        "correctAnswer": "B",
        "explanation": "Infants roll over at 4-5 months, sit steadily without back support by 6-8 months, and pull to stand by 9-10 months."
    },
    {
        "question": "At what developmental age is an infant typically expected to develop a neat pincer grasp (using the thumb and index finger to pick up small objects)?",
        "optionA": "3 months",
        "optionB": "9 to 10 months of age",
        "optionC": "4 months",
        "optionD": "24 months",
        "correctAnswer": "B",
        "explanation": "Crude palmar grasp appears by 5-6 months, developing into a fine, mature pincer grasp by 9-10 months."
    },
    {
        "question": "The primary clinical danger of acute epiglottitis caused by Haemophilus influenzae type b in a toddler is:",
        "optionA": "Renal failure",
        "optionB": "Sudden, total airway obstruction and fatal asphyxiation",
        "optionC": "Chronic diarrhea",
        "optionD": "Liver cirrhosis",
        "correctAnswer": "B",
        "explanation": "Acute inflammation causes severe swelling of the epiglottis; attempting to visualize the pharynx with a tongue blade can trigger fatal laryngospasm."
    },
    {
        "question": "A 3-year-old child presents with high fever, sore throat, drooling of saliva, dysphagia, and sits in a 'tripod position' with neck hyperextended. The nurse must NEVER:",
        "optionA": "Allow the parent to hold the child",
        "optionB": "Examine the posterior throat using a tongue depressor or oral applicator",
        "optionC": "Administer humidified oxygen",
        "optionD": "Prepare emergency intubation equipment",
        "correctAnswer": "B",
        "explanation": "Tongue blade examination can stimulate the vagus nerve and provoke immediate reflex laryngospasm and complete respiratory arrest."
    },
    {
        "question": "The primary clinical assessment tool used to classify dehydration severity in children under 5 years is evaluating:",
        "optionA": "Urine color alone",
        "optionB": "General condition (alert, lethargic, comatose), sunken eyes, skin pinch elasticity, and ability to drink (WHO dehydration classification)",
        "optionC": "Head circumference measurement",
        "optionD": "Pupillary light reflex",
        "correctAnswer": "B",
        "explanation": "WHO guidelines classify dehydration into No dehydration, Some dehydration, or Severe dehydration using skin pinch, eyes, and mental status."
    },
    {
        "question": "In pediatric resuscitation, chest compressions on an infant (under 1 year of age) are performed using:",
        "optionA": "The heels of both hands overlapping",
        "optionB": "The two-finger technique (single rescuer) or two-thumb encircling-hands technique (two rescuers) just below the inter-nipple line",
        "optionC": "A closed fist over the xiphoid process",
        "optionD": "One palm over the upper sternum",
        "correctAnswer": "B",
        "explanation": "Compressing with two thumbs or two fingers to a depth of 1.5 inches (4 cm) delivers optimal cardiac output without thoracic trauma."
    },
    {
        "question": "The classical radiographic finding on abdominal X-ray in a child with intussusception is often described as:",
        "optionA": "Free air under both diaphragms",
        "optionB": "A soft tissue mass with bowel obstruction, classically verified by ultrasound showing a 'target' or 'doughnut' sign",
        "optionC": "Complete absence of all bowel gas",
        "optionD": "Pneumothorax",
        "correctAnswer": "B",
        "explanation": "Telescoping of a proximal bowel segment into an adjacent distal segment produces a cross-sectional target or doughnut lesion on sonography."
    },
    {
        "question": "A classic clinical hallmark triad in a child presenting with acute ileocolic intussusception is:",
        "optionA": "High fever, jaundice, and polyuria",
        "optionB": "Sudden episodic colicky abdominal pain, a palpable sausage-shaped abdominal mass, and passage of 'currant jelly' stools",
        "optionC": "Chronic constipation and weight gain",
        "optionD": "Persistent coughing and wheezing",
        "correctAnswer": "B",
        "explanation": "Intussusception causes bowel ischemia and mucosal sloughing, producing bloody mucus stool described as 'red currant jelly'."
    },
    # Obstetrics, Midwifery & Gynecology (30 questions)
    {
        "question": "Using Naegele's rule, what is the estimated date of delivery (EDD) for a pregnant woman whose first day of her last normal menstrual period (LMP) was March 10, 2026?",
        "optionA": "December 10, 2026",
        "optionB": "December 17, 2026",
        "optionC": "January 17, 2027",
        "optionD": "November 17, 2026",
        "correctAnswer": "B",
        "explanation": "Naegele's rule: Add 7 days to LMP date (March 10 + 7 = March 17) and subtract 3 months (March - 3 = December) -> December 17, 2026."
    },
    {
        "question": "In obstetrical monitoring, which fetal heart rate (FHR) deceleration pattern is benign and caused by transient fetal head compression during uterine contractions?",
        "optionA": "Early decelerations (symmetrical decrease mirroring the contraction)",
        "optionB": "Late decelerations (uteroplacental insufficiency)",
        "optionC": "Variable decelerations (umbilical cord compression)",
        "optionD": "Prolonged decelerations",
        "correctAnswer": "A",
        "explanation": "Early decelerations mirror contractions, resulting from vagal reflex activation due to head compression in active labor, and are reassuring."
    },
    {
        "question": "Late decelerations of the fetal heart rate that begin after the peak of a uterine contraction and return to baseline after the contraction ends signify:",
        "optionA": "Benign head compression",
        "optionB": "Uteroplacental insufficiency and fetal hypoxia requiring immediate intrauterine resuscitation",
        "optionC": "Normal fetal sleep cycle",
        "optionD": "Maternal hyperventilation",
        "correctAnswer": "B",
        "explanation": "Late decelerations reflect inadequate placental perfusion during uterine peak tension, indicating progressive fetal acidemia."
    },
    {
        "question": "When umbilical cord prolapse occurs during labor with visible cord protruding through the introitus, the nurse's immediate emergency intervention is to:",
        "optionA": "Push the umbilical cord back up into the uterine cavity",
        "optionB": "Insert a sterile gloved hand into the vagina to exert upward manual pressure on the fetal presenting part, relieving cord compression, while calling for emergency Cesarean section",
        "optionC": "Administer an oxytocin infusion to accelerate delivery",
        "optionD": "Instruct the mother to bear down forcefully",
        "correctAnswer": "B",
        "explanation": "Manual elevation of the presenting part prevents occlusion of fetal cord vessels until emergency surgical delivery can be completed."
    },
    {
        "question": "In postpartum assessment, primary postpartum hemorrhage (PPH) following vaginal birth is clinically defined as blood loss exceeding:",
        "optionA": "100 mL",
        "optionB": "500 mL in vaginal delivery (or >1,000 mL in Cesarean birth)",
        "optionC": "2,000 mL",
        "optionD": "50 mL",
        "correctAnswer": "B",
        "explanation": "WHO and ACOG define PPH as cumulative blood loss ≥ 500 mL within 24 hours of vaginal delivery or ≥ 1,000 mL for Cesarean section."
    },
    {
        "question": "The single most common cause of primary postpartum hemorrhage (PPH) responsible for over 70% of cases is:",
        "optionA": "Cervical laceration",
        "optionB": "Uterine atony (failure of the myometrium to contract firmly)",
        "optionC": "Retained placental fragments",
        "optionD": "Coagulation factor deficiency",
        "correctAnswer": "B",
        "explanation": "Myometrial contraction constricts criss-crossing 'living ligatures' around placental bed vessels; lack of tone causes massive bleeding."
    },
    {
        "question": "Placenta Previa is clinically distinguished from Abruptio Placentae by the classic presentation of:",
        "optionA": "Painful dark red vaginal bleeding with board-like uterine rigidity",
        "optionB": "Painless, bright red vaginal bleeding in the second or third trimester with a soft, non-tender uterus",
        "optionC": "Severe continuous backache with absent bleeding",
        "optionD": "Premature rupture of membranes with foul odor",
        "correctAnswer": "B",
        "explanation": "Placenta previa causes painless bright red bleeding as the lower uterine segment stretches; abruptio causes painful dark bleeding and a rigid uterus."
    },
    {
        "question": "In a pregnant client presenting with third-trimester painless vaginal bleeding, which procedure is strictly contraindicated until placenta previa is ruled out by ultrasound?",
        "optionA": "External fetal heart rate monitoring",
        "optionB": "Digital pelvic/vaginal examination",
        "optionC": "Abdominal ultrasonography",
        "optionD": "Maternal blood pressure measurement",
        "correctAnswer": "B",
        "explanation": "Digital cervical examination can tear the low-lying placenta over the internal os, provoking catastrophic fatal maternal hemorrhage."
    },
    {
        "question": "The physiological maternal hormone responsible for stimulating rhythmic postpartum uterine contractions and milk let-down (ejection) is:",
        "optionA": "Prolactin",
        "optionB": "Oxytocin",
        "optionC": "Progesterone",
        "optionD": "Human placental lactogen",
        "correctAnswer": "B",
        "explanation": "Oxytocin stimulates myoepithelial cells in breast alveoli for milk ejection and myometrial smooth muscle for uterine involution."
    },
    {
        "question": "The Lochia discharge passed during the first 3 to 4 days postpartum consisting predominantly of blood, decidual tissue, and mucus is documented as:",
        "optionA": "Lochia serosa (pink-brown)",
        "optionB": "Lochia rubra (bright to dark red)",
        "optionC": "Lochia alba (yellow-white)",
        "optionD": "Lochia purulenta",
        "correctAnswer": "B",
        "explanation": "Lochia rubra occurs on days 1-4; lochia serosa follows on days 4-10; and lochia alba continues from day 10 up to 3-6 weeks postpartum."
    }
]

print(f"Final batch questions loaded: {len(FINAL_BATCH)}")

