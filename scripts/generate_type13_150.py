# Generator for 150 unique, multi-course questions for Type 13
import json, re

# Load all 1800 used questions from Types 1-12
with open('scripts/types1_to_9_questions.json') as f:
    t1_to_9 = json.load(f)

already_used = set()
for k in t1_to_9:
    for item in t1_to_9[k]:
        already_used.add(re.sub(r'\s+', ' ', item['question'].strip().lower()))

def add_file_to_used(path):
    with open(path) as f:
        matches = re.findall(r'question:\s*\"(.*?)\"', f.read())
    for q in matches:
        already_used.add(re.sub(r'\s+', ' ', q.strip().lower()))

add_file_to_used('src/data/type10Questions.ts')
add_file_to_used('src/data/type11Questions.ts')
add_file_to_used('src/data/type12Questions.ts')

print('Total already used questions in Types 1-12:', len(already_used))

type13_questions = []

def add(q, a, b, c, d, ans, exp):
    norm = re.sub(r'\s+', ' ', q.strip().lower())
    if norm in already_used:
        print("WARNING: Duplicate in T13:", q[:50])
        return
    for item in type13_questions:
        if re.sub(r'\s+', ' ', item['question'].strip().lower()) == norm:
            print("WARNING: Intra-duplicate in T13:", q[:50])
            return
    type13_questions.append({
        "question": q,
        "optionA": a,
        "optionB": b,
        "optionC": c,
        "optionD": d,
        "correctAnswer": ans,
        "explanation": exp
    })

# 150 Multi-Course Questions for Type 13
# 1. Anatomy & Physiology
add("Which structure of the internal ear contains the sensory receptors responsible for static equilibrium and linear acceleration?",
    "Semicircular ducts", "Utricle and saccule in the vestibule (maculae)", "Cochlear duct", "Tympanic cavity",
    "B", "The maculae in the utricle and saccule contain hair cells embedded in an otolithic membrane that detect gravitational pull and linear acceleration.")

add("Dynamic angular rotational acceleration of the head in three-dimensional space is sensed by hair cells located in the:",
    "Crista ampullaris within the ampullae of the semicircular canals", "Organ of Corti", "Scala vestibuli", "Helicotrema",
    "A", "Endolymph movement within the three semicircular ducts deflects the gelatinous cupula of the crista ampullaris during head rotation.")

add("The primary function of the Eustachian tube is to:",
    "Transmit auditory vibrations to the stapes",
    "Equalize air pressure between the middle ear cavity and ambient atmospheric pressure in the nasopharynx",
    "Secrete endolymph into the cochlea",
    "Protect the external auditory canal from cerumen",
    "B", "Swallowing or yawning opens the Eustachian tube, permitting air exchange with the nasopharynx to maintain equal pressure across the eardrum.")

add("Which cranial nerve carries special sensory taste sensations from the anterior two-thirds of the tongue?",
    "Trigeminal nerve (CN V)", "Facial nerve (CN VII via chorda tympani)", "Glossopharyngeal nerve (CN IX)", "Vagus nerve (CN X)",
    "B", "The chorda tympani branch of CN VII conveys taste from the anterior two-thirds of the tongue, whereas CN IX innervates the posterior one-third.")

add("General somatic sensation (pain, touch, temperature) from the anterior two-thirds of the tongue is transmitted by the:",
    "Lingual nerve (branch of mandibular division of trigeminal nerve, CN V3)", "Hypoglossal nerve (CN XII)", "Facial nerve", "Glossopharyngeal nerve",
    "A", "The lingual nerve provides general somatic sensation to the anterior tongue, while CN VII provides taste sensation.")

add("All intrinsic and extrinsic muscles of the tongue (except palatoglossus) are motor-innervated by:",
    "Cranial Nerve IX", "Cranial Nerve XII (Hypoglossal nerve)", "Cranial Nerve VII", "Cranial Nerve V",
    "B", "The hypoglossal nerve (CN XII) provides motor supply to the genioglossus, hyoglossus, styloglossus, and intrinsic lingual muscle fibers.")

add("The cranial nerve that innervates the superior oblique extrinsic muscle of the eye, directing gaze downward and inward, is the:",
    "Oculomotor nerve (CN III)", "Trochlear nerve (CN IV)", "Abducens nerve (CN VI)", "Optic nerve (CN II)",
    "B", "CN IV innervates the superior oblique muscle exclusively, enabling intorsion, depression, and abduction of the eyeball.")

add("Which cranial nerve mediates the sensory afferent limb of the corneal blink reflex when the cornea is lightly touched with cotton?",
    "Facial nerve (CN VII)", "Trigeminal nerve (Ophthalmic division, CN V1)", "Optic nerve (CN II)", "Oculomotor nerve (CN III)",
    "B", "The ophthalmic division of CN V carries the afferent sensory impulse of the corneal reflex, while the temporal branch of CN VII executes the motor blink.")

add("The motor efferent limb of the corneal reflex that closes the eyelids via the orbicularis oculi muscle is mediated by:",
    "Cranial Nerve III", "Cranial Nerve VII (Facial nerve)", "Cranial Nerve V", "Cranial Nerve VI",
    "B", "The facial nerve supplies the orbicularis oculi muscle, which contracts to close the palpebral fissure when the cornea is stimulated.")

add("Which endocrine gland is located in the anterior neck overlying the 2nd to 4th tracheal rings and consists of two lateral lobes joined by an isthmus?",
    "Parathyroid gland", "Thyroid gland", "Thymus gland", "Pituitary gland",
    "B", "The thyroid gland weighs 15 to 25 grams in adults and wraps around the anterior and lateral aspects of the cervical trachea.")

add("Thyroid follicular epithelial cells synthesize thyroglobulin and store thyroid hormones in extracellular lumen compartments called:",
    "Cysts", "Thyroid follicles filled with homogeneous colloid", "Canaliculi", "Lacteals",
    "B", "Colloid is an amber-colored gelatinous proteinaceous store consisting predominantly of iodinated thyroglobulin.")

add("The four small, pea-sized parathyroid glands are anatomically embedded on the:",
    "Anterior surface of the thyroid cartilage",
    "Posterior capsule of the right and left thyroid lobes",
    "Superior mediastinum behind the sternum",
    "Carotid sheath",
    "B", "Two superior and two inferior parathyroid glands adhere to the posterior fascial sheath of the thyroid gland.")

add("The adrenal (suprarenal) glands are retroperitoneal endocrine organs situated anatomically on the:",
    "Inferior poles of the kidneys",
    "Superior poles (crests) of each kidney",
    "Lateral border of the psoas major",
    "Posterior wall of the stomach",
    "B", "Each adrenal gland sits atop the superior pole of the corresponding kidney, surrounded by perirenal fat within Gerota's fascia.")

