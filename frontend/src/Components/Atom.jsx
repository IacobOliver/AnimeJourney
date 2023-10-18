import { atom } from "jotai";


const state = {
user : atom(null),
isLoggedIn : atom(false),


refreshAnime : atom(0),

play : atom(true),
mute :atom(false), 

newSeasonFilter : atom(["","All"]),
newSeasonPage : atom(0.1),

};
export default state;