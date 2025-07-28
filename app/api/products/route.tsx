import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  return NextResponse.json(await prisma.products.findMany());
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 404 });

  return NextResponse.json(
    await prisma.products.create({
      data: {
        name: body.name,
        price: body.price,
      },
    })
  );
}
