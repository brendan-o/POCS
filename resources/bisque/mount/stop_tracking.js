/* Java Script */
sky6RASCOMTele.Abort();
sky6RASCOMTele.SetTracking(0, 1, 0, 0);
Out = JSON.stringify({
	"msg": 'Tracking stopped',
	"success": true,
});