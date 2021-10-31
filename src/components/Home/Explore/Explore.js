import React from 'react';
import './Explore.css'
const Explore = () => {
    return (
        <div className='container bg-color-explore my-4'>
            <h1 class="text-center p-4 text-color-services mb-3">Explore Bangladesh</h1>
            <p className='explore-about'>Bangladesh being the largest riverine delta of the world is still today as if looks like a magical tapestry of green woven intricately by unspoiled nature. Bangladesh is blessed with some of the world's splendid and enchanting eco-tourism spots of diverse nature - the Sundarbans forest - the home of Royal Bengal Tiger stands as the largest mangrove forest of the world with wide range of wildlife habitat and world heritage area. The archaeological wonder of Mohasthangarh, the biggest Buddhist monastery of Paharpur and the Sat Gambud Mosque, the other world heritage area along with the world's longest unbroken sandy sea beach at Cox's Bazar, the tranquil coastal islands like St. Martin, the ,largest tea garden at Srimongal, the enchanting tribal life of Chittagong hill districts of Rangamati, Bandarban on the slope of luminous valleys covered with the virgin forest and the m magnificent lake of Kaptai, Rangamati constitute the most attractive destination of the new millennium. As such Bangladesh is considered as one of the most potential country for ecotourism among the South Asian countries. Explore Bangladesh and discover the exciting virgin land, meet the most friendly and hospitable people with rich cultural heritage.</p>
            <div>
                <iframe className='d-block mx-auto' width="60%" height="300" src="https://www.youtube.com/embed/rDYdeq3JW_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Explore;