import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
         sx={{ 
            boxShadow:'0',
            border:'1px solid #DEDEDE4D', 
            borderRadius:'1rem', 
            backgroundColor: "#0000004D", 
            color:'inherit' 
         }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexGrow: '20%' }}>{item}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {contents}
          </Typography>
        </AccordionDetails>
      </Accordion>
   
  );
}
