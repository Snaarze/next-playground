import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";


//returns an object
// fetching the data from the backend
// when we remove the props/ parameters it will store the object to the cache by default


interface Props {
    params: { id: number }
}
export function GET(request: NextRequest) {
    return NextResponse.json([
        {
            id: 1,
            name: "Jeremy "
        },
        {
            id: 2,
            name: "John "
        }
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.issues, { status: 400 })

    return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}


