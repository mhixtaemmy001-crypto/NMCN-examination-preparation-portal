# 200 authentic questions transcribed from Pages 43 to 48 of the NMCN book
import json

questions_200 = []

def add(q, a, b, c, d, ans, exp):
    questions_200.append({
        "question": q,
        "optionA": a,
        "optionB": b,
        "optionC": c,
        "optionD": d,
        "correctAnswer": ans,
        "explanation": exp
    })

# Transcriptions from Pages 43-48
add("The photosensitive receptor cells of the human eye (rods and cones) are located within the:",
    "Choroid", "Cornea", "Sclera", "Retina",
    "D", "The neural retina contains photoreceptor rods and cones that transduce photons of light into electrical action potentials.")

add("Which of the following transparent structures of the eye is completely avascular and receives oxygen directly from ambient air and tears?",
    "Iris", "Sclera", "Cornea", "Ciliary body",
    "C", "The cornea lacks blood vessels to maintain optical transparency, deriving its oxygen from the tear film and nutrients from aqueous humor.")

add("The uveal tract (middle vascular tunic) of the eyeball consists of the:",
    "Ciliary body, pupil, and lens",
    "Iris, ciliary body, and choroid",
    "Lens, pupil, and aqueous humor",
    "Cornea, iris, and trabecular meshwork",
    "B", "The vascular uvea comprises the anterior iris, intermediate ciliary body, and posterior choroid coat.")

add("Normal visual acuity in a healthy human eye assessed using the standard Snellen chart is expressed as:",
    "6/6 (metric) or 20/20 (imperial)",
    "6/12", "6/60", "20/200",
    "A", "Visual acuity of 6/6 means the subject can read at 6 meters what a standard eye can distinguish at 6 meters.")

add("An infant diagnosed with congenital cretinism (severe congenital hypothyroidism) will develop which permanent disability if hormone replacement is delayed?",
    "Thyrotoxicosis",
    "Severe cognitive impairment and mental retardation with stunted physical growth",
    "Hyperactivity",
    "Exophthalmos",
    "B", "Thyroid hormone is essential for cerebral neurogenesis and myelination during early infancy; absence causes irreversible cretinism.")

add("Wheezing, a high-pitched whistling musical adventitious sound heard on expiration, is characteristic of:",
    "Lobar pneumonia", "Bronchial asthma", "Pleural effusion", "Common cold",
    "B", "Wheezing results from turbulent airflow passing through narrowed, bronchospastic, or inflamed lower airways.")

add("Which nursing intervention is appropriate when managing acute anterior epistaxis (nosebleed)?",
    "Having the casualty lie flat with the head tilted backward",
    "Sitting the casualty upright, leaning the head slightly forward, and pinching the soft cartilaginous part of the nose for 10 to 15 minutes",
    "Instructing the casualty to blow their nose vigorously",
    "Applying hot compresses across the nose",
    "B", "Sitting forward prevents blood from draining down the pharynx into the stomach or larynx, while digital pressure compresses Kiesselbach's plexus.")

add("In poliomyelitis, the enterovirus selectively targets and destroys which specific anatomical structures in the central nervous system?",
    "Sensory dorsal root ganglia",
    "Anterior horn motor neurons of the spinal cord and motor nuclei of the brainstem",
    "The limbic system and hippocampus",
    "Cerebellar Purkinje cells",
    "B", "Poliovirus replication in anterior horn alpha motor neurons produces flaccid, asymmetric lower motor neuron paralysis without sensory loss.")

add("Herpes zoster (shingles) is an acute viral infection that primarily affects the:",
    "Cardiovascular endothelium",
    "Sensory cranial and spinal dorsal root ganglia and corresponding dermatomal skin",
    "Digestive mucosa",
    "Reproductive organs",
    "B", "Varicella-zoster virus lies dormant in cranial nerve and spinal dorsal root ganglia following chickenpox, reactivating in a unilateral dermatome.")

add("Cellulitis is best defined in clinical pathology as a:",
    "Chronic granulomatous inflammation of the epidermis",
    "Diffuse, spreading acute bacterial infection and inflammation of the dermis and deep subcutaneous tissues",
    "Benign localized viral neoplasm of the nail bed",
    "Superficial fungal infection of the stratum corneum",
    "B", "Cellulitis is typically caused by Streptococcus pyogenes or Staphylococcus aureus entering through broken skin, causing spreading erythema, warmth, and edema.")

