import { Question, QuestionType } from '../types';
import { DOC_PART1, RawDocQuestion } from './docPart1';
import { DOC_PART2 } from './docPart2';
import { DOC_PART3 } from './docPart3';
import { DOC_PART4 } from './docPart4';
import { TYPE4_QUESTIONS } from './type4Questions';
import { TYPE6_QUESTIONS } from './type6Questions';
import { TYPE7_QUESTIONS } from './type7Questions';
import { TYPE8_QUESTIONS } from './type8Questions';
import { TYPE9_QUESTIONS } from './type9Questions';
import { TYPE10_QUESTIONS } from './type10Questions';
import { TYPE11_QUESTIONS } from './type11Questions';
import { TYPE12_QUESTIONS } from './type12Questions';
import { TYPE13_QUESTIONS } from './type13Questions';
import { TYPE14_QUESTIONS } from './type14Questions';

export const FOUNDATIONS_QUESTIONS: Question[] = [
  {
    number: 1,
    question: "According to the Nursing Process, which phase involves the systematic collection, verification, and communication of client data?",
    optionA: "Assessment",
    optionB: "Diagnosis",
    optionC: "Implementation",
    optionD: "Evaluation",
    correctAnswer: "A",
    explanation: "Assessment is the initial, foundational step of the nursing process where subjective and objective data are gathered to determine the client's current and past health status."
  },
  {
    number: 2,
    question: "Which nursing theorist proposed the 'Environmental Theory', emphasizing that the client's environment should be manipulated to assist nature in healing?",
    optionA: "Dorothea Orem",
    optionB: "Florence Nightingale",
    optionC: "Virginia Henderson",
    optionD: "Sister Callista Roy",
    correctAnswer: "B",
    explanation: "Florence Nightingale's Environmental Theory postulated that clean air, pure water, efficient drainage, cleanliness, and light are essential for recovery and health maintenance."
  },
  {
    number: 3,
    question: "When measuring blood pressure, what Korotkoff sound corresponds to the systolic blood pressure reading?",
    optionA: "Phase I (first clear, repetitive tapping sound)",
    optionB: "Phase II (soft swishing or murmuring sound)",
    optionC: "Phase IV (distinct, abrupt muffling sound)",
    optionD: "Phase V (complete disappearance of sound)",
    correctAnswer: "A",
    explanation: "Korotkoff Phase I is characterized by the first appearance of faint, clear tapping sounds which gradually increase in intensity; this reading indicates the systolic blood pressure."
  },
  {
    number: 4,
    question: "A nurse is positioning a client for an enema administration. Which position is most anatomically appropriate?",
    optionA: "Dorsal recumbent position",
    optionB: "Left lateral Sims position",
    optionC: "High Fowler's position",
    optionD: "Trendelenburg position",
    correctAnswer: "B",
    explanation: "Left Sims (semi-prone lateral) position allows the enema solution to flow downward into the sigmoid colon and rectum by natural gravity, minimizing discomfort and reflux."
  },
  {
    number: 5,
    question: "What is the standard autoclaving temperature, pressure, and minimum holding time required for steam sterilization of wrapped surgical instruments?",
    optionA: "100°C at 10 psi for 10 minutes",
    optionB: "121°C at 15 psi (1 atmosphere) for 15 to 20 minutes",
    optionC: "140°C at 25 psi for 5 minutes",
    optionD: "115°C at 5 psi for 45 minutes",
    correctAnswer: "B",
    explanation: "Standard autoclaving requires 121°C (250°F) at 15 pounds per square inch (psi) gauge pressure for at least 15 to 20 minutes to eliminate all vegetative microorganisms and bacterial spores."
  },
  {
    number: 6,
    question: "A client presents with an intact skin lesion displaying non-blanchable erythema over the sacrum. What stage of pressure injury does this represent?",
    optionA: "Stage 1",
    optionB: "Stage 2",
    optionC: "Stage 3",
    optionD: "Stage 4",
    correctAnswer: "A",
    explanation: "Stage 1 pressure injury presents as intact skin with a localized area of non-blanchable erythema, typically over a bony prominence, indicating microvascular congestion."
  },
  {
    number: 7,
    question: "When administering an intramuscular injection into the ventrogluteal site, what anatomical landmarks should the nurse palpate?",
    optionA: "Acromion process and axillary fold",
    optionB: "Greater trochanter, anterior superior iliac spine, and iliac crest",
    optionC: "Posterior superior iliac spine and coccyx",
    optionD: "Patella and mid-femoral condyle",
    correctAnswer: "B",
    explanation: "The ventrogluteal site is located by placing the palm over the greater trochanter, pointing the index finger toward the anterior superior iliac spine and extending the middle finger along the iliac crest."
  },
  {
    number: 8,
    question: "What is the proper needle insertion angle for a subcutaneous injection in an adult with normal adipose tissue?",
    optionA: "10 to 15 degrees",
    optionB: "25 degrees",
    optionC: "45 to 90 degrees",
    optionD: "90 degrees exclusively into deep muscle",
    correctAnswer: "C",
    explanation: "Subcutaneous injections are administered at a 45-degree angle (or 90-degree angle if 2 inches of adipose tissue can be grasped) to deliver medication directly into the subcutaneous layer."
  },
  {
    number: 9,
    question: "The ethical principle of 'Non-maleficence' obligates the registered nurse to:",
    optionA: "Promote self-determination and independent choices of the client",
    optionB: "Actively do good and advocate for the patient's wellbeing",
    optionC: "Above all, do no harm and prevent intentional or unintentional injury",
    optionD: "Distribute healthcare resources fairly and equitably",
    correctAnswer: "C",
    explanation: "Non-maleficence is the fundamental ethical duty to do no harm, avoid inflicting injury, and minimize potential risks during therapeutic nursing interventions."
  },
  {
    number: 10,
    question: "A nurse physically restrains a competent adult client who refuses medication and threatens to discharge against medical advice (AMA). The nurse could be legally liable for:",
    optionA: "Assault",
    optionB: "Battery and false imprisonment",
    optionC: "Slander",
    optionD: "Negligence only",
    correctAnswer: "B",
    explanation: "Restraining a competent individual without legal authorization or consent constitutes battery (unlawful physical touching) and false imprisonment (unjustified restriction of freedom of movement)."
  },
  {
    number: 11,
    question: "Which pattern of respiration is characterized by alternating periods of deep, rapid breathing followed by apnea?",
    optionA: "Kussmaul breathing",
    optionB: "Biot's respiration",
    optionC: "Cheyne-Stokes respiration",
    optionD: "Eupnea",
    correctAnswer: "C",
    explanation: "Cheyne-Stokes breathing features cyclical waxing and waning of tidal volume (hyperventilation) separated by central apneic spells, frequently seen in severe heart failure or neurological impairment."
  },
  {
    number: 12,
    question: "In the WHO 5 Moments for Hand Hygiene, which moment occurs immediately after adjusting a client's bedside table or infusion tubing?",
    optionA: "Moment 1: Before touching a patient",
    optionB: "Moment 2: Before clean/aseptic procedures",
    optionC: "Moment 4: After touching a patient",
    optionD: "Moment 5: After touching patient surroundings",
    correctAnswer: "D",
    explanation: "Moment 5 is 'After touching patient surroundings', ensuring hands are decontaminated even if the patient was not directly touched, as nearby inanimate surfaces harbor pathogens."
  },
  {
    number: 13,
    question: "What is the primary physiological purpose of using the Z-track technique during deep intramuscular injections?",
    optionA: "To accelerate medication absorption into systemic circulation",
    optionB: "To prevent tracking and leakage of irritating medications into subcutaneous tissue",
    optionC: "To minimize bleeding from muscular capillary networks",
    optionD: "To anesthetize the local sensory cutaneous nerve endings",
    correctAnswer: "B",
    explanation: "The Z-track method displaces the overlying skin and subcutaneous tissue before needle insertion, sealing the drug in the deep muscle layer and preventing staining or subcutaneous necrosis."
  },
  {
    number: 14,
    question: "Dorothea Orem's self-care deficit theory states that nursing care is required when:",
    optionA: "The patient is completely comatose and dependent on total life support",
    optionB: "The client's self-care demands exceed their self-care agency or capability",
    optionC: "The family refuses to assist with home rehabilitation",
    optionD: "Medical diagnoses require surgical interventions",
    correctAnswer: "B",
    explanation: "Orem defined a self-care deficit as an imbalance occurring when an individual's therapeutic self-care demands exceed their ability (self-care agency) to meet those universal or health-deviation needs."
  },
  {
    number: 15,
    question: "Which of the following is considered an objective assessment finding?",
    optionA: "Client states, 'I have had a throbbing headache since morning'",
    optionB: "Client reports feeling dizzy upon standing up",
    optionC: "Bilateral 2+ pitting pedal edema observed and measured",
    optionD: "Client describes nausea after eating lunch",
    correctAnswer: "C",
    explanation: "Objective data are observable, measurable signs detected by the nurse through physical assessment, inspection, palpation, or diagnostic tests (e.g., pitting edema, blood pressure)."
  },
  {
    number: 16,
    question: "What is the expected average daily urine output for a healthy adult under normal fluid intake conditions?",
    optionA: "200 to 500 mL/day",
    optionB: "800 to 2,000 mL/day (average 1,500 mL/day)",
    optionC: "3,000 to 4,500 mL/day",
    optionD: "5,000 to 6,000 mL/day",
    correctAnswer: "B",
    explanation: "Normal daily urine output in adults ranges between 800 to 2,000 mL (averaging approximately 1,500 mL, or roughly 0.5 to 1 mL/kg/hr; minimum 30 mL/hr to excrete metabolic wastes)."
  },
  {
    number: 17,
    question: "Which cranial nerve is primarily responsible for pupil constriction and eyelid elevation?",
    optionA: "Cranial Nerve II (Optic)",
    optionB: "Cranial Nerve III (Oculomotor)",
    optionC: "Cranial Nerve IV (Trochlear)",
    optionD: "Cranial Nerve VI (Abducens)",
    correctAnswer: "B",
    explanation: "The Oculomotor nerve (CN III) controls pupillary constriction via parasympathetic fibers, accommodates the lens, and innervates the levator palpebrae superioris to elevate the upper eyelid."
  },
  {
    number: 18,
    question: "A client who is scheduled for an elective cholecystectomy expresses confusion regarding the surgical risks. What is the nurse's primary role regarding informed consent?",
    optionA: "Explain the surgical procedure, risks, and alternatives in detail to the client",
    optionB: "Notify the surgeon that the client has unanswered questions before witnessing signature",
    optionC: "Instruct the client to sign the form regardless, as the surgeon is fully competent",
    optionD: "Sign the consent form on the surgeon's behalf as proxy",
    correctAnswer: "B",
    explanation: "The primary legal and ethical obligation to inform the client of procedure details and risks belongs to the surgeon; the nurse acts as a witness and patient advocate, notifying the surgeon if clarity is lacking."
  },
  {
    number: 19,
    question: "What is the correct sequence for donning Personal Protective Equipment (PPE)?",
    optionA: "Gloves → Gown → Mask/Respirator → Goggles/Face shield",
    optionB: "Gown → Mask/Respirator → Goggles/Face shield → Gloves",
    optionC: "Mask/Respirator → Gloves → Gown → Goggles/Face shield",
    optionD: "Goggles/Face shield → Gown → Mask/Respirator → Gloves",
    correctAnswer: "B",
    explanation: "The CDC recommended donning sequence is: 1. Gown, 2. Mask or respirator, 3. Goggles or face shield, 4. Gloves (pulled over the wrists of the gown)."
  },
  {
    number: 20,
    question: "When performing tracheostomy suctioning, what is the maximum duration of continuous suction application to avoid severe hypoxemia?",
    optionA: "5 to 10 seconds (maximum 10 to 15 seconds)",
    optionB: "25 to 30 seconds",
    optionC: "45 seconds",
    optionD: "60 seconds",
    correctAnswer: "A",
    explanation: "Tracheostomy suctioning should never exceed 10 to 15 seconds per pass, with pre-oxygenation provided beforehand, because suction removes oxygen along with secretions, causing hypoxemia and cardiac arrhythmias."
  },
  {
    number: 21,
    question: "Which of the following pulse sites is considered the most accurate for evaluating heart rate in infants and clients receiving cardiac glycosides?",
    optionA: "Radial pulse",
    optionB: "Carotid pulse",
    optionC: "Apical pulse (counted for one full minute)",
    optionD: "Dorsalis pedis pulse",
    correctAnswer: "C",
    explanation: "Auscultating the apical pulse at the 4th or 5th intercostal space, midclavicular line for a full 60 seconds provides the definitive true heart rate and rhythm."
  },
  {
    number: 22,
    question: "A client who has been on prolonged bed rest develops orthostatic hypotension. How is orthostatic hypotension clinically defined?",
    optionA: "A drop in systolic BP of >=20 mmHg or diastolic BP of >=10 mmHg within 3 minutes of standing",
    optionB: "An increase in systolic BP of >=15 mmHg upon standing",
    optionC: "A decrease in heart rate of >=30 beats per minute upon sitting",
    optionD: "A sudden rise in temperature with shivering when ambulating",
    correctAnswer: "A",
    explanation: "Orthostatic (postural) hypotension is a drop in systolic blood pressure of at least 20 mmHg or in diastolic blood pressure of at least 10 mmHg within 3 minutes of moving from supine to standing."
  },
  {
    number: 23,
    question: "What type of wound healing occurs when a surgical incision is closed primarily with sutures, resulting in minimal tissue loss and a fine hairline scar?",
    optionA: "Primary intention",
    optionB: "Secondary intention",
    optionC: "Tertiary intention (delayed primary)",
    optionD: "Granulation intention",
    correctAnswer: "A",
    explanation: "Healing by primary intention occurs when clean wound edges are closely approximated (as with surgical sutures or staples), leading to rapid epithelialization and minimal scarring."
  },
  {
    number: 24,
    question: "The presence of full-thickness tissue loss with visible subcutaneous fat, but without exposed bone, tendon, or muscle, defines a pressure injury as:",
    optionA: "Stage 1",
    optionB: "Stage 2",
    optionC: "Stage 3",
    optionD: "Stage 4",
    correctAnswer: "C",
    explanation: "In Stage 3 pressure injuries, full-thickness loss of skin occurs in which adipose (fat) is visible in the ulcer and granulation tissue and epibole are often present, but bone/tendon/muscle are not exposed."
  },
  {
    number: 25,
    question: "In Henderson's Need Theory, how many fundamental human needs did Virginia Henderson identify as the focus of nursing care?",
    optionA: "5 needs",
    optionB: "10 needs",
    optionC: "14 basic components/needs",
    optionD: "21 nursing problems",
    correctAnswer: "C",
    explanation: "Virginia Henderson articulated 14 basic fundamental human needs comprising biological, psychological, sociological, and spiritual components that nurses assist the client to satisfy."
  },
  {
    number: 26,
    question: "Which electrolyte imbalance is the primary cause of cardiac dysrhythmias presenting with peaked T waves on an ECG?",
    optionA: "Hyponatremia",
    optionB: "Hyperkalemia",
    optionC: "Hypocalcemia",
    optionD: "Hypercalcemia",
    correctAnswer: "B",
    explanation: "Hyperkalemia (serum potassium > 5.0 mEq/L) typically manifests on an electrocardiogram as tall, narrow, peaked T waves, followed by widened QRS complexes and PR prolongation."
  },
  {
    number: 27,
    question: "What is the primary rationale for performing chest physiotherapy (percussion and vibration) prior to meals rather than immediately after meals?",
    optionA: "To stimulate the client's appetite for food",
    optionB: "To prevent gastrointestinal reflux, nausea, and aspiration of gastric contents",
    optionC: "To ensure maximum caloric expenditure during the procedure",
    optionD: "To allow better auscultation of peristaltic sounds",
    correctAnswer: "B",
    explanation: "Chest physiotherapy induces coughing and postural drainage; performing it after meals can trigger severe nausea, vomiting, and pulmonary aspiration."
  },
  {
    number: 28,
    question: "A nurse forgets to raise the side rails for a confused, sedated patient who subsequently falls and fractures her hip. This constitutes an act of:",
    optionA: "Assault",
    optionB: "Battery",
    optionC: "Negligence / Malpractice",
    optionD: "Defamation of character",
    correctAnswer: "C",
    explanation: "Failure to adhere to standard professional safety measures (such as bed rails for sedated clients) resulting in foreseeable injury meets the criteria for professional negligence (malpractice)."
  },
  {
    number: 29,
    question: "Which isolation precaution is strictly required for a patient diagnosed with Pulmonary Tuberculosis?",
    optionA: "Contact precautions (gloves and gown only)",
    optionB: "Droplet precautions (standard surgical mask within 3 feet)",
    optionC: "Airborne precautions (negative-pressure room and N95 particulate respirator)",
    optionD: "Reverse protective isolation",
    correctAnswer: "C",
    explanation: "Mycobacterium tuberculosis is transmitted via droplet nuclei (<5 microns) that stay suspended in air; it mandates airborne infection isolation (AIIR with negative pressure) and N95 masks."
  },
  {
    number: 30,
    question: "What is the normal therapeutic range of blood pH for human arterial blood?",
    optionA: "7.00 to 7.20",
    optionB: "7.35 to 7.45",
    optionC: "7.50 to 7.65",
    optionD: "6.80 to 7.00",
    correctAnswer: "B",
    explanation: "Normal arterial blood pH ranges precisely between 7.35 and 7.45. A pH below 7.35 indicates systemic acidemia, while a pH above 7.45 indicates alkalemia."
  }
];

