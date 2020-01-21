
/* we represents applicaion data with JSON structure
   see https://www.w3schools.com/js/js_json_intro.asp
*/
/* I used an array to store all the six constellations, each of them is identifiable by 'name'*/
constellations = [
    { name: "Ursa Minor", mythology: "This constellation consists of seven stars in which the ancient Greek saw a female bear ( 'arctos', origin of 'arctic', the northern hemisphere). The myths tells the bear is the nymph Callixtus, serving Artemis, Goddess of hunting. Callixtus attracted Zeus’ love and get pregnant.  Artemis, Zeus spouse, get blurred by jealousy and took revenge transforming Callixtus in a bear, inciting her hounds against her. The drover Boote has two 'Hunting Dogs' on a leash. Zeus took action to take away Callixtus from such a miserable fate. He decided to transfer her in the sky, as an admirable star set with the appearance of a radiant figure. Dogs are another constellation and they run together after the Bear around the North Pole."},
    { name: "Ursa Major", mythology: "Ursa Major, well known as North Star, called Alruccabah (that means 'guide' in Arab), represents two nymph from Crete, Cinosura and Elice. Together the nymphs nurtured Zeus when he was a child. That was a paramount moment for the young Zeus: his father Kronos had a foretelling stating that he would have been dethroned by one of his children and for this reason he went on devouring them hand to hand while they grew up. Rea, Zeus mother, decided to bring  and hide the kid on the island, to protect him from his horrid destiny. Once grown up, Zeus made is destiny, dethroning his father saving his brothers. To praise the two nymphs Zeus set them amongst the stars." },
    { name: "Cepheus", mythology: "Cepheus, father of Andromeda, belongs to a tragic family story with Perseus and Cassiopeia and  thus gained his own place in the celestial vault by their side. He was the weak, pale and strayed king and father that attended silent and inert to the whole tragedy that encompassed the sacrifice of his daughter to save his life and reign. He promised Andromeda to Perseus, aware that the girl had been promised to his brother Fineo. Perseus won the monster but had to start a fight  with Fineo that ended with the massacre of all Fineo’s fellows. The Gods decided to set in the celestial vault all the characters of this sad story to let the human think about their destinies." },
    { name: "Cassiopeia", mythology: "Cassiopeia , vain queen on throne, rotates upside down around the celestial pole. Queen of Ethiopia, wife of Cepheus, Andromeda’s mother, prided herself of being prettier that the prettiest of the Nereids, nymphs of the Sea. The Nereids offended asked Poseidon help (the Romans Neptune). Poseidon dispatched them a sea monster, commanded to ravage the coasts of her Reign.  To appease Poseidon, Cassiopeia offered Andromeda chained to a cliff to be devoured by the monster. Perseus, son of Zeus, came flying with winged sandals done by Stigyan Nymph. He came back from killing of Medusa, whose blood gave life to Pegasus, a flying horse. Riding Pegasus, set Andromeda free, he get her wedding vows and transformed in stone the sea monster" },
    //{ name: "Perseus", mythology: "" },
    { name: "Draco", mythology: "This constellation represents Ladon, guardian of the Hesperides’ apples. During Zeus and Juno wedding, the Earth  donated to the couple fruit trees, surveilled by four nymphs, the Hesperides, and helped by a fierce dragon, Ladon. The hundred heads dragon was able to imitate the sound of every animal, including the human voice. When the dragon felt the presence of intruders in the garden, he started to yell and shout, letting them run away. Enter the garden was so difficult that the task is within the twelve Labours of Hercules. With the help of Atlante, Hercules shot an arrow that killed the dragon. Hera (Juno), upset over the incident, decided to place the Dragon as a constellation in the Celestial Vault." },
    { name: "Camelopardalis", mythology: "Originally called Giraffa, It is a small constellation hidden in a dark area of the Northern Sky.  It is a 'modern' one, as it has been introduced in 1624 by the Dutch astronomer Jacob Bartsch, Keplero’s son in law. This story tells us of another Dutch scholar, Petrus Plancius, discovering the set hundred years before. There is no conclusive mythological tales for this constellation, we consider that a giraffe was the gentle animal that carried Rebekah to marry Isaac in Canaan. The Giraffa’s stars belonged to other constellations, they had to wait 1624 to be finally grouped and named thanks to the peculiar shape they set in the sky. The name “Giraffa” recently changed into the the more scientific and modern  'Camelopardalis'." },
]