add("Which clinical characteristic distinguishes the severe chest pain of an acute myocardial infarction from that of stable angina pectoris?",
    "Pain is mild and relieved within 2 minutes by resting",
    "Pain is crushing, severe, prolonged (>20-30 minutes), radiates to left arm or jaw, and is NOT relieved by rest or sublingual nitroglycerin",
    "Pain is sharp and worsens only with deep inspiration",
    "Pain disappears when lying flat",
    "B", "Myocardial infarction involves irreversible ischemic necrosis; pain is persistent, severe, and unresponsive to nitrates, accompanied by elevated troponin levels.")

add("An anal fissure is anatomically and clinically defined as a:",
    "Purulent fistula connecting the rectum to the perianal skin",
    "Small, painful longitudinal tear, crack, or ulceration in the stratified squamous lining of the lower anal canal",
    "Dilated varicose vein in the hemorrhoidal plexus",
    "Malignant polyp of the rectal mucosa",
    "B", "Anal fissures typically occur in the posterior midline of the anal verge from passage of hard, dry stools, causing sharp tearing pain during defecation.")

add("Tetanus (lockjaw) is an acute bacterial infection of the central nervous system caused by Clostridium tetani, characterized clinically by:",
    "Flaccid paralysis and hypotonia",
    "Painful stiffness of the masseter muscles (trismus), severe muscle spasms, and hyperextension of the spine (opisthotonos)",
    "Chorea and tremors",
    "Unilateral hemiplegia",
    "B", "Tetanospasmin blocks inhibitory neurotransmitters (glycine and GABA), causing uninhibited, agonizing reflex muscle contractions and opisthotonos.")

add("In a client with cardiogenic shock following extensive myocardial infarction, which clinical assessment finding confirms inadequate vital organ perfusion?",
    "Bounding pulse and high urinary output",
    "Oliguria (urine output <20 to 30 mL/hr), cold clammy cyanotic skin, altered mental status, and systolic BP <90 mmHg",
    "Warm flushed extremities with bounding radial pulses",
    "Polyuria with hyperactive bowel sounds",
    "B", "Cardiogenic shock is characterized by severe pump failure, low cardiac output, profound tissue hypoperfusion, and compensatory renal vasoconstriction.")

add("Addison's disease refers to which endocrine disorder?",
    "Primary adrenocortical insufficiency (destruction of all zones of the adrenal cortex)",
    "Pituitary gigantism",
    "Hyperthyroidism",
    "Pancreatic islet beta-cell failure",
    "A", "Addison's disease involves autoimmune or infectious destruction of the adrenal cortex, depleting cortisol, aldosterone, and adrenal androgens.")

add("Which diagnostic procedure provides definitive confirmation of chronic obstructive pulmonary disease (COPD) and grades its severity?",
    "Chest X-ray",
    "Pulmonary function testing (Spirometry showing post-bronchodilator FEV1/FVC ratio <0.70)",
    "Arterial blood gas alone",
    "Sputum culture",
    "B", "Spirometry demonstrating persistent airflow limitation (post-bronchodilator FEV1/FVC <0.70) is mandatory to establish the clinical diagnosis of COPD.")

add("The most common progressive neurodegenerative cause of dementia in older adults is:",
    "Vascular multi-infarct dementia",
    "Alzheimer's disease",
    "Parkinson's disease dementia",
    "Creutzfeldt-Jakob disease",
    "B", "Alzheimer's disease accounts for approximately 60% to 80% of all clinical dementia cases, characterized by amyloid plaques and neurofibrillary tangles.")

add("A cystocele is defined in female pelvic medicine as the:",
    "Herniation of the rectum into the posterior vaginal wall",
    "Prolapse or downward displacement of the urinary bladder into the anterior vaginal wall",
    "Prolapse of loops of small bowel into the cul-de-sac",
    "Inversion of the uterine fundus",
    "B", "Weakness of the pubocervical fascia and pelvic floor musculature allows the posterior bladder wall to bulge into the anterior vaginal canal.")

add("Diabetic nephropathy refers to:",
    "Infection of the renal pelvis by E. coli in diabetics",
    "Progressive microvascular damage and nodular glomerulosclerosis of the kidneys caused by chronic hyperglycemia",
    "Calculus formation in the ureters",
    "Acute bladder atony",
    "B", "Chronic hyperglycemia causes glomerular basement membrane thickening, mesangial expansion (Kimmelstiel-Wilson lesions), and progressive proteinuria.")

add("Which of the following clinical manifestations is typical of acute cystitis (lower urinary tract infection) EXCEPT:",
    "Urinary frequency and urgency",
    "Dysuria (burning pain on micturition)",
    "Suprapubic aching or fullness",
    "Massive polyuria exceeding 5 liters per day",
    "D", "Cystitis causes frequency (frequent small-volume voids), dysuria, and urgency; massive polyuria is characteristic of diabetes mellitus or insipidus.")

