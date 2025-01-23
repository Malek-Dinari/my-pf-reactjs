import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // 'idle', 'sending', 'success', 'error'
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setMessage("Sending...");

    // EmailJS credentials
    const serviceID = "service_dvaawdn"; // Replace with your actual Service ID
    const templateID = "template_s5hckqs"; // Replace with your actual Template ID
    const userID = "QMR1ZIZCv6XgZIhLbc88"; // Replace with your actual User ID

    try {
      // Send email using EmailJS
      const response = await emailjs.send(serviceID, templateID, { email }, userID);
      console.log("Email sent successfully!", response);
      setStatus("success");
      setMessage("Thank you for subscribing!");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setMessage("Failed to send email. Please try again later.");
    } finally {
      // Reset the form after submission
      setEmail("");
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert variant="info">Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};