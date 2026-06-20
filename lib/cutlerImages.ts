export type CutlerImage = {
  title: string;
  category: 'logo' | 'commercial' | 'residential' | 'winter' | 'reference';
  src: string;
  alt: string;
  suggestedUse: string;
  status: 'public' | 'private' | 'reference';
  notes?: string;
};

const source = (file: string) => `/images/cutler-source/${file}`;

export const cutlerImages = {
  logo: [
    { title: 'Cutler Landscaping Logo', category: 'logo', src: source('cutler-logo.jpg'), alt: 'Cutler Lawns logo with phone number', suggestedUse: 'Footer and brand trust areas', status: 'public' },
    { title: 'Cutler Logo No Phone', category: 'logo', src: source('cutler-logo-no-phone.jpg'), alt: 'Cutler Lawns logo without phone number', suggestedUse: 'Header or compact brand placements', status: 'public' },
    { title: 'Cutler Logo Alternate', category: 'logo', src: source('cutler-logo-alt.jpg'), alt: 'Alternate Cutler Lawns logo asset', suggestedUse: 'Secondary brand placements', status: 'public', notes: 'Secondary logo option.' },
  ],
  commercial: [
    { title: 'Commercial Mowing', category: 'commercial', src: source('commercial-mowing.jpg'), alt: 'Commercial lawn mowing service by Cutler Lawns', suggestedUse: 'Commercial service cards and hero support', status: 'public' },
    { title: 'Commercial Landscape Maintenance', category: 'commercial', src: source('commercial-landscape-maintenance.jpg'), alt: 'Commercial landscape maintenance project', suggestedUse: 'Homepage hero and featured gallery', status: 'public' },
    { title: 'Parking Lot Cleaning', category: 'commercial', src: source('parking-lot-cleaning.webp'), alt: 'Commercial parking lot cleaning service', suggestedUse: 'Commercial gallery and service cards', status: 'public' },
    { title: 'Commercial Pressure Washing', category: 'commercial', src: source('commercial-pressure-washing.jpg'), alt: 'Commercial pressure washing for exterior surfaces', suggestedUse: 'Pressure washing sections', status: 'public' },
    { title: 'Commercial Gutter Cleaning', category: 'commercial', src: source('commercial-gutter-cleaning.jpg'), alt: 'Commercial gutter cleaning service', suggestedUse: 'Gutter cleaning service cards', status: 'public' },
    { title: 'Landscape Grounds Maintenance', category: 'commercial', src: source('landscape-grounds-maintenance.jpg'), alt: 'Maintained commercial grounds and landscape', suggestedUse: 'Featured work and commercial proof', status: 'public' },
  ],
  residential: [
    { title: 'Residential Mowing', category: 'residential', src: source('residential-mowing.jpg'), alt: 'Residential lawn mowing service', suggestedUse: 'Residential division cards', status: 'public' },
    { title: 'Residential Landscape Maintenance', category: 'residential', src: source('residential-landscape-maintenance.jpg'), alt: 'Residential landscape maintenance and lawn care', suggestedUse: 'Residential transformations and design inspiration', status: 'public' },
    { title: 'Residential Flower Installation', category: 'residential', src: source('residential-flower-installation.jpg'), alt: 'Residential flower bed installation', suggestedUse: 'AI Yard Builder inspiration and catalog', status: 'public' },
    { title: 'Flower Bed Installation', category: 'residential', src: source('flower-bed-installation.jpg'), alt: 'Flower bed installation and seasonal color', suggestedUse: 'Gallery and catalog visuals', status: 'public', notes: 'Secondary flower bed option.' },
    { title: 'Residential Pressure Washing', category: 'residential', src: source('residential-pressure-washing.jpg'), alt: 'Residential pressure washing service', suggestedUse: 'Residential pressure washing result cards', status: 'public' },
    { title: 'Residential Gutter Cleaning', category: 'residential', src: source('residential-gutter-cleaning.jpg'), alt: 'Residential gutter cleaning service', suggestedUse: 'Seasonal refresh and gutter cleaning cards', status: 'public' },
    { title: 'Sprinkler System Install', category: 'residential', src: source('sprinkler-system-install.jpeg'), alt: 'Sprinkler system installation project', suggestedUse: 'Irrigation gallery and catalog', status: 'public' },
    { title: 'Irrigation Sprinklers', category: 'residential', src: source('irrigation-sprinklers.jpeg'), alt: 'Irrigation sprinkler system in a lawn', suggestedUse: 'Irrigation service support', status: 'public' },
    { title: 'Seasonal Leaf Cleanup', category: 'residential', src: source('seasonal-leaf-cleanup.jpg'), alt: 'Seasonal leaf cleanup service', suggestedUse: 'Seasonal refresh cards', status: 'public' },
    { title: 'Residential Gutter Cleaning Alternate', category: 'residential', src: source('residential-gutter-cleaning-alt.jpeg'), alt: 'Alternate residential gutter cleaning image', suggestedUse: 'Secondary gutter cleaning visual', status: 'public', notes: 'Duplicate/secondary gutter-cleaning option.' },
    { title: 'Lawn Mowing Alternate', category: 'residential', src: source('lawn-mowing-alt.jpg'), alt: 'Alternate lawn mowing image', suggestedUse: 'Secondary residential mowing visual', status: 'public', notes: 'Secondary mowing option.' },
    { title: 'Pressure Washing Alternate', category: 'residential', src: source('pressure-washing-alt.jpg'), alt: 'Alternate pressure washing result image', suggestedUse: 'Pressure washing gallery', status: 'public', notes: 'Secondary pressure washing option.' },
    { title: 'Gutter Cleaning', category: 'residential', src: source('gutter-cleaning.jpeg'), alt: 'Gutter cleaning service image', suggestedUse: 'Seasonal refresh and gutter service cards', status: 'public', notes: 'Secondary gutter-cleaning option.' },
  ],
  winter: [
    { title: 'Snow and Ice Removal', category: 'winter', src: source('snow-ice-removal.png'), alt: 'Snow and ice removal service', suggestedUse: 'Winter response sections', status: 'public' },
  ],
  reference: [
    { title: 'Old Landing Page Reference', category: 'reference', src: source('old-landing-page-reference.png'), alt: 'Reference capture of previous Cutler landing page', suggestedUse: 'Internal reference only', status: 'reference', notes: 'Reference asset only; do not use to recreate the old website.' },
  ],
} satisfies Record<string, CutlerImage[]>;

export const allCutlerImages = Object.values(cutlerImages).flat();
