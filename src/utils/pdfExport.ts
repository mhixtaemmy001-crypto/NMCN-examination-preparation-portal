import { Question, OptionKey } from '../types';
import { jsPDF } from 'jspdf';

export function getOptionText(question: Question, key: OptionKey): string {
  switch (key) {
    case 'A':
      return question.optionA;
    case 'B':
      return question.optionB;
    case 'C':
      return question.optionC;
    case 'D':
      return question.optionD;
  }
}

export interface ResultPdfParams {
  candidateName: string;
  candidateEmail: string;
  matricNo?: string;
  typeName: string;
  sectionName: string;
  score: number;
  total: number;
  percentage: number;
  dateStr: string;
}

export function generateResultPDF(params: ResultPdfParams): void {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Outer border
    doc.setDrawColor(16, 185, 129); // emerald-500
    doc.setLineWidth(1.5);
    doc.rect(10, 10, 190, 277);

    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.5);
    doc.rect(12, 12, 186, 273);

    // Header Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(6, 78, 59); // emerald-900
    doc.text('ADAMAWA STATE COLLEGE OF NURSING SCIENCES, YOLA', 105, 25, { align: 'center' });

    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text('P.M.B. 2044, YOLA, ADAMAWA STATE — NIGERIA', 105, 32, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(4, 120, 87); // emerald-700
    doc.text('NMCN PROFESSIONAL EXAMINATION PREPARATION RESULT SLIP', 105, 40, { align: 'center' });

    doc.setDrawColor(16, 185, 129);
    doc.setLineWidth(0.8);
    doc.line(20, 44, 190, 44);

    // Candidate Details Box
    doc.setFillColor(248, 250, 252); // slate-50
    doc.roundedRect(20, 50, 170, 45, 3, 3, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(20, 50, 170, 45, 3, 3, 'S');

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(71, 85, 105);
    doc.text('CANDIDATE IDENTIFICATION & ATTACHED EMAIL RECORD', 25, 57);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text('Candidate Name:', 25, 66);
    doc.setFont('helvetica', 'normal');
    doc.text(params.candidateName, 65, 66);

    doc.setFont('helvetica', 'bold');
    doc.text('Attached Email:', 25, 74);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(4, 120, 87);
    doc.text(params.candidateEmail, 65, 74);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text('Examination No / Matric:', 25, 82);
    doc.setFont('helvetica', 'normal');
    doc.text(params.matricNo || 'N/A', 75, 82);

    doc.setFont('helvetica', 'bold');
    doc.text('Date of Assessment:', 25, 90);
    doc.setFont('helvetica', 'normal');
    doc.text(params.dateStr, 75, 90);

    // Exam Performance Table Box
    doc.setFillColor(240, 253, 244); // emerald-50
    doc.roundedRect(20, 102, 170, 55, 3, 3, 'F');
    doc.setDrawColor(167, 243, 208);
    doc.roundedRect(20, 102, 170, 55, 3, 3, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(6, 78, 59);
    doc.text('EXAMINATION ASSESSMENT SUMMARY', 25, 110);

    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59);
    doc.text(`Question Module: ${params.sectionName} — ${params.typeName}`, 25, 119);
    doc.text(`Total Questions Answered: ${params.total}`, 25, 127);
    doc.text(`Correct Answers: ${params.score} of ${params.total}`, 25, 135);

    doc.setFontSize(14);
    doc.setTextColor(4, 120, 87);
    doc.text(`Overall Score: ${params.percentage}% (${params.score}/${params.total})`, 25, 146);

    // Verification Note
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 116, 139);
    doc.text(
      'This diagnostic test score was evaluated according to NMCN Professional Examination guidelines.',
      105,
      175,
      { align: 'center' }
    );
    doc.text(
      `Official College Inquiries: sonmyola@yahoo.com · Provost Salome Y. Tarfa`,
      105,
      182,
      { align: 'center' }
    );

    // Signatures / Stamps
    doc.setDrawColor(203, 213, 225);
    doc.line(30, 220, 85, 220);
    doc.line(125, 220, 180, 220);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text('Examination Coordinator / Registrar', 57.5, 226, { align: 'center' });
    doc.text('Candidate Signature / Acknowledgement', 152.5, 226, { align: 'center' });

    // Footer
    doc.setFontSize(8);
    doc.text('Powered by smach tech · Adamawa State College of Nursing Sciences, Yola', 105, 268, {
      align: 'center',
    });

    // Save File
    const safeName = params.candidateName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    doc.save(`ASCONS_NMCN_Result_${safeName}.pdf`);
  } catch (err) {
    console.error('Failed to generate PDF:', err);
  }
}
