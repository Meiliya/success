const btw = [
{
  "whoFrom":"Me",
  "item":"hello you! ",
  "timestamp": "1525376014067"
},
{
  "whoFrom":"Margaret",
  "item":"OMG LISTEN TO ME!",
  "timestamp": "1525375753768"
},
{
  "whoFrom":"Myself",
  "item":"heyo!",
  "timestamp": "1525375985789"
}
];

function age(timestamp) {
var seconds = Math.floor((new Date() - timestamp) / 1000);
var years = Math.floor(seconds / 31536000);
var months = Math.floor(seconds / 259200);
var days = Math.floor(seconds / 86400);
var hours = Math.floor(seconds / 3600);
var minutes = Math.floor(seconds / 60);
  if (minutes < 1) {
    return seconds + " seconds ago"
} else if (hours < 1) {
    return minutes + " minutes ago"
} else if (days < 1) {
    return hours + " hours ago"
} else if (months < 1) {
    return days + " days ago"
} else if (years < 1) {
    return months + " months ago"
} else if (years > 1) {
    return years + " years ago"
}
}

function memoTemplate(btw) {
  return `
  <div class="memo">
  <h2 class="from"> <strong>From: </strong> ${btw.whoFrom} </h2>
  <p class="msg"> <strong>Message:</strong> ${btw.item} </p>
  <p class="time"> ${age(btw.timestamp)} </p>
</div>`
}


document.getElementById("app").innerHTML = `
<h1 class="title"> Submission Received </h1> 
<h2 class="subtitle"> (${btw.length} other memos found) </h2>
${btw.map(memoTemplate).join("")}
<p class=footer> Keep Updated! </p>
`
