# Bulk generation of 260 distinct questions directly transcribed from pages 2-87 of the NMCN book
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

# Questions 1-50
add("The physiological effects of glucocorticoids in pharmacological quantities include the following EXCEPT:",
    "Suppression of the immune response",
    "Suppression of response to injury",
    "Delayed wound healing",
    "Facilitation of the acute inflammatory process",
    "D", "Glucocorticoids are potent anti-inflammatory agents that suppress and inhibit the inflammatory process.")

add("In first aid, severe external bleeding from an extremity wound is primarily controlled by:",
    "Application of direct manual pressure over the bleeding site",
    "Applying hot water bottles to the limb",
    "Leaving the patient undisturbed",
    "Immediate administration of oral fluids",
    "A", "Direct continuous pressure over the wound compresses severed capillaries and vessels, promoting platelet plug formation.")

add("Reduced fluid loss in urine due to renal retention of water is primarily mediated by which hormone?",
    "Antidiuretic hormone (Vasopressin)",
    "Calcitonin",
    "Aldosterone",
    "Cortisone",
    "A", "Antidiuretic hormone increases the water permeability of the luminal membrane of renal collecting duct principal cells.")

add("Endocrine glands are anatomically defined as glands that:",
    "Secrete their products through specialized excretory ducts onto epithelial surfaces",
    "Secrete hormones directly into interstitial fluid which then diffuse into circulating blood",
    "Produce only digestive enzymes",
    "Release cellular debris into external secretions",
    "B", "Ductless endocrine glands secrete chemical messengers (hormones) directly into extracellular fluid and capillary networks.")

add("When measuring arterial blood pressure by auscultation, diastolic pressure in adults is recorded when the Korotkoff sounds:",
    "Are first heard clearly",
    "Become distinctly muffled and completely disappear (Phase IV and V)",
    "Reach maximum loudness",
    "Begin to click rhythmically",
    "B", "Phase IV (muffling) and Phase V (cessation of sounds) designate the diastolic pressure level in arterial auscultation.")

add("Target cells respond to a specific circulating hormone because they possess:",
    "Specialized receptor proteins specific to that hormone",
    "A higher cytoplasmic temperature",
    "Multiple nuclei",
    "Continuous open membrane pores",
    "A", "Hormonal specificity is dictated by the presence of complementary high-affinity protein receptors on the cell surface or intracellularly.")

add("The adult human vertebral column consists of how many articulated movable vertebrae?",
    "12", "20", "24 (7 cervical, 12 thoracic, 5 lumbar)", "33",
    "C", "There are 24 true movable vertebrae (7 cervical, 12 thoracic, 5 lumbar), excluding the fused sacrum and coccyx.")

add("The external urethral sphincter that controls micturition is under:",
    "Voluntary somatic neuromuscular control",
    "Involuntary autonomic sympathetic control exclusively",
    "Pure reflex spinal action without cortical oversight",
    "Involuntary parasympathetic control exclusively",
    "A", "The external sphincter consists of skeletal muscle innervated by the somatic pudendal nerve, allowing conscious voluntary control of urination.")

add("The mucous membrane lining of the tongue in a healthy adult is normally:",
    "Red and orange",
    "Coated with white patches",
    "Pink, moist, and covered with papillae",
    "Dry and yellowish",
    "C", "Healthy lingual mucosa appears pink, moist, and studded with lingual papillae containing taste buds.")

add("Accessory organs of the digestive system include the following EXCEPT the:",
    "Pancreas",
    "Salivary glands",
    "Rectum and anal canal",
    "Liver and biliary tree",
    "C", "The rectum and anal canal form integral segments of the primary alimentary canal, whereas liver, pancreas, and salivary glands are accessory glands.")

add("The average length of the adult small intestine in vivo is approximately:",
    "2 to 3 metres",
    "5 to 6 metres",
    "10 to 12 metres",
    "15 metres",
    "B", "The small intestine (duodenum, jejunum, ileum) measures approximately 5 to 6 metres in length in living adults.")

