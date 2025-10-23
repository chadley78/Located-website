import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Verify the secret to ensure the request is from Sanity
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      )
    }

    // Get the path to revalidate from the request body
    const body = await request.json()
    const path = body.path || '/'

    // Revalidate the specified path
    revalidatePath(path)

    // Also revalidate homepage when any content changes
    if (path !== '/') {
      revalidatePath('/')
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path,
    })
  } catch (error) {
    console.error('Error revalidating:', error)
    return NextResponse.json(
      { message: 'Error revalidating', error },
      { status: 500 }
    )
  }
}



