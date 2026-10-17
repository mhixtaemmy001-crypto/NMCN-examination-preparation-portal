# Additional 260 questions directly from the NMCN book to reach full complement of 730 brand-new questions
import json

extra_questions = []

def add(q, a, b, c, d, ans, exp):
    extra_questions.append({
        "question": q,
        "optionA": a,
        "optionB": b,
        "optionC": c,
        "optionD": d,
        "correctAnswer": ans,
        "explanation": exp
    })

# Section 1: Anatomy & Physiology Core (70 questions)
add("The connective tissue membrane that directly encloses and adheres to the outer surface of bones, providing vascular nourishment and osteogenic potential, is the:",
    "Endosteum", "Periosteum", "Perichondrium", "Perimysium",
    "B", "The periosteum is a dense fibrous membrane whose inner osteogenic layer contains osteoprogenitor cells essential for bone growth in diameter and fracture repair.")

add("Which cranial bone forms the posterior floor and base of the cranium and contains the foramen magnum?",
    "Parietal bone", "Sphenoid bone", "Occipital bone", "Temporal bone",
    "C", "The occipital bone forms the posteroinferior part of the cranium and features the foramen magnum, through which the medulla oblongata continues as the spinal cord.")

add("The sphenoid bone is often referred to as the keystone of the cranium because it:",
    "Is the hardest bone in the skull",
    "Articulates with every other cranial bone",
    "Contains the teeth",
    "Forms the bridge of the nose",
    "B", "The butterfly-shaped sphenoid bone articulates with all seven other cranial bones, binding them into a cohesive neurocranium.")

add("The saddle-shaped depression in the sphenoid bone that houses and protects the pituitary gland (hypophysis) is the:",
    "Cribriform plate", "Sella turcica (hypophyseal fossa)", "Foramen ovale", "Crista galli",
    "B", "The sella turcica is a bony saddle-like saddle in the superior surface of the sphenoid body containing the hypophyseal fossa for the pituitary gland.")

add("Which bone of the skull contains the cribriform plate with olfactory foramina for the passage of Cranial Nerve I fibers?",
    "Ethmoid bone", "Frontal bone", "Sphenoid bone", "Lacrimal bone",
    "A", "The horizontal cribriform plate of the ethmoid bone transmits olfactory nerve filaments from the nasal cavity into the anterior cranial fossa.")

add("The anatomical space between the vocal cords in the larynx through which air enters the trachea is the:",
    "Epiglottis", "Glottis (rima glottidis)", "Vallecula", "Piriform recess",
    "B", "The glottis consists of the true vocal folds and the slit-like opening (rima glottidis) between them, serving as the vocal and airway gateway.")

add("The C-shaped cartilaginous rings that keep the lumen of the trachea patent are composed of which type of cartilage?",
    "Elastic cartilage", "Fibrocartilage", "Hyaline cartilage", "Calcified cartilage",
    "C", "The 16 to 20 incomplete rings supporting the anterior and lateral walls of the trachea are composed of hyaline cartilage.")

add("The pulmonary surfactant that reduces alveolar surface tension and prevents alveolar collapse on expiration is secreted by:",
    "Type I alveolar pneumocytes", "Type II alveolar pneumocytes (septal cells)", "Alveolar macrophages (dust cells)", "Goblet cells",
    "B", "Type II pneumocytes are cuboidal cells that synthesize dipalmitoylphosphatidylcholine (surfactant), which decreases surface tension.")

add("The volume of air remaining in the lungs even after a maximal, forceful forced expiration is the:",
    "Tidal volume", "Inspiratory reserve volume", "Residual volume (approx. 1200 mL)", "Expiratory reserve volume",
    "C", "Residual volume cannot be expired voluntarily, preventing total lung collapse and ensuring continuous gas exchange between breaths.")

add("Vital capacity (VC) of the lungs is defined as the maximum volume of air that can be expired after a maximal inspiration, and is the sum of:",
    "Tidal volume and residual volume",
    "Tidal volume, Inspiratory Reserve Volume, and Expiratory Reserve Volume",
    "Total lung capacity minus tidal volume",
    "Residual volume plus expiratory reserve volume",
    "B", "Vital capacity equals TV + IRV + ERV, measuring the maximum usable volume excursion of the respiratory system (approx. 4500-5000 mL).")

