
// PropertyCard.jsx
// This component displays the details of a property, such as the image, title, description, price, number of bedrooms, and bathrooms. It's used within the PropertyList component to render each individual property's information in a card format.

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from '../../lib/formatCurrency';

const PropertyCard = ({ property }) => {
    return (
        <Card>
            <CardHeader>
                <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
                <CardTitle>{property.title}</CardTitle>
                <CardDescription>{property.description}</CardDescription>
                <p className="text-gray-600">Price: {formatCurrency(property.price)}</p>
                <p className="text-gray-600">{property.bedrooms} BR | {property.bathrooms} Bath</p>
            </CardContent>
            <CardFooter>
                <Button variant="outline">View Details</Button>
            </CardFooter>
        </Card>
    );
};

export default PropertyCard;