/* I used another array to store each star  */
stars = [

  /* ursa minor */

  {
      name: "Polaris", constellation: "Ursa Minor", distance: "432.6 ly", magnitude: "+1.97 (+1.95 to +1.99)",
      absolute_magnitude: "−3.643", luminosity: "2,496× Sun", spectral_type: "F7:Ib-IIv SB"

  },

  {
      name: "Pherkad", constellation: "Ursa Minor", distance: "486.8 ly", magnitude: "+3 (+3 to +3.02)",
      absolute_magnitude: "−2.87", luminosity: "1,225× Sun", spectral_type: "A3II-III"

  },

  {
      name: "Kochab", constellation: "Ursa Minor", distance: "130.9 ly", magnitude: "+2.07",
      absolute_magnitude: "−0.948", luminosity: "209× Sun", spectral_type: "K4IIIvar"

  },

  {
      name: "Eta Ursae Minoris", constellation: "Ursa Minor", distance: "97 ly", magnitude: "+4.95",
      absolute_magnitude: "+2.584", luminosity: "8× Sun", spectral_type: "F5V"

  },

  {
      name: "Zeta Ursae Minoris", constellation: "Ursa Minor", distance: "369 ly", magnitude: "+4.29",
      absolute_magnitude: "−0.978", luminosity: "214× Sun", spectral_type: "A3Vn"

  },

  {
      name: "Epsilon Ursae Minoris", constellation: "Ursa Minor", distance: "304 ly", magnitude: "+4.21 (+4.2 to +4.25)",
      absolute_magnitude: "−0.637", luminosity: "157× Sun", spectral_type: "G5IIIvar"

  },

  {
      name: "Yildun", constellation: "Ursa Minor", distance: "172.1 ly", magnitude: "+4.35",
      absolute_magnitude: "+0.738", luminosity: "44× Sun", spectral_type: "A1Vn"

  },

    /* Ursa Major */

    {
        name: "Alkaid", constellation: "Ursa Major", distance: "103.9 ly", magnitude: "+1.85",
        absolute_magnitude: "−0.667", luminosity: "161× Sun", spectral_type: "B3V SB"

    },

    {
        name: "Mizar", constellation: "Ursa Major", distance: "85.8 ly", magnitude: "+2.23 (+2.2 to +2.34)",
        absolute_magnitude: "+0.129", luminosity: "77× Sun", spectral_type: "A2V"

    },

    {
        name: "Alioth", constellation: "Ursa Major", distance: "82.6 ly", magnitude: "+1.76 (+1.75 to +1.78)",
        absolute_magnitude: "−0.256", luminosity: "110× Sun", spectral_type: "A0p"

    },

    {
        name: "Megrez", constellation: "Ursa Major", distance: "80.5 ly", magnitude: "+3.32",
        absolute_magnitude: "+1.358", luminosity: "25× Sun", spectral_type: "A3Vvar"

    },

    {
        name: "Phecda", constellation: "Ursa Major", distance: "83.2 ly", magnitude: "+2.41",
        absolute_magnitude: "+0.377", luminosity: "62× Sun", spectral_type: "A0V SB"

    },

    {
        name: "Dubhe", constellation: "Ursa Major", distance: "122.9 ly", magnitude: "+1.81",
        absolute_magnitude: "−1.07", luminosity: "233× Sun", spectral_type: "F7V comp"

    },

    {
        name: "Merak", constellation: "Ursa Major", distance: "79.7 ly", magnitude: "+2.34",
        absolute_magnitude: "+0.399", luminosity: "60× Sun", spectral_type: "A1V"

    },

    {
        name: "Psi Ursae Majoris", constellation: "Ursa Major", distance: "144.5 ly", magnitude: "+3",
        absolute_magnitude: "−0.232", luminosity: "108× Sun", spectral_type: "K1III"

    },

    {
        name: "Tania Borealis", constellation: "Ursa Major", distance: "137.5 ly", magnitude: "+3.45",
        absolute_magnitude: "+0.326", luminosity: "65× Sun", spectral_type: "A2IV"

    },

    {
        name: "Tania Australis", constellation: "Ursa Major", distance: "230.3 ly", magnitude: "+3.06",
        absolute_magnitude: "−1.185", luminosity: "259× Sun", spectral_type: "M0III SB"

    },

    {
        name: "h Ursae Majoris", constellation: "Ursa Major", distance: "77.7 ly", magnitude: "+3.65",
        absolute_magnitude: "+1.766", luminosity: "17× Sun", spectral_type: "F0IV"

    },

    {
        name: "Upsilon Ursae Majoris", constellation: "Ursa Major", distance: "116.2 ly", magnitude: "+3.78 (+3.74 to +3.81)",
        absolute_magnitude: "+1.02", luminosity: "34× Sun", spectral_type: "F0IV"

    },

    {
        name: "Theta Ursae Majoris", constellation: "Ursa Major", distance: "44 ly", magnitude: "+3.17",
        absolute_magnitude: "+2.522", luminosity: "9× Sun", spectral_type: "F6IV"

    },

    {
        name: "Muscida", constellation: "Ursa Major", distance: "179.1 ly", magnitude: "+3.35",
        absolute_magnitude: "−0.348", luminosity: "120× Sun", spectral_type: "G4II-III"

    },

    {
        name: "Talitha", constellation: "Ursa Major", distance: "47.3 ly", magnitude: "+3.12",
        absolute_magnitude: "+2.312", luminosity: "10× Sun", spectral_type: "A7IV"

    },

    {
        name: "Alkaphrah", constellation: "Ursa Major", distance: "358.4 ly", magnitude: "+3.57",
        absolute_magnitude: "−1.635", luminosity: "393× Sun", spectral_type: "A1Vn"

    },


    /* Cepheus */

    {
        name: "Alfirk", constellation: "Cepheus", distance: "685.2 ly", magnitude: "+3.23 (+3.21 to +3.26)",
        absolute_magnitude: "−3.382", luminosity: "1,962× Sun", spectral_type: "B2IIIv SB"
    },

    {
        name: "Errai", constellation: "Cepheus", distance: "46 ly", magnitude: "+3.21",
        absolute_magnitude: "+2.464", luminosity: "9× Sun", spectral_type: "K1IV"
    },

    {
        name: "Iota Cephei", constellation: "Cepheus", distance: "115.3 ly", magnitude: "+3.5",
        absolute_magnitude: "+0.758", luminosity: "43× Sun", spectral_type: "K0III"
    },

    {
        name: "Zeta Cephei", constellation: "Cepheus", distance: "836.3 ly", magnitude: "+3.39 (+3.38 to +3.42)",
        absolute_magnitude: "−3.655", luminosity: "2,523× Sun", spectral_type: "K1Ibv SB"
    },

    {
        name: "Alderamin", constellation: "Cepheus", distance: "49 ly", magnitude: "+2.45",
        absolute_magnitude: "+1.564", luminosity: "21× Sun", spectral_type: "A7IV-V"
    },

    /* Cassiopeia */

    {
        name: "Caph", constellation: "Cassiopeia", distance: "54.7 ly", magnitude: "+2.28 (+2.26 to +2.3)",
        absolute_magnitude: "+1.155", luminosity: "30× Sun", spectral_type: "F2III-IV"
    },

    {
        name: "Schedar", constellation: "Cassiopeia", distance: "228.2 ly", magnitude: "+2.24 (+2.23 to +2.25)",
        absolute_magnitude: "−1.985", luminosity: "542× Sun", spectral_type: "K0II-IIIvar"
    },

    {
        name: "Cih", constellation: "Cassiopeia", distance: "549.1 ly", magnitude: "+2.15 (+2.13 to +2.17)",
        absolute_magnitude: "−3.981", luminosity: "3,407× Sun", spectral_type: "B0IV:evar"
    },

    {
        name: "Ruchbah", constellation: "Cassiopeia", distance: "99.4 ly", magnitude: "+2.66 (+2.66 to +2.67)",
        absolute_magnitude: "+0.24", luminosity: "70× Sun", spectral_type: "A5Vv SB"
    },

    {
        name: "Segin", constellation: "Cassiopeia", distance: "411.8 ly", magnitude: "+3.35",
        absolute_magnitude: "−2.156", luminosity: "634× Sun", spectral_type: "B2pvar"
    },

    /* Perseus */

    {
        name: "Delta Persei", constellation: "Perseus", distance: "516.1 ly", magnitude: "+3.01 (+3 to +3.02)",
        absolute_magnitude: "−2.986", luminosity: "1,363× Sun", spectral_type: "B5III SB"
    },

    {
        name: "Mirfak", constellation: "Perseus", distance: "506.5 ly", magnitude: "+1.79",
        absolute_magnitude: "−4.166", luminosity: "4,040× Sun", spectral_type: "F5Ib"
    },

    {
        name: "Gamma Persei", constellation: "Perseus", distance: "243.2 ly", magnitude: "+2.91 (+2.9 to +2.92)",
        absolute_magnitude: "−1.453", luminosity: "332× Sun", spectral_type: "G8III+"
    },

    {
        name: "Miram", constellation: "Perseus", distance: "879.1 ly", magnitude: "+3.77",
        absolute_magnitude: "−3.383", luminosity: "1,964× Sun", spectral_type: "K3Ib comp SB"
    },

    {
        name: "Algol", constellation: "Perseus", distance: "89.9 ly", magnitude: "+2.09 (+2.07 to +2.21)",
        absolute_magnitude: "−0.112", luminosity: "97× Sun", spectral_type: "B8V"
    },

    {
        name: "Rho Persei", constellation: "Perseus", distance: "307.7 ly", magnitude: "+3.32 (+3.26 to +3.46)",
        absolute_magnitude: "−1.553", luminosity: "364× Sun", spectral_type: "M3IIIvar"
    },

    {
        name: "Epsilon Persei", constellation: "Perseus", distance: "638.3 ly", magnitude: "+2.9 (+2.89 to +2.92)",
        absolute_magnitude: "−3.558", luminosity: "2,308× Sun", spectral_type: "B0.5V"
    },

    {
        name: "16 Persei", constellation: "Perseus", distance: "120.8 ly", magnitude: "+4.22",
        absolute_magnitude: "+1.378", luminosity: "24× Sun", spectral_type: "F2III"
    },

    {
        name: "Menkib", constellation: "Perseus", distance: "1,244.9 ly", magnitude: "+3.98 (+3.97 to +3.99)",
        absolute_magnitude: "−3.928", luminosity: "3,245× Sun", spectral_type: "O7.5Iab:"
    },

    {
        name: "Atik", constellation: "Perseus", distance: "1,120.8 ly", magnitude: "+3.84 (+3.82 to +3.86)",
        absolute_magnitude: "−3.841", luminosity: "2,995× Sun", spectral_type: "B1III"
    },

    {
        name: "Zeta Persei", constellation: "Perseus", distance: "751.5 ly", magnitude: "+2.84",
        absolute_magnitude: "−3.973", luminosity: "3,382× Sun", spectral_type: "B1Ib"
    },

    /* Draco */

    {
        name: "Eltanin", constellation: "Draco", distance: "154.3 ly", magnitude: "+2.24",
        absolute_magnitude: "−1.134", luminosity: "248× Sun", spectral_type: "K5III"
    },

    {
        name: "Nu² Draconis", constellation: "Draco", distance: "99.4 ly", magnitude: "+4.86",
        absolute_magnitude: "+2.439", luminosity: "9× Sun", spectral_type: "Am"
    },

    {
        name: "Rastaban", constellation: "Draco", distance: "380.1 ly", magnitude: "+2.79",
        absolute_magnitude: "−2.543", luminosity: "906× Sun", spectral_type: "G2II"
    },

    {
        name: "Grumium", constellation: "Draco", distance: "112.5 ly", magnitude: "+3.73",
        absolute_magnitude: "+1.04", luminosity: "33× Sun", spectral_type: "K2III"
    },

    {
        name: "Altais", constellation: "Draco", distance: "97.4 ly", magnitude: "+3.07",
        absolute_magnitude: "+0.694", luminosity: "46× Sun", spectral_type: "G9III"
    },

    {
        name: "Epsilon Draconis", constellation: "Draco", distance: "148 ly", magnitude: "+3.84",
        absolute_magnitude: "+0.556", luminosity: "52× Sun", spectral_type: "G8III"
    },

    {
        name: "Tau Draconis", constellation: "Draco", distance: "146.4 ly", magnitude: "+4.45",
        absolute_magnitude: "+1.19", luminosity: "29× Sun", spectral_type: "K3III"
    },

    {
        name: "Chi Draconis", constellation: "Draco", distance: "26.3 ly", magnitude: "+3.55",
        absolute_magnitude: "+4.019", luminosity: "2× Sun", spectral_type: "F7Vvar"
    },

    {
        name: "Aldhibah", constellation: "Draco", distance: "328.5 ly", magnitude: "+3.17",
        absolute_magnitude: "−1.845", luminosity: "476× Sun", spectral_type: "B6III"
    },

    {
        name: "Athebyne", constellation: "Draco", distance: "92.1 ly", magnitude: "+2.73",
        absolute_magnitude: "+0.476", luminosity: "56× Sun", spectral_type: "G8III"
    },

    {
        name: "Theta Draconis", constellation: "Draco", distance: "68.6 ly", magnitude: "+4.01",
        absolute_magnitude: "+2.395", luminosity: "10× Sun", spectral_type: "F8IV-V"
    },

    {
        name: "Edasich", constellation: "Draco", distance: "101.2 ly", magnitude: "+3.29",
        absolute_magnitude: "+0.831", luminosity: "41× Sun", spectral_type: "K2III"
    },

    {
        name: "Thuban", constellation: "Draco", distance: "303.1 ly", magnitude: "+3.67",
        absolute_magnitude: "−1.171", luminosity: "256× Sun", spectral_type: "A0III SB"
    },

    {
        name: "Kappa Draconis", constellation: "Draco", distance: "490.5 ly", magnitude: "+3.85 (+3.83 to +3.86)",
        absolute_magnitude: "−2.036", luminosity: "568× Sun", spectral_type: "B6IIIp"
    },

    {
        name: "Giausar", constellation: "Draco", distance: "333.2 ly", magnitude: "+3.82",
        absolute_magnitude: "−1.226", luminosity: "269× Sun", spectral_type: "M0IIIvar"
    },

    /* Camelopardalis */

    {
        name: "H Camelopardalis", constellation: "Camelopardalis", distance: "360.8 ly", magnitude: "+4.95",
        absolute_magnitude: "−0.269", luminosity: "112× Sun", spectral_type: "B9.5V"
    },

    {
        name: "Gamma Camelopardalis", constellation: "Camelopardalis", distance: "358.8 ly", magnitude: "+4.59",
        absolute_magnitude: "−0.617", luminosity: "154× Sun", spectral_type: "A2IVn"
    },

    {
        name: "B Camelopardalis", constellation: "Camelopardalis", distance: "1,941.4 ly", magnitude: "+4.21 (+4.18 to +4.24)",
        absolute_magnitude: "−4.663", luminosity: "6,386× Sun", spectral_type: "B9Ia"
    },

    {
        name: "K Camelopardalis", constellation: "Camelopardalis", distance: "68.1 ly", magnitude: "+5.08",
        absolute_magnitude: "+3.481", luminosity: "4× Sun", spectral_type: "F6V"
    },

    {
        name: "Alpha Camelopardalis", constellation: "Camelopardalis", distance: "326,156 ly", magnitude: "+4.26",
        absolute_magnitude: "-15.74", luminosity: "172,186,857× Sun", spectral_type: "O9.5Ia SB:"
    },


]
/* This function returns the mythology and it has as input the name of the constellation of wich
 we are looking forward reading the mythology */
