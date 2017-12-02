export default class Reqs {

	baseUrl = 'http://192.168.0.13:8080/lumberAPI/api'

	get(route, headers) {
		let conf = {
			method: 'GET'
		}

		if(headers) {
			conf['headers'] = headers
		}

		return fetch(this.baseUrl+route, conf)
		  	.then((response : any) => 
		  		response.json()
		  	)
	}

	post(route, content, headers) {
		let conf = {
			method: 'POST',
			body: JSON.stringify(content),
			headers: {}
		}

		if(headers) {
			conf['headers'] = headers
		}

		conf.headers['Content-Type'] = 'application/json'

		return fetch(this.baseUrl+route, conf)
			.then(response => 
				response.json()
			)
	}
}