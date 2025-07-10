import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const user=await currentUser();
    if (!user) {
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    try {

        // Check if user already existed

        const email=user?.primaryEmailAddress?.emailAddress;
        const name=user?.fullName;

        if (!email) {
            return NextResponse.json({ error: "No email found" }, { status: 400 });
        }

        const users=await db.
        select().
        from(usersTable)
        //@ts-ignore
        .where(eq(usersTable.email,email));


        if(users.length===0){
            // if not then create new user
            const result=await db
            .insert(usersTable)
            .values({
                //@ts-ignore
                name:name,
                email:email,
                credits:10
            }).returning();

            return NextResponse.json(result[0]);
        }

        return NextResponse.json(users[0]);
       
    } catch (e) {
        return NextResponse.json(e);
    }
    
}