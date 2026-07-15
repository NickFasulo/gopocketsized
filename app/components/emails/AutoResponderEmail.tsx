interface AutoResponderEmailProps {
  name: string;
}

export const AutoResponderEmail: React.FC<Readonly<AutoResponderEmailProps>> = ({ name }) => {
  const isDev = typeof window !== 'undefined' 
    ? window.location.hostname === 'localhost'
    : process.env.NODE_ENV === 'development';

  const logoUrl = isDev 
    ? "http://localhost:3000/logo.png" 
    : "https://gopocketsized.com/logo.png"; 

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '30px', color: '#333', backgroundColor: '#fcfcfc' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>

        <h2 style={{ color: '#455157', marginTop: '0' }}>Inquiry Received.</h2>
        <p>Hi {name},</p>

        <p>Thanks for reaching out to <strong>PocketSized</strong>. We successfully received your project details.</p>
        <p>We are reviewing your requirements and will get back to you with next steps within <strong>24 business hours</strong>.</p>

        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

        <div style={{ display: 'table', width: '100%', marginTop: '20px' }}>
          <div style={{ display: 'table-cell', verticalAlign: 'middle', width: '130px' }}>
             <img 
              src={logoUrl} 
              alt="PocketSized" 
              width="120" 
              style={{ display: 'block', border: 'none', maxWidth: '100%', height: 'auto' }} 
            />
          </div>
          <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingLeft: '15px' }}>
            <p style={{ fontSize: '12px', color: '#74838b', margin: '0', lineHeight: '1.4' }}>
              Customer Experience | Software QA
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};