export const MEDSURG_QUESTIONS: Question[] = [
  {
    number: 1,
    question: "A 55-year-old male is admitted with crushing substernal chest pain radiating to his left jaw and arm. What is the most sensitive and specific cardiac biomarker for acute myocardial infarction?",
    optionA: "Creatine Kinase-MB (CK-MB)",
    optionB: "Myoglobin",
    optionC: "Cardiac Troponin I and T",
    optionD: "Lactate Dehydrogenase (LDH)",
    correctAnswer: "C",
    explanation: "Cardiac Troponin I and T are the gold standard biomarkers for myocardial necrosis due to their superior cardiac specificity and prolonged elevation (up to 10-14 days)."
  },
  {
    number: 2,
    question: "In the emergency management of Acute Myocardial Infarction, what does the mnemonic 'MONA' stand for?",
    optionA: "Midazolam, Oxygen, Naloxone, Aspirin",
    optionB: "Morphine, Oxygen, Nitroglycerin, Aspirin",
    optionC: "Metoprolol, Omeprazole, Nifedipine, Atropine",
    optionD: "Mannitol, Ondansetron, Norepinephrine, Aminophylline",
    correctAnswer: "B",
    explanation: "MONA represents Morphine (relieves pain and reduces preload), Oxygen (improves myocardial oxygenation), Nitroglycerin (coronary vasodilation), and Aspirin (antiplatelet aggregation)."
  },
  {
    number: 3,
    question: "Which of the following signs is an early indicator of increased intracranial pressure (ICP) in a client with traumatic brain injury?",
    optionA: "Cushing's triad (bradycardia, hypertension with widening pulse pressure, irregular respirations)",
    optionB: "Bilateral fixed and dilated pupils",
    optionC: "Change in level of consciousness (restlessness, lethargy, confusion)",
    optionD: "Decerebrate posturing",
    correctAnswer: "C",
    explanation: "A subtle change in the client's level of consciousness (irritability, confusion, drowsiness) is the earliest and most sensitive indicator of deteriorating neurological status and rising ICP."
  },
  {
    number: 4,
    question: "A client with Chronic Obstructive Pulmonary Disease (COPD) has carbon dioxide retention. Why must oxygen flow rates be carefully regulated at low levels (1 to 2 L/min)?",
    optionA: "High oxygen flow rates cause sudden severe metabolic alkalosis",
    optionB: "The client's respiratory drive relies on hypoxemia rather than hypercapnia",
    optionC: "High flow rates can cause immediate alveolar rupture and pneumothorax",
    optionD: "Oxygen drying of bronchial mucosa leads to fungal colonization",
    correctAnswer: "B",
    explanation: "In chronic CO2 retainers, central chemoreceptors become desensitized to hypercapnia; respiration is driven by peripheral chemoreceptors responding to low PO2 (hypoxic drive). Excessive oxygen blunts this drive, causing hypoventilation."
  },
  {
    number: 5,
    question: "A patient with peptic ulcer disease experiences sudden, severe, sharp epigastric pain that spreads across the abdomen, which becomes rigid and board-like. What complication should the nurse suspect?",
    optionA: "Pyloric obstruction",
    optionB: "Gastrointestinal perforation",
    optionC: "Dumping syndrome",
    optionD: "Intestinal intussusception",
    correctAnswer: "B",
    explanation: "Perforation of a peptic ulcer allows gastric contents to spill into the peritoneal cavity, causing chemical peritonitis marked by sudden agonizing pain and a classic board-like, rigid abdomen."
  },
  {
    number: 6,
    question: "Using the modified Parkland Formula, calculate the total volume of Ringer's Lactate to administer in the first 24 hours to a 70 kg client with a 40% Total Body Surface Area (TBSA) thermal burn.",
    optionA: "5,600 mL",
    optionB: "11,200 mL",
    optionC: "14,000 mL",
    optionD: "22,400 mL",
    correctAnswer: "B",
    explanation: "Parkland Formula = 4 mL × Body weight in kg × %TBSA burn. Thus, 4 × 70 × 40 = 11,200 mL. Half (5,600 mL) is given in the first 8 hours from time of injury, and the second half over the next 16 hours."
  },
  {
    number: 7,
    question: "Following a subtotal thyroidectomy, the client reports tingling around the lips and fingers, and taps on the facial nerve elicit facial twitching. What does this indicate?",
    optionA: "Thyrotoxic crisis (thyroid storm)",
    optionB: "Damage to the recurrent laryngeal nerve",
    optionC: "Hypocalcemia due to accidental parathyroid resection (positive Chvostek's sign)",
    optionD: "Hyperkalemia due to tissue breakdown",
    correctAnswer: "C",
    explanation: "Inadvertent removal of or trauma to parathyroid glands causes acute hypocalcemia. Perioral paresthesias and facial twitching upon tapping the facial nerve (positive Chvostek's sign) indicate hypocalcemic tetany."
  },
  {
    number: 8,
    question: "Which of the following clinical findings is characteristic of Left-Sided Heart Failure rather than Right-Sided Heart Failure?",
    optionA: "Jugular venous distention (JVD)",
    optionB: "Hepatomegaly and ascites",
    optionC: "Dependent peripheral pitting pedal edema",
    optionD: "Pulmonary crackles, dyspnea, and orthopnea",
    correctAnswer: "D",
    explanation: "Left ventricular failure causes blood to back up into the pulmonary veins and capillaries, resulting in pulmonary congestion, bibasilar crackles, tachypnea, orthopnea, and paroxysmal nocturnal dyspnea."
  },
  {
    number: 9,
    question: "A client with type 1 diabetes mellitus presents with deep, rapid respirations, fruity breath odor, and a blood glucose of 480 mg/dL. Which type of insulin is administered intravenously to treat Diabetic Ketoacidosis (DKA)?",
    optionA: "Regular insulin (Short-acting)",
    optionB: "NPH insulin (Intermediate-acting)",
    optionC: "Glargine insulin (Long-acting)",
    optionD: "Detemir insulin",
    correctAnswer: "A",
    explanation: "Regular insulin is the only conventional form of insulin that can be safely administered intravenously for acute glycemic emergencies like DKA and Hyperglycemic Hyperosmolar State (HHS)."
  },
  {
    number: 10,
    question: "When caring for a client with a chest tube drainage system, what is the clinical significance of continuous, vigorous bubbling in the water-seal chamber?",
    optionA: "Normal fluctuation during inspiration and expiration (tidaling)",
    optionB: "An air leak in the drainage system or chest catheter connection",
    optionC: "The pleural space has completely re-expanded",
    optionD: "Excessive suction applied to the suction control chamber",
    correctAnswer: "B",
    explanation: "Intermittent bubbling during expiration or coughing is expected with a pneumothorax, but continuous bubbling indicates an unwanted air leak in the chest tube circuit or at the insertion site."
  },
  {
    number: 11,
    question: "A patient recovering from lower extremity orthopedic surgery reports sudden pleuritic chest pain, dyspnea, tachypnea, and hemoptysis. What post-operative emergency should the nurse prioritize?",
    optionA: "Atelectasis",
    optionB: "Pulmonary embolism",
    optionC: "Myocardial rupture",
    optionD: "Pneumothorax",
    correctAnswer: "B",
    explanation: "Deep vein thrombosis (DVT) following orthopedic procedures carries a high risk of embolization to the pulmonary arterial bed, presenting classically with acute pleuritic pain, dyspnea, and hypoxia."
  },
  {
    number: 12,
    question: "What is the earliest symptom of acute Compartment Syndrome in an extremity immobilized in a fiberglass cast?",
    optionA: "Absence of distal pulses",
    optionB: "Severe, relentless pain disproportionate to the injury, unrelieved by analgesics",
    optionC: "Pallor and cool extremity temperature",
    optionD: "Complete motor paralysis of toes",
    correctAnswer: "B",
    explanation: "Severe, persistent ischemic pain out of proportion to the injury that worsens with passive stretching of muscles is the hallmark early symptom of compartment syndrome. Loss of pulses is a late sign."
  },
  {
    number: 13,
    question: "A client with cirrhosis develops asterixis (flapping tremors of the hands) and progressive confusion. Which laboratory value is most directly associated with this hepatic encephalopathy?",
    optionA: "Elevated serum amylase",
    optionB: "Elevated serum ammonia",
    optionC: "Decreased serum creatinine",
    optionD: "Elevated serum troponin",
    correctAnswer: "B",
    explanation: "Failing liver parenchyma cannot detoxify nitrogenous byproducts of intestinal protein breakdown, resulting in systemic accumulation of ammonia, which crosses the blood-brain barrier causing encephalopathy."
  },
  {
    number: 14,
    question: "In assessing a client for appendicitis, pain elicited in the right lower quadrant when palpating the left lower quadrant is known as:",
    optionA: "McBurney's sign",
    optionB: "Rovsing's sign",
    optionC: "Murphy's sign",
    optionD: "Cullen's sign",
    correctAnswer: "B",
    explanation: "Rovsing's sign is positive when deep pressure applied to the left lower quadrant elicits referred pain in the right lower quadrant due to displacement of gas and peritoneal irritation."
  },
  {
    number: 15,
    question: "A client with Chronic Kidney Disease is undergoing hemodialysis via a newly matured left radiocephalic arteriovenous (AV) fistula. What is an essential nursing intervention?",
    optionA: "Measure blood pressure routinely on the left arm to evaluate graft patency",
    optionB: "Palpate for a thrill and auscultate for a bruit over the fistula every shift",
    optionC: "Use the AV fistula for routine intravenous fluid infusions",
    optionD: "Perform frequent venipunctures on the access extremity",
    correctAnswer: "B",
    explanation: "A patent AV fistula produces a palpable vibration (thrill) and an audible continuous humming sound (bruit); blood pressures, IV lines, and venipunctures are strictly prohibited in that arm."
  },
  {
    number: 16,
    question: "Which of the following medications is classified as an osmotic diuretic used to rapidly reduce elevated intracranial pressure and cerebral edema?",
    optionA: "Spironolactone",
    optionB: "Mannitol",
    optionC: "Hydrochlorothiazide",
    optionD: "Acetazolamide",
    correctAnswer: "B",
    explanation: "Mannitol is an osmotic diuretic that creates an osmotic gradient across the intact blood-brain barrier, drawing water out of parenchymal brain tissue into vascular space to reduce ICP."
  },
  {
    number: 17,
    question: "What clinical triad constitutes 'Cushing's Triad', indicating life-threatening intracranial hypertension and imminent brain herniation?",
    optionA: "Tachycardia, hypotension, and tachypnea",
    optionB: "Bradycardia, systolic hypertension with widening pulse pressure, and irregular respirations",
    optionC: "Fever, neck rigidity, and photophobia",
    optionD: "Tremor, chorea, and athetosis",
    correctAnswer: "B",
    explanation: "Cushing's Triad consists of progressive systolic hypertension with a widening pulse pressure, profound bradycardia, and irregular/Cheyne-Stokes breathing, reflecting brainstem compression."
  },
  {
    number: 18,
    question: "Following a stroke, a client cannot understand spoken language or written words, although they speak fluently in nonsensical sentences. What type of aphasia does this describe?",
    optionA: "Broca's expressive aphasia",
    optionB: "Wernicke's receptive aphasia",
    optionC: "Global aphasia",
    optionD: "Conduction aphasia",
    correctAnswer: "B",
    explanation: "Wernicke's aphasia (receptive/sensory) results from damage to the superior temporal gyrus of the dominant hemisphere; speech is fluent and articulate but completely lacks meaning and comprehension is lost."
  },
  {
    number: 19,
    question: "A client who underwent subtotal gastrectomy experiences nausea, abdominal cramps, diaphoresis, and palpitations 20 minutes after eating. What dietary modification helps prevent this 'Dumping Syndrome'?",
    optionA: "Eat large meals rich in simple sugars and drink liquids freely with food",
    optionB: "Consume small, frequent high-protein, low-carbohydrate meals and avoid fluids with meals",
    optionC: "Remain upright and walk briskly for 30 minutes following every meal",
    optionD: "Increase dietary lactose and whole milk consumption",
    correctAnswer: "B",
    explanation: "Dumping syndrome is minimized by eating small, frequent meals low in carbohydrates and high in protein and fat, avoiding liquids during meals, and lying down for 20-30 minutes after eating."
  },
  {
    number: 20,
    question: "Which test is utilized to assess for meningeal irritation where extension of the client's knee with the hip flexed at 90 degrees elicits severe resistance and neck pain?",
    optionA: "Brudzinski's sign",
    optionB: "Kernig's sign",
    optionC: "Babinski's sign",
    optionD: "Trousseau's sign",
    correctAnswer: "B",
    explanation: "Kernig's sign is positive when the hip is flexed 90 degrees and subsequent knee extension causes severe pain and spasm in the hamstring muscles due to inflamed lumbosacral nerve roots."
  },
  {
    number: 21,
    question: "What is the drug of choice for immediate reversal of profound respiratory depression caused by opioid toxicity (such as morphine overdose)?",
    optionA: "Flumazenil",
    optionB: "Naloxone (Narcan)",
    optionC: "Atropine sulfate",
    optionD: "Protamine sulfate",
    correctAnswer: "B",
    explanation: "Naloxone is a pure opioid antagonist that competes for and displaces opioids from mu receptors, rapidly reversing opioid-induced respiratory depression and coma."
  },
  {
    number: 22,
    question: "In a client with severe Acute Pancreatitis, bluish periumbilical ecchymosis is documented as which sign?",
    optionA: "Turner's sign",
    optionB: "Cullen's sign",
    optionC: "Blumberg's sign",
    optionD: "Kehr's sign",
    correctAnswer: "B",
    explanation: "Cullen's sign is superficial edema and bruising in the subcutaneous fatty tissue around the umbilicus, signaling retroperitoneal hemorrhage commonly seen in severe necrotizing pancreatitis."
  },
  {
    number: 23,
    question: "Which class of anti-inflammatory medications is notorious for causing gastrointestinal mucosal erosions and occult bleeding by inhibiting cyclooxygenase-1 (COX-1)?",
    optionA: "Proton Pump Inhibitors",
    optionB: "Nonsteroidal Anti-inflammatory Drugs (NSAIDs)",
    optionC: "H2 Receptor Blockers",
    optionD: "Beta-2 Agonists",
    correctAnswer: "B",
    explanation: "Nonsteroidal Anti-inflammatory Drugs (e.g., ibuprofen, indomethacin, aspirin) inhibit COX-1, depleting protective prostaglandins that maintain gastric mucosal blood flow and bicarbonate secretion."
  },
  {
    number: 24,
    question: "A client with Addison's disease (primary adrenal insufficiency) is at continuous risk of acute adrenal crisis. What electrolyte pattern is typical of Addisonian crisis?",
    optionA: "Hypernatremia and hypokalemia",
    optionB: "Hyponatremia, hyperkalemia, and hypoglycemia",
    optionC: "Hypercalcemia and hypernatremia",
    optionD: "Hypokalemia and hyperglycemia",
    correctAnswer: "B",
    explanation: "Lack of aldosterone prevents renal sodium reabsorption and potassium excretion, leading to hyponatremia and hyperkalemia. Cortisol deficiency impairs gluconeogenesis, producing hypoglycemia."
  },
  {
    number: 25,
    question: "When inspecting a newly created colostomy on the second post-operative day, what appearance of the stoma should the nurse expect?",
    optionA: "Pale pink with greyish slough",
    optionB: "Beefy red, moist, and mildly edematous",
    optionC: "Dark purple to dusky black",
    optionD: "Dry, whitish, and necrotic",
    correctAnswer: "B",
    explanation: "A healthy, viable stoma should appear beefy red to bright pink, moist, and slightly elevated. A pale, purple, or dark black stoma indicates compromised vascular perfusion and ischemia."
  },
  {
    number: 26,
    question: "What is the primary rationale for administering intravenous broad-spectrum antibiotics within 1 hour ('the golden hour') of identifying septic shock?",
    optionA: "To prevent nosocomial urinary tract colonization",
    optionB: "To significantly lower mortality by eradicating circulating bacteremia and source pathogens",
    optionC: "To lower body temperature directly via antipyretic action",
    optionD: "To stimulate adrenal corticosteroid release",
    correctAnswer: "B",
    explanation: "In sepsis and septic shock, every hour of delay in administering appropriate antimicrobial therapy following documentation of hypotension produces a measurable increase in patient mortality."
  },
  {
    number: 27,
    question: "During blood transfusion therapy, a client suddenly complains of fever, chills, lower back pain, dyspnea, and red-colored urine. What is the immediate nursing priority?",
    optionA: "Slow the infusion rate and administer intravenous acetaminophen",
    optionB: "Immediately stop the transfusion and disconnect tubing at the cannula",
    optionC: "Administer prescribed antihistamines and continue monitoring",
    optionD: "Flush the blood administration set with 5% Dextrose in water",
    correctAnswer: "B",
    explanation: "These symptoms indicate an acute hemolytic transfusion reaction. The nurse must stop the transfusion immediately to prevent further infusing of incompatible erythrocytes, maintaining IV access with normal saline."
  },
  {
    number: 28,
    question: "A client who has had a total hip arthroplasty must avoid which post-operative position to prevent dislocation of the prosthetic joint?",
    optionA: "Abduction of the operative hip using a wedge pillow",
    optionB: "Adduction across the midline and hip flexion greater than 90 degrees",
    optionC: "Elevation of the head of the bed to 45 degrees",
    optionD: "Keeping the knees straight when resting supine",
    correctAnswer: "B",
    explanation: "To prevent posterior dislocation of the newly placed prosthetic femoral head, clients must strictly avoid adduction past midline, internal rotation, and hip flexion exceeding 90 degrees."
  },
  {
    number: 29,
    question: "Which of the following cardiac rhythms is characterized by absent P waves, chaotic baseline undulations, and an irregularly irregular QRS complex response?",
    optionA: "Ventricular Tachycardia",
    optionB: "Atrial Fibrillation",
    optionC: "Sinus Bradycardia",
    optionD: "First-Degree AV Block",
    correctAnswer: "B",
    explanation: "Atrial Fibrillation is defined by disorganized, rapid atrial electrical activation without discrete P waves, producing an irregular baseline and an irregularly irregular ventricular response."
  },
  {
    number: 30,
    question: "A client with Graves' disease develops severe fever (40°C), extreme tachycardia (160 bpm), agitation, and delirium. What endocrine emergency does this presentation represent?",
    optionA: "Myxedema coma",
    optionB: "Thyroid storm (Thyrotoxic crisis)",
    optionC: "Pheochromocytoma crisis",
    optionD: "Cushing's syndrome",
    correctAnswer: "B",
    explanation: "Thyroid storm is a life-threatening hypermetabolic state resulting from severe hyperthyroidism, presenting with hyperthermia, extreme sinus tachycardia or tachyarrhythmias, agitation, and cardiovascular collapse."
  }
];