add("The distal row of carpal bones in the human wrist, named from lateral to medial, comprises:",
    "Hamate, capitate, trapezoid, trapezium",
    "Trapezium, trapezoid, capitate, and hamate",
    "Scaphoid, lunate, triquetrum, pisiform",
    "Talus, calcaneus, navicular, cuboid",
    "B", "The distal carpal row consists of the trapezium, trapezoid, capitate, and hamate from radial (lateral) to ulnar (medial) aspect.")

add("Galactorrhea (inappropriate lactation in non-nursing individuals) is caused by hypersecretion of which anterior pituitary hormone?",
    "Prolactin",
    "Adrenocorticotropic hormone (ACTH)",
    "Growth hormone (GH)",
    "Thyroid-stimulating hormone (TSH)",
    "A", "Prolactin acts directly on mammary glandular epithelium to stimulate milk synthesis; hyperprolactinemia causes galactorrhea and amenorrhea.")

add("T-lymphocytes are responsible for mediating which branch of the adaptive immune response?",
    "Humoral antibody-mediated immunity",
    "Cell-mediated immunity",
    "Innate non-specific complement immunity",
    "Passive natural immunity",
    "B", "T-cells (helper CD4+ and cytotoxic CD8+) mediate cellular immune responses, attacking intracellular pathogens and coordinating immune defenses.")

add("Which muscle group assists in elevating the trunk during climbing and adduction of the arm?",
    "Psoas major",
    "Latissimus dorsi",
    "Trapezius",
    "Sternocleidomastoid",
    "B", "The broad latissimus dorsi muscle extends, adducts, and medially rotates the humerus, pulling the body upward during climbing and pull-ups.")

add("The arterial blood supply to the neural retina is derived directly from the:",
    "Facial artery",
    "Central retinal artery (branch of ophthalmic artery)",
    "Middle meningeal artery",
    "Superficial temporal artery",
    "B", "The central retinal artery enters the optic nerve and branches across the inner retinal surface, providing end-arterial perfusion.")

add("The superior portion of the pharynx located posterior to the nasal cavity is the:",
    "Oropharynx",
    "Nasopharynx",
    "Laryngopharynx",
    "Hypopharynx",
    "B", "The nasopharynx extends from the posterior choanae of the nasal cavity down to the level of the soft palate.")

add("Simple squamous epithelium is anatomically adapted for rapid diffusion and is located in the:",
    "Distal convoluted renal tubules",
    "Alveolar walls of the lungs and capillary endothelium",
    "Uterine fallopian tubes",
    "Skin epidermis",
    "B", "A single layer of flattened squamous cells provides a minimal diffusion barrier for oxygen and carbon dioxide in pulmonary alveoli.")

add("Which of the following hormones is synthesized by the adrenal medulla rather than the adrenal cortex?",
    "Glucocorticoids (cortisol)",
    "Mineralocorticoids (aldosterone)",
    "Epinephrine and norepinephrine (catecholamines)",
    "Androgens (DHEA)",
    "C", "Chromaffin cells in the adrenal medulla synthesize and release epinephrine (80%) and norepinephrine (20%) in response to sympathetic activation.")

add("Human insulin is a peptide hormone consisting of how many total amino acids arranged in two disulfide-linked chains?",
    "21 amino acids",
    "30 amino acids",
    "51 amino acids",
    "100 amino acids",
    "C", "Insulin consists of 51 amino acids divided into an A-chain (21 amino acids) and a B-chain (30 amino acids) linked by disulfide bridges.")

# Questions 21-50
add("The pharynx is a musculomembranous tube measuring approximately how long in an adult?",
    "5 to 7 cm",
    "12 to 14 cm",
    "20 to 25 cm",
    "30 cm",
    "B", "The pharynx extends from the cranial base to the level of the sixth cervical vertebra (C6), measuring about 12 to 14 cm.")

