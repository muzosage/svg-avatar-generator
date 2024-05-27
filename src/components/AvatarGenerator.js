import React, { useState } from 'react';

const AvatarGenerator = () => {
    const [hair, setHair] = useState('short');
    const [eyes, setEyes] = useState('open');
    const [mouth, setMouth] = useState('smile');

    const generateSVG = () => {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="30" stroke="black" stroke-width="2" fill="none" />
                <!-- Hair -->
                <path d="${hair}" />
                <!-- Eyes -->
                <circle cx="24" cy="24" r="4" fill="black" />
                <circle cx="40" cy="24" r="4" fill="black" />
                <!-- Mouth -->
                <path d="${mouth}" />
            </svg>
        `;
    };

    return (
        <div>
            <h2>Customize Your Avatar</h2>
            <label>
                Hair:
                <select value={hair} onChange={e => setHair(e.target.value)}>
                    <option value="short">Short</option>
                    <option value="long">Long</option>
                </select>
            </label>
            <br />
            <label>
                Eyes:
                <select value={eyes} onChange={e => setEyes(e.target.value)}>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>
            </label>
            <br />
            <label>
                Mouth:
                <select value={mouth} onChange={e => setMouth(e.target.value)}>
                    <option value="smile">Smile</option>
                    <option value="frown">Frown</option>
                </select>
            </label>
            <br />
            <div dangerouslySetInnerHTML={{ __html: generateSVG() }} />
        </div>
    );
};

export default AvatarGenerator;
