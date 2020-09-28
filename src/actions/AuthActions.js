export const editNickName = (nickname) =>{
    return{
        type: 'editNickName',
        payload: {
            nickname: nickname
        }
    };
};

export const editAvatar = (avatar) => {
    return{
        type: 'editAvatar',
        payload:{
            avatar: avatar
        }
    };
};

export const editNome = (nome) => {
    return{
        type: 'editNome',
        payload:{
            nome: nome
        }
    };
};

export const editEmail = (email) => {
    return{
        type: 'editEmail',
        payload:{
            email: email
        }
    };
};

export const editLocal = (lugar) => {
    return{
        type: 'editLocal',
        payload:{
            lugar: lugar
        }
    };
};

export const editNSeguidores = (nseguidores) =>{
    return{
        type: 'editNSeguidores',
        payload:{
            nseguidores: nseguidores
        }
    };
};

export const editNSeguindo = (nseguindo) =>{
    return{
        type: 'editNSeguindo',
        payload:{
            nseguindo: nseguindo
        }
    };
};

export const editNRepos = (nrepos) =>{
    return{
        type: 'editNRepos',
        payload:{
            nrepos: nrepos
        }
    };
};

export const editBio = (bio) =>{
    return{
        type: 'editBio',
        payload:{
            bio: bio
        }
    };
};

export const editRepos = (repos) =>{
    return{
        type: 'editRepos',
        payload:{
            repos: repos
        }
    };
};

export const editSeguidores = (seguidores) =>{
    return{
        type: 'editSeguidores',
        payload:{
            seguidores: seguidores
        }
    };
};

export const editSeguindo = (seguindo)=>{
    return{
        type: 'editSeguindo',
        payload:{
            seguindo: seguindo
        }
    };
};

