import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper
} from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Terms & Conditions of Privacy Policy
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            Welcome to PCMC Divyang Bhavan Foundation. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you register on our platform. By registering with us, you agree to the collection and use of information in accordance with this policy.
          </Typography>
          <Typography variant="body1" paragraph>
            When you register on our platform, we may collect personal data, including but not limited to your name, email address, phone number, postal address, and any other details necessary to provide our services.
          </Typography>
          <Typography variant="body1" paragraph>
            We may collect information on how our service is accessed and used. This may include information such as your computer's Internet Protocol address (IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Cookies and Tracking Technologies:
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </Typography>
          <Typography variant="h6" gutterBottom>
            The information we collect from you is used for the following purposes:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                To create and manage your account.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                To process transactions and send you related information, including purchase confirmations and invoices.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                To communicate with you, including sending you service updates, marketing communications, and other information.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                To improve our website and service offerings.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                To monitor and analyze usage and trends to improve your experience.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:
          </Typography>
          <Typography variant="body1" paragraph>
            Service Providers: We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related tasks, or assist us in analyzing the use of our service.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
