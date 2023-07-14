'use client'
 import Banner from './Banner'
import data from '../../../data/livematchdata.json';

export default function Main({couponUpdate,couponBet}) {

  return (
   
        <div className='row'>
  
          {data.map((bannerData,index)=> {
            return(
          <div className='col-md-6' key={index}>
          <Banner bannerdata={bannerData} couponUpdate={couponUpdate} couponBet={couponBet}/>
          </div>
          )})}
  
        </div>


  )
}