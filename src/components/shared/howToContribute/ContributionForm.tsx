import React, { useState } from 'react';

interface ContributionFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  // Add form fields as needed
  name: string;
  email: string;
  // Add more fields as needed
}

const ContributionForm: React.FC<ContributionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    // Initialize other fields
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add validation logic here if needed
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      {/* Add more form fields as needed */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContributionForm;
