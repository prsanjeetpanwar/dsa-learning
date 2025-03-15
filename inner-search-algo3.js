const userDatabase = [
    ["admin", "1234"],
    ["user1", "qwerty"],
    ["john_doe", "pass123"],
    ["hacker007", "letmein"],
    ["agent47", "silentassassin"]
];

const findThePassword = (userData, username) => {
   for (let i = 0; i < userData.length; i++) {
      const [storedUsername, password] = userData[i];
      if (storedUsername.toLowerCase() === username.toLowerCase()) {
          return `🔓 Password: ${password}`;
      }
   }
   return "❌ ACCESS DENIED";
}

console.log(findThePassword(userDatabase, "agent47"));   
console.log(findThePassword(userDatabase, "hacker007")); 
console.log(findThePassword(userDatabase, "unknown"));   
