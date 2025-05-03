import TeamLogo from "../assets/images/team-logo.png";
import Playerpic from "../assets/images/player-pic.png";
import Goalkeeperpic from "../assets/images/goalkeeper-pic.png";
import Crowd from "../assets/images/crowd.png";
import Goldenboot from "../assets/images/goldenboot.png";

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
    name: "FC Dynamos",
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
    photo: Playerpic,
    position: "Forward",
    age: 21,
    teamId: "team3",
    teamName: "Bedakam Kings",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player20",
    name: "Munas",
    photo: Playerpic,
    position: "Forward",
    age: 15,
    teamId: "team3",
    teamName: "Bedakam Kings",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player21",
    name: "Uvais",
    photo: Playerpic,
    position: "Defender",
    age: 14,
    teamId: "team3",
    teamName: "Bedakam Kings",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player22",
    name: "Vaishnav",
    photo: Goalkeeperpic,
    position: "Goalkeeper",
    age: 22,
    teamId: "team3",
    teamName: "Bedakam Kings",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  // Team-4
  {
    id: "player23",
    name: "Samad",
    photo: Playerpic,
    position: "Forward",
    age: 21,
    teamId: "team4",
    teamName: "FC Dynamos",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com",
    isCaptain: true
  },
  {
    id: "player24",
    name: "Afnaz",
    photo: Playerpic,
    position: "Defender",
    age: 17,
    teamId: "team4",
    teamName: "FC Dynamos",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player25",
    name: "Shailu",
    photo: Playerpic,
    position: "Midfielder",
    age: 21,
    teamId: "team4",
    teamName: "FC Dynamos",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player26",
    name: "Shazil",
    photo: Playerpic,
    position: "Forward",
    age: 18,
    teamId: "team4",
    teamName: "FC Dynamos",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player27",
    name: "Aslah",
    photo: Playerpic,
    position: "Defender",
    age: 19,
    teamId: "team4",
    teamName: "FC Dynamos",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player28",
    name: "Mithu",
    photo: Playerpic,
    position: "Defender",
    age: 18,
    teamId: "team4",
    teamName: "FC Dynamos",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player29",
    name: "Rafid",
    photo: Goalkeeperpic,
    position: "Goalkeeper",
    age: 17,
    teamId: "team4",
    teamName: "FC Dynamos",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  },
  {
    id: "player30",
    name: "Rizan",
    photo: Playerpic,
    position: "Midfielder",
    age: 16,
    teamId: "team4",
    teamName: "FC Dynamos",
    teamLogo: TeamLogo,
    instagramUrl: "https://instagram.com"
  }
];

export const fixtures = [
  {
    id: "fix1",
    date: new Date(2025, 4, 11, 8, 30),
    venue: "Kavil Arena",
    homeTeam: teams[0],
    awayTeam: teams[1],
    stage: "Group Stage"
  },
  {
    id: "fix2",
    date: new Date(2025, 4, 11, 9, 30),
    venue: "Kavil Arena",
    homeTeam: teams[2],
    awayTeam: teams[3],
    stage: "Group Stage"
  },
  {
    id: "fix4",
    date: new Date(2025, 4, 11, 10, 30),
    venue: "Kavil Arena",
    homeTeam: teams[0],
    awayTeam: teams[2],
    stage: "Group Stage"
  },
  {
    id: "fix5",
    date: new Date(2025, 4, 11, 11, 30),
    venue: "Kavil Arena",
    homeTeam: teams[3],
    awayTeam: teams[1],
    stage: "Group Stage"
  },
  {
    id: "fix6",
    date: new Date(2025, 4, 11, 12, 30),
    venue: "Kavil Arena",
    homeTeam: teams[1],
    awayTeam: teams[2],
    stage: "Group Stage"
  },
  {
    id: "fix7",
    date: new Date(2025, 4, 11, 13, 30),
    venue: "Kavil Arena",
    homeTeam: teams[3],
    awayTeam: teams[0],
    stage: "Group Stage"
  }
];

// Add past fixtures with scores and scorers
export const pastFixtures = [
  {
    id: "pastfix2",
    date: new Date(2024, 4, 7, 17, 30),
    venue: "Kavil Arena",
    homeTeam: teams[0],
    awayTeam: teams[3],
    stage: "Final",
    homeScore: 2,
    awayScore: 0,
    scorers: [
      { name: "Najeeb", team: "home", minute: 76 },
      { name: "Suhail", team: "home", minute: 90 }
    ]
  }
];

