'use client'
 
import Image from 'next/image'
import { useState } from 'react'

export default function Banner({bannerdata}) {

const [selectedTeamOdds,setselectedTeamOdds] = useState([]);
const handelSelection = async (teamid,option) => {
let teamsArray = selectedTeamOdds;
let obj = teamsArray.find(o => o.team === teamid && o.option===option);

let teams = null;
if(obj)
{
    teams = teamsArray.filter(function(o) { return o.team != teamid && o.option!=option ; });    
} else {
    let findodd = teamsArray.find(o => o.team === teamid && o.option!=option);
    if(findodd)
    {
    teams = teamsArray.filter(function(o) { return o.team != teamid; });  
    } else {
        teams = teamsArray;
    }
    teams = [...teams,{
        "team":  teamid,
        "option" : option
        }];  
}
await setselectedTeamOdds(teams);
}
  return (
    <div className='header-banner'>
    <div className='header-banner-content'>
     <div className='row'>
        <div className='col-12'>
            <ul className='header-breadcrumb'>
             <li className='breadcrumb-country-name'>
                <span className='team-logo'>   
                 <Image
      src={bannerdata.countryIcon}
      width={16}
      height={16}
      alt="Sport Icon"
    /></span> {bannerdata.countryName}
             </li>
             <li>
             {bannerdata.leagueName}
             </li>
            </ul>
        </div>
     </div>
     <div className='row'>
        <div className='col-12'>
            <div className='teams-name-scores'>
            <div className='team-1'>
            <div className='team-1-name'>
           { bannerdata.teams[0].teamName}
            </div> 
            <div className='team-1-score'>
            { bannerdata.teams[0].teamScore}
            </div> 
            </div>
            <div className='team-2'>
            <div className='team-2-name'>
            { bannerdata.teams[1].teamName}
            </div> 
            <div className='team-2-score'>
            { bannerdata.teams[1].teamScore}
            </div> 
            </div>
            </div>

        </div>
     </div>
     <div className='row'>
        <div className='col-4'>
            <button className={
                selectedTeamOdds.find(o => o.team === bannerdata.uid && o.option==1) ? ('banner-footer-style banner-footer-center selectedOdd') : ('banner-footer-style banner-footer-center')
            } 
            onClick={()=>handelSelection(bannerdata.uid,1)}>
                <div className='banner-footer-left-text'>
                    1
                </div>
                <div className='banner-footer-left-value'>
                { bannerdata.teams[1].odds}
                </div>
            </button>
        </div>
        <div className='col-4'>
            <button className={
                selectedTeamOdds.find(o => o.team === bannerdata.uid && o.option==0) ? ('banner-footer-style banner-footer-center selectedOdd') : ('banner-footer-style banner-footer-center')
            }
            
            onClick={()=>handelSelection(bannerdata.uid,0)}>
                <div className='banner-footer-center-text'>
                    Draw
                </div>
                <div className='banner-footer-center-value'>
                { bannerdata.draw}
                </div>
            </button>
        </div>
        <div className='col-4'>
            <button className={
                selectedTeamOdds.find(o => o.team === bannerdata.uid && o.option==2) ? ('banner-footer-style banner-footer-center selectedOdd') : ('banner-footer-style banner-footer-center')
                } onClick={()=>handelSelection(bannerdata.uid,2)}>
                <div className='banner-footer-center-text'>
                    2
                </div>
                <div className='banner-footer-center-value'>
                { bannerdata.teams[1].odds}
                </div>
            </button>
        </div>
     </div>
     
     </div>
    </div>
  )
}