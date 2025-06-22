export const continents = {
  northAmerica: {
    name: 'North America',
    countries: [
      { code: 'USA', name: 'United States', aliases: ['America', 'USA', 'United States of America', 'New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco', 'Las Vegas', 'Boston', 'Seattle', 'Washington DC', 'Houston', 'Dallas'] },
      { code: 'CAN', name: 'Canada', aliases: ['Canada', 'Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton'] },
    ]
  },
  europe: {
    name: 'Europe',
    countries: [
      { code: 'FRA', name: 'France', aliases: ['France', 'Paris', 'Lyon', 'Marseille', 'Nice', 'Bordeaux', 'Toulouse', 'Strasbourg'] },
      { code: 'ESP', name: 'Spain', aliases: ['Spain', 'Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbao', 'Malaga', 'Granada'] },
      { code: 'ITA', name: 'Italy', aliases: ['Italy', 'Rome', 'Milan', 'Venice', 'Florence', 'Naples', 'Turin', 'Bologna', 'Pisa'] },
      { code: 'GBR', name: 'United Kingdom', aliases: ['England', 'Great Britain', 'UK', 'Britain', 'United Kingdom', 'London', 'Manchester', 'Birmingham', 'Liverpool', 'Edinburgh', 'Glasgow', 'Bristol', 'Leeds'] },
      { code: 'DEU', name: 'Germany', aliases: ['Germany', 'Deutschland', 'Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne', 'Stuttgart', 'Düsseldorf'] },
      { code: 'CHE', name: 'Switzerland', aliases: ['Switzerland', 'Swiss', 'Zurich', 'Geneva', 'Bern', 'Basel', 'Lausanne', 'Lucerne'] },
      { code: 'NLD', name: 'Netherlands', aliases: ['Netherlands', 'Holland', 'Dutch', 'Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven'] },
      { code: 'AUT', name: 'Austria', aliases: ['Austria', 'Vienna', 'Salzburg', 'Innsbruck', 'Graz', 'Linz'] },
      { code: 'SWE', name: 'Sweden', aliases: ['Sweden', 'Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås'] },
      { code: 'NOR', name: 'Norway', aliases: ['Norway', 'Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Tromsø'] },
      { code: 'DNK', name: 'Denmark', aliases: ['Denmark', 'Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg'] },
      { code: 'FIN', name: 'Finland', aliases: ['Finland', 'Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Turku'] },
      { code: 'BEL', name: 'Belgium', aliases: ['Belgium', 'Brussels', 'Antwerp', 'Ghent', 'Bruges', 'Liège'] },
      { code: 'POL', name: 'Poland', aliases: ['Poland', 'Warsaw', 'Krakow', 'Wrocław', 'Poznań', 'Gdańsk'] },
      { code: 'TUR', name: 'Turkey', aliases: ['Turkey', 'Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya'] },
      { code: 'RUS', name: 'Russia', aliases: ['Russia', 'Moscow', 'St Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan'] },
    ]
  },
  asia: {
    name: 'Asia',
    countries: [
      { code: 'JPN', name: 'Japan', aliases: ['Japan', 'Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Sapporo', 'Kobe'] },
      { code: 'SGP', name: 'Singapore', aliases: ['Singapore'] },
      { code: 'ISR', name: 'Israel', aliases: ['Israel', 'Tel Aviv', 'Jerusalem', 'Haifa', 'Beer Sheva', 'Netanya'] },
      { code: 'KOR', name: 'South Korea', aliases: ['South Korea', 'Korea', 'Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'] },
      { code: 'CHN', name: 'China', aliases: ['China', 'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Hangzhou'] },
      { code: 'IND', name: 'India', aliases: ['India', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'] },
      { code: 'THA', name: 'Thailand', aliases: ['Thailand', 'Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Krabi'] },
      { code: 'SAU', name: 'Saudi Arabia', aliases: ['Saudi Arabia', 'Saudi', 'Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam'] },
      { code: 'IDN', name: 'Indonesia', aliases: ['Indonesia', 'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang'] },
    ]
  },
  africa: {
    name: 'Africa',
    countries: [
      { code: 'ZAF', name: 'South Africa', aliases: ['South Africa', 'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'] },
      { code: 'EGY', name: 'Egypt', aliases: ['Egypt', 'Cairo', 'Alexandria', 'Giza', 'Luxor', 'Aswan'] },
      { code: 'MAR', name: 'Morocco', aliases: ['Morocco', 'Casablanca', 'Rabat', 'Marrakech', 'Fez', 'Tangier'] },
      { code: 'KEN', name: 'Kenya', aliases: ['Kenya', 'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'] },
      { code: 'NGA', name: 'Nigeria', aliases: ['Nigeria', 'Lagos', 'Kano', 'Ibadan', 'Kaduna', 'Port Harcourt'] },
      { code: 'GHA', name: 'Ghana', aliases: ['Ghana', 'Accra', 'Kumasi', 'Tamale', 'Sekondi', 'Cape Coast'] },
      { code: 'TUN', name: 'Tunisia', aliases: ['Tunisia', 'Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Gabès'] },
      { code: 'ETH', name: 'Ethiopia', aliases: ['Ethiopia', 'Addis Ababa', 'Dire Dawa', 'Mekelle', 'Gondar', 'Bahir Dar'] },
      { code: 'UGA', name: 'Uganda', aliases: ['Uganda', 'Kampala', 'Jinja', 'Mbarara', 'Gulu', 'Arua'] },
    ]
  },
  oceania: {
    name: 'Oceania',
    countries: [
      { code: 'AUS', name: 'Australia', aliases: ['Australia', 'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast'] },
    ]
  },
  southAmerica: {
    name: 'South America',
    countries: [
      { code: 'BRA', name: 'Brazil', aliases: ['Brazil', 'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza'] },
      { code: 'MEX', name: 'Mexico', aliases: ['Mexico', 'Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana'] },
    ]
  }
} as const

// Derive the Countries type from all countries in all continents
export type Countries = typeof continents[keyof typeof continents]['countries'][number]['code'] 