import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Bonnie <bonnie.wang.423@gmail.com>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
    
      react: EmailTemplate({ firstName: 'John' }) as React.ReactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}