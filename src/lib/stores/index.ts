import { writable } from 'svelte/store';
import { format } from 'date-fns';

export const pageTitle = writable('');
export const formatDate = (date: Date) => {
	return format(new Date(date), 'MMMM d, yyyy');
};