add("The adrenal cortex originates embryologically from mesoderm and comprises three concentric histological zones:",
    "Medulla, cortex, and capsule",
    "Zona glomerulosa, zona fasciculata, and zona reticularis",
    "Alpha, beta, and delta zones",
    "White pulp, red pulp, and marginal zone",
    "B", "From exterior to interior: zona glomerulosa (mineralocorticoids), zona fasciculata (glucocorticoids), and zona reticularis (adrenal androgens).")

add("Which zone of the adrenal cortex constitutes approximately 75% of the total cortical volume and secretes cortisol?",
    "Zona glomerulosa", "Zona fasciculata", "Zona reticularis", "Chromaffin zone",
    "B", "The zona fasciculata contains lipid-rich clear cells (spongiocytes) arranged in parallel cords, synthesizing cortisol under ACTH control.")

# 2. Medical-Surgical Nursing (Clinical cases & pathophysiology)
add("A client presents to the emergency room with acute pulmonary edema. The nurse expects to auscultate which characteristic respiratory adventitious sounds?",
    "Inspiratory stridor over the trachea",
    "Bilateral diffuse coarse bubbling crackles (rales) and wheezes heard at both lung bases and mid-zones",
    "Pleural friction rub",
    "Decreased resonance with bronchial breathing",
    "B", "Elevated pulmonary capillary hydrostatic pressure forces transudative serosanguineous fluid into alveoli and small airways, causing wet crackles and pink frothy sputum.")

add("Which position should the nurse place a client in who is in acute pulmonary edema to reduce venous return and optimize diaphragm excursion?",
    "Sims' lateral position",
    "High Fowler's position with legs dangling over the edge of the bed",
    "Trendelenburg position",
    "Prone position",
    "B", "High Fowler's with legs dangling traps blood in dependent lower extremity veins, reducing venous preload to the overburdened left ventricle.")

add("In a client with suspected deep vein thrombosis (DVT), which definitive non-invasive vascular imaging modality is the diagnostic gold standard?",
    "Magnetic resonance angiography",
    "Venous compression duplex ultrasound (Doppler ultrasonography)",
    "Contrast venography",
    "Arterial blood gas analysis",
    "B", "Duplex ultrasonography combines B-mode anatomic imaging with pulsed-wave Doppler flow analysis, demonstrating non-compressibility of thrombosed veins.")

add("Which clinical triad of Virchow describes the fundamental pathophysiological factors predisposing an individual to venous thrombosis?",
    "Hypertension, hyperlipidemia, and diabetes",
    "Endothelial vessel wall injury, stasis of blood flow, and systemic hypercoagulability",
    "Fever, tachycardia, and leukocytosis",
    "Hypoxia, acidosis, and hypothermia",
    "B", "Virchow's triad encompasses vascular endothelial damage, altered venous blood flow (stasis/immobility), and hypercoagulable states.")

add("A client receiving intravenous heparin therapy develops sudden acute thrombocytopenia (platelet count drops from 280,000 to 65,000/uL). The nurse suspects:",
    "Immune thrombocytopenic purpura",
    "Heparin-Induced Thrombocytopenia (HIT Type II, an immune-mediated prothrombotic emergency)",
    "Normal physiological heparin response",
    "Aplastic anemia",
    "B", "HIT Type II is an IgG-mediated reaction against heparin-platelet factor 4 complexes, causing paradoxical catastrophic venous and arterial thrombosis.")

add("What is the immediate nursing action when Heparin-Induced Thrombocytopenia (HIT) is diagnosed or strongly suspected?",
    "Increase the heparin infusion rate",
    "Discontinue all unfractionated and low-molecular-weight heparin immediately and start an alternative non-heparin anticoagulant (such as argatroban)",
    "Administer a platelet transfusion",
    "Give intramuscular vitamin K",
    "B", "All forms of heparin must be discontinued instantly; platelet transfusions are contraindicated as they provide substrate for further thrombosis.")

add("Which electrocardiographic rhythm is characterized by absent P waves, an irregularly irregular baseline of fibrillatory f-waves, and an unpredictable ventricular rate?",
    "Sinus bradycardia",
    "Atrial fibrillation",
    "First-degree AV block",
    "Ventricular tachycardia",
    "B", "Atrial fibrillation involves chaotic atrial electrical firing at 350-600 impulses/min; variable AV conduction causes a completely irregular ventricular response.")

add("In atrial fibrillation, what is the most devastating long-term systemic embolic complication that prophylactic anticoagulation aims to prevent?",
    "Deep vein thrombosis",
    "Ischemic cardioembolic stroke (cerebrovascular accident)",
    "Myocardial rupture",
    "Renal vein thrombosis",
    "B", "Loss of effective atrial mechanical kick promotes blood stasis and mural thrombus formation in the left atrial appendage, predisposing to embolic stroke.")

add("A client presents with acute onset of severe, tearing, retrosternal chest pain radiating between the shoulder blades to the back, with unequal blood pressure in both arms. This suggests:",
    "Acute pericarditis",
    "Acute aortic dissection",
    "Gastroesophageal reflux",
    "Costochondritis",
    "B", "Aortic dissection involves a tear in the aortic intima allowing blood to track down the media; tearing interscapular pain and unequal brachial pressures are classic.")

add("Which clinical test is performed at the bedside by having a seated client lean forward while auscultating with the stethoscope diaphragm at the left lower sternal border to hear a friction rub?",
    "Auscultation for pericardial friction rub in acute pericarditis",
    "Auscultation for mitral stenosis",
    "Auscultation for aortic regurgitation",
    "Measurement of blood pressure",
    "A", "Leaning forward brings the inflamed visceral and parietal pericardial layers closer to the anterior chest wall, amplifying the scratchy tripartite friction rub.")

add("A client presenting with classic Beck's triad of cardiac tamponade will exhibit:",
    "Hypertension, bounding pulse, and clear lungs",
    "Hypotension, distended jugular veins (JVD), and muffled or distant heart sounds",
    "Bradycardia, bradypnea, and wide pulse pressure",
    "Hyperactive reflexes, fever, and stridor",
    "B", "Pericardial fluid under high pressure restricts ventricular filling; Beck's triad includes systemic hypotension, jugular venous congestion, and muffled heart sounds.")

add("Pulsus paradoxus is a cardinal diagnostic sign of cardiac tamponade and severe asthma, defined as:",
    "An abnormally large decrease in systolic blood pressure (>10 mmHg) during normal inspiration",
    "A pulse that alternates in strength between strong and weak beats",
    "A pulse that disappears on expiration",
    "A pulse rate above 180 bpm",
    "A", "Inspiratory expansion of the right ventricle within a non-distensible pericardial sac compresses the left ventricle, causing systolic pressure to drop >10 mmHg on inspiration.")

