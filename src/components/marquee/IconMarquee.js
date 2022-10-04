import Marquee from 'react-fast-marquee';

import ICONS_DATA from 'data/IconsData';

import './Marquee.css';

const IconMarquee=()=>{
    return (
		<Marquee className="horizontal" direction="right" speed={40} pauseOnHover={true}>
			{ICONS_DATA.map(icon=>(
				<div key={icon.id} className="icon">{icon.iconName}</div>
			))}
		</Marquee>
    );
}

export default IconMarquee;