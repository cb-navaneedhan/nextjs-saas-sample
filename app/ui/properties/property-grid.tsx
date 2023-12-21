import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import PropertyCard from './property-card';
import { Property } from '../../lib/definitions';
import { fetchProperties } from '@/app/lib/data';

export default async function PropertyCardGrid() {

  const properties = await fetchProperties();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          properties.map((property) => (
            <Grid xs={2} sm={4} md={4} key={property.id}>
              <PropertyCard property={property}/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}