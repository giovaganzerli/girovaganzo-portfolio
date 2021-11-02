import { controller } from 'controllerim';

// IMPORT IMAGES
import imgProfile2 from "../../../../assets/images/img-profile_2.png";

class _SectionAboutController {

    constructor() {
        // STATIC DATA
        this.dataContent = {
            name: "Giovanni Ganzerli",
            avatarImage: imgProfile2,
            content: "Hi 👋 and welcome aboard of my portfolio 🚀! My name is Giovanni Ganzerli, aka Girovaganzo, I'm "+ (new Date().getFullYear() - 1996) +" 👴 and I'm a digital enthusiast 💪 and adventure lover 😍. Well, the truth is that I like to do a lot of stuff and I'm always looking 👀 for new things to do, learn, discover and observe. I'm a sportsman 🏃‍, cyclist 🚴, explorer 🏔, world traveller 🌍, but simultaneously passionate about technology 🖥, web 🔗, electronic 📱 and social 📣.",
        };
        this.dataProgress = [
            {
                id: 1,
                title: "Design",
                percantage: 80,
                progressColor: "#6C6CE5",
            },
            {
                id: 2,
                title: "Development",
                percantage: 100,
                progressColor: "#FFD15C",
            },
            {
                id: 3,
                title: "Project & Team Managment",
                percantage: 90,
                progressColor: "#A42FA5",
            },
            {
                id: 4,
                title: "Initiative & Creativity",
                percantage: 100,
                progressColor: "#FF4C60",
            },
            {
                id: 5,
                title: "Social Skills",
                percantage: 80,
                progressColor: "#4cccb3",
            },
        ];
        this.dataCounter = [
            {
                id: 1,
                title: "Years old",
                count: new Date().getFullYear() - 1996,
                icon: "faCalendar",
            },
            {
                id: 2,
                title: "Km covered",
                count: 23675,
                icon: "faBicycle",
            },
            {
                id: 3,
                title: "Visited cities",
                count: 68,
                icon: "faGlobeEurope",
            },
            {
                id: 4,
                title: "Insta & YT Followers",
                count: 1310,
                icon: "faUsers",
            },
        ];
    }
}

export const SectionAboutController = controller(_SectionAboutController);