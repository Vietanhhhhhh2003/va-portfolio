import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div>
      <div>
        <h2 className="text-black text-3xl mb-4">Get in Touch</h2>
        <p>If you have any questions or inquiries, feel free to reach out!</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
