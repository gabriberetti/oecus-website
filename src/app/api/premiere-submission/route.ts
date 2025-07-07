import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: Request) {
  let artistName = '', label = '', catalogCode = '', downloadLink = '', email = '', additionalInfo = ''
  
  try {
    const requestData = await request.json()
    ;({ artistName, label, catalogCode, downloadLink, email, additionalInfo } = requestData)

    // Basic validation
    if (!artistName || !label || !catalogCode || !downloadLink || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // URL validation
    try {
      new URL(downloadLink)
    } catch {
      return NextResponse.json({ error: 'Invalid download link' }, { status: 400 })
    }

    // Check if SendGrid API key exists
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key is missing')
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    // Email configuration
    const msg = {
      to: 'oecus.premiere@gmail.com',
      from: process.env.SENDGRID_VERIFIED_SENDER || 'oecus.premiere@gmail.com',
      subject: `Premiere Submission - ${artistName}`,
      text: `
New Premiere Submission

Artist: ${artistName}
Label: ${label}
Catalog: ${catalogCode}
Download Link: ${downloadLink}
Email: ${email}

${additionalInfo ? `Additional Information:\n${additionalInfo}` : ''}

--
Submitted via OECUS Website
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">New Premiere Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Artist:</strong> ${artistName}</p>
            <p><strong>Label:</strong> ${label}</p>
            <p><strong>Catalog:</strong> ${catalogCode}</p>
            <p><strong>Download Link:</strong> <a href="${downloadLink}" target="_blank">${downloadLink}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${additionalInfo ? `<p><strong>Additional Information:</strong><br>${additionalInfo.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Submitted via OECUS Website
          </p>
        </div>
      `,
      replyTo: email
    }

    console.log('Attempting to send email via SendGrid...')
    await sgMail.send(msg)
    console.log('Email sent successfully')
    
    return NextResponse.json({ message: 'Submission sent successfully!' })

  } catch (error) {
    console.error('SendGrid error:', error)
    
    // Log the submission details for manual processing
    console.log('PREMIERE SUBMISSION (Email failed):', {
      artistName,
      label,
      catalogCode,
      downloadLink,
      email,
      additionalInfo,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : String(error)
    })
    
    // More specific error messages based on SendGrid error types
    if (error && typeof error === 'object' && 'response' in error) {
      const sgError = error as any
      console.error('SendGrid response:', sgError.response?.body)
      
      if (sgError.code === 401) {
        return NextResponse.json(
          { error: 'Email service authentication failed' },
          { status: 500 }
        )
      }
      
      if (sgError.code === 403) {
        return NextResponse.json(
          { error: 'Email service permission denied - sender may not be verified' },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send submission via email',
        message: 'Your submission has been logged and we will contact you soon.'
      },
      { status: 500 }
    )
  }
} 