// -- main.js --

/**
 * Konverterer en fil til en Base64-streng.
 * @param {File} file - Filen, der skal konverteres.
 * @returns {Promise<string>} En Promise, der resolver til en Base64-streng.
 */
export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

/**
 * Formaterer en YYYY-MM-DD-datostreng til DD/MM/YYYY.
 * @param {string} dateString - Datoen i YYYY-MM-DD-format.
 * @returns {string} Den formaterede dato.
 */
export const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
};

/**
 * Returnerer et ikon baseret på fagets navn.
 * @param {string} subject - Fagets navn.
 * @returns {string} Et emoji-ikon.
 */
export const getSubjectIcon = (subject) => {
    switch (subject) {
        case 'Cyber Security': return '🛡️';
        case 'Appudvikling': return '📱';
        default: return '🏷️';
    }
};

/**
 * En oversættelses-map til knap-tekster.
 */
export const typeTranslations = {
    code: 'Kode',
    picture: 'Billede',
    video: 'Video'
};