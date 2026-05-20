import nodemailer from 'nodemailer'

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]

const sendJson = (response, statusCode, body) => {
  response.status(statusCode).json(body)
}

const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value)

export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const origin = request.headers.origin
  if (origin && allowedOrigins.includes(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin)
  }

  if (request.method === 'OPTIONS') {
    return response.status(204).end()
  }

  if (request.method !== 'POST') {
    return sendJson(response, 405, { message: 'Method not allowed.' })
  }

  const { EMAIL_USER, EMAIL_PASS, CONTACT_RECIPIENT } = process.env

  if (!EMAIL_USER || !EMAIL_PASS) {
    return sendJson(response, 500, {
      message: 'Email service is not configured on the server.',
    })
  }

  const { name, email, subject, message } = request.body ?? {}

  if (!name || !email || !subject || !message) {
    return sendJson(response, 400, {
      message: 'Please fill in every field before submitting.',
    })
  }

  if (!isValidEmail(email)) {
    return sendJson(response, 400, {
      message: 'Please enter a valid email address.',
    })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `Portfolio Contact <${EMAIL_USER}>`,
      replyTo: email,
      to: CONTACT_RECIPIENT || EMAIL_USER,
      subject: `Portfolio inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.7">
          <h2 style="margin-bottom:8px">New portfolio message</h2>
          <p style="margin:0 0 16px">A visitor submitted the contact form.</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-line">${message}</p>
        </div>
      `,
    })

    return sendJson(response, 200, { message: 'Message sent successfully.' })
  } catch (error) {
    return sendJson(response, 500, {
      message: 'Unable to send your message right now. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
