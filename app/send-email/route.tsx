// this is just for demo purposes, in real world application
// we need to put this into our business operation

import WelcomeTemplate from "../../emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// like email comfirmation
// example of sending email
export async function POST() {
  await resend.emails.send({
    // this domain should be from my owm domain, cannot use google,discord,apple
    // then we need to add our domain in my account domain
    from: "this is a test",
    to: "jeremy.panlasigui29@gmail.com",
    subject: "this is a test",
    react: <WelcomeTemplate />,
  });

  return NextResponse.json({});
}
