
// propertiesData.js
// This file contains the hardcoded data for the properties. It exports an array of property objects,
// each containing details such as id, title, description, price, bedrooms, bathrooms, and image URL.
// This data mimics what would typically be fetched from an API and is used by the PropertyList component.

const properties = [
    {
        id: 1,
        title: "Modern Apartment",
        description: "A spacious and modern apartment located in the heart of the city.",
        price: "1200",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://via.placeholder.com/400x300.png?text=Modern+Apartment"
    },
    {
        id: 2,
        title: "Cozy Cottage",
        description: "A charming cottage perfect for a weekend getaway.",
        price: "900",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://via.placeholder.com/400x300.png?text=Cozy+Cottage"
    },
    {
        id: 3,
        title: "Luxury Villa",
        description: "Experience opulence in this stunning villa with ocean views.",
        price: "4500",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://via.placeholder.com/400x300.png?text=Luxury+Villa"
    },
    {
        id: 4,
        title: "Suburban House",
        description: "A beautiful house with a large backyard, perfect for families.",
        price: "1500",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://via.placeholder.com/400x300.png?text=Suburban+House"
    }
];

export default properties;
