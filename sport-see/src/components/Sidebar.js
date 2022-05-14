import React from 'react';

/**
 * Sidebar of menu
 * 
 * Call from {@link Profile}
 * 
 * @component
 */
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <img src="/img/iconpilate.png" alt="pilate" />
            <img src="/img/iconswiming.png" alt="swiming" />
            <img src="/img/iconbiking.png" alt="biking" />
            <img src="/img/iconhaltero.png" alt="haltero" />

            <div className='vertical'>Copiryght, SportSee 2020</div>
        </div>
    );
};

export default Sidebar;