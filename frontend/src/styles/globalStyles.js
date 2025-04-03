import { makeStyles } from '@material-ui/core/styles';

export const useGlobalStyles = makeStyles((theme) => ({
  sectionContainer: {
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8),
    },
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionTitle: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  contentLimit: {
    maxWidth: 1200,
    margin: '0 auto',
    width: '100%',
  },
}));