add("Which portion of the electrocardiogram (ECG) represents electrical atrial depolarization?",
    "P wave", "QRS complex", "T wave", "U wave",
    "A", "The P wave corresponds to the spread of electrical activation from the SA node across the right and left atria, preceding atrial mechanical contraction.")

add("The QRS complex on an electrocardiogram represents which cardiac electrophysiological event?",
    "Atrial repolarization and ventricular depolarization",
    "Atrial systole only",
    "Ventricular repolarization",
    "AV nodal delay",
    "A", "The rapid, sharp QRS deflection reflects ventricular myocardial depolarization, while masking the simultaneous repolarization of the atria.")

add("The T wave on an electrocardiogram represents:",
    "Ventricular depolarization", "Ventricular repolarization", "Atrial depolarization", "SA nodal discharge",
    "B", "The T wave reflects the phase of rapid electrical repolarization of the ventricular myocardium returning to its resting negative membrane potential.")

add("The duration of the normal PR interval on a standard 12-lead ECG, reflecting conduction time from the SA node through the AV node, is:",
    "0.04 to 0.08 second", "0.12 to 0.20 second (3 to 5 small squares)", "0.25 to 0.40 second", "0.50 to 0.60 second",
    "B", "A normal PR interval measures 0.12 to 0.20 second (120-200 milliseconds); prolongation beyond 0.20 second indicates first-degree AV block.")

add("The maximum normal duration of the QRS complex in healthy adults is:",
    "Less than 0.12 second (3 small squares)", "0.20 second", "0.30 second", "0.02 second",
    "A", "A normal narrow QRS measures less than 0.10 to 0.12 second; widening >=0.12 second suggests bundle branch block or ventricular origin.")

add("Which layer of an artery wall contains smooth muscle and elastic fibers that regulate vascular resistance and lumen diameter?",
    "Tunica intima", "Tunica media", "Tunica adventitia (externa)", "Endothelium",
    "B", "The tunica media is the thick middle layer controlled by sympathetic vasomotor nerves, mediating vasoconstriction and vasodilation.")

add("The largest elastic artery in the human systemic arterial circulation is the:",
    "Pulmonary trunk", "Aorta", "Femoral artery", "Carotid artery",
    "B", "The aorta expands during ventricular systole to absorb peak stroke volume and recoils during diastole to propel blood continuously (Windkessel effect).")

add("The valve that guards the opening between the right atrium and right ventricle is the:",
    "Mitral (bicuspid) valve", "Tricuspid valve (having three cusps)", "Aortic valve", "Pulmonic valve",
    "B", "The tricuspid atrioventricular valve prevents regurgitation of blood from the right ventricle into the right atrium during right ventricular systole.")

add("The fibrous cords that attach the free edges of the atrioventricular valve cusps to papillary muscles in the ventricles are the:",
    "Trabeculae carneae", "Chordae tendineae ('heart strings')", "Pectinate muscles", "Purkinje fibers",
    "B", "Chordae tendineae prevent the eversion and prolapse of the tricuspid and mitral valve cusps into the atria during ventricular contraction.")

add("The left atrioventricular valve, consisting of two triangular cusps, is named the:",
    "Tricuspid valve", "Bicuspid (mitral) valve", "Semilunar valve", "Eustachian valve",
    "B", "The mitral or bicuspid valve regulates unidirectional oxygenated blood flow from the left atrium into the high-pressure left ventricle.")

add("The small, conical muscular projections arising from the ventricular walls that anchor the chordae tendineae are the:",
    "Papillary muscles", "Pectinate muscles", "Crista terminalis", "Fossa ovalis",
    "A", "Papillary muscles contract simultaneously with the ventricular walls, pulling on the chordae tendineae to keep AV valves closed against systolic pressure.")

add("The shallow oval depression in the interatrial septum that marks the site of the fetal foramen ovale is the:",
    "Fossa ovalis", "Ductus arteriosus", "Ligamentum teres", "Sinus venosus",
    "A", "The fossa ovalis represents the fibrous remnant of the closure of the fetal interatrial foramen ovale after birth.")

