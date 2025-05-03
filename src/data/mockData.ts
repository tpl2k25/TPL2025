import TeamLogo from "../assets/images/team-logo.png";
import Playerpic from "../assets/images/player-pic.png";
import Goalkeeperpic from "../assets/images/goalkeeper-pic.png";

export const teams = [
  {
    id: "team1",
    name: "Thorkulam Warriors",
    shortName: "Warriors",
    logo: TeamLogo,
    description: "Founded in 2015, the Warriors have been a dominant force in the TPL, known for their aggressive attacking style and strong defensive line.",
    jerseyColor: "Red and Blue",
    history: "The Warriors have won the TPL championship twice, in 2017 and 2022, and have been runners-up three times.",
    players: ["player1", "player2", "player3", "player4", "player5", "player6", "player7"]
  },
  {
    id: "team2",
    name: "Pallikkal Panthers",
    shortName: "Panthers",
    logo: TeamLogo,
    description: "The Panthers are known for their quick counter-attacks and technical prowess. They have a strong youth academy that consistently produces talented players.",
    jerseyColor: "Black and Yellow",
    history: "Champions in 2018 and 2021, the Panthers have established themselves as a top team in the league with their attractive style of play.",
    players: ["player8", "player9", "player10", "player11", "player12", "player13", "player14", "player15"]
  },
  {
    id: "team3",
    name: "Bedakam Kings",
    shortName: "Kings",
    logo: TeamLogo,
    description: "The Kings play with a possession-based style, focusing on control and patience. Their midfield is considered one of the strongest in the league.",
    jerseyColor: "Purple and Gold",
    history: "Champions in 2019 and 2023, the Kings have been consistently in the top four since the league's inception.",
    players: ["player16", "player17", "player18", "player19", "player20", "player21", "player22"]
  },
  {
    id: "team4",
    name: "Calicut Dynamos",
    shortName: "Dynamos",
    logo: TeamLogo,
    description: "The Dynamos are known for their fast-paced attacking football and passionate fanbase. They have a record for scoring the most goals in a single season.",
    jerseyColor: "Blue and White",
    history: "Founded in 2016, the Dynamos won their first championship in 2020 and have consistently reached the semifinals.",
    players: ["player23", "player24", "player25", "player26", "player27", "player28", "player29", "player30"]
  }
];