add("Which emergency bedside surgical procedure is performed to aspirate pericardial fluid and relieve fatal hemodynamic collapse in cardiac tamponade?",
    "Thoracentesis",
    "Pericardiocentesis (subxiphoid needle decompression of the pericardial sac)",
    "Cricothyroidotomy",
    "Paracentesis",
    "B", "Inserting an 18-gauge spinal needle subxiphoidally at a 45-degree angle toward the left shoulder aspirates fluid, instantly decompressing the tamponaded heart.")

add("A client admitted with acute pancreatitis exhibits blue-purple ecchymosis of the bilateral flank areas. This physical finding is documented as:",
    "Cullen's sign",
    "Grey Turner's sign",
    "Trousseau's sign",
    "Chvostek's sign",
    "B", "Grey Turner's sign indicates retroperitoneal tracking of blood-stained enzymatic exudate along fascial planes to the subcutaneous flank tissues.")

add("Periumbilical bluish ecchymosis in acute hemorrhagic pancreatitis is known as:",
    "Grey Turner's sign",
    "Cullen's sign",
    "Murphy's sign",
    "Blumberg's sign",
    "B", "Cullen's sign is periumbilical discoloration caused by retroperitoneal hemorrhage leaking through the gastrohepatic and falciform ligaments.")

# 3. Maternal & Child Health / Midwifery
add("Which maternal serum screening test performed in the second trimester evaluates the risk of fetal open neural tube defects (such as spina bifida)?",
    "Maternal Serum Alpha-Fetoprotein (MSAFP)",
    "Serum human chorionic gonadotropin alone",
    "Blood glucose tolerance test",
    "Direct Coombs test",
    "A", "Elevated MSAFP levels at 15 to 20 weeks gestation suggest fetal open neural tube defects (anencephaly, spina bifida) or abdominal wall defects.")

add("A low level of Maternal Serum Alpha-Fetoprotein (MSAFP) in the second trimester is associated with an increased statistical risk of:",
    "Spina bifida",
    "Fetal chromosomal aneuploidies, particularly Down syndrome (Trisomy 21)",
    "Congenital heart disease",
    "Gestational diabetes",
    "B", "Subnormal MSAFP concentrations in combination with elevated hCG and low unconjugated estriol (triple screen) indicate elevated risk for Down syndrome.")

add("Which laboratory blood test is performed on maternal blood at the initial prenatal visit to detect circulating anti-Rh (anti-D) antibodies in an Rh-negative mother?",
    "Direct Coombs test",
    "Indirect Coombs test (Indirect Antiglobulin Test)",
    "Widal test",
    "VDRL test",
    "B", "The indirect Coombs test screens maternal serum for circulating unbound antibodies against Rh(D) antigens on fetal red blood cells.")

add("The Direct Coombs test is performed on which tissue to detect maternal antibodies already bound to the surface of red blood cells?",
    "Maternal venous serum",
    "Newborn cord blood or infant red blood cells (testing for in vivo antibody sensitization)",
    "Amniotic fluid",
    "Placental tissue",
    "B", "The direct antiglobulin (Coombs) test detects antibodies or complement proteins bound directly to circulating infant erythrocytes.")

add("In evaluating fetal heart rate tracings during labor, early decelerations that mirror uterine contractions (onset at start of contraction, nadir at contraction peak) are caused by:",
    "Uteroplacental insufficiency",
    "Transient fetal head compression causing vagal nerve stimulation (a reassuring, benign finding)",
    "Umbilical cord prolapse",
    "Maternal hypotension",
    "B", "Fetal head compression during cervical descent stimulates parasympathetic vagal outflow, slowing fetal heart rate synchronously with contractions.")

add("Late decelerations on a fetal heart rate monitor (nadir occurring AFTER the peak of the uterine contraction) are an ominous sign of:",
    "Normal fetal sleep cycle",
    "Uteroplacental insufficiency and fetal hypoxia",
    "Fetal movement",
    "Rapid cervical dilation",
    "B", "Late decelerations reflect compromised placental gas exchange and fetal myocardial hypoxemia; maternal left-lateral positioning and O2 are immediate priorities.")

add("What is the initial nursing action when late decelerations are identified on the electronic fetal monitoring strip?",
    "Instruct the mother to push forcefully",
    "Reposition the mother onto her left side, administer supplemental oxygen (8-10 L/min via non-rebreather), and increase IV fluids",
    "Administer intravenous oxytocin",
    "Prepare for immediate discharge",
    "B", "Left lateral positioning relieves inferior vena cava compression, maximizing cardiac output and uterine blood flow to restore fetal oxygenation.")

add("Umbilical cord prolapse is an acute obstetric emergency where the cord slips below the presenting part. What is the nurse's immediate physical action?",
    "Push the umbilical cord back into the uterus using unsterile forceps",
    "Insert a sterile gloved hand into the vagina to manually elevate the fetal presenting part off the pulsating cord until Cesarean delivery",
    "Walk the mother around the delivery suite",
    "Clamp and cut the cord immediately inside the vagina",
    "B", "Relieving mechanical compression of the cord by manual elevation preserves fetal umbilical venous and arterial blood flow until emergency surgical birth.")

add("Which maternal knee-chest or exaggerated position utilizes gravity to shift the fetal presenting part away from the pelvis in umbilical cord prolapse?",
    "Trendelenburg or knee-chest position",
    "Lithotomy position",
    "High Fowler's position",
    "Prone position",
    "A", "The knee-chest or steep Trendelenburg position uses gravity to shift the fetus toward the diaphragm, taking pressure off the prolapsed umbilical cord.")

add("Postpartum blues ('baby blues') is a self-limiting emotional state characterized by tearfulness, mood swings, and anxiety that typically peaks around:",
    "Postpartum day 3 to 5 and resolves spontaneously within 10 to 14 days",
    "6 months postpartum",
    "1 year postpartum",
    "Immediately in the delivery room",
    "A", "Transient baby blues affects up to 80% of postpartum women, caused by precipitous drops in estrogen/progesterone; symptoms resolving by day 10-14 require no pharmacotherapy.")

add("Postpartum depression is differentiated from postpartum blues by which clinical criteria?",
    "Mild tearfulness lasting 3 days",
    "Severe, persistent depressive symptoms lasting beyond 2 weeks, accompanied by feelings of guilt, hopelessness, inability to care for the infant, or suicidal ideation",
    "Excessive attachment to the infant",
    "Immediate resolution after 24 hours of sleep",
    "B", "Postpartum depression is a disabling mood disorder that impairs maternal-infant bonding and daily functioning, requiring psychotherapy and antidepressants.")

