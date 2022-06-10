import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Accordion from '@mui/material/Accordion';
// here for the icon
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
 ))(({ theme }) => ({
    margin: '1%',
   border: `1px solid ${theme.palette.divider}`,
   '&:not(:last-child)': {
     borderBottom: 0,
   },
   '&:before': {
     display: 'none',
   },
 }));

 const AccordionSummary = styled((props) => (
   <MuiAccordionSummary
     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#FFFFFF' }} />}
     {...props}
   />
 ))(({ theme }) => ({
   backgroundColor:
     theme.palette.mode === 'dark'
       ? '#000004D'
       : '#0000033',
   flexDirection: 'row-reverse',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
     color: '#FFFFFF33',
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
   const [expanded, setExpanded] = React.useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

  return (
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
         sx={{ 
            boxShadow:'0',
            border:'1px solid #DEDEDE4D', 
            borderRadius:'1rem', 
            backgroundColor: "#0000004D", 
            color:'inherit' 
         }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h4' sx={{ width: '100%', flexShrink: 0 }}>{item}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align='center' 
            sx={{fontWeight:'bold', textShadow: '2px 2px #0000004D'}}>
              {contents}
          </Typography>
        </AccordionDetails>
      </Accordion>
   
  );
}