export const MCH_QUESTIONS: Question[] = [
  {
    number: 1,
    question: "Using Naegele's rule, calculate the Expected Date of Delivery (EDD) for a pregnant woman whose Last Normal Menstrual Period (LNMP) began on February 10, 2026.",
    optionA: "November 17, 2026",
    optionB: "November 10, 2026",
    optionC: "November 17, 2027",
    optionD: "October 17, 2026",
    correctAnswer: "A",
    explanation: "Naegele's rule: Add 7 days to first day of LNMP (Feb 10 + 7 = Feb 17), subtract 3 months (Feb minus 3 months = November), and adjust year if applicable (2026). Thus, November 17, 2026."
  },
  {
    number: 2,
    question: "Which of the following signs is categorized as a POSITIVE (diagnostic) sign of pregnancy rather than a presumptive or probable sign?",
    optionA: "Amenorrhea and morning sickness",
    optionB: "Positive home urine hCG pregnancy test",
    optionC: "Detection of fetal heart sounds by Doppler ultrasound or fetoscope",
    optionD: "Hegar's sign (softening of the lower uterine segment)",
    correctAnswer: "C",
    explanation: "Positive signs confirm the objective presence of a fetus: auscultation of fetal heart tones, visualization on ultrasound, and active fetal movements palpated by a trained examiner."
  },
  {
    number: 3,
    question: "At 20 to 22 weeks of gestation, where should the fundus of the uterus normally be palpated upon physical examination?",
    optionA: "At the level of the symphysis pubis",
    optionB: "Midway between the symphysis pubis and the umbilicus",
    optionC: "At the level of the umbilicus",
    optionD: "At the level of the xiphoid process",
    correctAnswer: "C",
    explanation: "At 20 to 22 weeks gestation, the uterine fundus reaches the anatomical landmark of the maternal umbilicus (approximately 20 cm height above the symphysis pubis)."
  },
  {
    number: 4,
    question: "On the Partograph used for monitoring progress of active labour, the 'Action Line' is located how many hours to the right of the 'Alert Line'?",
    optionA: "1 hour",
    optionB: "2 hours",
    optionC: "4 hours",
    optionD: "6 hours",
    correctAnswer: "C",
    explanation: "The WHO Partograph places the Action Line parallel and exactly 4 hours to the right of the Alert Line. If the cervical dilation curve crosses the action line, critical intervention is mandatory."
  },
  {
    number: 5,
    question: "What is the drug of choice for the prevention and treatment of convulsive seizures in severe pre-eclampsia and eclampsia?",
    optionA: "Diazepam",
    optionB: "Magnesium Sulfate",
    optionC: "Phenytoin",
    optionD: "Sodium Valproate",
    correctAnswer: "B",
    explanation: "Magnesium sulfate is the internationally established first-line anticonvulsant for preventing and halting eclamptic seizures by blocking neuromuscular transmission and causing cerebral vasodilation."
  },
  {
    number: 6,
    question: "Before administering the next dose of intramuscular or intravenous Magnesium Sulfate, which physiological parameter must the nurse verify?",
    optionA: "Serum sodium level > 140 mEq/L",
    optionB: "Respiratory rate >= 16 breaths/min, presence of patellar (knee jerk) reflex, and urine output >= 30 mL/hr",
    optionC: "Maternal heart rate >= 100 beats/min",
    optionD: "Blood glucose between 80 to 120 mg/dL",
    correctAnswer: "B",
    explanation: "Magnesium toxicity manifests first with loss of deep tendon reflexes, followed by respiratory depression (<16/min) and oliguria (<30 mL/hr). All three parameters must be adequate before dosing."
  },
  {
    number: 7,
    question: "What is the specific intravenous antidote for Magnesium Sulfate toxicity resulting in respiratory arrest?",
    optionA: "Naloxone",
    optionB: "Calcium Gluconate 10% (10 mL given slowly over 10 minutes)",
    optionC: "Protamine sulfate",
    optionD: "Potassium chloride",
    correctAnswer: "B",
    explanation: "10 mL of 10% Calcium Gluconate intravenously directly antagonizes the neuromuscular blocking effects of magnesium, restoring respiratory drive and neuromuscular function."
  },
  {
    number: 8,
    question: "A pregnant client at 32 weeks gestation arrives with painless, bright red vaginal bleeding. What procedure is strictly contraindicated?",
    optionA: "Non-stress test (NST)",
    optionB: "Digital vaginal examination",
    optionC: "Abdominal ultrasound examination",
    optionD: "Placement of an external fetal heart monitor",
    correctAnswer: "B",
    explanation: "Painless bright red bleeding is suspicious for Placenta Previa. A digital vaginal exam can directly penetrate the low-lying placenta or cervical os, causing catastrophic maternal hemorrhage."
  },
  {
    number: 9,
    question: "A client at 36 weeks gestation presents with sudden, agonizing abdominal pain, dark red vaginal bleeding, and a rigid, hypertonic 'board-like' uterus. What is the diagnosis?",
    optionA: "Placenta previa",
    optionB: "Abruptio placentae (Placental abruption)",
    optionC: "Uterine prolapse",
    optionD: "Incompetent cervix",
    correctAnswer: "B",
    explanation: "Abruptio placentae is the premature separation of a normally situated placenta from the uterine wall, classically presenting with severe uterine pain, tenderness, hypertonus, and dark hemorrhage."
  },
  {
    number: 10,
    question: "Which of the following is the most common cause of Primary Postpartum Hemorrhage (PPH) within the first 24 hours of delivery?",
    optionA: "Cervical laceration",
    optionB: "Uterine atony (failure of uterine musculature to contract)",
    optionC: "Retained cotyledon",
    optionD: "Disseminated intravascular coagulation (DIC)",
    correctAnswer: "B",
    explanation: "Uterine atony (the failure of the myometrium to contract and compress spiral arterioles) accounts for over 70-80% of all primary postpartum hemorrhages."
  },
  {
    number: 11,
    question: "What are the three core components of the Active Management of the Third Stage of Labour (AMTSL)?",
    optionA: "Immediate cord clamping, perineal massage, and manual placental extraction",
    optionB: "Administration of a uterotonic (Oxytocin 10 IU IM), Controlled Cord Traction (CCT), and uterine massage",
    optionC: "Epidural analgesia, episiotomy, and forceps delivery",
    optionD: "Lithotomy position, fundal pressure, and bladder catheterization",
    correctAnswer: "B",
    explanation: "AMTSL consists of: 1. Uterotonic administration (10 IU Oxytocin IM) within 1 minute of birth, 2. Controlled Cord Traction (CCT) with counter-traction, and 3. Immediate fundal massage."
  },
  {
    number: 12,
    question: "A newborn at 1 minute of life displays: heart rate 110 bpm, vigorous crying, active motion with flexed extremities, prompt sneeze upon nasal suctioning, and pink body with blue extremities (acrocyanosis). What is the APGAR score?",
    optionA: "10",
    optionB: "9",
    optionC: "8",
    optionD: "7",
    correctAnswer: "B",
    explanation: "Heart rate >100 (2), strong cry/respirations (2), active muscle tone (2), prompt reflex irritability (2), pink body with blue hands/feet (acrocyanosis = 1). Total APGAR = 2 + 2 + 2 + 2 + 1 = 9."
  },
  {
    number: 13,
    question: "A primitive newborn reflex elicited by suddenly allowing the infant's head to drop slightly backwards, causing symmetric extension and abduction of the arms followed by adduction, is:",
    optionA: "Babinski reflex",
    optionB: "Moro reflex (Startle reflex)",
    optionC: "Tonic neck (Fencer) reflex",
    optionD: "Rooting reflex",
    correctAnswer: "B",
    explanation: "The Moro reflex is a normal bilateral infantile response to sudden loss of support, typically disappearing by 4 to 6 months of age as neurological maturity advances."
  },
  {
    number: 14,
    question: "When does physiological jaundice typically appear in a full-term healthy newborn?",
    optionA: "Within the first 12 hours of life",
    optionB: "Between 24 to 72 hours after birth (peaking day 3 to 5)",
    optionC: "At 3 weeks of age",
    optionD: "At 2 months of age",
    correctAnswer: "B",
    explanation: "Physiological jaundice results from immature hepatic glucuronyl transferase activity and erythrocyte breakdown; it never appears in the first 24 hours of life (which indicates pathological hemolysis)."
  },
  {
    number: 15,
    question: "What is an essential nursing intervention when caring for a newborn undergoing phototherapy for hyperbilirubinemia?",
    optionA: "Dress the infant in warm clothing and woolen cap",
    optionB: "Shield the newborn's eyes with opaque patches and cover genitalia",
    optionC: "Restrict oral fluid intake to prevent diaper wetting",
    optionD: "Apply thick mineral oil to the infant's skin to enhance light penetration",
    correctAnswer: "B",
    explanation: "Phototherapy light can damage retinal cells and gonadal tissue; opaque eye coverings and diaper coverage are mandatory, along with frequent hydration to excrete photo-isomers."
  },
  {
    number: 16,
    question: "A 2-year-old child presents with bilateral pitting pedal edema, moon face, flag sign changes in hair color, and apathy. Which nutritional disorder does this represent?",
    optionA: "Marasmus",
    optionB: "Kwashiorkor",
    optionC: "Scurvy",
    optionD: "Rickets",
    correctAnswer: "B",
    explanation: "Kwashiorkor is severe acute malnutrition characterized by inadequate protein intake despite adequate caloric intake, manifesting with hypoalbuminemic generalized edema, hepatomegaly, and hair changes."
  },
  {
    number: 17,
    question: "According to WHO/IMCI guidelines, a 10-month-old infant with a respiratory rate of 56 breaths per minute is classified as having:",
    optionA: "Normal breathing",
    optionB: "Fast breathing (Tachypnea)",
    optionC: "Bradypnea",
    optionD: "Apnea of infancy",
    correctAnswer: "B",
    explanation: "WHO fast breathing cutoffs: Under 2 months >= 60 bpm; 2 to 11 months >= 50 bpm; 12 to 59 months >= 40 bpm. For a 10-month-old, 56 bpm meets the criteria for tachypnea/fast breathing."
  },
  {
    number: 18,
    question: "In the IMCI classification, what are the four clinical signs of 'Severe Dehydration' in a child with acute diarrhea?",
    optionA: "Mild thirst, moist tongue, normal pulse, tears present",
    optionB: "Lethargy/unconsciousness, sunken eyes, inability to drink or drinking poorly, and skin pinch going back very slowly (>2 seconds)",
    optionC: "High fever, clear urine, crying with abundant tears",
    optionD: "Cough, swollen joints, stridor when calm",
    correctAnswer: "B",
    explanation: "Severe dehydration requires any 2 of the following: lethargy or unconsciousness, sunken eyes, inability to drink or drinking poorly, and a very slow skin pinch recoil (>2 seconds)."
  },
  {
    number: 19,
    question: "At what gestational age is the synthesis of pulmonary surfactant (dipalmitoylphosphatidylcholine) sufficient to prevent neonatal respiratory distress syndrome (RDS)?",
    optionA: "20 to 24 weeks",
    optionB: "28 to 30 weeks",
    optionC: "35 to 36 weeks",
    optionD: "41 to 42 weeks",
    correctAnswer: "C",
    explanation: "Type II pneumocytes produce sufficient surfactant to lower alveolar surface tension and maintain functional residual capacity usually by 35 to 36 completed weeks of gestation."
  },
  {
    number: 20,
    question: "Which medication is administered to a pregnant woman in preterm labour between 24 and 34 weeks gestation to accelerate fetal lung maturation?",
    optionA: "Oxytocin",
    optionB: "Betamethasone or Dexamethasone (Corticosteroids)",
    optionC: "Indomethacin",
    optionD: "Magnesium Trisilicate",
    correctAnswer: "B",
    explanation: "Antenatal corticosteroids (e.g., Betamethasone 12 mg IM every 24 hours for 2 doses) stimulate fetal pneumocyte differentiation and surfactant production, drastically reducing RDS and intraventricular hemorrhage."
  },
  {
    number: 21,
    question: "Which pathogen is the primary cause of Ophthalmia Neonatorum presenting with copious purulent eye discharge within the first 2 to 5 days of life?",
    optionA: "Treponema pallidum",
    optionB: "Neisseria gonorrhoeae",
    optionC: "Escherichia coli",
    optionD: "Group B Streptococcus",
    correctAnswer: "B",
    explanation: "Neisseria gonorrhoeae contracted during vaginal delivery causes hyperacute purulent conjunctivitis within 2-5 days that can ulcerate and perforate the cornea, leading to permanent blindness."
  },
  {
    number: 22,
    question: "A postpartum woman at 2 weeks post-delivery reports fever (38.8°C), severe unilateral breast pain, erythema, and a warm localized wedge-shaped swelling. What is the most likely diagnosis?",
    optionA: "Normal physiological breast engorgement",
    optionB: "Acute Puerperal Mastitis (typically caused by Staphylococcus aureus)",
    optionC: "Fibroadenoma",
    optionD: "Galactocele",
    correctAnswer: "B",
    explanation: "Acute mastitis is a bacterial infection of lactating breast parenchyma (frequently S. aureus entering through cracked nipples), causing fever, chills, and localized wedge-shaped erythema."
  },
  {
    number: 23,
    question: "What is the normal vaginal discharge called during the first 3 to 4 days postpartum, consisting primarily of blood, decidual tissue, and mucus?",
    optionA: "Lochia serosa",
    optionB: "Lochia rubra",
    optionC: "Lochia alba",
    optionD: "Leukorrhea",
    correctAnswer: "B",
    explanation: "Lochia rubra is dark red and lasts 3-4 days; Lochia serosa is brownish-pink lasting from days 4 to 10; Lochia alba is yellowish-white lasting from days 10 up to 3 to 6 weeks."
  },
  {
    number: 24,
    question: "During a delivery complicated by shoulder dystocia, what is the first-line obstetric maneuver involving hyperflexion of the maternal hips onto her abdomen?",
    optionA: "Woods' corkscrew maneuver",
    optionB: "McRoberts maneuver",
    optionC: "Zavanelli maneuver",
    optionD: "Fundal push maneuver",
    correctAnswer: "B",
    explanation: "McRoberts maneuver involves sharply flexing the mother's thighs against her abdomen, straightening the lumbosacral angle and widening the pelvic outlet to dislodge the anterior shoulder."
  },
  {
    number: 25,
    question: "Which of the following interventions is appropriate in the immediate nursing management of an infant experiencing a febrile convulsion?",
    optionA: "Place a wooden spoon in the child's mouth to prevent tongue biting",
    optionB: "Restrain the child's arms and legs vigorously to stop muscle jerking",
    optionC: "Position the child on their side, maintain patent airway, and protect from physical injury",
    optionD: "Immerse the child immediately into a tub of ice-cold water",
    correctAnswer: "C",
    explanation: "Priority management during a seizure is airway maintenance and safety: place the child in a lateral recovery position, loosen tight clothing, never place objects in the mouth, and never restrain movements."
  },
  {
    number: 26,
    question: "Which condition in pregnancy is characterized by severe, intractable vomiting resulting in dehydration, weight loss exceeding 5% of pre-pregnancy weight, ketonuria, and electrolyte disturbances?",
    optionA: "Morning sickness",
    optionB: "Hyperemesis Gravidarum",
    optionC: "Gestational diabetes",
    optionD: "Cholecystitis",
    correctAnswer: "B",
    explanation: "Hyperemesis gravidarum is severe pernicious vomiting during pregnancy causing dehydration, ketosis, electrolyte depletion, and nutritional compromise requiring intravenous rehydration."
  },
  {
    number: 27,
    question: "A mother living with HIV asks about infant feeding recommendations in a resource-limited setting. According to WHO guidelines, what is recommended if exclusive replacement feeding is not AFASS (Acceptable, Feasible, Affordable, Sustainable, and Safe)?",
    optionA: "Mixed feeding with formula and porridge from birth",
    optionB: "Exclusive breastfeeding for the first 6 months while mother adheres to Antiretroviral Therapy (ART)",
    optionC: "Immediate wet nursing by an untested neighbor",
    optionD: "Diluted cow's milk supplemented with sugar",
    correctAnswer: "B",
    explanation: "WHO guidelines recommend that mothers living with HIV on ART exclusively breastfeed for the first 6 months, as exclusive breastfeeding with maternal viral suppression significantly prevents vertical transmission while protecting against diarrheal mortality."
  },
  {
    number: 28,
    question: "What is the primary action of Oxytocin (Pitocin) when administered during the third and fourth stages of labour?",
    optionA: "Relaxes cervical collagen fibers",
    optionB: "Stimulates rhythmic contractions of the myometrium to control hemorrhage",
    optionC: "Acts as a systemic anticoagulant",
    optionD: "Inhibits lactation and prolactin secretion",
    correctAnswer: "B",
    explanation: "Oxytocin binds to G-protein coupled receptors on uterine smooth muscle cells, triggering influx of calcium and stimulating forceful, rhythmic myometrial contractions to compress severed placental vessels."
  },
  {
    number: 29,
    question: "Which congenital anomaly is characterized by herniation of abdominal viscera through an enlarged umbilical ring, covered by an intact peritoneal and amniotic sac?",
    optionA: "Gastroschisis",
    optionB: "Omphalocele",
    optionC: "Umbilical hernia",
    optionD: "Meckel's diverticulum",
    correctAnswer: "B",
    explanation: "An omphalocele is a midline abdominal wall defect where eviscerated abdominal contents are enclosed in a translucent sac composed of amnion and peritoneum with the umbilical cord inserting into the sac apex."
  },
  {
    number: 30,
    question: "When performing neonatal cardiopulmonary resuscitation, what is the recommended ratio of chest compressions to ventilations for an asphyxiated newborn?",
    optionA: "15 compressions to 2 ventilations",
    optionB: "30 compressions to 2 ventilations",
    optionC: "3 compressions to 1 ventilation (90 compressions and 30 breaths per minute)",
    optionD: "5 compressions to 1 ventilation",
    correctAnswer: "C",
    explanation: "Neonatal resuscitation guidelines specify a 3:1 compression-to-ventilation ratio for newborns (coordinated to deliver 90 compressions and 30 breaths, achieving 120 events per minute)."
  }
];