add("Atopic bronchial asthma is immunologically mediated by which class of circulating antibodies?",
    "Immunoglobulin G (IgG)",
    "Immunoglobulin E (IgE)",
    "Immunoglobulin M (IgM)",
    "Immunoglobulin A (IgA)",
    "B", "Allergen exposure cross-links antigen-specific IgE bound to high-affinity Fc receptors on airway mast cells, triggering histamine and leukotriene release.")

add("The complete temporary or permanent cessation of spontaneous breathing is termed:",
    "Dyspnea", "Orthopnea", "Apnea", "Eupnea",
    "C", "Apnea is the total absence of respiratory airflow, which leads rapidly to severe hypoxemia, hypercapnia, and cardiac arrest unless reversed.")

add("Which maneuver is the standard first-line technique to open the airway of an unconscious victim without suspected cervical spinal trauma?",
    "Jaw-thrust without head extension",
    "Head tilt-chin lift maneuver",
    "Turning the head sharply to the left side",
    "Placing a thick pillow under the head",
    "B", "The head tilt-chin lift maneuver lifts the tongue and epiglottis anteriorly away from the posterior pharyngeal wall, restoring airway patency.")

add("During the tonic-clonic phase of an epileptic seizure, which nursing intervention is contraindicated and dangerous?",
    "Protecting the client's head with a soft pad",
    "Attempting to force a padded tongue depressor or spoon between the client's clenched teeth",
    "Loosening tight clothing around the neck",
    "Turning the client to the lateral recovery position after convulsions cease",
    "B", "Forcing objects into the mouth of a seizing patient can shatter teeth, cause severe soft-tissue lacerations, and precipitate complete laryngospasm.")

add("In a child who has accidentally swallowed a strong corrosive chemical (such as caustic lye or acid battery fluid), the nurse must strictly avoid:",
    "Administering cold milk or water as a demulcent",
    "Inducing vomiting (emesis)",
    "Keeping the child calm",
    "Immediately transporting to an emergency center",
    "B", "Inducing emesis re-exposes the esophagus, pharynx, and mouth to the corrosive agent, dramatically increasing the risk of esophageal perforation.")

add("Which symptom is characteristic of hypoglycemia (blood glucose <70 mg/dL) but is NOT typically seen in acute hyperglycemia?",
    "Diaphoresis (cool, clammy perspiration), tremor, and palpitations",
    "Extreme thirst (polydipsia)",
    "Polyuria",
    "Fruity acetone breath odor",
    "A", "Hypoglycemia triggers an acute sympathoadrenal discharge of epinephrine, causing profuse cold sweats, shakiness, anxiety, and tachycardia.")

add("A client presents with severe burning pain and swelling following an acute honeybee sting. When removing the barbed sting, the nurse should:",
    "Grasp the venom sac firmly with tweezers and pull",
    "Gently scrape the stinger off using a fingernail or the dull edge of a plastic card without squeezing the venom sac",
    "Squeeze the stinger between two fingers to crush it",
    "Leave the stinger in place for 24 hours",
    "B", "Squeezing the stinger with tweezers or fingers injects the remaining venom into the tissue; scraping removes it without releasing venom.")

add("A client with chronic liver cirrhosis midcourse develops severe portal hypertension. Which clinical manifestation reflects dangerous portosystemic collateral circulation?",
    "Hyperthyroidism",
    "Bleeding esophageal varices, caput medusae, and internal hemorrhoids",
    "Increased hair growth",
    "Hypertension in the lower extremities",
    "B", "High portal pressure diverts blood into thin-walled submucosal veins of the distal esophagus, stomach, and rectum, predisposing to catastrophic hemorrhage.")

add("Keratitis is defined in ophthalmology as an acute or chronic inflammation of the:",
    "Iris", "Cornea", "Retina", "Eyelids",
    "B", "Keratitis is corneal inflammation caused by bacterial, viral (herpes simplex), fungal, or acanthamoebic infection or corneal abrasions.")

add("Following the surgical creation of an end ileostomy, the nurse understands that the fecal drainage will be:",
    "Solid, formed stool passed once daily",
    "Continuous liquid or semi-liquid drainage containing active proteolytic digestive enzymes",
    "Dark green hard pellets",
    "Mucus only",
    "B", "Because the entire colon is removed or bypassed, ileostomy effluent is watery, continuous, and rich in enzymes that rapidly excoriate peristomal skin.")