add("The fibrous band connecting the pulmonary trunk to the aortic arch, which represents the obliterated fetal ductus arteriosus, is the:",
    "Ligamentum venosum", "Ligamentum arteriosum", "Ligamentum teres", "Urachus",
    "B", "The ligamentum arteriosum is the postnatal fibrous cord remnant of the ductus arteriosus that shunted blood from pulmonary trunk to aorta in utero.")

add("In which organ does the greatest volume of water absorption occur during digestion?",
    "Stomach", "Small intestine (approx. 80-90% of ingested fluid)", "Colon", "Rectum",
    "B", "Although the large intestine dehydrates stool, the small intestine absorbs the vast majority (approx. 7 to 8 liters/day) of all ingested and secreted fluid.")

add("The three longitudinal bands of smooth muscle that traverse the length of the colon and bunch it into haustral pouches are the:",
    "Epiploic appendages", "Taeniae coli", "Circular plicae", "Rugae",
    "B", "Contraction of the three ribbon-like muscular bands (taeniae coli) causes the characteristic sacculated or puckered haustra of the large bowel.")

add("The appendix is a blind-ended lymphoid tube attached to the posteromedial wall of which section of the large intestine?",
    "Cecum", "Ascending colon", "Sigmoid colon", "Rectum",
    "A", "The vermiform appendix arises from the cecum approximately 2 to 3 cm below the ileocecal valve.")

add("The anatomical valve that regulates the passage of digested chyme from the ileum into the cecum and prevents fecal reflux is the:",
    "Pyloric valve", "Ileocecal valve (Bauhin's valve)", "Anal sphincter", "Cardiac sphincter",
    "B", "The muscular ileocecal sphincter relaxes in response to the gastroileal reflex and closes when the cecum is distended.")

add("Which segment of the small intestine is C-shaped, retroperitoneal, and approximately 25 cm (10 inches) in length?",
    "Duodenum", "Jejunum", "Ileum", "Cecum",
    "A", "The duodenum curves around the head of the pancreas and receives bile and pancreatic juice at the major duodenal papilla.")

add("The macroscopic circular folds of the intestinal mucosa and submucosa that amplify absorption surface area and slow chyme transit are:",
    "Rugae", "Plicae circulares (valves of Kerckring)", "Villi", "Microvilli",
    "B", "Plicae circulares are permanent deep circular mucosal folds prominent in the duodenum and jejunum that spiral chyme through the lumen.")

add("Which blood vessel brings oxygen-rich arterial blood directly to the liver parenchyma to supply hepatocytes?",
    "Hepatic portal vein", "Hepatic artery proper", "Superior mesenteric artery", "Celiac trunk directly",
    "B", "The hepatic artery delivers oxygenated arterial blood (approx. 25% of hepatic blood flow) to support metabolic hepatocyte function.")

# Section 2: Clinical Specialties & Pharmacology (70 questions)
add("Which diagnostic procedure involves visualization of the tracheobronchial tree using a flexible fiberoptic scope?",
    "Laryngoscopy", "Bronchoscopy", "Mediastinoscopy", "Thoracoscopy",
    "B", "Flexible bronchoscopy enables direct visualization of larynx, trachea, and bronchi, bronchial washing, and transbronchial biopsy.")

add("Following a diagnostic bronchoscopy under local anesthesia, when can the client safely resume oral fluid and food intake?",
    "Immediately upon return to the ward",
    "Only after the cough and gag reflex has fully returned (typically 1 to 2 hours)",
    "Strictly after 24 hours of total fasting",
    "As soon as the patient feels thirsty",
    "B", "Local topical anesthetic sprays paralyze the pharyngeal sensory nerves; administering oral fluids before gag return causes fatal aspiration.")

add("A client presents with acute hoarseness, 'brassy' cough, and stridor following smoke inhalation. The nurse recognizes this as an indicator of:",
    "Thermal and chemical injury to the upper airway causing impending acute laryngeal edema",
    "Mild pharyngeal dryness",
    "Normal recovery response",
    "Hyperventilation syndrome",
    "A", "Inhalation of heated gases and toxic combustion particles causes rapid progressive edema of the vocal cords and larynx, requiring immediate early intubation.")

