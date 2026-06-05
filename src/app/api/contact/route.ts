import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

function validatePayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;

  const { name, email, phone, service, message } = body as ContactPayload;

  return (
    typeof name === "string" &&
    name.trim().length >= 2 &&
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof phone === "string" &&
    phone.trim().length >= 10 &&
    typeof service === "string" &&
    service.trim().length > 0 &&
    typeof message === "string" &&
    message.trim().length >= 10
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validatePayload(body)) {
      return NextResponse.json(
        { error: "Invalid form data. Please check all fields." },
        { status: 400 }
      );
    }

    const submission = {
      ...body,
      submittedAt: new Date().toISOString(),
      id: crypto.randomUUID(),
    };

    // In production, integrate with email service (Resend, SendGrid) or CRM
    console.log("[Contact Form Submission]", submission);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! We will contact you shortly.",
        id: submission.id,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
