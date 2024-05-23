import { InvestmentApp } from "~/types";

// Fetch Investment Requset data from API here.
export const getInvestmentApplications = async (): Promise<InvestmentApp[]> => {
  return [
    {
      id: "1",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "2",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "3",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "4",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "5",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "6",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "7",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "8",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "9",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "10",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "11",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "12",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "13",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "14",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "15",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "16",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "17",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "18",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "19",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "20",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "21",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "22",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "23",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "24",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "25",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "26",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "27",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "28",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "29",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "30",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "31",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "32",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "33",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "34",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "35",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "36",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "37",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "38",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "39",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "40",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "41",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "42",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "43",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "44",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "45",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "46",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "47",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
    {
      id: "48",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인대기", // Approval pending
      remarks: "",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "49",
      category: "소득적격",
      type: "개인전문",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인거부", // Approval denied
      remarks:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvedAt: "2023-01-10 09:00:00",
    },
    {
      id: "50",
      category: "소득적격",
      type: "소득적격",
      document: "보기",
      createdAt: "2023-01-10 09:00:00",
      status: "승인완료", // Approved
      remarks: "",
      approvedAt: "",
    },
  ];
};
