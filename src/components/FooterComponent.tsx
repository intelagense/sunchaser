import { StackLayout } from '@progress/kendo-react-layout';
import { TextBox, TextArea } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';

interface FieldRenderProps {
  validationMessage?: string;
  touched?: boolean;
  label?: string;
  id?: string;
  valid?: boolean;
  disabled?: boolean;
  hint?: string;
  type?: string;
  optional?: boolean;
  value?: any;
  onChange?: (value: any) => void;
  placeholder?: string;
  [key: string]: any;
}

const FormInput = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, placeholder, ...others } =
    fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <div className={'k-form-field-wrap'}>
        <TextBox
          valid={valid}
          type={type}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          aria-describedby={`${hintId} ${errorId}`}
          {...others}
        />
      </div>
    </FieldWrapper>
  );
};

const FormTextArea = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, hint, disabled, optional, placeholder, ...others } =
    fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return (
    <FieldWrapper>
      <Label editorId={id} editorValid={valid} optional={optional}>
        {label}
      </Label>
      <div className={'k-form-field-wrap'}>
        <TextArea
          valid={valid}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          aria-describedby={`${hintId} ${errorId}`}
          {...others}
        />
      </div>
    </FieldWrapper>
  );
};

const PhotoUpload = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, optional, value, onChange, placeholder } =
    fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.size <= 2 * 1024 * 1024) { // 2MB limit
        onChange?.(file);
      } else {
        alert('Please select an image smaller than 2MB');
      }
    }
  };

  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <div className={'k-form-field-wrap'}>
        <input
          type="file"
          id={id}
          accept="image/*"
          onChange={handleFileChange}
          disabled={disabled}
          placeholder={placeholder}
          aria-describedby={`${hintId} ${errorId}`}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
        {value && (
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            Selected: {value.name}
          </div>
        )}
      </div>
    </FieldWrapper>
  );
};

export default function FooterComponent() {
  const handleSubmit = (dataItem: { [name: string]: any }) => {
    if (dataItem.name && dataItem.message && dataItem.photo) {
      // Create guest book entry data
      const guestBookEntry = {
        name: dataItem.name,
        message: dataItem.message,
        photo: dataItem.photo,
        timestamp: new Date().toISOString()
      };

      // Here you would typically send this to your backend API
      // For now, we'll just log it and show a success message
      console.log('Guest book entry:', guestBookEntry);

      // Simulate API call for thermal printer
      // In a real implementation, you'd send this to your backend
      // which would then format and print to the thermal printer
      alert(`Thanks ${dataItem.name}! Your note "${dataItem.message}" with photo has been queued for printing in the van! 📝`);

      // Reset form (this would be handled by the form state management)
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#F8F5F2', 
      padding: '30px 20px',
      borderTop: '1px solid #E6E2DD'
    }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
        <StackLayout orientation="vertical" gap={20}>
          <div>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: '1.1rem',
              fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
              fontWeight: '600',
              color: '#2B211D'
            }}>
              Loving the build?
            </h3>
            <p style={{
              margin: '0 auto 20px auto',
              fontSize: '0.9rem',
              fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
              color: '#6B5F5B',
              maxWidth: '400px'
            }}>
              Leave a message here and it'll instantly print out on my dollar store looking thermal receipt printer. I'll see it the next time I'm in the van in full potato quality.
            </p>
          </div>

          <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
              <FormElement style={{ width: '100%', margin: '0 auto' }}>
                <Field
                  name="message"
                  component={FormTextArea}
                  label="Message"
                  placeholder="love notes, hate mail, shopping lists, etc"
                  rows={2}
                  maxLength={200}
                />
                <Field
                  name="name"
                  component={FormInput}
                  label="Signed"
                  placeholder="Maybe your name or @handle"
                />
                <Field
                  name="photo"
                  component={PhotoUpload}
                  label="Picture (will be severely downscaled)"
                  required
                />
                <div className="k-form-buttons" style={{ textAlign: 'center', marginTop: '16px' }}>
                  <Button
                    type="submit"
                    disabled={!formRenderProps.allowSubmit}
                    style={{
                      backgroundColor: '#FF9E3D',
                      borderColor: '#FF9E3D',
                      color: 'white',
                      padding: '10px 24px',
                      borderRadius: '6px',
                      fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}
                  >
                    Send it
                  </Button>
                </div>
              </FormElement>
            )}
          />
          
          <div style={{
            paddingTop: '16px',
            borderTop: '1px solid #E6E2DD',
            marginTop: '8px'
          }}>
            <p style={{
              margin: 0,
              fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
              color: '#8B7F7B',
              fontSize: '0.8rem'
            }}>
              © 2024 Sun Chaser by{' '}
              <a 
                href="https://intelagense.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#6B5F5B',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                intelagense
              </a>
            </p>
          </div>
        </StackLayout>
      </div>
    </div>
  );
}
