# Final 25 Questions to complete the 730 total brand-new questions
import json

FINAL_25_QUESTIONS = [
    {
        "question": "The rhythmic regularity and predictable interval pattern between successive heartbeats is referred to as:",
        "optionA": "Pulse deficit",
        "optionB": "Pulse rhythm",
        "optionC": "Pulse pressure",
        "optionD": "Pulse amplitude",
        "correctAnswer": "B",
        "explanation": "Pulse rhythm describes the temporal spacing of heartbeats, which is normally regular; irregularities constitute dysrhythmias."
    },
    {
        "question": "Normal, effortless, quiet resting respiration within normal rate and depth limits is termed:",
        "optionA": "Apnea",
        "optionB": "Eupnea",
        "optionC": "Bradypnea",
        "optionD": "Orthopnea",
        "correctAnswer": "B",
        "explanation": "Eupnea is normal, rhythmic, unlabored breathing at a rate of 12 to 20 breaths per minute in a resting adult."
    },
    {
        "question": "Which of the following bones of the skull does NOT contribute to the formation of the orbital cavity?",
        "optionA": "Frontal bone",
        "optionB": "Mandible (lower jaw)",
        "optionC": "Ethmoid bone",
        "optionD": "Zygomatic bone",
        "correctAnswer": "B",
        "explanation": "The orbit is formed by 7 bones: frontal, zygomatic, maxilla, sphenoid, ethmoid, lacrimal, and palatine; the mandible does not enter the orbit."
    },
    {
        "question": "The main pancreatic duct that conveys digestive enzymes to the hepatopancreatic ampulla is also known as the:",
        "optionA": "Duct of Santorini (accessory duct)",
        "optionB": "Duct of Wirsung",
        "optionC": "Cystic duct",
        "optionD": "Bartholin's duct",
        "correctAnswer": "B",
        "explanation": "The duct of Wirsung is the principal excretory channel of the pancreas, joining the common bile duct at the ampulla of Vater."
    },
    {
        "question": "Which large granular leukocyte plays a specialized role in defending the host against large multicellular parasitic helminths by releasing major basic protein?",
        "optionA": "Basophils",
        "optionB": "Eosinophils",
        "optionC": "Neutrophils",
        "optionD": "Monocytes",
        "correctAnswer": "B",
        "explanation": "Eosinophils bind to IgE-coated parasitic worms and degranulate cytotoxic proteins (major basic protein, eosinophil cationic protein) to destroy parasites."
    },
    {
        "question": "During bone fracture healing and remodeling, the bony callus is reshaped and excess bone is resorbed by:",
        "optionA": "Osteoblasts",
        "optionB": "Osteoclasts",
        "optionC": "Chondroblasts",
        "optionD": "Fibroblasts",
        "correctAnswer": "B",
        "explanation": "Osteoclasts resorb unneeded trabeculae and reconstruct the medullary cavity and compact cortex according to Wolff's law of bone remodeling."
    },
    {
        "question": "The thick middle muscular tunic of the urinary bladder wall responsible for emptying is the:",
        "optionA": "Adventitia",
        "optionB": "Detrusor muscle",
        "optionC": "Transitional mucosa",
        "optionD": "Dartos muscle",
        "correctAnswer": "B",
        "explanation": "The detrusor muscle consists of three interlaced layers of smooth muscle that contract synchronously under parasympathetic control during micturition."
    },
    {
        "question": "If fertilization does not occur, the corpus luteum in the ovary regresses and degenerates into a white fibrous scar called the:",
        "optionA": "Corpus luteum of pregnancy",
        "optionB": "Corpus albicans",
        "optionC": "Graafian follicle",
        "optionD": "Theca interna",
        "correctAnswer": "B",
        "explanation": "Luteolysis causes apoptosis of luteal cells, forming an inactive fibrous connective tissue scar known as the corpus albicans."
    },
    {
        "question": "Which cranial suture articulates the two parietal bones anteriorly with the frontal bone?",
        "optionA": "Sagittal suture",
        "optionB": "Coronal suture",
        "optionC": "Lambdoid suture",
        "optionD": "Squamous suture",
        "correctAnswer": "B",
        "explanation": "The coronal suture extends transversely across the skull vault, joining the frontal bone with the right and left parietal bones."
    },
    {
        "question": "The primary neurotransmitter released at somatic neuromuscular junctions to stimulate skeletal muscle contraction is:",
        "optionA": "Dopamine",
        "optionB": "Acetylcholine (ACh)",
        "optionC": "Serotonin",
        "optionD": "GABA",
        "correctAnswer": "B",
        "explanation": "Motor nerve action potentials trigger calcium influx, causing vesicular exocytosis of acetylcholine, which binds nicotinic receptors at the motor endplate."
    },
    {
        "question": "The functional residual capacity (FRC) of the lungs represents the volume of air:",
        "optionA": "Remaining in the lungs after a maximal forced expiration",
        "optionB": "Remaining in the lungs after a normal quiet tidal expiration",
        "optionC": "Inspired during deep maximal inhalation",
        "optionD": "Exchanged in one minute",
        "correctAnswer": "B",
        "explanation": "FRC is the sum of expiratory reserve volume and residual volume, representing the volume of air resting in lungs at end-expiration (approx. 2200-2400 mL)."
    },
    {
        "question": "Which hormone produced by cardiac atrial myocytes promotes renal sodium and water excretion in response to atrial stretch (hypervolemia)?",
        "optionA": "Aldosterone",
        "optionB": "Atrial Natriuretic Peptide (ANP)",
        "optionC": "Vasopressin",
        "optionD": "Angiotensin II",
        "correctAnswer": "B",
        "explanation": "ANP is released when high intravascular volume stretches atrial walls; it antagonizes renin and aldosterone, promoting natriuresis and vasodilation."
    },
    {
        "question": "The normal life expectancy of platelets (thrombocytes) in the circulating blood is approximately:",
        "optionA": "1 to 2 days",
        "optionB": "7 to 10 days",
        "optionC": "30 days",
        "optionD": "120 days",
        "correctAnswer": "B",
        "explanation": "Platelets circulate for approximately 7 to 10 days before being removed from the bloodstream by tissue macrophages in the spleen."
    },
    {
        "question": "Which vitamin deficiency is specifically associated with delayed blood coagulation and prolonged prothrombin time?",
        "optionA": "Vitamin A",
        "optionB": "Vitamin K",
        "optionC": "Vitamin E",
        "optionD": "Vitamin D",
        "correctAnswer": "B",
        "explanation": "Vitamin K is an obligate cofactor for carboxylating glutamic acid residues on factors II, VII, IX, and X; deficiency causes severe bleeding diathesis."
    },
    {
        "question": "The involuntary rhythmic wave of muscular contraction and relaxation that propels food boluses along the alimentary canal is called:",
        "optionA": "Segmentation",
        "optionB": "Peristalsis",
        "optionC": "Mastication",
        "optionD": "Deglutition",
        "correctAnswer": "B",
        "explanation": "Peristalsis is coordinated by the myenteric (Auerbach's) plexus, producing circular contraction behind the bolus and longitudinal contraction ahead of it."
    },
    {
        "question": "In the human stomach, hydrochloric acid creates an intensely acidic pH that serves to:",
        "optionA": "Emulsify dietary fats",
        "optionB": "Denature ingested proteins, kill swallowed microorganisms, and activate pepsinogen to pepsin",
        "optionC": "Absorb vitamin B12 directly",
        "optionD": "Synthesize bile salts",
        "correctAnswer": "B",
        "explanation": "Parietal cell HCl lowers gastric pH to 1.5-2.0, providing the optimal environment for pepsinogen autocatalysis and antimicrobial defense."
    },
    {
        "question": "Which specialized sensory structures in the carotid sinus and aortic arch monitor arterial blood pressure fluctuations?",
        "optionA": "Chemoreceptors",
        "optionB": "Arterial Baroreceptors (stretch receptors)",
        "optionC": "Thermoreceptors",
        "optionD": "Nociceptors",
        "correctAnswer": "B",
        "explanation": "Baroreceptors in the carotid sinus (CN IX) and aortic arch (CN X) detect vessel wall distention, sending afferent inhibitory signals to the vasomotor center."
    },
    {
        "question": "The anatomical landmark where the manubrium articulates with the body of the sternum, locating the 2nd costal cartilage, is the:",
        "optionA": "Xiphoid process",
        "optionB": "Sternal angle (Angle of Louis)",
        "optionC": "Suprasternal notch",
        "optionD": "Clavicular notch",
        "correctAnswer": "B",
        "explanation": "The sternal angle of Louis is a palpable transverse ridge at the level of the T4-T5 intervertebral disc and the articulation of the 2nd costal cartilage."
    },
    {
        "question": "The normal resting respiratory rate in a healthy adult is typically:",
        "optionA": "8 to 10 breaths/min",
        "optionB": "12 to 20 breaths/min",
        "optionC": "25 to 30 breaths/min",
        "optionD": "35 to 40 breaths/min",
        "correctAnswer": "B",
        "explanation": "Normal resting eupneic ventilation in adults ranges between 12 and 20 breaths per minute."
    },
    {
        "question": "The specialized cardiac conducting fibers that spread rapidly throughout the subendocardium of the ventricles are the:",
        "optionA": "Bachmann's bundle",
        "optionB": "Purkinje fibers",
        "optionC": "AV nodal delay pathways",
        "optionD": "Internodal tracts",
        "correctAnswer": "B",
        "explanation": "Purkinje fibers have large diameters and abundant gap junctions, conducting action potentials at 2 to 4 meters/second for synchronized ventricular systole."
    },
    {
        "question": "Which cell organelle contains hydrolytic acid enzymes responsible for intracellular digestion of phagocytosed bacteria and damaged organelles?",
        "optionA": "Peroxisomes",
        "optionB": "Lysosomes",
        "optionC": "Golgi apparatus",
        "optionD": "Endoplasmic reticulum",
        "correctAnswer": "B",
        "explanation": "Lysosomes are spherical membrane-bound organelles containing acid hydrolases (pH ~5) that degrade engulfed macromolecules."
    },
    {
        "question": "Which structure of the female reproductive tract is the normal anatomical site for the fertilization of the ovum by a spermatozoon?",
        "optionA": "Uterine cavity",
        "optionB": "Ampulla of the fallopian (uterine) tube",
        "optionC": "Ovarian surface",
        "optionD": "Endocervical canal",
        "correctAnswer": "B",
        "explanation": "Fertilization normally takes place in the ampulla, the widest and longest section of the fallopian tube."
    },
    {
        "question": "The outermost protective fibrous capsule enclosing the kidney is the:",
        "optionA": "Renal fascia",
        "optionB": "Renal capsule (fibrous capsule)",
        "optionC": "Adipose capsule",
        "optionD": "Peritoneum",
        "correctAnswer": "B",
        "explanation": "The smooth, transparent fibrous renal capsule adheres directly to the kidney surface, shielding it from trauma and infection."
    },
    {
        "question": "The triangular area on the outer surface of the temporal bone behind the external acoustic meatus is the:",
        "optionA": "Zygomatic arch",
        "optionB": "Suprameatal triangle (Macewen's triangle)",
        "optionC": "Mastoid notch",
        "optionD": "Pterion",
        "correctAnswer": "B",
        "explanation": "Macewen's suprameatal triangle is an important surgical landmark for accessing the mastoid antrum during mastoidectomy."
    },
    {
        "question": "The specific gravity of normal healthy human urine typically ranges between:",
        "optionA": "1.001 and 1.003",
        "optionB": "1.010 and 1.025 (or 1.003 to 1.030 depending on hydration)",
        "optionC": "1.040 and 1.060",
        "optionD": "0.990 and 1.000",
        "correctAnswer": "B",
        "explanation": "Normal urine specific gravity measures relative concentration of dissolved solutes (urea, sodium) and ranges from 1.010 to 1.025."
    }
]

with open('scripts/final_25_data.json', 'w') as f:
    json.dump(FINAL_25_QUESTIONS, f, indent=2)

print(f"Generated {len(FINAL_25_QUESTIONS)} final 25 questions")