export const COMMUNITY_QUESTIONS: Question[] = [
  {
    number: 1,
    question: "Which historic international conference declared that 'Health is a fundamental human right' and identified Primary Health Care (PHC) as the key to achieving Health for All?",
    optionA: "Geneva Convention (1949)",
    optionB: "Alma-Ata Conference (1978)",
    optionC: "Ottawa Charter (1986)",
    optionD: "Bamako Initiative (1987)",
    correctAnswer: "B",
    explanation: "The Declaration of Alma-Ata (USSR, September 1978) affirmed health as a fundamental human right and designated Primary Health Care as the central vehicle to achieve health for all."
  },
  {
    number: 2,
    question: "In the Epidemiological Triad of disease causation, what are the three interacting primary elements?",
    optionA: "Host, Agent, and Environment",
    optionB: "Bacteria, Virus, and Parasite",
    optionC: "Heredity, Lifestyle, and Medical care",
    optionD: "Poverty, Malnutrition, and Overcrowding",
    correctAnswer: "A",
    explanation: "The epidemiological triangle models disease causation through the complex interaction between an external Agent (pathogen), a susceptible Host, and an Environment that permits exposure."
  },
  {
    number: 3,
    question: "Vaccinating children with the Pentavalent vaccine and educating mothers on exclusive breastfeeding are examples of which level of disease prevention?",
    optionA: "Primordial prevention",
    optionB: "Primary prevention",
    optionC: "Secondary prevention",
    optionD: "Tertiary prevention",
    correctAnswer: "B",
    explanation: "Primary prevention aims to forestall the onset of disease through health promotion, immunization, and specific protection before biological pathological processes commence."
  },
  {
    number: 4,
    question: "What is the required temperature storage range for the cold chain maintenance of vaccines in a health center refrigerator?",
    optionA: "-20°C to -10°C",
    optionB: "0°C to +4°C",
    optionC: "+2°C to +8°C",
    optionD: "+10°C to +15°C",
    correctAnswer: "C",
    explanation: "The standard cold chain storage temperature for vaccines at the primary health care level is strictly maintained between +2°C and +8°C to prevent thermal degradation and freezing of sensitive antigens."
  },
  {
    number: 5,
    question: "Which of the following vaccines is freeze-sensitive and will lose its potency permanently if accidentally exposed to temperatures below 0°C?",
    optionA: "Oral Polio Vaccine (OPV)",
    optionB: "Measles vaccine",
    optionC: "Pentavalent vaccine (DPT-HepB-Hib)",
    optionD: "Yellow fever vaccine",
    correctAnswer: "C",
    explanation: "Adsorbed aluminum adjuvant-containing vaccines like Pentavalent, Tetanus toxoid, and Hepatitis B are permanently damaged by freezing; OPV and Measles tolerate freezing well."
  },
  {
    number: 6,
    question: "When inspecting a Vaccine Vial Monitor (VVM), at which stage must the vaccine vial be discarded and NEVER administered?",
    optionA: "Stage 1 (Inner square is lighter than outer circle)",
    optionB: "Stage 2 (Inner square is still lighter than outer circle but slightly tinted)",
    optionC: "Stage 3 (Inner square matches the color of the outer circle) and Stage 4 (Inner square is darker)",
    optionD: "Any vial that has been kept for more than 24 hours in the refrigerator",
    correctAnswer: "C",
    explanation: "The discard point of a VVM is reached when the inner square matches or is darker than the outer circle (Stages 3 and 4), indicating cumulative heat exposure that renders the vaccine unusable."
  },
  {
    number: 7,
    question: "What is the physical diagnostic test performed on suspect vials of Pentavalent or Tetanus Toxoid to determine if they have been damaged by freezing?",
    optionA: "Biuret test",
    optionB: "Shake test",
    optionC: "Litmus precipitation test",
    optionD: "Spectrophotometric test",
    correctAnswer: "B",
    explanation: "The Shake Test compares the sedimentation rate of a suspect frozen vial against an intentionally frozen and thawed control vial; frozen vaccines precipitate into rapid-settling granules."
  },
  {
    number: 8,
    question: "Which species of Plasmodium is responsible for the most severe forms of cerebral malaria and maternal mortality in Sub-Saharan Africa?",
    optionA: "Plasmodium vivax",
    optionB: "Plasmodium falciparum",
    optionC: "Plasmodium malariae",
    optionD: "Plasmodium ovale",
    correctAnswer: "B",
    explanation: "Plasmodium falciparum causes microvascular sequestration through cytoadherence of parasitized erythrocytes, leading to severe cerebral malaria, acute respiratory distress, severe anemia, and death."
  },
  {
    number: 9,
    question: "What is the recommended national regimen for Intermittent Preventive Treatment of malaria in pregnancy (IPTp) using Sulfadoxine-Pyrimethamine (SP)?",
    optionA: "Daily doses throughout all three trimesters",
    optionB: "Monthly doses starting at the beginning of the second trimester (at quickening) spaced at least 4 weeks apart",
    optionC: "A single dose given during the first week of gestation",
    optionD: "Only administered if a malaria rapid diagnostic test (RDT) is positive",
    correctAnswer: "B",
    explanation: "WHO/National malaria policy recommends IPTp-SP administered to all pregnant women starting as early as possible in the second trimester, with each dose given at least one month apart until delivery."
  },
  {
    number: 10,
    question: "What causative agent is responsible for epidemic cholera, producing profuse painless watery 'rice-water' stools and rapid dehydration?",
    optionA: "Salmonella typhi",
    optionB: "Vibrio cholerae",
    optionC: "Shigella dysenteriae",
    optionD: "Entamoeba histolytica",
    correctAnswer: "B",
    explanation: "Vibrio cholerae produces cholera enterotoxin that binds to enterocytes, activating adenylate cyclase and causing massive hypersecretion of water and electrolytes, leading to hypovolemic shock within hours."
  },
  {
    number: 11,
    question: "Which of the following is classified as a Secondary level of disease prevention?",
    optionA: "Screening women for cervical cancer via Visual Inspection with Acetic Acid (VIA) or Pap smear",
    optionB: "Promoting physical exercise and smoking cessation in schools",
    optionC: "Physical therapy and gait retraining following a cerebrovascular accident",
    optionD: "Chlorination of municipal water reservoirs",
    correctAnswer: "A",
    explanation: "Secondary prevention focuses on early detection and prompt intervention to halt disease progression in its preclinical or early symptomatic stage (e.g., screening tests like Pap smears, mammography)."
  },
  {
    number: 12,
    question: "What is the national target age for administering the Measles and Yellow Fever vaccines to infants in the Nigerian National Programme on Immunization (NPI)?",
    optionA: "At birth",
    optionB: "6 weeks of age",
    optionC: "9 months of age",
    optionD: "18 months of age",
    correctAnswer: "C",
    explanation: "In the Nigerian routine immunization schedule, Measles 1 and Yellow Fever vaccines are routinely administered at 9 months of age, when maternal transplacental antibodies have sufficiently waned."
  },
  {
    number: 13,
    question: "Under the DOTS (Directly Observed Treatment, Short-course) strategy for Tuberculosis, what is the primary role of the healthcare provider or treatment supporter?",
    optionA: "Deliver a 30-day supply of antitubercular drugs to the patient's home",
    optionB: "Directly watch the patient ingest every prescribed dose of anti-TB medications",
    optionC: "Administer weekly intramuscular streptomycin injections exclusively",
    optionD: "Isolate the patient in a sanatorium for 6 continuous months",
    correctAnswer: "B",
    explanation: "DOTS requires a trained observer to watch the patient swallow their medications for the full treatment duration, guaranteeing treatment compliance and preventing multidrug-resistant TB (MDR-TB)."
  },
  {
    number: 14,
    question: "Which epidemiological term describes the habitual presence or constant baseline occurrence of a disease within a given geographical area?",
    optionA: "Epidemic",
    optionB: "Endemic",
    optionC: "Pandemic",
    optionD: "Sporadic",
    correctAnswer: "B",
    explanation: "An endemic disease is one that is constantly maintained at a baseline frequency in a specific population or geographic area (e.g., malaria in tropical West Africa)."
  },
  {
    number: 15,
    question: "What is the denominator used in calculating the Infant Mortality Rate (IMR)?",
    optionA: "Total number of live births occurring in the same calendar year",
    optionB: "Total mid-year population of children under 5 years",
    optionC: "Total number of pregnancies registered in antenatal clinics",
    optionD: "Total hospital admissions of pediatric clients",
    correctAnswer: "A",
    explanation: "Infant Mortality Rate = (Number of deaths of infants under 1 year of age in a given year / Total number of live births in the same year) × 1,000."
  },
  {
    number: 16,
    question: "Which hormonal contraceptive method is administered by intramuscular injection every 3 months (12 weeks)?",
    optionA: "Combined oral contraceptive pill",
    optionB: "Depot Medroxyprogesterone Acetate (DMPA / Depo-Provera)",
    optionC: "Levonorgestrel subdermal implant (Jadelle)",
    optionD: "Copper-T intrauterine device",
    correctAnswer: "B",
    explanation: "Depot Medroxyprogesterone Acetate (DMPA, 150 mg IM) is an injectable progestin given every 12 weeks that inhibits ovulation, thickens cervical mucus, and atrophies the endometrium."
  },
  {
    number: 17,
    question: "Which of the following conditions is an absolute contraindication for prescribing Combined Oral Contraceptive (COC) pills?",
    optionA: "Age 22 with mild dysmenorrhea",
    optionB: "Woman over 35 years of age who smokes heavily (>15 cigarettes/day)",
    optionC: "History of irregular menstrual periods",
    optionD: "Multiparity",
    correctAnswer: "B",
    explanation: "Women aged >=35 who smoke have an exponentially increased risk of severe thromboembolic events, myocardial infarction, and stroke if prescribed estrogen-containing contraceptives."
  },
  {
    number: 18,
    question: "Within what timeframe must emergency Post-Exposure Prophylaxis (PEP) for HIV be initiated following an occupational needle-stick injury?",
    optionA: "Within 2 hours ideally, and no later than 72 hours post-exposure",
    optionB: "Within 14 days",
    optionC: "Only after HIV antibody test results return positive at 6 weeks",
    optionD: "Within 30 days",
    correctAnswer: "A",
    explanation: "HIV Post-Exposure Prophylaxis (PEP) should be started as soon as possible, ideally within 2 hours and absolutely within 72 hours of potential exposure, continued for 28 consecutive days."
  },
  {
    number: 19,
    question: "What is the primary mechanism of action of the Copper-T 380A Intrauterine Contraceptive Device (IUCD)?",
    optionA: "Permanent suppression of ovarian folliculogenesis and ovulation",
    optionB: "Induction of a sterile local inflammatory reaction that is toxic to spermatozoa and ova",
    optionC: "Obstruction of both fallopian tubes via thermal cautery",
    optionD: "Systemic estrogen release",
    correctAnswer: "B",
    explanation: "The Copper-T IUCD continuously releases copper ions into the uterine cavity, generating a sterile, localized inflammatory reaction that impairs sperm motility, viability, and fertilization."
  },
  {
    number: 20,
    question: "In rural community water sanitation, which method provides simple, low-cost disinfection of clear water using solar ultraviolet radiation and heat?",
    optionA: "Slow sand filtration",
    optionB: "SODIS (Solar Water Disinfection) method",
    optionC: "Reverse osmosis",
    optionD: "Ozone gas treatment",
    correctAnswer: "B",
    explanation: "SODIS utilizes transparent PET plastic bottles filled with water placed in full sunlight for at least 6 hours; UVA radiation and thermal pasteurization synergistically kill bacterial and viral pathogens."
  },
  {
    number: 21,
    question: "The Bamako Initiative adopted by African health ministers in 1987 was designed to strengthen Primary Health Care primarily through:",
    optionA: "Complete free healthcare subsidized exclusively by foreign donors",
    optionB: "Community participation and sustainable revolving drug funds (cost-recovery mechanisms)",
    optionC: "Building quaternary teaching hospitals in rural capitals",
    optionD: "Privatizing all local district clinics",
    correctAnswer: "B",
    explanation: "The Bamako Initiative established community co-management of local health centers and community-financing mechanisms through a revolving essential drug fund to ensure continuous medicine availability."
  },
  {
    number: 22,
    question: "What is the mode of transmission for Hepatitis A virus?",
    optionA: "Blood transfusion and contaminated needles",
    optionB: "Fecal-oral route through contaminated food or drinking water",
    optionC: "Airborne droplet nuclei",
    optionD: "Sexual contact with infected body fluids",
    correctAnswer: "B",
    explanation: "Hepatitis A is an enteric picornavirus transmitted primarily via the fecal-oral route through ingestion of contaminated water, food, or poor sanitation and hygiene."
  },
  {
    number: 23,
    question: "Which of the following vector control measures is most effective at reducing nocturnal transmission of malaria in households?",
    optionA: "Application of indoor surface repellents to floors",
    optionB: "Universal ownership and correct nightly use of Long-Lasting Insecticidal Nets (LLINs)",
    optionC: "Planting eucalyptus trees near riverbeds",
    optionD: "Wearing dark clothing in the evenings",
    correctAnswer: "B",
    explanation: "Female Anopheles mosquitoes bite predominantly between dusk and dawn indoors; sleeping under Long-Lasting Insecticidal Nets (LLINs) provides a physical and chemical barrier that slashes malaria incidence."
  },
  {
    number: 24,
    question: "What is the clinical definition of a 'Case-Fatality Rate' in epidemiology?",
    optionA: "The proportion of individuals in a population who die from a specific disease within a designated time period",
    optionB: "The proportion of persons diagnosed with a specific disease who die from that disease",
    optionC: "The total number of deaths from all causes divided by the mid-year population",
    optionD: "The ratio of deaths in children under 5 to maternal deaths",
    correctAnswer: "B",
    explanation: "The Case-Fatality Rate measures the virulence of a disease and is calculated as (Number of deaths caused by disease X / Total number of diagnosed cases of disease X) × 100."
  },
  {
    number: 25,
    question: "A Community Health Nurse conducting a home visit identifies uncollected open refuse heaps and stagnant pools around dwellings. What primary disease risks are associated with this environment?",
    optionA: "Rickets and scurvy",
    optionB: "Malaria, cholera, leptospirosis, and vector-borne helminthiases",
    optionC: "Hypertension and ischemic heart disease",
    optionD: "Diabetes mellitus type 1",
    correctAnswer: "B",
    explanation: "Stagnant water provides breeding sites for mosquitoes (malaria vectors), while uncollected refuse attracts rodents and flies, facilitating transmission of cholera, dysentery, and leptospirosis."
  },
  {
    number: 26,
    question: "Which method of family planning involves tracking basal body temperature, cervical mucus consistency, and calendar calculations?",
    optionA: "Barrier method",
    optionB: "Natural Family Planning (Fertility Awareness-Based Methods)",
    optionC: "Surgical sterilization",
    optionD: "Transdermal patch",
    correctAnswer: "B",
    explanation: "Fertility Awareness-Based methods identify the fertile window of the menstrual cycle using physiological signs such as thinner, stretchy cervical mucus (spinnbarkeit) and a slight post-ovulatory rise in basal temperature."
  },
  {
    number: 27,
    question: "What is the key objective of the Integrated Disease Surveillance and Response (IDSR) strategy implemented in community health centers?",
    optionA: "To replace laboratory diagnosis with clinical guesswork",
    optionB: "To detect, confirm, report, and rapidly respond to priority communicable disease outbreaks",
    optionC: "To audit financial expenditures of rural clinics",
    optionD: "To eliminate hospital-based nursing care",
    correctAnswer: "B",
    explanation: "IDSR integrates surveillance data to enable early warning, rapid confirmation, and effective public health containment of priority epidemic-prone diseases (e.g., cholera, meningitis, Lassa fever)."
  },
  {
    number: 28,
    question: "A community health nurse identifies a sudden spike in Neisseria meningitidis cases during the dry season in the meningitis belt. What immediate community measure is indicated?",
    optionA: "Distribute chlorine tablets to all households",
    optionB: "Report up the surveillance chain, initiate prompt case management with Ceftriaxone, and mobilize reactive mass vaccination",
    optionC: "Advise families to stay indoors with closed windows",
    optionD: "Perform mass blood film examinations for malaria",
    correctAnswer: "B",
    explanation: "Meningococcal meningitis epidemics require rapid reporting, isolation, early empiric antibiotic treatment (e.g., oily chloramphenicol or ceftriaxone), and emergency polysaccharide/conjugate mass vaccination."
  },
  {
    number: 29,
    question: "Which indicator reflects the number of maternal deaths per 100,000 live births from causes related to or aggravated by pregnancy or its management?",
    optionA: "Maternal Mortality Rate",
    optionB: "Maternal Mortality Ratio (MMR)",
    optionC: "Perinatal Mortality Rate",
    optionD: "Crude Birth Rate",
    correctAnswer: "B",
    explanation: "Maternal Mortality Ratio (MMR) is expressed as maternal deaths per 100,000 live births, representing the obstetric risk associated with each pregnancy."
  },
  {
    number: 30,
    question: "Which health promotion model emphasizes that an individual's perception of disease susceptibility, severity, benefits of action, and perceived barriers determines their health behavior?",
    optionA: "Transtheoretical Model",
    optionB: "Health Belief Model (Rosenstock)",
    optionC: "Social Cognitive Theory",
    optionD: "Diffusion of Innovations Theory",
    correctAnswer: "B",
    explanation: "The Health Belief Model posits that health-seeking behavior is governed by perceived susceptibility to illness, perceived seriousness, perceived benefits of preventive action, and barriers to acting."
  }
];

