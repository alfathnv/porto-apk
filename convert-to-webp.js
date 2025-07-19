import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration for WebP conversion
const webpOptions = {
  quality: 85, // Good balance between quality and file size
  method: 6,   // Compression method (0-6, higher = better compression but slower)
  autoFilter: true,
  sharpness: 0,
  preset: 'photo' // Use 'photo' preset for art/photographic content
};

async function convertToWebP() {
  const inputDir = './assets/porto';
  const outputDir = './assets/porto/webp';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Get all image files
  const files = fs.readdirSync(inputDir)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .map(file => path.join(inputDir, file));
  
  console.log(`Found ${files.length} images to convert...`);
  
  try {
    const results = await imagemin(files, {
      destination: outputDir,
      plugins: [
        imageminWebp(webpOptions)
      ]
    });
    
    console.log(`✅ Successfully converted ${results.length} images to WebP format`);
    console.log('📁 WebP files saved to:', outputDir);
    
    // Log file size comparison
    results.forEach(result => {
      const webpFileName = path.basename(result.destination, '.webp');
      const originalFile = files.find(f => {
        const originalFileName = path.basename(f, path.extname(f));
        return originalFileName === webpFileName;
      });
      
      if (originalFile && fs.existsSync(originalFile) && fs.existsSync(result.destination)) {
        const originalSize = fs.statSync(originalFile).size;
        const webpSize = fs.statSync(result.destination).size;
        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        console.log(`📊 ${path.basename(originalFile)}: ${(originalSize/1024).toFixed(1)}KB → ${(webpSize/1024).toFixed(1)}KB (${savings}% smaller)`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error converting images:', error);
  }
}

convertToWebP(); 