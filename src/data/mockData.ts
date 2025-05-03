// Mock data for the TPL website

export const teams = [
  {
    id: "team1",
    name: "Thorkulam Warriors",
    shortName: "Warriors",
    logo: "https://images.unsplash.com/photo-1580564931796-db6ba6293aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    description: "Founded in 2015, the Warriors have been a dominant force in the TPL, known for their aggressive attacking style and strong defensive line.",
    jerseyColor: "Red and Blue",
    history: "The Warriors have won the TPL championship twice, in 2017 and 2022, and have been runners-up three times.",
    players: ["player1", "player4", "player7", "player10"]
  },
  {
    id: "team2",
    name: "Pallikkara Panthers",
    shortName: "Panthers",
    logo: "https://images.unsplash.com/photo-1571360674439-7f4f1c43ab37?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    description: "The Panthers are known for their quick counter-attacks and technical prowess. They have a strong youth academy that consistently produces talented players.",
    jerseyColor: "Black and Yellow",
    history: "Champions in 2018 and 2021, the Panthers have established themselves as a top team in the league with their attractive style of play.",
    players: ["player2", "player5", "player8", "player11"]
  },
  {
    id: "team3",
    name: "Koduvally Kings",
    shortName: "Kings",
    logo: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    description: "The Kings play with a possession-based style, focusing on control and patience. Their midfield is considered one of the strongest in the league.",
    jerseyColor: "Purple and Gold",
    history: "Champions in 2019 and 2023, the Kings have been consistently in the top four since the league's inception.",
    players: ["player3", "player6", "player9", "player12"]
  },
  {
    id: "team4",
    name: "Calicut Dynamos",
    shortName: "Dynamos",
    logo: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    description: "The Dynamos are known for their fast-paced attacking football and passionate fanbase. They have a record for scoring the most goals in a single season.",
    jerseyColor: "Blue and White",
    history: "Founded in 2016, the Dynamos won their first championship in 2020 and have consistently reached the semifinals.",
    players: ["player13", "player16", "player19", "player22"]
  },
  {
    id: "team5",
    name: "Kottakkal United",
    shortName: "United",
    logo: "https://images.unsplash.com/photo-1639181532209-e2e8d7a5b858?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    description: "United are known for their disciplined defensive structure and efficient set-piece routines. They have one of the most experienced squads in the league.",
    jerseyColor: "Green and White",
    history: "One of the founding teams of the TPL, United have won the championship once in 2016 and have finished in the top three multiple times.",
    players: ["player14", "player17", "player20", "player23"]
  },
  {
    id: "team6",
    name: "Malappuram Rovers",
    shortName: "Rovers",
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    description: "The Rovers are famous for their high-pressing football and energetic playing style. They have a strong following and are known for developing young talent.",
    jerseyColor: "Orange and Black",
    history: "Founded in 2015, the Rovers are yet to win a championship but have been runners-up twice and have won the TPL Cup in 2022.",
    players: ["player15", "player18", "player21", "player24"]
  }
];

