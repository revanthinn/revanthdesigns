import sharp from 'sharp';
import fs from 'fs';
import pngToIco from 'png-to-ico';

async function createCircularFavicon() {
    try {
        // Step 1: Create a white circle background
        const whiteCircle = Buffer.from(`
            <svg width='256' height='256'>
                <circle cx='128' cy='128' r='128' fill='white'/>
            </svg>
        `);

        // Step 2: Prepare the profile image as a circle (with transparent corners)
        const profileCircle = await sharp('src/assets/revanth-profile.jpg')
            .resize(256, 256, { fit: 'cover', position: 'centre' })
            .composite([
                {
                    input: Buffer.from(`
                        <svg width='256' height='256'>
                            <circle cx='128' cy='128' r='128' fill='white'/>
                        </svg>
                    `),
                    blend: 'dest-in'
                }
            ])
            .png()
            .toBuffer();

        // Step 3: Composite the profile circle over the white circle (no transparency)
        const finalImage = await sharp(whiteCircle)
            .composite([
                { input: profileCircle, top: 0, left: 0 }
            ])
            .png()
            .toBuffer();

        // Step 4: Save as PNGs for favicon sizes
        await sharp(finalImage).resize(32, 32).toFile('public/favicon-32.png');
        await sharp(finalImage).resize(48, 48).toFile('public/favicon-48.png');
        await sharp(finalImage).resize(64, 64).toFile('public/favicon-64.png');
        await sharp(finalImage).resize(128, 128).toFile('public/favicon-128.png');
        await sharp(finalImage).resize(256, 256).toFile('public/favicon-256.png');

        // Step 5: Use png-to-ico to generate favicon.ico
        const icoBuffer = await pngToIco([
            'public/favicon-32.png',
            'public/favicon-48.png',
            'public/favicon-64.png',
            'public/favicon-128.png',
            'public/favicon-256.png',
        ]);
        fs.writeFileSync('public/favicon.ico', icoBuffer);

        console.log('Circular favicon.ico with white background and no transparency created successfully!');
    } catch (error) {
        console.error('Error creating circular favicon:', error);
    }
}

createCircularFavicon(); 