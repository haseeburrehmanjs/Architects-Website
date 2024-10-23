import React from 'react'

const MissionStateMent = () => {
    return (
        <section className='container mx-auto p-4 mt-20'>
            <div>
                <h1 className='sm:text-6xl text-5xl text-gray-400 sm:text-left text-center'>Main Focus/Mission Statement</h1>
                <div className='flex justify-between flex-wrap'>
                    <div className='flex gap-5 items-center '>
                        <h1 className='text-[200px] font-bold text-gray-200'>1</h1>
                        <p className='text-[22px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Sed efficitur, lectus et <br /> facilisis placerat.</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <h1 className='text-[200px] font-bold text-gray-200'>2</h1>
                        <p className='text-[22px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed efficitur, lectus et <br /> facilisis placerat, magna mauris porttitor <br /> tortor, a auctor est felis ut nisl.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionStateMent
