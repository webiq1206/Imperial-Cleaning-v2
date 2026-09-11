import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { BUSINESS_EMAIL } from "@/data/business-info";
export async function POST(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_DESIGN_PREVIEW === "1") return NextResponse.json({error:"Design preview: submissions are disabled."},{status:403});
  try {
    const text = await request.text();
    if (text.length > 12000) return NextResponse.json({error:"Request is too large."},{status:413});
    let payload; try {payload=JSON.parse(text);} catch {return NextResponse.json({error:"Invalid request."},{status:400});}
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) return NextResponse.json({error:"Please check your contact details and try again."},{status:400});
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !from) return NextResponse.json({error:"Online requests are temporarily unavailable. Please call (208) 520-3202 or email service@imperialcleaninginc.com."},{status:503});
    const data=parsed.data;
    const result = await new Resend(apiKey).emails.send({
      from, to: BUSINESS_EMAIL, replyTo: data.email,
      subject: `Cleaning quote request: ${data.service}`,
      text: [`Name: ${data.name}`,`Company: ${data.company || "Not provided"}`,`Email: ${data.email}`,`Phone: ${data.phone}`,`Service: ${data.service}`,`Location: ${data.location}`,"",data.message || "No additional notes."].join("\n"),
    });
    if (result.error || !result.data?.id) return NextResponse.json({error:"We couldn’t send your request. Please try again or call (208) 520-3202."},{status:502});
    return NextResponse.json({success:true});
  } catch {
    return NextResponse.json({error:"We couldn’t send your request. Please call (208) 520-3202."},{status:500});
  }
}
