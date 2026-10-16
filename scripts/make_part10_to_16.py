import json, re

# Load existing
with open('scripts/existing_questions.json') as f:
    existing = set(json.load(f))

# Define batches
batch_endocrine = [
    {
        "question": "The anatomical hypophyseal portal system connects the primary capillary plexus of the median eminence with the:",
        "optionA": "Posterior lobe of the pituitary (neurohypophysis)",
        "optionB": "Anterior lobe of the pituitary (adenohypophysis)",
        "optionC": "Pineal gland",
        "optionD": "Adrenal cortex",
        "correctAnswer": "B",
        "explanation": "The hypophyseal portal system transports hypothalamic releasing and inhibiting hormones to anterior pituitary troph cells."
    },
    {
        "question": "Which of the following endocrine hormones is synthesized by magnocellular neurons in the supraoptic and paraventricular nuclei of the hypothalamus and stored in the posterior pituitary?",
        "optionA": "Growth hormone (GH) and Prolactin",
        "optionB": "Oxytocin and Antidiuretic hormone (ADH / Vasopressin)",
        "optionC": "Adrenocorticotropic hormone (ACTH)",
        "optionD": "Thyroid stimulating hormone (TSH)",
        "correctAnswer": "B",
        "explanation": "ADH and oxytocin are synthesized in hypothalamic nuclei, axonally transported down the hypothalamo-hypophyseal tract, and stored in the neurohypophysis."
    },
    {
        "question": "Severe pathological hypersecretion of growth hormone (GH) occurring after the closure of epiphyseal growth plates in an adult causes:",
        "optionA": "Pituitary gigantism",
        "optionB": "Acromegaly (coarsening of facial features, spade-like enlargement of hands and feet, and prognathism)",
        "optionC": "Cushing's disease",
        "optionD": "Simmonds' panhypopituitarism",
        "correctAnswer": "B",
        "explanation": "After epiphyseal fusion, excess GH causes membranous bone and soft tissue hypertrophy (acromegaly) rather than longitudinal growth."
    },
    {
        "question": "The clinical hallmarks of Graves' disease (autoimmune hyperthyroidism) include all of the following EXCEPT:",
        "optionA": "Heat intolerance, unexplained weight loss despite hyperphagia, and fine resting tremors",
        "optionB": "Exophthalmos (infiltrative ophthalmopathy) and diffuse thyromegaly",
        "optionC": "Severe cold intolerance, coarse dry skin, and profound bradycardia",
        "optionD": "Sinus tachycardia, palpitations, and systolic hypertension",
        "correctAnswer": "C",
        "explanation": "Cold intolerance, dry skin, and bradycardia are classic manifestations of hypothyroidism (myxedema), not hyperthyroidism."
    },
    {
        "question": "Parathyroid hormone (PTH) acts on target tissues to elevate extracellular ionized calcium levels through which physiological actions?",
        "optionA": "Stimulating osteoclastic bone resorption, increasing distal renal tubular calcium reabsorption, and activating 1-alpha-hydroxylase for Vitamin D synthesis",
        "optionB": "Directly depositing calcium into bone matrix via osteoblasts",
        "optionC": "Inhibiting intestinal calcium absorption",
        "optionD": "Increasing renal tubular phosphate reabsorption",
        "correctAnswer": "A",
        "explanation": "PTH mobilizes calcium from bone, retains calcium in kidneys, and stimulates calcitriol synthesis to increase gut calcium absorption."
    },
    {
        "question": "In the microscopic architecture of the adrenal cortex, aldosterone (the primary mineralocorticoid) is synthesized exclusively by the:",
        "optionA": "Zona glomerulosa (outermost layer)",
        "optionB": "Zona fasciculata (middle layer)",
        "optionC": "Zona reticularis (innermost layer)",
        "optionD": "Chromaffin cells of the adrenal medulla",
        "correctAnswer": "A",
        "explanation": "The zona glomerulosa possesses aldosterone synthase, which converts corticosterone to aldosterone under angiotensin II control."
    },
    {
        "question": "Glucagon, the physiological counter-regulatory hyperglycemic peptide hormone, is secreted by which pancreatic islet cells?",
        "optionA": "Beta cells",
        "optionB": "Alpha cells",
        "optionC": "Delta cells",
        "optionD": "F (PP) cells",
        "correctAnswer": "B",
        "explanation": "Alpha cells secrete glucagon in response to hypoglycemia, stimulating hepatic glycogen breakdown (glycogenolysis) and gluconeogenesis."
    },
    {
        "question": "The clinical triad of polyuria, polydipsia, and polyphagia accompanied by unexplained weight loss in Type 1 Diabetes Mellitus results from:",
        "optionA": "Autoimmune destruction of pancreatic beta cells leading to absolute insulin deficiency and marked hyperglycemia",
        "optionB": "Excessive secretion of antidiuretic hormone",
        "optionC": "Hypertrophy of the adrenal cortex",
        "optionD": "Impaired intestinal glucose absorption",
        "correctAnswer": "A",
        "explanation": "Absolute lack of insulin prevents glucose utilization, producing glucosuria-induced osmotic diuresis (polyuria), thirst (polydipsia), and cellular starvation (polyphagia)."
    },
    {
        "question": "In the negative feedback regulation of the thyroid axis, elevated circulating levels of free thyroxine (T4) and triiodothyronine (T3) act on the pituitary and hypothalamus to:",
        "optionA": "Stimulate further massive release of TSH and TRH",
        "optionB": "Inhibit and suppress the secretion of Thyroid Stimulating Hormone (TSH) and Thyrotropin Releasing Hormone (TRH)",
        "optionC": "Accelerate growth hormone secretion",
        "optionD": "Directly destroy thyroid follicular cells",
        "correctAnswer": "B",
        "explanation": "Free thyroid hormones exert negative feedback inhibition on both pituitary thyrotropes (TSH) and hypothalamic TRH neurons."
    },
    {
        "question": "The hormone secreted by the pineal gland that exhibits a marked nocturnal surge to synchronize human circadian sleep-wake cycles is:",
        "optionA": "Melatonin",
        "optionB": "Serotonin",
        "optionC": "Dopamine",
        "optionD": "Endorphin",
        "correctAnswer": "A",
        "explanation": "Darkness stimulates the suprachiasmatic nucleus to signal the pineal gland to synthesize and release melatonin, promoting sleep."
    }
]

