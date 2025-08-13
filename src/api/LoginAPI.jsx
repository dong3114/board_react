import BasicAPI from "./BasicAPI";

export const Member = {
    GetInfo: async (memberId) => {
        return BasicAPI.get(`/member/${memberId}`)
            .then((res) => res)
            .catch((err) => err);
    },
    
}