export const players = [
  {
    id: "player1",
    name: "Rahul Menon",
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Forward",
    age: 27,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: "https://images.unsplash.com/photo-1580564931796-db6ba6293aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com",
    isCaptain: true
  },
  {
    id: "player2",
    name: "Arun Kumar",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Midfielder",
    age: 25,
    teamId: "team2",
    teamName: "Pallikkara Panthers",
    teamLogo: "https://images.unsplash.com/photo-1571360674439-7f4f1c43ab37?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com",
    isCaptain: true
  },
  {
    id: "player3",
    name: "Vijay Nair",
    photo: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Defender",
    age: 28,
    teamId: "team3",
    teamName: "Koduvally Kings",
    teamLogo: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    isCaptain: true
  },
  {
    id: "player4",
    name: "Saheer Ali",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Goalkeeper",
    age: 30,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: "https://images.unsplash.com/photo-1580564931796-db6ba6293aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  },
  {
    id: "player5",
    name: "Amal Dev",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Forward",
    age: 24,
    teamId: "team2",
    teamName: "Pallikkara Panthers",
    teamLogo: "https://images.unsplash.com/photo-1571360674439-7f4f1c43ab37?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player6",
    name: "Anand Krishnan",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Midfielder",
    age: 26,
    teamId: "team3",
    teamName: "Koduvally Kings",
    teamLogo: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  },
  // Add more players as needed
  {
    id: "player7",
    name: "Ravi Pillai",
    photo: "https://images.unsplash.com/photo-1539614471970-1f78c82bdf6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Defender",
    age: 29,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: "https://images.unsplash.com/photo-1580564931796-db6ba6293aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
  },
  {
    id: "player8",
    name: "Fahad Ahmed",
    photo: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Defender",
    age: 25,
    teamId: "team2",
    teamName: "Pallikkara Panthers",
    teamLogo: "https://images.unsplash.com/photo-1571360674439-7f4f1c43ab37?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player9",
    name: "Adarsh Menon",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Forward",
    age: 23,
    teamId: "team3",
    teamName: "Koduvally Kings",
    teamLogo: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  },
  // New players for teams 4-6
  {
    id: "player13",
    name: "Sanjay Varma",
    photo: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Forward",
    age: 26,
    teamId: "team4",
    teamName: "Calicut Dynamos",
    teamLogo: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player14",
    name: "Nikhil Thomas",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Midfielder",
    age: 27,
    teamId: "team5",
    teamName: "Kottakkal United",
    teamLogo: "https://images.unsplash.com/photo-1639181532209-e2e8d7a5b858?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  },
  {
    id: "player15",
    name: "Mohammed Rizwan",
    photo: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Goalkeeper",
    age: 30,
    teamId: "team6",
    teamName: "Malappuram Rovers",
    teamLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  }
];

export const fixtures = [
  {
    id: "fix1",
    date: new Date(2025, 6, 15, 19, 30), // July 15, 2025, 7:30 PM
    venue: "Kavil Arena",
    homeTeam: teams[0],
    awayTeam: teams[1],
    stage: "Group Stage"
  },
  {
    id: "fix2",
    date: new Date(2025, 6, 16, 17, 0), // July 16, 2025, 5:00 PM
    venue: "Kavil Arena",
    homeTeam: teams[2],
    awayTeam: teams[3],
    stage: "Group Stage"
  },
  {
    id: "fix3",
    date: new Date(2025, 6, 18, 19, 0), // July 18, 2025, 7:00 PM
    venue: "Kavil Arena",
    homeTeam: teams[4],
    awayTeam: teams[5],
    stage: "Group Stage"
  },
  {
    id: "fix4",
    date: new Date(2025, 6, 21, 18, 30), // July 21, 2025, 6:30 PM
    venue: "Kavil Arena",
    homeTeam: teams[0],
    awayTeam: teams[2],
    stage: "Group Stage"
  },
  {
    id: "fix5",
    date: new Date(2025, 7, 2, 19, 30), // August 2, 2025, 7:30 PM
    venue: "Kavil Arena",
    homeTeam: teams[3],
    awayTeam: teams[1],
    stage: "Quarterfinals"
  },
  {
    id: "fix6",
    date: new Date(2025, 7, 9, 20, 0), // August 9, 2025, 8:00 PM
    venue: "Kavil Arena",
    homeTeam: teams[0],
    awayTeam: teams[4],
    stage: "Semifinals"
  }
];

// Add past fixtures with scores and scorers
export const pastFixtures = [
  {
    id: "pastfix1",
    date: new Date(2025, 6, 5, 19, 0), // July 5, 2025, 7:00 PM
    venue: "Kavil Arena",
    homeTeam: teams[0],
    awayTeam: teams[3],
    stage: "Group Stage",
    homeScore: 3,
    awayScore: 1,
    scorers: [
      { name: "Rahul Menon", team: "home", minute: 23 },
      { name: "Sanjay Varma", team: "away", minute: 38 },
      { name: "Ravi Pillai", team: "home", minute: 56 },
      { name: "Rahul Menon", team: "home", minute: 82 }
    ]
  },
  {
    id: "pastfix2",
    date: new Date(2025, 6, 7, 17, 30), // July 7, 2025, 5:30 PM
    venue: "Kavil Arena",
    homeTeam: teams[1],
    awayTeam: teams[2],
    stage: "Group Stage",
    homeScore: 2,
    awayScore: 2,
    scorers: [
      { name: "Arun Kumar", team: "home", minute: 15 },
      { name: "Vijay Nair", team: "away", minute: 34 },
      { name: "Adarsh Menon", team: "away", minute: 67 },
      { name: "Fahad Ahmed", team: "home", minute: 89 }
    ]
  },
  {
    id: "pastfix3",
    date: new Date(2025, 6, 8, 19, 0), // July 8, 2025, 7:00 PM
    venue: "Kavil Arena",
    homeTeam: teams[4],
    awayTeam: teams[0],
    stage: "Group Stage",
    homeScore: 0,
    awayScore: 2,
    scorers: [
      { name: "Rahul Menon", team: "away", minute: 45 },
      { name: "Saheer Ali", team: "away", minute: 76 }
    ]
  },
  {
    id: "pastfix4",
    date: new Date(2025, 6, 10, 18, 0), // July 10, 2025, 6:00 PM
    venue: "Kavil Arena",
    homeTeam: teams[5],
    awayTeam: teams[3],
    stage: "Group Stage",
    homeScore: 1,
    awayScore: 1,
    scorers: [
      { name: "Mohammed Rizwan", team: "home", minute: 54 },
      { name: "Sanjay Varma", team: "away", minute: 79 }
    ]
  }
];

export const previousSeasons = [
  {
    year: "2024",
    champion: {
      name: "Thorkulam Warriors",
      logo: "https://images.unsplash.com/photo-1580564931796-db6ba6293aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    },
    championCaptain: {
      name: "Rahul Menon",
      photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
    },
    runnerUp: {
      name: "Koduvally Kings",
      logo: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    },
    runnerUpCaptain: {
      name: "Vijay Nair",
      photo: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
    },
    topScorer: {
      name: "Rahul Menon",
      photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
      goals: 18,
      team: "Warriors"
    },
    bestPlayer: {
      name: "Rahul Menon",
      photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    },
    bestGoalkeeper: {
      name: "Mohammed Rizwan",
      photo: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
      team: "Rovers"
    },
    bestYoungPlayer: {
      name: "Adarsh Menon",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
      age: 23,
      team: "Kings"
    },
    photo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    summary: "The 2024 season saw Thorkulam Warriors dominate from start to finish, with striker Rahul Menon in exceptional form. The Warriors defeated Koduvally Kings 3-1 in the final."
  },
  {
    year: "2023",
    champion: {
      name: "Koduvally Kings",
      logo: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    },
    championCaptain: {
      name: "Vijay Nair",
      photo: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
    },
    runnerUp: {
      name: "Calicut Dynamos",
      logo: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    },
    runnerUpCaptain: {
      name: "Sanjay Varma",
      photo: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
    },
    topScorer: {
      name: "Adarsh Menon",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
      goals: 16,
      team: "Kings"
    },
    bestPlayer: {
      name: "Anand Krishnan",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    },
    bestGoalkeeper: {
      name: "Saheer Ali",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
      team: "Warriors"
    },
    bestYoungPlayer: {
      name: "Sanjay Varma",
      photo: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
      age: 22,
      team: "Dynamos"
    },
    photo: "https://images.unsplash.com/photo-1517604941870-1bc98bf905b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    summary: "The 2023 season was marked by Koduvally Kings' brilliant midfield play, orchestrated by Anand Krishnan. They defeated Calicut Dynamos 2-0 in a tense final."
  },
  {
    year: "2022",
    champion: {
      name: "Thorkulam Warriors",
      logo: "https://images.unsplash.com/photo-1580564931796-db6ba6293aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    },
    championCaptain: {
      name: "Rahul Menon",
      photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
    },
    runnerUp: {
      name: "Pallikkara Panthers",
      logo: "https://images.unsplash.com/photo-1571360674439-7f4f1c43ab37?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    },
    runnerUpCaptain: {
      name: "Arun Kumar",
      photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
    },
    topScorer: {
      name: "Arun Kumar",
      photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
      goals: 14,
      team: "Panthers"
    },
    bestPlayer: {
      name: "Ravi Pillai",
      photo: "https://images.unsplash.com/photo-1539614471970-1f78c82bdf6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    },
    bestGoalkeeper: {
      name: "Mohammed Rizwan",
      photo: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
      team: "Rovers"
    },
    bestYoungPlayer: {
      name: "Fahad Ahmed",
      photo: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
      age: 21,
      team: "Panthers"
    },
    photo: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    summary: "The 2022 season featured a remarkable defensive display from the Warriors, led by captain Ravi Pillai. They defeated the Panthers in a penalty shootout after a 1-1 draw in the final."
  }
];

export const galleryItems = [
  {
    id: "gal1",
    type: "image",
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "TPL 2024 Champions - Thorkulam Warriors",
    year: "2024",
    event: "Finals"
  },
  {
    id: "gal2",
    type: "image",
    url: "https://images.unsplash.com/photo-1521208299032-9e51d4094de2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Midfielder Anand Krishnan controls the ball",
    year: "2023",
    event: "Semifinals"
  },
  {
    id: "gal3",
    type: "image",
    url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Packed stadium for the TPL 2022 final",
    year: "2022",
    event: "Finals"
  },
  {
    id: "gal4",
    type: "image",
    url: "https://images.unsplash.com/photo-1518604666860-9cd681bcd93c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Celebration after scoring the winning goal",
    year: "2023",
    event: "Finals"
  },
  {
    id: "gal5",
    type: "image",
    url: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Goalkeeper Saheer Ali makes a crucial save",
    year: "2024",
    event: "Quarterfinals"
  },
  {
    id: "gal6",
    type: "image",
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "TPL opening ceremony at Thorkulam Stadium",
    year: "2023",
    event: "Opening Ceremony"
  },
  {
    id: "gal7",
    type: "image",
    url: "https://images.unsplash.com/photo-1493662424514-90ff976bd7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Training session at Thorkulam Stadium",
    year: "2024",
    event: "Pre-season"
  },
  {
    id: "gal8",
    type: "image",
    url: "https://images.unsplash.com/photo-1460617247608-124108476e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Fans cheering during a match",
    year: "2022",
    event: "Group Stage"
  }
];

export const tournamentInfo = {
  history: "The Thorkulam Premier League (TPL) was founded in 2015 as a local tournament to promote football in the region. What started as a small competition with just 6 teams has now grown into one of the most prestigious football tournaments in the area, featuring some of the best local talents and drawing large crowds to every match. Over the years, the TPL has developed a reputation for exciting, high-quality football and has been instrumental in developing local talent, with several players going on to represent state and national teams.",
  format: "The TPL follows a mixed format with both group and knockout stages. The tournament begins with a group stage where the 6 teams are divided into two groups of 3. Each team plays against the other teams in their group once. The top two teams from each group advance to the semifinals, followed by a final to determine the champion. The entire tournament spans approximately 8 weeks, typically taking place during the summer months.",
  rules: "The TPL follows standard FIFA rules with a few modifications. Matches consist of two halves of 45 minutes each. In the group stage, teams receive 3 points for a win, 1 for a draw, and 0 for a loss. If two or more teams are tied on points, the ranking is determined by goal difference, goals scored, and head-to-head results. In the knockout stages, if a match ends in a draw after 90 minutes, it proceeds directly to a penalty shootout without extra time.",
  venues: "The TPL matches are primarily held at the Thorkulam Stadium, a modern facility with a capacity of 10,000 spectators. Some matches are also played at the Pallikkara Arena and Koduvally Sports Complex, both with capacities of around 7,000. All venues feature natural grass surfaces and modern facilities for both players and spectators.",
  teams: "The TPL currently features 6 teams representing different localities in and around Thorkulam. Each team is allowed a squad of up to 25 players, with a maximum of 3 players from outside the region. The teams compete not only for the championship trophy but also for individual awards including the Golden Boot (top scorer), Golden Ball (best player), Golden Glove (best goalkeeper), and Best Young Player."
};

export const highlights = [
  {
    title: "Defending Champions",
    content: "Thorkulam Warriors are the current TPL champions, having defeated Koduvally Kings 3-1 in last season's thrilling final.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  },
  {
    title: "Top Scorer",
    content: "Rahul Menon of Thorkulam Warriors holds the Golden Boot with an impressive 18 goals in the 2024 season.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  },
  {
    title: "Record Attendance",
    content: "Last season's final saw a record attendance of 9,800 fans at Thorkulam Stadium, creating an electric atmosphere.",
    image: "https://images.unsplash.com/photo-1493662424514-90ff976bd7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  }
];