batch_reproductive = [
    {
        "question": "The physiological site in the female reproductive tract where normal fertilization of the secondary oocyte typically occurs is the:",
        "optionA": "Uterine cavity (endometrium)",
        "optionB": "Ampulla of the fallopian (uterine) tube",
        "optionC": "Cervical canal",
        "optionD": "Ovarian stroma",
        "correctAnswer": "B",
        "explanation": "The ampulla is the widest and longest section of the fallopian tube where sperm capacitation and fertilization normally take place."
    },
    {
        "question": "In a regular 28-day menstrual cycle, ovulation of the mature graafian follicle is directly triggered by an acute pre-ovulatory surge of:",
        "optionA": "Progesterone",
        "optionB": "Luteinizing Hormone (LH)",
        "optionC": "Human Chorionic Gonadotropin (hCG)",
        "optionD": "Prolactin",
        "correctAnswer": "B",
        "explanation": "High sustained estrogen levels trigger positive feedback on the pituitary, generating a massive LH surge that precipitates follicular rupture ~24-36h later."
    },
    {
        "question": "Following ovulation, the collapsed ovarian follicular wall transforms into an active endocrine structure known as the:",
        "optionA": "Corpus albicans",
        "optionB": "Corpus luteum (secreting high levels of progesterone)",
        "optionC": "Atretic follicle",
        "optionD": "Germinal cyst",
        "correctAnswer": "B",
        "explanation": "The corpus luteum secretes progesterone and estrogen to transform the proliferative endometrium into a receptive secretory decidua."
    },
    {
        "question": "The normal anatomical position of the non-pregnant adult human uterus in relation to the urinary bladder and vagina is:",
        "optionA": "Retroverted and retroflexed",
        "optionB": "Anteverted and anteflexed",
        "optionC": "Completely vertical",
        "optionD": "Lateralized to the right iliac fossa",
        "correctAnswer": "B",
        "explanation": "The uterus normally tilts forward relative to the vagina (anteversion) and bends forward over the bladder (anteflexion)."
    },
    {
        "question": "The normal acidic pH (3.8 to 4.5) of the adult vaginal secretions that protects against opportunistic pathogens is maintained by:",
        "optionA": "Direct secretion of hydrochloric acid by vaginal glands",
        "optionB": "Lactobacillus acidophilus (Döderlein's bacilli) fermenting glycogen into lactic acid",
        "optionC": "Alkaline cervical mucus",
        "optionD": "Uterine transudate",
        "correctAnswer": "B",
        "explanation": "Estrogen increases vaginal epithelial glycogen; commensal lactobacilli metabolize glycogen to lactic acid, creating a protective acidic barrier."
    },
    {
        "question": "In the male reproductive system, spermatogenesis occurs within the walls of the:",
        "optionA": "Rete testis",
        "optionB": "Seminiferous tubules of the testes",
        "optionC": "Ejaculatory ducts",
        "optionD": "Corpora cavernosa",
        "correctAnswer": "B",
        "explanation": "Spermatogenic cells line the seminiferous tubules, supported by Sertoli (nurse) cells, undergoing meiosis to form spermatozoa."
    },
    {
        "question": "The interstitial cells of Leydig located between the seminiferous tubules in the male testes are stimulated by LH to synthesize:",
        "optionA": "Estriol",
        "optionB": "Testosterone (the principal male androgen)",
        "optionC": "Inhibin B",
        "optionD": "Follicle stimulating hormone",
        "correctAnswer": "B",
        "explanation": "Luteinizing hormone (ICSH in males) stimulates Leydig cells to produce testosterone, essential for virilization and spermatogenesis."
    },
    {
        "question": "The comma-shaped, highly coiled tubular organ situated along the superior and posterior margin of each testis where sperm undergo maturation and acquire motility is the:",
        "optionA": "Vas deferens",
        "optionB": "Epididymis",
        "optionC": "Prostate gland",
        "optionD": "Seminal vesicle",
        "correctAnswer": "B",
        "explanation": "Sperm spend approximately 12 to 14 days traversing the epididymal head, body, and tail, developing forward motility and fertilizing capacity."
    },
    {
        "question": "The accessory male reproductive glands that secrete an alkaline, fructose-rich fluid comprising approximately 60% of total ejaculate volume are the:",
        "optionA": "Bulbourethral (Cowper's) glands",
        "optionB": "Seminal vesicles",
        "optionC": "Prostate gland",
        "optionD": "Testicular lobules",
        "correctAnswer": "B",
        "explanation": "Seminal vesicle fluid is rich in fructose (nourishing sperm), prostaglandins, and fibrinogen, making up the bulk of semen volume."
    },
    {
        "question": "Permanent physiological cessation of ovarian follicular activity and menstrual function for 12 consecutive months is defined as:",
        "optionA": "Oligomenorrhea",
        "optionB": "Menopause (climacteric)",
        "optionC": "Amenorrhea of pregnancy",
        "optionD": "Dysmenorrhea",
        "correctAnswer": "B",
        "explanation": "Menopause marks the depletion of ovarian follicles and drop in estrogen, clinically diagnosed after 12 months of amenorrhea."
    }
]

