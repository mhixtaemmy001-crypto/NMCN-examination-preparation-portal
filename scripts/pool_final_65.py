# 65 Questions from Pages 61 to 64 of the NMCN book
import json

questions_65 = []

def add(q, a, b, c, d, ans, exp):
    questions_65.append({
        "question": q,
        "optionA": a,
        "optionB": b,
        "optionC": c,
        "optionD": d,
        "correctAnswer": ans,
        "explanation": exp
    })

add("An unusual, unpredictable, and genetically determined abnormal individual reaction to a drug is pharmacologically termed:",
    "Drug allergy", "Idiosyncrasy (idiosyncratic drug reaction)", "Drug tolerance", "Side effect",
    "B", "Drug idiosyncrasy is an abnormal, unexpected reaction independent of drug dose, mediated by individual pharmacogenetic variations (e.g., G6PD hemolysis).")

add("Which penicillinase-resistant semisynthetic penicillin is indicated for treating infections caused by beta-lactamase-producing Staphylococcus aureus?",
    "Amoxicillin", "Cloxacillin", "Ampicillin", "Penicillin V",
    "B", "Cloxacillin possesses a bulky acyl side-chain that sterically hinders staphylococcal beta-lactamase enzymes, preserving antibacterial activity.")

add("Acute opioid intoxication and overdose is clinically characterized by which hallmark physical assessment triad?",
    "Hypertension, hyperthermia, and dilated pupils",
    "Pinpoint pupils (miosis), respiratory depression, and decreased level of consciousness (coma)",
    "Agitation, hyperreflexia, and diarrhea",
    "Tachycardia with flushed skin",
    "B", "The opioid overdose triad consists of central nervous system depression, profound bradypnea/hypoventilation, and bilateral symmetric pinpoint pupils.")

add("Why does intramuscular (IM) medication administration provide significantly faster vascular absorption than subcutaneous (SC) injection?",
    "Subcutaneous fat has no nerve fibers",
    "Skeletal muscle tissue possesses a vastly greater capillary blood supply and vascular perfusion",
    "The muscle tissue has a higher pH",
    "Subcutaneous tissue destroys the drug molecules",
    "B", "Rich skeletal muscular microvascular networks ensure rapid, predictable drug absorption compared to poorly vascularized adipose tissue.")

add("A pharmacologically inert chemical substance (such as saline or lactose) administered with therapeutic suggestion is known as a:",
    "Prodrug", "Placebo", "Toxoid", "Carrier",
    "B", "A placebo produces clinical changes based on patient expectation, conditioning, and psychological factors rather than intrinsic pharmacological activity.")

add("In psychiatric nursing, the co-existence of a substance use disorder alongside an independent major psychiatric disorder is diagnosed as:",
    "Secondary psychosis", "Dual diagnosis (co-occurring disorders)", "Primary addiction", "Malingering",
    "B", "Dual diagnosis describes individuals affected simultaneously by a mental health condition (e.g., schizophrenia, bipolar) and a substance dependence.")

add("Systemic arterial blood pressure is physiologically determined by the product of:",
    "Heart rate multiplied by stroke volume exclusively",
    "Cardiac Output (CO) multiplied by Systemic Vascular Resistance (SVR)",
    "Blood volume divided by body weight",
    "Venous pressure alone",
    "B", "Mean arterial pressure is the product of cardiac flow (cardiac output) and peripheral arteriolar resistance (systemic vascular resistance).")

add("A client diagnosed with schizophrenia repeatedly claims that she is the Queen of England and commands hospital staff as royal attendants. This illustrates:",
    "A persecutory delusion", "A grandiose delusion (delusion of grandeur)", "A somatic delusion", "An idea of reference",
    "B", "Delusions of grandeur are fixed false beliefs of inflated power, divine identity, exceptional wealth, or supreme authority.")

add("In Freudian psychoanalytic theory, when an individual who feels intellectually inadequate compensates by becoming an aggressive, domineering boss, the defense mechanism is:",
    "Rationalization", "Compensation", "Regression", "Projection",
    "B", "Compensation is an unconscious mechanism where a person overemphasizes strengths in one area to counterbalance real or perceived deficiencies in another.")

add("The defense mechanism of 'Rationalization' involves:",
    "Transforming unacceptable urges into productive work",
    "Formulating plausible, socially acceptable false justifications to explain away behaviors motivated by unacceptable impulses",
    "Reverting to an earlier childhood developmental stage",
    "Attributing one's own feelings to someone else",
    "B", "Rationalization protects self-esteem by fabricating logical, self-serving excuses to justify irrational actions or painful failures.")

