export default function getCountryModel(countryData) {
    const country = {
        name: countryData?.name?.common,
        nativeName: Object.entries(countryData?.name.nativeName)[0][1].official,
        capital: countryData?.capital[0],
        region: countryData?.region,
        subregion: countryData?.subregion,
        population: countryData?.population,
        flag: countryData?.flags.svg,
        borders: countryData?.borders,
        languages: Object.values(countryData?.languages).join(', '),
        tld: countryData?.tld[0],
        currency: Object.entries(countryData?.currencies)[0][1]?.name
    };

    return country;
}