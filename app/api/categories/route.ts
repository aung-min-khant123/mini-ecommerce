import {NextResponse} from "next/server";
const categories = [
    {
        id: 1,
        name: "Electronics",
    },
    {
        id: 2,
        name: "Fashion",
    },
    {
        id: 3,
        name: "Beauty"
    },
];

export async function GET(){
    return NextResponse.json(categories)
}