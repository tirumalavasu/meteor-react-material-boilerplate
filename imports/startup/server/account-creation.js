Accounts.onCreateUser(function(options, user) {
    // Use provided profile in options, or create an empty profile object
    user.profile = options.profile || {};

    // Assigns the first and last names to the newly created user object
    user.profile.firstName = options.firstName;
    user.profile.lastName = options.lastName;
    user.profile.fullName = options.firstName + ' ' + options.lastName;
    user.profile.country = options.country;

    // Basic Prof Picture Setup
    user.profile.avatar = options.avatar;
    //Basic Role Set Up
    user.roles = ["User"];

    // Returns the user object
    return user;
});
