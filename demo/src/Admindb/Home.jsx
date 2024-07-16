import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'


function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
        <div className='card'>
                <div className='card-inner'>
                    <h3>DEAN</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
            </div>
            
            <div className='card'>
                <div className='card-inner'>
                    <h3>FACULTY</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REPORTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
            </div>
            
        </div>

        
    </main>
  )
}

export default Home