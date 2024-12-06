// src/utils/formatters.js
export const formatText = (text) => text || 'N/A';

export const formatTime = (time) => (time ? `${time} minutes` : 'N/A');

export const formatUrlImageSmall = (url) => {
    if (!url) return '';
    return `https://imagesvc.meredithcorp.io/v3/mm/image?url=${url}&w=300&h=300&c=sc&q=85`;
}

export const formatUrlImageLarge = (url) => {
    if (!url) return '';
    return `https://imagesvc.meredithcorp.io/v3/mm/image?url=${url}&w=1200&h=800&c=sc&q=85`;
}
