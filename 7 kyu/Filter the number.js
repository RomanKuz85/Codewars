var FilterString = function(value) {
    return +value.replace(/[^0-9]/g, '')
}