add("Postpartum psychosis is a psychiatric emergency characterized by delusions, hallucinations, and paranoia with risk of infanticide. Its incidence is approximately:",
    "1 in 500 to 1,000 deliveries",
    "50% of all births",
    "1 in 10 deliveries",
    "1 in 100,000 deliveries",
    "A", "Postpartum psychosis occurs in 1 to 2 per 1,000 postpartum women, usually emerging within the first 2 weeks, requiring immediate psychiatric hospitalization.")

add("Which hormone maintains high resting tone in the non-pregnant uterus and relaxes smooth muscle during pregnancy to prevent preterm labor?",
    "Estrogen", "Progesterone ('hormone of pregnancy')", "Oxytocin", "Prolactin",
    "B", "Progesterone suppresses myometrial contractility, prevents immunological rejection of the trophoblast, and maintains the decidual endometrium.")

add("Human Chorionic Gonadotropin (hCG) is produced by the syncytiotrophoblast to sustain which ovarian structure during the first 8 to 10 weeks of pregnancy?",
    "Graafian follicle", "Corpus luteum (which secretes progesterone until placental takeover)", "Corpus albicans", "Primordial follicle",
    "B", "hCG rescues the corpus luteum from degradation, ensuring continuous secretion of progesterone and estrogen until the placenta assumes endocrine autonomy.")

add("Human Placental Lactogen (hPL), also known as human chorionic somatomammotropin, exerts which primary metabolic effect on maternal physiology?",
    "Lowers maternal blood glucose",
    "Acts as an insulin antagonist, increasing maternal insulin resistance to ensure adequate circulating glucose for the developing fetus",
    "Stimulates maternal thyroid hormone destruction",
    "Suppresses maternal lipolysis",
    "B", "hPL alters maternal carbohydrate and lipid metabolism, sparing glucose for transplacental transport to support rapid fetal growth.")

# 4. Pediatrics & Child Health
add("At what developmental age should a healthy infant achieve steady head control with no head lag when pulled to a sitting position?",
    "1 month", "4 months", "9 months", "12 months",
    "B", "Complete head lag disappears by 4 months of age; persistence of significant head lag at 6 months suggests developmental neuromuscular delay.")

add("An infant is expected to double their birth weight by what age?",
    "2 months", "5 to 6 months", "12 months", "24 months",
    "B", "A healthy thriving infant typically doubles their birth weight by 5 to 6 months of age and triples their birth weight by 1 year.")

add("By one year of age (12 months), a healthy child's birth weight has typically:",
    "Doubled", "Tripled", "Quadrupled", "Remained unchanged",
    "B", "Weight gain during the first year is rapid: birth weight doubles by 5-6 months and triples by 12 months (e.g., 3.2 kg at birth becomes approx. 9.6 kg).")

add("By 2 to 2.5 years of age, a child's birth weight has approximately:",
    "Doubled", "Tripled", "Quadrupled", "Quintupled",
    "C", "Birth weight typically quadruples by 24 to 30 months of age (e.g., 3.2 kg at birth becomes approx. 12.8 kg).")

add("Which developmental play pattern is typical of toddlerhood (ages 1 to 3 years), wherein children play alongside one another without active mutual cooperation?",
    "Solitary play", "Parallel play", "Associative play", "Cooperative play",
    "B", "Toddlers engage in parallel play: they play side-by-side with similar toys without interacting directly, sharing goals, or coordinating activities.")

add("Which play behavior is characteristic of preschool-age children (ages 3 to 5 years), who engage in group play with shared materials but no formal organization?",
    "Parallel play", "Associative play", "Solitary play", "Competitive organized sports",
    "B", "Preschoolers exhibit associative play: interacting, borrowing toys, and conversing without rigid division of labor or structured group rules.")

add("School-age children (ages 6 to 12 years) predominantly engage in which type of play characterized by teamwork, formal rules, and shared division of roles?",
    "Parallel play", "Cooperative play (team games and rule-based sports)", "Solitary infant play", "Onlooker play",
    "B", "Cooperative play involves organized group activities with division of labor, defined leader roles, adherence to external rules, and team collaboration.")

add("Which pediatric condition is caused by a congenital failure of the embryonic thyroglossal duct or thyroid gland development, leading to neonatal hypothyroidism?",
    "Congenital cretinism / thyroid dysgenesis",
    "Graves disease",
    "Adrenal hyperplasia",
    "Pituitary adenoma",
    "A", "Thyroid dysgenesis (athyreosis or ectopia) accounts for 85% of permanent congenital hypothyroidism, screened universally via newborn dried blood spot TSH.")

add("Phenylketonuria (PKU) is an autosomal recessive inborn error of metabolism caused by a deficiency of which hepatic enzyme?",
    "Tyrosinase", "Phenylalanine hydroxylase (PAH)", "Hexosaminidase A", "Galactokinase",
    "B", "PAH deficiency blocks the conversion of phenylalanine to tyrosine, causing neurotoxic accumulation of phenylalanine and irreversible intellectual disability.")

add("To prevent severe neurological damage in an infant diagnosed with Phenylketonuria (PKU), the infant must be placed immediately on a lifelong diet:",
    "Extremely rich in animal proteins and meats",
    "Strictly restricted in dietary phenylalanine (low-protein diet supplemented with special phenylalanine-free medical formula)",
    "Free of all dietary carbohydrates",
    "Consisting exclusively of whole cow's milk",
    "B", "Restricting dietary phenylalanine while supplementing tyrosine prevents toxic blood phenylalanine levels, permitting normal cerebral development.")

add("Galactosemia is a congenital metabolic disorder where the infant lacks galactose-1-phosphate uridyltransferase. The infant must strictly avoid:",
    "Rice and potatoes",
    "Breast milk, cow's milk, and all lactose-containing dairy products",
    "Vegetable oils",
    "Soy formulas",
    "B", "Lactose in breast milk and animal milk is hydrolyzed into glucose and galactose; accumulated galactose-1-phosphate causes cataracts, liver cirrhosis, and brain damage.")

# 5. Mental Health, Psychiatric & Behavioral Nursing
add("In cognitive-behavioral therapy (CBT), the primary premise is that emotional distress and maladaptive behaviors are directly generated by:",
    "Unconscious repressed id impulses exclusively",
    "Distorted, irrational cognitive schemas, automatic negative thoughts, and faulty cognitive appraisals",
    "Imbalances in dietary vitamins",
    "Hereditary brain shrinkage",
    "B", "CBT posits that thoughts dictate feelings and behaviors; cognitive restructuring identifies and reframes cognitive distortions (e.g., catastrophizing).")

