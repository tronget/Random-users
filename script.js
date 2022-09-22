const generBtn = document.getElementById('generate-btn');
const userWrap = document.querySelector(".user");
generBtn.addEventListener('click', generateUser);

async function generateUser() {
	const response = await fetch('https://randomuser.me/api/');
	const responseJSON = await response.json();
	const data = responseJSON.results[0];
	let name = `${data.name.first} ${data.name.last}`;
	makeUser(name, data.picture.large, data.phone, data.email);
}
function makeUser(name, picture, phone, email) {
	userWrap.insertAdjacentHTML('afterbegin', `
		<img src="${picture}" alt="" style="display: block; margin-top: 30px;">
		<p>Name: ${name}</p>
		<p>Phone: ${phone}</p>
		<p>email: ${email}</p>
	`);
}