batch_nutrition_biochem = [
    {
        "question": "The fat-soluble vitamin that acts as an essential intracellular antioxidant protecting polyunsaturated membrane lipids from oxidative free radical damage is:",
        "optionA": "Vitamin A",
        "optionB": "Vitamin E (Alpha-tocopherol)",
        "optionC": "Vitamin K",
        "optionD": "Vitamin D",
        "correctAnswer": "B",
        "explanation": "Vitamin E terminates lipid peroxidation chain reactions in cellular membranes, protecting erythrocytes and neurons from oxidative lysis."
    },
    {
        "question": "Pellagra is a severe nutritional deficiency syndrome characterized by the classic '4 Ds' (Dermatitis, Diarrhea, Dementia, and Death) caused by deficiency of:",
        "optionA": "Thiamine (B1)",
        "optionB": "Riboflavin (B2)",
        "optionC": "Niacin (Vitamin B3 / Nicotinic acid)",
        "optionD": "Pyridoxine (B6)",
        "correctAnswer": "C",
        "explanation": "Niacin is the precursor for NAD and NADP; deficiency causes photosensitive casall-necklace dermatitis, enteritis, and encephalopathy (pellagra)."
    },
    {
        "question": "Severe deficiency of Vitamin A in pediatric populations causes which ocular pathology that is the leading cause of preventable childhood blindness worldwide?",
        "optionA": "Congenital cataracts",
        "optionB": "Xerophthalmia (Bitot's spots, corneal xerosis, and keratomalacia)",
        "optionC": "Angle-closure glaucoma",
        "optionD": "Retinal detachment",
        "correctAnswer": "B",
        "explanation": "Vitamin A is essential for mucin-secreting goblet cells and corneal integrity; deficiency causes xerophthalmia and corneal melting (keratomalacia)."
    },
    {
        "question": "A complete dietary protein source is one that contains:",
        "optionA": "Only non-essential amino acids synthesized by the human liver",
        "optionB": "All nine essential amino acids in adequate biological proportions required for human tissue synthesis and repair",
        "optionC": "Equal amounts of lipid and carbohydrate calories",
        "optionD": "Zero nitrogen atoms",
        "correctAnswer": "B",
        "explanation": "Complete proteins (eggs, meat, fish, milk, soy) supply all 9 essential amino acids that the human body cannot synthesize de novo."
    },
    {
        "question": "Dietary absorption of non-heme iron from plant sources is significantly enhanced when consumed concurrently with foods rich in:",
        "optionA": "Calcium and dairy milk",
        "optionB": "Vitamin C (Ascorbic acid)",
        "optionC": "Tannins and tea",
        "optionD": "Phytates and fiber",
        "correctAnswer": "B",
        "explanation": "Vitamin C reduces ferric iron (Fe3+) to the more soluble and absorbable ferrous state (Fe2+) in the acidic gastric and duodenal lumen."
    },
    {
        "question": "In a client experiencing chronic severe protein-calorie malnutrition (Kwashiorkor), the generalized ascites and peripheral edema are caused by:",
        "optionA": "Excessive intake of sodium chloride",
        "optionB": "Severe hypoproteinemia and hypoalbuminemia, causing a precipitous drop in plasma oncotic pressure and third-spacing of fluid",
        "optionC": "Acute bilateral renal artery stenosis",
        "optionD": "Hypercalcemic tetany",
        "correctAnswer": "B",
        "explanation": "Severe protein deficiency impairs hepatic albumin synthesis, decreasing intravascular oncotic pressure and causing dependent edema."
    },
    {
        "question": "The trace mineral element incorporated into thyroid hormones that regulates basal metabolic rate is:",
        "optionA": "Zinc",
        "optionB": "Iodine",
        "optionC": "Cobalt",
        "optionD": "Manganese",
        "correctAnswer": "B",
        "explanation": "Iodine is covalently bound to tyrosine residues on thyroglobulin to form thyroxine (T4) and triiodothyronine (T3)."
    },
    {
        "question": "A client with chronic kidney disease must restrict dietary potassium. Which fruit should the nurse advise the client to avoid due to its high potassium content?",
        "optionA": "Apples",
        "optionB": "Bananas (and oranges/avocados)",
        "optionC": "Blueberries",
        "optionD": "Cranberries",
        "correctAnswer": "B",
        "explanation": "Bananas, oranges, cantaloupes, and potatoes are high in potassium (>400 mg/serving) and can precipitate fatal hyperkalemia in renal disease."
    },
    {
        "question": "Angular stomatitis, painful erythematous fissures at the corners of the mouth, and magenta-colored glossitis are clinical signs of deficiency of:",
        "optionA": "Thiamine (B1)",
        "optionB": "Riboflavin (Vitamin B2)",
        "optionC": "Vitamin D",
        "optionD": "Vitamin K",
        "correctAnswer": "B",
        "explanation": "Ariboflavinosis (Vitamin B2 deficiency) causes cheilosis, angular stomatitis, corneal vascularization, and a purple-red smooth tongue."
    },
    {
        "question": "The primary storage carbohydrate in the human body, stored predominantly in skeletal muscle fibers and the liver, is:",
        "optionA": "Starch",
        "optionB": "Glycogen",
        "optionC": "Cellulose",
        "optionD": "Maltose",
        "correctAnswer": "B",
        "explanation": "Glycogen is a branched polymer of glucose molecules serving as the readily mobilizable energy reserve in liver and muscle."
    }
]

