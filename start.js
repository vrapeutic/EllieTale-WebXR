const { exec } = require("child_process");

exec("npm install -g live-server && live-server --port=$PORT --no-browser", (error, data, getter) => {
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