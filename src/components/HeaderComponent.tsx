import { StackLayout, Card, CardBody } from '@progress/kendo-react-layout';

export default function HeaderComponent() {
  return (
    <Card className="k-p-8">
      <CardBody>
        <StackLayout orientation="horizontal" gap={40} className="k-align-items-center">
          <div className="k-text-center">
            <img 
              src="/van.jpg" 
              alt="Sun Chaser Van" 
              className="k-rounded-lg k-shadow-md"
              style={{ 
                width: '150px', 
                height: '150px', 
                objectFit: 'cover',
                animation: 'fadeInScale 0.8s ease-out'
              }} 
            />
          </div>
          <StackLayout orientation="vertical" className="k-flex-1">
            <h1 
              className="k-text-primary k-font-weight-bold k-mb-2"
              style={{ 
                fontSize: '3rem',
                margin: 0,
                animation: 'slideInLeft 0.8s ease-out 0.2s both'
              }}
            >
              🚐 Sun Chaser
            </h1>
            <p 
              className="k-text-muted k-font-size-lg"
              style={{ 
                margin: 0,
                animation: 'slideInLeft 0.8s ease-out 0.4s both'
              }}
            >
              Solar-Powered Van Life Dashboard
            </p>
            <p 
              className="k-text-primary k-font-size-md k-font-italic"
              style={{ 
                margin: '8px 0 0 0',
                animation: 'slideInLeft 0.8s ease-out 0.6s both'
              }}
            >
              ⚡ Living the dream, one solar panel at a time
            </p>
          </StackLayout>
        </StackLayout>
      </CardBody>
    </Card>
  );
}
