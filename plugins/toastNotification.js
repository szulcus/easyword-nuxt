export default ({ store }, inject) => {
	inject('toastNotification', (toast) => {
		const id = store.state.toasts.length + 1;
		store.commit('ADD_TOAST', { ...toast, id });
		setTimeout(() => {
			store.commit('DELETE_TOAST', id);
		}, toast.delay)
	})
}