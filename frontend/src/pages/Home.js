import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip,
  CircularProgress,
  Alert
} from '@material-ui/core';
import { useGlobalStyles } from '../styles/globalStyles';
import Header from '../components/Layout/Header';
import { fetchProjects } from '../services/api';

const Home = () => {
  const classes = useGlobalStyles();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skills] = useState([
    'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'HTML5', 'CSS3', 'Material-UI', 'Git', 'REST API'
  ]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  return (
    <Box>
      <Header />
      
      {/* Hero Section */}
      <Box id="home" className={classes.sectionContainer} bgcolor="primary.main" color="primary.contrastText">
        <Box className={classes.contentLimit}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Hi, I'm [Your Name]
          </Typography>
          <Typography variant="h5" align="center">
            Full Stack Developer | MERN Specialist
          </Typography>
        </Box>
      </Box>

      {/* About Section */}
      <Box id="about" className={classes.sectionContainer}>
        <Box className={classes.contentLimit}>
          <Typography variant="h3" className={classes.sectionTitle}>
            About Me
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I'm a passionate developer with expertise in building web applications using the MERN stack.
            With a strong foundation in JavaScript and modern web technologies, I create efficient,
            scalable, and user-friendly applications.
          </Typography>
        </Box>
      </Box>

      {/* Skills Section */}
      <Box id="skills" className={classes.sectionContainer} bgcolor="secondary.light">
        <Box className={classes.contentLimit}>
          <Typography variant="h3" className={classes.sectionTitle}>
            My Skills
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {skills.map((skill, index) => (
              <Chip 
                key={index} 
                label={skill} 
                color="primary" 
                style={{ margin: 8 }} 
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Projects Section */}
      <Box id="projects" className={classes.sectionContainer}>
        <Box className={classes.contentLimit}>
          <Typography variant="h3" className={classes.sectionTitle}>
            My Projects
          </Typography>
          
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item key={project._id} xs={12} sm={6} md={4}>
                  <Card style={{ height: '100%' }}>
                    {project.imageUrl && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.imageUrl}
                        alt={project.title}
                      />
                    )}
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {project.description}
                      </Typography>
                      <Box mt={2}>
                        {project.technologies.map((tech, index) => (
                          <Chip 
                            key={index} 
                            label={tech} 
                            size="small" 
                            style={{ margin: 4 }} 
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>

      {/* Contact Section */}
      <Box id="contact" className={classes.sectionContainer} bgcolor="secondary.light">
        <Box className={classes.contentLimit}>
          <Typography variant="h3" className={classes.sectionTitle}>
            Get In Touch
          </Typography>
          {/* Contact form would go here */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;