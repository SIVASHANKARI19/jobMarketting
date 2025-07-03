
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Register=()=> {
  const [activeStep, setActiveStep] = React.useState(0);
  const [userType, setUserType] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    skills: '',
    experience: '',
  });

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setUserType('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      qualification: '',
      skills: '',
      experience: '',
    });
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // 🚩 Here you can POST formData to your backend
    console.log('Submitted Data:', { userType, ...formData });
    handleNext();
  };

  const steps = [
    {
      label: 'Select Job Seeker Type',
      content: (
        <FormControl component="fieldset">
          <FormLabel component="legend">Are you a...</FormLabel>
          <RadioGroup value={userType} onChange={handleUserTypeChange}>
            <FormControlLabel value="white-collar" control={<Radio />} label="White-Collar Professional" />
            <FormControlLabel value="blue-collar" control={<Radio />} label="Blue-Collar Worker" />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      label: 'Fill Profile Details',
      content: (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Full Name" name="name" value={formData.name} onChange={handleInputChange} />
          <TextField label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} />
          {userType === 'white-collar' && (
            <>
              <TextField label="Email" name="email" value={formData.email} onChange={handleInputChange} />
              <TextField label="Qualification" name="qualification" value={formData.qualification} onChange={handleInputChange} />
            </>
          )}
          <TextField label="Skills" name="skills" value={formData.skills} onChange={handleInputChange} />
          <TextField label="Experience (years)" name="experience" value={formData.experience} onChange={handleInputChange} />
        </Box>
      ),
    },
    {
      label: 'Review & Submit',
      content: (
        <Box>
          <Typography variant="subtitle1">Review your details:</Typography>
          <pre>{JSON.stringify({ userType, ...formData }, null, 2)}</pre>
          <Typography>Click Submit to finish registration.</Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              {step.content}
              <Box sx={{ mb: 2 }}>
                {index < steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={index === 0 && !userType}
                  >
                    Continue
                  </Button>
                )}
                {index === steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Submit
                  </Button>
                )}
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>✅ Registration complete!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
export default Register;