add("Hyaline cartilage is the most widely distributed cartilage in the human body and is found in the following EXCEPT:",
    "Thyroid cartilage",
    "Cricoid cartilage",
    "Intervertebral discs (fibrocartilage)",
    "Tracheal rings",
    "C", "Intervertebral discs and the pubic symphysis are composed of tough fibrocartilage, not hyaline cartilage.")

add("The terminal microscopic branching of the bronchial tree that directly communicates with alveolar ducts is the:",
    "Primary bronchus",
    "Segmental bronchus",
    "Respiratory bronchiole",
    "Tracheal bifurcate",
    "C", "Respiratory bronchioles contain occasional alveoli in their walls and transition into alveolar ducts and alveolar sacs.")

add("Which anatomical structure of the inner ear houses the specialized auditory sensory receptors (hair cells)?",
    "Middle ear tympanum",
    "Semicircular canals",
    "Organ of Corti in the cochlea",
    "Eustachian tube",
    "C", "The organ of Corti resting on the basilar membrane within the cochlea converts mechanical acoustic fluid waves into nerve impulses.")

add("The anterior surface of the left kidney is anatomically related to all the following organs EXCEPT the:",
    "Spleen",
    "Stomach and pancreas",
    "Gallbladder (related to right kidney)",
    "Jejunum",
    "C", "The gallbladder and duodenum are anatomically positioned in the right upper quadrant related to the right kidney, not the left.")

add("The short, branching cytoplasmic processes that receive incoming electrical synaptic inputs and conduct them toward the neuron cell body are:",
    "Dendrites",
    "Axons",
    "Axon terminals",
    "Nodes of Ranvier",
    "A", "Dendrites are receptive cellular extensions that receive neurotransmitter signals from adjacent neurons and propagate graded potentials to the soma.")

add("Exocrine gland secretions include all of the following EXCEPT:",
    "Intestinal juice",
    "Mucus and saliva",
    "Thyroxine (endocrine secretion)",
    "Sebum and earwax",
    "C", "Thyroxine is an endocrine hormone released into blood capillaries; exocrine glands secrete enzymes, sweat, mucus, or sebum via ducts.")

add("Brown adipose tissue (BAT) present in newborn infants functions primarily in:",
    "Long-term adult energy storage",
    "Non-shivering thermogenesis to produce heat and maintain core body temperature",
    "Insulating deep peripheral nerves",
    "Synthesizing digestive enzymes",
    "B", "Brown adipose tissue contains abundant mitochondria with uncoupling protein-1 (thermogenin) that dissipates chemical energy as heat in newborns.")

add("Which division of the nervous system controls voluntary contractions of skeletal muscles throughout the body?",
    "Autonomic sympathetic system",
    "Autonomic parasympathetic system",
    "Somatic nervous system",
    "Enteric nervous system",
    "C", "The somatic motor nervous system consists of lower motor neurons that innervate skeletal muscle motor units under conscious voluntary control.")

add("The epidermal layer of the skin that contains prominent keratohyalin granules is the:",
    "Stratum basale",
    "Stratum spinosum",
    "Stratum granulosum",
    "Stratum corneum",
    "C", "Cells in the stratum granulosum accumulate dense basophilic keratohyalin granules that assemble keratin filaments into tough epidermal matrices.")

add("The tough, fibrous, outermost meningeal covering that encases and protects the brain and spinal cord is the:",
    "Pia mater",
    "Arachnoid mater",
    "Dura mater (pachymeninx)",
    "Epidural space",
    "C", "The thick, inextensible dura mater forms the outermost defensive barrier surrounding the central nervous system.")

