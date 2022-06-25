import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
// here for the icon
import { 
  AccordionDetails, 
  Typography, 
  Accordion, 
  AccordionSummary 
} from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import theme from '../../assets/styles/themes';

const MuiAccordion = styled((props) => (
   <Accordion disableGutters elevation={0} square {...props} />
 ))(({ theme }) => ({
   fontWeight: 'bold',
   textShadow: `1px 1px #0000004d`,
    margin: '1%',
   border: `1px solid ${theme.palette.divider}`,
   '&:not(:last-child)': {
     borderBottom: 0,
   },
   '&:before': {
     display: 'none',
   },
 }));

 const MuiAccordionSummary = styled((props) => (
   <AccordionSummary
     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', textShadow:'1px 1px #000000', color: theme.palette.tertiary.text }} />}
     {...props}
   />
 ))(({ theme }) => ({
   backgroundColor:
     theme.palette.mode === 'dark'
       ? '#000004D'
       : '#0000033',
   flexDirection: 'row-reverse',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
     transform: 'rotate(90deg)',
   },
   '& .MuiAccordionSummary-content': {
     marginLeft: theme.spacing(1),
   },
 }));

export default function ControlledAccordions(props) {
   let {
      item,
      contents
   } = props 
   const [expanded, setExpanded] = useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

  return (
    <>
      <MuiAccordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}
         sx={{ 
            boxShadow:'3',
            border:'1px solid #DEDEDE4D', 
            borderRadius:'1rem', 
            backgroundColor: "#00000090", 
            color:'inherit' 
         }}>
        <MuiAccordionSummary onBlur={handleChange(!expanded)} aria-controls="panel-content" id="panel-header">
          <Typography variant='paragraph' sx={{ width: '100%', fontSize: '1.2rem' }}>{item}</Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography align='center' 
            sx={{fontWeight:'bold', textShadow: '1px 1px #000000', fontSize:'0.9rem'}}>
              {contents}
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
    </>
  );
}
