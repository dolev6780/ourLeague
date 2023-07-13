import React, {useState, useEffect } from 'react'
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
  
  const [tournamentDetails, setTournamentDetails] = useState({});
  const [tournamentMembers, setTournamentMembers] = useState([]);
  const [leagueDetails, setLeagueDetails] = useState({});
  const [leagueMembers, setLeagueMembers] = useState([]);
  const [competitionDetails, setCompetitionDetails] = useState({});
  const [competitionMembers, setCompetitionMembers] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const getData = () => {
      const tournamentMembers = localStorage.getItem("TournamentMembers");
    const tournamentDetails = localStorage.getItem("TournamentDetails");
    if (tournamentDetails && tournamentMembers) {
      setTournamentDetails(JSON.parse(tournamentDetails));
      setTournamentMembers(JSON.parse(tournamentMembers));
    }
    const leagueDetails = localStorage.getItem("LeagueDetails");
    const leagueMembers = localStorage.getItem("LeagueMembers");
    if (leagueDetails && leagueMembers) {
      setLeagueDetails(JSON.parse(leagueDetails));
      setLeagueMembers(JSON.parse(leagueMembers));
    }
    const competitionDetails = localStorage.getItem("CompetitionDetails");
    const competitionMembers = localStorage.getItem("CompetitionMembers");
    if (competitionDetails && competitionMembers) {
      setCompetitionDetails(JSON.parse(competitionDetails));
      setCompetitionMembers(JSON.parse(competitionMembers));
    }
  }
  return getData();
  }, [])
  const TournamentSlides = [
    {
      title: "Create New Tournament",
      description:
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
      details: Object.keys(tournamentDetails).length > 0 ? tournamentDetails : ["No stats yet"],
      members:tournamentMembers.length > 0 ? tournamentMembers : [""],
      click: async function () {
        navigate("/tournamentstats");
      }
    },
    {
      title: "Last Tournament",
      details: Object.keys(tournamentDetails).length > 0 ? tournamentDetails : ["No stats yet"],
      members:tournamentMembers.length > 0 ? tournamentMembers : [""],
    },
  ];
  const LeagueSlides = [
    {
      title: "Create New League",
      description: "Customize your own league and add your friends and let's see who will be the champion.",
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
      details: Object.keys(leagueDetails).length > 0 ? leagueDetails : ["No stats yet"],
      members:leagueMembers.length > 0 ? leagueMembers : [""],
      click: async function () {
        navigate("/leaguestats");
      }
     
    },
    {
      title: "Last League",
      details: Object.keys(leagueDetails).length > 0 ? leagueDetails : ["No stats yet"],
      members:leagueMembers.length > 0 ? leagueMembers : [""],
    },
  ];
  const CompetitionSlides = [
    {
      title: "Create New Competition",
      description:
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
      details: Object.keys(competitionDetails).length > 0 ? competitionDetails : ["No stats yet"],
      members:competitionMembers.length > 0 ? competitionMembers : [""],
      click: async function () {
        navigate("/competitionstats");
      }
    },
    {
      title: "Last Competition",
      details: Object.keys(competitionDetails).length > 0 ? competitionDetails : ["No stats yet"],
      members:competitionMembers.length > 0 ? competitionMembers : [""],
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
