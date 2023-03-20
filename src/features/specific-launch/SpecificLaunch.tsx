import { useParams } from 'react-router-dom'
import { useGetSpecificLaunchQuery } from '../launch-grid/launchApi';

function SpecificLaunch() {
  const { id } = useParams();
  const { data, isLoading } = useGetSpecificLaunchQuery(`${id}`);

  return (
    <div>
      {data ?
        (
          <div data-testid='test-1' className='specific-launch-view-container'>
            <section className='specific-launch-view'>
              <h1>{data.name}</h1>
              <img src={data.links.patch.small}></img>
              <p>{data.details}</p>
            </section>
          </div>
        ) : isLoading
      }
    </div>
  )
}

export default SpecificLaunch