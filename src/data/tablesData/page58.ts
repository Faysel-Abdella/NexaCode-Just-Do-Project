const page58Columns = [
  "No.",
  "Language",
  "Title",
  "Type",
  "Status",
  "Category",
  "Connected Code",
  "No. ov Contents",
  "Size",
  "Downloads",
  "Creation Date",
  "Admin ID (Content Creator)",
  "Department",
  "Note",
];

const page58Rows = [
  {
    number: 200,
    language: "영어",
    title: "영어는 3단어로",
    type: "Speaking",
    status: "정상",
    category: "LIFE",
    connectedCode: "EN-SPK-07",
    numberOfContents: "34 문장",
    size: "1.2MB",
    downloads: "1,105",
    creationDate: "2021-06-01",
    adminId: "John@gmail.com",
    department: "IT",
    note: "테스트",
  },
];

for (let i = 199; i > 0; i--) {
  const newRow = { ...page58Rows[0], number: i };
  page58Rows.push(newRow);
}

export default {
  page58Columns,
  page58Rows,
};
