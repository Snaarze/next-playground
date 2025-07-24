// import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";


//returns an object
// fetching the data from the backend
// when we remove the props/ parameters it will store the object to the cache by default

interface Props {
    params: { id: number }
}
export function GET(request: NextRequest, { params }: Props) {
    console.log(params.id > 10)
    if (params.id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json({ id: 1, name: "Jeremy" })
}


export async function PATCH(request: NextRequest, { params }: Props) {
    const body = await request.json()

    const validation = schema.safeParse(body)

    if (!validation.success)
        return NextResponse.json(validation.error.issues, { status: 400 })

    if (params.id > 10)
        return NextResponse.json({ error: "User does not exist" }, { status: 404 })


    return NextResponse.json({ id: 1, name: body.name })
}

export async function DELETE(request: NextRequest, { params }: Props) {

    if (params.id > 10)
        return NextResponse.json({ error: "User does not exist" }, { status: 404 })
    return NextResponse.json({})
}