import { BiUser } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

// --------------forImage  Start----------

// mainLogo
import logoImg from "./img/logo.PNG";

// --------------forImage  End----------

export const regE = /\S+@\S+\.\S+/;

export const regP = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

let i = 400;

// for slick-carousel
export const carouselProperties = {
  dots: true,
  speed: 500,
  accessibility: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 569,
      settings: {
        centerMode: false,
        slidesToScroll: 1,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 869,
      settings: {
        centerMode: false,
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1025,
      settings: {
        centerMode: false,
        slidesToScroll: 3,
        slidesToShow: 3
      }
    }
  ]
};

export const navMenuData = ["Home", "TVShow", "Movies", "Latest", "MyList"];

export const userLastData = [
  {
    linkName: "Account",
    linkUrl: "editAccountData",
    goToLink: "/signup"
  },
  {
    linkName: "HelpCenter",
    linkUrl: "backToHome",
    goToLink: "/"
  },
  {
    linkName: "SignOut Netflix",
    linkUrl: "goToLoggedOut",
    goToLink: "/signout"
  }
];

export const Category = [
  {
    id: 401,
    logo: "./img/mediaData/The Dark Knight/TheDarkKnightLogo.png",
    poster: "./img/mediaData/The Dark Knight/TheDarkKnightPoster.jpg",
    shortPoster: "./img/mediaData/The Dark Knight/TheDarkKnightShortPoster.jpg",
    syncPara:
      "Batman raises the stakes in his war on crime. With the help of Lt. ",
    category: "Movies",
    subCategory: "CrimeMovies",
    latest: "nonTranding",
    source:
      "https://drive.google.com/uc?export=download&id=1gO4wY54tNTTCpEI2FotQCb9nsUZ8RQ2Q",
    type: "video/mp4",
    videoDescriptionH: "The Dark Knight",
    videoRate: "13+",
    seasonCount: "",
    videoGenere1: "#Crime",
    videoGenere2: "#Action",
    videoGenere3: "#Adventure"
  },
  {
    id: 402,
    logo: "./img/mediaData/NeverHaveEverDataFolder/never-have-ever-logo.webp",
    poster:
      "./img/mediaData/NeverHaveEverDataFolder/never-have-ever-tv-show.webp",
    shortPoster:
      "./img/mediaData/NeverHaveEverDataFolder/never-have-ever-short poster.jpg",
    syncPara: "Getting the grades? Too easy. Getting through grief? Too hard. ",
    category: "TVShow",
    subCategory: "RomanticTVShow",
    latest: "nonTranding",
    source:
      "https://drive.google.com/uc?export=download&id=1VRnsxGkjgZ68hjt9Qv4-L7CkUgceA5Qc",
    type: "video/mp4",
    videoDescriptionH: "Never Have I Ever",
    videoRate: "18+",
    seasonCount: "3 Season",
    videoGenere1: "#Nudeity",
    videoGenere2: "Romance",
    videoGenere3: "#Love"
  },
  {
    id: 403,
    logo:
      "https://drive.google.com/uc?export=download&id=1DSAVMpg-57ZrrRIqkyu24ZMQyxX6e7qg",
    poster:
      "https://drive.google.com/uc?export=download&id=1qVy8sLa3aNgZZ2zFvYY8ijr3Q_Tzfl7H",
    shortPoster:
      "https://drive.google.com/uc?export=download&id=1RiYnhL3vR6ygJyEyueOMKTDWEDoLWpsC",
    syncPara:
      "Enraged at the slaughter of Murron, his new bride and childhood love.",
    category: "Movies",
    subCategory: "ActionMovies",
    latest: "Latest",
    source:
      "https://drive.google.com/uc?export=download&id=13jOfM_j3XYzOGDgd8bvyZgoawZK9rb1I",
    type: "video/mp4",
    videoDescriptionH: "Braveheart",
    videoRate: "18+",
    seasonCount: "",
    videoGenere1: "#Action",
    videoGenere2: "#Adventure",
    videoGenere3: "#Drama"
  },
  {
    id: 404,
    logo:
      "https://drive.google.com/uc?export=download&id=1Xed2HsfAZWlN6oBDy3Qh-8tgFrUSuTGl",
    poster:
      "https://drive.google.com/uc?export=download&id=1-5IYyBNijLGBmCoGebZqojbLWWU5Arx2",
    shortPoster:
      "https://drive.google.com/uc?export=download&id=1GDtCrqhsS0DEqzq8pU33uSaluL9A1KXJ",
    syncPara:
      "A financial adviser drags his family from Chicago to the Missouri Ozarks.",
    category: "TVShow",
    subCategory: "RomanticTVShow",
    latest: "Latest",
    source:
      "https://drive.google.com/uc?export=download&id=1Kftl4vaMfssv0kmZVYYSTD8NTkaf9Yxb",
    type: "video/mp4",
    videoDescriptionH: "Ozark",
    videoRate: " 18+ (R)",
    seasonCount: "4 Season",
    videoGenere1: "#Drama",
    videoGenere2: "#Mystery",
    videoGenere3: ""
  },
  {
    id: 405,
    logo:
      "https://drive.google.com/uc?export=download&id=1demqCwUrxWmo6Si4UXRqgNwI3GhKxrTX",
    poster:
      "https://drive.google.com/uc?export=download&id=1ejH-8hspFK1wMDlMtPhIVUijPJoaP5jw",
    shortPoster:
      "https://drive.google.com/uc?export=download&id=1fMP9iQd21Oy6l_I70pnDG8JWupvvxGLa",
    syncPara:
      "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. ",
    category: "Movies",
    subCategory: "ActionMovies",
    latest: "Latest",
    source:
      "https://drive.google.com/uc?export=download&id=1mB2NkhVNlK35cSvF-zx4SSDsL7m4AASk",
    type: "video/mp4",
    videoDescriptionH: "Troy",
    videoRate: "18+",
    seasonCount: "",
    videoGenere1: "#Action",
    videoGenere2: "#Adventure",
    videoGenere3: "#Drama"
  },
  {
    id: 406,
    logo:
      "https://drive.google.com/uc?export=download&id=1_jbG5PM87sT1xG7sqtntD1bCAU8vFIVr",
    poster:
      "https://drive.google.com/uc?export=download&id=1MHe6r-NrLx-iLXPnqRCSof6VITh1UKju",
    shortPoster:
      "https://drive.google.com/uc?export=download&id=13gVJZgfl8XAJ8L0n4hi_QamztT3tnE22",
    syncPara:
      "A young man and woman find love in an unlikely place while carrying out a shady deal.",
    category: "Movies",
    subCategory: "RomanticMovies",
    latest: "Latest",
    source:
      "https://drive.google.com/uc?export=download&id=1wvSZMyk4qGb6RASoSsl-YE49bGmOJRRl",
    type: "video/mp4",
    videoDescriptionH: "Tramps",
    videoRate: "18+",
    seasonCount: "",
    videoGenere1: "#Romance",
    videoGenere2: "Comedy",
    videoGenere3: ""
  },
  {
    id: 407,
    logo:
      "https://drive.google.com/uc?export=download&id=117btOZaQqesxMeSpT5xag5LJ7o9hCnUb",
    poster:
      "https://drive.google.com/uc?export=download&id=1kAxz9px20DfJos_iCT7zzd2sLGfFichR",
    shortPoster:
      "https://drive.google.com/uc?export=download&id=1kWGReum4wqXHWXPXcv0Cz4BF49cfCMum",
    syncPara:
      "A missing child causes four families to help each other for answers.",
    category: "TVShow",
    subCategory: "HollywoodTVShow",
    latest: "Latest",
    source:
      "https://drive.google.com/uc?export=download&id=1HXscLVDm84uQalK_VGmNeOZ02kyUhC8r",
    type: "video/mp4",
    videoDescriptionH: "Dark",
    videoRate: "18+",
    seasonCount: "3 Season",
    videoGenere1: "#Mystery",
    videoGenere2: "#Drama ",
    videoGenere3: ""
  },
  {
    id: 408,
    logo:
      "https://drive.google.com/uc?export=download&id=1nQc1HSFNFZ_2PNS6QQmJgC3GOX5iTkJk",
    poster:
      "https://drive.google.com/uc?export=download&id=1CZ4NctC262GIdk1kaNCCb13IqV9teueB",
    shortPoster:
      "https://drive.google.com/uc?export=download&id=1WezByWzyL2VpMTgyOOjL_VoHJlBkrP3l",
    syncPara:
      "The horror and crime thriller genres collide in this new original series from Robert Rodriguez, based on his cult grindhouse classic.",
    category: "TVShow",
    subCategory: "HorrorTVShow",
    latest: "Latest",
    source:
      "https://drive.google.com/uc?export=download&id=10KZrrK2o6ckzbRvxchyRkCS6az8PcgEP",
    type: "video/mp4",
    videoDescriptionH: "From Dusk Till Dawn",
    videoRate: "14+",
    seasonCount: "1 Season",
    videoGenere1: "#Horror",
    videoGenere2: "#Action",
    videoGenere3: "#Adventure"
  },
  {
    id: 409,
    logo:
      "https://drive.google.com/uc?export=download&id=1ds_t8FBbT_cQ6EjTYJmm2fn2ZDpVZn7g",
    poster:
      "https://drive.google.com/uc?export=download&id=1pJgXhgsbEPjXwcjCQzAnFJ8MZbgRkeOF",
    shortPoster:
      "https://drive.google.com/uc?export=download&id=1LmgqctdpwNh-ISyoYXsihdpfLh7wb-lX",
    syncPara:
      "The Crains, a fractured family, confront haunting memories of their old home and the terrifying events that drove them from it.",
    category: "TVShow",
    subCategory: "HorrorTVShow",
    latest: "Latest",
    source:
      "https://drive.google.com/uc?export=download&id=1KhmML1PaqYBuTcDyDj-XYEBplKdfg7uO",
    type: "video/mp4",
    videoDescriptionH: "The Haunting of Hill House",
    videoRate: "18+",
    seasonCount: "2 Season",
    videoGenere1: "#Horror",
    videoGenere2: "#Drama",
    videoGenere3: ""
  },
  {
    id: 410,
    logo:
      "https://drive.google.com/uc?export=download&id=13IiX4bIToJ9W12BLOEUn4Ru3I5jSCPXz",
    poster:
      "https://drive.google.com/uc?export=download&id=1lW_ctr0ecu2JerfHna3RkL7NkPUkCIvt",
    shortPoster:
      "https://drive.google.com/uc?export=download&id=1NXn5s-RofjYZosC4tM7aNI0nM7ctuFh8",
    syncPara:
      "U.S. Marine Sergeant Logan Thibault returns from his third tour of duty in Iraq.",
    category: "Movies",
    subCategory: "RomanticMovies",
    latest: "Latest",
    source:
      "https://drive.google.com/uc?export=download&id=1eY8Oab2YoUZVtQKPP5Exi0XGkB6lcdnc",
    type: "video/mp4",
    videoDescriptionH: "The Lucky One",
    videoRate: "13+",
    seasonCount: "",
    videoGenere1: "#Romance",
    videoGenere2: "#Drama",
    videoGenere3: "#"
  }
];

