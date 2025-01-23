import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from 'emailjs-com';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'success') {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.indexOf("@") === -1) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setMessage('Sending...');

  
    const serviceID = 'service_dvaawdn';
    const templateID = 'template_s5hckqs';
    const userID = 'QMR1ZIZCv6XgZIhLbc88';

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, { email }, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setStatus('success');
        setMessage('Thank you for subscribing!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('error');
        setMessage('Failed to send email. Please try again later.');
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
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
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};