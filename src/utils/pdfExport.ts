import { jsPDF } from 'jspdf';
import { Question, OptionKey } from '../types';

interface GenerateResultPdfParams {
  questionTypeName: string;
  questions: Question[];
  answers: Record<number, OptionKey>;
  correctCount: number;
  wrongCount: number;
  percentage: number;
}

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

export function generateResultPdf({
  questionTypeName,
  questions,
  answers,
  correctCount,
  wrongCount,
  percentage,
}: GenerateResultPdfParams): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const maxWidth = pageWidth - margin * 2;
  let y = 20;

  const ensureSpace = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 16) {
      doc.addPage();
      y = 20;
    }
  };

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42);
  doc.text('ADAMAWA STATE COLLEGE OF NURSING SCIENCES, YOLA', margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105);
  doc.text('NMCN Examination Preparation — Official Practice Result Report', margin, y);
  y += 6;

  doc.setFontSize(10);
  doc.text(`Question Type: ${questionTypeName}`, margin, y);
  y += 5;
  doc.text(`Date Generated: ${new Date().toLocaleString()}`, margin, y);
  y += 8;

  // Divider
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // Result Summary Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, maxWidth, 32, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('YOUR RESULT SUMMARY', margin + 6, y + 9);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(`Score: ${correctCount}/150`, margin + 6, y + 18);
  doc.text(`Percentage: ${percentage}%`, margin + 62, y + 18);
  doc.text(`Correct: ${correctCount}`, margin + 6, y + 26);
  doc.text(`Wrong: ${wrongCount}`, margin + 62, y + 26);

  y += 42;

  // Incorrectly Answered Questions Section
  const incorrectQuestions = questions.filter(
    (q) => answers[q.number] !== q.correctAnswer
  );

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text(
    `INCORRECTLY ANSWERED QUESTIONS (${incorrectQuestions.length})`,
    margin,
    y
  );
  y += 7;

  if (incorrectQuestions.length === 0) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(5, 150, 105);
    doc.text('Congratulations! You answered all 150 questions correctly.', margin, y);
  } else {
    incorrectQuestions.forEach((q) => {
      const studentChoice = answers[q.number];
      const studentAnswerText = studentChoice
        ? `${studentChoice}. ${getOptionText(q, studentChoice)}`
        : 'Unanswered';
      const correctAnswerText = `${q.correctAnswer}. ${getOptionText(q, q.correctAnswer)}`;

      const questionLines = doc.splitTextToSize(
        `Q${q.number}. ${q.question}`,
        maxWidth
      );
      const yourAnsLines = doc.splitTextToSize(
        `Your answer: ${studentAnswerText}`,
        maxWidth - 4
      );
      const correctAnsLines = doc.splitTextToSize(
        `Correct answer: ${correctAnswerText}`,
        maxWidth - 4
      );
      const explanationLines = q.explanation
        ? doc.splitTextToSize(`Explanation: ${q.explanation}`, maxWidth - 4)
        : [];

      const blockHeight =
        (questionLines.length +
          yourAnsLines.length +
          correctAnsLines.length +
          explanationLines.length) *
          4.5 +
        10;

      ensureSpace(blockHeight);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      doc.text(questionLines, margin, y);
      y += questionLines.length * 4.5 + 1;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(185, 28, 28);
      doc.text(yourAnsLines, margin + 3, y);
      y += yourAnsLines.length * 4.5 + 1;

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(4, 120, 87);
      doc.text(correctAnsLines, margin + 3, y);
      y += correctAnsLines.length * 4.5 + 1;

      if (explanationLines.length > 0) {
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105);
        doc.text(explanationLines, margin + 3, y);
        y += explanationLines.length * 4.5 + 4;
      } else {
        y += 3;
      }

      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.2);
      doc.line(margin, y - 2, pageWidth - margin, y - 2);
      y += 2;
    });
  }

  doc.save(`NMCN_Exam_Result_${correctCount}_of_150.pdf`);
}
