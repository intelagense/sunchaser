import { Button } from '@progress/kendo-react-buttons';
import { TextBox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { Card, CardBody, CardTitle, CardHeader, StackLayout } from '@progress/kendo-react-layout';
import { useState } from 'react';

export default function FooterComponent() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mailto link for now
    const subject = encodeURIComponent('Sun Chaser Contact');
    const body = encodeURIComponent(`Email: ${email}\n\nMessage: ${message}`);
    window.open(`mailto:contact@intelagense.com?subject=${subject}&body=${body}`);
  };

  return (
    <Card>
      <CardBody>
        <StackLayout orientation="horizontal" gap={40}>
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <StackLayout orientation="vertical" gap={20}>
                  <div>
                    <Label editorId="email">Email</Label>
                    <TextBox
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(String(e.target.value))}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label editorId="message">Message</Label>
                    <TextBox
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(String(e.target.value))}
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit">
                    📧 Send Message
                  </Button>
                </StackLayout>
              </form>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Follow Me</CardTitle>
            </CardHeader>
            <CardBody>
              <StackLayout orientation="vertical" gap={20}>
                <Button 
                  onClick={() => window.open('https://twitter.com/intelagense', '_blank')}
                >
                  🐦 Twitter
                </Button>
                <Button 
                  onClick={() => window.open('https://github.com/intelagense', '_blank')}
                >
                  💻 GitHub
                </Button>
                <Button 
                  onClick={() => window.open('https://intelagense.com', '_blank')}
                >
                  🌐 Website
                </Button>
              </StackLayout>
            </CardBody>
          </Card>
        </StackLayout>
        
        <div className="k-text-center k-p-4">
          <p>
            © 2024 Sun Chaser by Intelagense
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
