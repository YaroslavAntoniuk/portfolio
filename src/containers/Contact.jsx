import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/skills/github.svg';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout id="contact">
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center' }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          component={'p'}
          gutterBottom
          sx={{ textAlign: 'center', mb: 4 }}
        >
          I would love to hear from you! Whether you have a question, want to
          discuss a project, or just want to say hi, feel free to reach out.
        </Typography>
        <Typography variant="body1" gutterBottom component={'p'}>
          You can contact me via email at:{' '}
          <Link
            href="mailto:yaroslav.antoniuk.dev@gmail.com"
            color="info"
            underline='none'
          >
            yaroslav.antoniuk.dev@gmail.com
          </Link>
        </Typography>
        <Typography variant="body1" gutterBottom component={'p'}>
          Or connect with me on one of my social media platforms:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            marginTop: 2,
          }}
        >
          <Link
            sx={{ display: 'flex', alignItems: 'center' }}
            href="https://www.linkedin.com/in/yaroslav-antoniuk-855718354/"
            target="_blank"
            underline='none'
            rel="noopener"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              style={{ width: 24, height: 24, marginLeft: 8 }}
            />
            <Typography
              variant="body1"
              sx={{ display: 'inline', marginLeft: 1 }}
            >
              LinkedIn
            </Typography>
          </Link>
          <Link
            sx={{ display: 'flex', alignItems: 'center' }}
            href="https://github.com/YaroslavAntoniuk"
            target="_blank"
            underline='none'
            rel="noopener"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              style={{ width: 24, height: 24, marginLeft: 8 }}
            />
            <Typography
              variant="body1"
              sx={{ display: 'inline', marginLeft: 1 }}
            >
              GitHub
            </Typography>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