add("In psychiatric terminology, the word 'SOMA' is derived from Greek and signifies the:",
    "Mind", "Physical body", "Soul", "Heart",
    "B", "Soma refers to the physical anatomical body; psychosomatic disorders involve physical bodily symptoms influenced by psychological distress.")

add("In caring for a client with catatonic schizophrenia exhibiting extreme psychomotor underactivity and stupor, the nurse's priority care is:",
    "Leaving the client alone in the dark",
    "Preventing physical complications by providing passive range-of-motion, repositioning, skin care, and assisted nutrition/hydration",
    "Insisting the client participate in competitive sports",
    "Withholding all oral fluids",
    "B", "Immobile catatonic clients cannot meet basic somatic needs, risking fatal venous thromboembolism, pressure ulcers, dehydration, and contractures.")

add("Delirium is clinically distinguished from dementia by which cardinal features?",
    "Slow, insidious cognitive decline over several years with stable alertness",
    "Acute rapid onset (hours to days), fluctuating course, clouding of consciousness, and impaired attention, usually secondary to an acute medical illness",
    "Permanent irreversible brain tissue loss",
    "Absence of any physiological cause",
    "B", "Delirium is an acute reversible medical emergency characterized by fluctuating attention and disorganized thinking caused by underlying systemic etiologies.")

add("According to Frederick Herzberg's Dual-Factor theory of motivation, 'Hygiene factors' in the work environment (e.g., salary, working conditions):",
    "Directly produce deep long-term job satisfaction",
    "Prevent job dissatisfaction and workplace unhappiness, but do not inherently motivate superior performance",
    "Cause employee burnout",
    "Eliminate the need for management",
    "B", "Hygiene factors (extrinsic maintenance needs) eliminate dissatisfaction; intrinsic 'motivators' (achievement, recognition, growth) inspire motivation.")

add("In historical medicine, Hippocrates categorized mental disorders into three primary diagnostic entities: Mania, Melancholia, and:",
    "Hysteria", "Phrenitis (acute mental inflammation with fever)", "Schizophrenia", "Neurosis",
    "B", "Hippocrates attributed mental illness to biological humoral imbalances (blood, phlegm, yellow bile, black bile), classifying conditions into mania, melancholia, and phrenitis.")

add("A client in the psychiatric unit expresses intense dread that enemy soldiers have planted listening devices in his bedroom and are waiting outside to execute him. This is:",
    "Delusion of persecution (paranoid delusion)", "Delusion of grandeur", "Somatic delusion", "Nihilistic delusion",
    "A", "Persecutory delusions are fixed false convictions that one is being harassed, plotted against, poisoned, or targeted for harm.")

add("A client reports feeling as though the surrounding physical environment has suddenly become completely flat, unfamiliar, dream-like, and lifeless. This perceptual alteration is:",
    "Depersonalization", "Derealization", "Hallucination", "Illusory distortion",
    "B", "Derealization is an alteration in external perception where familiar physical surroundings feel strange, artificial, two-dimensional, or dreamlike.")

add("A middle-aged client experiences sudden unexpected surges of intense terror, accompanied by palpitations, smothering sensations, trembling, and fear of impending death. This is:",
    "Generalized anxiety disorder", "Panic attack (panic disorder)", "Major depression", "Malingering",
    "B", "Panic attacks are discrete episodes of abrupt intense autonomic fear that peak within minutes, producing severe cardiopulmonary symptoms.")

add("In psychiatric rehabilitation, the neurological symptom of 'Echopraxia' is characterized by:",
    "Involuntary repetition or mimicking of the speech of another person",
    "Involuntary mechanical imitation or mimicking of the physical movements and gestures of another person",
    "Inability to swallow food",
    "Loss of voluntary muscle tone",
    "B", "Echopraxia is the pathological automatic copying of another person's bodily movements, frequently observed in catatonic schizophrenia.")

add("Electroconvulsive Therapy (ECT) demonstrates the highest clinical efficacy and most rapid therapeutic response in which psychiatric condition?",
    "Obsessive-compulsive disorder",
    "Severe, treatment-resistant major depression with high acute suicide risk or catatonic exhaustion",
    "Borderline personality disorder",
    "Chronic generalized anxiety",
    "B", "ECT produces rapid remission in up to 80-90% of severe medication-refractory depressive episodes, making it life-saving for actively suicidal patients.")

