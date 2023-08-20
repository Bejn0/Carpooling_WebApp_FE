export function login(user) {
  localStorage.setItem("transfy_user", JSON.stringify(user));
}

export function logout(user, api) {
  localStorage.removeItem("transfy_user");
}

export function isLoggedIn() {
  return localStorage.getItem("transfy_user") === null
    ? null
    : JSON.parse(localStorage.getItem("transfy_user"));
}
