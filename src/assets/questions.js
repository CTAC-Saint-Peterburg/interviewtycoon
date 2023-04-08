const questions = [
  {
    name: "junior",
    stage: [
      [
        {
          question: "2+2 ?",
          variants: ["1", "2", "3", "4"],
          answer: "4",
        },
        {
          question: "3+5 ?",
          variants: ["8", "7", "12", "44"],
          answer: "8",
        },
        {
          question: "0 + 5 ?",
          variants: ["8", "7", "5", "44"],
          answer: "5",
        },
        {
          question: "87 - 1 ?",
          variants: ["86", "7", "12", "44"],
          answer: "86",
        },
        {
          question: "11 - 1 ?",
          variants: ["10", "7", "12", "44"],
          answer: "10",
        },
        {
          question: "100 + 50 ?",
          variants: ["150", "7", "12", "44"],
          answer: "150",
        },
        {
          question: "25 / 5 ?",
          variants: ["8", "7", "5", "44"],
          answer: "5",
        },
        {
          question: "0 + 0 ?",
          variants: ["8", "7", "12", "0"],
          answer: "0",
        },
        {
          question: "8+1 ?",
          variants: ["9", "4343", "12", "44"],
          answer: "9",
        },
        {
          question: "3+22 ?",
          variants: ["8", "7", "25", "44"],
          answer: "25",
        },
      ],
      [
        {
          question: "777 - 1 ?",
          variants: ["776", "2", "3", "4"],
          answer: "776",
        },
        {
          question: "777 + 1 ?",
          variants: ["778", "7", "12", "44"],
          answer: "778",
        },
      ],
      [
        {
          question: "999 - 1 ?",
          variants: ["998", "2", "3", "4"],
          answer: "998",
        },
        {
          question: "999 + 1 ?",
          variants: ["1000", "7", "12", "44"],
          answer: "1000",
        },
      ],
    ],
  },
  {
    name: "middle",
    stage: [
      [
        {
          question: "1111 - 1 ?",
          variants: ["1110", "2", "3", "4"],
          answer: "1110",
        },
        {
          question: "1111 + 1 ?",
          variants: ["1112", "7", "12", "44"],
          answer: "1112",
        },
      ],
      [
        {
          question: "8888 - 1 ?",
          variants: ["8887", "2", "3", "4"],
          answer: "8887",
        },
        {
          question: "8888 + 1 ?",
          variants: ["8889", "7", "12", "44"],
          answer: "8889",
        },
      ],
      [
        {
          question: "9999 - 1 ?",
          variants: ["9998", "2", "3", "4"],
          answer: "9998",
        },
        {
          question: "1000 + 1 ?",
          variants: ["1001", "7", "12", "44"],
          answer: "1001",
        },
      ],
    ],
  },
  {
    name: "senior",
    stage: [
      [
        {
          question: "1 - 1 ?",
          variants: ["0", "2", "3", "4"],
          answer: "0",
        },
        {
          question: "1 + 0 ?",
          variants: ["1", "7", "12", "44"],
          answer: "1",
        },
      ],
      [
        {
          question: "1+1 ?",
          variants: ["1", "2", "3", "4"],
          answer: "2",
        },
        {
          question: "2+0 ?",
          variants: ["2", "7", "12", "44"],
          answer: "2",
        },
      ],
      [
        {
          question: "9999 - 1 ?",
          variants: ["9998", "2", "3", "4"],
          answer: "9998",
        },
        {
          question: "0.5 + 1 ?",
          variants: ["1.5", "7", "12", "44"],
          answer: "1.5",
        },
      ],
    ],
  },
];
export default questions;
