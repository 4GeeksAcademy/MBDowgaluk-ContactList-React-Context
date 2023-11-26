const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			baseUrl: 'https://playground.4geeks.com/apis/fake/contact',
			agenda: 'Merlina',
			user:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });

				
			},
			getContacts: async () =>{
				const url = getStore().baseUrl + '/agenda/' + getStore().agenda;
				const options = {
					method: 'GET',
				};
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					console.log(data);
					setStore({user: data});
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			createContact: async(newContact) =>{
				const url = getStore().baseUrl;
				const options = {
					method: "POST",
            		headers: {
                		"Content-Type": "application/json",
            		},
            		body: JSON.stringify(newContact)
				}
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					getActions().getContacts();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			actualiceContact: async (contact, id) =>{
				const url = getStore().baseUrl + '/' + id;
				const options = {
					method: 'PUT',
            		headers: {
                		"Content-Type": "application/json",
            		},
            		body: JSON.stringify(contact)
				}
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					getActions().getContacts();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			deleteAgenda: async() =>{
				const url = getStore().baseUrl + '/agenda/' + getStore().agenda;
        		const options = {
            		method: 'DELETE',
        		};
        		const response = await fetch(url, options);
        		if (response.ok){
            		const data = await response.json();
            		console.log(data);
					setStore({user: []});
					/*getActions().getContacts();*/
				} else {
           			 console.log('Error: ', response.status, response.statusText)
        		}
				
			},
			deleteContact: async(id) =>{
				const url = getStore().baseUrl + '/' + id;
        		const options = {
            		method: "DELETE"
        		};
        		const response = await fetch(url, options);
        		if (response.ok){
            		const data = await response.json();
            		console.log(data);
					getActions().getContacts();
				} else {
           			 return ('Error: ', response.status, response.statusText)
        		}
			}

		}
	};
};

export default getState;
