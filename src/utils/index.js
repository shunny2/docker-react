export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;
export const verifyCost = (cost) => (cost.includes('0.00') ? 'Gratuito.' : 'R$ ' + (Number(cost).toFixed(2)).replace('.', ','));
export const formatTitle = (text) => (text.length > 20 ? text.substring(0, 20) + '...' : text);
export const formatDescription = (text) => (text.includes('.') ? text.substring(0, text.indexOf('.')) + '...' : text.substring(0, 44) + '...');