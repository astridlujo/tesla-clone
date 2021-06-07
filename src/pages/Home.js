import React from 'react';
import Section from '../components/Section';

const Home = () => {
    return (
        <div>
            {/* Model S */}
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-s.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />

            {/* Model Y */}
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />

            {/* Model 3 */}
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />

            {/* Model X */}

            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />

            {/* Solar Panels */}
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImage="solar-panel.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />

            {/* Solar Roofs */}

            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImage="solar-roof.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />

            {/* Accessories  */}

            <Section 
                title="Accessories" 
                backgroundImage="accessories.jpg" 
                leftButtonText="Order now"
            />

        </div>
    )
}

export default Home;
