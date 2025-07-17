interface MajorCredits {
  credits: number;
  // Add brand property to enforce nominal typing
  readonly __brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  // Add brand property to enforce nominal typing
  readonly __brand: "MinorCredits";
}

// Define the Functions

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}

// Example Usage (optional for testing)

const major1: MajorCredits = { credits: 3, __brand: "MajorCredits" };
const major2: MajorCredits = { credits: 5, __brand: "MajorCredits" };

const minor1: MinorCredits = { credits: 2, __brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 4, __brand: "MinorCredits" };

console.log("Major:", sumMajorCredits(major1, major2)); // 8
console.log("Minor:", sumMinorCredits(minor1, minor2)); // 6
