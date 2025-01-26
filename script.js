// Default settings
const sprite = document.getElementById('sprite');

// Example of customization
function updateSprite(options) {
    if (options.image) {
        sprite.style.backgroundImage = `url(${options.image})`;
    }
    if (options.size) {
        sprite.style.width = options.size + 'px';
        sprite.style.height = options.size + 'px';
    }
    if (options.borderColor) {
        sprite.style.borderColor = options.borderColor;
    }
}

// Example usage
updateSprite({
    image: 'ggjjy.png',
    size: 150,
    borderColor: 'blue'
});
