import { useState } from 'react';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

export default function dashboard() {
  const [state, setState] = useState(0);

  const Component = [
    {
      title: 'Add',
      link: <AddService />,
    },
    {
      title: 'Current',
      link: <Card />,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className=' flex flex-row w-full justify-around p-3'>
        <div className=' w-1/5 flex flex-row justify-around align-middle p-3 border-r-2 border-white border-solid'>
          <button
            onClick={() => {
              setState(0);
            }}
            className='py-2 px-8 border-2 border-solid border-greyish bg-white rounded-md hover:scale-105'>
            Add
          </button>
          <button
            onClick={() => {
              setState(1);
            }}
            className='py-2 px-8 border-2 border-solid border-greyish bg-white rounded-md hover:scale-105'>
            Current
          </button>
        </div>
        <div className='w-3/5 bg-white'>{Component[state].link}</div>
      </div>
      <Footer />
    </div>
  );
}