export const QueAnsData = [
  {
    id: 1,
    Que: "What is Netflix?",
    Ans1:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    Ans2:
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  {
    id: 2,
    Que: "How much does Netflix cost?",
    Ans1:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    Ans2: ""
  },
  {
    id: 3,
    Que: "Where can I watch?",
    Ans1:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    Ans2:
      "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    id: 4,
    Que: "How do I cancel?",
    Ans1:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    Ans2: ""
  },
  {
    id: 5,
    Que: "What can I watch on Netflix?",
    Ans1:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    Ans2: ""
  },
  {
    id: 6,
    Que: "Is Netflix good for kids?",
    Ans1:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    Ans2: ""
  }
];

export const FooterLinksAPI = [
  {
    id: 1,
    linkName: "FAQ",
    linkURL: "https://help.netflix.com/support/412"
  },
  {
    id: 2,
    linkName: "Help Centre",
    linkURL: "https://help.netflix.com/"
  },
  {
    id: 3,
    linkName: "Account",
    linkURL: "https://www.netflix.com/youraccount"
  },
  {
    id: 4,
    linkName: "Media Centre",
    linkURL: "https://media.netflix.com/"
  },
  {
    id: 5,
    linkName: "Investor Relations",
    linkURL: "http://ir.netflix.com/"
  },
  {
    id: 6,
    linkName: "Jobs",
    linkURL: "https://jobs.netflix.com/jobs"
  },
  {
    id: 7,
    linkName: "Ways to Watch",
    linkURL: "https://www.netflix.com/watch"
  },
  {
    id: 8,
    linkName: "Terms of Use",
    linkURL: "https://help.netflix.com/legal/termsofuse"
  },
  {
    id: 9,
    linkName: "Privacy",
    linkURL: "https://help.netflix.com/legal/privacy"
  },
  {
    id: 10,
    linkName: "Cookie Preferences",
    linkURL: "https://www.netflix.com/in/#"
  },
  {
    id: 11,
    linkName: "Corporate Information",
    linkURL: "https://help.netflix.com/legal/corpinfo"
  },
  {
    id: 12,
    linkName: "Contact Us",
    linkURL: "https://help.netflix.com/contactus"
  },
  {
    id: 13,
    linkName: "Speed Test",
    linkURL: "https://fast.com/"
  },
  {
    id: 14,
    linkName: "Legal Notices",
    linkURL: "https://help.netflix.com/legal/notices"
  },
  {
    id: 15,
    linkName: "Only on Netflix",
    linkURL: "https://www.netflix.com/in/browse/genre/839338"
  }
];

export const AnimatedCardAPI = [
  {
    id: 1,
    imgSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    videoSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
    type: "video/mp4",
    h1: "Enjoy on your TV.",
    h2:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
  },
  {
    id: 2,
    imgSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    imgSource2:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png",
    videoSource: "",
    type: "",
    h1: "Download your shows to watch offline.",
    h2: "Save your favourites easily and always have something to watch."
  },
  {
    id: 3,
    imgSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
    videoSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v",
    type: "",
    h1: "Watch everywhere.",
    h2:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
  },
  {
    id: 4,
    imgSource:
      "https://occ-0-4258-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf",
    videoSource: "",
    type: "",
    h1: "Create profiles for children.",
    h2:
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
  }
];

// --------------userNotification API Start----------

export const userNot2 = [
  { name: "1User", icon: <BiUser className="UserIcon" /> },
  { name: "2User", icon: <FaUserGraduate className="UserIcon" /> },
  { name: "3User", icon: <FaUserInjured className="UserIcon" /> },
  { name: "4User", icon: <FaUserSecret className="UserIcon" /> },
  { name: "5User", icon: <FaUserCircle className="UserIcon" /> }
];

// --------------userNotification API End----------

// // -------------------------------------------------------------------------------------

export const animatedCardSecApi = [
  {
    secClassName: "animatedCardSec1",
    imgSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    imgSource2: "",
    videoSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
    downGif: "",
    h2:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    h1: "Enjoy on your TV."
  },
  {
    secClassName: "animatedCardSec2",
    imgSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    imgSource2:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png",
    videoSource: "",
    downGif: "true",
    h2: "Save your favourites easily and always have something to watch.",
    h1: "Download your shows to watch offline."
  },
  {
    secClassName: "animatedCardSec3",
    imgSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
    imgSource2: "",
    videoSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v",
    downGif: "",
    h2:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    h1: "Watch everywhere."
  },
  {
    secClassName: "animatedCardSec4",
    imgSource:
      "https://occ-0-4258-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf",
    imgSource2: "",
    videoSource: "",
    downGif: "false",
    h2:
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    h1: "Create profiles for children."
  }
];

// // -------------------------------------------------------------------------------------

export { logoImg };