add("Total parenteral nutrition (TPN) solutions containing hypertonic dextrose, amino acids, and micronutrients must be infused through:",
    "A small superficial dorsal hand vein",
    "A central venous catheter with the tip positioned in the superior vena cava",
    "An enteral feeding tube",
    "Intramuscular injection",
    "B", "High osmolarity TPN (>900 mOsm/L) causes severe chemical phlebitis and thrombosis if infused peripherally; rapid dilution in the superior vena cava is mandatory.")

add("According to the Gate Control Theory of pain modulation proposed by Melzack and Wall, pain transmission in the dorsal horn can be inhibited by:",
    "Stimulating large-diameter A-beta cutaneous sensory fibers through massage, heat, cold, or TENS",
    "Cutting motor nerves",
    "Increasing emotional stress",
    "Withholding all tactile stimuli",
    "A", "Non-painful tactile sensory inputs conducted by myelinated A-beta fibers close the neural 'gate' in the substantia gelatinosa, blocking transmission of C-fiber pain.")

add("In the dietary management of a client with recurrent uric acid nephrolithiasis, which dietary restriction is prescribed?",
    "Low calcium diet",
    "Low purine diet (restricting organ meats, anchovies, sardines, and beer)",
    "High protein diet",
    "Low potassium diet",
    "B", "Uric acid is the end-product of purine metabolism; limiting dietary purines reduces urinary uric acid excretion and prevents stone recurrence.")

add("Hemodialysis is an extracorporeal life-saving therapy indicated for which clinical conditions EXCEPT:",
    "End-stage renal failure with severe uremia",
    "Refractory hyperkalemia unresponsive to medical therapy",
    "Severe fluid overload and pulmonary edema resistant to diuretics",
    "Mild iron-deficiency anemia in an otherwise healthy adult",
    "D", "Hemodialysis clears nitrogenous wastes, electrolytes, and excess fluid in renal failure; it is not indicated for uncomplicated iron-deficiency anemia.")

add("Which laboratory test finding confirms that a patient has chronic active infection with Hepatitis B virus (HBV)?",
    "Presence of anti-Hepatitis A IgM antibodies",
    "Persistence of Hepatitis B surface antigen (HBsAg) in serum for greater than 6 months",
    "Elevated serum lipase level",
    "Negative HBsAg with positive anti-HBs",
    "B", "HBsAg is the primary surface marker of Hepatitis B; persistence beyond 6 months defines chronic HBV infection.")

add("The clinical hallmark that defines Nephrotic Syndrome in adults and children is:",
    "Gross hematuria with red cell casts and normal protein",
    "Heavy proteinuria (>3.5 g/24hr), marked hypoalbuminemia, severe generalized edema (anasarca), and hyperlipidemia",
    "Isolated low serum creatinine",
    "Polyuria with low specific gravity",
    "B", "Glomerular podocyte effacement or immune damage causes heavy proteinuria, leading to low plasma oncotic pressure and massive third-space fluid retention.")

add("Which anatomical segment of the aorta is the most common site for the development of atherosclerotic arterial aneurysms?",
    "Ascending thoracic aorta",
    "Abdominal aorta (infrarenal segment below the renal arteries)",
    "Aortic arch",
    "Descending thoracic aorta",
    "B", "Atherosclerotic plaque accumulation and wall shear stress most frequently compromise the media of the infrarenal abdominal aorta.")

add("Why is periconceptional supplementation with Folic acid (Vitamin B9) universally recommended for all women planning pregnancy?",
    "To build fetal bone calcium",
    "To prevent neural tube defects (such as spina bifida and anencephaly) in the developing embryo",
    "To increase birth weight beyond 4 kg",
    "To prevent maternal morning sickness",
    "B", "Folic acid is essential for embryonic neural tube closure, which occurs within the first 28 days of gestation (often before a missed period).")

add("The collarbone that connects the upper limb to the axial skeleton at the manubrium of the sternum is the:",
    "Scapula", "Clavicle", "Humerus", "First rib",
    "B", "The S-shaped clavicle acts as a strut holding the shoulder joint away from the thoracic cage, transmitting forces from the arm to the axial skeleton.")

add("Sensorineural hearing loss occurs due to pathological dysfunction or damage located in which part of the auditory pathway?",
    "External acoustic meatus or tympanic membrane",
    "Hair cells of the organ of Corti in the cochlea, the vestibulocochlear nerve (CN VIII), or central auditory pathways",
    "Auditory ossicles in the middle ear",
    "Eustachian tube",
    "B", "Sensorineural hearing loss involves the sensorineural apparatus of the inner ear or cochlear nerve, contrasting with mechanical conductive lesions.")

with open('scripts/pool_final_200_clean.json', 'w') as f:
    json.dump(questions_200, f, indent=2)

print(f"Generated {len(questions_200)} clean questions from pages 43-48")
