import React from 'react';

const SocialMediaIcons = () => {
    return (
        <div className="flex mt-4">
            <a href="#" className="inline-block mx-4 text-1.5rem text-primary transition-colors duration-200 ease-in-out hover:text-primary-500">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="inline-block mx-4 text-1.5rem text-primary transition-colors duration-200 ease-in-out hover:text-primary-500">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="inline-block mx-4 text-1.5rem text-primary transition-colors duration-200 ease-in-out hover:text-primary-500">
                <i className="fab fa-linkedin"></i>
            </a>
        </div>
    );
};

export default SocialMediaIcons;
