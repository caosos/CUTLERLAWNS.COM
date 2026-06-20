export type Product={id:string;name:string;category:string;image:string;description:string;styleTags:string[];sunTags?:string[]};
export const products:Product[]=[
{id:'annual-color-flat',name:'Annual Color Flats',category:'flowers',image:'/images/products/annual-color.jpg',description:'Seasonal color for entrances, monument signs, and residential beds.',styleTags:['colorful','curb appeal'],sunTags:['sun','part shade']},
{id:'hydrangea',name:'Hydrangea Accent Shrubs',category:'shrubs',image:'/images/products/hydrangea.jpg',description:'Premium flowering shrub massing for foundation beds and entries.',styleTags:['lush','premium'],sunTags:['part shade']},
{id:'crepe-myrtle',name:'Crape Myrtle',category:'trees',image:'/images/products/crape-myrtle.jpg',description:'Arkansas-friendly ornamental tree for structure and summer color.',styleTags:['colorful','formal'],sunTags:['sun']},
{id:'bermuda-sod',name:'Bermuda Sod',category:'sod',image:'/images/products/bermuda-sod.jpg',description:'Dense warm-season sod for high-visibility commercial or home lawns.',styleTags:['clean','commercial'],sunTags:['sun']},
{id:'hardwood-mulch',name:'Premium Hardwood Mulch',category:'mulch',image:'/images/products/hardwood-mulch.jpg',description:'Fresh bed finish for moisture control and strong curb appeal.',styleTags:['clean','low maintenance']},
{id:'river-rock',name:'River Rock',category:'gravel / rock',image:'/images/products/river-rock.jpg',description:'Low-maintenance drainage and accent rock for beds and borders.',styleTags:['modern','low maintenance']},
{id:'concrete-pavers',name:'Concrete Pavers',category:'pavers',image:'/images/products/pavers.jpg',description:'Walkway, patio, and entry edge upgrade material.',styleTags:['modern','premium']},
{id:'steel-edging',name:'Steel Bed Edging',category:'edging',image:'/images/products/steel-edging.jpg',description:'Crisp bed lines for commercial landscapes and premium homes.',styleTags:['clean','formal']},
{id:'drip-irrigation',name:'Drip Irrigation Zone',category:'irrigation',image:'/images/products/drip.jpg',description:'Efficient water delivery for beds, planters, and foundation plantings.',styleTags:['low maintenance']},
{id:'path-lighting',name:'Low Voltage Path Lighting',category:'lighting',image:'/images/products/path-lighting.jpg',description:'Entry, walkway, and monument sign lighting for night curb appeal.',styleTags:['premium','commercial']},
{id:'catch-basin',name:'Drainage Catch Basin',category:'drainage items',image:'/images/products/drainage.jpg',description:'Practical drainage upgrade for low spots and water movement issues.',styleTags:['property preservation']},
{id:'built-in-grill',name:'Built-In Grill Concept',category:'grills / barbecues',image:'/images/products/grill.jpg',description:'Outdoor living feature for patios and entertainment areas.',styleTags:['outdoor living','premium']},
{id:'fire-pit',name:'Fire Pit Kit',category:'fire pits',image:'/images/products/fire-pit.jpg',description:'Gathering feature for residential transformations and hospitality spaces.',styleTags:['outdoor living','lush']},
{id:'planters',name:'Commercial Planter Package',category:'planters',image:'/images/products/planters.jpg',description:'Movable seasonal color for entries, patios, and storefronts.',styleTags:['commercial','colorful']}
];
export const pamphlets=[ 'Commercial Services','Residential Services','Property Preservation','Winter Services','Outdoor Living','Estimate Guide'].map(x=>({title:x,file:`/pamphlets/${x.toLowerCase().replaceAll(' ','-')}.pdf`,description:`Download-ready ${x.toLowerCase()} pamphlet placeholder.`}));
export const gallery=[
{title:'Featured Work',type:'image',image:'/images/gallery/featured-work.jpg',tag:'Commercial Properties'},
{title:'Before / After Bed Cleanup',type:'before-after',image:'/images/gallery/before-after-cleanup.jpg',tag:'Before / After'},
{title:'Seasonal Refresh',type:'story',image:'/images/gallery/seasonal-refresh.jpg',tag:'Seasonal Refresh'},
{title:'Residential Transformation',type:'story',image:'/images/gallery/residential-transform.jpg',tag:'Residential Transformations'},
{title:'Winter Response',type:'video',image:'/images/gallery/winter-response-thumb.jpg',tag:'Winter Response'},
{title:'Pressure Washing Results',type:'video',image:'/images/gallery/pressure-washing-thumb.jpg',tag:'Pressure Washing Results'},
{title:'Property Preservation Turnaround',type:'story',image:'/images/gallery/property-preservation.jpg',tag:'Property Preservation'}
];
export const reviewSources=[
{title:'Google Reviews via Birdeye',url:'https://birdeye.com/cutler-lawns-173704749222660'},
{title:'HomeAdvisor profile',url:'https://www.homeadvisor.com/rated.CutlerLawns.123662155.html'},
{title:'BBB profile',url:'https://www.bbb.org/us/ar/benton/profile/lawn-maintenance/cutler-lawns-0935-90351460'}
];
