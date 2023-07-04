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
  doc.setTextColor("#00000");
  doc.text("รายงานรถแยกตามประเภท และผลคัดกรอง", 150, 33, "center");
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
    147,
    40,
    "center"
  );

  autoTable(doc, {
    startY: 47,
    columnStyles: {
      1: { cellWidth: 80 },
    },
    didParseCell: function (data) {
      var cell = data.cell;
      cell.styles.font = "Sarabun-Regular";
    },
    head: [
      [
        "ประเภท",
        "ประเภทรถ",
        "จำนวน เพลา",
        "พิกัด (kg)",
        "จำนวนรถ (คัน)",
        "% รถแต่ละ ประเภท",
        "จำนวนรถ ผ่านได้(คัน)",
        "%รถที่ ผ่านได้",
        "จำนวนรถ นน.เกิน",
        "%รถที่ นน.เกิน ",
      ],
    ],
    body: data.data.map((res) => {
      let notPassCount = res.OVER_Count + res.ERROR_Count;
      return [
        res.type,
        res.class_detail,
        res.sum_axle,
        res.max_weight,
        res.total,
        res.all_avg + "%",
        res.PASS_Count,
        res.Per_Pass + "%",
        notPassCount,
        res.Per_Over + "%",
      ];
    }),
  });
  footer();
  doc.save("Report " + dateTime + ".pdf");
};

function Report02PDF_H({
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
export default Report02PDF_H;