function get_mythology(name) {
  return constellations.find(constellation => constellation.name == name).mythology; /* Here we use another function, in which we want to identify the name of the constellation we are looking for */
}

/* this function contains all the operations that need to be attained when the mouse will point at another constellation */
function constellation_enter(event) {
    console.log("entering " + event.target.id) /* I used  log  console to check if the page is responding properly */
    event.target.style.opacity = 1 /* it changes the opacity of the constellation we have just pointed with the mouse */

    /* clear star detail */
    var star_detail = document.getElementById("star_detail");
    star_detail.innerHTML = "<p></p>"

    /* I update the name of the constellation, changing from the previous constellation I pointed to the current one */
    var constellation_name = document.getElementById("constellation_name");
    constellation_name.innerText = event.target.id;
    /* the same happens to the mythology */
    var constellation_mythology = document.getElementById("constellation_mythology");
    constellation_mythology.innerText = get_mythology(event.target.id);

    /* reset opacity after a short delay */
    setTimeout(function () {
        event.target.style.opacity = 0.7
    }, 500);
}

function constellation_over(event) {
    console.log("leaving" + event.target.id)

    // reset opacity after a short delay
    setTimeout(function () {
        event.target.style.opacity = 0.7
    }, 200);
}

function get_star(name) {
    return stars.find(star => star.name == name);
  }

