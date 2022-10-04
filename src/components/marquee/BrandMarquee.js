import Marquee from 'react-fast-marquee';

import BRANDS_DATA from 'data/BrandsData';

import './Marquee.css';

const BrandMarquee=()=>{
    return (
		<Marquee className="horizontal" direction="left" speed={40} pauseOnHover={true}>
			{BRANDS_DATA.map(brand=>(
                <div key={brand.id} className="image"><img src={brand.url} alt="brand" /></div>
			))}
		</Marquee>
    );
}

export default BrandMarquee;