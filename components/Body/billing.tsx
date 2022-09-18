import { useState } from 'react';
export default function Billing() {
  const [orderInput, updateOrderInput] = useState({
    Product: {
      Serial_NO: '',
      Name: '',
      Model: '',
      Color: '',
      Product_Set_ID: '',
      Price: '',
    },
    Order_ID: '',
    POS_ID: '',
    Customer_MiID: '',
    Status: '', // DELIVERED, IN-PROCESS, COMPLETED
    Delivery_Mode: '', // SELF, STORE
    Delivery: {
      FlatNo: '',
      Street: '',
      Line1: '',
      Line2: '',
    },
    Delivery_Agent_ID: '', // IF_EXISITS
    Invoice_no: '',
    Sales_Agent_ID: '',
  });

  return (
    <div>
      <div>
        <h1>POS_ID</h1>
      </div>
      <div className='bg-white flex items-center rounded-lg w-2/3 my-3'>
        <label className=' text-black w-48  h-12 flex items-center justify-center'>
          {' '}
          Customer Mi ID
        </label>
        <input
          className='rounded-l bg-whiteish text-black w-full px-4 py-3 mx-2 text-gray leading-tight focus:outline-none'
          type='text'
          onChange={(e) =>
            updateOrderInput({ ...orderInput, Customer_MiID: e.target.value })
          }
          placeholder='Eg: Enter Cutomer Mi ID'
        />
        <button className=' text-black rounded-lg border-2 border-solid hover:scale-95  focus:outline-none w-24 h-12 flex items-center justify-center'>
          check
        </button>
      </div>
    </div>
  );
}
