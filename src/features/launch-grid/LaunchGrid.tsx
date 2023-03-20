import { useNavigate } from 'react-router-dom';
import { ReactChild, ReactFragment, ReactNode, ReactPortal } from 'react';
import { useGetAllLaunchesQuery } from './launchApi';

function LaunchGrid() {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllLaunchesQuery('launches');

  function handleSelect(e: any) {
    navigate(`/${e.target.value}`);
  }

  return (
    <>
      <div  className='launch-grid-container'>
        <section className='launch-grid'>
          {data ?
            (data.map((launch: {
              name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
              date_local: ReactNode;
              links: any;
              id: string;
            }) => {
              return (
                <div key={launch.id} className='launch-element'>
                  <h1>{launch.name}</h1>
                  <p>Date: {launch.date_local}</p>
                  <div className='launch-links'>
                    <a target='_blank' href={launch.links.webcast}>Launch Video</a>
                    <a target='_blank' href={launch.links.wikipedia}>Wikipedia Article</a>
                  </div>
                  <button onClick={handleSelect} value={launch.id}>More</button>
                </div>
              )
            })) : isLoading
          }
        </section>
      </div>
    </>
  )
}

export default LaunchGrid