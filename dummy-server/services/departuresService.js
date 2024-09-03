import { getAll } from '../db/mysql.js'

const departuresService = () => {
    const service = {
        getDeparturesService: async () => {
            const departures = await getAll('departures');
            return { status: 200, departures };
        }
    };
    return service;
};

export default departuresService;