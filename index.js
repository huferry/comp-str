/**
 * Compare String module.
 * @module comp-str
 */

/**
 * Give score on how similar the two strings are compared from the left to right.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @return {number} score in percentage.
 */
module.exports.leftScore = function(str1, str2) {
    if (!str1) return undefined
    if (!str2) return 0

    return matchCount(
            str1.toUpperCase(), 
            str2.toUpperCase()) * 100 
        / Math.max(str1.length, str2.length) 
}

function matchCount(str1, str2) {
    if (!str1 || !str2 || str1[0] !== str2[0]) 
        return 0
    
    return 1 + matchCount(
        str1.substring(1), 
        str2.substring(1))
}

/**
 * Give the similarity of two strings in percentage value.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @return {number} similarity in percentage.
 */
module.exports.similarity = function(str1, str2) {
    if (!str1) return undefined
    if (!str2) return 0

    if (str1.length > str2.length) 
        return similarity(str2, str1)

    const regex = new RegExp(
        Array.from(str1)
            .map(c => `${c}.*`)
            .reduce((agg, ch) => agg + ch, ''), 'i')
    
    const match = str2.match(regex)

    return match 
        ? 100 * match[0].length / str2.length 
        : 0
}