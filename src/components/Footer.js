import React from 'react';
import { useState, useEffect } from 'react';

const Footer = () => {

    const [temp, setTemp] = useState('');
    const [rain, setRain] = useState();
    const api = 'https://api.open-meteo.com/v1/forecast?latitude=51.6814&longitude=-2.3533&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,rain,snowfall,precipitation&timezone=Europe%2FLondon'

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                setTemp(data.current.temperature_2m);
                setRain(data.current.rain.toFixed(0));
            });
    }, []);

    return (
        <footer className="footer">
            <p>🌤️ The temperature in Dursley is <sttrong>{temp}°C</sttrong> with {rain}% chance of rain </p>
        </footer>
    );
};

export default Footer;