import axios from 'axios';

const fetchIndustryImagesAPI = (payload, success, error) => {
    console.log(payload);
    axios.get(`/industry/${payload.major}/1153`).then(
        response => success(response.data),
        response => error(response)
    );
};

export default {
    fetchIndustryImagesAPI,
}