export const PSYCHIATRY_QUESTIONS: Question[] = [
  {
    number: 1,
    question: "According to Hildegard Peplau's interpersonal relations theory, what are the four sequential phases of the nurse-patient therapeutic relationship?",
    optionA: "Intake, Assessment, Therapy, Discharge",
    optionB: "Orientation, Identification, Exploitation (Working), and Resolution (Termination)",
    optionC: "Pre-interaction, Action, Maintenance, Relapse",
    optionD: "Socialization, Catharsis, Evaluation, Separation",
    correctAnswer: "B",
    explanation: "Peplau's interpersonal model delineates four distinct overlapping phases: 1. Orientation (defining the problem), 2. Identification (building trust), 3. Exploitation/Working (problem-solving), and 4. Resolution/Termination."
  },
  {
    number: 2,
    question: "A client diagnosed with schizophrenia says, 'The television news anchor is speaking directly to me and commanding my thoughts.' What psychopathological symptom does this represent?",
    optionA: "Auditory hallucination without delusion",
    optionB: "Delusion of reference",
    optionC: "Illusion",
    optionD: "Flight of ideas",
    correctAnswer: "B",
    explanation: "A delusion of reference is a false fixed belief that innocuous, external environmental events, broadcasts, or remarks have direct, special personal significance targeted at the individual."
  },
  {
    number: 3,
    question: "Which of the following is considered a 'Negative' symptom of schizophrenia rather than a positive symptom?",
    optionA: "Visual and auditory hallucinations",
    optionB: "Persecutory delusions",
    optionC: "Avolition (lack of motivation), alogia, and flat affect",
    optionD: "Grossly disorganized motor behavior",
    correctAnswer: "C",
    explanation: "Negative symptoms represent a deficit or loss of normal psychological functions, encompassing the 'A's: Affective flattening, Alogia (poverty of speech), Avolition, Anhedonia, and Asociality."
  },
  {
    number: 4,
    question: "A client experiencing auditory hallucinations states, 'I hear voices telling me I am evil.' What is the most therapeutic initial nursing response?",
    optionA: "'I hear the voices too, and they are wrong.'",
    optionB: "'I do not hear the voices, but I understand that they are very real and frightening to you.'",
    optionC: "'Stop listening to the voices; they are just your imagination.'",
    optionD: "'Why do you think the voices are saying you are evil?'",
    correctAnswer: "B",
    explanation: "The nurse must validate the client's emotional experience without reinforcing the hallucination, presenting reality calmly while expressing empathy ('I do not hear the voices, but I see that this is scary for you')."
  },
  {
    number: 5,
    question: "A patient taking Haloperidol (Haldol) develops severe acute sustained muscle spasms of the tongue, face, neck (torticollis), and upward eye deviation (oculogyric crisis). What is this condition?",
    optionA: "Akathisia",
    optionB: "Acute Dystonic Reaction",
    optionC: "Tardive Dyskinesia",
    optionD: "Pseudoparkinsonism",
    correctAnswer: "B",
    explanation: "Acute dystonia is a rapid-onset extrapyramidal side effect occurring within hours to days of initiating first-generation antipsychotics, treated immediately with parenteral anticholinergics like Benztropine or Diphenhydramine."
  },
  {
    number: 6,
    question: "Which potentially fatal adverse effect of antipsychotic therapy is characterized by severe muscular 'lead-pipe' rigidity, hyperthermia (>40°C), autonomic instability, and elevated creatine kinase (CK)?",
    optionA: "Serotonin syndrome",
    optionB: "Neuroleptic Malignant Syndrome (NMS)",
    optionC: "Agranulocytosis",
    optionD: "Malignant hyperthermia of anesthesia",
    correctAnswer: "B",
    explanation: "NMS is an idiosyncratic, life-threatening reaction to dopamine receptor antagonists presenting with hyperthermia, extreme muscle rigidity, labile blood pressure, tachypnea, and rhabdomyolysis."
  },
  {
    number: 7,
    question: "What mandatory laboratory monitoring is required for a client receiving Clozapine (Clozaril) due to the risk of life-threatening agranulocytosis?",
    optionA: "Serial serum creatinine and BUN",
    optionB: "Complete Blood Count with Absolute Neutrophil Count (ANC)",
    optionC: "Liver enzymes (ALT/AST)",
    optionD: "Serum amylase and lipase",
    correctAnswer: "B",
    explanation: "Clozapine carries a high risk of bone marrow suppression leading to severe neutropenia/agranulocytosis; regular ANC monitoring is legally mandated before dispensing."
  },
  {
    number: 8,
    question: "What is the normal therapeutic serum level range for Lithium Carbonate in the acute management of bipolar mania?",
    optionA: "0.1 to 0.4 mEq/L",
    optionB: "0.6 to 1.2 mEq/L",
    optionC: "1.5 to 2.5 mEq/L",
    optionD: "3.0 to 4.5 mEq/L",
    correctAnswer: "B",
    explanation: "The therapeutic serum lithium range is narrow: 0.6 to 1.2 mEq/L for maintenance (up to 1.0-1.2 mEq/L in acute mania). Levels >=1.5 mEq/L cause toxic signs (coarse tremors, ataxia, vomiting)."
  },
  {
    number: 9,
    question: "Which dietary precaution is essential for a client prescribed a Monoamine Oxidase Inhibitor (MAOI) such as Tranylcypromine or Phenelzine?",
    optionA: "High-sodium diet to prevent lithium retention",
    optionB: "Avoid tyramine-rich foods (aged cheeses, red wine, cured meats, yeast extracts) to prevent hypertensive crisis",
    optionC: "Strict low-potassium diet",
    optionD: "Avoid citrus fruits and dairy products",
    correctAnswer: "B",
    explanation: "MAOIs inhibit gastrointestinal breakdown of dietary tyramine. Accumulation of tyramine triggers massive norepinephrine release, causing life-threatening hypertensive crises and intracranial hemorrhage."
  },
  {
    number: 10,
    question: "A severely depressed client who has been withdrawn and hopeless suddenly becomes energetic, cheerful, and starts giving away prized personal possessions. What does this behavior most likely signal?",
    optionA: "Rapid recovery from clinical depression",
    optionB: "Increased risk of imminent suicide (the client has made a decision and finalized a plan)",
    optionC: "Transition into a bipolar manic episode",
    optionD: "Effective response to psychotherapy",
    correctAnswer: "B",
    explanation: "A sudden, unexplained improvement in mood and giving away valued belongings in a severely depressed client is a major warning sign that a suicide decision has been finalized, providing relief and energy to execute it."
  },
  {
    number: 11,
    question: "Which communication technique is non-therapeutic and should be avoided by psychiatric nurses?",
    optionA: "Reflecting feelings",
    optionB: "Giving false reassurance (e.g., 'Don't worry, everything is going to be just fine')",
    optionC: "Broad opening statements",
    optionD: "Using constructive silence",
    correctAnswer: "B",
    explanation: "Giving false reassurance devalues the client's genuine distress, blocks honest emotional expression, and damages the therapeutic alliance by promising outcomes the nurse cannot guarantee."
  },
  {
    number: 12,
    question: "In assessing a client for alcohol withdrawal, at what timeframe following the last alcoholic drink do severe symptoms such as Delirium Tremens (DTs) typically peak?",
    optionA: "Within 2 to 4 hours",
    optionB: "At 12 hours",
    optionC: "48 to 72 hours (up to 96 hours)",
    optionD: "2 weeks after cessation",
    correctAnswer: "C",
    explanation: "Delirium tremens (marked by autonomic hyperactivity, disorientation, coarse tremors, severe visual hallucinations, and status epilepticus) usually manifests 48 to 72 hours following cessation of heavy alcohol intake."
  },
  {
    number: 13,
    question: "What is the primary psychological defense mechanism in which a client involuntarily excludes distressing, anxiety-provoking thoughts from conscious awareness?",
    optionA: "Projection",
    optionB: "Repression",
    optionC: "Rationalization",
    optionD: "Sublimation",
    correctAnswer: "B",
    explanation: "Repression is the unconscious, automatic expulsion of intolerable, distressing impulses, traumatic memories, or thoughts from conscious awareness into the unconscious mind."
  },
  {
    number: 14,
    question: "A client with an obsessive-compulsive disorder (OCD) spends 45 minutes repeatedly checking and locking doors before leaving the room. What is the nurse's initial therapeutic plan?",
    optionA: "Physically block the client from touching the door to extinguish the ritual",
    optionB: "Initially allow time for the ritual while establishing a trusting relationship, then gradually set agreed limits",
    optionC: "Inform the client that door locking is irrational and ridicule the behavior",
    optionD: "Lock the door permanently from the outside",
    correctAnswer: "B",
    explanation: "Abruptly preventing rituals induces severe panic. The nurse allows sufficient time for rituals initially, while collaborating to gradually reduce ritualistic time and develop coping mechanisms."
  },
  {
    number: 15,
    question: "Which of the following symptoms distinguishes a Manic Episode from hypomania in Bipolar I Disorder?",
    optionA: "Marked functional impairment, psychotic features, or necessity of psychiatric hospitalization",
    optionB: "Mild increase in goal-directed energy",
    optionC: "Slight decrease in sleep requirement without social disturbance",
    optionD: "Brief euphoria lasting 1 to 2 days",
    correctAnswer: "A",
    explanation: "Mania causes marked impairment in social or occupational functioning, may include psychotic symptoms (delusions of grandeur), and frequently requires hospitalization to protect the client."
  },
  {
    number: 16,
    question: "A nurse caring for an acutely agitated, manic client in a psychiatric unit should implement which environmental intervention?",
    optionA: "Encourage active participation in loud competitive group games",
    optionB: "Provide a low-stimulus environment and offer high-calorie, portable finger foods",
    optionC: "Confine the client to bed rest in a dark room all day",
    optionD: "Engage the client in lengthy analytical debates regarding their behavior",
    correctAnswer: "B",
    explanation: "Clients with acute mania are hyperactive and easily distracted; reducing external stimuli diminishes agitation. Portable finger foods (sandwiches, fruit) ensure caloric intake on the move."
  },
  {
    number: 17,
    question: "What is the primary therapeutic goal of Cognitive Behavioral Therapy (CBT) developed by Aaron Beck?",
    optionA: "To uncover deeply buried childhood sexual conflicts through dream interpretation",
    optionB: "To identify and modify cognitive distortions and maladaptive automatic negative thoughts",
    optionC: "To condition physiological responses using biofeedback alone",
    optionD: "To chemically alter brain neurotransmitters without patient effort",
    correctAnswer: "B",
    explanation: "CBT focuses on recognizing automatic negative thought patterns and cognitive distortions (e.g., catastrophizing, all-or-nothing thinking) and restructuring them into realistic cognitions."
  },
  {
    number: 18,
    question: "Which neurotransmitter is primarily targeted by Selective Serotonin Reuptake Inhibitors (SSRIs) such as Sertraline and Escitalopram?",
    optionA: "Dopamine",
    optionB: "Serotonin (5-Hydroxytryptamine / 5-HT)",
    optionC: "Gamma-Aminobutyric Acid (GABA)",
    optionD: "Acetylcholine",
    correctAnswer: "B",
    explanation: "SSRIs selectively block the presynaptic reuptake transporter for serotonin, increasing the concentration and duration of active serotonin in the synaptic cleft."
  },
  {
    number: 19,
    question: "A client who survived a major motor vehicle accident 6 months ago reports recurrent intrusive nightmares, hypervigilance, emotional numbing, and avoidance of cars. What diagnosis is indicated?",
    optionA: "Acute stress disorder (ASD)",
    optionB: "Post-Traumatic Stress Disorder (PTSD)",
    optionC: "Generalized Anxiety Disorder (GAD)",
    optionD: "Agoraphobia",
    correctAnswer: "B",
    explanation: "PTSD is diagnosed when symptoms of intrusion (nightmares, flashbacks), avoidance, negative alterations in mood, and hyperarousal persist for more than 1 month after a traumatic event."
  },
  {
    number: 20,
    question: "Which syndrome resulting from concurrent use of multiple serotonergic agents presents with hyperreflexia, clonus, tremor, diarrhea, and fever?",
    optionA: "Serotonin Syndrome",
    optionB: "Neuroleptic Malignant Syndrome",
    optionC: "Tardive Dyskinesia",
    optionD: "Anticholinergic Toxicity",
    correctAnswer: "A",
    explanation: "Serotonin syndrome is characterized by neuromuscular hyperactivity (hyperreflexia, bilateral inducible clonus, tremor), autonomic instability, and altered mental status resulting from serotonergic excess."
  },
  {
    number: 21,
    question: "What is an irreversible extrapyramidal complication of long-term conventional antipsychotic therapy characterized by involuntary choreoathetoid movements of the tongue, face, and jaw?",
    optionA: "Pseudoparkinsonism",
    optionB: "Tardive Dyskinesia",
    optionC: "Akathisia",
    optionD: "Dystonia",
    correctAnswer: "B",
    explanation: "Tardive dyskinesia involves involuntary repetitive movements of the perioral muscles (lip smacking, tongue protrusion, grimacing) and trunk, often becoming permanent if antipsychotics are not adjusted."
  },
  {
    number: 22,
    question: "In the Mental Status Examination (MSE), what does the term 'Affect' describe?",
    optionA: "The client's internal, sustained emotional climate as described by the client",
    optionB: "The client's immediately observed external emotional responsiveness and expression",
    optionC: "The speed and organization of the client's spoken words",
    optionD: "The client's ability to interpret abstract proverbs",
    correctAnswer: "B",
    explanation: "Mood is the patient's subjective, pervasive emotional state over time; Affect is the objective, observable external manifestation of their emotional reaction during the clinical interview."
  },
  {
    number: 23,
    question: "A client diagnosed with anorexia nervosa is admitted to the medical ward. Which physiological finding is a hallmark clinical sign of severe chronic self-starvation?",
    optionA: "Hypertension and tachycardia",
    optionB: "Hypothermia, bradycardia, hypotension, and lanugo hair",
    optionC: "Hypercalcemia and flushed warm skin",
    optionD: "Elevated metabolic rate and tachypnea",
    correctAnswer: "B",
    explanation: "Starvation suppresses metabolic rate to conserve energy, producing sinus bradycardia (<50 bpm), hypothermia, orthostatic hypotension, amenorrhea, and fine downy body hair (lanugo)."
  },
  {
    number: 24,
    question: "What is the priority nursing diagnosis for a client during an acute panic attack?",
    optionA: "Chronic low self-esteem",
    optionB: "Severe anxiety related to perceived imminent doom or loss of control",
    optionC: "Deficient recreational diversional activity",
    optionD: "Impaired social interaction",
    correctAnswer: "B",
    explanation: "During a panic attack, intense sympathetic discharge causes feelings of dying or going crazy; reducing anxiety, remaining present with the client, and providing calm reassurance is the immediate priority."
  },
  {
    number: 25,
    question: "Which of the following describes 'Confabulation' commonly seen in alcohol-induced neurocognitive disorder (Korsakoff's syndrome)?",
    optionA: "Intentional lying to deceive law enforcement officers",
    optionB: "Unconscious fabrication of memories to fill in memory gaps, which the client believes to be true",
    optionC: "Inability to name familiar household objects",
    optionD: "Perception of spiders crawling under the skin",
    correctAnswer: "B",
    explanation: "Confabulation is the spontaneous production of false or fabricated memories about events, without conscious intent to deceive, compensating for severe retrograde and anterograde amnesia."
  },
  {
    number: 26,
    question: "Electroconvulsive Therapy (ECT) is considered a primary, lifesaving treatment modality in which psychiatric presentation?",
    optionA: "Mild adjustment disorder with anxious mood",
    optionB: "Severe, treatment-resistant major depression with psychotic features or acute suicide refusal to eat",
    optionC: "Antisocial personality disorder",
    optionD: "Simple specific phobia of heights",
    correctAnswer: "B",
    explanation: "ECT is highly efficacious for treatment-refractory depression, catatonia, and severe psychotic depression where rapid clinical response is necessary to prevent death from dehydration or suicide."
  },
  {
    number: 27,
    question: "Which class of medications is used for acute detoxification and management of alcohol withdrawal delirium to prevent seizures?",
    optionA: "Benzodiazepines (e.g., Diazepam, Chlordiazepoxide, Lorazepam)",
    optionB: "Typical antipsychotics (Haloperidol)",
    optionC: "Beta-2 adrenergic agonists",
    optionD: "Tricyclic antidepressants",
    correctAnswer: "A",
    explanation: "Benzodiazepines stimulate GABA-A receptors, providing cross-tolerance with ethanol that blunts neuronal hyperexcitability, controls autonomic symptoms, and prevents withdrawal convulsions."
  },
  {
    number: 28,
    question: "A client repeatedly attributes their own unacceptable feelings of anger towards the nurse by insisting that 'The nurse is furious with me and hates me.' This is an example of:",
    optionA: "Projection",
    optionB: "Displacement",
    optionC: "Reaction formation",
    optionD: "Intellectualization",
    correctAnswer: "A",
    explanation: "Projection is a defense mechanism wherein individuals reject unwanted personal thoughts, feelings, or impulses and falsely attribute them to another person."
  },
  {
    number: 29,
    question: "When establishing a therapeutic contract with a suicidal client, what is the most important nursing agreement?",
    optionA: "Agreement to remain in their room in complete silence",
    optionB: "Direct commitment that the client will seek out staff immediately if experiencing urges to self-harm",
    optionC: "Promise that the nurse will never reveal suicidal thoughts to the treating physician",
    optionD: "Agreement to surrender all rights to legal consultation",
    correctAnswer: "B",
    explanation: "A safety contract/plan explicitly secures the client's verbal agreement to alert healthcare personnel immediately upon experiencing self-harm impulses before taking any action."
  },
  {
    number: 30,
    question: "Which of the following is a classic symptom of Conversion Disorder (Functional Neurological Symptom Disorder)?",
    optionA: "Sudden neurological deficit (e.g., blindness, paralysis) following psychological conflict, accompanied by 'la belle indifférence'",
    optionB: "Voluntary feigning of symptoms for financial worker's compensation",
    optionC: "Exaggerated fear of having cancer supported by medical documentation",
    optionD: "Periodic binge eating followed by self-induced vomiting",
    correctAnswer: "A",
    explanation: "Conversion disorder features real loss of motor or sensory function that cannot be explained neurologically, often arising after severe emotional trauma, sometimes with paradoxical unconcern ('la belle indifférence')."
  }
];