export const previousSeasons = [
  {
    year: "2024",
    champion: {
      name: "Azurians",
      logo: TeamLogo,
    },
    championCaptain: {
      name: "Suhail",
      photo: Playerpic
    },
    runnerUp: {
      name: "Deziders FC",
      logo: TeamLogo,
    },
    runnerUpCaptain: {
      name: "Rafeeque",
      photo: Playerpic
    },
    topScorer: {
      name: "Najeeb",
      photo: Playerpic,
      goals: 6,
      team: "Azurians"
    },
    bestPlayer: {
      name: "Suhail",
      photo: Playerpic,
    },
    bestGoalkeeper: {
      name: "Vaishnav",
      photo: Goalkeeperpic,
      team: "Azurians"
    },
    bestDefender: {
      name: "Rafeeque",
      photo: Playerpic,
      team: "Deziders FC"
    },
    photo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    summary: "The 2024 season saw Azurians dominate from start to finish, with Midfielder Suhail in exceptional form. The Azurians defeated Deziders 2-0 in the final."
  },
  {
    year: "2023",
    champion: {
      name: "Azurians",
      logo: TeamLogo,
    },
    championCaptain: {
      name: "Suhail",
      photo: Playerpic
    },
    runnerUp: {
      name: "FC Dynamos",
      logo: TeamLogo,
    },
    runnerUpCaptain: {
      name: "Afsal",
      photo: Playerpic
    },
    topScorer: {
      name: "Safvan",
      photo: Playerpic,
      goals: 4,
      team: "FC Dynamos"
    },
    bestPlayer: {
      name: "Basith",
      photo: Playerpic,
    },
    bestGoalkeeper: {
      name: "Rafid",
      photo: Goalkeeperpic,
      team: "Azurians"
    },
    bestDefender: {
      name: "Suhail",
      photo: Playerpic,
      team: "Azurians"
    },
    photo: "https://images.unsplash.com/photo-1517604941870-1bc98bf905b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    summary: "The 2023 season was marked by Azurians' brilliant midfield play, orchestrated by Basith. They defeated FC Dynamos 1-0 in a tense final."
  },
  {
    year: "2022",
    champion: {
      name: "Mavericks",
      logo: TeamLogo,
    },
    championCaptain: {
      name: "Sajid",
      photo: Playerpic
    },
    runnerUp: {
      name: "Dazrox FC",
      logo: TeamLogo,
    },
    runnerUpCaptain: {
      name: "Rafeeque",
      photo: Playerpic
    },
    topScorer: {
      name: "Bakir",
      photo: Playerpic,
      goals: 4,
      team: "Mavericks"
    },
    bestPlayer: {
      name: "Sajid",
      photo: Playerpic,
    },
    bestGoalkeeper: {
      name: "Rafid",
      photo: Playerpic,
      team: "FC Dynamos"
    },
    bestDefender: {
      name: "Aslah",
      photo: Playerpic,
      team: "FC Dynamos"
    },
    photo: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    summary: "The 2022 season featured a remarkable defensive display from the Mavericks, led by captain Sajid. They defeated the Deziderz in a penalty shootout after a 1-1 draw in the final."
  }
];

export const tournamentInfo = {
  history: "The Thorkulam Premier League (TPL) was founded in 2016 as a local tournament to promote football in the region. What started as a small competition with just 4 teams has now grown into one of the most prestigious football tournaments in the area, featuring some of the best local talents and drawing large crowds to every match. Over the years, the TPL has developed a reputation for exciting, high-quality football and has been instrumental in developing local talent.",
  format: "The TPL follows a mixed format with both group and knockout stages. The tournament begins with a group stage where the 4 teams fight each other. Each team plays against the other teams in their group once. The top one team from each group advance to the final, and following top 2 will fight for another final spot, followed by a final to determine the champion.",
  rules: "The TPL follows standard FIFA rules with a few modifications. Matches consist of two halves of 8 minutes each. In the group stage, teams receive 3 points for a win, 1 for a draw, and 0 for a loss. If two or more teams are tied on points, the ranking is determined by goal difference, goals scored, and head-to-head results. In the knockout stages, if a match ends in a draw after Fulltime, it proceeds directly to a penalty shootout without extra time.",
  venues: "The TPL matches are primarily held at the Kavil Arena, a modern facility with a capacity of 10,000 spectators.",
  teams: "The TPL currently features 4 teams representing different localities in and around Thorkulam. Each team is allowed a squad of up to 8 players. The teams compete not only for the championship trophy but also for individual awards including the Golden Boot (top scorer), Golden Ball (best player), Golden Glove (best goalkeeper), and Best Defender."
};

export const highlights = [
  {
    title: "Defending Champions",
    content: "Azurians are the current TPL champions, having defeated Deziders Fc 2-0 in last season's thrilling final.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80"
  },
  {
    title: "Top Scorer",
    content: "Najeeb of Azurinas holds the Golden Boot with an impressive 6 goals in the 2024 season.",
    image: Goldenboot
  },
  {
    title: "Record Attendance",
    content: "Last season's final saw a record attendance of 9,800 fans at Kavil Arena, creating an electric atmosphere.",
    image: Crowd
  }
];
