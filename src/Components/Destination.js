import '../Style_Sheets/DestinationStyles.css';

const Destination = () =>{
    return(
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Start your Journey at one of these sites.</p>
            <div className = 'first-des'>
                <div className='des-text'>
                    <h2>Kalambo Falls</h2>
                    <p>
                        Kalambo Falls is a spectacular natural landmark located in Zambia, Africa. It is one of the tallest waterfalls on the continent and is situated on the Kalambo River, which forms the border between Zambia and Tanzania.

                        The falls have a total height of approximately 772 feet (235 meters), making them one of the highest single-drop waterfalls in the world. The Kalambo River plunges over the cliffs, creating a breathtaking cascade of water that is a sight to behold.

                        What adds to the beauty of Kalambo Falls is its remote and untouched location. The surrounding area is characterized by lush greenery, dramatic cliffs, and rugged terrain, providing a stunning backdrop for the waterfall. The falls are situated within the Kalambo Falls Archaeological Site, which is also of historical and archaeological significance.

                        Aside from its natural beauty, Kalambo Falls holds cultural and historical importance. The area around the falls has been inhabited for thousands of years, and archaeological excavations have uncovered artifacts and evidence of human settlement dating back to the Stone Age. The Kalambo Falls site is known for its ancient occupation and the presence of a Stone Age archaeological site.

                        For visitors, Kalambo Falls offers a remarkable opportunity to experience the awe-inspiring power of nature while being immersed in a pristine and relatively untouched environment. The surrounding area provides opportunities for hiking, birdwatching, and exploring the rich biodiversity of the region.

                        Overall, Kalambo Falls in Zambia is a captivating natural wonder that combines breathtaking beauty with historical significance, making it a must-visit destination for nature enthusiasts, adventure seekers, and those interested in the cultural heritage of the region.
                    </p>
                </div>
                <div className='images'>
                    <img alt='JourneyPhoto' src={require('../Images/kalambo_falls.jpg')} />
                    <img alt='JourneyPhoto' src={require('../Images/img3.jpg')} />
                </div>
            </div>
        </div>
    );
}

export default Destination;