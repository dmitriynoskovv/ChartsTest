import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiGrid: {
      variants: [
        {
          props: { variant: 'general' },
          style: {
            height: '100vh',
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
      ],
    },
  },
});

export const globalStyles = {
  body: {
    margin: 0,
  },
};