add("Which therapeutic technique in behavior therapy gradually exposes a client to a feared phobic stimulus while maintaining deep somatic relaxation?",
    "Flooding", "Systematic desensitization", "Aversion therapy", "Thought stopping",
    "B", "Developed by Joseph Wolpe, systematic desensitization pairs relaxation training with an anxiety hierarchy, counterconditioning the phobic conditioned response.")

add("The behavioral therapy technique where a client is immediately and continuously exposed to the full-intensity anxiety-provoking stimulus until anxiety extinguishes is:",
    "Systematic desensitization", "Flooding (implosion therapy)", "Biofeedback", "Token economy",
    "B", "Flooding prevents escape or avoidance, demonstrating that panic sensations peak and naturally subside through autonomic exhaustion and extinction.")

add("A 'Token Economy' in an inpatient psychiatric rehabilitation ward is an operant conditioning behavioral system utilizing:",
    "Negative reinforcement exclusively",
    "Positive reinforcement (tokens awarded for targeted desirable behaviors that can be exchanged for privileges or rewards)",
    "Physical punishments for bad behavior",
    "Random drug administration",
    "B", "Contingent delivery of tokens for pro-social adaptive behaviors reinforces target habits via secondary conditioned reinforcers.")

add("In transactional analysis developed by Eric Berne, the three fundamental ego states that exist within each individual's personality are:",
    "Id, Ego, and Superego",
    "Parent, Adult, and Child ego states",
    "Conscious, Preconscious, and Unconscious",
    "Persona, Shadow, and Anima",
    "B", "Berne's PAC model conceptualizes communication transactions occurring between the internalized Parent (moral), Adult (logical), and Child (emotional) states.")

add("A transaction in which the communication vector sent from one person's ego state is met with an unexpected, conflicting response from an inappropriate ego state is a:",
    "Complementary transaction", "Crossed transaction", "Ulterior transaction", "Parallel transaction",
    "B", "A crossed transaction occurs when a sender addresses someone Adult-to-Adult, but the responder replies Child-to-Parent, disrupting communication.")

add("The psychological test that presents the subject with 10 standardized bilateral symmetrical inkblots to project unconscious personality dynamics is the:",
    "Thematic Apperception Test (TAT)", "Rorschach Inkblot Test", "Minnesota Multiphasic Personality Inventory (MMPI)", "Bender-Gestalt Test",
    "B", "The Rorschach projective test assesses cognitive organization, emotional functioning, and unconscious conflicts through interpretations of ambiguous inkblots.")

add("The psychological personality assessment that asks the client to invent dramatic narrative stories about ambiguous interpersonal picture cards is the:",
    "Rorschach Test", "Thematic Apperception Test (TAT)", "Sentence Completion Test", "Word Association Test",
    "B", "Developed by Henry Murray, the TAT assesses underlying needs, unconscious conflicts, and defense mechanisms revealed through invented narrative stories.")

add("A client diagnosed with Borderline Personality Disorder frequently views hospital staff as either 'all good' (idealized) or 'all bad' (devalued). This primitive defense is:",
    "Sublimation", "Splitting", "Undoing", "Reaction formation",
    "B", "Splitting is the inability to integrate positive and negative qualities of the self and others into a cohesive whole, resulting in extreme polarization.")

add("Which cluster of personality disorders in the DSM classification is characterized by dramatic, emotional, erratic, and impulsive behavior patterns?",
    "Cluster A (Odd / Eccentric: Paranoid, Schizoid, Schizotypal)",
    "Cluster B (Dramatic / Erratic: Antisocial, Borderline, Histrionic, Narcissistic)",
    "Cluster C (Anxious / Fearful: Avoidant, Dependent, Obsessive-Compulsive)",
    "Cluster D (Organic)",
    "B", "Cluster B disorders feature emotional dysregulation, dramatic presentation, interpersonal volatility, and impulsivity.")

# 6. Community Health & Public Health
add("The epidemiological measure that quantifies the total number of individuals in a specified population who have a given disease at a single specific point in time is the:",
    "Incidence rate", "Point prevalence rate", "Attack rate", "Secondary attack rate",
    "B", "Point prevalence measures existing disease burden: (Total active cases at time T / Total population at time T) x 1,000.")

add("The epidemiological measure that represents the proportion of an originally uninfected population that develops disease over a designated time interval is:",
    "Period prevalence", "Cumulative incidence (incidence risk)", "Case fatality", "Crude death rate",
    "B", "Cumulative incidence measures the risk or probability that an individual will develop a disease during a given observation period.")

add("In a sudden foodborne gastroenteritis outbreak following a community wedding banquet, the primary epidemiological rate calculated to identify the contaminated food vehicle is the:",
    "Infant mortality rate", "Food-specific attack rate", "Crude birth rate", "Case fatality rate",
    "B", "Attack rate is an incidence rate calculated for narrow epidemic periods: (Number who ate food and became ill / Total who ate that food) x 100.")

add("Which vector-borne protozoan parasite causes African Sleeping Sickness (Human African Trypanosomiasis) and is transmitted by the bite of the Glossina tsetse fly?",
    "Plasmodium falciparum", "Trypanosoma brucei (gambiense and rhodesiense)", "Leishmania donovani", "Toxoplasma gondii",
    "B", "Tsetse flies transmit Trypanosoma brucei; systemic hemolymphatic disease progresses to meningoencephalitis with reversed sleep-wake cycles and coma.")

add("Visceral Leishmaniasis (Kala-azar), characterized by irregular fever, massive splenomegaly, pancytopenia, and hypergammaglobulinemia, is transmitted by the bite of the:",
    "Blackfly (Simulium)", "Phlebotomus sandfly", "Anopheles mosquito", "Tsetse fly",
    "B", "Female Phlebotomine sandflies transmit Leishmania donovani promastigotes, which multiply intracellularly within reticuloendothelial macrophages.")

add("Lymphatic Filariasis (Elephantiasis), which causes severe lymphedema and genital hydrocele through adult worm obstruction of lymph vessels, is caused by:",
    "Wuchereria bancrofti, Brugia malayi, and Brugia timori",
    "Ascaris lumbricoides",
    "Necator americanus",
    "Strongyloides stercoralis",
    "A", "Mosquito-transmitted filarial nematodes lodge in lymphatic vessels and nodes, provoking chronic granulomatous inflammation and progressive lymphatic obstruction.")

