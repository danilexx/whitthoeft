const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));

export default later;