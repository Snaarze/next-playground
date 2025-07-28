import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

interface Props {
  params: { id: string };
}

//this function will fetch the data by its id and return object depending on the result of the query
export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.products.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  //if user cannot be found by id log the error
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // return the user if found by the id
  return NextResponse.json(user, { status: 201 });
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 401 });

  if (parseInt(params.id) > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(
    await prisma.products.updateMany({
      where: {
        id: parseInt(params.id),
      },
      data: {
        name: body.name,
        price: body.price,
      },
    })
  );
}

export async function DELETE(request: NextRequest, { params }: Props) {
  if (!params) NextResponse.json({ error: "User not found" }, { status: 404 });
  await prisma.products.delete({
    where: {
      id: parseInt(params.id),
    },
  });

  return NextResponse.json({});
}
