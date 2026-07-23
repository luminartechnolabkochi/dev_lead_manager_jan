export async function leadAddApi(){

        let url = "http://127.0.0.1:8000/api/leads/"
        let payLoad=lead
        let headers = {

            "Content-Type":"application/json"
        }

        let response = await axios.post(url,payLoad,{headers})
        console.log(response);
        
    }