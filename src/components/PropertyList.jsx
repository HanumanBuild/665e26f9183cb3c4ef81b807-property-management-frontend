
// PropertyList.jsx
// This component handles the rendering of the list of Property Cards. It imports the hardcoded property data from a data file and maps through it to display each property using the PropertyCard component. It's used on the Home page to organize and display property listings.

import React from 'react';
import properties from '../../lib/propertiesData';
import PropertyCard from './PropertyCard';
import { Card } from "@/components/ui/card";

const PropertyList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {properties.map(property => (
                <Card key={property.id}>
                    <PropertyCard property={property} />
                </Card>
            ))}
        </div>
    );
};

export default PropertyList;
