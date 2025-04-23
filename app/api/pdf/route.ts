// app/api/receipt/route.ts
import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import Receipt from "@/components/Receipt/Receipt"; // make sure it's a default export

const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const RefNumber = searchParams.get("RefNumber");
  const PaymentMethod = searchParams.get("PaymentMethod");
  const CustomerName = searchParams.get("CustomerName");
  const TotalPayment = searchParams.get("TotalPayment");

  if (!RefNumber || !PaymentMethod || !CustomerName || !TotalPayment) {
    return new NextResponse("Missing required parameters.", { status: 400 });
  }

  try {
    const pdfBuffer = await renderToBuffer(
      Receipt({
        RefNumber,
        PaymentMethod,
        CustomerName,
        TotalPayment,
      })
    );

    const fileName = `Receipt_${generateRandomString(5)}.pdf`;

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new NextResponse("Failed to generate PDF", { status: 500 });
  }
}