batch_fluids_acid_base = [
    {
        "question": "In healthy human adults, total body water (TBW) constitutes approximately what percentage of total lean body weight?",
        "optionA": "25% to 35%",
        "optionB": "55% to 60% in adult males (approx. 50% in adult females)",
        "optionC": "85% to 95%",
        "optionD": "40% in term neonates",
        "correctAnswer": "B",
        "explanation": "Total body water accounts for ~60% of body mass in adult males and ~50% in females due to higher adipose tissue content."
    },
    {
        "question": "The movement of water across a semipermeable cell membrane from an area of lower solute concentration to an area of higher solute concentration is termed:",
        "optionA": "Active transport",
        "optionB": "Osmosis",
        "optionC": "Filtration",
        "optionD": "Facilitated diffusion",
        "correctAnswer": "B",
        "explanation": "Osmosis is the spontaneous net movement of solvent molecules through a selectively permeable membrane toward higher solute osmolarity."
    },
    {
        "question": "The reference physiological arterial blood gas range for normal arterial blood pH in an adult is strictly maintained between:",
        "optionA": "7.00 and 7.20",
        "optionB": "7.35 and 7.45",
        "optionC": "7.50 and 7.65",
        "optionD": "6.80 and 7.00",
        "correctAnswer": "B",
        "explanation": "Normal physiological extracellular pH is tightly regulated within the narrow range of 7.35 to 7.45 by chemical buffers, lungs, and kidneys."
    },
    {
        "question": "An arterial blood gas (ABG) showing pH 7.28, PaCO2 56 mmHg, and HCO3- 25 mEq/L in a client with an acute COPD exacerbation is interpreted as:",
        "optionA": "Uncompensated respiratory acidosis",
        "optionB": "Compensated metabolic acidosis",
        "optionC": "Uncompensated respiratory alkalosis",
        "optionD": "Fully compensated metabolic alkalosis",
        "correctAnswer": "A",
        "explanation": "pH < 7.35 indicates acidosis; elevated PaCO2 (>45) indicates alveolar hypoventilation as the primary respiratory etiology; normal HCO3- shows acute uncompensated status."
    },
    {
        "question": "An arterial blood gas (ABG) showing pH 7.50, PaCO2 28 mmHg, and HCO3- 23 mEq/L in a client experiencing an acute panic hyperventilation attack is:",
        "optionA": "Uncompensated respiratory alkalosis",
        "optionB": "Uncompensated metabolic acidosis",
        "optionC": "Compensated respiratory acidosis",
        "optionD": "Metabolic alkalosis",
        "correctAnswer": "A",
        "explanation": "Hyperventilation blows off carbon dioxide (low PaCO2), raising arterial pH above 7.45, producing uncompensated respiratory alkalosis."
    },
    {
        "question": "A client with protracted, severe vomiting and nasogastric tube drainage loses large volumes of gastric hydrochloric acid. The expected acid-base imbalance is:",
        "optionA": "Respiratory acidosis",
        "optionB": "Metabolic alkalosis with hypokalemia and hypochloremia",
        "optionC": "Metabolic acidosis with hyperkalemia",
        "optionD": "Respiratory alkalosis",
        "correctAnswer": "B",
        "explanation": "Loss of gastric HCl generates excess circulating bicarbonate (metabolic alkalosis) while renal potassium wasting worsens hypokalemia."
    },
    {
        "question": "The normal reference laboratory range for serum sodium in a healthy adult is:",
        "optionA": "115 to 125 mEq/L",
        "optionB": "135 to 145 mEq/L",
        "optionC": "155 to 165 mEq/L",
        "optionD": "3.5 to 5.0 mEq/L",
        "correctAnswer": "B",
        "explanation": "Normal serum sodium is 135 to 145 mEq/L; sodium is the major determinant of extracellular fluid osmolarity."
    },
    {
        "question": "Severe symptomatic acute hyponatremia (serum sodium < 120 mEq/L) requires urgent neurological monitoring because it can precipitate:",
        "optionA": "Intense dehydration of brain cells",
        "optionB": "Cerebral edema, intracranial hypertension, generalized seizures, and tentorial herniation",
        "optionC": "Hyperglycemic hyperosmolar state",
        "optionD": "Sudden renal infarction",
        "correctAnswer": "B",
        "explanation": "Hypo-osmolar plasma causes water to shift into brain cells via osmosis, leading to acute cerebral edema and life-threatening seizures."
    },
    {
        "question": "The normal reference range for total serum calcium in an adult is:",
        "optionA": "4.0 to 6.0 mg/dL",
        "optionB": "8.5 to 10.5 mg/dL (or 2.15 to 2.55 mmol/L)",
        "optionC": "12.0 to 15.0 mg/dL",
        "optionD": "1.5 to 2.5 mg/dL",
        "correctAnswer": "B",
        "explanation": "Normal total serum calcium is 8.5 to 10.5 mg/dL; ionized physiologically active calcium is approximately 4.5 to 5.5 mg/dL."
    },
    {
        "question": "In a client presenting with acute hypercalcemia crisis (serum calcium > 14 mg/dL), the initial emergency medical intervention is:",
        "optionA": "Oral calcium carbonate supplements",
        "optionB": "Aggressive intravenous hydration with 0.9% Normal Saline followed by a loop diuretic (Furosemide)",
        "optionC": "Immediate potassium chloride IV bolus",
        "optionD": "Strict restriction of all intravenous fluids",
        "correctAnswer": "B",
        "explanation": "Normal saline expansion restores volume and promotes renal calcium excretion, while loop diuretics inhibit calcium reabsorption in the thick ascending limb."
    }
]

