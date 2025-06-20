import './ContactMe.scss';

const ContactMe = () => {
    return (
        <div className="contacts-box">
            <h3 className="contacts-title">Contact Me</h3>
            <p className="contacts-subtitle">
            Have a project or a question? Let’s get in touch.
            </p>
            <form className="contacts-form">
            <label>
                Your Name
                <input type="text" name="name" placeholder="John Doe" required />
            </label>

            <label>
                Email Address
                <input type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label>
                Your Message
                <textarea name="message" rows="4" placeholder="Type your message..." required></textarea>
            </label>

            <button type="submit" className="contacts-button">Send Message</button>
            </form>
            <p className="contacts-email">
            Or email me at <a href="mailto:samolazov.roman.alex@gmail.com">samolazov.roman.alex@gmail.com</a>
            </p>
        </div>
    );
};

export default ContactMe;