import React, {useState, FormEvent}  from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import backgroundImage from '../../assets/images/background-perfil.svg';
import cameraIcon from '../../assets/images/icons/camera.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

// CRIAR FUNÇÃO PARA RECUPERAR OS DADOS DO USUÁRIO NOS CAMPOS DE INPUT E A IMAGEM ATUAL

// CRIAR FUNÇÃO DE ATUALIZAÇÃO DOS DADOS DO USUÁRIO

    function handleUpdateUsuario(e: FormEvent ) {
    //     e.preventDefault();

    //     api.post('classes', {
    //         name,
    //         surname,
    //         email,
    //     }).then( () => {
    //         // alert('Atualização de dados realizado com sucesso');
            
    //         history.push('/classes-created-notification');
    //     }).catch( () => {
    //         alert('Erro no cadastro')
            // })

    }

// CRIAR FUNÇÃO P/ ATUALIZAR IMAGEM, TORNAR O CAMPO UM INPUT E LIDAR COM ISSO NO BANCO

    function updateImage() {
        return alert('Abrir Input pra permitir o envio da imagem');
    }

    return (
        <div id="page-edit-perfil-form" className="container">
            <PageHeader 
                pageTitle='Meu perfil'
                returnTo="/list-classes"
            >
            <img className="background-image" src={backgroundImage} alt="background"/>
            </PageHeader>
                <div className="image-perfil">
                    <img src="https://avatars3.githubusercontent.com/u/40838230?s=460&u=c07951c74add98296f80181d8cacaa6c698154e3&v=4" alt=""/>
                    <div className="camera-icon">
                        <img onClick={updateImage} src={cameraIcon} alt=""/>
                    </div>
                </div>
                    <strong>Proffy teste</strong>

            <main>
                <form onSubmit={handleUpdateUsuario}>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input 
                        name="name" 
                        label="Nome completo"
                        value={name}
                        onChange={(e) => {setName(e.target.value)} }
                    />

                    <Input 
                        name="surname" 
                        label="Sobrenome"
                        value={surname}
                        onChange={(e) => {setSurname(e.target.value)} }
                    />

                    <Input 
                        name="email" 
                        label="E-mail"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)} }
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