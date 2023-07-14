'use client'
 import Banner from './Banner'
import data from '../../../data/livematchdata.json';

export default function Main({couponUpdate,couponBet}) {

  return (
   
        <div className='row'>
  
          {data.map((bannerData)=> {
            return(
          <div className='col-md-6'>
          <Banner bannerdata={bannerData} couponUpdate={couponUpdate} couponBet={couponBet}/>
          </div>
          )})}
  
        </div>


  )
}