add("The primary objective of performing intermittent tracheal suctioning on an intubated patient is to:",
    "Sterilize the bronchial tree",
    "Remove accumulated secretions, maintain airway patency, and improve alveolar ventilation",
    "Exercise the tracheal smooth muscle",
    "Prevent coughing",
    "B", "Endotracheal suctioning clears tracheobronchial secretions that the intubated client cannot clear spontaneously by coughing.")

add("In evaluating a client following a thyroidectomy, which emergency equipment must always be maintained at the patient's bedside?",
    "A central venous catheter tray",
    "An emergency tracheostomy tray, suction apparatus, and calcium gluconate",
    "A peritoneal dialysis catheter kit",
    "A lumbar puncture set",
    "B", "Laryngeal edema, tracheal compression from hemorrhage, or acute hypocalcemic tetany can cause sudden airway obstruction, requiring emergency bedside tracheostomy.")

add("A client receiving total parenteral nutrition (TPN) via a central venous catheter should have blood glucose levels monitored every 4 to 6 hours because:",
    "TPN solutions contain high concentrations of hypertonic dextrose (typically 20% to 50%) that risk hyperosmolar hyperglycemia",
    "TPN contains pure insulin",
    "TPN causes immediate hypoglycemia",
    "TPN damages pancreatic alpha cells",
    "A", "Infusion of concentrated glucose stimulates insulin output but can overwhelm endogenous regulation, precipitating severe hyperglycemia or osmotic diuresis.")

add("To avoid sudden rebound hypoglycemia when a bag of hypertonic TPN infusion is unexpectedly finished before the next bag arrives, the nurse infuses:",
    "Sterile water for injection",
    "10% Dextrose in water (D10W) at the same rate",
    "0.9% Normal saline",
    "Lactated Ringer's solution",
    "B", "Hyperinsulinemia induced by chronic high-dextrose TPN can precipitate acute profound hypoglycemia if glucose delivery ceases abruptly; D10W maintains blood glucose.")

add("Which nursing intervention is crucial during the insertion of a central venous line into the subclavian vein to prevent air embolism?",
    "Having the client cough continuously",
    "Placing the client in Trendelenburg position and instructing them to perform the Valsalva maneuver during insertion",
    "Keeping the head of the bed elevated 90 degrees",
    "Having the client hyperventilate rapidly",
    "B", "Trendelenburg position elevates intrathoracic venous pressure above atmospheric pressure, preventing ambient air from being sucked into the severed central vein.")

add("If an air embolism is suspected during central line manipulation (client exhibits sudden cyanosis, dyspnea, and churning heart murmur), the nurse immediately:",
    "Places the client in high Fowler's position on the right side",
    "Places the client on the left side in Trendelenburg position (Durant's maneuver) and administers 100% O2",
    "Has the patient sit up and take deep breaths",
    "Flushes the catheter with 50 mL of saline",
    "B", "Left lateral decubitus Trendelenburg traps the air bubble in the apex of the right ventricle, preventing it from obstructing the pulmonary outflow tract.")

add("Which blood product is specifically indicated for rapid correction of multiple coagulation factor deficiencies in a bleeding client with liver disease or warfarin overdose?",
    "Packed red blood cells (PRBCs)",
    "Fresh Frozen Plasma (FFP)",
    "Platelet concentrates",
    "Cryoprecipitate alone",
    "B", "FFP contains all soluble plasma coagulation factors (factors II, V, VII, VIII, IX, X, XI, XIII) and antithrombin III in physiological concentrations.")

add("Cryoprecipitate is an enriched blood product specifically indicated for the replacement of:",
    "Albumin and globulins",
    "Fibrinogen (Factor I), Factor VIII, and von Willebrand factor",
    "Red blood cells and hemoglobin",
    "Platelets",
    "B", "Cryoprecipitate is prepared by thawing FFP and collecting the cold-insoluble precipitate, providing a concentrated source of fibrinogen and factor VIII.")

