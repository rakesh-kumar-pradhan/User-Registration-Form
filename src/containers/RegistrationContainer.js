import React, { useState } from 'react';
import Step1Form from '../components/Step1Form';
import Step2Form from '../components/Step2Form';
import DataTable from '../components/DataTable';

const RegistrationContainer = () => {
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);


  const handleStep1Next = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentStep(2);
  };

  const handleStep2Submit = (data) => {
    const newUser = { id: users.length + 1, ...formData, ...data };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentStep(1);
  };

  return (
    <div>
       {currentStep === 1 && <Step1Form onNext={handleStep1Next} />}
      {currentStep === 2 && <Step2Form onSubmit={handleStep2Submit} />}
      <DataTable users={users} />
    </div>
  );
};

export default RegistrationContainer;
