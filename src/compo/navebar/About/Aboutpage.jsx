import React from 'react'
import loptop from '../images/loptop.jpg'
import '../About/about.css'
const Aboutpage = () => {
    return (
        <div className='container-fluid ms-lg-5 me-auto'>
            <div className='row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2'>
                <div className='col'>
                    <div className='details ms-lg-5'>
                        <span className='text-danger'>How it Started</span>
                        <h1 className='mt-4 mb-4'>Our Dream is Global Learning Transformation</h1>
                        <div className='paragraph mt-5'>
                            <p>An About Us page exists to share a business’ story and history and provide a deeper connection with customers.
                                Consumers want to know the team behind the brand they are supporting. An About Us page provides the perfect real estate to pull back the curtain and reveal who is working behind the scenes.
                                Most importantly, though, an About Us page facilitates trust between the consumer and the business.
                                More than 33% of consumers say that “trust” is a core factor when deciding which businesses to support.
                                With an About Us page, you can begin to form an emotional relationship with customers and engage with them on a deeper level.
                                So how can you create one that resonates? Let’s look at some of the components you need to include in your About Us page.</p>
                        </div>
                    </div>
                </div>
                <div className='col d-flex justify-content-around'>
                        <img src={loptop} alt='pics' className='img-fluid mt-5 animated' />
                    </div>
            </div>
        </div>
    )
}

export default Aboutpage