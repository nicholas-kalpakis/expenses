export const ExpensesData = [
	{
		id: Math.random(),
		title: 'Car Insurance',
		price: 125,
		date: new Date(2021, 2, 27)
	},
	{
		id: Math.random(),
		title: 'Rent',
		price: 800.00,
		date: new Date(2021, 2, 27)
	},
	{
		id: Math.random(),
		title: 'Phone Bill',
		price: 105.00,
		date: new Date(2021, 2, 27)
	},
	{
		id: Math.random(),
		title: 'Cable & Wifi',
		price: 120,
		date: new Date(2021, 2, 27)
	},
	{
		id: Math.random(),
		title: 'Car Insurance',
		price: 125,
		date: new Date(2021, 3, 27)
	},
	{
		id: Math.random(),
		title: 'Rent',
		price: 800.00,
		date: new Date(2021, 3, 27)
	},
	{
		id: Math.random(),
		title: 'Phone Bill',
		price: 105.00,
		date: new Date(2021, 3, 27)
	},
	{
		id: Math.random(),
		title: 'Cable & Wifi',
		price: 120,
		date: new Date(2021, 3, 27)
	},
	{
		id: Math.random(),
		title: 'Gas',
		price: 150,
		date: new Date(2021, 3, 27)
	}
]

export const MONTHS = {
	JANUARY: {name: "January", num: 1, abv: "Jan"},
	FEBRURARY: {name: "February", num: 2, abv: "Feb"},
	MARCH: { name: "March", num: 3, abv: "Mar"},
	APRIL: {name: "April", num: 4, abv: "Apr"},
	MAY: {name: "May", num: 5, abv: "May"},
	JUNE: {name: "June", num: 6, abv: "Jun"},
	JULY: {name: "July", num: 7, abv: "Jul"},
	AUGUST: {name: "August", num: 8, abv: "Aug"},
	SEPTEMBER: {name: "September", num: 9, abv: "Sept"},
	OCTOBER: {name: "October", num: 10, abv: "Oct"},
	NOVEMBER: {name: "November", num: 11, abv: "Nov"},
	DECEMBER: {name: "December", num: 12, abv: "Dec"}
}

export const mapNumToMonth = (num) => {
	for (const month in MONTHS) {
		if (MONTHS[month].num === num){
			return month
		}
	}
}