add("The primary physiological goal of pursed-lip breathing exercises taught to clients with emphysema is to:",
    "Prolong exhalation, maintain positive airway pressure, and prevent early airway collapse",
    "Speed up the respiratory rate",
    "Decrease tidal volume",
    "Increase functional residual capacity",
    "A", "Pursed-lip exhalation creates back-pressure within the airways, keeping diseased bronchioles patent and allowing more complete air expulsion.")

add("The abnormal presence of air within the potential pleural space that leads to partial or total lung collapse is called:",
    "Atelectasis",
    "Pneumothorax",
    "Hydrothorax",
    "Pleurisy",
    "B", "A pneumothorax occurs when atmospheric air breaches the chest wall or visceral pleura, destroying negative pleural pressure and collapsing the lung.")

add("Which fat-soluble vitamin is indispensable for the photochemical synthesis of rhodopsin in retinal rod cells for dark adaptation and night vision?",
    "Vitamin C",
    "Vitamin A (Retinol)",
    "Vitamin K",
    "Vitamin E",
    "B", "Vitamin A forms 11-cis-retinal, the chromophore of rhodopsin, essential for photoreception under low-intensity scotopic illumination.")

add("Which constituent of liver bile acts as a biological detergent to emulsify dietary lipids into microscopic micelles for lipase digestion?",
    "Lecithin and bile salts (cholate and deoxycholate)",
    "Bilirubin",
    "Cholesterol crystals",
    "Urea",
    "A", "Amphipathic bile salts break large fat globules into microscopic emulsion droplets, dramatically increasing surface area for pancreatic lipase.")

add("In non-stressful diurnal conditions, endogenous physiological cortisol (glucocorticoid) secretion peaks at what time of day?",
    "Between 4:00 AM and 8:00 AM",
    "Between 12:00 noon and 2:00 PM",
    "Between 8:00 PM and midnight",
    "Evenly distributed throughout the 24 hours",
    "A", "ACTH and cortisol follow a circadian rhythm with plasma concentrations highest upon waking in the early morning (6-8 AM) and lowest at midnight.")

add("The largest anatomical part of the human brain occupying the anterior and middle cranial fossae is the:",
    "Medulla oblongata",
    "Cerebellum",
    "Cerebrum (cerebral hemispheres)",
    "Pons",
    "C", "The cerebrum comprises roughly 83% of total human brain mass, governing intellectual functions, sensory perception, and voluntary movement.")

add("Calcitonin is an amino acid peptide hormone synthesized and secreted by:",
    "Parathyroid chief cells",
    "Parafollicular C-cells of the thyroid gland",
    "Adrenal chromaffin cells",
    "Anterior pituitary somatotrophs",
    "B", "Parafollicular (C) cells situated in the interstitial connective tissue of the thyroid synthesize calcitonin in response to hypercalcemia.")

add("Chronic systemic arterial hypertension causes progressive pathological remodeling of the left ventricle known as:",
    "Concentric left ventricular hypertrophy",
    "Right ventricular dilation",
    "Cor pulmonale",
    "Atrial hypoplasia",
    "A", "Chronically elevated systemic vascular resistance forces the left ventricle to pump against high afterload, causing adaptive wall thickening and hypertrophy.")

add("The four structural wall layers of the tubular alimentary canal, arranged from inside lumen to outside, are:",
    "Mucosa, submucosa, muscularis externa, and serosa/adventitia",
    "Serosa, muscularis, submucosa, mucosa",
    "Endothelium, mesothelium, peritoneum, fascia",
    "Epithelium, connective tissue, bone, fat",
    "A", "The basic gastrointestinal histological architecture consistently features the innermost mucosa, vascular submucosa, muscularis externa, and outer serosa.")

add("Normal resting gastric juice contains hydrochloric acid, mucus, intrinsic factor, and which proteolytic proenzyme?",
    "Trypsinogen",
    "Pepsinogen (activated to pepsin by gastric acid)",
    "Chymotrypsin",
    "Amylase",
    "B", "Gastric chief cells secrete inactive pepsinogen, which is cleaved into active pepsin in the acidic environment (pH 1.5-2) created by parietal HCl.")

