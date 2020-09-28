const initialState = {
    nickname: '',
    avatar: '',
    nome: '',
    email: '',
    lugar: '',
    nseguidores: '',
    nseguindo: '',
    nrepos: '',
    bio: '',
    repos: '',
    seguidores: '',
    seguindo: '',
}

const AuthReducer = (state = [], action) => {
    
    // if(state.length == 0){
    //     return initialState;
    // }
    //nick
    if(action.type == 'editNickName'){
        return{
            ...state, nickname: action.payload.nickname
        };
    }
    //foto
    if(action.type == 'editAvatar'){
        return{
            ...state, avatar: action.payload.avatar
        };
    }
    //nome
    if(action.type == 'editNome'){
        return{
            ...state, nome: action.payload.nome
        };
    }
    //email
    if(action.type == 'editEmail'){
        return{
            ...state, email: action.payload.email
        };
    }    
    //localização
    if(action.type == 'editLocal'){
        return{
            ...state, lugar: action.payload.lugar
        };
    }

    //nseguidores
    if(action.type == 'editNSeguidores'){
        return{
            ...state, nseguidores: action.payload.nseguidores
        };
    }

    //nseguindo
    if(action.type == 'editNSeguindo'){
        return{
            ...state, nseguindo: action.payload.nseguindo
        };
    }

    //nrepositorios
    if(action.type == 'editNRepos'){
        return{
            ...state, nrepos: action.payload.nrepos
        };
    }

    //bio
    if(action.type == 'editBio'){
        return{
            ...state, bio: action.payload.bio
        };
    }

    //url para repositorios
    if(action.type == 'editRepos'){
        return{
            ...state, repos: action.payload.repos
        };
    }

    //url para seguidores
    if(action.type == 'editSeguidores'){
        return{
            ...state, seguidores: action.payload.seguidores
        };
    }

    //url para seguindo
    if(action.type == 'editSeguindo'){
        return{
            ...state, seguindo: action.payload.seguindo
        }; 
    }


    return state;
};

export default AuthReducer;