function star_enter(event) {
    console.log("entering star " + event.target.id)

    // highlight the mouseenter target
    event.target.style.fill = "#ffe572"

    // find star
    var star = get_star(event.target.id);
    console.log("found star " + star.name + " in constellation " + star.constellation);

    // update star info

    var star_detail = document.getElementById("star_detail");
/* Update the content of the table with the data from the entered star */
    star_detail.innerHTML = `<h2 class="star_name">${star.name}</h2>`
		+ `<table class="specific_star">`
		+ `	<tr>`
	    + `		<th> Magnitude </th>`
        + `		<th> Absolute magnitude </th>`
        + `		<th> Luminosity </th>`
		+ `		<th> Spectral type </th>`
		+ `		<th> Distance from earth </th>`
		+ `	</tr>`
		+ `	<tr>`
		+ `		<td> ${star.magnitude} </td>`
		+ `		<td> ${star.absolute_magnitude} </td>`
		+ `		<td> ${star.luminosity} </td>`
		+ `		<td> ${star.spectral_type} </td>`
		+ `		<td> ${star.distance} </td>`
		+ `	</tr>`
        + `</table>`;

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.fill = "";
    }, 500);
}

function star_over(event) {
    console.log("leaving star " + event.target.id)

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.fill = "";
    }, 200);
}

window.addEventListener('load', function () {
    console.log('loading')

    /* add mouse handler for constellation class */

    var classname = document.getElementsByClassName("constellation"); /*I'm storing in classname tutti gli elementi che ho nel documentoe appartengono alla classe "constellation"*/
    Array.from(classname).forEach(function (element) { /* For each of the saved elements in classname I define 2 listeners of events that get activated when the mouse entered or left the object*/
        element.addEventListener('mouseenter', constellation_enter); /* I define what to do when the mouse enter the constellation, that is call the function constellation_enter */
        element.addEventListener('mouseover', constellation_over);
    });

    /* add mouse handler for star classes, as I did above for constellation but for the class st3:
    Define what to do when the mouse enter and leave a star.*/
    var classname = document.getElementsByClassName("st3");
    Array.from(classname).forEach(function (element) {

        element.addEventListener('mouseenter', star_enter);
        element.addEventListener('mouseover', star_over);
    });

    /* add mouse handler for star classes, as I did above for constellation but for the class st5:
    Define what to do when the mouse enter and leave a star.*/
    var classname = document.getElementsByClassName("st5");
    Array.from(classname).forEach(function (element) {

        element.addEventListener('mouseenter', star_enter);
        element.addEventListener('mouseover', star_over);
    });
})