export const players = [
  {
    // Team-1
    id: "player1",
    name: "Suhail",
    photo: Playerpic,
    position: "Midfielder",
    age: 21,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com",
    isCaptain: true
  },
  {
    id: "player2",
    name: "Rizu",
    photo: Playerpic,
    position: "Forward",
    age: 15,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player3",
    name: "Basith",
    photo: Playerpic,
    position: "Forward",
    age: 18,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player4",
    name: "Jafer",
    photo: Playerpic,
    position: "Defender",
    age: 20,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player5",
    name: "Shareef",
    photo: Playerpic,
    position: "Defender",
    age: 17,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player6",
    name: "Zidan",
    photo: Goalkeeperpic,
    position: "Goalkeeper",
    age: 20,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player7",
    name: "Rashad",
    photo: Playerpic,
    position: "Midfielder",
    age: 13,
    teamId: "team1",
    teamName: "Thorkulam Warriors",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  // Team-2
  {
    id: "player8",
    name: "Afsal",
    photo: Playerpic,
    position: "Defender",
    age: 21,
    teamId: "team2",
    teamName: "Pallikkal Panthers",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com",
    isCaptain: true
  },
  {
    id: "player9",
    name: "Ajsal",
    photo: Playerpic,
    position: "Defender",
    age: 19,
    teamId: "team2",
    teamName: "Pallikkal Panthers",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player10",
    name: "Safvan",
    photo: Playerpic,
    position: "Forward",
    age: 22,
    teamId: "team2",
    teamName: "Pallikkal Panthers",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player11",
    name: "Sameeh",
    photo: Playerpic,
    position: "Midfielder",
    age: 20,
    teamId: "team2",
    teamName: "Pallikkal Panthers",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player12",
    name: "Anas",
    photo: Playerpic,
    position: "Midfielder",
    age: 22,
    teamId: "team2",
    teamName: "Pallikkal Panthers",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player13",
    name: "Saipu",
    photo: Playerpic,
    position: "Midfielder",
    age: 18,
    teamId: "team2",
    teamName: "Pallikkal Panthers",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player14",
    name: "Farzad",
    photo: Playerpic,
    position: "Forward",
    age: 13,
    teamId: "team2",
    teamName: "Pallikkal Panthers",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player15",
    name: "Rabu",
    photo: Goalkeeperpic,
    position: "Goalkeeper",
    age: 22,
    teamId: "team2",
    teamName: "Pallikkal Panthers",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  // Team-3
  {
    id: "player16",
    name: "Afshan",
    photo: Playerpic,
    position: "Defender",
    age: 20,
    teamId: "team3",
    teamName: "Bedakam Kings",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com",
    isCaptain: true
  },
  {
    id: "player17",
    name: "Papu",
    photo: Playerpic,
    position: "Midfielder",
    age: 20,
    teamId: "team3",
    teamName: "Bedakam Kings",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player18",
    name: "Najeeb",
    photo: Playerpic,
    position: "Midfielder",
    age: 22,
    teamId: "team3",
    teamName: "Bedakam Kings",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player19",
    name: "Bakir",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Forward",
    age: 29,
    teamId: "team3",
    teamName: "Calicut Dynamos",
    teamLogo: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player20",
    name: "Munas",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Forward",
    age: 29,
    teamId: "team3",
    teamName: "Calicut Dynamos",
    teamLogo: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player21",
    name: "Uvais",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Defender",
    age: 29,
    teamId: "team3",
    teamName: "Calicut Dynamos",
    teamLogo: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player22",
    name: "Vaishnav",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Goalkeeper",
    age: 29,
    teamId: "team3",
    teamName: "Calicut Dynamos",
    teamLogo: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  // Team-4
  {
    id: "player23",
    name: "Samad",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Forward",
    age: 30,
    teamId: "team4",
    teamName: "Malappuram Rovers",
    teamLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com",
    isCaptain: true
  },
  {
    id: "player24",
    name: "Afnaz",
    photo: "https://images.unsplash.com/photo-1539614471970-1f78c82bdf6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Defender",
    age: 26,
    teamId: "team4",
    teamName: "Calicut Dynamos",
    teamLogo: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player25",
    name: "Shailu",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Midfielder",
    age: 28,
    teamId: "team4",
    teamName: "Kottakkal United",
    teamLogo: "https://images.unsplash.com/photo-1639181532209-e2e8d7a5b858?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player26",
    name: "Shazil",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Forward",
    age: 28,
    teamId: "team4",
    teamName: "Kottakkal United",
    teamLogo: "https://images.unsplash.com/photo-1639181532209-e2e8d7a5b858?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player27",
    name: "Aslah",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Defender",
    age: 28,
    teamId: "team4",
    teamName: "Kottakkal United",
    teamLogo: "https://images.unsplash.com/photo-1639181532209-e2e8d7a5b858?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player28",
    name: "Mithu",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Defender",
    age: 28,
    teamId: "team4",
    teamName: "Kottakkal United",
    teamLogo: "https://images.unsplash.com/photo-1639181532209-e2e8d7a5b858?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player29",
    name: "Rafid",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Goalkeeper",
    age: 28,
    teamId: "team4",
    teamName: "Kottakkal United",
    teamLogo: "https://images.unsplash.com/photo-1639181532209-e2e8d7a5b858?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player30",
    name: "Rizan",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
    position: "Midfielder",
    age: 28,
    teamId: "team4",
    teamName: "Kottakkal United",
    teamLogo: "https://images.unsplash.com/photo-1639181532209-e2e8d7a5b858?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80",
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
    id: "pastfix4",
    date: new Date(2025, 6, 10, 18, 0), // July 10, 2025, 6:00 PM
    venue: "Kavil Arena",
    homeTeam: teams[2],
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
    content: "Najeeb of Thorkulam Warriors holds the Golden Boot with an impressive 6 goals in the 2024 season.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  },
  {
    title: "Record Attendance",
    content: "Last season's final saw a record attendance of 9,800 fans at Kavil Arena, creating an electric atmosphere.",
    image: "https://images.unsplash.com/photo-1493662424514-90ff976bd7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  }
];