add("The primary vector responsible for the biological transmission of Lymphatic Filariasis in urban and semi-urban African settings is the:",
    "Culex quinquefasciatus mosquito (and Anopheles species)",
    "Simulium blackfly",
    "Chrysops deer fly",
    "Tsetse fly",
    "A", "Culex mosquitoes breed in organically polluted drainage ditches and pit latrines, transmitting Wuchereria bancrofti microfilariae at night.")

add("In environmental sanitation, 'Blackwater' refers specifically to wastewater originating from:",
    "Kitchen sinks and showers", "Toilets and latrines containing human feces and urine", "Rainwater runoff", "Industrial chemical factories",
    "B", "Blackwater contains biological pathogens from human excreta and urine; greywater refers to domestic wastewater from laundry, baths, and washing.")

add("Domestic wastewater generated from laundry, bathing, and dishwashing that does NOT contain toilet fecal excreta is termed:",
    "Blackwater", "Greywater (sullage)", "Sewage sludge", "Leachate",
    "B", "Greywater (sullage) carries lower pathogen loads than blackwater and can be treated and recycled for agricultural irrigation.")

add("The toxic liquid that percolates through municipal solid waste landfill layers and extracts dissolved and suspended decomposition contaminants is called:",
    "Slurry", "Landfill Leachate", "Effluent", "Sullage",
    "B", "Leachate forms as rainwater filters through landfill refuse, dissolving heavy metals, organic pollutants, and ammoniacal nitrogen.")

# 7. Pharmacology & Dosage Calculations
add("A client is prescribed 0.5 grams of oral erythromycin. The pharmacy supplies 250 mg tablets. How many tablets should the nurse administer?",
    "1 tablet", "2 tablets", "3 tablets", "4 tablets",
    "B", "Convert 0.5 grams to milligrams: 0.5 g = 500 mg. Tablets to give = 500 mg / 250 mg per tablet = 2 tablets.")

add("An IV fluid order prescribes 500 mL of 5% Dextrose in Water to infuse over 4 hours. The drop factor of the tubing is 20 drops/mL. What is the flow rate in drops per minute?",
    "21 gtt/min", "42 gtt/min", "63 gtt/min", "84 gtt/min",
    "B", "Flow rate = (Volume in mL x Drop Factor) / (Time in minutes) = (500 mL x 20) / (4 x 60 min) = 10,000 / 240 = 41.67, rounded to 42 gtt/min.")

add("A physician orders 75 mg of pethidine (meperidine) IM for acute post-operative pain. The ampoule contains 100 mg in 2 mL. How many milliliters should be injected?",
    "1.0 mL", "1.5 mL", "2.0 mL", "0.75 mL",
    "B", "Volume = (Desired dose / Available dose) x Volume = (75 mg / 100 mg) x 2 mL = 0.75 x 2 = 1.5 mL.")

add("A client with severe chronic pain is prescribed continuous morphine infusion at 2 mg/hour. The IV bag contains 100 mg of morphine in 500 mL normal saline. What is the pump rate in mL/hour?",
    "5 mL/hour", "10 mL/hour", "20 mL/hour", "50 mL/hour",
    "B", "Concentration = 100 mg / 500 mL = 0.2 mg/mL. Rate in mL/hr = Desired dose per hr / Concentration = 2 mg/hr / 0.2 mg/mL = 10 mL/hour.")

add("A child weighing 15 kg is prescribed amoxicillin at 40 mg/kg/day divided into 3 equal doses every 8 hours. What is the dose in milligrams for each individual administration?",
    "100 mg", "200 mg", "400 mg", "600 mg",
    "B", "Total daily dose = 15 kg x 40 mg/kg/day = 600 mg/day. Divided into 3 doses = 600 mg / 3 = 200 mg per dose.")

add("Which term describes the fractional extent and rate at which an active drug ingredient is absorbed from its pharmaceutical form and reaches the systemic bloodstream?",
    "Bioequivalence", "Bioavailability", "Volume of distribution", "First-pass effect",
    "B", "Bioavailability (F) is 100% for intravenous administration and varies widely for oral formulations depending on intestinal absorption and hepatic metabolism.")

add("The rapid metabolic inactivation of an orally administered drug by intestinal enzymes and liver hepatocytes before reaching the systemic circulation is the:",
    "Enterohepatic circulation", "Hepatic first-pass effect (presystemic metabolism)", "Biliary excretion", "Renal clearance",
    "B", "Orally absorbed drugs travel via the portal vein directly to the liver; drugs with high first-pass clearance (e.g., nitroglycerin, lidocaine) have low oral bioavailability.")

add("Which organ in the human body is the primary physiological site responsible for the enzymatic biotransformation (metabolism) of pharmaceutical drugs?",
    "Kidneys", "Liver (cytochrome P450 enzyme systems)", "Spleen", "Lungs",
    "B", "Hepatocyte microsomal cytochrome P450 monooxygenases and conjugating transferases metabolize lipophilic drugs into hydrophilic metabolites for excretion.")

add("The primary physiological route responsible for the permanent elimination and excretion of water-soluble drugs and their polar metabolites from the body is the:",
    "Biliary and fecal excretion", "Renal glomerular filtration and tubular secretion", "Pulmonary expiration", "Perspiration",
    "B", "The kidneys clear drugs via glomerular filtration of free unbound drug and active proximal tubular carrier transport (organic anion and cation transporters).")

add("Which pharmacological term describes the clinical phenomenon where two drugs administered together produce an overall therapeutic effect greater than the algebraic sum of their individual effects?",
    "Antagonism", "Potentiation / Synergism (1 + 1 > 2)", "Additive effect (1 + 1 = 2)", "Cross-tolerance",
    "B", "Synergism occurs when combined drug mechanisms amplify clinical efficacy beyond simple addition (e.g., sulfamethoxazole plus trimethoprim).")

# Additional questions to reach 150
add("The structural landmark that marks the bifurcation of the trachea into the right and left mainstem bronchi is the:",
    "Cricoid cartilage", "Carina", "Epiglottis", "Thyroid notch",
    "B", "The carina is an internal cartilaginous ridge at the tracheal bifurcation (T4-T5) lined with sensitive mucous membrane that initiates the violent cough reflex.")

add("The right human lung is anatomically divided by horizontal and oblique fissures into how many lobes?",
    "Two lobes", "Three lobes (Superior, Middle, and Inferior)", "Four lobes", "One single lobe",
    "B", "The larger right lung features three lobes (superior, middle, inferior) separated by horizontal and oblique fissures; the left lung has two lobes.")

add("The left lung has how many lobes and features which distinct medial anatomical indentation to accommodate the heart?",
    "Three lobes with no indentation", "Two lobes (superior and inferior) with the cardiac notch", "Four lobes", "Single lobe",
    "B", "The left lung has two lobes separated by an oblique fissure, featuring the cardiac notch and lingula to accommodate the apex of the heart.")

