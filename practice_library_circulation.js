const circulationLogs = [
  {
    logId: "L001",
    studentCode: "SV001",
    bookIsbn: "978604001",
    status: "BORROWING",
    fineAmount: 0,
    borrowDays: 7,
    lateDays: 0,
    settled: false
  },
  {
    logId: "L002",
    studentCode: "SV002",
    bookIsbn: "978604002",
    status: "BORROWING",
    fineAmount: 0,
    borrowDays: 7,
    lateDays: 3,
    settled: false
  },
  {
    logId: "L003",
    studentCode: "SV003",
    bookIsbn: "978604003",
    status: "RETURNED",
    fineAmount: 10000,
    borrowDays: 7,
    lateDays: 2,
    settled: true
  }
];

console.log("==============================================================");
console.log("              QUẢN LÝ LƯU CHUYỂN SÁCH THƯ VIỆN");
console.log("==============================================================");

console.log("Mã GD | Sinh viên | ISBN | Trạng thái | Tiền phạt");

for (const log of circulationLogs) {
  console.log(
    log.logId +
    " | " +
    log.studentCode +
    " | " +
    log.bookIsbn +
    " | " +
    log.status +
    " | " +
    log.fineAmount +
    " VNĐ"
  );
}

const studentCode = "SV004";

if (studentCode !== "") {
  const newLog = {
    logId: "L004",
    studentCode: studentCode,
    bookIsbn: "978604004",
    status: "BORROWING",
    fineAmount: 0,
    borrowDays: 7,
    lateDays: 0,
    settled: false
  };

  circulationLogs.push(newLog);
}

console.log("");
console.log("==============================================================");
console.log("                    SAU KHI MƯỢN SÁCH");
console.log("==============================================================");

for (const log of circulationLogs) {
  console.log(
    log.logId +
    " | " +
    log.studentCode +
    " | " +
    log.bookIsbn +
    " | " +
    log.status +
    " | " +
    log.fineAmount +
    " VNĐ"
  );
}

for (const log of circulationLogs) {
  if (log.logId === "L001") {
    log.status = "RETURNED";
    log.lateDays = 0;
    log.fineAmount = 0;
    log.settled = true;
  }
}

for (const log of circulationLogs) {
  if (log.logId === "L002") {
    log.status = "RETURNED";
    log.fineAmount = log.lateDays * 5000;
    log.settled = true;
  }
}

console.log("");
console.log("==============================================================");
console.log("                 SAU KHI TRẢ SÁCH");
console.log("==============================================================");

for (const log of circulationLogs) {
  console.log(
    log.logId +
    " | " +
    log.studentCode +
    " | " +
    log.bookIsbn +
    " | " +
    log.status +
    " | " +
    log.fineAmount +
    " VNĐ"
  );
}

const lostLog = {
  logId: "L005",
  studentCode: "SV005",
  bookIsbn: "978604005",
  status: "LOST",
  fineAmount: 200000,
  borrowDays: 7,
  lateDays: 0,
  settled: true
};

circulationLogs.push(lostLog);

console.log("");
console.log("==============================================================");
console.log("                    SAU KHI BÁO MẤT SÁCH");
console.log("==============================================================");

for (const log of circulationLogs) {
  console.log(
    log.logId +
    " | " +
    log.studentCode +
    " | " +
    log.bookIsbn +
    " | " +
    log.status +
    " | " +
    log.fineAmount +
    " VNĐ"
  );
}

for (let i = circulationLogs.length - 1; i >= 0; i--) {
  if (
    circulationLogs[i].status === "RETURNED" &&
    circulationLogs[i].settled === true &&
    circulationLogs[i].borrowDays > 30
  ) {
    circulationLogs.splice(i, 1);
  }
}

let borrowingCount = 0;
let totalFine = 0;

for (const log of circulationLogs) {
  if (log.status === "BORROWING") {
    borrowingCount++;
  }

  totalFine += log.fineAmount;
}

console.log("");
console.log("==============================================================");
console.log("                  BÁO CÁO CUỐI NGÀY");
console.log("==============================================================");
console.log("Tổng số sách đang được mượn:", borrowingCount);
console.log("Tổng tiền phạt:", totalFine, "VNĐ");
console.log("==============================================================");

console.log("");
console.log("==============================================================");
console.log("                 DANH SÁCH GIAO DỊCH");
console.log("==============================================================");

for (const log of circulationLogs) {
  console.log(
    log.logId +
    " | " +
    log.studentCode +
    " | " +
    log.bookIsbn +
    " | " +
    log.status +
    " | " +
    log.fineAmount +
    " VNĐ"
  );
}