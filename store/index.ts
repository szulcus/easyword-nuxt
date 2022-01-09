import { getAccessorType, mutationTree, actionTree } from 'typed-vuex';
// import * as submodule from './submodule';


interface Toast {
	id: number;
	message: string;
	delay: number;
}
type User = object | null;

export const state = () => ({
	user: null as User,
	toasts: [] as Toast[],
});

export type RootState = ReturnType<typeof state>

export const getters = {};

export const mutations = mutationTree(state, {
	SET_USER(state, user) {
		state.user = user;
	},
	ADD_TOAST(state, toast) {
		const id = state.toasts.length + 1;
		state.toasts = state.toasts.concat({
			...toast,
			id: id,
		});
	},
	DELETE_TOAST(state, id) {
		state.toasts = state.toasts.filter(toast => toast.id !== id);
	}
});

export const actions = actionTree(
	{ state, getters, mutations },
	{
		async onAuthStateChangedAction(store, { authUser }) {
			if (!authUser) {
				store.commit('SET_USER', null)
				return;
			};
			const { uid, email } = authUser;
			store.commit('SET_USER', {
				uid,
				email
			})
		},
		async logOut() {
			try {
				this.$fire.auth.signOut();
			}
			catch(err) {
				console.error('Error: ', err);
			}
		},
		addToast(store, toast) {
			console.log(store.state, toast);
			const id = store.state.toasts.length + 1;
			store.commit('ADD_TOAST', { ...toast , id });
			setTimeout(() => {
				store.commit('DELETE_TOAST', id);
			}, toast.delay)
		}
	},
);

export const accessorType = getAccessorType({
	actions,
	getters,
	mutations,
	state,
	modules: {},
});

// export default {
// 	state() {
// 		return {
// 			user: null,
// 			toasts: [],
// 		}
// 	},
// 	getters: {},
// 	mutations: {
// 		SET_USER(state, user) {
// 			state.user = user;
// 		},
// 		ADD_TOAST(state, toast) {
// 			const id = state.toasts.length + 1;
// 			state.toasts = state.toasts.concat({
// 				...toast,
// 				id: id,
// 			});
// 		},
// 		DELETE_TOAST(state, id) {
// 			state.toasts = state.toasts.filter(toast => toast.id !== id);
// 		}
// 	},
// 	actions: {
// 		async onAuthStateChangedAction(store, { authUser }) {
// 			if (!authUser) {
// 				store.commit('SET_USER', null)
// 				return;
// 			};
// 			const { uid, email } = authUser;
// 			store.commit('SET_USER', {
// 				uid,
// 				email
// 			})
// 		},
// 		async logOut() {
// 			try {
// 				this.$fire.auth.signOut();
// 			}
// 			catch(err) {
// 				console.error('Error: ', err);
// 			}
// 		},
// 		addToast(store, toast) {
// 			console.log(store.state, toast);
// 			const id = store.state.toasts.length + 1;
// 			store.commit('ADD_TOAST', { ...toast , id });
// 			setTimeout(() => {
// 				store.commit('DELETE_TOAST', id);
// 			}, toast.delay)
// 		}
// 	},
// }