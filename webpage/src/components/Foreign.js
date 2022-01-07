import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import ExitToAppIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import potluck_thumb from '../assets/images/potluck_home.png';
// import anywhere_thumb from '../assets/images/anywhere_dashboard1.png';
// import nasa_thumb from '../assets/images/nasa_home.png';


const ExpandMore = styled((props) => {
  //  console.log(props)
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const LikedProj = styled((props)=>{ 
  // console.log(props)
  const { like, ...other } = props
  return <IconButton {...other} />;
})(({ theme, like }) => ({
  color: !like ? 'gray' : red[400],
  // transition: theme.transitions.create('color', {
  //   transition:
  // })
}));

export default function ProjectOverviewCard(props) {
   const { likes, proj_name, role, linkFor, bullet1, bullet2, bullet3, icon_color } = props;
  //  console.log(linkFor, bullet2, props.image);
  const [ expanded, setExpanded ] = React.useState(false);
  const [ liked, setLiked ] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () =>{
     console.log('show me', linkFor)
  }

  const handleLike = () =>{
    setLiked(!liked);
    console.log(likes)
  }

  const abbv = `${proj_name}`.split(' ').map(x => x[0]).join('');


  return (
    <Card sx={{ minWidth: 345, maxWidth: 345 , margin: '1%'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: icon_color }} aria-label="recipe"> {abbv} </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon /* //todo:make a modal to open for viewing more options  */ />
          </IconButton>
        }
        title={proj_name}
        subheader={`Role: ${role}`}
      />
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt="Potluck Project"
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary"></Typography>
        <Typography variant="body2"> as;dklfj </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <LikedProj 
          like={liked} 
          onClick={handleLike}
          aria-checked={liked}
          aria-label='add to favorites'
        >
            <FavoriteIcon />
        </LikedProj>

        <IconButton aria-label="share">
          <ExitToAppIcon onClick={handleLinkClick} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
             {bullet1}
          </Typography>
          <Typography paragraph>
            {bullet2}
          </Typography>
          <Typography paragraph>
            {bullet3}
          </Typography>
          {/* <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}