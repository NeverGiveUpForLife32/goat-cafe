require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Organic Fruits', sortOrder: 10 },
		{ name: 'Organic Vegetables', sortOrder: 20 },
		{ name: 'Organic Proteins', sortOrder: 30 },
		{ name: 'Desserts', sortOrder: 40 },
		{ name: 'Beverages', sortOrder: 50 }
	]);

	await Item.deleteMany({});
	const items = await Item.create([
		{ name: 'Red Apple', emoji: '🍎', category: categories[0], price: 0.5 },
		{ name: 'Green Apple', emoji: '🍏', category: categories[0], price: 0.5 },
		{ name: 'Peach', emoji: '🍑', category: categories[0], price: 0.5 },
		{ name: 'Banana', emoji: '🍌', category: categories[0], price: 0.5 },
		{ name: 'Pineapple', emoji: '🍍', category: categories[0], price: 0.5 },
		{ name: 'Watermelon', emoji: '🍉', category: categories[0], price: 0.5 },
		{ name: 'Blueberry', emoji: '🫐', category: categories[0], price: 0.5 },
		{ name: 'Grape', emoji: '🍇', category: categories[0], price: 0.5 },
		{ name: 'Lemon', emoji: '🍋', category: categories[0], price: 0.5 },
		{ name: 'Orange', emoji: '🍊', category: categories[0], price: 0.5 },
		{ name: 'Kiwi', emoji: '🥝', category: categories[0], price: 0.5 },
		{ name: 'Mango', emoji: '🥭', category: categories[0], price: 0.5 },
		{ name: 'Strawberry', emoji: '🍓', category: categories[0], price: 0.5 },
		{ name: 'Avocado', emoji: '🥑', category: categories[0], price: 0.5 },
		{
			name: 'Green Bell Pepper',
			emoji: '🫑',
			category: categories[1],
			price: 0.5
		},
		{
			name: 'Spinach Leaves',
			emoji: '🥬',
			category: categories[1],
			price: 0.5
		},
		{ name: 'Corn', emoji: '🌽', category: categories[1], price: 0.5 },
		{ name: 'Lettuce', emoji: '🥬', category: categories[1], price: 0.5 },
		{ name: 'Kale', emoji: '🥬', category: categories[1], price: 0.5 },
		{
			name: 'Turnip Greens',
			emoji: '🥬',
			category: categories[1],
			price: 0.5
		},
		{ name: 'Broccoli', emoji: '🥦', category: categories[1], price: 0.5 },
		{ name: 'Potato', emoji: '🥔', category: categories[1], price: 0.5 },
		{ name: 'Carrot', emoji: '🥕', category: categories[1], price: 0.5 },
		{
			name: 'Chicken Breast',
			emoji: '🐓',
			category: categories[2],
			price: 4.85
		},
		{
			name: 'Turkey Breast',
			emoji: '🦃',
			category: categories[2],
			price: 4.85
		},
		{ name: 'Pork Chops', emoji: '🐷', category: categories[2], price: 3.95 },
		{ name: 'Tuna', emoji: '🐟', category: categories[2], price: 4.0 },
		{ name: 'T-Bone Steak', emoji: '🥩', category: categories[2], price: 5.45 },
		{ name: 'Shrimp', emoji: '🍤', category: categories[2], price: 5.3 },
		{ name: 'Lentils', emoji: '🥘', category: categories[2], price: 3.85 },
		{ name: 'Ham', emoji: '🍖', category: categories[2], price: 3.5 },
		{ name: 'Ground Beef', emoji: '🐄', category: categories[2], price: 3.25 },
		{ name: 'Salmon', emoji: '🍣', category: categories[2], price: 5.5 },
		{ name: 'Halibut', emoji: '🐟', category: categories[2], price: 4.5 },
		{ name: 'Tilapia', emoji: '🐟', category: categories[2], price: 4.5 },
		{ name: 'Cheesecake', emoji: '🍰', category: categories[3], price: 3.0 },
		{
			name: 'Chocolate Cake',
			emoji: '🎂',
			category: categories[3],
			price: 3.0
		},
		{
			name: 'Strawberry Cake',
			emoji: '🍰',
			category: categories[3],
			price: 3.0
		},
		{ name: 'Pecan Pie', emoji: '🥧', category: categories[3], price: 3.0 },
		{
			name: 'Sweet Potato Pie',
			emoji: '🥧',
			category: categories[3],
			price: 3.0
		},
		{ name: 'Pumpkin Pie', emoji: '🥧', category: categories[3], price: 3.0 },
		{ name: 'Coke', emoji: '🥤', category: categories[4], price: 2.5 },
		{ name: 'Sprite', emoji: '🥤', category: categories[4], price: 2.5 },
		{ name: 'Dr. Pepper', emoji: '🥤', category: categories[4], price: 2.5 },
		{ name: 'Mountain Dew', emoji: '🥤', category: categories[4], price: 2.5 },
		{ name: 'Root Beer', emoji: '🥤', category: categories[4], price: 2.5 },
		{
			name: 'Fanta Orange',
			emoji: '🥤',
			category: categories[4],
			price: 2.5
		},
		{
			name: 'Fanta Grape',
			emoji: '🥤',
			category: categories[4],
			price: 2.5
		},
		{ name: 'Canada Dry', emoji: '🥤', category: categories[4], price: 2.5 }
	]);

	console.log(items);

	process.exit();
})();
