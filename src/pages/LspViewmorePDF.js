import { Document, Text, Page, PDFViewer } from "@react-pdf/renderer";

function LspViewmorePDF() {
  return (
    <div>
      <PDFViewer>
        <Document>
          <Page>
            <Text>Hello There</Text>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
export default LspViewmorePDF;