batch_immunology_infection = [
    {
        "question": "The cardinal local signs of acute tissue inflammation originally formulated by Celsus and Virchow are:",
        "optionA": "Pallor, hypothermia, paralysis, paresthesia, and pulselessness",
        "optionB": "Rubor (redness), Calor (heat), Tumor (swelling), Dolor (pain), and Functio laesa (loss of function)",
        "optionC": "Cyanosis, petechiae, ecchymosis, jaundice, and erythema",
        "optionD": "Atrophy, hypertrophy, hyperplasia, metaplasia, and dysplasia",
        "correctAnswer": "B",
        "explanation": "Vasodilation (rubor, calor), increased capillary permeability (tumor), sensory nerve stimulation (dolor), and tissue damage cause functional loss."
    },
    {
        "question": "The most abundant class of circulating immunoglobulins in human serum, comprising approximately 75% to 80% of total antibodies, is:",
        "optionA": "Immunoglobulin A (IgA)",
        "optionB": "Immunoglobulin G (IgG)",
        "optionC": "Immunoglobulin M (IgM)",
        "optionD": "Immunoglobulin E (IgE)",
        "correctAnswer": "B",
        "explanation": "IgG is the principal neutralizing, opsonizing antibody in secondary immune responses and the only class that crosses the human placenta."
    },
    {
        "question": "The largest, high-molecular-weight pentameric antibody produced first during an initial primary acute immune response to a pathogen is:",
        "optionA": "Immunoglobulin A (IgA)",
        "optionB": "Immunoglobulin M (IgM)",
        "optionC": "Immunoglobulin G (IgG)",
        "optionD": "Immunoglobulin D (IgD)",
        "correctAnswer": "B",
        "explanation": "IgM is a pentamer with 10 antigen-binding sites, highly effective in complement fixation and agglutination during early primary infections."
    },
    {
        "question": "Secretory Immunoglobulin A (sIgA) provides primary mucosal barrier defense against pathogens and is present in high concentrations in:",
        "optionA": "Cerebrospinal fluid",
        "optionB": "Saliva, colostrum, breast milk, tears, and gastrointestinal/respiratory secretions",
        "optionC": "Synovial joint fluid",
        "optionD": "Bone marrow aspirate",
        "correctAnswer": "B",
        "explanation": "Secretory IgA protects mucosal epithelium by neutralizing microbes before they can penetrate mucosal surfaces."
    },
    {
        "question": "Administering preformed human rabies immune globulin (RIG) or tetanus antitoxin to a non-immunized puncture wound victim provides:",
        "optionA": "Naturally acquired active immunity",
        "optionB": "Artificially acquired passive immunity",
        "optionC": "Naturally acquired passive immunity",
        "optionD": "Artificially acquired active immunity",
        "correctAnswer": "B",
        "explanation": "Exogenous administration of donor antibodies confers immediate, temporary protection without activating the recipient's own immune memory."
    },
    {
        "question": "In the epidemiological chain of infection, an individual who harbors a virulent pathogen without exhibiting overt clinical illness and can transmit it to others is a:",
        "optionA": "Susceptible host",
        "optionB": "Carrier",
        "optionC": "Fomite",
        "optionD": "Primary vector",
        "correctAnswer": "B",
        "explanation": "Carriers (asymptomatic, incubatory, or convalescent) shed microorganisms and serve as unrecognized reservoirs in disease transmission."
    },
    {
        "question": "In hospital infection control, an inanimate object or surface (such as a stethoscope, door handle, or bed rail) that transmits pathogens is called a:",
        "optionA": "Vector",
        "optionB": "Fomite",
        "optionC": "Reservoir host",
        "optionD": "Biological carrier",
        "correctAnswer": "B",
        "explanation": "Fomites are contaminated inanimate objects capable of transferring infectious organisms from one host to another."
    },
    {
        "question": "The single most effective, evidenced-based practice for preventing healthcare-associated (nosocomial) infections across clinical settings is:",
        "optionA": "Routine prophylactic prescription of broad-spectrum antibiotics to all patients",
        "optionB": "Meticulous hand hygiene (handwashing with soap and water or alcohol-based hand rub) before and after patient contact",
        "optionC": "Fumigating nursing stations weekly",
        "optionD": "Wearing sterile gowns for all routine vital signs",
        "correctAnswer": "B",
        "explanation": "Hand hygiene by healthcare personnel breaks the chain of contact transmission and is the cornerstone of infection prevention."
    },
    {
        "question": "Standard Precautions in healthcare infection control mandate that all blood and bodily fluids from all patients are treated as:",
        "optionA": "Completely sterile and harmless unless labeled otherwise",
        "optionB": "Potentially infectious for HIV, Hepatitis B, Hepatitis C, and other bloodborne pathogens",
        "optionC": "Contagious only if the patient has a documented fever",
        "optionD": "Safe to handle without gloves if hands are dry",
        "correctAnswer": "B",
        "explanation": "Standard precautions apply to all patients regardless of diagnosis, assuming all body fluids, non-intact skin, and mucous membranes are infectious."
    },
    {
        "question": "Which personal protective equipment (PPE) is strictly required when entering the negative-pressure isolation room of a client with active pulmonary tuberculosis?",
        "optionA": "A simple surgical paper mask",
        "optionB": "A properly fit-tested particulate respirator mask (such as N95 or FFP2)",
        "optionC": "Clean non-sterile gloves only",
        "optionD": "Sterile shoe covers alone",
        "correctAnswer": "B",
        "explanation": "M. tuberculosis is transmitted via droplet nuclei (<5 microns) suspended in air; an N95 respirator filters at least 95% of airborne particles."
    }
]

