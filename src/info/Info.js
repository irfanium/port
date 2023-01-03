import self from "../img/self.png"
import mock1 from "../img/port1.png"
import mock2 from "../img/port2.png"
import mock3 from "../img/port3.png"
import mock4 from "../img/port4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Irfan",
    lastName: "Gudin",
    initials: "Home", // the example uses first and last, but feel free to use three or more if you like.
    position: "Senior Staff IT",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☎️',
            text: '083808552271'
        },
        {
            emoji: '🌎',
            text: 'based Cileungsi Bogor Jawa Barat'
        },
        {
            emoji: "💼",
            text: "Senior Staff IT GS Retail"
        },
        {
            emoji: "📧",
            text: "irfangudin9sttsn@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/irfan-2771a0101",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Irfan. i am quick learner, and i effort for everything i did,I'm ordinary people who likes new learning and always wanted to learn. I’m strong , I’d like to challenge my self to increase potential I have. I prefer make a plan to get or do my job.",
    skills:
        {
            proficientWith: ['php', 'react', 'html', 'MS Office', 'TroubleShoot'],
            exposedTo: ['nodejs', 'Adobe Photoshop', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            image: mock1
        },
        {
            title: "Project 2",
            image: mock2
        },
        {
            title: "Project 3",
            image: mock3
        },
        {
            title: "Project 4",
            image: mock4
        }
       
    ]
}