interface MajorCredits {
  _MajorCreditsBrand: void;
  credits: number;
}

interface MinorCredits {
  _MinorCreditsBrand: void;
  credits: number;
}

function sumMajorCredits(subject1: any, subject2: any) {
  const sum = subject1.credits + subject2.credits;
  if (subject1 instanceof MajorCredits) return subject1;
  if (subject2 instanceof MajorCredits) return subject2;
}

function sumMinorCredits(subject1: any, subject2: any) {
  const sum = subject1.credits + subject2.credits;
  if (subject1 instanceof MinorCredits) return subject1;
  if (subject2 instanceof MinorCredits) return subject2;
}