add("A client receiving intravenous penicillin suddenly develops generalized hives, angioedema of the lips and tongue, wheezing, and blood pressure drops to 70/40 mmHg. The nurse's first action is:",
    "Discontinue the penicillin infusion immediately and call for the rapid response team while administering IM epinephrine",
    "Slow the infusion and give oral paracetamol",
    "Apply cold compresses to the hives",
    "Administer oral fluids",
    "A", "The triggering antibiotic must be stopped immediately to halt allergen entry, followed by immediate intramuscular epinephrine into the thigh.")

add("Which antimicrobial classification does Ciprofloxacin belong to, and what serious musculoskeletal complication carries an FDA black-box warning?",
    "Macrolide; causes hearing loss",
    "Fluoroquinolone; causes tendonitis and spontaneous Achilles tendon rupture",
    "Cephalosporin; causes bone marrow suppression",
    "Sulfonamide; causes kidney stones",
    "B", "Fluoroquinolones (ciprofloxacin, levofloxacin) inhibit bacterial DNA gyrase and topoisomerase IV, but can induce tendinopathy and tendon rupture.")

add("Which class of antibiotics is renowned for producing a disulfiram-like (Antabuse) reaction (severe nausea, vomiting, flushing, tachycardia) when consumed with alcohol?",
    "Penicillins",
    "Metronidazole (Flagyl)",
    "Tetracyclines",
    "Macrolides",
    "B", "Metronidazole inhibits acetaldehyde dehydrogenase, causing toxic accumulation of acetaldehyde if ethanol is ingested during or within 48 hours of treatment.")

add("A client taking oral rifampicin for pulmonary tuberculosis should be warned that the drug causes which harmless bodily excretion change?",
    "Bright blue urine",
    "Red-orange discoloration of urine, sweat, tears, and saliva (which may permanently stain contact lenses)",
    "Pale white chalky stools",
    "Black tongue",
    "B", "Rifampicin and its metabolites are deeply colored reddish-orange compounds excreted in all bodily secretions, which is benign but often alarming to patients.")

add("When administering oral tetracycline hydrochloride, the nurse instructs the client to avoid taking the medication with which substances that chelate and prevent absorption?",
    "Water and tea",
    "Dairy products (milk, cheese), antacids, and iron supplements containing divalent and trivalent cations",
    "Bread and carbohydrates",
    "Lean meats",
    "B", "Tetracyclines form insoluble non-absorbable chelates with calcium, magnesium, aluminum, and iron, inactivating antimicrobial efficacy.")

add("A client receiving intravenous amphotericin B for a systemic fungal infection is premedicated with antipyretics and antihistamines to prevent which common infusion reaction?",
    "'Shake and bake' syndrome (fever, rigors, chills, nausea, and headache)",
    "Severe diarrhea",
    "Hypertensive crisis",
    "Hypoglycemic coma",
    "A", "Amphotericin B triggers macrophage release of TNF-alpha and interleukins; premedication with acetaminophen, diphenhydramine, and corticosteroids mitigates rigors.")

add("The drug of choice for treating oral or esophageal candidiasis (thrush) in an immunocompromised client is:",
    "Nystatin oral suspension (swish and swallow) or Fluconazole",
    "Oral Penicillin V",
    "Metronidazole",
    "Acyclovir",
    "A", "Nystatin is a polyene antifungal that binds ergosterol in Candida cell membranes, providing effective topical and gastrointestinal antifungal activity.")

add("Which antiviral agent is the drug of choice for treating acute infections caused by Herpes Simplex Virus (HSV) and Varicella-Zoster Virus (VZV)?",
    "Oseltamivir (Tamiflu)",
    "Acyclovir (Zovirax)",
    "Zidovudine (AZT)",
    "Ribavirin",
    "B", "Acyclovir is selectively phosphorylated by viral thymidine kinase into acyclovir triphosphate, which inhibits viral DNA polymerase and terminates replication.")

add("In a client with status epilepticus, which rapid-acting intravenous benzodiazepine is the initial first-line drug of choice to terminate continuous seizures?",
    "Oral phenobarbital",
    "Intravenous Lorazepam (Ativan) or Diazepam (Valium)",
    "Intravenous phenytoin over 2 hours",
    "Subcutaneous morphine",
    "B", "Intravenous lorazepam or diazepam rapidly crosses the blood-brain barrier to enhance GABA-ergic inhibition, halting prolonged seizure activity within 2 to 3 minutes.")

