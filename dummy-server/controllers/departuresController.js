import departuresService from '../services/departuresService.js';

const { getDeparturesService } = departuresService();

const departuresController = () => {
    return {
        getDeparturesController: async (req, res) => {
          const departuresData = await getDeparturesService();
          res.status(departuresData.status).json(departuresData.departures);
        },
        setDeparturesController: () => {

        },
        deleteDeparturesController: () => {

        },
        updateDeparturesController: () => {
          
        }
    };
};

export default departuresController;
