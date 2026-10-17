# Python script to compile extensive questions from all courses from the NMCN book
import json
import re

CURRICULUM_QUESTIONS = [
    # --- Renal & Urology ---
    {
        "question": "A client with end-stage renal disease (ESRD) has a serum potassium of 6.2 mEq/L. Which food item should the nurse instruct the client to strictly avoid?",
        "optionA": "Applesauce",
        "optionB": "Bananas and oranges",
        "optionC": "White rice",
        "optionD": "Cabbage",
        "correctAnswer": "B",
        "explanation": "Bananas, oranges, potatoes, tomatoes, and melons are rich dietary sources of potassium and must be restricted in renal failure to prevent lethal cardiotoxicity."
    },
    {
        "question": "Which diagnostic finding is the most reliable and sensitive biochemical indicator of acute kidney injury (AKI)?",
        "optionA": "Blood urea nitrogen (BUN) level alone",
        "optionB": "Serum creatinine elevation and declining urine output",
        "optionC": "Serum uric acid concentration",
        "optionD": "Urine specific gravity of 1.010",
        "correctAnswer": "B",
        "explanation": "Serum creatinine is produced at a constant rate by muscle breakdown and cleared almost entirely by glomerular filtration, making it the most specific marker of renal filtration capacity."
    },
    {
        "question": "When assessing an arteriovenous (AV) fistula in the left forearm of a hemodialysis patient, which findings confirm vascular patency?",
        "optionA": "Absence of sound on auscultation and flat veins",
        "optionB": "A palpable thrill on palpation and a distinct bruit on auscultation",
        "optionC": "Pulsatile redness with severe pain",
        "optionD": "Coolness and cyanosis of the distal digits",
        "correctAnswer": "B",
        "explanation": "Turbulent high-velocity arterial blood entering the lower-pressure vein generates a palpable vibration (thrill) and an audible continuous rushing murmur (bruit)."
    },
    {
        "question": "In a patient presenting with renal calculi composed of calcium oxalate, which dietary instruction is most appropriate?",
        "optionA": "Strictly eliminate all dietary calcium from food sources",
        "optionB": "Maintain adequate fluid intake of 2.5 to 3 liters daily and reduce oxalate-rich foods like spinach and chocolate",
        "optionC": "Increase intake of high-purine organ meats and sardines",
        "optionD": "Restrict daily water intake to 1 liter to avoid urinary stasis",
        "correctAnswer": "B",
        "explanation": "High fluid intake dilutes urinary solute concentrations, and limiting oxalate-rich foods (spinach, rhubarb, nuts, chocolate, black tea) decreases stone nucleation."
    },
    {
        "question": "A patient with glomerulonephritis presents with periorbital edema, gross hematuria (cola-colored urine), and hypertension. This syndrome commonly follows an infection with:",
        "optionA": "Escherichia coli",
        "optionB": "Group A beta-hemolytic Streptococcus (pharyngitis or impetigo)",
        "optionC": "Pseudomonas aeruginosa",
        "optionD": "Staphylococcus epidermidis",
        "correctAnswer": "B",
        "explanation": "Post-streptococcal glomerulonephritis is an immune-complex mediated disease that occurs 1 to 3 weeks after group A beta-hemolytic streptococcal pharyngeal or skin infection."
    },
    # --- Cardiovascular & Hematology ---
    {
        "question": "A client with acute coronary syndrome has persistent chest pain. The nurse obtains an ECG that shows ST-segment elevation in leads II, III, and aVF. Which myocardial wall is affected?",
        "optionA": "Anterior wall",
        "optionB": "Inferior wall",
        "optionC": "Lateral wall",
        "optionD": "Posterior wall",
        "correctAnswer": "B",
        "explanation": "ST elevation in leads II, III, and aVF indicates an acute inferior wall myocardial infarction, typically caused by occlusion of the right coronary artery (RCA)."
    },
    {
        "question": "During cardiac arrest resuscitation, the monitor displays ventricular fibrillation (VF). What is the immediate definitive treatment?",
        "optionA": "Synchronized cardioversion at 50 Joules",
        "optionB": "Immediate unsynchronized defibrillation (120-200 J biphasic) followed by CPR",
        "optionC": "Administration of IV atropine 1 mg",
        "optionD": "Immediate transcutaneous cardiac pacing",
        "correctAnswer": "B",
        "explanation": "Ventricular fibrillation is a pulseless, chaotic rhythm whose definitive treatment is prompt unsynchronized electrical defibrillation paired with immediate chest compressions."
    },
    {
        "question": "Which clinical assessment sign indicates right-sided heart failure rather than left-sided heart failure?",
        "optionA": "Pulmonary crackles (rales) and orthopnea",
        "optionB": "Jugular venous distention (JVD), peripheral dependent edema, and hepatomegaly",
        "optionC": "Hemoptysis and paroxysmal nocturnal dyspnea",
        "optionD": "S3 ventricular gallop with pulmonary edema",
        "correctAnswer": "B",
        "explanation": "Right-sided heart failure causes systemic venous congestion leading to elevated jugular venous pressure, liver enlargement, and bilateral pedal edema."
    },
    {
        "question": "In sickle cell disease, which factor is the primary trigger that induces erythrocyte sickling and vaso-occlusive crisis?",
        "optionA": "Alkalosis and hyperoxia",
        "optionB": "Hypoxia, dehydration, cold exposure, and acidosis",
        "optionC": "High carbohydrate dietary intake",
        "optionD": "Bed rest and excessive hydration",
        "correctAnswer": "B",
        "explanation": "Deoxygenation causes abnormal hemoglobin S (HbS) to polymerize into rigid, elongated filaments, deforming erythrocytes into sickle shapes and occluding microvessels."
    },
    {
        "question": "Which clinical manifestation is considered the hallmark physical sign of idiopathic thrombocytopenic purpura (ITP)?",
        "optionA": "Hemarthrosis and severe joint deformity",
        "optionB": "Petechiae, purpura, and mucosal bleeding with low platelet count",
        "optionC": "Marked splenomegaly with leukocytosis",
        "optionD": "Cyanosis of the peripheral digits",
        "correctAnswer": "B",
        "explanation": "ITP is characterized by autoimmune platelet destruction leading to severe thrombocytopenia (<100,000/uL), producing pinpoint petechial hemorrhages and ecchymoses."
    },
    # --- Respiratory Nursing ---
    {
        "question": "A client with acute severe asthma exacerbation is receiving nebulized salbutamol (albuterol). The nurse recognizes that salbutamol works by:",
        "optionA": "Blocking muscarinic cholinergic receptors",
        "optionB": "Stimulating beta-2 adrenergic receptors to relax bronchial smooth muscle",
        "optionC": "Inhibiting phosphodiesterase enzyme in mast cells",
        "optionD": "Antagonizing leukotriene D4 receptors",
        "correctAnswer": "B",
        "explanation": "Salbutamol is a selective short-acting beta-2 agonist (SABA) that increases intracellular cyclic AMP, resulting in rapid relaxation of bronchial smooth muscle and bronchodilation."
    },
    {
        "question": "What is the primary physiological drive for respiration in a client with end-stage chronic obstructive pulmonary disease (COPD) with chronic hypercapnia?",
        "optionA": "Elevated arterial carbon dioxide tension (PaCO2)",
        "optionB": "Hypoxemia (low arterial oxygen tension, PaO2) acting on carotid and aortic chemoreceptors",
        "optionC": "Elevated arterial pH",
        "optionD": "Low serum bicarbonate level",
        "correctAnswer": "B",
        "explanation": "In chronic CO2 retainers, central medullary chemoreceptors become desensitized to high PaCO2, leaving peripheral chemoreceptor hypoxic drive as the primary stimulus to breathe."
    },
    {
        "question": "When auscultating the lungs of a client with lobar bacterial pneumonia, which physical assessment finding is expected over the consolidated lung zone?",
        "optionA": "Hyperresonance on percussion and decreased vocal fremitus",
        "optionB": "Dullness to percussion, increased tactile fremitus, and bronchial breath sounds",
        "optionC": "Vesicular breath sounds with prolonged expiration",
        "optionD": "Tympanitic percussion notes with friction rubs",
        "correctAnswer": "B",
        "explanation": "Dense alveolar consolidation transmits sound vibrations more effectively than air-filled tissue, causing dullness to percussion, enhanced tactile fremitus, and bronchial breath sounds."
    },
    {
        "question": "A client with a chest tube drainage system for hemothorax exhibits sudden cessation of drainage and signs of respiratory distress. What should the nurse assess first?",
        "optionA": "Check the tubing for kinks, dependent loops, or blood clot obstruction",
        "optionB": "Strip the chest tube vigorously toward the drainage unit",
        "optionC": "Immediately clamp the chest tube close to the insertion site",
        "optionD": "Increase the wall suction pressure to -40 cm H2O",
        "correctAnswer": "A",
        "explanation": "The nurse must inspect the tubing for dependent loops or mechanical obstruction. Clamping or vigorous stripping is contraindicated because it generates dangerously high negative pleural pressures."
    },
    # --- Gastrointestinal & Endocrine ---
    {
        "question": "A client with a suspected perforated peptic ulcer presents to the emergency department. Which clinical finding is pathognomonic of gastrointestinal perforation and peritonitis?",
        "optionA": "Soft, nontender abdomen with hyperactive borborygmi",
        "optionB": "Sudden, severe generalized abdominal pain with board-like muscular rigidity",
        "optionC": "Painless abdominal distention with watery diarrhea",
        "optionD": "Pain radiating exclusively to the right shoulder relieved by eating",
        "correctAnswer": "B",
        "explanation": "Release of caustic gastric contents into the peritoneal cavity causes chemical peritonitis characterized by agonizing pain, reflex guarding, and board-like abdominal rigidity."
    },
    {
        "question": "Which diagnostic blood test provides the most accurate and specific marker for the diagnosis of acute pancreatitis?",
        "optionA": "Serum bilirubin",
        "optionB": "Serum lipase",
        "optionC": "Serum alkaline phosphatase",
        "optionD": "Blood urea nitrogen",
        "correctAnswer": "B",
        "explanation": "Serum lipase remains elevated longer (up to 14 days) and has greater clinical sensitivity and pancreatic specificity than serum amylase."
    },
    {
        "question": "In a client with cirrhosis who has developed bleeding esophageal varices, which vasoactive drug is infused intravenously to produce splanchnic vasoconstriction and reduce portal pressure?",
        "optionA": "Octreotide (or Terlipressin)",
        "optionB": "Dopamine",
        "optionC": "Dobutamine",
        "optionD": "Furosemide",
        "correctAnswer": "A",
        "explanation": "Octreotide is a synthetic somatostatin analog that causes selective splanchnic arterial vasoconstriction, decreasing portal inflow and variceal bleeding pressure."
    },
    {
        "question": "A client with type 1 diabetes is admitted in Diabetic Ketoacidosis (DKA). The nurse observes deep, rapid, unlabored breathing with a fruity acetone odor. This breathing pattern is:",
        "optionA": "Cheyne-Stokes respiration",
        "optionB": "Kussmaul breathing (respiratory compensation for metabolic acidosis)",
        "optionC": "Biot's respiration",
        "optionD": "Hypoventilation",
        "correctAnswer": "B",
        "explanation": "Kussmaul respirations are deep, rapid breathing movements triggered by medullary chemoreceptors to blow off volatile carbonic acid (CO2) in severe metabolic acidosis."
    },
    {
        "question": "In managing severe Diabetic Ketoacidosis (DKA), which type of insulin is administered intravenously via continuous infusion?",
        "optionA": "Insulin glargine (Lantus)",
        "optionB": "Regular insulin (Short-acting)",
        "optionC": "NPH insulin (Intermediate-acting)",
        "optionD": "Insulin detemir (Levemir)",
        "correctAnswer": "B",
        "explanation": "Regular insulin is the only conventional insulin formulation approved for intravenous infusion because of its rapid clearance and titratability."
    },
    {
        "question": "Which physical finding in a client with hyperthyroidism (Graves' disease) requires specialized ocular care to prevent corneal ulceration?",
        "optionA": "Ptosis",
        "optionB": "Exophthalmos (proptosis) with incomplete eyelid closure (lagophthalmos)",
        "optionC": "Miosis",
        "optionD": "Cataracts",
        "correctAnswer": "B",
        "explanation": "Retro-orbital mucopolysaccharide deposition and lymphocytic infiltration cause proptosis; incomplete blink and lid lag leave the exposed cornea vulnerable to desiccation and ulceration."
    },
    # --- Neurology & Musculoskeletal ---
    {
        "question": "A client with a closed head injury has an intracranial pressure (ICP) monitoring bolt. The nurse knows that normal resting ICP in adults ranges between:",
        "optionA": "0 to 5 mmHg",
        "optionB": "5 to 15 mmHg",
        "optionC": "20 to 30 mmHg",
        "optionD": "35 to 50 mmHg",
        "correctAnswer": "B",
        "explanation": "Normal physiological intracranial pressure in a supine resting adult is 5 to 15 mmHg; sustained pressures exceeding 20 mmHg warrant active clinical intervention."
    },
    {
        "question": "Cushing's triad is a late, ominous neurological indicator of impending brain herniation caused by severely increased ICP. The triad consists of:",
        "optionA": "Tachycardia, tachypnea, and hypotension",
        "optionB": "Systolic hypertension with widening pulse pressure, bradycardia, and irregular respirations",
        "optionC": "Hypotension, tachycardia, and hyperthermia",
        "optionD": "Narrow pulse pressure, hyperventilation, and pupillary constriction",
        "correctAnswer": "B",
        "explanation": "Cushing's response is a sympathetic brainstem reflex characterized by progressive systolic hypertension, widening pulse pressure, reflex bradycardia, and bradypnea/irregular breathing."
    },
    {
        "question": "In assessing a client for meningeal irritation, the nurse flexes the client's neck forward toward the chest, which elicits involuntary flexion of the hips and knees. This positive sign is:",
        "optionA": "Kernig's sign",
        "optionB": "Brudzinski's sign",
        "optionC": "Babinski's sign",
        "optionD": "Chvostek's sign",
        "correctAnswer": "B",
        "explanation": "Brudzinski's neck sign is positive when passive neck flexion stretches irritated meninges, provoking reflex defensive flexion of the lower extremities at the hips and knees."
    },
    {
        "question": "A client with a complete spinal cord transection at T4 is at risk for Autonomic Dysreflexia (Hyperreflexia). The most common triggering stimulus for this hypertensive emergency is:",
        "optionA": "Sudden exposure to cold air",
        "optionB": "Bladder distention or fecal impaction below the level of the injury",
        "optionC": "Excessive oral fluid intake",
        "optionD": "Deep tendon reflex testing",
        "correctAnswer": "B",
        "explanation": "Noxious visceral stimulation (most frequently an overdistended bladder or impacted rectum) triggers uninhibited sympathetic discharge below the lesion, causing severe malignant hypertension."
    },
    {
        "question": "When assessing a client with rheumatoid arthritis, which characteristic deformity involves hyperextension of the proximal interphalangeal (PIP) joint with flexion of the distal interphalangeal (DIP) joint?",
        "optionA": "Boutonniere deformity",
        "optionB": "Swan-neck deformity",
        "optionC": "Heberden's node",
        "optionD": "Bouchard's node",
        "correctAnswer": "B",
        "explanation": "Swan-neck deformity is marked by hyperextension of the PIP joint combined with flexion of the DIP joint due to chronic synovial inflammation and tendon contracture."
    },
    # --- Maternal & Child Health ---
    {
        "question": "Which maternal pelvic shape is anatomically the most favorable and common for spontaneous vertex vaginal delivery?",
        "optionA": "Android pelvis",
        "optionB": "Gynecoid pelvis",
        "optionC": "Anthropoid pelvis",
        "optionD": "Platypelloid pelvis",
        "correctAnswer": "B",
        "explanation": "The gynecoid pelvis has a rounded inlet, wide transverse diameter, blunt ischial spines, and a wide subpubic arch, making it optimal for fetal head engagement and descent."
    },
    {
        "question": "A pregnant woman who is Rh-negative delivers an Rh-positive term infant. To prevent Rh isoimmunization in future pregnancies, Rho(D) immune globulin (RhoGAM) must be administered within:",
        "optionA": "12 hours after birth",
        "optionB": "72 hours after birth",
        "optionC": "7 days after birth",
        "optionD": "1 month after birth",
        "correctAnswer": "B",
        "explanation": "Rho(D) immune globulin destroys fetal Rh-positive red cells entering maternal circulation before the maternal immune system can develop anti-D antibodies; it must be administered within 72 hours."
    },
    {
        "question": "Which stage of labor commences with the complete effacement and dilation of the cervix (10 cm) and terminates with the birth of the baby?",
        "optionA": "First stage of labor",
        "optionB": "Second stage of labor",
        "optionC": "Third stage of labor",
        "optionD": "Fourth stage of labor",
        "correctAnswer": "B",
        "explanation": "The second stage of labor is the stage of fetal expulsion, beginning at full cervical dilation (10 cm) and concluding when the neonate is completely delivered."
    },
    {
        "question": "During active labor, a client's fetal heart monitor demonstrates sudden, deep V-shaped decelerations that are unrelated to contractions. The nurse interprets these as:",
        "optionA": "Early decelerations due to fetal head compression",
        "optionB": "Variable decelerations caused by umbilical cord compression",
        "optionC": "Late decelerations indicative of uteroplacental insufficiency",
        "optionD": "Normal accelerations showing fetal movement",
        "correctAnswer": "B",
        "explanation": "Variable decelerations are characterized by abrupt decrease and recovery (V or W shaped) and reflect transient umbilical cord compression; maternal repositioning is the first action."
    },
    {
        "question": "What is the primary medication administered to accelerate fetal lung maturation and stimulate surfactant synthesis in threatened preterm labor between 24 and 34 weeks?",
        "optionA": "Intramuscular Betamethasone (or Dexamethasone)",
        "optionB": "Intravenous Oxytocin",
        "optionC": "Oral Terbutaline",
        "optionD": "Intramuscular Ergometrine",
        "correctAnswer": "A",
        "explanation": "Antenatal corticosteroids stimulate alveolar type II cells to produce surfactant, significantly reducing the incidence of neonatal Respiratory Distress Syndrome (RDS) and intraventricular hemorrhage."
    },
    # --- Pediatrics ---
    {
        "question": "In an infant with suspected Hirschsprung's disease (congenital aganglionic megacolon), which clinical manifestation is typically observed during the neonatal period?",
        "optionA": "Passage of copious frothy stools within 6 hours",
        "optionB": "Failure to pass meconium within the first 24 to 48 hours of life, accompanied by abdominal distention and bilious vomiting",
        "optionC": "Currant jelly stools with sausage-shaped abdominal mass",
        "optionD": "Projectile non-bilious vomiting immediately after feedings",
        "correctAnswer": "B",
        "explanation": "Absence of autonomic ganglion cells in the distal colon prevents peristaltic relaxation, causing functional mechanical bowel obstruction and failure to pass meconium."
    },
    {
        "question": "A 6-month-old infant is brought to the clinic with sudden paroxysms of colicky abdominal pain, drawing up of the knees, and passage of red 'currant jelly' stools. These findings are classic for:",
        "optionA": "Pyloric stenosis",
        "optionB": "Intussusception",
        "optionC": "Gastroenteritis",
        "optionD": "Celiac disease",
        "correctAnswer": "B",
        "explanation": "Intussusception involves invagination (telescoping) of one segment of bowel into an adjacent segment, producing venous stasis, mucosal ischemia, and classic bloody mucus 'currant jelly' stools."
    },
    {
        "question": "In an infant diagnosed with hypertrophic pyloric stenosis, the nurse would expect to assess which cardinal sign?",
        "optionA": "Projectile non-bilious vomiting shortly after feeding and an olive-shaped mass in the epigastrium",
        "optionB": "Bile-stained vomitus with diarrhea",
        "optionC": "Severe flatulence with rectal prolapse",
        "optionD": "Constant fever and hematochezia",
        "correctAnswer": "A",
        "explanation": "Hypertrophy of the circular pyloric sphincter muscle obstructs gastric emptying, resulting in forceful projectile vomiting of uncurdled/curdled milk without bile and a palpable olive mass."
    },
    {
        "question": "At which developmental age does a normal child typically master the ability to walk independently without support?",
        "optionA": "6 to 8 months",
        "optionB": "12 to 15 months",
        "optionC": "20 to 24 months",
        "optionD": "30 to 36 months",
        "correctAnswer": "B",
        "explanation": "Most healthy infants stand independently around 11 to 12 months and walk independently between 12 and 15 months of age."
    },
    {
        "question": "Which congenital cardiac malformation is characterized by the four classic anatomical defects: ventricular septal defect (VSD), pulmonic stenosis, overriding aorta, and right ventricular hypertrophy?",
        "optionA": "Transposition of the great arteries",
        "optionB": "Tetralogy of Fallot",
        "optionC": "Coarctation of the aorta",
        "optionD": "Tricuspid atresia",
        "correctAnswer": "B",
        "explanation": "Tetralogy of Fallot is the most common cyanotic congenital heart defect, defined anatomically by this specific constellation of four lesions."
    },
    # --- Mental Health & Psychiatry ---
    {
        "question": "A client diagnosed with major depressive disorder is prescribed a selective serotonin reuptake inhibitor (SSRI), sertraline. The nurse educates the client that therapeutic antidepressant effects typically require:",
        "optionA": "24 to 48 hours",
        "optionB": "2 to 4 weeks of consistent administration",
        "optionC": "3 to 6 months",
        "optionD": "Immediate relief after the first dose",
        "correctAnswer": "B",
        "explanation": "Although synaptic reuptake inhibition occurs quickly, adaptive neuroreceptor remodeling and therapeutic clinical improvement in mood require 2 to 4 weeks."
    },
    {
        "question": "Which psychiatric condition is characterized by cyclic oscillations between episodes of severe clinical depression and periods of grandiosity, hyperverbosity, decreased need for sleep, and impulsivity (mania)?",
        "optionA": "Major depressive disorder",
        "optionB": "Bipolar I disorder",
        "optionC": "Schizotypal personality disorder",
        "optionD": "Generalized anxiety disorder",
        "correctAnswer": "B",
        "explanation": "Bipolar I disorder is diagnosed when a client experiences at least one manic episode, typically alternating with major depressive episodes."
    },
    {
        "question": "A patient with severe obsessive-compulsive disorder (OCD) spends 2 hours repeatedly washing their hands before eating. When planning initial nursing interventions, the nurse should:",
        "optionA": "Physically lock the bathroom door to stop the ritual abruptly",
        "optionB": "Allow initial time for the ritual while gradually setting structured limits and teaching alternative coping techniques",
        "optionC": "Tell the patient that the behavior is illogical and forbidden",
        "optionD": "Ignore the handwashing completely",
        "correctAnswer": "B",
        "explanation": "Abruptly preventing compulsive rituals generates acute overwhelming anxiety; initially allowing time while collaborating on gradual desensitization and boundary setting is therapeutic."
    },
    {
        "question": "Which screening questionnaire is widely utilized in clinical practice to screen for alcohol use disorder and problem drinking using four concise questions?",
        "optionA": "MMSE (Mini-Mental State Exam)",
        "optionB": "CAGE questionnaire (Cut down, Annoyed, Guilty, Eye-opener)",
        "optionC": "APGAR questionnaire",
        "optionD": "Glasgow Coma Scale",
        "correctAnswer": "B",
        "explanation": "The CAGE questionnaire assesses four core aspects: feeling the need to Cut down, Annoyance at criticism, Guilt about drinking, and needing an Eye-opener drink in the morning."
    },
    {
        "question": "In psychiatric triage, which client statement indicates the highest immediate risk for completed suicide?",
        "optionA": "'I sometimes feel like running away for a while.'",
        "optionB": "'I have a loaded gun in my closet and I plan to end my life tonight when my family leaves.'",
        "optionC": "'I wish my workload was lighter.'",
        "optionD": "'Life is difficult, but I have to care for my children.'",
        "correctAnswer": "B",
        "explanation": "A lethal plan, accessible means (firearm), specific timeframe, and high intent indicate immediate, acute suicide risk requiring continuous 1:1 suicide observation."
    },
    # --- Community Health & Public Health ---
    {
        "question": "The transmission of Vibrio cholerae in epidemic cholera outbreaks occurs primarily through which route?",
        "optionA": "Inhalation of respiratory aerosols",
        "optionB": "Ingestion of water or food contaminated with feces of an infected person (fecal-oral route)",
        "optionC": "Bite of infected female sandflies",
        "optionD": "Direct penetration through intact skin while walking barefoot",
        "correctAnswer": "B",
        "explanation": "Cholera is an acute diarrheal illness caused by infection of the intestine with Vibrio cholerae through the consumption of contaminated water or food in poor sanitation settings."
    },
    {
        "question": "In the cold chain maintenance for vaccines, what is the standard recommended storage temperature range for routine childhood vaccines in refrigerators?",
        "optionA": "-20 degrees to -10 degrees Celsius",
        "optionB": "+2 degrees to +8 degrees Celsius",
        "optionC": "+15 degrees to +25 degrees Celsius",
        "optionD": "0 degrees Celsius exactly",
        "correctAnswer": "B",
        "explanation": "The global standard cold chain temperature for maintaining vaccine potency in health facility refrigerators is strictly between +2C and +8C."
    },
    {
        "question": "Which epidemiological indicator represents the number of new cases of a specific disease that develop in a population at risk during a specified period of time?",
        "optionA": "Prevalence rate",
        "optionB": "Incidence rate",
        "optionC": "Case fatality rate",
        "optionD": "Attack rate",
        "correctAnswer": "B",
        "explanation": "Incidence measures the rate of new disease occurrence over time, whereas prevalence reflects the total proportion of existing cases (both old and new) in a population."
    },
    {
        "question": "The primary vector responsible for the transmission of Yellow Fever and Dengue viruses in urban and peri-urban environments is:",
        "optionA": "Anopheles gambiae",
        "optionB": "Aedes aegypti",
        "optionC": "Culex quinquefasciatus",
        "optionD": "Mansonia africana",
        "correctAnswer": "B",
        "explanation": "Aedes aegypti mosquitoes breed in domestic artificial water containers and bite during daylight hours, transmitting yellow fever, dengue, chikungunya, and Zika viruses."
    },
    {
        "question": "In occupational health nursing, which chronic progressive pulmonary fibrotic disease is caused by the inhalation of crystalline free silica dust in miners and quarry workers?",
        "optionA": "Byssinosis",
        "optionB": "Silicosis",
        "optionC": "Bagassosis",
        "optionD": "Asbestosis",
        "correctAnswer": "B",
        "explanation": "Silicosis is a nodular fibrosing pneumoconiosis caused by long-term inhalation of respirable crystalline silicon dioxide (silica) dust in mining and stonemasonry."
    },
    # --- Pharmacology & Nursing Process ---
    {
        "question": "Which drug classification does lisinopril belong to, and what is a prominent class-effect adverse reaction mediated by bradykinin accumulation?",
        "optionA": "Beta-blocker; causes bronchospasm",
        "optionB": "Angiotensin-Converting Enzyme (ACE) inhibitor; causes dry, persistent nonproductive cough and angioedema",
        "optionC": "Calcium channel blocker; causes gingival hyperplasia",
        "optionD": "Thiazide diuretic; causes hyperkalemia",
        "correctAnswer": "B",
        "explanation": "ACE inhibitors prevent the breakdown of bradykinin and substance P in the respiratory tract, causing a persistent dry cough in 10-20% of patients and potential angioedema."
    },
    {
        "question": "A patient receiving vancomycin IV develops erythema, flushing of the face and upper torso, and hypotension during rapid infusion. The nurse recognizes this as:",
        "optionA": "IgE-mediated severe anaphylaxis",
        "optionB": "Red Man Syndrome caused by non-immune histamine release from rapid infusion",
        "optionC": "Toxic epidermal necrolysis",
        "optionD": "Stevens-Johnson syndrome",
        "correctAnswer": "B",
        "explanation": "Red Man Syndrome is an adverse rate-related reaction caused by rapid degranulation of mast cells; slowing the infusion rate to over 60-120 minutes resolves and prevents it."
    },
    {
        "question": "When administering oral iron supplements (ferrous sulfate) to a client with iron-deficiency anemia, which beverage enhances intestinal iron absorption?",
        "optionA": "Whole milk",
        "optionB": "Orange juice (Vitamin C / Ascorbic acid)",
        "optionC": "Black tea",
        "optionD": "Hot coffee",
        "correctAnswer": "B",
        "explanation": "Ascorbic acid (vitamin C) reduces ferric iron (Fe3+) to the more soluble ferrous form (Fe2+), significantly enhancing duodenal iron uptake."
    },
    {
        "question": "The Five Rights of medication administration traditionally include the Right Patient, Right Drug, Right Dose, Right Route, and:",
        "optionA": "Right Hospital",
        "optionB": "Right Time",
        "optionC": "Right Pharmacy",
        "optionD": "Right Physician",
        "correctAnswer": "B",
        "explanation": "The traditional Five Rights of safe medication administration are: Right Patient, Right Drug, Right Dose, Right Route, and Right Time."
    },
    {
        "question": "What is the primary objective of applying a warm, moist compress to an area of localized peripheral cellulitis?",
        "optionA": "To cause local vasoconstriction and decrease cellular metabolism",
        "optionB": "To promote local vasodilation, increase capillary blood flow, and enhance phagocyte delivery",
        "optionC": "To freeze bacterial enzyme activity",
        "optionD": "To dehydrate the underlying subcutaneous tissue",
        "correctAnswer": "B",
        "explanation": "Heat application induces arteriolar vasodilation, increasing oxygen, nutrient, and leukocyte delivery to promote resolution of infection and tissue repair."
    }
]

print(f"Loaded {len(CURRICULUM_QUESTIONS)} curriculum questions")
