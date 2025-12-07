const fs = require('fs');
const https = require('https');
const path = require('path');

const API_KEY = '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';
const OUTPUT_DIR = path.join(__dirname, 'marketing', 'images');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const PROMPTS = [
    {
        filename: 'ad_gamer_feed.png',
        prompt: 'POV professional gamer setup, dark room, monitor showing 144 FPS neon green counter. Transparent PC case with aggressive purple and red RGB lighting. Translucent stylized ghost figure rising from PC vents. Cyberpunk atmosphere, 8k resolution, photorealistic.'
    },
    {
        filename: 'ad_office_story.png',
        prompt: 'Split screen composition. Left: Stressed worker, dusty gray old laptop, loading circle. Right: Happy worker, sleek modern laptop, blue speed aura, clean desk. High contrast. 3D render style advertisement.'
    },
    {
        filename: 'mascot_pose_01.png',
        prompt: 'Cute 3D character of a yellow banana wearing a tech support headset and holding a small screwdriver. Metallic silver peel on bottom. Friendly expression, Pixar-style animation render, white background.'
    }
];

async function generateImage(item) {
    console.log(`Generating ${item.filename}...`);
    
    const data = JSON.stringify({
        model: "openai/dall-e-3", // Using DALL-E 3 via OpenRouter
        prompt: item.prompt,
    });

    const options = {
        hostname: 'openrouter.ai',
        path: '/api/v1/images/generations',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'HTTP-Referer': 'https://deivitech.com', // Required by OpenRouter
            'X-Title': 'DeiviTech Marketing'
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let responseBody = '';

            res.on('data', (chunk) => {
                responseBody += chunk;
            });

            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        const json = JSON.parse(responseBody);
                        if (json.data && json.data.length > 0 && json.data[0].url) {
                            downloadImage(json.data[0].url, path.join(OUTPUT_DIR, item.filename))
                                .then(resolve)
                                .catch(reject);
                        } else {
                            // Fallback if OpenRouter format differs or model fails
                            console.error('Unexpected response structure:', json);
                            reject(new Error('No image URL in response'));
                        }
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    console.error(`Error ${res.statusCode}: ${responseBody}`);
                    reject(new Error(`API Request Failed: ${res.statusCode}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(filepath);
                res.pipe(file);
                file.on('finish', () => {
                    file.close(() => {
                        console.log(`Saved to ${filepath}`);
                        resolve();
                    });
                });
            } else {
                reject(new Error(`Failed to download image: ${res.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
}

async function run() {
    for (const item of PROMPTS) {
        try {
            await generateImage(item);
        } catch (err) {
            console.error(`Failed to generate ${item.filename}:`, err.message);
        }
    }
}

run();