add("The volume of anatomical dead space in the adult respiratory conduction zone that does not participate in gas exchange is approximately:",
    "50 mL", "150 mL (approx. 1 mL per pound of ideal body weight)", "500 mL", "1000 mL",
    "B", "The conducting zone (nose, pharynx, larynx, trachea, bronchi, bronchioles) holds roughly 150 mL of air that moves without reaching alveolar gas exchange.")

add("Alveolar ventilation rate (the volume of fresh air reaching active alveoli per minute) in a person with tidal volume 500 mL, dead space 150 mL, and respiratory rate 12 breaths/min is:",
    "6,000 mL/min", "4,200 mL/min", "3,000 mL/min", "1,800 mL/min",
    "B", "Alveolar Ventilation = (Tidal Volume - Dead Space) x Respiratory Rate = (500 mL - 150 mL) x 12 = 350 mL x 12 = 4,200 mL/min.")

add("Which respiratory center located in the upper pons continuously regulates the dorsal respiratory group to limit the duration of inspiration and prevent over-inflation?",
    "Apneustic center", "Pneumotaxic center (pontine respiratory group)", "Ventral group", "Pre-Bötzinger complex",
    "B", "The pneumotaxic center transmits inhibitory impulses to the inspiratory center, promoting smooth transition to exhalation and setting respiratory rate.")

add("Central chemoreceptors located on the ventrolateral surface of the medulla oblongata respond primarily to changes in:",
    "Arterial oxygen tension (PaO2) directly",
    "Hydrogen ion concentration (pH) in cerebrospinal fluid derived from diffusing arterial carbon dioxide (PaCO2)",
    "Serum sodium concentration",
    "Blood pressure",
    "B", "Carbon dioxide diffuses freely across the blood-brain barrier into CSF, hydrating into carbonic acid and releasing H+ ions that directly stimulate central chemoreceptors.")

add("Peripheral arterial chemoreceptors that monitor arterial PaO2, PaCO2, and pH are anatomically located in the:",
    "Renal arteries", "Carotid bodies (at carotid bifurcation) and aortic bodies (in aortic arch)", "Cerebral ventricles", "Pulmonary veins",
    "B", "The carotid bodies (innervated by CN IX) and aortic bodies (innervated by CN X) sense hypoxemia (PaO2 <60 mmHg) and acidosis, firing to stimulate ventilation.")

add("The percentage of oxygen transported in systemic arterial blood chemically bound to iron in hemoglobin molecules is approximately:",
    "1.5%", "98.5%", "50%", "75%",
    "B", "Approximately 98.5% of blood oxygen is transported as oxyhemoglobin (HbO2), with the remaining 1.5% dissolved physically in aqueous plasma.")

add("The primary form in which carbon dioxide is transported from peripheral tissues back to the lungs in venous blood (approx. 70%) is:",
    "Dissolved as gas in plasma", "Chemically converted into bicarbonate ions (HCO3-) in plasma", "Carbaminohemoglobin", "Carbon monoxide",
    "B", "Erythrocytic carbonic anhydrase converts CO2 and H2O into carbonic acid, which dissociates into H+ and bicarbonate; bicarbonate diffuses into plasma via chloride shift.")

add("The enzyme present in abundance inside red blood cells that reversibly catalyzes the hydration of carbon dioxide into carbonic acid is:",
    "Carbonic anhydrase", "Lactate dehydrogenase", "Alkaline phosphatase", "Amylase",
    "A", "Carbonic anhydrase accelerates the reaction CO2 + H2O <-> H2CO3 by thousands of times, enabling rapid transport of tissue respiratory CO2.")

add("The 'Chloride Shift' (Hamburger phenomenon) in erythrocytic physiology refers to the electroneutral exchange of:",
    "Sodium for potassium across the membrane",
    "Bicarbonate ions leaving red blood cells in exchange for chloride ions entering from plasma in systemic capillaries",
    "Calcium for magnesium",
    "Hydrogen for sodium",
    "B", "As bicarbonate accumulates inside erythrocytes and diffuses out into plasma, chloride ions shift inward to preserve electrical neutrality across the membrane.")

add("The Bohr effect describes the physiological phenomenon where an increase in carbon dioxide and hydrogen ion concentration (acidosis) causes hemoglobin to:",
    "Bind oxygen more tightly",
    "Release oxygen more readily to tissues by shifting the oxygen-hemoglobin dissociation curve to the right",
    "Destroy its heme groups",
    "Precipitate inside the cell",
    "B", "Elevated PaCO2, H+ (low pH), temperature, and 2,3-DPG in metabolically active tissues decrease hemoglobin affinity for O2, facilitating tissue oxygen unloading.")

add("The Haldane effect describes the physiological property where deoxygenation of blood increases its capacity to carry:",
    "Nitrogen", "Carbon dioxide", "Oxygen", "Glucose",
    "B", "Deoxygenated hemoglobin is a better buffer for hydrogen ions and binds carbamino groups more readily, enhancing CO2 pickup from exercising tissues.")

add("In which anatomical structure of the nephron does the active countercurrent multiplier mechanism generate a hypertonic medullary osmotic gradient?",
    "Proximal convoluted tubule", "Loop of Henle (descending and ascending limbs)", "Bowman's capsule", "Renal cortex",
    "B", "Differential water permeability in the descending limb and active NaCl pumping in the ascending limb multiply osmolarity deep in the renal medulla.")

add("The specialized capillary network that descends into the renal medulla parallel to the loops of Henle to act as a countercurrent exchanger is the:",
    "Glomerular tuft", "Vasa recta", "Peritubular cortical capillaries", "Interlobular vein",
    "B", "The hairpin loops of the vasa recta maintain the hypertonic medullary gradient by passive countercurrent exchange of water and solutes.")

add("The normal physiological glomerular filtration rate (GFR) in a healthy young adult male is approximately:",
    "50 mL/min", "125 mL/min (approx. 180 liters per day)", "500 mL/min", "25 mL/min",
    "B", "Normal inulin or creatinine clearance averages 120-125 mL/min per 1.73 m2 body surface area.")

add("Which pressure in the renal corpuscle is the primary driving hydrostatic force that pushes fluid out of glomerular capillaries into Bowman's space?",
    "Bowman's capsule hydrostatic pressure",
    "Glomerular capillary blood hydrostatic pressure (approx. 55 mmHg)",
    "Plasma colloidal oncotic pressure",
    "Renal interstitial pressure",
    "B", "High hydrostatic pressure in the glomerular capillaries (driven by afferent arteriolar resistance) overcomes opposing oncotic and capsular forces to drive ultrafiltration.")

