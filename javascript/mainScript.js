
function setDates()
{
	let offset;
	const dates = document.getElementsByClassName('month-label');
	for (let i = 0; i < dates.length; i++)
	{
		offset = parseInt(dates[i].textContent) + monthDiff(new Date('2024-03-04T23:00:00.000Z'), new Date());
		dates[i].textContent = offset + " mesi fa";
	}
}

function monthDiff(dateFrom, dateTo) {
	return dateTo.getMonth() - dateFrom.getMonth() + 
	(12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

function hideCookieDialog()
{
	let cookieDialog = document.getElementById("cookie-dialog-id");
	cookieDialog.style = "display: none;"
}