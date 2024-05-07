import React from 'react'

const Example = () => {
  return (
    <div className='grid h-screen place-content-center bg-neutral-900 p-12'>
        <FloatingPhone />
    </div>
  );
};

const FloatingPhone = () => {
    return (
        <div className='rounded-[24px bg-violet-500'>
            <div className='relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white pl-[3px] p-1 bg-neutral-900 border-t-neutral-200 border-l-neutral-200 pt-[3px]'></div>

        </div>
    )
}

export default Example