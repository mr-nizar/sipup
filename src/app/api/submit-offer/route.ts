import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, price, message } = body

    // Validate required fields
    if (!name || !email || !price) {
      return NextResponse.json(
        { error: 'Name, email, and price are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate minimum price
    const numericPrice = parseFloat(price)
    if (isNaN(numericPrice) || numericPrice < 790) {
      return NextResponse.json(
        { error: 'Minimum offer price is $790' },
        { status: 400 }
      )
    }

    // Create ZAI instance for potential AI processing
    const zai = await ZAI.create()

    // Prepare offer data
    const offerData = {
      name,
      email,
      price: numericPrice,
      message: message || '',
      domain: 'sipup.com.tr',
      timestamp: new Date().toISOString(),
      ip: request.ip || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    }

    // Log the offer (in production, you'd save to database)
    console.log('New domain offer received:', offerData)

    // Optional: Use AI to analyze the offer or generate response
    try {
      const analysis = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a domain sales assistant. Analyze this offer and provide a brief assessment.'
          },
          {
            role: 'user',
            content: `New offer for sipup.com.tr: Name: ${name}, Email: ${email}, Price: $${price}, Message: ${message || 'No message'}`
          }
        ],
        max_tokens: 150,
        temperature: 0.3
      })

      console.log('AI Analysis:', analysis.choices[0]?.message?.content)
    } catch (aiError) {
      console.error('AI Analysis failed:', aiError)
      // Continue without AI analysis
    }

    // In a real implementation, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Update analytics
    // 4. Potentially trigger automated responses

    return NextResponse.json({
      success: true,
      message: 'Offer submitted successfully',
      offerId: Math.random().toString(36).substr(2, 9) // Generate temporary ID
    })

  } catch (error) {
    console.error('Error submitting offer:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}