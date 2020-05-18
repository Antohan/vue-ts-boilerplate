/**
 * People model.
 */
export default class People {
	name: string;
	height: string;
	mass: string;
	hairColor: string;
	skinColor: string;
	eyeColor: string;
	birthYear: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;

	constructor(data: People) {
		this.name = data.name;
		this.height = data.height;
		this.mass = data.mass;
		this.hairColor = data.hairColor;
		this.skinColor = data.skinColor;
		this.eyeColor = data.eyeColor;
		this.birthYear = data.birthYear;
		this.gender = data.gender;
		this.homeworld = data.homeworld;
		this.films = data.films;
		this.species = data.species;
		this.vehicles = data.vehicles;
		this.starships = data.starships;
		this.created = data.created;
		this.edited = data.edited;
		this.url = data.url;
	}  
}