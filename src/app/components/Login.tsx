import React from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

interface LoginFormProps {
  username: string;
  password: string;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
}

export default function LoginForm({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
  error,
}: LoginFormProps) {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          backgroundColor: 'var(--background)',
          border: 1,
          borderColor: 'grey.300',
          borderRadius: 1,
          boxShadow: 1,
          maxHeight: '350px',
          height: '100%',
          maxWidth: '300px',
          width: '100%',
          m: 'auto',
              marginTop: '0%', // Move up
    marginLeft: 'auto', // Align to the right
    marginRight: '25%', // Space from the right edge

          '& > *': {
          my: 1, // margin top & bottom for each child
        },
      }}
    >
      <Typography variant="h4" component="h1">
        Blackbird
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={onUsernameChange}
        sx={{
          bgcolor: 'var(--background)',  // Ensures the background is light
          color: '#ededed',         // Ensures the text is appropriately colored based on theme
          opacity: 1,
          mt: 6,
          mb: 2,
          '& .MuiInputBase-input': {
            color: '#ededed', // Change text color here
          },
          '& label.Mui-focused': {
            color: 'purple',  // Color of the label when the TextField is focused
          }, '& label': {
            color: 'purple',  // Default color of the label
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey.400',  // Sets the border color
            },
            '&:hover fieldset': {
              borderColor: 'purple',  // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'purple',  // Border color when the field is focused
            },
          }
        }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={onPasswordChange}
        sx={{
          bgcolor: 'var(--background)',  // Ensures the background is light
          color: 'lightgray',         // Ensures the text is appropriately colored based on theme
          opacity: 1,
          mb: 2,
          '& .MuiInputBase-input': {
            color: '#ededed', // Change text color here
          },
              '& label.Mui-focused': {
            color: 'purple',  // Color of the label when the TextField is focused
          }, '& label': {
            color: 'purple',  // Default color of the label
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey.400',  // Sets the border color
            },
            '&:hover fieldset': {
              borderColor: 'purple',  // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'purple',  // Border color when the field is focused
            },
          }
        }}
      />
        <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
                width: {xs: '100%', sm: '100%', md: '100%'}  // Responsive widths
            }}
        >
            Login
        </Button>
    </Box>
  );
}