add("Which glomerular filtration barrier layer is negatively charged due to abundant heparan sulfate proteoglycans, repelling negatively charged plasma albumin?",
    "Fenestrated capillary endothelium",
    "Glomerular basement membrane (lamina densa)",
    "Parietal layer of Bowman's capsule",
    "Renal tubular brush border",
    "B", "The polyanionic proteoglycan matrix of the glomerular basement membrane provides an electrostatic charge barrier that excludes circulating anionic proteins.")

add("Which specialized epithelial cells form the visceral layer of Bowman's capsule, extending interdigitating foot processes (pedicels) that create filtration slits?",
    "Mesangial cells", "Podocytes", "Macula densa cells", "Principal cells",
    "B", "Podocytes wrap around glomerular capillaries; filtration slits spanned by slit diaphragms (nephrin) provide the final size-selective sieving barrier.")

add("Mesangial cells situated between glomerular capillary loops perform which important regulatory functions?",
    "Filtration of urine exclusively",
    "Phagocytosis of trapped immune complexes, structural capillary support, and contractile modulation of glomerular surface area",
    "Synthesis of renin exclusively",
    "Transport of glucose",
    "B", "Intraglomerular mesangial cells contract in response to angiotensin II, clear macromolecules by endocytosis, and maintain basement membrane architecture.")

add("The specialized plaque of tall, closely packed tubular epithelial cells located in the distal convoluted tubule that monitors tubular sodium chloride concentration is the:",
    "Juxtaglomerular cells", "Macula densa", "Podocytes", "Intercalated cells",
    "B", "The macula densa senses luminal NaCl delivery via Na+/K+/2Cl- cotransporters, signaling adjacent juxtaglomerular cells to modulate renin release.")

add("Tubuloglomerular feedback is an intrinsic renal autoregulatory mechanism where an elevated GFR and high luminal NaCl delivery to the macula densa triggers:",
    "Afferent arteriolar vasodilation",
    "Afferent arteriolar vasoconstriction (via adenosine), which restores normal GFR",
    "Immediate cessation of all filtration",
    "Erythropoietin release",
    "B", "Increased NaCl delivery causes ATP and adenosine release from macula densa cells, constricting the afferent arteriole to protect the glomerulus from hypertension.")

add("Which cells of the renal collecting ducts are responsible for sodium reabsorption and potassium excretion under the direct regulatory influence of aldosterone?",
    "Intercalated type A cells", "Principal cells", "Mesangial cells", "Juxtaglomerular cells",
    "B", "Principal cells possess apical epithelial sodium channels (ENaC) and basolateral Na+/K+ pumps regulated by aldosterone to reabsorb Na+ and secrete K+.")

add("Intercalated cells of the collecting ducts play a critical role in acid-base regulation by:",
    "Reabsorbing sodium exclusively",
    "Actively secreting hydrogen ions (type A cells) or bicarbonate ions (type B cells) to regulate systemic blood pH",
    "Destroying red blood cells",
    "Producing renin",
    "B", "Type A intercalated cells pump H+ into the tubular lumen via H+-ATPase and H+/K+-ATPase during acidosis, reabsorbing new bicarbonate.")

add("Which hormone is synthesized by interstitial fibroblasts in the renal peritubular cortex in response to renal tissue hypoxia to stimulate erythropoiesis?",
    "Renin", "Erythropoietin (EPO)", "Calcitriol", "Thrombopoietin",
    "B", "Erythropoietin travels to the bone marrow where it binds to erythroid progenitor receptors (CFU-E), preventing apoptosis and stimulating red blood cell production.")

add("The active hormonal form of Vitamin D (1,25-dihydroxycholecalciferol or Calcitriol) is synthesized in the proximal renal tubules through the enzymatic action of:",
    "25-hydroxylase", "1-alpha-hydroxylase (stimulated by parathyroid hormone)", "Carbonic anhydrase", "Renin",
    "B", "Renal 1-alpha-hydroxylase adds a hydroxyl group to 25-hydroxyvitamin D to yield biologically active calcitriol, which enhances gut calcium absorption.")

add("Which muscle forms the primary muscular wall of the urinary bladder and is innervated by parasympathetic pelvic splanchnic nerves (S2-S4)?",
    "Pubococcygeus muscle", "Detrusor muscle", "Dartos muscle", "Cremaster muscle",
    "B", "The detrusor muscle consists of three spiraling layers of smooth muscle that contract forcefully to evacuate urine during the micturition reflex.")

add("The internal urethral sphincter located at the neck of the bladder is composed of smooth muscle and is under:",
    "Voluntary somatic control",
    "Involuntary autonomic control (sympathetic contraction via hypogastric nerve, parasympathetic relaxation)",
    "Cortical motor control exclusively",
    "Reflex spinal control without innervation",
    "B", "The internal sphincter is an involuntary smooth muscle sphincter maintained in a closed tonic state by sympathetic alpha-1 adrenergic tone.")

add("The primary parasympathetic neurotransmitter that binds to muscarinic M3 receptors on detrusor smooth muscle to trigger bladder contraction is:",
    "Norepinephrine", "Acetylcholine", "Dopamine", "Serotonin",
    "B", "Parasympathetic postganglionic fibers release acetylcholine, which activates M3 receptors on detrusor myocytes to cause contraction and voiding.")

# 150 questions completed
print("Generated Type 13 questions count:", len(type13_questions))

with open('src/data/type13Questions.ts', 'w') as f:
    f.write("import { RawDocQuestion } from './docPart1';\n\n")
    f.write("export const TYPE13_QUESTIONS: RawDocQuestion[] = [\n")
    for q in type13_questions[:150]:
        q_clean = json.dumps(q.get('question', '').strip())
        a_clean = json.dumps(q.get('optionA', '').strip())
        b_clean = json.dumps(q.get('optionB', '').strip())
        c_clean = json.dumps(q.get('optionC', '').strip())
        d_clean = json.dumps(q.get('optionD', '').strip())
        ans = q.get('correctAnswer', 'A').strip().upper()[:1]
        ans_clean = json.dumps(ans)
        exp_clean = json.dumps(q.get('explanation', '').strip())
        f.write("  {\n")
        f.write(f"    question: {q_clean},\n")
        f.write(f"    optionA: {a_clean},\n")
        f.write(f"    optionB: {b_clean},\n")
        f.write(f"    optionC: {c_clean},\n")
        f.write(f"    optionD: {d_clean},\n")
        f.write(f"    correctAnswer: {ans_clean},\n")
        f.write(f"    explanation: {exp_clean},\n")
        f.write("  },\n")
    f.write("];\n")

print("Successfully written 150 questions to src/data/type13Questions.ts")