add("Which somatic symptom disorder is characterized by a persistent, distressing preoccupation with the unfounded belief that one has a serious undiagnosed medical illness?",
    "Conversion disorder", "Hypochondriasis (Illness Anxiety Disorder)", "Factitious disorder", "Body dysmorphic disorder",
    "B", "Illness anxiety disorder involves excessive anxiety and hypervigilance regarding personal health despite reassuring physical and laboratory evaluations.")

add("A combat veteran experiences recurrent intrusive flashbacks, distressing nightmares, hypervigilance, and exaggerated startle responses following a traumatic ambush. This is:",
    "Adjustment disorder", "Post-Traumatic Stress Disorder (PTSD)", "Bipolar affective disorder", "Panic disorder",
    "B", "PTSD develops after exposure to actual or threatened death, characterized by intrusive memories, avoidance of trauma cues, negative mood, and autonomic hyperarousal.")

add("In Elisabeth Kübler-Ross's stages of grieving, the stage characterized by intense resentment, irritability, and envious questioning of 'Why me?' is:",
    "Denial", "Anger", "Bargaining", "Depression",
    "B", "The anger stage projects feelings of helplessness onto family, nursing staff, or God as the individual confronts the reality of loss.")

add("Somnambulism is a parasomnia disorder occurring during non-REM slow-wave sleep, commonly known as:",
    "Night terrors", "Sleep walking", "Sleep talking", "Restless legs",
    "B", "Somnambulism involves complex motor behaviors initiated during stage N3 deep sleep, classically manifesting as ambulating while asleep with amnesia for the event.")

add("In a client with severe atrial fibrillation, the peripheral pulse is classically documented as:",
    "Slow and regular",
    "Irregularly irregular in rhythm with variable pulse volume",
    "Bounding and water-hammer",
    "Pulsus alternans",
    "B", "Disorganized atrial electrical activity bombards the AV node unpredictably, producing chaotic ventricular depolarization and an irregularly irregular pulse.")

add("Unidirectional valves that prevent retrograde pooling of blood under hydrostatic pressure are structurally present in:",
    "Arteries and arterioles", "Veins and lymphatics", "Capillaries", "Capillary beds",
    "B", "Veins (particularly in the lower extremities) and lymphatic collecting vessels possess bicuspid semilunar valves to support centripetal fluid return.")

add("Which cell surface receptor on human CD4+ T-helper lymphocytes is targeted by the gp120 glycoprotein of the Human Immunodeficiency Virus (HIV)?",
    "CD8 receptor", "CD4 receptor (along with CCR5 or CXCR4 co-receptors)", "CD19 receptor", "CD56 receptor",
    "B", "HIV binds specifically to the CD4 molecule on helper T-cells and macrophages, mediating viral entry, fusion, and progressive immune depletion.")

add("The leading infectious cause of retinal necrosis and opportunistic blindness in AIDS clients with CD4 counts below 50 cells/uL is:",
    "Toxoplasma gondii", "Cytomegalovirus (CMV) retinitis", "Herpes simplex type 1", "Candida albicans",
    "B", "CMV retinitis presents with painless visual loss, floaters, and full-thickness necrotizing retinal whitening with hemorrhages in advanced immunosuppression.")

add("Which immunoglobulin isotype exists predominantly as a pentamer linked by a J-chain, functioning efficiently in complement activation?",
    "Immunoglobulin G (IgG)", "Immunoglobulin M (IgM)", "Immunoglobulin A (IgA)", "Immunoglobulin E (IgE)",
    "B", "IgM has a high molecular weight pentameric structure that provides 10 antigen-binding sites, making it potent at agglutinating microbes.")

add("Which of the following is considered an innate physiological barrier preventing microbial invasion through the digestive tract?",
    "Circulating plasma IgG", "Gastric hydrochloric acid (pH 1.5 to 2.0)", "Memory T-lymphocytes", "Antibiotics",
    "B", "Gastric acid is a non-specific chemical barrier that sterilizes swallowed food by denaturing and destroying ingested bacteria.")

with open('scripts/pool_final_65.json', 'w') as f:
    json.dump(questions_65, f, indent=2)

print(f"Generated {len(questions_65)} questions from pages 61-64")
