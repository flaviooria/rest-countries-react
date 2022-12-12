export default function getCountryModel(countryData) {
    const country = {
        name: countryData?.name.common,
        capital: countryData?.capital,
        region: countryData?.region,
        population: countryData?.population,
        flag: countryData?.flags.svg,
        borders: countryData?.borders,
    };

    return country;
}