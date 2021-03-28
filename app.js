// Sets the copyright year to the current year
const setCopyrightDate = () => {
    const today = new Date();
    document.querySelector('#cr-date').textContent = today.getFullYear();
}

const main = () => {
    setCopyrightDate();
}

main();