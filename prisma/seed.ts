import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getMenus() {
	return [
		{ name: 'Dashboard', path: '/dashboard', icon: 'mdi-home' },
		{ name: 'Animals Management', path: '/animals', icon: 'mdi-cow' }
	];
}

function getGenders() {
	return [{ name: 'Female' }, { name: 'Male' }];
}

function getAnimalTypes() {
	return [
		{ name: 'Livestock', icon: 'mdi-cow' },
		{ name: 'Poultry', icon: 'mdi-turkey' },
		{ name: 'Fish', icon: 'mdi-fish' },
		{ name: 'Insects', icon: 'mdi-bee' }
	];
}

async function seed() {
	const menus = getMenus();
	const genders = getGenders();
	const animalTypes = getAnimalTypes();

	for (const item of menus) {
		await prisma.menu.create({ data: item });
	}

	for (const item of genders) {
		await prisma.gender.create({ data: item });
	}

	for (const item of animalTypes) {
		await prisma.animalType.create({ data: item });
	}
}

seed();
