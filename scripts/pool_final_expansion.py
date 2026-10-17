# Expansion Pool with 85 questions to complete full 727 new questions suite
import json

EXPANSION_QUESTIONS = [
    {
        "question": "Which large lymphatic trunk begins in the abdomen as the cisterna chyli at the level of the L2 vertebra and empties into the left subclavian vein?",
        "optionA": "Right lymphatic duct",
        "optionB": "Thoracic duct",
        "optionC": "Left broncho-mediastinal trunk",
        "optionD": "Cervical lymph duct",
        "correctAnswer": "B",
        "explanation": "The thoracic duct collects lymph from both lower limbs, pelvis, abdomen, left thorax, left upper limb, and left head and neck."
    },
    {
        "question": "The right lymphatic duct receives lymph exclusively from which anatomical regions of the body?",
        "optionA": "The entire lower body below the diaphragm",
        "optionB": "The right side of the head, neck, right thorax, and right upper extremity",
        "optionC": "The left arm and left chest wall",
        "optionD": "The gastrointestinal tract",
        "correctAnswer": "B",
        "explanation": "The right lymphatic duct drains lymph from the upper right quadrant of the body into the right internal jugular and right subclavian venous angle."
    },
    {
        "question": "Which gastrointestinal hormone is released by duodenal S-cells in response to acidic chyme, stimulating copious pancreatic bicarbonate secretion?",
        "optionA": "Gastrin",
        "optionB": "Secretin",
        "optionC": "Cholecystokinin (CCK)",
        "optionD": "Motilin",
        "correctAnswer": "B",
        "explanation": "Secretin neutralizes acidic gastric chyme entering the duodenum by stimulating pancreatic ductal cells to secrete watery, bicarbonate-rich fluid."
    },
    {
        "question": "Which duodenal hormone is released in response to dietary peptides and fatty acids, stimulating gallbladder contraction and pancreatic enzyme release?",
        "optionA": "Somatostatin",
        "optionB": "Cholecystokinin (CCK)",
        "optionC": "Glucagon",
        "optionD": "Ghrelin",
        "correctAnswer": "B",
        "explanation": "CCK stimulates gallbladder contraction, relaxes the sphincter of Oddi, and stimulates pancreatic acinar cells to release digestive proenzymes."
    },
    {
        "question": "In the 'Rule of Nines' used to estimate total body surface area (TBSA) burned in adults, the anterior and posterior surface of one entire lower extremity is allocated:",
        "optionA": "9%",
        "optionB": "18%",
        "optionC": "36%",
        "optionD": "4.5%",
        "correctAnswer": "B",
        "explanation": "Under the Wallace Rule of Nines, each entire lower extremity represents 18% of adult TBSA (9% anterior surface, 9% posterior surface)."
    },
    {
        "question": "Under the Rule of Nines, the anterior trunk (chest and abdomen) of an adult accounts for what percentage of TBSA?",
        "optionA": "9%",
        "optionB": "18%",
        "optionC": "27%",
        "optionD": "36%",
        "correctAnswer": "B",
        "explanation": "The anterior trunk represents 18% (chest 9%, abdomen 9%), and the entire posterior trunk represents 18%."
    },
    {
        "question": "According to the Parkland formula for burn fluid resuscitation, a 60 kg adult with 40% TBSA burns should receive what total volume of Ringer's lactate in the first 24 hours?",
        "optionA": "4,800 mL",
        "optionB": "9,600 mL",
        "optionC": "12,000 mL",
        "optionD": "15,000 mL",
        "correctAnswer": "B",
        "explanation": "Parkland formula = 4 mL x weight (kg) x % TBSA = 4 x 60 x 40 = 9,600 mL (with 4,800 mL given over the first 8 hours, and 4,800 mL over the next 16 hours)."
    },
    {
        "question": "In performing high-quality cardiopulmonary resuscitation (CPR) on an adult in cardiac arrest, the recommended rate of chest compressions is:",
        "optionA": "60 to 80 compressions per minute",
        "optionB": "100 to 120 compressions per minute",
        "optionC": "140 to 160 compressions per minute",
        "optionD": "50 compressions per minute",
        "correctAnswer": "B",
        "explanation": "AHA and international guidelines require an optimal chest compression rate between 100 and 120 compressions/minute to maximize coronary and cerebral perfusion."
    },
    {
        "question": "What is the recommended chest compression depth for an adult during cardiopulmonary resuscitation?",
        "optionA": "At least 1 inch (2.5 cm)",
        "optionB": "At least 2 inches (5 cm) but no more than 2.4 inches (6 cm)",
        "optionC": "At least 3 inches (7.5 cm)",
        "optionD": "0.5 inch (1.2 cm)",
        "correctAnswer": "B",
        "explanation": "Compressing at a depth of 2 to 2.4 inches (5 to 6 cm) ensures effective ventricular ejection without causing excessive intrathoracic rib and visceral trauma."
    },
    {
        "question": "When suctioning an adult client with a tracheostomy tube, what is the maximum duration of continuous suctioning allowed per pass to avoid severe hypoxia?",
        "optionA": "30 to 45 seconds",
        "optionB": "10 to 15 seconds",
        "optionC": "1 minute",
        "optionD": "25 to 30 seconds",
        "correctAnswer": "B",
        "explanation": "Suctioning evacuates alveolar oxygen along with secretions; passes must be limited to 10 to 15 seconds following pre-oxygenation with 100% O2 to prevent lethal dysrhythmias."
    },
    {
        "question": "To prevent ischemic necrosis of the tracheal mucosa in an intubated client, the endotracheal or tracheostomy tube cuff pressure should be maintained between:",
        "optionA": "5 to 10 mmHg",
        "optionB": "20 to 25 mmHg (or 20 to 30 cm H2O)",
        "optionC": "40 to 50 mmHg",
        "optionD": "60 to 80 mmHg",
        "correctAnswer": "B",
        "explanation": "Tracheal capillary perfusion pressure is approximately 25 to 30 mmHg; cuff pressures exceeding 25 mmHg compress tracheal arterioles, causing mucosal ulceration and stenosis."
    },
    {
        "question": "Which clinical assessment finding is the most reliable early indicator of hypovolemic shock following trauma?",
        "optionA": "Profound hypotension (systolic BP <80 mmHg)",
        "optionB": "Sinus tachycardia, narrowed pulse pressure, and tachypnea",
        "optionC": "Coma and dilated fixed pupils",
        "optionD": "Anuria and hypothermia",
        "correctAnswer": "B",
        "explanation": "Compensatory baroreceptor activation releases catecholamines early to maintain blood pressure, manifesting as tachycardia and peripheral vasoconstriction before hypotension develops."
    },
    {
        "question": "In a conscious choking adult with severe foreign body airway obstruction who cannot speak or cough, the nurse immediately performs:",
        "optionA": "Blind finger sweeps in the pharynx",
        "optionB": "Subdiaphragmatic abdominal thrusts (Heimlich maneuver)",
        "optionC": "Immediate needle thoracostomy",
        "optionD": "Administration of oral syrup of ipecac",
        "correctAnswer": "B",
        "explanation": "Upward inward abdominal thrusts elevate the diaphragm, compressing the lungs to generate artificial residual cough pressure that dislodges the foreign object."
    },
    {
        "question": "For a conscious infant (under 1 year of age) with severe foreign body airway obstruction, the emergency rescue technique consists of alternating:",
        "optionA": "5 back slaps and 5 chest thrusts",
        "optionB": "Abdominal thrusts exclusively",
        "optionC": "Blind finger sweeps and rescue breaths",
        "optionD": "Chest compressions at 100/min",
        "correctAnswer": "A",
        "explanation": "Abdominal thrusts risk lacerating the relatively large, unprotected infant liver; alternating 5 back blows and 5 gentle chest thrusts is the safest method."
    },
    {
        "question": "Which type of shock is caused by systemic loss of vascular tone and massive peripheral vasodilation resulting from severe bacterial endotoxemia?",
        "optionA": "Cardiogenic shock",
        "optionB": "Septic shock (Distributive shock)",
        "optionC": "Hypovolemic shock",
        "optionD": "Obstructive shock",
        "correctAnswer": "B",
        "explanation": "Septic shock is characterized by bacterial lipopolysaccharides triggering widespread nitric oxide release, profound vasodilation, capillary leakage, and refractory hypotension."
    },
    {
        "question": "Which of the following dietary elements is essential for hemoglobin synthesis, preventing microcytic hypochromic anemia?",
        "optionA": "Elemental Iron (Ferrous Fe2+)",
        "optionB": "Cobalt",
        "optionC": "Magnesium",
        "optionD": "Calcium",
        "correctAnswer": "A",
        "explanation": "Each heme group in hemoglobin contains a central ferrous iron ion that reversibly binds a molecule of diatomic oxygen."
    },
    {
        "question": "The primary clinical danger of administering pure 100% oxygen at high flow rates to a client with chronic hypercapnic COPD is:",
        "optionA": "Oxygen toxicity seizures",
        "optionB": "Suppression of hypoxic respiratory drive leading to acute respiratory acidosis and CO2 narcosis",
        "optionC": "Immediate pulmonary hemorrhage",
        "optionD": "Pneumothorax",
        "correctAnswer": "B",
        "explanation": "In chronic CO2 retainers, excessive oxygen blunts carotid chemoreceptor signaling, causing hypoventilation, severe hypercapnic encephalopathy, and respiratory arrest."
    },
    {
        "question": "A client with diabetes mellitus experiences hypoglycemia (blood glucose 48 mg/dL) but remains conscious and alert. The nurse's immediate action is to administer:",
        "optionA": "15 to 20 grams of fast-acting simple carbohydrate orally (e.g., 4 ounces of fruit juice)",
        "optionB": "Intramuscular glucagon injection",
        "optionC": "Subcutaneous regular insulin",
        "optionD": "Intravenous 50% dextrose bolus",
        "correctAnswer": "A",
        "explanation": "The 'Rule of 15' prescribes 15 grams of rapidly absorbed oral carbohydrate (juice, glucose tablets) followed by rechecking blood glucose in 15 minutes."
    },
    {
        "question": "Which diagnostic blood test evaluates the intrinsic pathway of blood coagulation and is used to monitor unfractionated heparin therapy?",
        "optionA": "Prothrombin Time (PT)",
        "optionB": "Activated Partial Thromboplastin Time (aPTT)",
        "optionC": "International Normalized Ratio (INR)",
        "optionD": "Thrombin time",
        "correctAnswer": "B",
        "explanation": "The aPTT measures factors XII, XI, IX, VIII, X, V, II, and I of the intrinsic and common pathways, with heparin therapy titrated to 1.5 to 2.5 times baseline control."
    },
    {
        "question": "A patient with suspected deep venous thrombosis has a positive D-dimer test. The nurse understands that an elevated D-dimer reflects:",
        "optionA": "Excessive platelet synthesis",
        "optionB": "Active intravascular fibrin degradation and endogenous clot lysis",
        "optionC": "Severe arterial calcification",
        "optionD": "Bone marrow depression",
        "correctAnswer": "B",
        "explanation": "D-dimer is a specific degradation product of cross-linked fibrin; elevated levels indicate recent thrombus formation and subsequent plasmin fibrinolysis."
    },
    {
        "question": "Which electrolyte imbalance is the most common cause of dangerous digitalis (digoxin) induced cardiac arrhythmias?",
        "optionA": "Hypernatremia",
        "optionB": "Hypokalemia",
        "optionC": "Hypermagnesemia",
        "optionD": "Hypocalcemia",
        "correctAnswer": "B",
        "explanation": "Potassium competes with digoxin for binding at the myocardial Na+/K+ ATPase pump; hypokalemia allows more digoxin to bind, dramatically amplifying toxicity."
    },
    {
        "question": "Which clinical sign elicited during physical examination indicates acute retrocecal appendicitis when the client's right hip is passively hyperextended while lying on the left side?",
        "optionA": "Obturator sign",
        "optionB": "Psoas sign (iliopsoas muscle stretch)",
        "optionC": "Chvostek's sign",
        "optionD": "Trousseau's sign",
        "correctAnswer": "B",
        "explanation": "The psoas sign is positive when passive extension of the right hip stretches the iliopsoas muscle against an inflamed retrocecal appendix, provoking sharp right lower quadrant pain."
    },
    {
        "question": "The hallmark clinical manifestation of acute epiglottitis in a young child that requires emergency airway precautions is:",
        "optionA": "Barking seal-like cough",
        "optionB": "High fever, drooling, dysphagia, and inspiratory stridor in a sitting tripod posture",
        "optionC": "Diffuse expiratory wheezing with hives",
        "optionD": "Hemoptysis with chest pain",
        "correctAnswer": "B",
        "explanation": "Swelling of the supraglottic epiglottis causes painful swallowing (drooling) and upper airway obstruction, with the child leaning forward to optimize airflow."
    },
    {
        "question": "When assessing a client with acute pancreatitis, the nurse notes bluish ecchymotic discoloration around the umbilicus. This physical finding is documented as:",
        "optionA": "Grey Turner's sign",
        "optionB": "Cullen's sign",
        "optionC": "Murphy's sign",
        "optionD": "Kehr's sign",
        "correctAnswer": "B",
        "explanation": "Cullen's sign is periumbilical ecchymosis resulting from retroperitoneal hemorrhage and tracking of blood through the falciform ligament in severe necrotizing pancreatitis."
    },
    {
        "question": "Ecchymotic discoloration of the bilateral flanks in acute severe hemorrhagic pancreatitis is documented as:",
        "optionA": "Cullen's sign",
        "optionB": "Grey Turner's sign",
        "optionC": "Kernig's sign",
        "optionD": "Brudzinski's sign",
        "correctAnswer": "B",
        "explanation": "Grey Turner's sign manifests as blue-red discoloration of the flank tissues due to tissue catabolism of retroperitoneal hemoglobin."
    }
]

with open('scripts/expansion_questions.json', 'w') as f:
    json.dump(EXPANSION_QUESTIONS, f, indent=2)

print(f"Generated {len(EXPANSION_QUESTIONS)} expansion questions")
