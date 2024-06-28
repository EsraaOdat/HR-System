const tasks = (localStorage.tasks && JSON.parse(localStorage.tasks)) || [];

// Count tasks
document.getElementById("to-do-tasks-count").innerText = tasks.filter(
  ({ status }) => status === "to-do"
).length;
document.getElementById("in-progress-tasks-count").innerText = tasks.filter(
  ({ status }) => status === "in-progress"
).length;
document.getElementById("completed-tasks-count").innerText = tasks.filter(
  ({ status }) => status === "completed"
).length;
document.getElementById("on-hold-tasks-count").innerText = tasks.filter(
  ({ status }) => status === "on-hold"
).length;

// Count tasks since yesterday
let now = new Date();
let count = tasks.filter(
  ({ status, date }) => status === "on-hold" && now - new Date(date) < 86400000
).length;
document.getElementById("on-hold-since-yesterday").innerText =
  count > 0 ? `+${count} since yesterday` : "";
count = tasks.filter(
  ({ status, date }) => status === "to-do" && now - new Date(date) < 86400000
).length;
document.getElementById("to-do-since-yesterday").innerText =
  count > 0 ? `+${count} since yesterday` : "";
count = tasks.filter(
  ({ status, date }) =>
    status === "in-progress" && now - new Date(date) < 86400000
).length;
document.getElementById("in-progress-since-yesterday").innerText =
  count > 0 ? `+${count} since yesterday` : "";
count = tasks.filter(
  ({ status, date }) =>
    status === "completed" && now - new Date(date) < 86400000
).length;
document.getElementById("completed-since-yesterday").innerText =
  count > 0 ? `+${count} since yesterday` : "";

function getTimeDifference(date1, date2) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = Math.abs(date2 - date1);

  if (elapsed < msPerMinute) {
    const seconds = Math.floor(elapsed / 1000);
    return `${seconds} second${seconds !== 1 ? "s" : ""}`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.floor(elapsed / msPerMinute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  } else if (elapsed < msPerDay) {
    const hours = Math.floor(elapsed / msPerHour);
    return `${hours} hour${hours !== 1 ? "s" : ""}`;
  } else if (elapsed < msPerMonth) {
    const days = Math.floor(elapsed / msPerDay);
    return `${days} day${days !== 1 ? "s" : ""}`;
  } else if (elapsed < msPerYear) {
    const months = Math.floor(elapsed / msPerMonth);
    return `${months} month${months !== 1 ? "s" : ""}`;
  } else {
    const years = Math.floor(elapsed / msPerYear);
    return `${years} year${years !== 1 ? "s" : ""}`;
  }
}

function createActionCard(action) {
  // Create the main div
  const activityDiv = document.createElement("div");
  activityDiv.className = "activity";

  // Create the user-activity div
  const userActivityDiv = document.createElement("div");
  userActivityDiv.className = "user-activety";

  // Create the user div
  const userDiv = document.createElement("div");
  userDiv.className = "user";

  // Create the avatar div
  const avatarDiv = document.createElement("div");
  avatarDiv.className = "avatar";

  // Create the img element
  const img = document.createElement("img");
  img.src = action.user.img
    ? action.user.img
    : "assets/images/profile_avatar.jpg";
  img.alt = "profile img";

  // Append img to avatar div
  avatarDiv.appendChild(img);

  // Create the user info div
  const userInfoDiv = document.createElement("div");

  // Create the h3 element
  const userName = document.createElement("h3");
  userName.textContent = action.user.userName;

  // Create the text-muted div
  const timeDiv = document.createElement("div");
  timeDiv.className = "text-muted";
  timeDiv.textContent =
    getTimeDifference(new Date(action.date), new Date()) + " ago";

  // Append userName and timeDiv to userInfoDiv
  userInfoDiv.appendChild(userName);
  userInfoDiv.appendChild(timeDiv);

  // Append avatarDiv and userInfoDiv to userDiv
  userDiv.appendChild(avatarDiv);
  userDiv.appendChild(userInfoDiv);
  // Create the action container div
  const actionContainerDiv = document.createElement("div");
  actionContainerDiv.className = "user mt-2";

  // Create the empty div
  const emptyDiv = document.createElement("div");

  // Create the action div
  const actionDiv = document.createElement("div");
  actionDiv.className = "action";

  // Create the action-title div
  const actionTitleDiv = document.createElement("div");
  actionTitleDiv.className = "action-title";
  actionTitleDiv.textContent = action.actionTitle;

  // Create the action body div
  const actionBodyDiv = document.createElement("div");
  actionBodyDiv.className = "text-muted";
  actionBodyDiv.textContent = action.actionBody;

  // Append actionTitleDiv and actionBodyDiv to actionDiv
  actionDiv.appendChild(actionTitleDiv);
  actionDiv.appendChild(actionBodyDiv);

  // Append emptyDiv and actionDiv to actionContainerDiv
  actionContainerDiv.appendChild(emptyDiv);
  actionContainerDiv.appendChild(actionDiv);

  // Append userDiv and actionContainerDiv to userActivityDiv
  userActivityDiv.appendChild(userDiv);
  userActivityDiv.appendChild(actionContainerDiv);

  // Append userActivityDiv to activityDiv
  activityDiv.appendChild(userActivityDiv);
  return activityDiv;
}

let activity_section = document.getElementById("recent-activities");
let actions = (localStorage.actions && JSON.parse(localStorage.actions)) || [];
actions.sort((a, b) => b.date - a.date);

actions.forEach((action) => {
  let action_card = createActionCard(action);
  activity_section.appendChild(action_card);
});
