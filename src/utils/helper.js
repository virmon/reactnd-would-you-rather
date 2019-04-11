// export function formatPoll (users, polls) {
//     const { name, avatarURL, timestamp, answers } = users
  
//     return {
//       name: poll ? users[poll.author].name : null,
//       avatarURL: poll ? users[poll.author].avatarURL : null,
//       text: text ? `...${text.substring(text.length/2, text.length)}...` : null,
//       optionOne: poll ? polls[id].optionOne.text : '',
//       optionTwo: poll ? polls[id].optionTwo.text : '',
//     }
// }

export function getUserIds (users, authedUser) {
  return users.name
}