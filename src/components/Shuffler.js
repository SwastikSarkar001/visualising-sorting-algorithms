export default function shuffle(harray) {
    let shuffledArray = harray.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at index i and index j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}