export default function getCountryModel(countryData) {
    const country = {
        name: countryData?.name.common,
        capital: countryData?.capital,
        region: countryData?.region,
        subregion: countryData?.subregion,
        population: countryData?.population,
        flag: countryData?.flags.svg,
        borders: countryData?.borders,
        languages: countryData?.languages,
        tld: countryData?.tld
    };

    return country;
}