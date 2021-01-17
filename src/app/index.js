window.onload = function home() {
  renderHome();
};

const xmenList = ['Professor X', 'Wolverine', 'Storm', 'Sabretooth', 'Mystique', 'Magneto', 'Cyclops', 'Angel', 'Armor', 'Beast', 'Bishop', 'Black Box', 'Blackheath', 'Colossus', 'Dazzler', 'Deathstrike', 'Detonator', 'Dr. Abraham Cornelius', 'Firestar', 'Forge', 'Guardian', 'Hard-Drive', 'Hulk', 'Husk', 'Iceman', 'Juggernaut', 'Karen Grant', 'Kathleen', 'Logan', 'Longshot', 'Lorelei', 'Mach II', 'Magician', 'Magma', 'Marvel Girl', 'Mastermind', 'Micromax', 'Multiple Man', 'Mutant animals', 'Nightcrawler', 'Orb Weaver', 'Prosimian', 'Psylocke', 'Pyro', 'Quicksilver', 'Rogue', 'Saluki', 'Scarlet Witch', 'Shadowcat', 'Stacy X', 'Sumatran', 'Syndicate', 'Toad', 'Unus', 'Vanisher', 'Vindicator', 'Warpath', 'Weapon X', 'Zero'];

const seriesList =['X-Men Series', 'X-Men', 'X-Men vol 2', 'New X-Men', 'Extermination', 'Ultimate X-Men', 'Astonishing X-Men', 'X-men blue', 'X-Men Gold', 'X-Men Red', 'Hunt For Wolverine', 'Old Man Logan', 'Weapon X', 'X-23', 'Death of X', 'Uncanny X-Men', 'X-Men: Legacy', 'All-New X-Men', 'Extraordinary X-Men'];
let desplegable=`<select id="desp" class="form-control mr-sm-2">`;
for (const serie of seriesList) {
  const listed =`<option value="${serie}">${serie}</option>`;
  desplegable = desplegable +listed;
}
// const hash = 'a60393fc5d02c70e798fbe9ed493d8d2';
// const apikey = 'e470055eb3b7da450f04cee9f8bf57df';
const hash ='7b1d382a3a8d4f13c2011fc61e3b58e4';
const apikey = '474c2ad23993ebeeec8a5cb84f98bf7c';


