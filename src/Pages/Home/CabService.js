import axios from "axios";

const viewCabsOfTypeSedan = 'http://localhost:9090/cab/viewCabsOfType/sedan'

class CabService {

    getCabs(){
        return axios.get(viewCabsOfTypeSedan);
    }

}

export default new CabService();