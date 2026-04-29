import ContactForm from '@/components/homepage/ContactForm'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'تواصل معنا',
  description: 'تواصل معنا الآن... فريقنا سيتواصل معك خلال أقل من ساعة',
}

const page = () => {
  return <ContactForm />
}

export default page
