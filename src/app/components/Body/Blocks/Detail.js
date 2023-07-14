'use client'
 
import Image from 'next/image'
import { useState } from 'react'

export default function Detail({matchdata}) {
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
  console.log(teams);
  await setselectedTeamOdds(teams);
  }
  
  return (
    <div className='game-main-block'>
     <div className='row'>
      <div className='col-10'>
        <ul className='game-main-block-header'>
        <li> <Image
      src={matchdata.countryIcon}
      width={16}
      height={16}
      alt="Sport Icon"
    /></li>
        <li>{matchdata.countryName}</li>
        <li>-</li>
        <li>{matchdata.leagueName}</li>
        </ul>
      </div>
      <div className='col-2'>
        <div className='chart-area'>
        <i className="bi bi-bar-chart-fill"></i>
        </div>
      </div>
     </div>
     <div className='row'>
          <div className='col-12'>
            <div className='sport-time-area'>
              <div className='sport-time'>
                <p className='m-0'>{matchdata.time}</p>
              </div>
              <div className='shirt-icon-area'>
              <Image
      src="/assets/images/shirt.svg"
      width={16}
      height={16}
      alt="Sport Icon"
    />
              </div>
              <div className='bars-icon-area'>
              <Image
      src="/assets/images/bars.svg"
      width={16}
      height={16}
      alt="Sport Icon"
    />
              </div>

            </div>
          </div>
        </div>
      <div className='row'>
        <div className='col-12'>
          <div className='sport-teams-area'>
            <div className='sport-team-1'>
              <div className='sport-team-1-logo'>
              <Image
      src={matchdata.teams[0].teamLogo}
      width={15}
      height={15}
      alt="Sport Icon"
    />
              </div>
              <div className='sport-team-1-name'>
                <p className='m-0'>{matchdata.teams[0].teamName}</p>
                </div>
            </div>
            <div className='sport-team-2'>
              <div className='sport-team-2-logo'>
              <Image
      src={matchdata.teams[1].teamLogo}
      width={15}
      height={15}
      alt="Sport Icon"
    />
              </div>
              <div className='sport-team-2-name'>
                <p className='m-0'>{matchdata.teams[1].teamName}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
       <div className='number-area'>
        <p className='m-0'>{matchdata.bidtype}</p>
       </div>
      </div>
      <div className='row'>
        <div className='detail-footer-btns'>
          <ul className='deatil-btnlist'>
            <li className='lengthy-btn'>
              <button className={
              selectedTeamOdds.find(o => o.team === matchdata.uid && o.option==1) ?  'btn-1 detail-btn selectedOdd' : 'btn-1 detail-btn'
              }
              onClick={()=>handelSelection(matchdata.uid,1)}
              >
                <div className='detail-btn-text'>
                  1
                </div>
                <div className='detail-btn-value'>
                {matchdata.teams[0].odds}
                </div>
              </button>
            </li>
            <li  className='lengthy-btn'>
            <button className={
              selectedTeamOdds.find(o => o.team === matchdata.uid && o.option==0) ?  'btn-1 detail-btn selectedOdd' : 'btn-1 detail-btn'
              }
              onClick={()=>handelSelection(matchdata.uid,0)}
              >
                <div className='detail-btn-text'>
                Draw
                </div>
                <div className='detail-btn-value'>
                {matchdata.draw}
                </div>
              </button>
            </li>
            <li  className='lengthy-btn'>
            <button className={
              selectedTeamOdds.find(o => o.team === matchdata.uid && o.option===2) ?  'btn-1 detail-btn selectedOdd' : 'btn-1 detail-btn'
              }
              onClick={()=>handelSelection(matchdata.uid,2)}
              >
                <div className='detail-btn-text'>
                  2
                </div>
                <div className='detail-btn-value'>
                {matchdata.teams[1].odds}
                </div>
              </button>
              </li>
              <li>
              <button className='btn-3 detail-btn'>
                <div className='detail-btn-dropdown'>
                <i className="bi bi-chevron-down"></i>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}