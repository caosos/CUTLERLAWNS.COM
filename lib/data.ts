import { cutlerImages } from './cutlerImages';

export type Product={id:string;name:string;category:string;image:string;description:string;styleTags:string[];sunTags?:string[]};
export const products:Product[]=[
{id:'annual-flower-bed-refresh',name:'Annual Flower Bed Refresh',category:'flowers',image:'/images/cutler-source/residential-flower-installation.jpg',description:'Seasonal color plan for entries, monument signs, and residential beds.',styleTags:['colorful','curb appeal'],sunTags:['sun','part shade']},
{id:'mulch-installation',name:'Mulch Installation',category:'mulch',image:'/images/cutler-source/flower-bed-installation.jpg',description:'Fresh bed finish for weed suppression, moisture control, and clean curb appeal.',styleTags:['clean','low maintenance']},
{id:'shrub-replacement',name:'Shrub Replacement',category:'shrubs',image:'/images/cutler-source/residential-landscape-maintenance.jpg',description:'Replace tired foundation plants with a clean, maintainable landscape layout.',styleTags:['premium','foundation beds'],sunTags:['sun','part shade']},
{id:'sprinkler-install',name:'Sprinkler Install',category:'irrigation',image:'/images/cutler-source/sprinkler-system-install.jpeg',description:'Irrigation support for lawns, beds, and commercial frontage areas.',styleTags:['low maintenance','property preservation']},
{id:'sod-lawn-refresh',name:'Sod / Lawn Refresh',category:'sod',image:'/images/cutler-source/residential-mowing.jpg',description:'Improve thin lawn areas and restore a cleaner green presentation.',styleTags:['clean','commercial'],sunTags:['sun']},
{id:'pressure-washing',name:'Pressure Washing',category:'pressure washing',image:'/images/cutler-source/commercial-pressure-washing.jpg',description:'Exterior cleaning for concrete, entries, walks, homes, and commercial surfaces.',styleTags:['property preservation','commercial']},
{id:'gutter-cleaning',name:'Gutter Cleaning',category:'gutter cleaning',image:'/images/cutler-source/commercial-gutter-cleaning.jpg',description:'Clear gutters and drainage points as part of seasonal exterior maintenance.',styleTags:['seasonal','property preservation']},
{id:'seasonal-cleanup',name:'Seasonal Cleanup',category:'cleanup',image:'/images/cutler-source/seasonal-leaf-cleanup.jpg',description:'Leaf removal, debris cleanup, bed reset, and property refresh work.',styleTags:['seasonal','curb appeal']},
];
export const pamphlets=[ 'Commercial Services','Residential Services','Property Preservation','Winter Services','Outdoor Living','Estimate Guide'].map(x=>({title:x,file:`/pamphlets/${x.toLowerCase().replaceAll(' ','-')}.pdf`,description:`Download-ready ${x.toLowerCase()} pamphlet scaffold for sales and estimate conversations.`}));
export type GalleryItem={title:string;section:string;image:string;tag:string;caption:string};
export const gallerySections=[
{title:'Featured Work',items:[
{title:'Commercial landscape maintenance',section:'Featured Work',image:'/images/cutler-source/commercial-landscape-maintenance.jpg',tag:'Commercial',caption:'Clean landscape presentation for high-visibility properties.'},
{title:'Grounds maintenance detail',section:'Featured Work',image:'/images/cutler-source/landscape-grounds-maintenance.jpg',tag:'Maintenance',caption:'Reliable grounds care that supports curb appeal and tenant confidence.'},
{title:'Parking lot cleaning',section:'Featured Work',image:'/images/cutler-source/parking-lot-cleaning.webp',tag:'Property Preservation',caption:'Exterior cleanup support for commercial lots and frontage areas.'},
]},
{title:'Commercial Properties',items:[
{title:'Commercial mowing',section:'Commercial Properties',image:'/images/cutler-source/commercial-mowing.jpg',tag:'Mowing',caption:'Scheduled mowing for business and managed properties.'},
{title:'Commercial pressure washing',section:'Commercial Properties',image:'/images/cutler-source/commercial-pressure-washing.jpg',tag:'Cleaning',caption:'Surface cleaning for entries, walks, and commercial hardscapes.'},
{title:'Commercial gutter cleaning',section:'Commercial Properties',image:'/images/cutler-source/commercial-gutter-cleaning.jpg',tag:'Gutters',caption:'Drainage maintenance to protect buildings and exterior appearance.'},
{title:'Lot and frontage cleanup',section:'Commercial Properties',image:'/images/cutler-source/parking-lot-cleaning.webp',tag:'Lot Care',caption:'Practical cleanup for property managers and business owners.'},
]},
{title:'Residential Transformations',items:[
{title:'Residential mowing',section:'Residential Transformations',image:'/images/cutler-source/residential-mowing.jpg',tag:'Residential',caption:'Premium residential lawn care backed by commercial standards.'},
{title:'Residential landscape maintenance',section:'Residential Transformations',image:'/images/cutler-source/residential-landscape-maintenance.jpg',tag:'Landscape',caption:'Bed and lawn maintenance for cleaner home curb appeal.'},
{title:'Flower installation',section:'Residential Transformations',image:'/images/cutler-source/residential-flower-installation.jpg',tag:'Flowers',caption:'Seasonal color for front beds, entries, and outdoor living areas.'},
{title:'Flower bed installation',section:'Residential Transformations',image:'/images/cutler-source/flower-bed-installation.jpg',tag:'Bed Refresh',caption:'A polished bed refresh for homes and small commercial entries.'},
]},
{title:'Irrigation / Sprinklers',items:[
{title:'Sprinkler system install',section:'Irrigation / Sprinklers',image:'/images/cutler-source/sprinkler-system-install.jpeg',tag:'Irrigation',caption:'Sprinkler installation support for healthier turf and beds.'},
{title:'Irrigation sprinklers',section:'Irrigation / Sprinklers',image:'/images/cutler-source/irrigation-sprinklers.jpeg',tag:'Watering',caption:'Watering systems that help landscapes perform through Arkansas heat.'},
]},
{title:'Seasonal Refresh',items:[
{title:'Seasonal leaf cleanup',section:'Seasonal Refresh',image:'/images/cutler-source/seasonal-leaf-cleanup.jpg',tag:'Cleanup',caption:'Leaf removal and seasonal reset work for safer, cleaner properties.'},
{title:'Residential gutter cleaning',section:'Seasonal Refresh',image:'/images/cutler-source/residential-gutter-cleaning.jpg',tag:'Gutters',caption:'Seasonal gutter service for homes and small properties.'},
{title:'Gutter cleaning',section:'Seasonal Refresh',image:'/images/cutler-source/gutter-cleaning.jpeg',tag:'Drainage',caption:'Exterior maintenance that helps water move where it should.'},
]},
{title:'Winter Response',items:[
{title:'Snow and ice removal',section:'Winter Response',image:'/images/cutler-source/snow-ice-removal.png',tag:'Winter',caption:'Winter response support for access, safety, and business continuity.'},
]},
{title:'Pressure Washing Results',items:[
{title:'Commercial pressure washing',section:'Pressure Washing Results',image:'/images/cutler-source/commercial-pressure-washing.jpg',tag:'Commercial',caption:'Cleaner surfaces for stronger first impressions.'},
{title:'Residential pressure washing',section:'Pressure Washing Results',image:'/images/cutler-source/residential-pressure-washing.jpg',tag:'Residential',caption:'House, walk, and exterior cleaning for residential refreshes.'},
{title:'Pressure washing alternate',section:'Pressure Washing Results',image:'/images/cutler-source/pressure-washing-alt.jpg',tag:'Results',caption:'A practical add-on for property preservation packages.'},
]},
];
export const gallery=gallerySections.flatMap(s=>s.items);
export const designInspiration=[
cutlerImages.residential.find(i=>i.src.includes('residential-flower-installation'))!,
cutlerImages.residential.find(i=>i.src.includes('flower-bed-installation'))!,
cutlerImages.residential.find(i=>i.src.includes('residential-landscape-maintenance'))!,
cutlerImages.residential.find(i=>i.src.includes('sprinkler-system-install'))!,
];
export const reviewSources=[
{title:'Google Reviews via Birdeye',url:'https://birdeye.com/cutler-lawns-173704749222660'},
{title:'HomeAdvisor profile',url:'https://www.homeadvisor.com/rated.CutlerLawns.123662155.html'},
{title:'BBB profile',url:'https://www.bbb.org/us/ar/benton/profile/lawn-maintenance/cutler-lawns-0935-90351460'}
];
