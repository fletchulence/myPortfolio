import React, { Suspense, useEffect } from 'react';
import axios from "axios";
import { styled } from '@mui/material/styles'; //! might want to consider changing this to styledComponents
import { 
  Badge,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert'
// own imports
import theme from '../assets/styles/themes';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.longest,
  }),
}));

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.secondary.light,
    color: "white",
  }
});

const LikedProj = styled((props) => {
  const { like, ...other } = props
  return <IconButton {...other} />;
})(({ theme, like }) => ({
  color: like ? red[400] : 'grey',
  transition: theme.transitions.create('color', {
    // transition: 
  })
}));


export default function ProjectOverviewCard(props) {

  let {
    proj_name,
    role,
    linkFor,
    github_link,
    bullets,
    // icon_color, //! unused for the purposes of styling -- might change later
    image
  } = props;
  const [ expanded, setExpanded ] = React.useState(false);
  const [ liked, setLiked ] = React.useState(false)
  const [ likeNum, setLikeNum ] = React.useState();
  const [ projectBody, setProjectBody ] = React.useState({})

  useEffect (() => {
    axios.get(`http://localhost:9222/api/projects/${props.project_id}`)
      .then(res =>{
        setLikeNum(res.data.project_likes)
        setProjectBody(res.data)
      })
      .catch(err => err.message)
    }, []);
        
  // this will handle the clicks and the
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false)
  }

  const handleErrorClick = ()=>{
    alert('-- these arent working just yet -- Come back soon for the revamp!')
  }

  const handleLinkClick = () => {
    if (linkFor){
      window.open(linkFor, '_blank')
    } else if (github_link) {
      window.open(github_link, '_blank')
    } else return alert('Link isnt working, please reach out to me via contact link below')
  }

  const handleLikeClick = () => {
    if (liked === true) {
      setLiked(!liked);
      setLikeNum(likeNum - 1);
    } else {
      setLiked(!liked);
      setLikeNum(likeNum + 1);
      // console.log('not supposed')
    }
    
    // updateLikes(props.project_id, {
    //   project_likes: likeNum,
    //   // project_content: null
    // })
    console.log('LIKENUM', likeNum)
  }

  useEffect(()=>{
    updateLikes()
  }, [likeNum])
  
  function updateLikes(id, project){
    axios.put(`http://localhost:9222/api/projects/${id}`, project)
      .then(res =>{
        console.log('RESPONSE.data', res.data.project_likes)
        setProjectBody(res.body)
        res.body = project
        console.log('PROJECT ', project)
        // return project
      }) 
      .catch(err => console.error(err))     
  }
    // useEffect(() => {
    //   // console.log(likeNum)
    //   axios.put(`http://localhost:9222/api/projects/${props.project_id}`, project)
    //   // try {

    //   // } catch(err){
    //   //   console.error(err.message)
    //   // }
    //     .then(res =>{
    //       // console.log(likeNum)
    //       res.send({ project_likes: likeNum })
    //       // return likeNum
    //     })
    //     .catch(err => {
    //     })
    // })

  // abbreviations for the Proj tags
  const abbv = `${proj_name}`.split(' ').map(x => x[0]).join('');

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Card
          sx={{
            minWidth: 345,
            maxWidth: '80%',
            margin: '1%',
            color: theme.palette.primary.dark,
            backgroundColor: theme.palette.tertiary.text
          }}>
          <CardHeader /* sx={{ fontWeight: 'bold' }} */
            avatar={
              <Avatar sx={{ bgcolor: theme.palette.secondary.light, /* textShadow:`1px 1px ${theme.palette.primary.dark}` */ }} aria-label="recipe"> {abbv.slice(0, 2)} </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={handleErrorClick}>
                <MoreVertIcon  /* //todo:make a modal to open for viewing more options  */ />
              </IconButton>
            }
            titleTypographyProps={{ fontWeight: 'medium' }}
            title={proj_name}
            subheader={`${role}`}
          /> 
          <CardMedia
            onClick={handleExpandClick}
            component="img"
            height="200"
            image={image}
            alt="Potluck Planner Project"
          />
          <CardActions disableSpacing>
            <LikedProj
              aria-checked={liked}
              aria-label='add to favorites'
              like={liked}
              onClick={() => handleLikeClick(likeNum)}
            >
              <StyledBadge badgeContent={likeNum}>
                <FavoriteIcon />
              </StyledBadge>
            </LikedProj>

            {/* for the app link icon */}
            <IconButton aria-label="External Link" onClick={handleLinkClick} >
              <ExitToAppIcon />
            </IconButton>
            <ExpandMore
              // telling the expand to close if there is something else clicked
              // onBlur={handleClose}
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
              <Typography variant='h4'>Notables:</Typography>
              <Typography variant='body1'
                sx={{ 
                  marginRight: '8%', 
                  // border: '1px solid green'
                }}
              > {bullets} </Typography>
              {/* <Typography variant='inherit'> {bullet2} </Typography>
              <Typography variant='inherit'> {bullet3} </Typography> */}
            </CardContent>
          </Collapse>
        </Card>
      </Suspense>
    </>
  );
}