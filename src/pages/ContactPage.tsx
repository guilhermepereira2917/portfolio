import { ReactNode } from "react";
import Wrapper from "../components/common/Wrapper";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function ContactPage(): ReactNode {
  return (
    <Wrapper>
      <Header />
      <ContactForm />
      <Footer />
    </Wrapper>
  )
}