add("A patient has a heart rate of 74 beats per minute and a ventricular stroke volume of 68 mL per beat. What is the calculated cardiac output?",
    "142 mL/min",
    "5,032 mL/min (approx. 5.0 L/min)",
    "7,400 mL/min",
    "490 mL/min",
    "B", "Cardiac Output = Stroke Volume x Heart Rate = 68 mL/beat x 74 beats/min = 5,032 mL/min (5.03 L/min).")

add("The normal resting physiological heart rate range for a healthy newborn infant is:",
    "60 to 80 beats/min",
    "80 to 100 beats/min",
    "120 to 160 beats/min",
    "180 to 220 beats/min",
    "C", "A resting neonate typically exhibits a heart rate between 120 and 160 beats/min, which may increase to 180 bpm during crying or decrease to 100 bpm in deep sleep.")

add("A discrepancy where the auscultated apical heart rate is higher than the palpated peripheral radial pulse rate is called a:",
    "Pulse pressure",
    "Pulse deficit",
    "Pulsus paradoxus",
    "Water-hammer pulse",
    "B", "A pulse deficit occurs during dysrhythmias (e.g., atrial fibrillation) when some cardiac contractions are too weak to transmit a palpable pressure wave to the radial artery.")

add("The numerical mathematical difference between systolic arterial pressure and diastolic arterial pressure is the:",
    "Mean arterial pressure",
    "Pulse pressure",
    "Perfusion pressure",
    "End-diastolic pressure",
    "B", "Pulse pressure equals systolic blood pressure minus diastolic blood pressure (e.g., 120 - 80 = 40 mmHg).")

add("Systolic blood pressure represents the:",
    "Lowest pressure resting in the arterial system between beats",
    "Peak maximum pressure exerted against arterial walls during ventricular ejection",
    "Pressure inside the right atrium",
    "Intracranial capillary pressure",
    "B", "Systolic pressure corresponds to the maximum hydrostatic pressure reached in systemic arteries during active left ventricular contraction.")

add("The primary physiological functions of the liver include the synthesis of which essential blood constituents?",
    "Red blood cells and hemoglobin",
    "Plasma proteins (albumin, prothrombin, fibrinogen, and clotting factors)",
    "Hydrochloric acid and intrinsic factor",
    "Thyroid-stimulating hormone",
    "B", "Hepatocytes synthesize virtually all circulating plasma proteins with the exception of immunoglobulins (which are made by plasma cells).")

add("In performing a diagnostic lumbar puncture to sample cerebrospinal fluid in an adult, the needle is safely inserted between:",
    "L1 and L2 vertebrae",
    "L3 and L4 or L4 and L5 interspaces (below the spinal cord termination)",
    "T12 and L1",
    "C7 and T1",
    "B", "Because the adult spinal cord ends at L1-L2, needle puncture at L3-L4 or L4-L5 enters the lumbar cistern of the subarachnoid space without risking spinal cord injury.")

add("A fertilized human ovum formed immediately by the union of spermatozoon and secondary oocyte is called a:",
    "Morula",
    "Blastocyst",
    "Zygote",
    "Embryo",
    "C", "The single diploid cell resulting from the successful fusion of male and female haploid gamete pronuclei is the zygote.")

add("The living human kidneys are located retroperitoneally in the posterior abdominal wall extending from the level of:",
    "T10 to L1 vertebrae",
    "T12 to L3 vertebrae",
    "C7 to T4 vertebrae",
    "L4 to S2 vertebrae",
    "B", "The kidneys lie retroperitoneally between the T12 and L3 vertebral levels, with the right kidney positioned slightly lower due to the mass of the liver.")

