export default function Body() {
  return (
    <div className=' flex flex-col lg:mx-64 mx-auto lg:my-5 my-24 lg:px-4 lg:w-3/4 w-10/12'>
      <div className=' text-5xl lg:w-3/4 pt-5 font-semibold'>
        <u> Mi.Biz </u>
      </div>
      <div className='text-blueish py-5 lg:px-2 text-2xl lg:w-3/4 w-full font-semibold'>
        ~ A all in one platform to track and manage our POS and orders
      </div>
      <div className=' flex flex-col justify-between max-w-xl'>
        <div className=' flex flex-col justify-between py-2'>
          <label className=' font-semibold'>*Mi id</label>
          <input
            className='p-3 border-2 border-solid border-greyish bg-white'
            type='text'
            placeholder='Enter you Mi id'></input>
        </div>
        <div className=' flex flex-col justify-between py-2'>
          <label className=' font-semibold'>*Password</label>
          <input
            className=' p-3 border-2 border-solid border-greyish bg-white '
            type='text'
            placeholder='Enter yor Password'></input>
        </div>
      </div>
      <div className=' py-10 z-10 w-full'>
        <h1>Don&apos;t have a account? Sign-up here!!</h1>
        <div className='flex flex-row '>
          <button className='bg-orange m-2 shadow-lg hover:scale-95 cursor-pointer hover:brightness-125 rounded-xl lg:px-10 lg:py-3 p-3 text-white lg:text-2xl text-xl text-center'>
            Login
          </button>
          <button className='bg-orange m-2 shadow-lg hover:scale-95 cursor-pointer hover:brightness-125 rounded-xl lg:px-10 lg:py-3 p-3 text-white lg:text-2xl text-xl text-center'>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
