import { useState } from 'react';
import Billing from '../components/Body/billing';
import Inventory from '../components/Body/invetory';
import Orders from '../components/Body/orders';
import Track from '../components/Body/track';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

export default function dashboard() {
  const [state, setState] = useState(0);

  const Component = [
    {
      title: 'Billing',
      link: <Billing />,
    },
    {
      title: 'Track Order',
      link: <Track />,
    },
    {
      title: 'Add Inventory',
      link: <Inventory />,
    },
    {
      title: 'Past Orders',
      link: <Orders />,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className=' flex flex-row w-full justify-around p-3'>
        <div className=' w-1/5 flex flex-col justify-around align-middle p-3 border-r-2 border-white border-solid'>
          <button
            onClick={() => {
              setState(0);
            }}
            className='py-2 px-8 border-2 border-solid border-greyish bg-white rounded-md hover:scale-105'>
            Billing
          </button>
          <button
            onClick={() => {
              setState(1);
            }}
            className='py-2 px-8 border-2 border-solid border-greyish bg-white rounded-md hover:scale-105'>
            Track Order
          </button>
          <button
            onClick={() => {
              setState(2);
            }}
            className='py-2 px-8 border-2 border-solid border-greyish bg-white rounded-md hover:scale-105'>
            Add Inventory
          </button>
          <button
            onClick={() => {
              setState(3);
            }}
            className='py-2 px-8 border-2 border-solid border-greyish bg-white rounded-md hover:scale-105'>
            Past Orders
          </button>
        </div>
        <div className='w-3/5 bg-white'>{Component[state].link}</div>
      </div>
      <Footer />
    </div>
  );
}
