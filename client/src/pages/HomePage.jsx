import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {
  membersOptionsTournament,
  membersOptionsLeague,
  membersOptionsCompetition,
} from "../constants";
import Card from '../components/Card';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
export default function HomePage({setGetPath, setTitle, setGetMembersOption}) {
  const [currentstats, setCurrentstats] = useState([]);
  const [laststats, setLastStats] = useState([]);
  const navigate = useNavigate();
  const TournamentSlides = [
    {
      title: "Create New Tournament",
      discription:
        "Customize your own tournament and play with your friends for the title.",
      icon:<EmojiEventsIcon fontSize='large'/>,
      click: async function () {
        await setGetPath("createnewtournament");
        await setTitle("Tournament");
        await setGetMembersOption(membersOptionsTournament);
        navigate("/createnewtournament");
      },
    },
    {
      title: "Tournament stats",
      list: currentstats.length > 0 ? currentstats : ["No stats yet"],
    },
    {
      title: "Last Tournament",
      list: laststats.length > 0 ? laststats : ["No Tournaments yet"],
    },
  ];
  const LeagueSlides = [
    {
      title: "Create New League",
      discription: "Customize your own league and add your friends and let's see who will be the champion.",
      icon:<MilitaryTechIcon fontSize='large'/>,
      click: async function(){
        await setGetPath('createnewleague');
        await setTitle("League")
        await setGetMembersOption(membersOptionsLeague);
        navigate("/createnewleague");
      }
    },
    {
      title: "League stats",
      list: currentstats.length > 0 ? currentstats : ["No stats yet"],
     
    },
    {
      title: "Last League",
      list: laststats.length > 0 ? laststats : ["No Leagues yet"],
    },
  ];
  const CompetitionSlides = [
    {
      title: "Create New Competition",
      discription:
        "Customize your own competition between friend and let's see who will have the best records.",
      icon: <ScoreboardIcon fontSize="large" />,
      click: async function () {
        await setGetPath("createnewcompetition");
        await setTitle("Competition");
        await setGetMembersOption(membersOptionsCompetition);
        navigate("/createnewcompetition");
      },
    },
    {
      title: "Competition stats",
      list: currentstats.length > 0 ? currentstats : ["No stats yet"],
    },
    {
      title: "Last Competition",
      list: laststats.length > 0 ? laststats : ["No Competitions yet"],
    },
  ];
  return (
    <div className='p-10 relative'>
      <div>
      <Card slides={TournamentSlides}/>
      <Card slides={LeagueSlides}/>
      <Card slides={CompetitionSlides}/>
      </div>
      </div>
  );
}
