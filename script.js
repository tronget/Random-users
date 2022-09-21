const generBtn = document.getElementById('generate-btn');
const userWrap = document.querySelector(".user");
generBtn.addEventListener('click', generateUser);

function generateUser() {
	fetch('https://randomuser.me/api/').then(data => data.json())
	.then(data => data.results[0])
	.then(data => {
		let name = `${data.name.first} ${data.name.last}`;
		makeUser(name, data.picture.large, data.phone, data.email);
	});
}
function makeUser(name, picture, phone, email) {
	userWrap.insertAdjacentHTML('afterbegin', `
		<img src="${picture}" alt="" style="display: block; margin-top: 30px;">
		<p>Name: ${name}</p>
		<p>Phone: ${phone}</p>
		<p>email: ${email}</p>
	`);
}