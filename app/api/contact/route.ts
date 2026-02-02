import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const { name, company, email, phone, service, location, message } = data;
    
    // Validate required fields
    if (!name || !email || !phone || !service || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // For now, log the contact request
    // In production, this would send to a database or email service
    console.log("Contact form submission:", {
      name,
      company,
      email,
      phone,
      service,
      location,
      message,
      timestamp: new Date().toISOString()
    });
    
    // If database is configured, save to database
    // This is a placeholder - integrate with your actual database setup
    
    return NextResponse.json({ 
      success: true,
      message: "Contact request received successfully" 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact request" },
      { status: 500 }
    );
  }
}
