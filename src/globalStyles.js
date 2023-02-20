import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      height: '100%',
      width: '100%',
    },
    body: {
      height: '100%',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
    },
  },
});
