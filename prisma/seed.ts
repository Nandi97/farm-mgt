import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getMenus() {
	return [
		{ name: 'Dashboard', path: '/dashboard', icon: 'mdi-home' },
		{ name: 'Animals', path: '/animals', icon: 'mdi-cow' },
		{ name: 'Products', path: '/products', icon: 'mdi-package-variant' }
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

function getUnitsOfMeasurement() {
	return [
		{ unit: 'Kilogram', initial: 'Kg' },
		{ unit: 'Gram', initial: 'g' },
		{ unit: 'Litre', initial: 'Ltr' },
		{ unit: 'Milliliters', initial: 'Ml' },
		{ unit: 'Piece', initial: 'pc' },
		{ unit: 'Tray', initial: 'tray' }
	];
}

async function seed() {
	const menus = getMenus();
	const genders = getGenders();
	const animalTypes = getAnimalTypes();
	const unitsOfMeasurement = getUnitsOfMeasurement();

	for (const item of menus) {
		await prisma.menu.create({ data: item });
	}

	for (const item of genders) {
		await prisma.gender.create({ data: item });
	}

	for (const item of animalTypes) {
		await prisma.animalType.create({ data: item });
	}

	for (const item of unitsOfMeasurement) {
		await prisma.unitsOfMeasurement.create({ data: item });
	}
}

seed();
