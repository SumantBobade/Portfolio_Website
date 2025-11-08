import {Box, Container, Typography, Divider} from '@mui/material';
import PerkCard from './PerkCard';
import {useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import HandymanIcon from '@mui/icons-material/Handyman';
import HttpIcon from '@mui/icons-material/Http';
import DevicesIcon from '@mui/icons-material/Devices';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StorageIcon from '@mui/icons-material/Storage';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

gsap.registerPlugin(ScrollTrigger);


const perksArray = [
  {
    title: 'AI & Machine Learning',
    Icon: PsychologyIcon, // you can import this from @mui/icons-material/Psychology
    text: 'I build AI-powered systems that learn, adapt, and improve. From NLP tools to intelligent automation and recommendation systems, I use frameworks like TensorFlow and Hugging Face to create data-driven, scalable solutions.',
  },
  {
    title: 'Full-Stack Development',
    Icon: StorageIcon, // import from @mui/icons-material/Storage
    text: 'I develop scalable, user-focused applications with clean architecture. Using Next.js, Python, and REST APIs, I craft both intuitive front-ends and high-performance back-ends that bring ideas to life.',
  },
  {
    title: 'Game Development',
    Icon: SportsEsportsIcon, // import from @mui/icons-material/SportsEsports
    text: 'My journey began with Unity3D, where I designed gameplay systems and AI-driven mechanics using C#. I now merge that creativity with engineering to build interactive and immersive digital experiences.',
  },
  {
    title: 'Continuous Support',
    Icon: HandymanIcon, // already imported
    text: 'I ensure your software stays efficient and reliable. Using agile and DevOps practices, I handle updates, performance tuning, and feature rollouts that keep your projects evolving smoothly.',
  },
];

const Perks = () => {

    

    useEffect(() => {
        MainTitleAnimation('.h1','.h2')
    }, [])

    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        my: '4em'
    }}>
        <Box sx={centeredStyles}>
            <Typography
                className='h1 t25o0'
                variant='h1'
                sx={{
             
                fontSize: {
                    xs: '2.2em',
                    sm: '2.5em',
                    md: '3em'
                }
            }}
                fontWeight='600'>
                You&lsquo;re Safe And in Good Hands
            </Typography>
            <Typography
                variant='h2'
                className='secondary h2'
                sx={{
                pt: '1.5em',
                transform: 'translateY(15px)',
                opacity: 0,
                maxWidth: '570px',
                fontSize: {
                    xs: '.8em',
                    sm: '1em'
                }
            }}>
                Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service.
            </Typography>

            <Box
                sx={{
                mt: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5%',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                }
            }}>
                {perksArray.map(perk => {
                    return <PerkCard  key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                })}
            </Box>
        </Box>
    </Container> < Divider /> </>)
}

export default Perks