export const PHARMACOLOGY_QUESTIONS: Question[] = [
  {
    number: 1,
    question: "Which pharmacokinetic parameter represents the time required for the plasma concentration of a drug to decrease by exactly 50%?",
    optionA: "Bioavailability",
    optionB: "Elimination Half-life (t1/2)",
    optionC: "Volume of Distribution (Vd)",
    optionD: "Clearance rate (Cl)",
    correctAnswer: "B",
    explanation: "The elimination half-life is the time required for the body to eliminate 50% of the active drug concentration from systemic circulation through metabolism and excretion."
  },
  {
    number: 2,
    question: "A physician orders 1,000 mL of Normal Saline to infuse over 8 hours. The IV administration set has a drop factor of 15 drops/mL. What is the correct drip rate in drops per minute (gtts/min)?",
    optionA: "21 gtts/min",
    optionB: "31 gtts/min",
    optionC: "42 gtts/min",
    optionD: "63 gtts/min",
    correctAnswer: "B",
    explanation: "Formula: (Total Volume in mL × Drop Factor) / (Time in hours × 60 minutes). Thus: (1,000 × 15) / (8 × 60) = 15,000 / 480 = 31.25 drops per minute (rounded to 31 gtts/min)."
  },
  {
    number: 3,
    question: "Before administering oral Digoxin (Lanoxin) to an adult client, what nursing assessment is strictly mandatory?",
    optionA: "Verify blood glucose level",
    optionB: "Measure the apical pulse for one full minute; hold the dose if heart rate is below 60 bpm",
    optionC: "Assess bowel sounds in all four abdominal quadrants",
    optionD: "Check deep tendon reflexes at the knee",
    correctAnswer: "B",
    explanation: "Digoxin has a negative chronotropic effect (slows SA and AV node conduction); the nurse must count the apical pulse for 60 seconds and withhold the drug if HR < 60 bpm to prevent severe bradycardia."
  },
  {
    number: 4,
    question: "Which electrolyte disturbance significantly enhances the myocardial sensitivity to Digoxin, precipitating fatal digoxin toxicity?",
    optionA: "Hypernatremia",
    optionB: "Hypokalemia",
    optionC: "Hypermagnesemia",
    optionD: "Hypophosphatemia",
    correctAnswer: "B",
    explanation: "Potassium competes with digoxin for binding on the myocardial Na+/K+ ATPase pump. Low extracellular potassium (hypokalemia) allows excessive digoxin binding, drastically potentiating toxicity."
  },
  {
    number: 5,
    question: "What is the primary mechanism of action of Angiotensin-Converting Enzyme (ACE) Inhibitors such as Enalapril and Lisinopril?",
    optionA: "Directly block beta-1 adrenergic receptors in cardiac tissue",
    optionB: "Block the conversion of Angiotensin I to Angiotensin II, a potent vasoconstrictor and aldosterone secretagogue",
    optionC: "Inhibit the influx of calcium into vascular smooth muscle",
    optionD: "Act directly as central alpha-2 agonists",
    correctAnswer: "B",
    explanation: "ACE inhibitors prevent the conversion of angiotensin I to angiotensin II, leading to systemic vasodilation, reduced systemic vascular resistance, and decreased aldosterone-mediated sodium retention."
  },
  {
    number: 6,
    question: "A client taking Captopril develops a persistent, dry, hacking cough. What is the physiological cause of this side effect?",
    optionA: "Accumulation of bradykinin and substance P in the pulmonary tree due to ACE inhibition",
    optionB: "Bronchial smooth muscle constriction via cholinergic stimulation",
    optionC: "Pulmonary fluid extravasation from acute left ventricular failure",
    optionD: "Allergic alveolitis caused by drug crystallization",
    correctAnswer: "A",
    explanation: "Angiotensin-converting enzyme is also responsible for degrading bradykinin. Inhibiting the enzyme causes bradykinin to accumulate in pulmonary airways, triggering a persistent non-productive cough."
  },
  {
    number: 7,
    question: "Which anticoagulant is routinely monitored by measuring the Activated Partial Thromboplastin Time (aPTT)?",
    optionA: "Warfarin sodium (Coumadin)",
    optionB: "Unfractionated Heparin",
    optionC: "Aspirin",
    optionD: "Clopidogrel (Plavix)",
    correctAnswer: "B",
    explanation: "Unfractionated heparin therapy is titrated against the activated partial thromboplastin time (aPTT), with a standard therapeutic target of 1.5 to 2.5 times the control baseline."
  },
  {
    number: 8,
    question: "What is the specific pharmacological antidote for unfractionated heparin overdose presenting with severe hemorrhage?",
    optionA: "Vitamin K (Phytonadione)",
    optionB: "Protamine Sulfate",
    optionC: "Aminocaproic acid",
    optionD: "Deferoxamine",
    correctAnswer: "B",
    explanation: "Protamine sulfate is a strongly basic protein that binds to and neutralizes strongly acidic heparin molecules, forming an inactive stable salt complex."
  },
  {
    number: 9,
    question: "Warfarin anticoagulation therapy is monitored primarily using which laboratory test?",
    optionA: "Bleeding time",
    optionB: "Prothrombin Time / International Normalized Ratio (PT/INR)",
    optionC: "Platelet count",
    optionD: "Thrombin time",
    correctAnswer: "B",
    explanation: "Warfarin impairs hepatic synthesis of vitamin K-dependent factors (II, VII, IX, X) and is monitored by the International Normalized Ratio (INR), typically maintained between 2.0 and 3.0."
  },
  {
    number: 10,
    question: "Which of the following is the specific antidote for Warfarin overdose with severe bleeding?",
    optionA: "Protamine sulfate",
    optionB: "Vitamin K1 (Phytonadione)",
    optionC: "Flumazenil",
    optionD: "Calcium chloride",
    correctAnswer: "B",
    explanation: "Vitamin K1 overcomes warfarin's competitive inhibition of vitamin K epoxide reductase, replenishing functional clotting factors II, VII, IX, and X."
  },
  {
    number: 11,
    question: "Which class of antimicrobial agents carries significant risks of both Ototoxicity (damage to the eighth cranial nerve) and Nephrotoxicity?",
    optionA: "Penicillins",
    optionB: "Aminoglycosides (e.g., Gentamicin, Amikacin)",
    optionC: "Macrolides (e.g., Azithromycin)",
    optionD: "Cephalosporins",
    correctAnswer: "B",
    explanation: "Aminoglycosides concentrate in renal proximal tubular cells and the endolymph/perilymph of the inner ear, posing high risks of acute tubular necrosis and permanent sensorineural hearing loss."
  },
  {
    number: 12,
    question: "A client receiving Isoniazid (INH) for tuberculosis is concurrently prescribed Pyridoxine (Vitamin B6). What is the primary reason for this co-prescription?",
    optionA: "To enhance the bactericidal action of isoniazid against Mycobacterium tuberculosis",
    optionB: "To prevent peripheral neuropathy caused by drug-induced vitamin B6 deficiency",
    optionC: "To prevent hepatotoxicity and jaundice",
    optionD: "To reduce red-orange discoloration of urine",
    correctAnswer: "B",
    explanation: "Isoniazid competes with and accelerates excretion of pyridoxine (vitamin B6), leading to sensory peripheral neuropathy; supplemental pyridoxine prevents this neurotoxic effect."
  },
  {
    number: 13,
    question: "What harmless but alarming adverse effect should a nurse educate a client about when initiating Rifampicin therapy?",
    optionA: "Loss of taste and smell",
    optionB: "Red-orange discoloration of urine, sweat, saliva, and tears",
    optionC: "Severe photosensitivity and hair loss",
    optionD: "Blue-grey discoloration of fingernails",
    correctAnswer: "B",
    explanation: "Rifampicin and its metabolites impart a harmless bright red-orange coloration to bodily secretions (urine, sweat, tears, sputum), which may stain clothing and soft contact lenses."
  },
  {
    number: 14,
    question: "Which first-line antitubercular medication requires baseline and periodic testing of visual acuity and red-green color discrimination?",
    optionA: "Isoniazid",
    optionB: "Rifampicin",
    optionC: "Pyrazinamide",
    optionD: "Ethambutol",
    correctAnswer: "D",
    explanation: "Ethambutol can cause retrobulbar optic neuritis presenting with decreased visual acuity and loss of red-green color discrimination; visual testing is mandatory."
  },
  {
    number: 15,
    question: "What is the toxic mechanism of high-dose Paracetamol (Acetaminophen) overdose, and which antidote must be administered within 8 to 10 hours?",
    optionA: "Renal medullary necrosis; treated with Mannitol",
    optionB: "Hepatotoxicity due to accumulation of the toxic metabolite NAPQI; treated with N-Acetylcysteine (NAC)",
    optionC: "Cardiac arrest; treated with Digibind",
    optionD: "Metabolic alkalosis; treated with Sodium bicarbonate",
    correctAnswer: "B",
    explanation: "Excess paracetamol depletes hepatic glutathione, causing accumulation of the toxic intermediate NAPQI, which causes acute hepatic necrosis. N-acetylcysteine replenishes glutathione stores."
  },
  {
    number: 16,
    question: "Why are Tetracycline antibiotics strictly contraindicated in pregnant women and children under 8 years of age?",
    optionA: "They cause irreversible premature fusion of epiphyses",
    optionB: "They bind to calcium in developing teeth and bones, causing permanent brown-yellow discoloration and enamel hypoplasia",
    optionC: "They cause acute cardiac valvulopathy",
    optionD: "They cause sudden sensorineural deafness",
    correctAnswer: "B",
    explanation: "Tetracyclines chelate divalent calcium ions and are incorporated into calcifying teeth and bone matrices, causing permanent yellow-brown dental staining and temporary suppression of bone growth."
  },
  {
    number: 17,
    question: "Which non-selective beta-blocker is contraindicated in clients with bronchial asthma due to the risk of life-threatening bronchospasm?",
    optionA: "Atenolol",
    optionB: "Metoprolol",
    optionC: "Propranolol",
    optionD: "Esmolol",
    correctAnswer: "C",
    explanation: "Propranolol is a non-selective beta-adrenergic blocker that blocks both beta-1 (cardiac) and beta-2 (bronchial) receptors, potentially triggering severe bronchoconstriction in asthmatics."
  },
  {
    number: 18,
    question: "Which loop diuretic inhibits the Na+/K+/2Cl- cotransporter in the thick ascending limb of the loop of Henle and can cause significant hypokalemia?",
    optionA: "Spironolactone",
    optionB: "Furosemide (Lasix)",
    optionC: "Hydrochlorothiazide",
    optionD: "Amiloride",
    correctAnswer: "B",
    explanation: "Furosemide is a potent loop diuretic that blocks the Na+/K+/2Cl- cotransporter in the thick ascending loop of Henle, producing marked natriuresis and potassiuresis resulting in hypokalemia."
  },
  {
    number: 19,
    question: "A client with acute angina pectoris is prescribed sublingual Nitroglycerin tablets. What instruction regarding proper administration should the nurse provide?",
    optionA: "Swallow the tablet immediately with a full glass of warm water",
    optionB: "Dissolve one tablet under the tongue at the onset of chest pain; take up to 3 tablets 5 minutes apart if pain persists, and call emergency services if unrelieved after first dose",
    optionC: "Chew two tablets thoroughly every hour throughout the day",
    optionD: "Place the tablet between the upper lip and gum right before going to sleep",
    correctAnswer: "B",
    explanation: "Sublingual nitroglycerin must dissolve under the tongue to bypass first-pass hepatic metabolism. If chest pain is not relieved after 1 dose within 5 minutes, emergency help should be summoned while taking up to 3 doses maximum."
  },
  {
    number: 20,
    question: "Which fluoroquinolone antibiotic is associated with an increased risk of tendinitis and Achilles tendon rupture, especially in elderly clients?",
    optionA: "Amoxicillin",
    optionB: "Ciprofloxacin",
    optionC: "Doxycycline",
    optionD: "Erythromycin",
    correctAnswer: "B",
    explanation: "Fluoroquinolones (such as ciprofloxacin and levofloxacin) carry an FDA boxed warning for tendonitis and tendon rupture (most commonly affecting the Achilles tendon), especially in patients >60 or those on corticosteroids."
  },
  {
    number: 21,
    question: "What is the onset of action for rapid-acting insulin analogues (such as Insulin Lispro or Insulin Aspart)?",
    optionA: "10 to 15 minutes",
    optionB: "30 to 60 minutes",
    optionC: "2 to 4 hours",
    optionD: "6 to 8 hours",
    correctAnswer: "A",
    explanation: "Rapid-acting insulins (Lispro, Aspart, Glulisine) have a very rapid onset of 10 to 15 minutes, peak in 30-90 minutes, and duration of 3-5 hours; they must be given right before meals."
  },
  {
    number: 22,
    question: "Which of the following insulins is intermediate-acting and has a cloudy appearance that requires gentle rolling (not shaking) before administration?",
    optionA: "Regular insulin",
    optionB: "Neutral Protamine Hagedorn (NPH) insulin",
    optionC: "Insulin Glargine (Lantus)",
    optionD: "Insulin Detemir",
    correctAnswer: "B",
    explanation: "NPH (Neutral Protamine Hagedorn) is an intermediate-acting insulin suspension that appears cloudy and must be mixed by gently rolling the vial between palms to resuspend particles without creating air bubbles."
  },
  {
    number: 23,
    question: "Which class of oral antidiabetic agents (e.g., Metformin) reduces hepatic glucose production and improves insulin sensitivity without causing hypoglycemia when used as monotherapy?",
    optionA: "Sulfonylureas",
    optionB: "Biguanides",
    optionC: "Meglitinides",
    optionD: "Thiazolidinediones",
    correctAnswer: "B",
    explanation: "Metformin (a biguanide) inhibits hepatic gluconeogenesis and enhances peripheral tissue sensitivity to insulin. Because it does not stimulate pancreatic beta-cell insulin secretion, it does not cause hypoglycemia alone."
  },
  {
    number: 24,
    question: "What is a life-threatening, though rare, toxic complication of Metformin therapy, especially in clients with renal impairment or severe hypoxemia?",
    optionA: "Diabetic ketoacidosis",
    optionB: "Lactic Acidosis",
    optionC: "Aplastic anemia",
    optionD: "Pancreatitis",
    correctAnswer: "B",
    explanation: "Metformin inhibits mitochondrial complex I, which can drive anaerobic metabolism and lactic acid accumulation. Impaired renal clearance markedly raises blood levels, precipitating severe lactic acidosis."
  },
  {
    number: 25,
    question: "Which benzodiazepine antagonist is administered intravenously to reverse benzodiazepine-induced conscious sedation or toxic overdose?",
    optionA: "Naloxone",
    optionB: "Flumazenil (Romazicon)",
    optionC: "Neostigmine",
    optionD: "Pralidoxime",
    correctAnswer: "B",
    explanation: "Flumazenil is a selective competitive antagonist at the central GABA-A benzodiazepine receptor site, reversing sedative, anxiolytic, and respiratory depressant effects of benzodiazepines."
  },
  {
    number: 26,
    question: "What is the primary pharmacological action of Omeprazole (Prilosec) in treating peptic ulcer disease?",
    optionA: "Antagonizes histamine H2 receptors on parietal cells",
    optionB: "Irreversibly inhibits the H+/K+ ATPase enzyme system (proton pump) of gastric parietal cells",
    optionC: "Directly neutralizes hydrochloric acid in the stomach lumen",
    optionD: "Forms a physical paste barrier over the ulcer crater",
    correctAnswer: "B",
    explanation: "Omeprazole is a Proton Pump Inhibitor (PPI) that binds irreversibly to the H+/K+ ATPase pump, blocking the final common pathway of gastric hydrochloric acid secretion."
  },
  {
    number: 27,
    question: "A client receiving IV Vancomycin too rapidly develops profound flushing, erythema, pruritus, and hypotension of the face, neck, and upper torso. What is this reaction called?",
    optionA: "Stevens-Johnson syndrome",
    optionB: "Vancomycin Infusion Reaction ('Red Man' syndrome)",
    optionC: "Type 1 IgE-mediated anaphylaxis",
    optionD: "Toxic epidermal necrolysis",
    correctAnswer: "B",
    explanation: "Rapid intravenous infusion of vancomycin causes direct non-immunologic degranulation of mast cells and basophils, releasing histamine resulting in erythematous flushing of the upper body ('Red Man syndrome')."
  },
  {
    number: 28,
    question: "Which potassium-sparing diuretic is an aldosterone antagonist used in managing congestive heart failure and hepatic cirrhosis with ascites?",
    optionA: "Bumetanide",
    optionB: "Spironolactone (Aldactone)",
    optionC: "Acetazolamide",
    optionD: "Metolazone",
    correctAnswer: "B",
    explanation: "Spironolactone competitively blocks aldosterone receptors in the late distal tubule and collecting ducts, causing mild sodium excretion while conserving potassium and hydrogen ions."
  },
  {
    number: 29,
    question: "What serious adverse effect is associated with Statin therapy (e.g., Atorvastatin, Simvastatin) that requires prompt measurement of Serum Creatine Kinase (CK)?",
    optionA: "Pulmonary fibrosis",
    optionB: "Myopathy and Rhabdomyolysis",
    optionC: "Peripheral neuropathy",
    optionD: "Gouty arthritis",
    correctAnswer: "B",
    explanation: "HMG-CoA reductase inhibitors (statins) can cause skeletal muscle injury ranging from myalgia to life-threatening rhabdomyolysis with massive myoglobinuria and acute renal failure."
  },
  {
    number: 30,
    question: "Which emergency medication is the first-line drug of choice for anaphylactic shock administered via the intramuscular route?",
    optionA: "Hydrocortisone",
    optionB: "Epinephrine (Adrenaline) 1:1,000 (0.3 to 0.5 mg IM into anterolateral thigh)",
    optionC: "Diphenhydramine (Benadryl)",
    optionD: "Salbutamol nebulization",
    correctAnswer: "B",
    explanation: "Intramuscular epinephrine (1:1,000 solution, 0.3-0.5 mg) is the lifesaving first-line drug for anaphylaxis, activating alpha-1 receptors (vasoconstriction), beta-1 (cardiac output), and beta-2 (bronchodilation and mast cell stabilization)."
  }
];

