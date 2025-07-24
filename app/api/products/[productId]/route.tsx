
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
    params: { id: number }
}

export async function PATCH(request: NextRequest, { params }: Props) {
    const body = await request.json();

    const validation = schema.safeParse(body)

    if (!validation.success) return NextResponse.json(validation.error.message, { status: 401 })

    if (params.id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 })

    return NextResponse.json({ id: 1, name: body.name, price: body.price })
}

export async function DELETE(request: NextRequest, { params }: Props) {
    const body = await request.json();

    if (params.id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 })

    return NextResponse.json({})
}

