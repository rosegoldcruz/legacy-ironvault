import Navbar from '../components/Navbar'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'

export const metadata = {
  title: 'Contact | Iron Vault Token',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
    </>
  )
}