export const ANATOMY_QUESTIONS: Question[] = [
  {
    number: 1,
    question: "Which organelle within eukaryotic human cells is responsible for cellular aerobic respiration and ATP generation ('the powerhouse of the cell')?",
    optionA: "Ribosome",
    optionB: "Mitochondrion",
    optionC: "Golgi apparatus",
    optionD: "Endoplasmic reticulum",
    correctAnswer: "B",
    explanation: "Mitochondria contain the enzymes for the Krebs cycle and oxidative phosphorylation on their inner folded cristae, generating the majority of cellular adenosine triphosphate (ATP)."
  },
  {
    number: 2,
    question: "What is the natural intrinsic pacemaker of the human heart, responsible for initiating normal sinus rhythm at 60 to 100 impulses per minute?",
    optionA: "Atrioventricular (AV) node",
    optionB: "Sinoatrial (SA) node",
    optionC: "Bundle of His",
    optionD: "Purkinje fibers",
    correctAnswer: "B",
    explanation: "The Sinoatrial (SA) node, located in the superior posterolateral wall of the right atrium near the entrance of the superior vena cava, has the fastest spontaneous phase 4 depolarization rate (60-100 bpm)."
  },
  {
    number: 3,
    question: "Which heart valve prevents backflow of blood from the left ventricle into the left atrium during ventricular systole?",
    optionA: "Tricuspid valve",
    optionB: "Bicuspid (Mitral) valve",
    optionC: "Aortic semilunar valve",
    optionD: "Pulmonary semilunar valve",
    correctAnswer: "B",
    explanation: "The Mitral (bicuspid) atrioventricular valve separates the left atrium from the left ventricle, closing firmly during ventricular systole to prevent regurgitation into the pulmonary circulation."
  },
  {
    number: 4,
    question: "What is the primary respiratory muscle whose contraction flattens its dome shape, increasing vertical thoracic volume during quiet inspiration?",
    optionA: "Internal intercostal muscles",
    optionB: "Diaphragm (innervated by the phrenic nerve C3-C5)",
    optionC: "Sternocleidomastoid",
    optionD: "Pectoralis minor",
    correctAnswer: "B",
    explanation: "The diaphragm is the principal muscle of respiration; its contraction pulls the central tendon downward, expanding thoracic cavity volume and creating negative intrathoracic pressure that draws air into the lungs."
  },
  {
    number: 5,
    question: "Which cells in the alveolar walls of the lungs are responsible for secreting pulmonary surfactant that reduces surface tension?",
    optionA: "Type I alveolar pneumocytes",
    optionB: "Type II alveolar pneumocytes (granular pneumocytes)",
    optionC: "Alveolar macrophages (dust cells)",
    optionD: "Goblet cells",
    correctAnswer: "B",
    explanation: "Type II pneumocytes are cuboidal epithelial cells that synthesize and secrete dipalmitoylphosphatidylcholine (pulmonary surfactant), preventing end-expiratory alveolar collapse and atelectasis."
  },
  {
    number: 6,
    question: "What is the functional microscopic filtration and excretory unit of the human kidney?",
    optionA: "Renal calyx",
    optionB: "Nephron",
    optionC: "Loop of Henle alone",
    optionD: "Glomerulus alone",
    correctAnswer: "B",
    explanation: "The nephron is the functional microscopic unit of the kidney (approximately 1 to 1.2 million per kidney), consisting of a renal corpuscle (glomerulus and Bowman's capsule) and a tubular system."
  },
  {
    number: 7,
    question: "In which segment of the renal tubule does the vast majority (approximately 65% to 70%) of water, sodium, and glucose reabsorption occur?",
    optionA: "Proximal Convoluted Tubule (PCT)",
    optionB: "Descending limb of the Loop of Henle",
    optionC: "Distal Convoluted Tubule (DCT)",
    optionD: "Collecting duct",
    correctAnswer: "A",
    explanation: "The Proximal Convoluted Tubule (PCT) has an extensive apical brush border of microvilli that reabsorbs nearly 100% of filtered glucose and amino acids and approximately 65-70% of filtered water and sodium."
  },
  {
    number: 8,
    question: "Which endocrine gland is located in the sella turcica of the sphenoid bone and is often referred to as the 'master gland' of the endocrine system?",
    optionA: "Thyroid gland",
    optionB: "Pituitary gland (Hypophysis)",
    optionC: "Adrenal gland",
    optionD: "Pineal gland",
    correctAnswer: "B",
    explanation: "The pituitary gland (hypophysis) rests in the hypophyseal fossa of the sella turcica, regulating growth, reproduction, and metabolic homeostatic functions through anterior and posterior trophic hormones."
  },
  {
    number: 9,
    question: "Which two hormones are synthesized in the hypothalamus and stored in and released from the Posterior Pituitary (Neurohypophysis)?",
    optionA: "Growth hormone and Prolactin",
    optionB: "Antidiuretic Hormone (ADH / Vasopressin) and Oxytocin",
    optionC: "Thyroid-stimulating hormone and Adrenocorticotropic hormone",
    optionD: "Follicle-stimulating hormone and Luteinizing hormone",
    correctAnswer: "B",
    explanation: "ADH (synthesized primarily in supraoptic nuclei) and Oxytocin (paraventricular nuclei) travel down the hypothalamo-hypophyseal tract to be stored and secreted by the posterior pituitary gland."
  },
  {
    number: 10,
    question: "Which hormone is secreted by the Parafollicular cells (C-cells) of the thyroid gland to lower elevated serum calcium levels?",
    optionA: "Parathyroid hormone (PTH)",
    optionB: "Calcitonin",
    optionC: "Thyroxine (T4)",
    optionD: "Aldosterone",
    correctAnswer: "B",
    explanation: "Calcitonin is released by thyroid C-cells in response to hypercalcemia, inhibiting osteoclast activity in bone and increasing renal calcium excretion to lower blood calcium levels."
  },
  {
    number: 11,
    question: "Which lobe of the cerebral cortex houses the Primary Motor Cortex (precentral gyrus) and Broca's motor speech area?",
    optionA: "Parietal lobe",
    optionB: "Frontal lobe",
    optionC: "Temporal lobe",
    optionD: "Occipital lobe",
    correctAnswer: "B",
    explanation: "The Frontal lobe contains the primary motor cortex (Brodmann area 4) for voluntary motor output, Broca's area (Brodmann 44/45) for expressive speech production, and executive cognitive centers."
  },
  {
    number: 12,
    question: "Which cranial nerve provides extensive parasympathetic autonomic innervation to the heart, lungs, stomach, and digestive tract?",
    optionA: "Cranial Nerve V (Trigeminal)",
    optionB: "Cranial Nerve VII (Facial)",
    optionC: "Cranial Nerve X (Vagus)",
    optionD: "Cranial Nerve XII (Hypoglossal)",
    correctAnswer: "C",
    explanation: "The Vagus nerve (CN X) is the principal parasympathetic nerve of the body, traveling from the medulla oblongata to innervate thoracic and abdominal viscera down to the splenic flexure of the colon."
  },
  {
    number: 13,
    question: "Where is Cerebrospinal Fluid (CSF) primarily produced within the human ventricular system?",
    optionA: "Arachnoid granulations",
    optionB: "Choroid plexuses of the lateral, third, and fourth ventricles",
    optionC: "Corpus callosum",
    optionD: "Substantia nigra",
    correctAnswer: "B",
    explanation: "CSF is produced at a rate of roughly 500 mL/day by the specialized vascular choroid plexuses located within the lateral, third, and fourth cerebral ventricles."
  },
  {
    number: 14,
    question: "What anatomical structure prevents food and liquids from entering the larynx and trachea during the act of deglutition (swallowing)?",
    optionA: "Thyroid cartilage",
    optionB: "Epiglottis",
    optionC: "Uvula",
    optionD: "Cricoid cartilage",
    correctAnswer: "B",
    explanation: "During swallowing, the larynx elevates and the leaf-shaped fibrocartilaginous epiglottis folds downward over the laryngeal inlet, deflecting the food bolus into the esophagus."
  },
  {
    number: 15,
    question: "In the hepatic portal circulation, which major vessel collects nutrient-rich, deoxygenated venous blood from the stomach, intestines, and spleen to deliver to the liver?",
    optionA: "Hepatic vein",
    optionB: "Hepatic portal vein",
    optionC: "Inferior vena cava",
    optionD: "Celiac trunk",
    correctAnswer: "B",
    explanation: "The hepatic portal vein (formed by the confluence of the superior mesenteric and splenic veins) carries venous blood laden with absorbed nutrients directly to the liver sinusoids for processing."
  },
  {
    number: 16,
    question: "Which cells in the gastric mucosa are responsible for secreting Hydrochloric Acid (HCl) and Intrinsic Factor necessary for Vitamin B12 absorption?",
    optionA: "Chief cells (peptic cells)",
    optionB: "Parietal cells (oxyntic cells)",
    optionC: "Enterochromaffin-like cells",
    optionD: "G cells",
    correctAnswer: "B",
    explanation: "Parietal (oxyntic) cells in the gastric glands of the fundus and body secrete hydrochloric acid (which activates pepsinogen) and intrinsic factor (which binds vitamin B12 for ileal absorption)."
  },
  {
    number: 17,
    question: "What is the longest and strongest bone in the human skeleton?",
    optionA: "Tibia",
    optionB: "Femur",
    optionC: "Humerus",
    optionD: "Fibula",
    correctAnswer: "B",
    explanation: "The femur (thigh bone) is the longest, heaviest, and strongest tubular bone in the human body, supporting the weight of the torso and transmitting forces during locomotion."
  },
  {
    number: 18,
    question: "Which type of synovial joint allows multiaxial movement, including flexion, extension, abduction, adduction, circumduction, and rotation (e.g., shoulder and hip joints)?",
    optionA: "Hinge joint",
    optionB: "Ball-and-socket (spheroidal) joint",
    optionC: "Pivot joint",
    optionD: "Saddle joint",
    correctAnswer: "B",
    explanation: "Ball-and-socket (spheroidal) joints, such as the glenohumeral and acetabulofemoral joints, have a rounded head fitting into a cuplike cavity, permitting the widest multiaxial range of motion."
  },
  {
    number: 19,
    question: "What is the primary function of Erythropoietin (EPO), and which organ is its primary site of physiological production in adults?",
    optionA: "Stimulates white blood cell synthesis; produced by the spleen",
    optionB: "Stimulates red blood cell production (erythropoiesis) in bone marrow; produced primarily by the kidneys",
    optionC: "Stimulates platelet aggregation; produced by the lungs",
    optionD: "Regulates calcium homeostasis; produced by the parathyroid glands",
    correctAnswer: "B",
    explanation: "Erythropoietin is a glycoprotein hormone produced by interstitial fibroblasts in the renal cortex in response to cellular hypoxia; it acts on erythroid progenitor cells in bone marrow to stimulate RBC production."
  },
  {
    number: 20,
    question: "Which of the following blood vessels carries oxygen-rich blood rather than deoxygenated blood?",
    optionA: "Superior vena cava",
    optionB: "Pulmonary veins (four veins entering the left atrium)",
    optionC: "Pulmonary trunk and pulmonary arteries",
    optionD: "Coronary sinus",
    correctAnswer: "B",
    explanation: "Unlike systemic veins, the four pulmonary veins carry freshly oxygenated blood from the pulmonary capillary beds of the lungs directly into the left atrium of the heart."
  },
  {
    number: 21,
    question: "In the skin, which epidermal layer contains actively dividing stem cells that continuously produce new keratinocytes (mitotic layer)?",
    optionA: "Stratum corneum",
    optionB: "Stratum lucidum",
    optionC: "Stratum spinosum",
    optionD: "Stratum basale (Stratum germinativum)",
    correctAnswer: "D",
    explanation: "The Stratum basale is the deepest, single-cell layer of the epidermis, resting on the basement membrane, where rapid mitotic division generates keratinocytes that migrate toward the surface."
  },
  {
    number: 22,
    question: "Which blood component is primarily responsible for maintaining intravascular Colloid Osmotic (oncotic) Pressure to prevent peripheral edema?",
    optionA: "Serum globulins",
    optionB: "Serum Albumin",
    optionC: "Fibrinogen",
    optionD: "Blood urea nitrogen",
    correctAnswer: "B",
    explanation: "Serum albumin contributes approximately 75% to 80% of total plasma oncotic pressure due to its high concentration and molecular size, retaining water inside the vascular compartment."
  },
  {
    number: 23,
    question: "What is the primary sensory relay station of the brain, through which all sensory pathways (except olfaction) pass before reaching the cerebral cortex?",
    optionA: "Hypothalamus",
    optionB: "Thalamus",
    optionC: "Amygdala",
    optionD: "Hippocampus",
    correctAnswer: "B",
    explanation: "The thalamus consists of paired ovoid gray matter nuclear complexes that process, filter, and relay all somatic and special sensory impulses (except smell) to specific cerebral cortical areas."
  },
  {
    number: 24,
    question: "Which hormone produced by the adrenal cortex is the primary mineralocorticoid responsible for renal sodium reabsorption and potassium excretion?",
    optionA: "Cortisol",
    optionB: "Aldosterone",
    optionC: "Dehydroepiandrosterone (DHEA)",
    optionD: "Epinephrine",
    correctAnswer: "B",
    explanation: "Aldosterone is synthesized in the zona glomerulosa of the adrenal cortex; it stimulates epithelial sodium channels (ENaC) and Na+/K+ pumps in renal collecting ducts to retain Na+ and excrete K+."
  },
  {
    number: 25,
    question: "What anatomical duct conducts pancreatic digestive enzymes together with bile from the common bile duct into the descending duodenum?",
    optionA: "Cystic duct",
    optionB: "Hepatopancreatic ampulla (Ampulla of Vater / guarded by Sphincter of Oddi)",
    optionC: "Thoracic duct",
    optionD: "Stensen's duct",
    correctAnswer: "B",
    explanation: "The main pancreatic duct joins the common bile duct to form the dilated hepatopancreatic ampulla (ampulla of Vater), which empties into the duodenum at the major duodenal papilla."
  },
  {
    number: 26,
    question: "Which cranial nerve provides motor innervation to the muscles of facial expression and sensory taste perception to the anterior two-thirds of the tongue?",
    optionA: "Cranial Nerve V (Trigeminal)",
    optionB: "Cranial Nerve VII (Facial)",
    optionC: "Cranial Nerve IX (Glossopharyngeal)",
    optionD: "Cranial Nerve XII (Hypoglossal)",
    correctAnswer: "B",
    explanation: "The Facial nerve (CN VII) innervates all mimetic muscles of facial expression, stimulates lacrimal and submandibular/sublingual glands, and mediates taste from the anterior 2/3 of the tongue."
  },
  {
    number: 27,
    question: "Which part of the brainstem contains the vital cardiovascular and respiratory rhythmicity reflex centers that regulate heart rate and breathing?",
    optionA: "Midbrain",
    optionB: "Pons",
    optionC: "Medulla Oblongata",
    optionD: "Cerebellum",
    correctAnswer: "C",
    explanation: "The Medulla Oblongata contains the vital autonomic centers: the cardiac center (adjusts rate/force of contraction), vasomotor center (vascular tone), and the medullary respiratory rhythmicity group."
  },
  {
    number: 28,
    question: "What is the normal Glomerular Filtration Rate (GFR) in a healthy young adult?",
    optionA: "30 to 45 mL/min/1.73 m²",
    optionB: "60 to 75 mL/min/1.73 m²",
    optionC: "90 to 125 mL/min/1.73 m² (average 120 mL/min or ~180 L/day)",
    optionD: "200 to 250 mL/min/1.73 m²",
    correctAnswer: "C",
    explanation: "Normal Glomerular Filtration Rate (GFR) is roughly 90 to 125 mL/min/1.73 m² (averaging 120 mL/min, generating approximately 180 liters of filtrate per day, of which 99% is reabsorbed)."
  },
  {
    number: 29,
    question: "Which immune cells differentiate into plasma cells that synthesize and secrete antibodies (humoral immunity)?",
    optionA: "T-helper (CD4+) lymphocytes",
    optionB: "B-lymphocytes",
    optionC: "Natural Killer (NK) cells",
    optionD: "Neutrophils",
    correctAnswer: "B",
    explanation: "B-lymphocytes (B cells), upon antigenic stimulation and T-cell assistance, proliferate and terminally differentiate into antibody-secreting plasma cells responsible for humoral immune defense."
  },
  {
    number: 30,
    question: "Which component of the autonomic nervous system is responsible for the 'Fight or Flight' response, causing pupillary dilation, tachycardia, bronchodilation, and inhibition of gastrointestinal motility?",
    optionA: "Parasympathetic nervous system (Craniosacral outflow)",
    optionB: "Sympathetic nervous system (Thoracolumbar outflow)",
    optionC: "Enteric nervous system alone",
    optionD: "Somatic sensory nervous system",
    correctAnswer: "B",
    explanation: "The sympathetic division (thoracolumbar outflow from T1 to L2) mediates the 'fight-or-flight' stress reaction through norepinephrine and epinephrine, prioritizing muscle and cardiopulmonary perfusion."
  }
];

