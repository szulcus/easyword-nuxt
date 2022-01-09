export default ({ redirect, route }) => {
	if (Math.random() > 0.5) {
		redirect({ name: route.name})
		// console.log(from);
		// return false;
	}
}