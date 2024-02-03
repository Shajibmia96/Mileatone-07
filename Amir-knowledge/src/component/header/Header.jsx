// eslint-disable-next-line no-unused-vars
import React from 'react';
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4  border-b-2'>
            <h1 className='text-3xl font-bold'>Amir-knowledge-cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;