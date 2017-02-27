/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Florian",
            last: "Migot",
            age: 25,
            description: "I'm a developer",
            thumbnail: "https://s-media-cache-ak0.pinimg.com/736x/6c/59/2f/6c592f5c5fcc48fa3564490d8e55ddf2.jpg"
        },
        {
            id: 2,
            first: "Jack",
            last: "White",
            age: 56,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "http://nordpresse.be/wp-content/uploads/2017/01/chicken___12_by_aivisv-d8wnl5d.jpg"
        },
        {
            id: 3,
            first: "Joe",
            last: "Carl",
            age: 47,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Alectura_lathami_-_Centenary_Lakes.jpg"
        }
    ]
}
