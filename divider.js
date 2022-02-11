import  * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




const Root = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'left',
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const t = () => {
var res =`Criminal Court of Appeal:`;
  return  res
 };

export default function DividerText() {
  const content = (
    <div>
      <Box sx={{
        width: '100%', maxWidth: 700, p: 0,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#088'), fontSize: '0.875rem', borderRadius: 100,
        fontWeight: '700',
        position: 'absolute',
        top: 100,
        left: '22%',
        zIndex: 'modal'
      }}>

        <table>
          <tr>
            <td>
     
              <CircularProgressbar  text={t()} strokeWidth={5} background styles={buildStyles({
                
          
                textSize: '9px', 
                textColor: '#000',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
              />





            </td>
            <td>
              <typography position='absolute'>-Within every governorate, there is one or more courts of appeal. </typography><br />
              <typography>-The Court of Appeal consists of 3 judges: a president and two consultants.</typography><br />
              <typography>-The public prosecution is represented before the Court of Appeal by theAppellate Public Prosecutor or an Attorney General.</typography>
            </td>
          </tr>
        </table>


      </Box>


    </div>



  );
  return (
    <Root>
      {content}
    </Root>
  );
}
