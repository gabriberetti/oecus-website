import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: Request) {
  try {
    const { artistName, label, catalogCode, downloadLink, email, additionalInfo } = await request.json()

    // Basic validation
    if (!artistName || !label || !catalogCode || !downloadLink || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Email configuration
    const msg = {
      to: 'oecus.premiere@gmail.com',     // Where the submission will be sent
      from: 'oecus.premiere@gmail.com',   // Must be a verified SendGrid sender
      subject: `Premiere Submission - ${artistName}`,
      text: `
New Premiere Submission

Artist: ${artistName}
Label: ${label}
Catalog: ${catalogCode}
Link: ${downloadLink}
Email: ${email}

${additionalInfo ? `Notes: ${additionalInfo}` : ''}
      `,
      replyTo: email  // Where replies will go (submitter's email)
    }

    await sgMail.send(msg)
    return NextResponse.json({ message: 'Submission sent successfully' })

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send submission' },
      { status: 500 }
    )
  }
} 