import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getMenus() {
	return [
		{ name: 'Dashboard', path: '/dashboard', icon: 'mdi-home' },
		{ name: 'Staff Management', path: '/users', icon: 'mdi-account-group-outline' },
		{ name: 'Animals', path: '/animals', icon: 'mdi-cow' },
		{ name: 'Products', path: '/products', icon: 'mdi-package-variant' },
		{ name: 'Production Management', path: '/production', icon: 'mdi-factory' }
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

function getAnimalCategories() {
	return [
		{ name: 'Cattle', typeId: 1 },
		{ name: 'Goat', typeId: 1 },
		{ name: 'Sheep', typeId: 1 },
		{ name: 'Donkey', typeId: 1 },
		{ name: 'Pig', typeId: 1 },
		{ name: 'Rabbit', typeId: 1 },
		{ name: 'Chicken', typeId: 2 },
		{ name: 'Turkey', typeId: 2 },
		{ name: 'Goose', typeId: 2 },
		{ name: 'Duck', typeId: 2 },
		{ name: 'Pigeon', typeId: 2 },
		{ name: 'Quail', typeId: 2 },
		{ name: 'Guinea Fowl', typeId: 2 },
		{ name: 'Bee', typeId: 4 }
	];
}

function getUoms() {
	return [
		{ unit: 'Kilogram', initial: 'kg' },
		{ unit: 'Gram', initial: 'g' },
		{ unit: 'Litre', initial: 'ltr' },
		{ unit: 'Milliliters', initial: 'ml' },
		{ unit: 'Piece', initial: 'pc' },
		{ unit: 'Tray', initial: 'tray' }
	];
}

function getRoles() {
	return [{ name: 'Admin', description: 'User is Admin' }];
}

function getUsers() {
	return [
		{ name: 'Alvin Kigen', email: 'alvinkigen997@gmail.com', phoneNo: '0712012246', roleId: 1 }
	];
}

async function seed() {
	const roles = getRoles();
	const users = getUsers();
	const menus = getMenus();
	const genders = getGenders();
	const animalTypes = getAnimalTypes();
	const animalCategories = getAnimalCategories();
	const uoms = getUoms();

	for (const item of roles) {
		await prisma.role.create({ data: item });
	}

	for (const item of users) {
		await prisma.user.create({ data: item });
	}

	for (const item of menus) {
		await prisma.menu.create({ data: item });
	}

	for (const item of genders) {
		await prisma.gender.create({ data: item });
	}

	for (const item of animalTypes) {
		await prisma.animalType.create({ data: item });
	}

	for (const item of animalCategories) {
		await prisma.animalCategory.create({ data: item });
	}

	for (const item of uoms) {
		await prisma.unitOfMeasurement.create({ data: item });
	}
}

seed();
