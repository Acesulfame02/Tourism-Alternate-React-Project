import '../Style_Sheets/DestinationStyles.css';
import DestinationData from './DestinationData';

const Destination = () =>{
    return(
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Start your Journey at one of these sites.</p>
            <DestinationData
                heading="Kalambo Falls"
                text="Kalambo Falls is a spectacular natural landmark located in Zambia, Africa. It is one of the tallest waterfalls on the continent and is situated on the Kalambo River, which forms the border between Zambia and Tanzania.

                The falls have a total height of approximately 772 feet (235 meters), making them one of the highest single-drop waterfalls in the world. The Kalambo River plunges over the cliffs, creating a breathtaking cascade of water that is a sight to behold.

                What adds to the beauty of Kalambo Falls is its remote and untouched location. The surrounding area is characterized by lush greenery, dramatic cliffs, and rugged terrain, providing a stunning backdrop for the waterfall. The falls are situated within the Kalambo Falls Archaeological Site, which is also of historical and archaeological significance.

                Aside from its natural beauty, Kalambo Falls holds cultural and historical importance. The area around the falls has been inhabited for thousands of years, and archaeological excavations have uncovered artifacts and evidence of human settlement dating back to the Stone Age. The Kalambo Falls site is known for its ancient occupation and the presence of a Stone Age archaeological site.

                For visitors, Kalambo Falls offers a remarkable opportunity to experience the awe-inspiring power of nature while being immersed in a pristine and relatively untouched environment. The surrounding area provides opportunities for hiking, birdwatching, and exploring the rich biodiversity of the region.

                Overall, Kalambo Falls in Zambia is a captivating natural wonder that combines breathtaking beauty with historical significance, making it a must-visit destination for nature enthusiasts, adventure seekers, and those interested in the cultural heritage of the region.
            "
                img1={require('../Images/kalambo_falls.jpg')}
                cName='first-des'
                img2={require('../Images/img3.jpg')}
            />
            <DestinationData
                heading="Victoria Falls"
                text="Victoria Falls, located on the border of Zambia and Zimbabwe, is one of the most 
                renowned natural wonders in the world. With its immense width of about 1.7 kilometers 
                and a height of 108 meters, Victoria Falls is the largest waterfall globally, forming the
                 largest sheet of falling water on Earth. The falls, known locally as 'Mosi-oa-Tunya,' 
                 meaning 'The Smoke that Thunders,' create a mesmerizing spectacle as the mighty
                  Zambezi River plunges into a deep gorge, creating clouds of mist and a powerful roar. 
                  The area surrounding Victoria Falls is teeming with lush rainforest, offering 
                  breathtaking views and a diverse ecosystem. It is a popular tourist destination, 
                  attracting visitors who come to witness the grandeur of this natural phenomenon and 
                  partake in various activities like wildlife safaris, thrilling adventures, and cultural 
                  experiences. Victoria Falls is an iconic symbol of Africa's natural beauty and a 
                  must-visit destination for travelers worldwide."
                img1={require('../Images/img.jpg')}
                img2={require('../Images/victoria_1.jpg')}
                cName='first-des-reverse'
            />
        </div>
    );
}

export default Destination;