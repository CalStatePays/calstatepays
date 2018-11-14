const fetchIndustriesAPI = (payload, success, error) => {
    window.axios.get(`api/industry/${payload.majorId}/${payload.university}`)
        .then(
            response => {
                success(response.data);
            },
            ).catch(
            failure=>{ 
                error(failure.response.data)}
        );
}
const fetchIndustryMajorsByFieldAPI = (payload, success, error) => {
    window.axios.get(`api/major/hegis-codes/${payload.schoolId}/${payload.fieldOfStudyId}`).then(
        response => success(response.data),
        response => error(response)
    );
};

export default {
    fetchIndustriesAPI,
    fetchIndustryMajorsByFieldAPI
}