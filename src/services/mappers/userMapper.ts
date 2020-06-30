import User from "@/models/user";
import UserDto from "@/services/dtos/userDto";

/**
 * Map DTO to User model.
 *
 * @param dto User DTO.
 */
export default function peopleMapper(dto: UserDto): User {
  return new User({
    email: dto.email,
  });
}
