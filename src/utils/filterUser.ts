import type { typeStorageTask, typeTask } from "@/types"

export const filterUser = ({id, data}:{id: number, data:typeStorageTask[]}) => {
    const result = data.find((dt:typeStorageTask) => dt.key === id)
    return result
}

export const filterDetail = ({idUser, id, data}:{idUser: number, id: number, data:typeStorageTask[]}) => {
    const searchTaskUser:any = data.find((dt:typeStorageTask) => dt.key === idUser)
    const searchTaskDetail = searchTaskUser?.storage.find((dt:typeTask) => dt.id === id)
    return {searchTaskUser,searchTaskDetail }
}