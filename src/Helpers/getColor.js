const getColor = (propertyName) => {

    const rawColor = getComputedStyle(document.querySelector(':root')).getPropertyValue(propertyName);	
    let [h, s, l] = rawColor.replace(/[%,]/g, '').split(' ').filter((e) => e.length > 0).map((e) => parseInt(e));

    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };

    return `${f(0)}${f(8)}${f(4)}`;
}

export default getColor;