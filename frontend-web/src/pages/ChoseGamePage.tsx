import React from 'react';
import { Container, Box } from '@mui/material';
import Card from '../components/Card.tsx';
import Grid from '@mui/material/Grid2';


function ChoseGamePage() {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <h1>Choose Game Mode</h1>
        <Grid container spacing={4} justifyContent="center">

          <Card
            image="https://i.ibb.co/7y5NTSy/1.png"
            title="Infinite Definition Mode"
            description="Click from one definition to another by clicking references within definitions."
          />

          <Card
            image="https://i.ibb.co/84H3YCC/2.png"
            title="From Definition to Definition"
            description="Navigate from one definition to another in a structured manner."
          />

          <Card
            image="https://i.ibb.co/ZdNjtvY/3.png"
            title="Definition to Definition Blitz"
            description="Quickly move from one definition to another in a blitz mode."
          />
        </Grid>
      </Box>
    </Container>
  );
}

export default ChoseGamePage;