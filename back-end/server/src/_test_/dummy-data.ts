/**
 * Example user.
 */
export const mockUser = {
    _id: 1004,
    userId: "usr004",
    name: "Collin",
    age: 22,
    favouriteColour: "Magenta",
};

/**
 * Duplicate user.
 */
export const duplicateUser = {
    _id: 1002,
	userId: "usr002",
	name: "Ben",
	age: 38,
	favouriteColour: "Green"
};

/**
 * Existing user with updates.
 */
export const updatedUser = {
    _id: 1002,
    userId: "usr002",
    name: "Ben Smith",
    age: 40,
    favouriteColour: "Mauve"
};
export default { mockUser, duplicateUser, updatedUser };