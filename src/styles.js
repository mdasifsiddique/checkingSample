import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
  
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));



// *******

// export default makeStyles((theme) => ({
//   desktop: {
//     [theme.breakpoints.up('lg')]: {
//       display: 'none',
//     },
//   },
//   mobile: {
//     [theme.breakpoints.down('md')]: {
//       display: 'none',
//     },
//   },
//   main: {
//     [theme.breakpoints.up('lg')]: {
//       paddingBottom: '5%',
//       display:'flex',
//       width:'auto',
  
//     },
//   },
//   last: {
//     [theme.breakpoints.down('md')]: {
//       marginBottom: theme.spacing(3),
//       paddingBottom: '200px',
//     },
//   },
//   grid: {
//     '& > *': {
//       margin: theme.spacing(2),
      
//     },
//   },
//   sizeHandler: {
//     [theme.breakpoints.down('510px')]: {
//       // margin:'25px',
//       paddingBottom: '5%',
//       // display:'flex',
//       width:'200px',
  
//     },
//   },
// }));
