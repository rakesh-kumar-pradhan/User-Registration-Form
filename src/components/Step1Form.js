import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from '@material-ui/core';
import './styles/forms.css'; // Import the CSS file

const Step1Form = ({ onNext }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    age: yup.number().required('Age is required').positive('Age must be a positive number'),
    sex: yup.string().required('Sex is required').oneOf(['Male', 'Female'], 'Invalid Sex'),
    mobile: yup
      .string()
      .required('Mobile is required')
      .matches(/^[6-9]\d{9}$/, 'Invalid Indian Mobile Number'),
    govtIdType: yup.string().oneOf(['Aadhar', 'PAN'], 'Invalid ID Type'),
    govtId: yup.string().required('Govt Id is required')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleNext = (data) => {
    validationSchema.validate(data, { abortEarly: false })
      .then(() => {
        onNext(data);
      })
      .catch((validationErrors) => {
        console.error(validationErrors);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleNext)} className="form-container">
      {/* First Row */}
      <div className="form-row">
        <TextField {...register('name')} label="Name" className="form-field" />
        <TextField {...register('age')} type="number" label="Age" className="form-field" />
        <FormControl className="form-field">
          <InputLabel>Sex</InputLabel>
          <Select {...register('sex')}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Second Row */}
      <div className="form-row">
        <TextField {...register('mobile')} label="Mobile" className="form-field" />
        <FormControl className="form-field">
          <InputLabel>Govt Issued ID Type</InputLabel>
          <Select {...register('govtIdType')}>
            <MenuItem value="Aadhar">Aadhar</MenuItem>
            <MenuItem value="PAN">PAN</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Third Row */}
      <div className="form-row">
        <TextField {...register('govtId')} label="Govt Issued ID" className="form-field" />
      </div>

      {/* Grouped Error Messages */}
      <div className="error-container">
        {Object.values(errors).map((error, index) => (
          <Typography key={index} color="error" className="error-message">
            {error?.message}
          </Typography>
        ))}
      </div>

      {/* Submit Button with Styling */}
      <Button type="submit" variant="contained" color="primary" className="submit-button">
        Next
      </Button>
    </form>
  );
};

export default Step1Form;