function classifyNursingQuestion(item: { question: string; explanation?: string; optionA?: string; optionB?: string; optionC?: string; optionD?: string }): string {
  const text = (
    item.question + ' ' +
    (item.explanation || '') + ' ' +
    (item.optionA || '') + ' ' +
    (item.optionB || '') + ' ' +
    (item.optionC || '') + ' ' +
    (item.optionD || '')
  ).toLowerCase();

  // 1. Research and Statistics
  if (/\b(research|hypothesis|sampling|variable|methodology|biostatistics|qualitative|quantitative|validity|reliability|sample size|data collection|null hypothesis|literature review|pilot study|variance|standard deviation|cohort study|case-control|cross-sectional|p-value|chi-square|target population|quasi-experimental|delphi technique)\b/.test(text)) {
    return 'course-research';
  }

  // 2. Principles of Leadership and Management
  if (/\b(leadership|management|supervision|delegat|autocratic|democratic|laissez-faire|staffing|budget|chain of command|organizational|nurse manager|conflict resolution|performance appraisal|peer review|quality assurance|audit|roster|shift report|administrative|unit manager|span of control|transformational leadership)\b/.test(text)) {
    return 'course-management';
  }

  // 3. Nursing Ethics and Jurisprudence
  if (/\b(malpractice|negligence|tort|assault|battery|informed consent|autonomy|beneficence|non-maleficence|justice|veracity|fidelity|code of ethics|confidentiality|defamation|slander|libel|nmcn act|decree|licensure|ethical dilemma|false imprisonment|liability|advocacy|patients bill of rights|professional misconduct)\b/.test(text)) {
    return 'course-ethics';
  }

  // 4. Nutrition
  if (/\b(nutrition|diet|calorie|vitamin|protein|carbohydrate|scurvy|rickets|pellagra|beriberi|malnutrition|iron deficiency|zinc|dietary|tube feeding|enteral|parenteral nutrition|tpn|food hygiene|macronutrient|micronutrient|metabolism|lipid profile)\b/.test(text)) {
    return 'course-nutrition';
  }

  // 5. Microbiology
  if (/\b(microbiol|bacteria|virus|fungi|parasite|infection control|steriliz|autoclav|antiseptic|disinfect|asepsis|nosocomial|ppe|pathogen|antibody|antigen|immunity|immunoglobulin|culture and sensitivity|gram-positive|gram-negative|spore|cross-infection|hand hygiene|chain of infection)\b/.test(text)) {
    return 'course-microbiology';
  }

  // 6. Mental Health
  if (/\b(psychiat|schizo|depress|bipolar|hallucin|delusion|anxiety|phobia|obsessive|compulsive|dementia|alzheimer|suicid|electroconvulsive|ect|lithium|haloperidol|chlorpromazine|antipsychotic|antidepressant|defense mechanism|therapeutic communication|mental health|ptsd|mania|delirium|conversion disorder|somatoform|restraint)\b/.test(text)) {
    return 'course-psychiatry';
  }

  // 7. Reproductive Health (Maternal & Child Health, Midwifery & Paediatrics)
  if (/\b(pregnan|labour|labor|delivery|fetus|fetal|placenta|postpartum|puerperium|gravida|para|antenatal|prenatal|amniotic|newborn|infant|pediatric|paediatric|apgar|eclampsia|preeclampsia|lochia|breastfeeding|lactation|gestation|trimester|meconium|fontanelle|episiotomy|hyperemesis|abruptio|previa|milestone|developmental milestone|cephalocaudal|colostrum|immunization schedule|measles|polio|bcg|pentavalent|phototherapy|neonatal jaundice|wilms|tetralogy|hirschsprung|hydrocephalus|spina bifida)\b/.test(text)) {
    return 'course-reproductive';
  }

  // 8. Pharmacology
  if (/\b(pharmac|drug|dosage|dose|adverse effect|side effect|contraindication|agonist|antagonist|antibiotic|analgesic|antihypertensive|diuretic|digoxin|morphine|atropine|epinephrine|insulin|heparin|warfarin|penicillin|half-life|therapeutic index|toxicity|overdose|antidote|pharmacokinetics|pharmacodynamics|gentamicin|furosemide|beta blocker|ace inhibitor|iv fluid|infusion rate)\b/.test(text)) {
    return 'course-pharmacology';
  }

  // 9. Community Health Nursing
  if (/\b(community|public health|primary health care|phc|water supply|sanitation|endemic|epidemic|pandemic|vector|malaria control|waste disposal|family planning|contraceptive|home visit|health promotion|disease prevention|surveillance|environmental health|water-borne|occupational health|school health|herd immunity|demography)\b/.test(text)) {
    return 'course-community';
  }

  // 10. Anatomy and Physiology (dedicated part)
  if (/\b(anatomy|anatomical|physiolog|cell organelle|mitochondri|histology|skeleton|bone|bones|femur|humerus|tibia|fibula|radius|ulna|clavicle|scapula|sternum|cranium|skull|vertebra|vertebrae|muscle contraction|sarcomere|myosin|actin|cranial nerve|neuron|synapse|cerebr|cerebellum|brainstem|medulla oblongata|pons|thalamus|hypothalamus|nephron|glomerul|loop of henle|renal cortex|alveol|pulmonary alveoli|heart valve|mitral valve|tricuspid|cardiac cycle|myocardium|pericardium|endocardium|blood circulation|artery|vein|capillary|lymphatic|endocrine gland|pituitary|thyroid gland|parathyroid|adrenal cortex|adrenal gland|pancreas islet|islets of langerhans|liver function|bile|gallbladder|spleen|skin layer|epidermis|dermis|cornea|retina|cochlea|erythrocyte|leukocyte|thrombocyte|hemoglobin|plasma membrane|osmosis|diffusion|homeostasis|tissue|epithelial|connective tissue)\b/.test(text)) {
    return 'course-anatomy';
  }

  // 11. Foundations of Nursing
  if (/\b(nursing process|assessment|nursing diagnosis|nursing care plan|florence nightingale|orem|henderson|roy|peplau|vital signs|blood pressure|temperature|pulse|respiration|bed bath|bed making|catheter|enema|positioning|fowler|sims|trendelenburg|comfort measures|pressure sore|ulcer staging|documentation|intake and output|nasogastric)\b/.test(text)) {
    return 'course-foundations';
  }

  // 12. Medical-Surgical Nursing (includes emergency, trauma, critical care + general adult health)
  return 'course-medsurg';
}

function assembleAllCurriculumCourses(): QuestionType[] {
  const rawSources: RawDocQuestion[][] = [
    DOC_PART1, DOC_PART2, DOC_PART3, TYPE4_QUESTIONS, DOC_PART4,
    TYPE6_QUESTIONS, TYPE7_QUESTIONS, TYPE8_QUESTIONS, TYPE9_QUESTIONS, TYPE10_QUESTIONS,
    TYPE11_QUESTIONS, TYPE12_QUESTIONS, TYPE13_QUESTIONS, TYPE14_QUESTIONS,
  ];

  interface CourseMeta {
    id: string;
    name: string;
    baseQuestions: Question[];
  }

  const courseMetaList: CourseMeta[] = [
    {
      id: 'course-foundations',
      name: 'Foundations of Nursing',
      baseQuestions: FOUNDATIONS_QUESTIONS,
    },
    {
      id: 'course-medsurg',
      name: 'Medical-Surgical Nursing',
      baseQuestions: MEDSURG_QUESTIONS,
    },
    {
      id: 'course-reproductive',
      name: 'Reproductive Health',
      baseQuestions: MCH_QUESTIONS,
    },
    {
      id: 'course-community',
      name: 'Community Health Nursing',
      baseQuestions: COMMUNITY_QUESTIONS,
    },
    {
      id: 'course-psychiatry',
      name: 'Mental Health',
      baseQuestions: PSYCHIATRY_QUESTIONS,
    },
    {
      id: 'course-pharmacology',
      name: 'Pharmacology',
      baseQuestions: PHARMACOLOGY_QUESTIONS,
    },
    {
      id: 'course-anatomy',
      name: 'Anatomy and Physiology',
      baseQuestions: ANATOMY_QUESTIONS,
    },
    {
      id: 'course-research',
      name: 'Research and Statistics',
      baseQuestions: [],
    },
    {
      id: 'course-management',
      name: 'Principles of Leadership and Management',
      baseQuestions: [],
    },
    {
      id: 'course-ethics',
      name: 'Nursing Ethics and Jurisprudence',
      baseQuestions: [],
    },
    {
      id: 'course-nutrition',
      name: 'Nutrition',
      baseQuestions: [],
    },
    {
      id: 'course-microbiology',
      name: 'Microbiology',
      baseQuestions: [],
    },
  ];

  const buckets: Record<string, Question[]> = {};
  for (const meta of courseMetaList) {
    buckets[meta.id] = [...meta.baseQuestions];
  }

  for (const src of rawSources) {
    for (const raw of src) {
      if (!raw || !raw.question) continue;
      const targetId = classifyNursingQuestion(raw);
      if (buckets[targetId]) {
        buckets[targetId].push({
          number: 0,
          question: raw.question.trim(),
          optionA: raw.optionA,
          optionB: raw.optionB,
          optionC: raw.optionC,
          optionD: raw.optionD,
          correctAnswer: raw.correctAnswer,
          explanation: raw.explanation || '',
        });
      }
    }
  }

  return courseMetaList.map((meta) => {
    const questionsInBucket = buckets[meta.id] || [];
    const seen = new Set<string>();
    const uniqueQuestions: Question[] = [];

    for (const q of questionsInBucket) {
      const norm = q.question.trim().toLowerCase().replace(/\s+/g, ' ');
      if (!seen.has(norm)) {
        seen.add(norm);
        uniqueQuestions.push({
          ...q,
          number: uniqueQuestions.length + 1,
        });
      }
    }

    return {
      id: meta.id,
      name: meta.name,
      section: 'Section D' as const,
      questions: uniqueQuestions,
    };
  });
}

export const CURRICULUM_COURSE_TYPES: QuestionType[] = assembleAllCurriculumCourses();
