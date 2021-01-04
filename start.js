const { exec } = require("child_process");

exec("set PORT=3000 && live-server --port=3000 --host=0.0.0.0 --no-browser", (error, data, getter) => {
	if(error){
		console.log("error",error.message);
		return;
	}
	if(getter){
		console.log("data",data);
		return;
	}
	console.log("data",data);
});