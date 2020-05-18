import PeopleDto from '../dtos/PeopleDto';
import People from '../models/People';

/**
 * Map DTO to People model.
 *
 * @param dto People DTO.
 */
export default function peopleMapper(dto: PeopleDto): People {
	return new People({
		name: dto.name,
		height: dto.height,
		mass: dto.mass,
		hairColor: dto.hair_color,
		skinColor: dto.skin_color,
		eyeColor: dto.eye_color,
		birthYear: dto.birth_year,
		gender: dto.gender,
		homeworld: dto.homeworld,
		films: dto.films,
		species: dto.species,
		vehicles: dto.vehicles,
		starships: dto.starships,
		created: dto.created,
		edited: dto.edited,
		url: dto.url,
	});
}