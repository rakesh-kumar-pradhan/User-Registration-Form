import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, TextField, Typography } from '@material-ui/core';
import './styles/forms.css'; // Import the CSS file

const Step2Form = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    address: Yup.string().optional(),
    state: Yup.string().optional(),
    city: Yup.string().optional(),
    country: Yup.string().optional(),
    pincode: Yup.number().optional().positive('Pincode must be a positive number'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleStep2Submit = (data) => {
    validationSchema.validate(data, { abortEarly: false })
      .then(() => {
        onSubmit(data);
      })
      .catch((validationErrors) => {
        console.error(validationErrors);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleStep2Submit)} className="form-container">
      {/* First Row */}
      <div className="form-row">
        <TextField {...register('address')} label="Address"  className="form-field"  />
        <Typography color="error">{errors.address?.message}</Typography>

        <TextField {...register('state')} label="State" className="form-field"  />
        <Typography color="error">{errors.state?.message}</Typography>

        <TextField {...register('city')} label="City"  className="form-field" />
        <Typography color="error">{errors.city?.message}</Typography>
      </div>

      <div className="form-row">
        <TextField {...register('country')} label="Country"  className="form-field" />
        <Typography color="error">{errors.country?.message}</Typography>
      
        <TextField {...register('pincode')} type="number" label="Pincode"  className="form-field" />
        <Typography color="error">{errors.pincode?.message}</Typography>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Step2Form;
