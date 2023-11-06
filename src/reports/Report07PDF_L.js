import { Button } from "@mui/material";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Logo from "../assets/logo.png";
import "../assets/Sarabun-Regular-normal";
import "../assets/Sarabun-Light-normal";
import "../assets/Prompt-Regular-normal";
import config from "../assets/NameStation";
import LogoPAT from "../assets/Logo_PAT2.png";

const genPDFClick = (data, startDate, endDate, startTime, endTime) => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();
  var dateTime = date + "-" + time;

  const doc = new jsPDF({
    orientation: "l",
    unit: "mm",
    format: "a4",
  });

  const footer = () => {
    doc.addImage(LogoPAT, "PNG", 15, 197, 7, 7);
    doc.setTextColor("#77787B");
    doc.text(23, 203, "PAT INNOVATIVE SOLUTION");
  };

  // Header
  doc.addImage(Logo, "PNG", 275, 5, 15, 15); // Add your logo image
  doc.setFont("Sarabun-Regular");
  doc.setFontSize(10);
  doc.setTextColor("#77787B");
  doc.text("รายงานตรวจสอบนำ้หนักรถบรรทุก โดยระบบ WEIGHT IN MOTION", 15, 14);
  doc.text(
    "สำนักงานควบคุมนำ้หนักยานพาหนะ กรมทางหลวง สถานีตรวจสอบน้ำหนัก " +
      config.nameStation,
    15,
    19
  ); // Add your header text

  doc.setLineWidth(0.7);
  doc.line(15, 23, 285, 23);
  doc.setLineWidth(0.3);
  doc.line(15, 24, 285, 24);

  doc.setFont("Prompt-Regular");
  doc.setFontSize(12);
  doc.setTextColor("#000000");
  doc.text(
    "รายงาน ค่าเฉลี่ยน้ำหนักรถแยกตามประเภท แบบรายเดือน (Low Speed)",
    145,
    33,
    "center"
  );
  doc.setFontSize(9);
  doc.text(
    "ข้อมูลวันที่ " +
      startDate +
      " - " +
      endDate +
      " เวลา " +
      startTime +
      " - " +
      endTime,
    150,
    40,
    "center"
  );

  autoTable(doc, {
    startY: 47,
    columnStyles: {
      0: { cellWidth: 15 },
      1: { cellWidth: 20 },
      2: { cellWidth: 15 },
    },
    didParseCell: function (data) {
      var cell = data.cell;
      cell.styles.font = "Sarabun-Regular";
    },
    head: [
      [
        {
          content: "ช่วงเวลา",
          colSpan: 2,
          styles: { halign: "center", fillColor: [132, 172, 225] },
        },
        {
          content: "น้ำหนักเฉลี่ยตามประเภทรถ (Kg.)",
          colSpan: 18,
          styles: { halign: "center", fillColor: [132, 192, 235] },
        },
      ],
      [
        "ปี",
        "เดือน",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9.1",
        "9.2",
        "9.3",
        "9.4",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "รวม",
      ],
    ],
    body: data.data.map((res) => {
      let Month = "";
      if (res.Month === 1) {
        Month = "มกราคม";
      }
      if (res.Month === 2) {
        Month = "กุมภาพันธ์";
      }
      if (res.Month === 3) {
        Month = "มีนาคม";
      }
      if (res.Month === 4) {
        Month = "เมษายน";
      }
      if (res.Month === 5) {
        Month = "พฤษภาคม";
      }
      if (res.Month === 6) {
        Month = "มิถุนายน";
      }
      if (res.Month === 7) {
        Month = "กรกฎาคม";
      }
      if (res.Month === 8) {
        Month = "สิงหาคม";
      }
      if (res.Month === 9) {
        Month = "กันยายน";
      }
      if (res.Month === 10) {
        Month = "ตุลาคม";
      }
      if (res.Month === 11) {
        Month = "พฤศจิกายน";
      }
      if (res.Month === 12) {
        Month = "ธันวาคม";
      }
      return [
        res.Year,
        Month,

        res.class2,
        res.class3,
        res.class4,
        res.class5,
        res.class6,
        res.class7,
        res.class8,
        res.class91,
        res.class92,
        res.class93,
        res.class94,
        res.class10,
        res.class11,
        res.class12,
        res.class13,
        res.class14,
        res.class15,
        res.Total_Avg,
      ];
    }),
  });
  footer();
  doc.save(
    "Report_LSP ค่าเฉลี่ยน้ำหนักรถแยกตามประเภทแบบรายเดือน" + dateTime + ".pdf"
  );
};

function Report07PDF_L({
  data,
  variant,
  color,
  buttonText,
  startDate,
  endDate,
  startTime,
  endTime,
}) {
  return (
    <Button
      onClick={() =>
        genPDFClick({ data }, startDate, endDate, startTime, endTime)
      }
      variant={variant}
      color={color}
      style={{ marginLeft: "10px", marginTop: "-10px" }}
      startDate={startDate}
      endDate={endDate}
      startTime={startTime}
      endTime={endTime}
    >
      {buttonText}
    </Button>
  );
}
export default Report07PDF_L;