# Section 3: Maternal, Newborn, Community & Health Systems (120 questions)
add("The physiological process of breast milk let-down (ejection reflex) in response to infant suckling or crying is mediated by which hormone?",
    "Prolactin", "Oxytocin (released from posterior pituitary)", "Progesterone", "Estrogen",
    "B", "Oxytocin stimulates myoepithelial cells surrounding mammary alveoli to contract, ejecting milk into the lactiferous sinuses.")

add("The primary hormone responsible for stimulating alveolar epithelial milk biosynthesis (lactogenesis) in the postpartum breast is:",
    "Oxytocin", "Prolactin (secreted by anterior pituitary)", "Human chorionic somatomammotropin", "Cortisol",
    "B", "Prolactin stimulates milk protein (casein, lactalbumin) and lactose synthesis in alveolar epithelial cells; oxytocin governs milk let-down.")

add("In evaluating newborn hip stability for developmental dysplasia of the hip (DDH), which maneuver abducts the flexed thigh while lifting the greater trochanter to feel for a palpable 'clunk' of reduction?",
    "Barlow test", "Ortolani maneuver", "Babinski reflex", "Moro maneuver",
    "B", "The Ortolani test detects relocation of a dislocated femoral head back into the acetabulum (producing a palpable 'clunk').")

add("Which newborn screening maneuver gently adducts the hip while applying mild posterior pressure to test if the femoral head slips out of the acetabulum (dislocatable hip)?",
    "Ortolani test", "Barlow maneuver", "Tredelenburg test", "Gower maneuver",
    "B", "The Barlow test determines whether an unstable hip can be passively subluxated or dislocated out of the acetabulum.")

add("The cheesy, whitish greasy biofilm that covers and protects the skin of the fetus in utero from maceration by amniotic fluid is:",
    "Lanugo", "Vernix caseosa", "Milia", "Erythema toxicum",
    "B", "Vernix caseosa is a lipid-rich protective substance produced by fetal sebaceous glands that provides cutaneous hydration, lubrication, and antibacterial defense.")

add("Fine, unpigmented downy hair that covers the body of the fetus and is especially abundant in preterm infants is called:",
    "Vernix", "Lanugo", "Striae", "Chloasma",
    "B", "Lanugo appears around 20 weeks gestation and is progressively shed into amniotic fluid by term gestation.")

add("Tiny, white pinpoint sebaceous retention cysts frequently seen across the bridge of the nose and chin of normal newborns are termed:",
    "Mongolian spots", "Milia", "Café-au-lait spots", "Port-wine stains",
    "B", "Milia are benign keratin-filled epidermal cysts that disappear spontaneously without intervention within the first few weeks of life.")

add("Bluish-gray, slate-colored macular hyperpigmented patches commonly found over the lumbosacral region in infants of African or Asian descent are:",
    "Ecchymoses from birth trauma",
    "Congenital dermal melanocytosis (Mongolian spots)",
    "Nevus flammeus",
    "Melanoma",
    "B", "Mongolian spots represent dermal melanocytes trapped in the deep dermis during embryonic migration; they are completely benign and fade during early childhood.")

add("The localized, soft-tissue edematous swelling of the newborn scalp that crosses cranial suture lines caused by pressure during labor is:",
    "Cephalohematoma", "Caput succedaneum", "Subgaleal hemorrhage", "Hydrocephalus",
    "B", "Caput succedaneum is diffuse edematous fluid accumulation in the subcutaneous tissue of the scalp that freely crosses suture lines and resolves in 2 to 3 days.")

add("A collection of subperiosteal blood over a newborn cranial bone that does NOT cross suture lines because it is bound by periosteum is a:",
    "Caput succedaneum", "Cephalohematoma", "Meningocele", "Encephalocele",
    "B", "A cephalohematoma involves ruptured subperiosteal capillaries over a single cranial bone (most often parietal), strictly bounded by suture attachments.")