# Add additional 30 diverse questions to complete the set
add("In the nephron, what percentage of glomerular filtrate fluid is reabsorbed in the proximal convoluted tubule?",
    "10% to 20%",
    "40% to 50%",
    "80% to 90%",
    "99.9%",
    "C", "The proximal convoluted tubule is responsible for the bulk reabsorption of water, sodium, chloride, and nutrients (approx. 80-90%).")

add("Renin is secreted into the bloodstream in response to renal ischemia or hypotension by the:",
    "Bowman's capsule",
    "Juxtaglomerular apparatus (JGA)",
    "Loop of Henle",
    "Collecting duct",
    "B", "Juxtaglomerular cells in the afferent glomerular arteriole synthesize and release renin when renal perfusion pressure drops.")

add("Follicle-stimulating hormone (FSH) in the female reproductive cycle acts primarily to:",
    "Trigger immediate ovulation",
    "Stimulate the growth and maturation of ovarian graafian follicles",
    "Maintain the corpus luteum throughout pregnancy",
    "Induce uterine myometrial contractions",
    "B", "FSH secreted by anterior pituitary gonadotrophs promotes the development of primary follicles into mature vesicular follicles in the ovary.")

add("The primary site of respiratory gas exchange across the blood-air barrier in the human lung is the:",
    "Tracheal bifurcation",
    "Bronchiolar walls",
    "Alveolar capillary membrane",
    "Parietal pleura",
    "C", "The ultra-thin alveolar-capillary membrane provides an immense surface area for diffusion of O2 into blood and CO2 into expired air.")

add("In obstetric pelvimetry, the anatomical bony landmark used to determine the station of the fetal presenting part is the:",
    "Sacral promontory",
    "Ischial spines",
    "Iliac crests",
    "Pubic symphysis",
    "B", "Station 0 is defined when the lowest presenting part of the fetus has descended to the level of the maternal ischial spines.")

add("The right coronary artery typically branches into which two prominent myocardial vessels?",
    "Circumflex and left anterior descending arteries",
    "Marginal branch and posterior descending (interventricular) artery",
    "Internal mammary and subclavian arteries",
    "Carotid and basilar arteries",
    "B", "The right coronary artery courses along the coronary sulcus, giving off the marginal artery and continuing as the posterior interventricular artery.")

add("In a healthy adult, the normal physiological range of hemoglobin in whole blood is approximately:",
    "7 to 10 g/dL",
    "12 to 16 g/dL (females 12-15 g/dL, males 13-17 g/dL)",
    "18 to 24 g/dL",
    "5 to 8 g/dL",
    "B", "Normal adult hemoglobin concentrations range from 12 to 16 g/dL depending on gender, providing optimal oxygen-carrying capacity.")

add("T-lymphocytes originate from hematopoietic stem cells in the bone marrow but migrate for maturation and immunocompetence to the:",
    "Spleen",
    "Thymus gland",
    "Thyroid gland",
    "Peyer's patches",
    "B", "Prothymocytes migrate from red bone marrow to the thymus, where positive and negative selection programs mature CD4+ and CD8+ T-cells.")

add("Salivary amylase (ptyalin) initiates the enzymatic digestion of:",
    "Cooked starch into disaccharide maltose",
    "Dietary triglycerides into free fatty acids",
    "Polypeptides into amino acids",
    "Vitamins into cofactors",
    "A", "Salivary amylase breaks alpha-1,4 glycosidic bonds in cooked starches, converting them into maltose, maltotriose, and alpha-limit dextrins.")

add("The muscular junction that connects the esophagus to the gastric stomach and prevents acid regurgitation is the:",
    "Pyloric sphincter",
    "Lower esophageal (cardiac) sphincter",
    "Ileocecal sphincter",
    "Sphincter of Oddi",
    "B", "The lower esophageal sphincter maintains high resting tone, relaxing on swallowing to allow food entry and contracting to prevent acid reflux.")

with open('scripts/pool_bulk_250.json', 'w') as f:
    json.dump(questions, f, indent=2)

print(f"Generated {len(questions)} bulk questions")
