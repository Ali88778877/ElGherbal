import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import {FcSearch} from 'react-icons/fc'
import {BsPinAngleFill} from 'react-icons/bs'
import {MdDoubleArrow} from 'react-icons/md'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import {GiSmashArrows} from 'react-icons/gi'




const languages=[
  {
code: 'ar',
name: 'العربية',
country_code: 'sa'

},
{
  code: 'en',
  name: 'English',
  country_code: 'gb'
  
  },
]
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'left',
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const sen1 = () => {
  var res =`Imprisonment,
  preventive detention
  or a fine of more than
  five hundred thousand
  Lebanese pounds.`;
    return  res
   };

export default function App() {
  const t = useTranslation();
  const content = (
    <div>
      
        
  
      <Box sx={{
        width: '100%', maxWidth: 700,height:'80%',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#fff'), fontSize: '0.875rem',
        fontWeight: '700',
        position: 'absolute',
        top: 277,
        left: '22%',
        zIndex: 'modal'
      }}>
        
<h3>Their jurisdiction: <LinearProgress variant="buffer" color="primary" sx={{width:120}}/></h3>



        <table >
          <tr>

            <td valign='top'>
            <MdDoubleArrow fontSize={30}   />
            </td>

            <td >
            <p>The Court of Appeal considers the appeal of all judgments issued by the Criminal Single Judge
in the cases of misdemeanors, provided that they shall have been settled in the merits of the
dispute.
However, if they were not settled in the merits of the dispute, they shall be appealed with the
final judgment only.</p>       
</td>

          </tr>

          <tr><td></td>
        <td ><h3>With the exception of:</h3></td>
          
          </tr>
          <tr>
            <td valign='top'>
            <MdDoubleArrow fontSize={30}  />
            </td>

            <td>
            <p>The appeal of decisions that settle one or more of the formal defenses stipulated in Article 73 of
the Criminal Procedures Code shall be accepted.</p>
          
</td></tr>
<tr>
            <td valign='top'>
            <MdDoubleArrow fontSize={30} />
          
            </td>
            <td>

            <p>Decisions by which the Single Judge terminates the lawsuit without addressing its subject matter</p>
          
</td></tr>
<tr>
            <td valign='top'>
            <MdDoubleArrow fontSize={30}  />
          
            </td>
            <td>

            <p>Decisions issued on accepting or revoking the release requests.</p>
          
</td></tr>

<tr>
            <td>
            <FcSearch fontSize={40}/>
          
            </td>
            <td>

            <p>The Court of Appeal considers the appeal of the judgments issued by the Criminal Single
Judge in the cases of violations, provided that they shall be on:</p>
          
</td></tr>

<tr>
            <td>
     
              <CircularProgressbar strokeWidth={5} background styles={buildStyles({
                
          
                textSize: '9px', 
                textColor: '#000',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
              />





            </td>

            <td>
     
 
     
     <CircularProgressbar strokeWidth={5} background styles={buildStyles({
       
 
       textSize: '9px', 
       textColor: '#000',
       trailColor: '#d6d6d6',
       backgroundColor: '#3e98c7',
     })}
     />





   </td>

   <td>
     
 
     
     <CircularProgressbar strokeWidth={5} background styles={buildStyles({
       
 
       textSize: '9px', 
       textColor: '#000',
       trailColor: '#d6d6d6',
       backgroundColor: '#3e98c7',
     })}
     />





   </td>

   <td>
     
 
     
     <CircularProgressbar strokeWidth={5} background styles={buildStyles({
       
 
       textSize: '9px', 
       textColor: '#000',
       trailColor: '#d6d6d6',
       backgroundColor: '#3e98c7',
     })}
     />





   </td>
            </tr>


<tr>

<td>
  <BsPinAngleFill fontSize={40}/>

</td>
<td>
  <p>
  The Court of Appeal is entitled, when exercising its tasks, to listen to witnesses, interrogate
the parties of the lawsuit, invite new witnesses, appoint an expert, listen to experts and carry
out any new investigations it deems appropriate...
  </p>
</td>

</tr>


<tr><h3>Delay of appeal: <LinearProgress variant="buffer" color="primary" sx={{width:160}}/></h3></tr>
<tr><h3 style={{backgroundColor:"Background", color:"#fff"}}>Final judgments:</h3></tr>
</table>

      </Box>
<Box sx={{
        width: '20%', maxWidth: 700,borderRadius:50,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#888'), fontSize: '0.875rem',
        fontWeight: '700',
        position: 'absolute',
        top: 1530,
        left: '22%',
        zIndex: 'modal'
      }}>
        <h5 style={{textAlign:'center'}}>With respect to the plaintiff, defendant, responsible for money, and guarantor, the delay is 15 days:</h5>
 
        <GiSmashArrows fontSize={50} sx={{
        }
        } />

<p>
As of the date of its issuance if it
is made in presentia.
As of the date of being notified
whether it is made in presentia
or absentia.
</p>
</Box>

<Box  sx={{
        width: '20%', maxWidth: 700,borderRadius:50,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#888'), fontSize: '0.875rem',
        fontWeight: '700',
        position: 'absolute',
        top: 1530,
        left: '44%',
        zIndex: 'modal'
      }}>
        <h5 style={{textAlign:'center'}}>With respect to the Appellate Public Prosecutor, the delay is one month:</h5>
        <GiSmashArrows fontSize={50} top={700} />

<p>
As of the date of issuance of
the judgment
</p>
</Box>
<Box sx={{
        width: '20%', maxWidth: 700,borderRadius:50,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#888'), fontSize: '0.875rem',
        fontWeight: '700',
        position: 'absolute',
        top: 1530,
        left: '66%',
        zIndex: 'modal'
      }}>
       
        
        <h5 style={{textAlign:'center'}}>With respect to the Appellate Public Prosecution, the delay is two months:</h5>
        <GiSmashArrows fontSize={50} />

<p>
As of the date of issuance
of the judgment
</p>

</Box>




    </div>
   


  );
  return (
    <Root>
    {content}
     </Root>
  );
}
