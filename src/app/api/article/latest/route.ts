import { getLatestActivityList } from '@/lib/microcms'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
    const response = NextResponse.json(await getLatestActivityList(4))
    response.headers.set('Cache-Control', 'public, max-age=3600')
    return response
}
