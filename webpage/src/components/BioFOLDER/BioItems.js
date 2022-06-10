import * as React from 'react';
import { styled } from '@mui/material/styles';
// here for the icon
import { 
  AccordionDetails, 
  Typography, 
  Accordion, 
  AccordionSummary 
} from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const MuiAccordion = styled((props) => (
   <Accordion disableGutters elevation={0} square {...props} />
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

 const MuiAccordionSummary = styled((props) => (
   <AccordionSummary
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
      <MuiAccordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}
         sx={{ 
            boxShadow:'0',
            border:'1px solid #DEDEDE4D', 
            borderRadius:'1rem', 
            backgroundColor: "#0000004D", 
            color:'inherit' 
         }}>
        <MuiAccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography variant='' sx={{ width: '100%', fontSize: '1rem' }}>{item}</Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography align='center' 
            sx={{fontWeight:'bold', textShadow: '2px 2px #0000004D'}}>
              {contents}
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
   
  );
}
