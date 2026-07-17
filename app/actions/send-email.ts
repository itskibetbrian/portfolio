"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string
  const attachment = formData.get("attachment") as File | null

  if (!name || !email || !message || !service) {
    return { error: "Name, email, service, and message are required fields." }
  }

  // Use a default sender address configured in Resend
  const senderEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"
  
  // Send to the email specified in .env.local, or fallback to the registered Resend account
  const destinationEmail = process.env.RESEND_TO_EMAIL || "dunnybyegon@gmail.com"

  try {
    let attachments = []
    if (attachment && attachment.size > 0) {
      const buffer = Buffer.from(await attachment.arrayBuffer())
      attachments.push({
        filename: attachment.name,
        content: buffer,
      })
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact Form <${senderEmail}>`,
      to: destinationEmail,
      replyTo: email,
      subject: `New message from ${name} via Portfolio`,
      attachments: attachments.length > 0 ? attachments : undefined,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service Needed: ${service}

Message:
${message}
      `,
    })

    if (error) {
      return { error: error.message }
    }

    return { success: true }
  } catch (error) {
    return { error: "Failed to send email. Please try again later." }
  }
}