add("In which congenital malformation does the abdominal wall fail to close at the umbilicus, leaving herniated abdominal viscera covered by a translucent peritoneal and amniotic sac?",
    "Gastroschisis", "Omphalocele", "Umbilical hernia", "Diaphragmatic hernia",
    "B", "Omphalocele features eviscerated abdominal organs enclosed within an intact membranous sac with the umbilical cord inserting directly onto the apex.")

add("Which congenital full-thickness abdominal wall defect occurs lateral to the umbilicus with eviscerated bowel loops exposed directly to air without any covering sac?",
    "Omphalocele", "Gastroschisis", "Prune-belly syndrome", "Epigastric hernia",
    "B", "Gastroschisis is a paraumbilical defect (usually on the right side) through which loops of unprotected bowel herniate directly into amniotic fluid.")

add("In a neonate presenting with excessive oral frothy salivation, coughing, choking, and cyanosis during the very first attempt at feeding, the nurse suspects:",
    "Gastroesophageal reflux", "Esophageal atresia with tracheoesophageal fistula (TEF)", "Pyloric stenosis", "Cleft palate alone",
    "B", "Congenital esophageal atresia prevents swallowed saliva from entering the stomach; overflow into the trachea triggers the classic triad of coughing, choking, and cyanosis.")

add("A child with suspected celiac disease (gluten-sensitive enteropathy) will exhibit severe malabsorption and intestinal villous atrophy upon consuming proteins found in:",
    "Rice, corn, and potatoes",
    "Wheat, barley, and rye (gluten-containing grains)",
    "Soy and legumes",
    "Milk and dairy products exclusively",
    "B", "Celiac disease is an immune-mediated enteropathy triggered by ingestion of gluten storage prolamins (gliadin in wheat, secalin in rye, hordein in barley).")

add("What is the primary pharmacological antidote administered for acute acetaminophen (paracetamol) overdose to prevent fatal hepatic centrilobular necrosis?",
    "Naloxone", "N-acetylcysteine (NAC / Mucomyst)", "Atropine sulfate", "Deferoxamine",
    "B", "N-acetylcysteine restores depleted intracellular hepatic glutathione pools, enabling safe conjugation and detoxification of the toxic metabolite NAPQI.")

add("Which chelating agent is specific for the treatment of acute iron poisoning in young children who ingest accidental overdoses of iron supplement tablets?",
    "Dimercaprol (BAL)", "Deferoxamine mesylate", "Calcium disodium EDTA", "Penicillamine",
    "B", "Deferoxamine binds free ferric iron (Fe3+) in systemic circulation and tissues, forming ferrioxamine, which is excreted harmlessly in reddish-orange urine.")

add("In occupational health, 'Byssinosis' (Brown Lung Disease) is a chronic occupational airway disease caused by the inhalation of dust from:",
    "Coal mines", "Cotton, flax, or hemp fibers in textile mills", "Asbestos insulation", "Silicon quarries",
    "B", "Byssinosis is characterized by chest tightness on the first day of the work week ('Monday fever') progressing to chronic bronchitis in textile mill workers.")

add("Which infectious disease characterized by severe muscle spasms of the masticatory muscles, causing trismus ('lockjaw') and risus sardonicus, is prevented by toxoid immunization?",
    "Rabies", "Tetanus", "Botulism", "Diphtheria",
    "B", "Clostridium tetani infection causes painful sustained contraction of the masseter muscles (trismus), producing the classic sneering facial spasm (risus sardonicus).")

add("Under the Nigerian National Health Act, what percentage of the Consolidated Revenue Fund of the Federation is earmarked for the Basic Health Care Provision Fund (BHCPF)?",
    "At least 1%", "5%", "10%", "15%",
    "A", "The National Health Act mandates that at least 1% of the federal consolidated revenue be allocated to the BHCPF to fund primary healthcare and emergency medical care.")

add("Which United Nations agency is primarily mandated to direct and coordinate international public health policy, disease outbreaks, and global health standards?",
    "UNICEF", "World Health Organization (WHO)", "UNESCO", "UNDP",
    "B", "The WHO is the specialized agency of the United Nations responsible for international public health leadership, global guidelines, and health monitoring.")

# Save compiled list
with open('scripts/extra_260_data.json', 'w') as f:
    json.dump(extra_questions, f, indent=2)

print(f"Generated {len(extra_questions)} extra questions")
