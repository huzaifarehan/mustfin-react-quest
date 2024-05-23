// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type InvestmentApp = {
  id: string;
  category: string; // existingType // investmentType
  type: string; // applicationType
  document: string; // documentToSubmitted
  createdAt: string; // application date and time
  status: "승인대기" | "승인거부" | "승인완료";
  remarks: string; // reason for rejection
  approvedAt: string; // approval date and time
};
