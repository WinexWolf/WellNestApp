import React from 'react';

export default function BreathingInProgress({ stage }) {

    const data = {
        'breathe_in': {
            imgSrc: '../../images/play/breathe_in.png',
            text: 'Breathe in...'
        },
        'breathe_out': {
            imgSrc: '../../images/play/breathe_out.png',
            text: 'Breathe out...'
        }
    };


    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img
                    src={data[stage].imgSrc}
                    alt={`${stage} Image`}
                    className="w-48 pt-32 pb-32"
                />
            </div>
            <div className='text-center text-24px'>{data[stage].text}</div>
        </div>
    );
}