# Final set of authentic questions covering Community Health, Public Health, Research & Pathology
import json

FINAL_QUESTIONS = [
    {
        "question": "According to World Health Organization standards for potable drinking water, water is classified as microbiologically unsafe if the count of coliform bacteria exceeds:",
        "optionA": "Zero coliform organisms per 100 mL of water",
        "optionB": "5 coliforms per 100 mL",
        "optionC": "15 coliforms per 100 mL",
        "optionD": "50 coliforms per 100 mL",
        "correctAnswer": "A",
        "explanation": "WHO drinking water guidelines specify that E. coli or thermotolerant coliform bacteria must not be detectable in any 100 mL sample of treated drinking water (zero count)."
    },
    {
        "question": "Which of the following infectious diseases is classified as a water-based disease where the pathogen spends part of its life cycle in an aquatic snail host?",
        "optionA": "Cholera",
        "optionB": "Schistosomiasis (Bilharziasis)",
        "optionC": "Trachoma",
        "optionD": "Scabies",
        "correctAnswer": "B",
        "explanation": "Water-based diseases (such as Schistosomiasis and Dracunculiasis) depend on aquatic intermediate hosts (freshwater snails, copepods) to complete their developmental life cycle."
    },
    {
        "question": "Which gaseous pollutant emitted by motor vehicle exhaust binds to hemoglobin with an affinity over 200 times greater than oxygen, forming carboxyhemoglobin?",
        "optionA": "Carbon dioxide (CO2)",
        "optionB": "Carbon monoxide (CO)",
        "optionC": "Sulfur dioxide (SO2)",
        "optionD": "Nitrogen dioxide (NO2)",
        "correctAnswer": "B",
        "explanation": "Carbon monoxide competitively binds to ferrous iron in hemoglobin with high affinity, shifting the oxygen dissociation curve left and preventing cellular oxygen release."
    },
    {
        "question": "The potent exotoxin (tetanospasmin) released by Clostridium tetani exerts its pathological effect primarily by:",
        "optionA": "Damaging the vascular endothelial lining of pulmonary capillaries",
        "optionB": "Retrogradely traveling along motor axons to block the release of inhibitory neurotransmitters (GABA and glycine) in the spinal cord",
        "optionC": "Directly destroying acetylcholine at the motor endplate",
        "optionD": "Inhibiting sodium channels in peripheral nerves",
        "correctAnswer": "B",
        "explanation": "Tetanospasmin prevents the presynaptic exocytosis of GABA and glycine from Renshaw cells, causing uncontrolled, agonizing reflex spasms and muscular rigidity."
    },
    {
        "question": "Which immunoglobulin is the only class capable of actively crossing the human maternal-placental barrier to confer passive natural immunity to the developing fetus?",
        "optionA": "Immunoglobulin A (IgA)",
        "optionB": "Immunoglobulin G (IgG)",
        "optionC": "Immunoglobulin M (IgM)",
        "optionD": "Immunoglobulin E (IgE)",
        "correctAnswer": "B",
        "explanation": "IgG is selectively transported across the syncytiotrophoblast via the neonatal Fc receptor (FcRn), providing the newborn with circulating humoral immunity for several months."
    },
    {
        "question": "Which immunoglobulin isotype is present in high concentrations in maternal colostrum, breast milk, tears, and saliva, protecting mucosal membranes?",
        "optionA": "Immunoglobulin G (IgG)",
        "optionB": "Secretory Immunoglobulin A (sIgA)",
        "optionC": "Immunoglobulin D (IgD)",
        "optionD": "Immunoglobulin M (IgM)",
        "correctAnswer": "B",
        "explanation": "Secretory dimeric IgA resists enzymatic degradation in gastrointestinal fluids and prevents adhesion of viral and bacterial pathogens to mucosal surfaces."
    },
    {
        "question": "Which immunoglobulin is the first antibody produced by mature plasma cells during the primary humoral immune response to a novel pathogen?",
        "optionA": "Immunoglobulin G (IgG)",
        "optionB": "Immunoglobulin M (IgM)",
        "optionC": "Immunoglobulin E (IgE)",
        "optionD": "Immunoglobulin A (IgA)",
        "correctAnswer": "B",
        "explanation": "Pentameric IgM is the earliest immunoglobulin synthesized in the primary immune response; its ten antigen-binding sites make it highly efficient at agglutination and complement fixation."
    },
    {
        "question": "In Nigeria, the National Primary Health Care Development Agency (NPHCDA) was formally established by federal decree in the year:",
        "optionA": "1978",
        "optionB": "1988",
        "optionC": "1992",
        "optionD": "2000",
        "correctAnswer": "C",
        "explanation": "The NPHCDA was established in 1992 to support the implementation, technical supervision, and resource mobilization for the national primary healthcare policy."
    },
    {
        "question": "Which level of healthcare in Nigeria is primarily organized at the Local Government Area (LGA) level and represents the first point of contact between community members and the health system?",
        "optionA": "Tertiary healthcare (Teaching hospitals and Federal Medical Centers)",
        "optionB": "Secondary healthcare (General hospitals)",
        "optionC": "Primary Health Care (Health posts and Comprehensive Health Centers)",
        "optionD": "Quaternary private specialist centers",
        "correctAnswer": "C",
        "explanation": "Primary health care is managed by Local Government Councils, delivering basic essential curative, preventive, promotive, and maternal-child services at the grassroots level."
    },
    {
        "question": "The parasympathomimetic pharmacological agent bethanechol chloride is administered in post-operative urinary retention because it:",
        "optionA": "Relaxes the renal pelvis",
        "optionB": "Selectively stimulates muscarinic receptors on the detrusor muscle, causing it to contract and facilitating bladder emptying",
        "optionC": "Inhibits sympathetic alpha-1 receptors on the bladder dome",
        "optionD": "Acts as an osmotic diuretic in the loop of Henle",
        "correctAnswer": "B",
        "explanation": "Bethanechol is a direct-acting muscarinic agonist that stimulates detrusor smooth muscle contraction while relaxing the internal urethral sphincter to restore voiding."
    },
    {
        "question": "Which exercise regimen is instructed by the community health nurse to strengthen the pelvic floor pubococcygeus muscles and treat stress urinary incontinence?",
        "optionA": "Abdominal crunch sit-ups",
        "optionB": "Kegel exercises (repetitive isometric pelvic floor muscle contraction and relaxation)",
        "optionC": "Quadriceps wall squats",
        "optionD": "Aerobic jogging",
        "correctAnswer": "B",
        "explanation": "Kegel exercises strengthen the levator ani and pubococcygeus muscular sling supporting the bladder neck and urethra, increasing urethral closure pressure."
    },
    {
        "question": "The overwhelming majority (approx. 80-90%) of uncomplicated community-acquired urinary tract infections (UTIs) are caused by which Gram-negative uropathogen?",
        "optionA": "Klebsiella pneumoniae",
        "optionB": "Escherichia coli",
        "optionC": "Proteus mirabilis",
        "optionD": "Pseudomonas aeruginosa",
        "correctAnswer": "B",
        "explanation": "Uropathogenic Escherichia coli (UPEC) possessing P-fimbriae ascends from the perineal flora through the urethra into the bladder to cause acute cystitis."
    },
    {
        "question": "Urinalysis finding of significant protein (proteinuria >= 30 mg/dL or 1+) on consecutive routine dipstick screenings in an adult indicates:",
        "optionA": "Normal urinary concentrating ability",
        "optionB": "Increased glomerular capillary permeability or renal tubular pathology",
        "optionC": "Excessive intake of dietary carbohydrates",
        "optionD": "Normal shedding of transitional bladder urothelium",
        "correctAnswer": "B",
        "explanation": "Under intact glomerular basement membrane charge and pore filtration barriers, large plasma proteins like albumin do not pass into urine; proteinuria signals glomerular damage."
    },
    {
        "question": "In assessing a client with acute post-streptococcal glomerulonephritis, why does edema typically manifest first in the periorbital tissues in the morning?",
        "optionA": "Gravity causes fluid to pool in the low-resistance loose subcutaneous tissues of the eyelids during recumbency",
        "optionB": "The eye is the primary site of streptococcal replication",
        "optionC": "Increased lacrimal duct secretion",
        "optionD": "High intraocular pressure",
        "correctAnswer": "A",
        "explanation": "Sodium and water retention combined with proteinuria decreases oncotic pressure; sleeping supine redistributes fluid into loose dependent periorbital tissue."
    },
    {
        "question": "Which function is considered a core promotional and preventive responsibility of the Community Health Nurse?",
        "optionA": "Performing major open surgical procedures in the community",
        "optionB": "Conducting community health needs assessments, health education, epidemiological surveillance, and childhood immunization outreach",
        "optionC": "Selling private unregulated pharmaceuticals to villagers",
        "optionD": "Hospital admission fee collection",
        "correctAnswer": "B",
        "explanation": "Community health nurses focus on community diagnosis, disease prevention, health promotion, maternal-child welfare, and environmental hygiene."
    },
    {
        "question": "A client with active pulmonary tuberculosis is started on the standard WHO Directly Observed Treatment Short-course (DOTS) regimen. The initial intensive phase consists of:",
        "optionA": "Isoniazid and Rifampicin for 9 months",
        "optionB": "Isoniazid, Rifampicin, Pyrazinamide, and Ethambutol (HRZE) daily for 2 months",
        "optionC": "Streptomycin alone for 6 weeks",
        "optionD": "Ciprofloxacin and Doxycycline for 1 month",
        "correctAnswer": "B",
        "explanation": "The standard first-line intensive phase utilizes a four-drug fixed-dose combination (HRZE) for 2 months to rapidly kill bacilli and prevent drug-resistant mutants."
    },
    {
        "question": "In a child with chickenpox (varicella), when is the child no longer considered contagious and permitted to return to school?",
        "optionA": "When the fever resolves completely",
        "optionB": "When all cutaneous vesicles have dried completely and formed crusts (scabs)",
        "optionC": "Exactly 48 hours after the first vesicle appears",
        "optionD": "When the child is given oral acyclovir",
        "correctAnswer": "B",
        "explanation": "Varicella is communicable from 1 to 2 days before rash onset until all skin lesions have crusted over completely, typically 6 to 7 days after the first crop."
    },
    {
        "question": "The solid waste management strategy where organic biodegradable domestic waste is biologically decomposed into nutrient-rich soil humus is known as:",
        "optionA": "Incineration",
        "optionB": "Composting",
        "optionC": "Deep-well injection",
        "optionD": "Open-air burning",
        "correctAnswer": "B",
        "explanation": "Composting is the controlled aerobic biological decomposition of organic municipal solid wastes by microorganisms into agricultural soil fertilizer."
    },
    {
        "question": "The primary stage of Syphilis infection is clinically characterized by the appearance of a:",
        "optionA": "Generalized maculopapular rash on the palms and soles",
        "optionB": "Single, painless indurated ulcer with a clean base (hard chancre) at the inoculation site",
        "optionC": "Cardiovascular aortic aneurysm",
        "optionD": "Gummatous granuloma in the liver",
        "correctAnswer": "B",
        "explanation": "The primary lesion of syphilis is the chancre, which erupts 2 to 3 weeks after contact as a painless, indurated ulcer teeming with Treponema pallidum."
    },
    {
        "question": "Under the regulatory mandate of the National Agency for Food and Drug Administration and Control (NAFDAC) in Nigeria, the agency is empowered to:",
        "optionA": "Enact national tax legislation",
        "optionB": "Regulate and control the importation, manufacture, distribution, advertisement, and sale of food, drugs, cosmetics, medical devices, and packaged water",
        "optionC": "Manage hospital emergency admissions directly",
        "optionD": "Prescribe individual medications to ward patients",
        "correctAnswer": "B",
        "explanation": "NAFDAC ensures the safety, efficacy, and quality of regulated consumable products, pharmaceuticals, chemicals, and medical devices nationwide."
    },
    {
        "question": "Which clinical thermometer provides the most rapid, non-invasive assessment of core body temperature by measuring infrared emissions from the vascular tympanic membrane?",
        "optionA": "Oral mercury-in-glass thermometer",
        "optionB": "Infrared tympanic thermometer",
        "optionC": "Axillary glass thermometer",
        "optionD": "Liquid crystal forehead strip",
        "correctAnswer": "B",
        "explanation": "The tympanic membrane shares its arterial blood supply with the hypothalamic thermoregulatory center, providing an accurate, rapid (<2 seconds) core temperature reading."
    },
    {
        "question": "Pertussis (Whooping cough) caused by Bordetella pertussis progresses through three clinical stages in which chronological order?",
        "optionA": "Paroxysmal stage, Catarrhal stage, Convalescent stage",
        "optionB": "Catarrhal stage, Paroxysmal stage, Convalescent stage",
        "optionC": "Incubation stage, Latent stage, Eruptive stage",
        "optionD": "Prodromal stage, Exanthematous stage, Terminal stage",
        "correctAnswer": "B",
        "explanation": "Pertussis starts with the catarrhal stage (rhinorrhea, low-grade fever for 1-2 weeks), advances to paroxysmal coughing spasms with inspiratory whoop (2-6 weeks), and ends in convalescence."
    },
    {
        "question": "In research methodology, the extent to which a measuring instrument or questionnaire yields consistent, stable, and reproducible results on repeated administration is known as:",
        "optionA": "Validity",
        "optionB": "Reliability",
        "optionC": "Objectivity",
        "optionD": "Generalizability",
        "correctAnswer": "B",
        "explanation": "Reliability reflects the internal consistency and stability of a measurement tool; validity refers to whether the tool accurately measures what it was intended to measure."
    },
    {
        "question": "In biometric and epidemiological research, the spread or difference between the highest observed numerical value and the lowest observed value in a data set is the:",
        "optionA": "Variance",
        "optionB": "Range",
        "optionC": "Standard deviation",
        "optionD": "Interquartile mean",
        "correctAnswer": "B",
        "explanation": "The range is the simplest measure of statistical dispersion, calculated as: Maximum Value minus Minimum Value."
    },
    {
        "question": "A clinical study design where the investigator manipulates an independent variable (e.g., a new nursing protocol) and compares the outcome against a randomized control group is a:",
        "optionA": "Descriptive survey",
        "optionB": "True experimental randomized controlled trial (RCT)",
        "optionC": "Retrospective case report",
        "optionD": "Historical archival study",
        "correctAnswer": "B",
        "explanation": "An experimental RCT is characterized by three core criteria: active manipulation of the intervention, presence of a comparison control group, and random assignment."
    }
]

with open('scripts/final_batch_questions.json', 'w') as f:
    json.dump(FINAL_QUESTIONS, f, indent=2)

print(f"Generated {len(FINAL_QUESTIONS)} final batch questions")
