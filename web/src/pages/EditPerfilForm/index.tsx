import React, {useState, FormEvent, useEffect}  from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import backgroundImage from '../../assets/images/background-perfil.svg';
import cameraIcon from '../../assets/images/icons/camera-info.svg';

import './styles.css';
import api from '../../services/api';
import proffyIcon from '../../assets/images/icons/user-perfil.svg'

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [avatar, setAvatar] = useState(proffyIcon);
    const [email, setEmail] = useState('');

// CRIAR FUNÇÃO PARA RECUPERAR OS DADOS DO USUÁRIO NOS CAMPOS DE INPUT E A IMAGEM ATUAL

    const user_id = '1'

// CRIAR FUNÇÃO DE ATUALIZAÇÃO DOS DADOS DO USUÁRIO
    function handleUpdateUsuario(e: FormEvent ) {
        e.preventDefault();
        // let token = getToken();
        // return alert(token);

        api.post('updatePerfilUsuario', {
            user_id,
            name,
            surname,
            avatar,
            email,
        }).then( () => {
            // alert(console.log(token));
            
            history.push('/user-updated-notification');
        }).catch( () => {
            alert('Erro na atualização')
            })

    }

// CRIAR FUNÇÃO P/ ATUALIZAR IMAGEM, TORNAR O CAMPO UM INPUT E LIDAR COM ISSO NO BANCO

    function infoImage() {
        return alert('Lembre-se: para alterar sua foto de perfil, deve informar a URL da imagem que deseja no campo "Avatar".')
    }


    useEffect( () => {
        async function searchUsuario() {

            const response = await api.get('getUsuarioById', {
                params: {user_id}
            });
            setName(response.data[0].name);
            setSurname(response.data[0].surname);
            setAvatar(response.data[0].avatar);
            setEmail(response.data[0].email);
        }
    
        searchUsuario();
    
    }, []);

    return (
        <div id="page-edit-perfil-form" className="container">
            <PageHeader 
                pageTitle='Meu perfil'
                returnTo="/list-classes"
            >
            <img className="background-image" src={backgroundImage} alt="background"/>
            </PageHeader>
                <div className="image-perfil">
                    <img src={avatar} alt=""/>
                    <div className="camera-icon">
                        <img onClick={infoImage} src={cameraIcon} alt=""/>
                    </div>
                </div>
                    <strong>Proffy teste</strong>

            <main>
                <form onSubmit={handleUpdateUsuario}>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input 
                        name="name" 
                        label="Nome"
                        value={name}
                        onChange={(e) => {setName(e.target.value)} }
                        required
                    />

                    <Input 
                        name="surname" 
                        label="Sobrenome"
                        value={surname}
                        onChange={(e) => {setSurname(e.target.value)} }
                        required
                    />

                     <Input 
                        name="avatar" 
                        label="Avatar"
                        value={avatar}
                        onChange={(e) => {setAvatar(e.target.value)} }
                        required
                    />

                    <Input 
                        name="email" 
                        label="E-mail"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)} }
                        required
                    />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Verifique todos os dados apresentados.
                    </p>
                    <button type="submit">
                        Salvar alterações
                    </button>
                </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;