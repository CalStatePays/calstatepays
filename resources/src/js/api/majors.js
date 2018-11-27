
const fetchMajorsAPI = (payload, success, error) => {
    window.axios.get(`api/major/hegis-codes/university/${payload}`).then(
        response => success(response.data),
    ).catch(
        failure=>{ 
                error(failure.response.data.message)
        }
    );
}

const fetchFieldOfStudiesAPI = (success, error) => {
    window.axios.get(`api/major/field-of-study`).then(
        response => success(response.data),
         
    ).catch(
        failure=>{ 
                error(failure.response.data.message)
        }
    );
};

const fetchUpdatedMajorsByFieldAPI = (payload, success, error) => {
    window.axios.get(`api/major/hegis-codes/${payload.school}/${payload.form.fieldOfStudyId}`).then(
        response => success(response.data),    
    ).catch(
        failure=>{ error(failure.response.data.message)}
    );
};

const fetchMajorDataAPI = (payload, success, error) => {
    window.axios.get(`api/major/${payload.form.majorId}/${payload.school}`).then(
        response => success(response.data),
    ).catch(
        failure=>{
            if(failure.response.status == 400){
            error(failure.response.data.major[0])
        }else{
            error(failure.response.data.message)
        }
    }
    );
}

const fetchUniversitiesAPI = (success, error) => {
    window.axios.get(`api/university`).then(
        response => success(response.data)
    ).catch(
        failure=>{ error(failure.response.data.message)}
    );
}
const fetchIndustryImagesAPI = (payload, success, error) => {
    window.axios.get(`api/industry/images/${payload.form.majorId}/${payload.school}`).then(
        response => {
        success(response.data)
    },   
    ).catch(
        failure=>{error(failure.response)}
    );
};

export default {
    fetchMajorsAPI,
    fetchFieldOfStudiesAPI,
    fetchUpdatedMajorsByFieldAPI,
    fetchMajorDataAPI,
    fetchUniversitiesAPI,
    fetchIndustryImagesAPI
}