batch_management_research = [
    {
        "question": "In classical administrative management theory, Henri Fayol's principle of 'Unity of Command' stipulates that:",
        "optionA": "All organizational decisions must be voted on by majority staff",
        "optionB": "Each employee should receive orders and report to only one direct supervisor",
        "optionC": "Managers must command all departments simultaneously",
        "optionD": "Subordinates should rotate managers weekly",
        "correctAnswer": "B",
        "explanation": "Unity of command prevents conflicting instructions, confusion, and divided loyalty by maintaining a single line of authority."
    },
    {
        "question": "In nursing administration, the managerial concept of 'Span of Control' refers to:",
        "optionA": "The physical square footage of a hospital nursing unit",
        "optionB": "The number of subordinates or personnel that a nurse manager can directly and effectively supervise",
        "optionC": "The duration of an average nursing shift",
        "optionD": "The total budget allocated to an intensive care unit",
        "correctAnswer": "B",
        "explanation": "Span of management/control defines the number of direct reports a leader oversees, influencing organizational flatness or hierarchy."
    },
    {
        "question": "When a registered nurse delegates a clinical task to an unlicensed assistive personnel (UAP), the nurse understands that delegation involves:",
        "optionA": "Transferring both responsibility for performance and complete legal accountability for the patient outcome to the UAP",
        "optionB": "Transferring the responsibility for performing the specific task while the delegating RN retains ultimate professional accountability for the outcome",
        "optionC": "Relinquishing all professional nursing duties",
        "optionD": "Allowing the UAP to delegate tasks to other assistants",
        "correctAnswer": "B",
        "explanation": "The registered nurse can delegate task performance within the UAP's scope, but the RN remains accountable for evaluation and patient safety."
    },
    {
        "question": "The Five Rights of Clinical Delegation established by the ANA and NCSBN include all of the following EXCEPT:",
        "optionA": "Right task and Right circumstance",
        "optionB": "Right person and Right direction/communication",
        "optionC": "Right financial compensation for the assistant",
        "optionD": "Right supervision and evaluation",
        "correctAnswer": "C",
        "explanation": "The 5 Rights are: Right task, Right circumstance, Right person, Right direction/communication, and Right supervision/evaluation."
    },
    {
        "question": "Which leadership style is most effective and appropriate during an acute in-hospital cardiac arrest resuscitation code or mass disaster emergency?",
        "optionA": "Laissez-faire (hands-off permissive leadership)",
        "optionB": "Autocratic (directive/authoritarian leadership)",
        "optionC": "Democratic consensus-seeking leadership",
        "optionD": "Bureaucratic rule-checking leadership",
        "correctAnswer": "B",
        "explanation": "In life-or-death emergencies, an autocratic leader makes immediate authoritative decisions, assigning clear roles without delay."
    },
    {
        "question": "In professional nursing ethics, the principle of Veracity obligates the healthcare professional to:",
        "optionA": "Always conceal serious terminal diagnoses from the patient",
        "optionB": "Tell the truth, be honest, and avoid deception in all patient interactions",
        "optionC": "Prioritize hospital financial viability above patient care",
        "optionD": "Delegate complex clinical assessments to students",
        "correctAnswer": "B",
        "explanation": "Veracity is truth-telling; it forms the bedrock of patient trust and is essential for valid informed consent."
    },
    {
        "question": "The ethical and professional principle of Fidelity requires the nurse to:",
        "optionA": "Be loyal, keep commitments and promises made to patients, and maintain professional competence",
        "optionB": "Enforce identical rules on every client without exception",
        "optionC": "Disclose client secrets to roommates",
        "optionD": "Obey hospital policies even if they cause harm",
        "correctAnswer": "A",
        "explanation": "Fidelity involves faithfulness to professional obligations, keeping promises, and upholding the nurse-patient fiduciary relationship."
    },
    {
        "question": "In research methodology, a sampling technique where every single individual in the target population has an equal, independent chance of selection is:",
        "optionA": "Convenience sampling",
        "optionB": "Simple random sampling",
        "optionC": "Purposive judgment sampling",
        "optionD": "Snowball sampling",
        "correctAnswer": "B",
        "explanation": "Simple random sampling is probability sampling that eliminates researcher bias and enhances external validity and generalizability."
    },
    {
        "question": "A research hypothesis that formally predicts there is NO statistically significant difference or relationship between variables under study is the:",
        "optionA": "Alternative directional hypothesis",
        "optionB": "Null hypothesis (H0)",
        "optionC": "Complex interactive hypothesis",
        "optionD": "Causal predictive model",
        "correctAnswer": "B",
        "explanation": "The null hypothesis posits zero difference; statistical tests aim to reject the null hypothesis at a designated significance level (p < 0.05)."
    },
    {
        "question": "In biostatistical hypothesis testing, a calculated p-value of less than 0.05 (p < 0.05) conventional indicates that:",
        "optionA": "The study intervention has a 95% probability of being completely ineffective",
        "optionB": "The observed clinical difference between study groups is statistically significant and unlikely to have occurred solely by random chance",
        "optionC": "The sample size was too small to draw conclusions",
        "optionD": "A Type I error was definitively committed",
        "correctAnswer": "B",
        "explanation": "P < 0.05 means there is less than a 5% probability that the observed results occurred by chance alone, leading to rejection of the null hypothesis."
    }
]

all_new = (
    batch_endocrine +
    batch_reproductive +
    batch_nutrition_biochem +
    batch_fluids_acid_base +
    batch_immunology_infection +
    batch_management_research
)

print(f"Total new questions constructed in batches: {len(all_new)}")

# Filter out any duplicates against existing
unique_new = []
for q in all_new:
    k = re.sub(r'\s+', ' ', q['question'].strip().lower())
    if k not in existing:
        existing.add(k)
        unique_new.append(q)

print(f"Unique new non-colliding questions: {len(unique_new)}")

with open("scripts/batch_courses_questions.json", "w") as f:
    json.dump(unique_new, f, indent=2)

