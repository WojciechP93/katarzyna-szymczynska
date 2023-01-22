import * as React from 'react';
import "./portfolio.css"
import { Stack } from 'react-bootstrap/';
import SectionHeaderComponent from '../shared/section_header/SectionHeaderComponent';
import uiux from './images/ui-ux.png'
import branding from './images/branding-marketing.png'
import digital from './images/graphic-digital.png'
import animations from './images/animations.png'
import photography from './images/photography.png'
import ThreeD from './images/3D.png'
import drawings from './images/traditional-art/drawings.png'
import paintings from './images/traditional-art/paintings.png'
import murals from './images/traditional-art/murals.png'
import handicrafts from './images/traditional-art/handicrafts.png'

function PortfolioComponent() {
    return (
        <Stack className="portfolio-content">
            <SectionHeaderComponent title="portfolio" />
            <Stack gap={2}>
                <Stack direction='horizontal' className='portfolio-horizontal-stack' gap={2}>
                    <div className='portfolio-tile big-tile' style={{ "--url": `url(${uiux})` }} >
                        <div className="portfolio-tile-transbox big-tile">
                            <p>UI/UX and web <br /> design</p>
                        </div>
                    </div>
                    <div className='portfolio-tile big-tile' style={{ "--url": `url(${branding})` }} >
                        <div className="portfolio-tile-transbox big-tile">
                            <p>branding and <br /> marketing designs</p>
                        </div>
                    </div>
                </Stack>
                <Stack direction='horizontal' gap={2} className='portfolio-horizontal-stack'>
                    <div className='portfolio-tile big-tile' style={{ "--url": `url(${digital})` }} >
                        <div className="portfolio-tile-transbox big-tile">
                            <p>graphic designs and <br /> digital arts</p>
                        </div>
                    </div>
                    <div className='portfolio-tile big-tile' style={{ "--url": `url(${animations})` }} >
                        <div className="portfolio-tile-transbox big-tile">
                            <p>animations</p>
                        </div>
                    </div>
                </Stack>
                <Stack direction='horizontal' gap={2} className='portfolio-horizontal-stack'>
                    <div className='portfolio-tile big-tile' style={{ "--url": `url(${photography})` }} >
                        <div className="portfolio-tile-transbox big-tile">
                            <p>photographies</p>
                        </div>
                    </div>
                    <div className='portfolio-tile big-tile' style={{ "--url": `url(${ThreeD})` }} >
                        <div className="portfolio-tile-transbox big-tile">
                            <p>3D graphics</p>
                        </div>
                    </div>
                </Stack>

                <p className='traditional-art-title'>traditional-art</p>

                <Stack direction='horizontal' className='portfolio-horizontal-stack' gap={2}>
                    <div className='portfolio-tile small-tile' style={{ "--url": `url(${drawings})` }} >
                        <div className="portfolio-tile-transbox small-tile">
                            <p>drawings</p>
                        </div>
                    </div>
                    <div className='portfolio-tile small-tile' style={{ "--url": `url(${paintings})` }} >
                        <div className="portfolio-tile-transbox small-tile">
                            <p>paintings</p>
                        </div>
                    </div>
                    <div className='portfolio-tile small-tile' style={{ "--url": `url(${murals})` }} >
                        <div className="portfolio-tile-transbox small-tile">
                            <p>murals</p>
                        </div>
                    </div>
                    <div className='portfolio-tile small-tile' style={{ "--url": `url(${handicrafts})` }} >
                        <div className="portfolio-tile-transbox small-tile">
                            <p>handicrafts <br /> and other <br /> creations</p>
                        </div>
                    </div>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PortfolioComponent;