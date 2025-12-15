// Initialize Cloudinary
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dp8cecer3';

/**
 * Get optimized image URL from Cloudinary
 * @param {string} imageName - Name of the image (without extension)
 * @param {object} options - Transformation options
 * @returns {string} Optimized image URL
 */
export const getCloudinaryImage = (imageName: string, options: {
  width?: number;
  height?: number;
  quality?: string;
  fetchFormat?: string;
} = {}) => {
  const {
    width,
    height,
    quality = 'auto',
    fetchFormat = 'auto'
  } = options;

  // Build transformation string
  const transformations: string[] = [];
  
  if (width) {
    transformations.push(`w_${width}`);
  }
  if (height) {
    transformations.push(`h_${height}`);
  }
  
  transformations.push(`f_${fetchFormat}`);
  transformations.push(`q_${quality}`);
  
  const transformationString = transformations.join(',');
  
  // Build Cloudinary URL
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}/${imageName}`;
};

/**
 * Get responsive image with multiple sizes
 * @param {string} imageName - Name of the image
 * @param {object} options - Transformation options
 * @returns {object} Object with srcset and sizes
 */
export const getResponsiveImage = (imageName: string, options: {
  baseWidth?: number;
  aspectRatio?: number;
  width?: number;
  height?: number;
  quality?: string;
  fetchFormat?: string;
} = {}) => {
  const { baseWidth = 1920, aspectRatio } = options;
  
  const sizes = [400, 800, 1200, 1600, baseWidth];
  const srcset = sizes
    .map(size => {
      const opts = { ...options, width: size };
      if (aspectRatio) opts.height = Math.round(size / aspectRatio);
      return `${getCloudinaryImage(imageName, opts)} ${size}w`;
    })
    .join(', ');

  return {
    src: getCloudinaryImage(imageName, { ...options, width: baseWidth }),
    srcset,
    sizes: '(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, 1920px'
  };
};

