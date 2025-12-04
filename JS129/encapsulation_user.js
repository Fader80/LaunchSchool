class User {
  #password;

  #validatePassword(password) {
    if (typeof password !== 'string' || password.length < 8) throw new Error('password must be a string at least 8 characters long');
  }

  constructor(username, password) {
    this.username = username;
    this.#validatePassword(password);
    this.#password = password;
  }

  authenticate(attemptedPassword) {
    return attemptedPassword === this.#password;
  }

  changePassword(oldPassword, newPassword) {
    if (oldPassword !== this.#password) {
      console.log('Authentication failed');
      return;
    }
    this.#validatePassword(newPassword);
    this.#password = newPassword;
    console.log('Password updated successfully');

  }
}


// Create a new user
let user1 = new User('testuser', 'password123');
// console.log(user1.username); // => 'testuser'

// // 1. Test direct access to the password (should fail)
// console.log(user1.password);   // => undefined
// console.log(user1.#password);  // => SyntaxError

// // 2. Test authentication
// console.log(user1.authenticate('wrongpass')); // => false
// console.log(user1.authenticate('password123')); // => true

// // 3. Test password change
user1.changePassword('wrongpass', 'newpassword456'); // Should log "Authentication failed"
//user1.changePassword('password123', 'short');      // Should log an error about length
user1.changePassword('password123', 'newpassword456'); // Should log "Password updated successfully"

// // 4.
// Verify the new password works
console.log(user1.authenticate(123)); // => false
console.log(user1.authenticate('newpassword456')); // => true
