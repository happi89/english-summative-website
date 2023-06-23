import { connectToDB } from '@/lib/db';
import { NextRequest, NextResponse } from "next/server";
import Poll from '@/models/poll';

export async function GET(req: NextRequest) {
  try {
    await connectToDB()
    const page = req.nextUrl.searchParams.get('page')

    const polls = await Poll.find({
      page
    })

    return NextResponse.json(polls, { status: 200 })
  } catch (error) {
    console.log("🚀 ~ file: route.ts:7 ~ GET ~ error:", error)
    return NextResponse.json(error, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB()
    const id = req.nextUrl.searchParams.get('id')!
    const option = +req.nextUrl.searchParams.get('option')!

    const poll = await Poll.findById(id)
    console.log("🚀 ~ file: route.ts:28 ~ POST ~ poll:", poll)

    if (option === 1) {
      const votes = poll.option1Votes + 1
      poll.option1Votes = votes
    }

    if (option === 2) {
      const votes = poll.option2Votes + 1
      poll.option2Votes = votes
    }

    await poll.save()
    console.log("🚀 ~ file: route.ts:39 ~ POST ~ poll:", poll)


    return NextResponse.json(poll, { status: 200 })
  } catch (error) {
    console.log("🚀 ~ file: route.ts:7 ~ GET ~ error:", error)
    return NextResponse.json(error, { status: 500 })
  }
}